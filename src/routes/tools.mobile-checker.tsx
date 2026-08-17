import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ToolPanel } from "@/components/ToolPanel";
import { ToolHeader, Card3D } from "@/components/Card3D";
import { fetchUrl } from "@/lib/fetch-url.functions";
import { Loader2, Smartphone, Search, CheckCircle2, AlertTriangle, MonitorPlay, Zap, LayoutTemplate } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/tools/mobile-checker")({
  loader: () => getToolContent("mobile-checker"),
  head: () => toolHead("mobile-checker"),
  component: Page,
});

function Page() {
  const fn = useServerFn(fetchUrl);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [result, setResult] = useState<{
    viewport: boolean;
    domNodes: number;
    scripts: number;
    images: number;
    touchTargets: number;
    finalUrl: string;
    score: number;
  } | null>(null);

  const run = async () => {
    let u = url.trim(); if (!u) return;
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    setLoading(true); setErr(""); setResult(null);
    try {
      // Fetch pretending to be a mobile bot
      const r = await fn({ data: { url: u, mobile: true } });
      if (!r.ok) { setErr(r.error || `Fetch failed: ${r.status}`); return; }

      const viewport = /<meta[^>]+name=["']viewport["'][^>]*>/i.test(r.html);
      const domNodes = (r.html.match(/<[a-z0-9]+/gi) || []).length;
      const scripts = (r.html.match(/<script/gi) || []).length;
      const images = (r.html.match(/<img/gi) || []).length;
      const touchTargets = (r.html.match(/<(a|button)/gi) || []).length;

      let s = 100;
      if (!viewport) s -= 40;
      if (domNodes > 1500) s -= 15;
      if (domNodes > 3000) s -= 15;
      if (scripts > 20) s -= 10;
      if (touchTargets < 5 && domNodes > 100) s -= 10; // Probably not interactive

      setResult({
        viewport,
        domNodes,
        scripts,
        images,
        touchTargets,
        finalUrl: r.finalUrl,
        score: Math.max(10, s)
      });

    } catch (e) {
      setErr((e as Error).message);
    } finally { setLoading(false); }
  };

  return (
    <ToolPanel>
      <ToolHeader 
        title="Mobile Usability & Speed Checker" 
        badge="ADVANCED"
        desc="Simulate Googlebot Smartphone to test viewport configuration, DOM depth, and mobile readiness." 
      />
      
      <Card3D tilt={false} className="p-5 mb-6 shadow-xl border-primary/20 bg-gradient-to-br from-surface to-surface-2">
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            value={url} 
            onChange={e=>setUrl(e.target.value)} 
            onKeyDown={e=>e.key==='Enter'&&run()} 
            placeholder="https://example.com" 
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none shadow-inner" 
          />
          <button onClick={run} disabled={loading || !url.trim()} className="px-6 py-3 rounded-lg grad-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 hover:scale-105 transition-transform">
            {loading ? <Loader2 className="size-5 animate-spin" /> : <Smartphone className="size-5" />}
            {loading ? "Testing..." : "Test Mobile Usability"}
          </button>
        </div>
        {err && <div className="mt-4 p-4 rounded-lg border border-destructive bg-destructive/10 text-destructive text-sm flex items-center gap-2"><AlertTriangle className="size-4" />{err}</div>}
      </Card3D>

      {result && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="grid md:grid-cols-3 gap-6">
             <Card3D tilt={false} className="p-6 flex flex-col justify-center items-center text-center col-span-1 md:col-span-1 border-border/50 bg-gradient-to-b from-surface to-surface-2 shadow-lg">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Mobile Score</div>
                <div className="relative size-32 my-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[{value: result.score}, {value: 100 - result.score}]}
                        cx="50%" cy="50%" innerRadius={45} outerRadius={60}
                        startAngle={90} endAngle={-270}
                        dataKey="value" stroke="none"
                      >
                        <Cell fill={result.score >= 80 ? "hsl(var(--success))" : result.score >= 50 ? "hsl(var(--warning))" : "hsl(var(--destructive))"} />
                        <Cell fill="hsl(var(--muted))" opacity={0.2} />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-3xl font-bold font-display ${result.score >= 80 ? "text-success" : result.score >= 50 ? "text-warning" : "text-destructive"}`}>{result.score}</span>
                  </div>
                </div>
                {result.score >= 80 ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/15 text-success text-xs font-bold uppercase tracking-wider"><CheckCircle2 className="size-4" /> Page is usable on mobile</div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/15 text-destructive text-xs font-bold uppercase tracking-wider"><AlertTriangle className="size-4" /> Mobile usability issues</div>
                )}
             </Card3D>

             <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
               <div className="bg-surface rounded-xl p-5 border border-border/50 shadow-sm flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-2 text-muted-foreground"><LayoutTemplate className="size-4" /><span className="text-xs uppercase tracking-wider font-semibold">Viewport Meta Tag</span></div>
                 <div className="text-xl font-bold">{result.viewport ? "Configured" : "Missing"}</div>
                 <div className={`text-xs mt-1 font-medium ${result.viewport ? "text-success" : "text-destructive"}`}>{result.viewport ? "Scales correctly to device width" : "Page will shrink on mobile screens"}</div>
               </div>
               
               <div className="bg-surface rounded-xl p-5 border border-border/50 shadow-sm flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-2 text-muted-foreground"><MonitorPlay className="size-4" /><span className="text-xs uppercase tracking-wider font-semibold">DOM Size</span></div>
                 <div className="text-xl font-bold">{result.domNodes.toLocaleString()} elements</div>
                 <div className={`text-xs mt-1 font-medium ${result.domNodes > 1500 ? "text-warning" : "text-success"}`}>{result.domNodes > 1500 ? "Excessive DOM size slows down mobile scrolling" : "Optimal DOM depth"}</div>
               </div>

               <div className="bg-surface rounded-xl p-5 border border-border/50 shadow-sm flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-2 text-muted-foreground"><Zap className="size-4" /><span className="text-xs uppercase tracking-wider font-semibold">Render Blocking</span></div>
                 <div className="text-xl font-bold">{result.scripts} Script Tags</div>
                 <div className={`text-xs mt-1 font-medium ${result.scripts > 20 ? "text-warning" : "text-success"}`}>{result.scripts > 20 ? "High JavaScript payload. May delay TTI." : "Reasonable script count"}</div>
               </div>

               <div className="bg-surface rounded-xl p-5 border border-border/50 shadow-sm flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-2 text-muted-foreground"><Smartphone className="size-4" /><span className="text-xs uppercase tracking-wider font-semibold">Tap Targets</span></div>
                 <div className="text-xl font-bold">{result.touchTargets} Interactive Elements</div>
                 <div className={`text-xs mt-1 font-medium ${result.touchTargets < 5 ? "text-warning" : "text-success"}`}>{result.touchTargets < 5 ? "Very few links/buttons detected" : "Sufficient interactive elements"}</div>
               </div>
             </div>
          </div>

          <Card3D tilt={false} className="p-0 overflow-hidden border-border/50 shadow-xl flex flex-col items-center p-8 bg-surface-2/50">
             <div className="w-full max-w-sm rounded-[3rem] border-[8px] border-surface shadow-2xl overflow-hidden aspect-[9/19] bg-white relative">
                <div className="absolute top-0 inset-x-0 h-6 bg-surface z-10 rounded-b-xl mx-auto w-1/2 flex justify-center">
                  <div className="w-12 h-1.5 bg-border rounded-full mt-2" />
                </div>
                {/* Embedded Iframe Simulator */}
                <iframe src={result.finalUrl} className="w-full h-full border-none pt-6" title="Mobile Simulator" sandbox="allow-same-origin allow-scripts" />
             </div>
             <p className="mt-4 text-xs text-muted-foreground">Interactive Mobile Viewport Simulator (390x844px)</p>
          </Card3D>
          
        </div>
      )}
    </ToolPanel>
  );
}
