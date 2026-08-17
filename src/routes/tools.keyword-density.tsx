import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { ToolPanel } from "@/components/ToolPanel";
import { ToolHeader, Card3D } from "@/components/Card3D";
import { wordTokens } from "@/lib/html-analyzer";
import { fetchUrl } from "@/lib/fetch-url.functions";
import { Loader2, Search, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from "recharts";

export const Route = createFileRoute("/tools/keyword-density")({
  loader: () => getToolContent("keyword-density"),
  head: () => toolHead("keyword-density"),
  component: Page,
});

const STOP = new Set("a an the and or but if then else of in on at to from for by with without is are was were be been being have has had do does did this that those these it its they them their there here as i you he she we us our your my so not no yes very can will just about into over under more most less".split(" "));

function countSyllables(word: string) {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const match = word.match(/[aeiouy]{1,2}/g);
  return match ? match.length : 1;
}

function Page() {
  const fn = useServerFn(fetchUrl);
  const [mode, setMode] = useState<"text" | "url">("url");
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const run = async () => {
    if (!input.trim()) return;
    setErr("");
    
    if (mode === "text") {
      setText(input);
      return;
    }

    let u = input.trim();
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    
    setLoading(true);
    try {
      const r = await fn({ data: { url: u } });
      if (!r.ok) { setErr(r.error || `Fetch failed: ${r.status}`); return; }
      const clean = r.html.replace(/<script[\s\S]*?<\/script>/gi, "")
                          .replace(/<style[\s\S]*?<\/style>/gi, "")
                          .replace(/<[^>]+>/g, " ");
      setText(clean);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const stats = useMemo(() => {
    if (!text) return null;
    const tokens = wordTokens(text);
    const total = tokens.length;
    
    const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).length || 1;
    const syllables = tokens.reduce((a, b) => a + countSyllables(b), 0);
    
    // Flesch Reading Ease
    const wordsPerSent = total / sentences;
    const sylPerWord = syllables / total;
    let fre = 206.835 - 1.015 * wordsPerSent - 84.6 * sylPerWord;
    fre = Math.max(0, Math.min(100, fre));

    const grams = (n: number) => {
      const map = new Map<string, number>();
      for (let i = 0; i <= tokens.length - n; i++) {
        const slice = tokens.slice(i, i+n);
        if (slice.some(t => STOP.has(t))) continue; // strict stopword filter for all words in n-gram
        const key = slice.join(" ");
        map.set(key, (map.get(key) || 0) + 1);
      }
      return [...map.entries()].sort((a,b) => b[1]-a[1]).slice(0, 10).map(([name, count]) => ({
        name,
        count,
        density: (count * n / total) * 100
      }));
    };
    return { total, fre, one: grams(1), two: grams(2), three: grams(3) };
  }, [text]);

  return (
    <ToolPanel>
      <ToolHeader 
        title="Deep Keyword Density Analyzer" 
        badge="ADVANCED"
        desc="Detect keyword stuffing, analyze TF-IDF n-grams, and calculate Flesch-Kincaid readability in real-time." 
      />
      
      <Card3D tilt={false} className="p-5 mb-6 shadow-xl border-primary/20 bg-gradient-to-br from-surface to-surface-2">
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={() => {setMode("url"); setInput(""); setText("");}} className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${mode === "url" ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground hover:text-foreground"}`}>Extract from URL</button>
          <button onClick={() => {setMode("text"); setInput(""); setText("");}} className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${mode === "text" ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground hover:text-foreground"}`}>Paste Text</button>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          {mode === "url" ? (
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="https://example.com/blog-post" className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none shadow-inner" />
          ) : (
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={4} placeholder="Paste your article content here..." className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none shadow-inner resize-y" />
          )}
          <button onClick={run} disabled={loading || !input.trim()} className="px-6 py-3 rounded-lg grad-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-50">
            {loading ? <Loader2 className="size-5 animate-spin" /> : mode === "url" ? <Search className="size-5" /> : <FileText className="size-5" />}
            {loading ? "Analyzing..." : "Analyze Content"}
          </button>
        </div>
        {err && <div className="mt-3 p-3 rounded-md border border-destructive/40 bg-destructive/10 text-destructive text-sm flex items-center gap-2"><AlertTriangle className="size-4" /> {err}</div>}
      </Card3D>

      {stats && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard title="Total Words" value={stats.total.toString()} subtitle="Extracted from content" type="neutral" />
            <StatCard title="Reading Ease" value={stats.fre.toFixed(0)} subtitle="Flesch-Kincaid Score" type={stats.fre > 60 ? "good" : stats.fre > 40 ? "warn" : "bad"} />
            
            <div className="col-span-2 bg-surface rounded-xl p-4 border border-border/50 shadow-sm flex flex-col justify-center">
               <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest">Content Quality Assessment</div>
               {stats.total < 300 ? (
                 <div className="flex items-center gap-2 text-destructive"><AlertTriangle className="size-5" /> <span className="font-medium text-sm">Thin Content Warning (&lt;300 words)</span></div>
               ) : stats.fre < 40 ? (
                 <div className="flex items-center gap-2 text-warning"><AlertTriangle className="size-5" /> <span className="font-medium text-sm">Hard to read. Simplify sentences.</span></div>
               ) : (
                 <div className="flex items-center gap-2 text-success"><CheckCircle2 className="size-5" /> <span className="font-medium text-sm">Good length and readability!</span></div>
               )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <DensityChart title="Top Single Keywords" data={stats.one} />
            <DensityChart title="Top 2-Word Phrases" data={stats.two} />
            <DensityChart title="Top 3-Word Phrases" data={stats.three} className="md:col-span-2" />
          </div>

        </div>
      )}
    </ToolPanel>
  );
}

function StatCard({ title, value, subtitle, type }: { title: string; value: string; subtitle: string; type: "good" | "warn" | "bad" | "neutral" }) {
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

function DensityChart({ title, data, className }: { title: string; data: any[]; className?: string }) {
  return (
    <Card3D tilt={false} className={`p-5 border-border/50 shadow-lg ${className || ""}`}>
      <h3 className="font-display text-lg font-bold mb-4">{title}</h3>
      {data.length === 0 ? (
        <div className="text-sm text-muted-foreground italic h-48 flex items-center justify-center">Not enough data points</div>
      ) : (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" opacity={0.5} />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{ fill: "hsl(var(--surface-2))", opacity: 0.5 }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const p = payload[0].payload;
                    return (
                      <div className="bg-surface/95 backdrop-blur-md border border-border p-3 rounded-lg shadow-xl text-sm">
                        <div className="font-bold text-foreground mb-1">"{p.name}"</div>
                        <div className="text-muted-foreground">Count: <span className="font-semibold text-foreground">{p.count}</span></div>
                        <div className="text-muted-foreground">Density: <span className="font-semibold text-foreground">{p.density.toFixed(2)}%</span></div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="density" radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.density > 4 ? "hsl(var(--destructive))" : entry.density > 2.5 ? "hsl(var(--warning))" : "hsl(var(--primary))"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className="mt-2 text-xs text-muted-foreground flex items-center gap-4 justify-center">
         <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-primary" /> Safe (&lt;2.5%)</span>
         <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-warning" /> High (&gt;2.5%)</span>
         <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-destructive" /> Stuffing Risk (&gt;4.0%)</span>
      </div>
    </Card3D>
  );
}
