import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { ToolPanel } from "@/components/ToolPanel";
import { ToolHeader } from "@/components/Card3D";
import { UrlTool, Section, KV } from "@/components/UrlTool";

export const Route = createFileRoute("/tools/page-size")({
  loader: () => getToolContent("page-size"),
  head: () => toolHead("page-size"),
  component: () => (
    <ToolPanel>
      <ToolHeader title="Page Size Analyzer" desc="Breakdown of HTML, inline scripts, inline styles and referenced assets." />
      <UrlTool>{(r) => {
        const inlineJS = (r.html.match(/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi) || []).reduce((a,s)=>a+s.length,0);
        const inlineCSS = (r.html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || []).reduce((a,s)=>a+s.length,0);
        const scripts = (r.html.match(/<script\b[^>]*\bsrc=/gi) || []).length;
        const stylesheets = (r.html.match(/<link\b[^>]*rel=["']stylesheet/gi) || []).length;
        const images = (r.html.match(/<img\b/gi) || []).length;
        const rawSize = r.bytes;
        const h = r.headers as Record<string, string>;
        const networkSize = Number(h["content-length"]) || rawSize;
        const isCompressed = !!h["content-encoding"];
        const ratio = (rawSize > 0 && networkSize < rawSize) ? (100 - (networkSize / rawSize) * 100).toFixed(0) + "% savings" : "None";
        const lcp = (r.durationMs / 1000 + (networkSize / 1024 / 500)).toFixed(1); // Assume 500KB/s network speed

        return (
          <Section title="Breakdown">
            <KV k="Total HTML size (raw)" v={`${(rawSize/1024).toFixed(1)} KB`} ok={rawSize < 1_500_000} />
            <KV k="Network payload size" v={`${(networkSize/1024).toFixed(1)} KB`} />
            <KV k="Content-Encoding" v={h["content-encoding"] || "none"} />
            <KV k="Compression ratio" v={isCompressed ? ratio : "N/A"} />
            <KV k="Inline JS" v={`${(inlineJS/1024).toFixed(1)} KB`} />
            <KV k="Inline CSS" v={`${(inlineCSS/1024).toFixed(1)} KB`} />
            <KV k="External scripts" v={String(scripts)} />
            <KV k="External stylesheets" v={String(stylesheets)} />
            <KV k="Images referenced" v={String(images)} />
            <KV k="Server response time" v={`${r.durationMs} ms`} ok={r.durationMs < 1000} />
            <KV k="Estimated LCP (3G)" v={`${lcp}s`} ok={Number(lcp) < 2.5} />
          </Section>
        );
      }}</UrlTool>
    </ToolPanel>
  ),
});
