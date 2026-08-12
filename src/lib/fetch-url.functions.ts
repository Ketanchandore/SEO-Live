import { createServerFn } from "@tanstack/react-start";
import * as tls from "tls";

// In-memory rate limiter to prevent IP bans from target servers
const domainThrottle = new Map<string, number>();
const THROTTLE_MS = 2000; // 2 seconds between requests to the same domain

async function throttleDomain(hostname: string) {
  const lastFetch = domainThrottle.get(hostname) || 0;
  const now = Date.now();
  const waitTime = THROTTLE_MS - (now - lastFetch);
  if (waitTime > 0) {
    await new Promise((r) => setTimeout(r, waitTime));
  }
  domainThrottle.set(hostname, Date.now());
}

export type FetchResult = {
  ok: boolean;
  status: number;
  statusText: string;
  finalUrl: string;
  redirectChain: { url: string; status: number }[];
  headers: Record<string, string>;
  html: string;
  bytes: number;
  durationMs: number;
  contentType: string;
  error?: string;
};

function validate(input: unknown): { url: string; method?: "GET" | "HEAD"; maxBytes?: number } {
  const d = input as { url?: unknown; method?: unknown; maxBytes?: unknown };
  if (typeof d.url !== "string") throw new Error("url required");
  const url = d.url.trim();
  if (!/^https?:\/\//i.test(url)) throw new Error("url must start with http(s)://");
  return {
    url,
    method: d.method === "HEAD" ? "HEAD" : "GET",
    maxBytes: typeof d.maxBytes === "number" ? Math.min(d.maxBytes, 5_000_000) : 2_000_000,
  };
}

/** Fetch a URL server-side and return HTML+headers+redirect chain. */
export const fetchUrl = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }) => {
    const started = Date.now();
    const chain: { url: string; status: number }[] = [];
    let current = data.url;
    let lastResp: Response | null = null;

    try {
      for (let i = 0; i < 8; i++) {
        const urlObj = new URL(current);
        await throttleDomain(urlObj.hostname);

        const resp = await fetch(current, {
          method: data.method,
          redirect: "manual",
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; SEOAcademysBot/1.0; +https://seoacademys.com/bot)",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          },
          signal: AbortSignal.timeout(15_000),
        });
        chain.push({ url: current, status: resp.status });
        if (resp.status >= 300 && resp.status < 400) {
          const loc = resp.headers.get("location");
          if (!loc) { lastResp = resp; break; }
          current = new URL(loc, current).toString();
          continue;
        }
        lastResp = resp;
        break;
      }
    } catch (e) {
      return {
        ok: false, status: 0, statusText: "Network error",
        finalUrl: current, redirectChain: chain, headers: {}, html: "",
        bytes: 0, durationMs: Date.now() - started, contentType: "",
        error: (e as Error).message,
      } satisfies FetchResult;
    }

    if (!lastResp) {
      return {
        ok: false, status: 0, statusText: "No response",
        finalUrl: current, redirectChain: chain, headers: {}, html: "",
        bytes: 0, durationMs: Date.now() - started, contentType: "",
        error: "Too many redirects",
      } satisfies FetchResult;
    }

    const headers: Record<string, string> = {};
    lastResp.headers.forEach((v, k) => { headers[k] = v; });
    const contentType = headers["content-type"] || "";

    let html = "";
    let bytes = 0;
    if (data.method === "GET" && /text|xml|html|json|javascript|css/i.test(contentType)) {
      const buf = await lastResp.arrayBuffer();
      bytes = buf.byteLength;
      html = new TextDecoder("utf-8", { fatal: false }).decode(buf.slice(0, data.maxBytes ?? 2_000_000));
    } else {
      // for binary/HEAD use content-length
      bytes = Number(headers["content-length"] || 0);
    }

    return {
      ok: lastResp.ok,
      status: lastResp.status,
      statusText: lastResp.statusText,
      finalUrl: current,
      redirectChain: chain,
      headers,
      html,
      bytes,
      durationMs: Date.now() - started,
      contentType,
    } satisfies FetchResult;
  });

export const fetchSsl = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => {
    const d = input as { hostname?: unknown };
    if (typeof d.hostname !== "string") throw new Error("hostname required");
    return { hostname: d.hostname.trim() };
  })
  .handler(async ({ data }) => {
    await throttleDomain(data.hostname);

    return new Promise<{ valid: boolean; issuer: string; validFrom: string; validTo: string; daysLeft: number } | null>((resolve) => {
      try {
        const socket = tls.connect(443, data.hostname, { servername: data.hostname, rejectUnauthorized: false }, () => {
          const cert = socket.getPeerCertificate();
          socket.end();
          
          if (!cert || !cert.issuer) {
            resolve(null);
            return;
          }
          
          const validTo = new Date(cert.valid_to);
          const daysLeft = Math.floor((validTo.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
          
          resolve({
            valid: socket.authorized,
            issuer: cert.issuer.O || cert.issuer.CN || "Unknown",
            validFrom: cert.valid_from,
            validTo: cert.valid_to,
            daysLeft,
          });
        });
        
        socket.setTimeout(5000);
        socket.on('timeout', () => { socket.destroy(); resolve(null); });
        socket.on('error', () => resolve(null));
      } catch {
        resolve(null);
      }
    });
  });
