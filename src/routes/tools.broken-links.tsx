import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { ToolPanel } from "@/components/ToolPanel";
import { ToolHeader, Card3D } from "@/components/Card3D";
import { fetchUrl } from "@/lib/fetch-url.functions";
import { getLinks } from "@/lib/html-analyzer";
import { Loader2, Download, AlertCircle, Link2, Search, ExternalLink, Globe, Hash } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";

export const Route = createFileRoute("/tools/broken-links")({
  loader: () => getToolContent("broken-links"),
  head: () => toolHead("broken-links"),
  component: Page,
});

type LinkResult = {
  href: string;
  text: string;
  internal: boolean;
  nofollow: boolean;
  status: number;
  ok: boolean;
};

function Page() {
  const fn = useServerFn(fetchUrl);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [results, setResults] = useState<LinkResult[]>([]);
  const [err, setErr] = useState("");

  const run = async () => {
    let u = url.trim(); if (!u) return;
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    setLoading(true); setResults([]); setErr("");
    try {
      const main = await fn({ data: { url: u } });
      if (!main.ok) { setErr(main.error || `Fetch failed: ${main.status}`); return; }
      
      const all = getLinks(main.html, main.finalUrl).filter(l => /^https?:/i.test(l.href));
      
      // Deduplicate by href, keeping the first occurrence for anchor text
      const map = new Map<string, typeof all[0]>();
      for (const l of all) {
        if (!map.has(l.href)) map.set(l.href, l);
      }
      
      const unique = Array.from(map.values()).slice(0, 100); // Check up to 100 links
      if (unique.length === 0) {
        setErr("No valid http/https links found on the page.");
        return;
      }

      setProgress({ done: 0, total: unique.length });
      const out: LinkResult[] = [];
      const batch = 5;
      
      for (let i = 0; i < unique.length; i += batch) {
        if (i > 0) await new Promise(r => setTimeout(r, 500)); // Throttle batches
        const chunk = unique.slice(i, i + batch);
        const res = await Promise.all(chunk.map(async (l) => {
          try {
            const r = await fn({ data: { url: l.href, method: "HEAD" } });
            // If HEAD fails (some servers block HEAD), we might want to fallback to GET, but keeping simple for now.
            // Consider 405 Method Not Allowed as OK for HEAD requests sometimes, but let's stick to status > 0 && < 400
            const ok = r.status >= 200 && r.status < 400;
            return { ...l, status: r.status, ok };
          } catch { 
            return { ...l, status: 0, ok: false }; 
          }
        }));
        out.push(...res);
        setProgress({ done: out.length, total: unique.length });
        setResults([...out]); // Update UI progressively
      }
    } catch (e) {
      setErr((e as Error).message);
    } finally { 
      setLoading(false); 
    }
  };

  const exportCsv = () => {
    if (!results.length) return;
    const rows = [
      ["URL", "Status Code", "Status", "Anchor Text", "Type", "Rel"],
      ...results.map((r) => [r.href, r.status, r.ok ? "OK" : "Broken", r.text.trim() || "No text", !r.internal ? "External" : "Internal", r.nofollow ? "Nofollow" : "Dofollow"]),
    ];
    const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `link-audit-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const broken = results.filter(r => !r.ok);
  
  const statusData = useMemo(() => {
    const map = new Map<number, number>();
    results.forEach(r => {
      const code = r.status || 0;
      map.set(code, (map.get(code) || 0) + 1);
    });
    return Array.from(map.entries()).map(([name, value]) => ({ name: name === 0 ? "Timeout/ERR" : String(name), value })).sort((a,b) => b.value - a.value);
  }, [results]);

  const typeData = useMemo(() => {
    const ext = results.filter(r => !r.internal).length;
    const int = results.length - ext;
    return [{name: "External", value: ext}, {name: "Internal", value: int}].filter(d => d.value > 0);
  }, [results]);

  return (
    <ToolPanel>
      <ToolHeader 
        title="Comprehensive Broken Link Crawler" 
        badge="ADVANCED"
        desc="Audit up to 100 internal and external links. Visualize link profiles, status codes, and anchor text distribution." 
      />
      
      <Card3D tilt={false} className="p-5 mb-6 shadow-xl border-primary/20 bg-gradient-to-br from-surface to-surface-2">
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            value={url} 
            onChange={e=>setUrl(e.target.value)} 
            onKeyDown={e=>e.key==='Enter'&&run()} 
            placeholder="https://example.com/page-to-scan" 
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none shadow-inner" 
          />
          <button onClick={run} disabled={loading || !url.trim()} className="px-6 py-3 rounded-lg grad-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 hover:scale-105 transition-transform">
            {loading ? <Loader2 className="size-5 animate-spin" /> : <Search className="size-5" />}
            {loading ? "Crawling..." : "Start Deep Scan"}
          </button>
          {results.length > 0 && !loading && (
            <button onClick={exportCsv} className="px-6 py-3 rounded-lg border border-border bg-surface hover:bg-surface-2 text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
              <Download className="size-4" /> Export CSV
            </button>
          )}
        </div>
        
        {loading && progress.total > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">
              <span>Scanning connections...</span>
              <span>{Math.round((progress.done / progress.total) * 100)}%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-2 rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: `${(progress.done / progress.total) * 100}%` }} />
            </div>
          </div>
        )}
        {err && <div className="mt-4 p-4 rounded-lg border border-destructive bg-destructive/10 text-destructive text-sm flex items-center gap-2"><AlertCircle className="size-4" />{err}</div>}
      </Card3D>

      {results.length > 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard title="Total Links Checked" value={results.length} subtitle="Max 100 limit" type="neutral" />
            <StatCard title="Healthy Links" value={results.length - broken.length} subtitle="HTTP 200/300s" type="good" />
            <StatCard title="Broken Links" value={broken.length} subtitle="HTTP 400s/500s/ERR" type={broken.length > 0 ? "bad" : "good"} />
            <StatCard title="External Outbound" value={results.filter(r => !r.internal).length} subtitle="Leaving your domain" type="warn" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card3D tilt={false} className="p-5 border-border/50 shadow-lg flex flex-col items-center">
              <h3 className="font-display text-sm font-bold mb-4 w-full text-left uppercase tracking-wider text-muted-foreground">Status Code Distribution</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%" cy="50%" innerRadius={40} outerRadius={70}
                      paddingAngle={2} dataKey="value"
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.name.startsWith("2") || entry.name.startsWith("3") ? "hsl(var(--success))" : "hsl(var(--destructive))"} />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--surface))', borderColor: 'hsl(var(--border))', borderRadius: '0.5rem' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card3D>

            <Card3D tilt={false} className="p-5 border-border/50 shadow-lg flex flex-col items-center">
              <h3 className="font-display text-sm font-bold mb-4 w-full text-left uppercase tracking-wider text-muted-foreground">Internal vs External</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={typeData}
                      cx="50%" cy="50%" innerRadius={40} outerRadius={70}
                      paddingAngle={2} dataKey="value"
                    >
                      <Cell fill="hsl(var(--primary))" />
                      <Cell fill="hsl(var(--warning))" />
                    </Pie>
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--surface))', borderColor: 'hsl(var(--border))', borderRadius: '0.5rem' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card3D>
          </div>

          <Card3D tilt={false} className="p-0 overflow-hidden border-border/50 shadow-xl">
            <div className="p-5 border-b border-border/50 bg-surface flex items-center justify-between">
              <h3 className="font-display text-lg font-bold flex items-center gap-2"><Link2 className="size-5 text-primary" /> Detailed Audit Log</h3>
            </div>
            <div className="max-h-[500px] overflow-auto">
              <table className="w-full text-sm">
                <thead className="bg-surface-2 text-xs uppercase text-muted-foreground sticky top-0 z-10">
                  <tr>
                    <th className="text-left p-4 font-semibold w-24">Status</th>
                    <th className="text-left p-4 font-semibold">Target URL</th>
                    <th className="text-left p-4 font-semibold hidden md:table-cell">Anchor Text</th>
                    <th className="text-center p-4 font-semibold w-24">Rel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {results.map((r, i) => (
                    <tr key={i} className={`transition-colors hover:bg-surface-2/30 ${!r.ok ? "bg-destructive/5" : ""}`}>
                      <td className="p-4">
                        <span className={`inline-flex items-center justify-center min-w-14 py-1 rounded-md font-mono text-xs font-bold ${r.ok ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"}`}>
                          {r.status || "ERR"}
                        </span>
                      </td>
                      <td className="p-4 max-w-[200px] sm:max-w-xs md:max-w-md">
                        <div className="flex items-center gap-2 truncate">
                           {!r.internal ? <Globe className="size-3.5 text-muted-foreground shrink-0" /> : <Hash className="size-3.5 text-muted-foreground shrink-0" />}
                           <a href={r.href} target="_blank" rel="noreferrer" className="truncate text-foreground/90 hover:text-primary transition-colors hover:underline font-medium" title={r.href}>{r.href}</a>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell max-w-[200px]">
                        <span className="truncate block text-muted-foreground italic text-xs" title={r.text.trim() || "No text (e.g. Image link)"}>"{r.text.trim().slice(0,40) || "Image/Empty"}"</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${r.nofollow ? "border-warning/30 bg-warning/10 text-warning" : "border-success/30 bg-success/10 text-success"}`}>
                          {r.nofollow ? "Nofollow" : "Dofollow"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card3D>
          
        </div>
      )}
    </ToolPanel>
  );
}

function StatCard({ title, value, subtitle, type }: { title: string; value: number; subtitle: string; type: "good" | "warn" | "bad" | "neutral" }) {
  const colors = {
    good: "text-success",
    warn: "text-warning",
    bad: "text-destructive",
    neutral: "text-foreground"
  };
  return (
    <div className="bg-surface rounded-xl p-4 border border-border/50 shadow-sm flex flex-col justify-center items-center text-center h-full">
      <div className="text-[10px] font-semibold text-muted-foreground mb-2 uppercase tracking-widest">{title}</div>
      <div className={`font-display text-4xl font-black ${colors[type]}`}>{value}</div>
      <div className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">{subtitle}</div>
    </div>
  );
}
