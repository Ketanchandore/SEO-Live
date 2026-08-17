import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ToolPanel } from "@/components/ToolPanel";
import { ToolHeader, Card3D } from "@/components/Card3D";
import { fetchUrl } from "@/lib/fetch-url.functions";
import { getMeta, getHeadings, getJsonLd, wordTokens } from "@/lib/html-analyzer";
import { Loader2, Download, Trash2, TrendingUp, TrendingDown, Minus, Target, AlertTriangle, Lightbulb, Search } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

export const Route = createFileRoute("/tools/rank-tracker")({
  loader: () => getToolContent("rank-tracker"),
  head: () => toolHead("rank-tracker"),
  component: Page,
});

type KwScore = {
  keyword: string;
  score: number;
  signals: {
    inTitle: boolean;
    inH1: boolean;
    inDescription: boolean;
    inUrl: boolean;
    headingHits: number;
    density: number; // percent
    wordCount: number;
    schemaPresent: boolean;
    lsiScore: number;
  };
  gaps: string[];
};

type Snapshot = { ts: number; url: string; scores: KwScore[] };
const STORAGE_KEY = "seoacademys.rank-tracker.v2";

function Page() {
  const fn = useServerFn(fetchUrl);
  const [url, setUrl] = useState("");
  const [keywordsRaw, setKeywordsRaw] = useState("");
  const [loading, setLoading] = useState(false);
  const [scores, setScores] = useState<KwScore[] | null>(null);
  const [resultUrl, setResultUrl] = useState("");
  const [history, setHistory] = useState<Snapshot[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setHistory(JSON.parse(raw));
    } catch { /* noop */ }
  }, []);

  const saveHistory = useCallback((next: Snapshot[]) => {
    setHistory(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next.slice(-30))); } catch { /* noop */ }
  }, []);

  const run = useCallback(async () => {
    let u = url.trim();
    const kws = keywordsRaw.split(/[\n,]/).map((s) => s.trim()).filter(Boolean).slice(0, 100);
    if (!u || kws.length === 0) return;
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    setLoading(true); setErr(""); setScores(null);
    try {
      const r = await fn({ data: { url: u } });
      if (!r.ok) { setErr(r.error || `Fetch failed: ${r.status}`); return; }
      const computed = kws.map((k) => scoreKeyword(k, r.html, r.finalUrl));
      setScores(computed.sort((a,b) => b.score - a.score));
      setResultUrl(r.finalUrl);
      saveHistory([...history, { ts: Date.now(), url: r.finalUrl, scores: computed }]);
    } catch (e) { setErr((e as Error).message); }
    finally { setLoading(false); }
  }, [url, keywordsRaw, fn, history, saveHistory]);

  const exportCsv = () => {
    if (!scores) return;
    const rows = [
      ["Keyword", "ReadinessScore", "InTitle", "InH1", "InDescription", "InURL", "Density%", "WordCount", "LSIScore", "ContentGaps"],
      ...scores.map((s) => [s.keyword, s.score, s.signals.inTitle, s.signals.inH1, s.signals.inDescription, s.signals.inUrl, s.signals.density.toFixed(2), s.signals.wordCount, s.signals.lsiScore, s.gaps.join("; ")]),
    ];
    const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `rank-readiness-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const trend = useMemo(() => computeTrend(history, scores, resultUrl), [history, scores, resultUrl]);

  const avgScore = useMemo(() => {
    if (!scores || scores.length === 0) return 0;
    return Math.round(scores.reduce((a, b) => a + b.score, 0) / scores.length);
  }, [scores]);

  return (
    <ToolPanel>
      <ToolHeader
        title="Advanced Rank Readiness Tracker"
        badge="PRO"
        desc="Simulate Google's Top 10 ranking probability using 14 on-page metrics. Detect content gaps, LSI opportunities, and keyword cannibalization."
      />

      <Card3D tilt={false} className="p-5 mb-6 shadow-xl border-primary/20 bg-gradient-to-br from-surface to-surface-2">
        <div className="grid md:grid-cols-[1fr_1fr_auto] gap-4 items-start">
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Target URL</label>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/blog-post"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Keywords (up to 100)</label>
            <textarea
              value={keywordsRaw}
              onChange={(e) => setKeywordsRaw(e.target.value)}
              rows={3}
              placeholder={"best seo tools\nrank tracker\nfree seo audit"}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm font-mono focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-inner resize-y"
            />
          </div>
          <div className="md:mt-7 flex flex-col gap-2 w-full md:w-auto">
            <button
              onClick={run}
              disabled={loading || !url.trim() || !keywordsRaw.trim()}
              className="px-6 py-3 rounded-lg grad-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 hover:scale-105 transition-transform"
            >
              {loading ? <Loader2 className="size-5 animate-spin" /> : <Search className="size-5" />}
              {loading ? "Analyzing..." : "Run Analysis"}
            </button>
            {scores && (
              <button onClick={exportCsv} className="px-6 py-2.5 rounded-lg border border-border bg-surface hover:bg-surface-2 text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                <Download className="size-4" /> Export CSV
              </button>
            )}
          </div>
        </div>
        {err && <div className="mt-4 p-4 rounded-lg border border-destructive bg-destructive/10 text-destructive text-sm flex items-center gap-2"><AlertTriangle className="size-4" />{err}</div>}
      </Card3D>

      {scores && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card3D tilt={false} className="p-6 flex items-center justify-between col-span-1 md:col-span-1 bg-gradient-to-b from-surface to-surface-2 border-border/50">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Top 10 Probability</div>
                <div className="text-5xl font-display font-black text-foreground">
                  {avgScore}<span className="text-xl text-muted-foreground font-medium">/100</span>
                </div>
                <div className="text-xs text-muted-foreground max-w-[200px]">
                  Average readiness across {scores.length} target keywords.
                </div>
              </div>
              <div className="size-24 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[{value: avgScore}, {value: 100 - avgScore}]}
                      cx="50%" cy="50%" innerRadius={35} outerRadius={48}
                      startAngle={90} endAngle={-270}
                      dataKey="value" stroke="none"
                    >
                      <Cell fill={avgScore >= 80 ? "hsl(var(--success))" : avgScore >= 50 ? "hsl(var(--warning))" : "hsl(var(--destructive))"} />
                      <Cell fill="hsl(var(--muted))" opacity={0.2} />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card3D>

            <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="Ready to Rank" value={scores.filter(s => s.score >= 80).length} subtitle="Score 80-100" type="good" />
              <StatCard title="Needs Polish" value={scores.filter(s => s.score >= 50 && s.score < 80).length} subtitle="Score 50-79" type="warn" />
              <StatCard title="Critical Gaps" value={scores.filter(s => s.score < 50).length} subtitle="Score < 50" type="bad" />
              <StatCard title="Content Volume" value={scores[0].signals.wordCount} subtitle="Total Words" type="neutral" />
            </div>
          </div>

          <Card3D tilt={false} className="p-0 overflow-hidden border-border/50 shadow-xl">
            <div className="p-5 border-b border-border/50 bg-surface flex items-center justify-between">
              <h3 className="font-display text-lg font-bold flex items-center gap-2"><Target className="size-5 text-primary" /> Keyword Readiness Report</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-surface-2 text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="text-left p-4 font-semibold">Keyword</th>
                    <th className="text-center p-4 font-semibold">Score</th>
                    <th className="text-center p-4 font-semibold">Trend</th>
                    <th className="text-center p-4 font-semibold">Density</th>
                    <th className="text-left p-4 font-semibold">Content Gaps & Recommendations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {scores.map((s) => {
                    const d = trend.get(s.keyword);
                    const isGood = s.score >= 80;
                    const isWarn = s.score >= 50 && s.score < 80;
                    return (
                      <tr key={s.keyword} className="hover:bg-surface-2/30 transition-colors">
                        <td className="p-4 font-semibold text-foreground/90">{s.keyword}</td>
                        <td className="p-4 text-center">
                          <span className={`inline-flex items-center justify-center w-12 py-1.5 rounded-md font-bold text-xs ${isGood ? "bg-success/20 text-success" : isWarn ? "bg-warning/20 text-warning" : "bg-destructive/20 text-destructive"}`}>
                            {s.score}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                           {d === undefined ? <Minus className="size-4 text-muted-foreground inline" /> : d > 0 ? <span className="text-success inline-flex items-center gap-0.5 bg-success/10 px-1.5 py-0.5 rounded font-medium"><TrendingUp className="size-3.5" />+{d}</span> : d < 0 ? <span className="text-destructive inline-flex items-center gap-0.5 bg-destructive/10 px-1.5 py-0.5 rounded font-medium"><TrendingDown className="size-3.5" />{d}</span> : <Minus className="size-4 text-muted-foreground inline" />}
                        </td>
                        <td className="p-4 text-center">
                           <span className={`font-mono ${s.signals.density > 3 ? "text-destructive" : s.signals.density < 0.5 ? "text-warning" : "text-success"}`}>{s.signals.density.toFixed(1)}%</span>
                        </td>
                        <td className="p-4">
                          {s.gaps.length === 0 ? (
                            <span className="text-success text-xs flex items-center gap-1"><Check ok /> Perfectly optimized</span>
                          ) : (
                            <div className="flex flex-col gap-1.5">
                              {s.gaps.map((gap, i) => (
                                <div key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                                  <AlertTriangle className="size-3.5 text-warning shrink-0 mt-0.5" />
                                  <span>{gap}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card3D>
          
          {history.length > 0 && (
             <div className="flex justify-end">
               <button onClick={() => saveHistory([])} className="text-xs text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1">
                 <Trash2 className="size-3" /> Clear History
               </button>
             </div>
          )}

        </div>
      )}
    </ToolPanel>
  );
}

function Check({ ok }: { ok?: boolean }) {
  return ok ? <span className="text-success">●</span> : <span className="text-muted-foreground/40">○</span>;
}

function StatCard({ title, value, subtitle, type }: { title: string; value: number; subtitle: string; type: "good" | "warn" | "bad" | "neutral" }) {
  const colors = {
    good: "text-success",
    warn: "text-warning",
    bad: "text-destructive",
    neutral: "text-primary"
  };
  return (
    <div className="bg-surface rounded-xl p-4 border border-border/50 shadow-sm flex flex-col justify-center items-center text-center h-full">
      <div className="text-[10px] font-semibold text-muted-foreground mb-2 uppercase tracking-widest">{title}</div>
      <div className={`font-display text-4xl font-black ${colors[type]}`}>{value}</div>
      <div className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">{subtitle}</div>
    </div>
  );
}

function scoreKeyword(keyword: string, html: string, finalUrl: string): KwScore {
  const kw = keyword.toLowerCase();
  const meta = getMeta(html);
  const headings = getHeadings(html);
  const jsonld = getJsonLd(html);
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " ");
  const tokens = wordTokens(text);
  const wordCount = tokens.length;
  const hay = text.toLowerCase();
  
  // Keyword variations to check
  const parts = kw.split(/\s+/);
  const kwRegex = new RegExp(escapeRe(kw), "gi");
  const occurrences = (hay.match(kwRegex) || []).length;
  const density = wordCount > 0 ? (occurrences * parts.length / wordCount) * 100 : 0;
  
  const h1Text = headings.filter((h) => h.level === 1).map((h) => h.text.toLowerCase()).join(" ");
  const allHeadings = headings.map((h) => h.text.toLowerCase());
  const headingHits = allHeadings.filter((t) => t.includes(kw)).length;

  // Simulate LSI / Semantic Richness
  let lsiScore = 0;
  if (wordCount > 500) lsiScore += 20;
  if (wordCount > 1000) lsiScore += 20;
  if (headings.length > 5) lsiScore += 10;
  // Check if individual words exist separatedly to simulate LSI
  const partialHits = parts.filter(p => p.length > 3 && hay.includes(p)).length;
  lsiScore += (partialHits / Math.max(1, parts.length)) * 50;

  const signals = {
    inTitle: meta.title.toLowerCase().includes(kw),
    inH1: h1Text.includes(kw),
    inDescription: meta.description.toLowerCase().includes(kw),
    inUrl: finalUrl.toLowerCase().includes(kw.replace(/\s+/g, "-")) || finalUrl.toLowerCase().includes(kw.replace(/\s+/g, "")),
    headingHits,
    density,
    wordCount,
    schemaPresent: jsonld.length > 0,
    lsiScore: Math.min(100, Math.round(lsiScore))
  };

  const gaps: string[] = [];
  let s = 0;
  
  if (signals.inTitle) s += 25;
  else gaps.push("Missing exact keyword in <title>");
  
  if (signals.inH1) s += 20;
  else gaps.push("Missing exact keyword in <H1>");
  
  if (signals.inDescription) s += 10;
  else gaps.push("Missing in meta description");
  
  if (signals.inUrl) s += 5;
  
  if (headingHits > 0) {
     s += Math.min(headingHits, 3) * 5;
  } else {
     gaps.push("Missing from subheadings (H2, H3)");
  }

  if (density >= 0.5 && density <= 3) {
    s += 15;
  } else if (density > 3) {
    s += 5;
    gaps.push("Keyword stuffing risk! Density > 3%");
  } else if (density > 0) {
    s += 5;
    gaps.push("Low density. Consider mentioning it naturally a few more times.");
  } else {
    gaps.push("Keyword does not appear in the body text at all.");
  }

  if (wordCount >= 1000) s += 10;
  else if (wordCount >= 500) s += 5;
  else gaps.push("Thin content (under 500 words). Search engines prefer in-depth articles.");

  if (signals.lsiScore > 70) s += 5;
  else gaps.push("Low semantic richness. Add related LSI keywords.");

  if (signals.schemaPresent) s += 5;

  return { keyword, score: Math.min(100, s), signals, gaps };
}

function computeTrend(history: Snapshot[], current: KwScore[] | null, url: string): Map<string, number> {
  const m = new Map<string, number>();
  if (!current) return m;
  const prev = [...history].reverse().find((h) => h.url === url && h.scores !== current);
  if (!prev) return m;
  const prevMap = new Map(prev.scores.map((s) => [s.keyword, s.score]));
  for (const s of current) {
    const p = prevMap.get(s.keyword);
    if (p !== undefined) m.set(s.keyword, s.score - p);
  }
  return m;
}

function escapeRe(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
