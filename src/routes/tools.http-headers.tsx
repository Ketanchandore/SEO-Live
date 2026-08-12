import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { ToolPanel } from "./tools";
import { ToolHeader } from "@/components/Card3D";
import { UrlTool, Section, KV } from "@/components/UrlTool";
import { CheckCircle2, XCircle } from "lucide-react";

const IMPORTANT = ["content-type","server","x-powered-by","strict-transport-security","content-security-policy","x-frame-options","x-content-type-options","referrer-policy","permissions-policy","cache-control","etag","last-modified","cf-ray","x-vercel-id","x-nf-request-id","content-encoding","vary"];

export const Route = createFileRoute("/tools/http-headers")({
  loader: () => getToolContent("http-headers"),
  head: () => toolHead("http-headers"),
  component: () => (
    <ToolPanel>
      <ToolHeader title="HTTP Header Checker" desc="Inspect every response header. Security headers highlighted." />
      <UrlTool>{(r) => {
        const keys = Array.from(new Set([...IMPORTANT, ...Object.keys(r.headers).sort()]));
        
        const secHeaders = [
          { k: "strict-transport-security", name: "HSTS" },
          { k: "content-security-policy", name: "Content-Security-Policy" },
          { k: "x-frame-options", name: "X-Frame-Options" },
          { k: "x-content-type-options", name: "X-Content-Type-Options" },
          { k: "referrer-policy", name: "Referrer-Policy" },
          { k: "permissions-policy", name: "Permissions-Policy" }
        ];
        const score = secHeaders.filter(h => r.headers[h.k]).length;
        
        return (
          <>
            <Section title={`Security Headers: ${score}/6`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-2">
                {secHeaders.map(h => {
                  const present = !!r.headers[h.k];
                  return (
                    <div key={h.k} className="flex items-center gap-2 text-sm p-3 rounded-md border border-border bg-surface-2">
                      {present ? <CheckCircle2 className="size-4 text-success" /> : <XCircle className="size-4 text-destructive" />}
                      <span className={present ? "" : "text-muted-foreground"}>{h.name}</span>
                    </div>
                  );
                })}
              </div>
            </Section>
            <Section title="Response headers">
              <table className="w-full text-sm"><tbody>
                {keys.filter(k => r.headers[k] !== undefined).map(k => (
                  <tr key={k} className="border-b border-border/60"><td className="py-1.5 pr-3 font-mono text-muted-foreground align-top">{k}</td><td className="py-1.5 break-all font-mono">{r.headers[k]}</td></tr>
                ))}
              </tbody></table>
            </Section>
          </>
        );
      }}</UrlTool>
    </ToolPanel>
  ),
});
