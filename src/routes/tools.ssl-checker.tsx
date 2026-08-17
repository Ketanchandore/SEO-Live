import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { ToolPanel } from "@/components/ToolPanel";
import { ToolHeader, Card3D } from "@/components/Card3D";
import { fetchUrl, fetchSsl } from "@/lib/fetch-url.functions";
import { Loader2, ShieldCheck, ShieldAlert, Lock, AlertTriangle, CalendarDays, Search, CheckCircle2, Server } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/tools/ssl-checker")({
  loader: () => getToolContent("ssl-checker"),
  head: () => toolHead("ssl-checker"),
  component: Page,
});

function Page() {
  const fn = useServerFn(fetchUrl);
  const sslFn = useServerFn(fetchSsl);
  const [url, setUrl] = useState("");
  const [out, setOut] = useState<{ https: boolean; hsts: string; mixed: boolean; status: number; finalUrl: string; cert: any } | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const run = async () => {
    let u = url.trim(); if (!u) return;
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    setLoading(true); setErr(""); setOut(null);
    try {
      const r = await fn({ data: { url: u } });
      if (!r.ok && r.status === 0) { setErr("Could not connect to the server. Check if the URL is valid."); return; }

      let cert = null;
      try {
        const urlObj = new URL(r.finalUrl);
        if (urlObj.protocol === "https:") {
          cert = await sslFn({ data: { hostname: urlObj.hostname } });
        }
      } catch (e) { /* ignore cert errors */ }
      
      const mixed = /["'](http:\/\/[^"']+)["']/i.test(r.html) && r.finalUrl.startsWith("https://");
      const h = r.headers as Record<string, string>;
      setOut({ https: r.finalUrl.startsWith("https://"), hsts: h["strict-transport-security"] || "", mixed, status: r.status, finalUrl: r.finalUrl, cert });
    } catch (e) {
      setErr((e as Error).message);
    } finally { setLoading(false); }
  };

  const score = useMemo(() => {
    if (!out) return null;
    let s = 100;
    if (!out.https) return 0;
    if (!out.cert || out.cert.daysLeft <= 0) return 0;
    if (!out.hsts) s -= 20;
    if (out.mixed) s -= 30;
    if (out.cert.daysLeft < 30) s -= 20;
    else if (out.cert.daysLeft < 90) s -= 5;
    return Math.max(10, s);
  }, [out]);

  const grade = score === null ? "" : score >= 90 ? "A" : score >= 70 ? "B" : score >= 50 ? "C" : "F";
  const gradeColor = grade === "A" ? "text-success" : grade === "B" || grade === "C" ? "text-warning" : "text-destructive";

  return (
    <ToolPanel>
      <ToolHeader 
        title="Enterprise SSL & Security Checker" 
        badge="PRO"
        desc="Deep scan X.509 certificates, verify HSTS headers, and detect mixed-content risks." 
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
            {loading ? <Loader2 className="size-5 animate-spin" /> : <Search className="size-5" />}
            {loading ? "Scanning..." : "Audit Security"}
          </button>
        </div>
        {err && <div className="mt-4 p-4 rounded-lg border border-destructive bg-destructive/10 text-destructive text-sm flex items-center gap-2"><AlertTriangle className="size-4" />{err}</div>}
      </Card3D>

      {out && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card3D tilt={false} className="p-6 flex flex-col justify-center items-center text-center col-span-1 md:col-span-1 border-border/50 bg-gradient-to-b from-surface to-surface-2 shadow-lg">
               <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Security Grade</div>
               <div className={`text-8xl font-display font-black ${gradeColor} drop-shadow-lg`}>{grade}</div>
               <div className="mt-4 flex items-center gap-2">
                 {out.https && out.cert && out.cert.valid ? (
                   <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/15 text-success text-xs font-bold uppercase tracking-wider"><ShieldCheck className="size-4" /> Secure</div>
                 ) : (
                   <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/15 text-destructive text-xs font-bold uppercase tracking-wider"><ShieldAlert className="size-4" /> Vulnerable</div>
                 )}
               </div>
            </Card3D>

            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-surface rounded-xl p-5 border border-border/50 shadow-sm flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-muted-foreground"><Server className="size-4" /><span className="text-xs uppercase tracking-wider font-semibold">Connection Protocol</span></div>
                <div className="text-2xl font-bold">{out.https ? "HTTPS (Encrypted)" : "HTTP (Plaintext)"}</div>
                <div className={`text-xs mt-1 font-medium ${out.https ? "text-success" : "text-destructive"}`}>{out.https ? "Traffic is secure" : "Traffic can be intercepted"}</div>
              </div>
              <div className="bg-surface rounded-xl p-5 border border-border/50 shadow-sm flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-muted-foreground"><Lock className="size-4" /><span className="text-xs uppercase tracking-wider font-semibold">Strict Transport (HSTS)</span></div>
                <div className="text-2xl font-bold">{out.hsts ? "Enforced" : "Missing"}</div>
                <div className={`text-xs mt-1 font-medium ${out.hsts ? "text-success" : "text-warning"}`}>{out.hsts ? "Prevents downgrade attacks" : "Vulnerable to stripping"}</div>
              </div>
              <div className="bg-surface rounded-xl p-5 border border-border/50 shadow-sm flex flex-col justify-center col-span-2">
                <div className="flex items-center gap-2 mb-2 text-muted-foreground"><AlertTriangle className="size-4" /><span className="text-xs uppercase tracking-wider font-semibold">Mixed Content Risk</span></div>
                <div className="text-2xl font-bold">{out.mixed ? "HTTP Assets Detected" : "No Mixed Content"}</div>
                <div className={`text-xs mt-1 font-medium ${out.mixed ? "text-destructive" : "text-success"}`}>{out.mixed ? "Scripts/images loaded via HTTP on HTTPS page" : "All assets loaded securely"}</div>
              </div>
            </div>
          </div>

          {out.cert && (
            <Card3D tilt={false} className="p-0 overflow-hidden border-border/50 shadow-xl">
              <div className="p-5 border-b border-border/50 bg-surface flex items-center justify-between">
                <h3 className="font-display text-lg font-bold flex items-center gap-2"><Lock className="size-5 text-primary" /> Certificate Details</h3>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-8">
                
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Issuer Authority</div>
                    <div className="text-lg font-bold">{out.cert.issuer}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Valid From</div>
                      <div className="font-mono text-sm">{new Date(out.cert.validFrom).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Valid To</div>
                      <div className="font-mono text-sm">{new Date(out.cert.validTo).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center border-l border-border/50 pl-8">
                   <div className="relative size-32">
                     <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                         <Pie
                           data={[{value: Math.max(0, out.cert.daysLeft)}, {value: Math.max(0, 365 - out.cert.daysLeft)}]}
                           cx="50%" cy="50%" innerRadius={45} outerRadius={60}
                           startAngle={90} endAngle={-270}
                           dataKey="value" stroke="none"
                         >
                           <Cell fill={out.cert.daysLeft > 30 ? "hsl(var(--success))" : out.cert.daysLeft > 0 ? "hsl(var(--warning))" : "hsl(var(--destructive))"} />
                           <Cell fill="hsl(var(--muted))" opacity={0.2} />
                         </Pie>
                       </PieChart>
                     </ResponsiveContainer>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-2xl font-bold font-display">{Math.max(0, out.cert.daysLeft)}</span>
                       <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Days Left</span>
                     </div>
                   </div>
                </div>

              </div>
            </Card3D>
          )}
          
        </div>
      )}
    </ToolPanel>
  );
}
