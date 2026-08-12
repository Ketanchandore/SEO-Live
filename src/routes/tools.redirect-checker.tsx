import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { ToolPanel } from "./tools";
import { ToolHeader } from "@/components/Card3D";
import { UrlTool, Section, KV } from "@/components/UrlTool";

export const Route = createFileRoute("/tools/redirect-checker")({
  loader: () => getToolContent("redirect-checker"),
  head: () => toolHead("redirect-checker"),
  component: () => (
    <ToolPanel>
      <ToolHeader title="Redirect Checker" desc="Follow the redirect chain step-by-step (up to 8 hops)." />
      <UrlTool>{(r) => (
        <Section title={`${r.redirectChain.length} hop(s) to final URL`}>
          <div className="space-y-0 text-sm pl-1">
            {r.redirectChain.map((h, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <span className="font-mono text-xs px-1.5 py-0.5 rounded grad-primary text-primary-foreground min-w-[24px] text-center shadow-sm">{i+1}</span>
                  <span className={`font-mono font-bold px-2 py-0.5 rounded bg-surface-2 border border-border ${h.status >= 300 && h.status < 400 ? "text-warning" : h.status >= 400 ? "text-destructive" : "text-success"}`}>{h.status}</span>
                  <a href={h.url} target="_blank" rel="noreferrer" className="text-primary hover:underline truncate">{h.url}</a>
                </div>
                {i < r.redirectChain.length - 1 && (
                  <div className="h-6 ml-3 border-l-2 border-primary/30 border-dashed my-1" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <KV k="Final URL" v={r.finalUrl} ok={r.ok} />
            <KV k="Final status" v={`${r.status} ${r.statusText}`} ok={r.ok} />
          </div>
        </Section>
      )}</UrlTool>
    </ToolPanel>
  ),
});
