import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { ToolPanel } from "./tools";
import { ToolHeader } from "@/components/Card3D";
import { UrlTool, Section, KV } from "@/components/UrlTool";
import { getMeta } from "@/lib/html-analyzer";
import { useMemo } from "react";

export const Route = createFileRoute("/tools/mobile-checker")({
  loader: () => getToolContent("mobile-checker"),
  head: () => toolHead("mobile-checker"),
  component: () => (
    <ToolPanel>
      <ToolHeader title="Mobile-Friendly Checker" desc="Heuristic mobile readiness: viewport meta, responsive units, tap target hints." />
      <UrlTool>{(r) => <View html={r.html} />}</UrlTool>
    </ToolPanel>
  ),
});

function View({ html }: { html: string }) {
  const m = useMemo(() => getMeta(html), [html]);
  const initialScale = /initial-scale=1/.test(m.viewport);
  const usesMediaQueries = /@media[^{]+\((?:max-width|min-width)/i.test(html);
  const tap = /touch-action|tap-highlight|user-select/i.test(html);
  const responsiveImg = /srcset=|sizes=/i.test(html);
  const fixedPx = (html.match(/width\s*[:=]\s*"?\d{4,}px/gi) || []).length;
  const smallFonts = (html.match(/font-size\s*:\s*(?:[1-9]|1[0-1])px/gi) || []).length;
  const tapTargets = /(?:padding|margin)\s*:\s*(?:[1-9]\d*px|[1-9]rem|[1-9]em)/i.test(html);
  
  const checks = [!!m.viewport, initialScale, usesMediaQueries, responsiveImg, fixedPx === 0, smallFonts === 0, tapTargets];
  const score = Math.round(checks.filter(Boolean).length * (100 / checks.length));

  return (
    <>
      <Section title={`Mobile score: ${score}/100`}>
        <div className="h-3 bg-secondary rounded-full overflow-hidden mb-3">
          <div className={`h-full ${score >= 80 ? "bg-success" : score >= 60 ? "bg-warning" : "bg-destructive"}`} style={{ width: `${score}%` }} />
        </div>
        <KV k="Viewport meta" v={m.viewport} ok={!!m.viewport} />
        <KV k="initial-scale=1" v={initialScale ? "yes" : "no"} ok={initialScale} />
        <KV k="Media queries" v={usesMediaQueries ? "detected" : "none"} ok={usesMediaQueries} />
        <KV k="Responsive images" v={responsiveImg ? "srcset/sizes used" : "none"} ok={responsiveImg} />
        <KV k="Large fixed widths" v={fixedPx === 0 ? "none" : `${fixedPx} hard-coded`} ok={fixedPx === 0} />
        <KV k="Small font sizes (<12px)" v={smallFonts === 0 ? "none" : `${smallFonts} found`} ok={smallFonts === 0} />
        <KV k="Touch target spacing" v={tapTargets ? "Padding/margin detected" : "None"} ok={tapTargets} />
        <KV k="Tap optimization" v={tap ? "yes" : "no"} />
      </Section>
    </>
  );
}
