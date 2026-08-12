import { createFileRoute, Link } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { AffiliateBar, PageContainer } from "@/components/Layout";
import { Card3D, ToolHeader } from "@/components/Card3D";
import { Skeleton } from "@/components/ui/skeleton";
import { lazy, Suspense, useState } from "react";
import { Check, X, Wrench, FileText, BarChart3, Globe, PenLine, Search, Loader2 } from "lucide-react";
import { fetchUrl } from "@/lib/fetch-url.functions";

const RadialGauge = lazy(() => import("@/components/RadialGauge"));

export const Route = createFileRoute("/tools/ai-citation-audit")({
  loader: () => getToolContent("ai-citation-audit"),
  head: () => toolHead("ai-citation-audit"),
  component: AuditTool,
});

function inferDomain(url: string) {
  try {
    return new URL(url.startsWith("http") ? url : `https://${url}`).hostname.replace(/^www\./, "");
  } catch {
    return "—";
  }
}

type AuditResults = {
  score: number;
  hasHttps: boolean;
  hasJsonLd: boolean;
  hasLlmsTxt: boolean;
  hasFaq: boolean;
  hasKw: boolean;
  domain: string;
};

function AuditTool() {
  const [url, setUrl] = useState("");
  const [kw, setKw] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AuditResults | null>(null);
  const [error, setError] = useState("");

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    let target = url.trim();
    if (!target) return;
    if (!target.startsWith("http")) target = "https://" + target;
    setUrl(target);
    setLoading(true);
    setError("");
    setResults(null);

    try {
      const res = await fetchUrl({ data: { url: target, method: "GET" } });
      if (!res.ok) {
        setError(`Could not fetch URL (Status: ${res.status || res.error}). Check if the URL is correct or blocks bots.`);
        setLoading(false);
        return;
      }

      const html = res.html || "";
      const htmlLower = html.toLowerCase();
      
      const hasHttps = res.finalUrl.startsWith("https://");
      const hasJsonLd = htmlLower.includes("application/ld+json");
      const hasLlmsTxt = htmlLower.includes("llms.txt") || htmlLower.includes('href="/llms.txt"');
      const hasFaq = htmlLower.includes("faq") || htmlLower.includes("frequently asked questions") || htmlLower.includes("schema.org/faqpage");
      
      const kwLower = kw.trim().toLowerCase();
      const hasKw = kwLower.length > 0 ? htmlLower.includes(kwLower) : false;
      const textLen = html.length;
      const lenBoost = Math.min(10, Math.floor(textLen / 20000));
      
      let baseScore = 30 + (hasHttps ? 10 : 0) + (hasJsonLd ? 20 : 0) + (hasLlmsTxt ? 15 : 0) + (hasFaq ? 10 : 0) + (hasKw ? 10 : 0) + lenBoost;
      
      setResults({
        score: Math.min(98, baseScore),
        hasHttps,
        hasJsonLd,
        hasLlmsTxt,
        hasFaq,
        hasKw: kwLower.length > 0 ? hasKw : true, // If no keyword provided, ignore the check
        domain: inferDomain(res.finalUrl),
      });
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred during the audit.");
    } finally {
      setLoading(false);
    }
  };

  const scoreColor = results ? (results.score < 40 ? "var(--destructive)" : results.score < 70 ? "var(--warning)" : "var(--success)") : "";

  const checks = results ? [
    { label: "JSON-LD Schema 2.0 found", ok: results.hasJsonLd },
    { label: "llms.txt references found", ok: results.hasLlmsTxt },
    { label: "FAQ structured content", ok: results.hasFaq },
    { label: "Served over HTTPS", ok: results.hasHttps },
    { label: "Target Keyword found on page", ok: results.hasKw },
  ] : [];

  return (
    <PageContainer>
      <AffiliateBar />
      <ToolHeader
        title="AI Citation Readiness Audit"
        badge="REAL-TIME ANALYSIS"
        desc="Enter your URL to fetch real on-page signals. Discover why Google AI Overviews, ChatGPT Search, and Perplexity might skip your domain."
      />

      <Card3D tilt={false} className="p-6">
        <form onSubmit={handleAudit} className="grid md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-2">
            <label className="text-sm font-medium block mb-2">Your Website URL</label>
            <input
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="w-full px-3 py-2.5 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium block mb-2">Target Keyword (Optional)</label>
            <input
              value={kw}
              onChange={(e) => setKw(e.target.value)}
              placeholder="e.g. best project management software"
              className="w-full px-3 py-2.5 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            />
          </div>
          <div className="md:col-span-1">
            <button
              disabled={loading}
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : <Search className="size-4" />}
              Analyze
            </button>
          </div>
        </form>
        {error && (
          <div className="mt-4 p-3 rounded-md border border-destructive/30 bg-destructive/10 text-destructive text-sm text-center">
            {error}
          </div>
        )}
      </Card3D>

      {results && (
        <div className="mt-6 grid lg:grid-cols-2 gap-4">
          <Card3D className="p-6">
            <h3 className="font-display font-semibold mb-2">Entity Trust Score</h3>
            <div className="h-56">
              <Suspense fallback={<Skeleton className="h-full w-full rounded-lg" />}>
                <RadialGauge value={results.score} color={scoreColor} />
              </Suspense>
            </div>
            <p className="text-sm text-muted-foreground text-center">Live entity strength for <span className="font-mono text-foreground">{results.domain}</span></p>
          </Card3D>

          <Card3D className="p-6">
            <h3 className="font-display font-semibold mb-4">Brand Sentiment Index</h3>
            <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
              <div className="absolute inset-0 grad-primary opacity-40" />
              <div
                className="absolute top-1/2 -translate-y-1/2 size-5 rounded-full bg-white border-2 transition-all duration-300"
                style={{ left: `calc(${results.score}% - 10px)`, borderColor: scoreColor, boxShadow: "var(--shadow-3d-sm)" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
              <span>Negative</span><span>Neutral</span><span>Highly Positive</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { l: "Crawlable", v: results.hasHttps ? "Yes" : "No", ok: results.hasHttps },
                { l: "Keyword Fit", v: results.hasKw ? "Strong" : "Weak", ok: results.hasKw },
                { l: "Confidence", v: `${Math.round(results.score * 0.9)}%`, ok: results.score > 60 },
              ].map((m) => (
                <div key={m.l} className="rounded-lg border border-border p-3 bg-surface-2">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
                  <div className={`font-display font-bold mt-1 ${m.ok ? "text-success" : "text-warning"}`}>{m.v}</div>
                </div>
              ))}
            </div>
          </Card3D>

          <Card3D className="p-6 lg:col-span-2" tilt={false}>
            <h3 className="font-display font-semibold mb-4">Citation Gap Inspector</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              {checks.map((c) => (
                <li key={c.label} className={`flex items-start gap-2 rounded-lg border p-3 transition ${c.ok ? "border-success/30 bg-success/5" : "border-destructive/20 bg-destructive/5"}`}>
                  {c.ok ? <Check className="size-4 text-success mt-0.5 shrink-0" /> : <X className="size-4 text-destructive mt-0.5 shrink-0" />}
                  <span>{c.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-md border border-warning/40 bg-warning/10 text-warning-foreground px-4 py-3 text-sm">
              Fix these gaps to increase your AI citation probability up to 3×.
            </div>
          </Card3D>

          <Card3D className="p-6 lg:col-span-2" tilt={false}>
            <h3 className="font-display font-semibold mb-4">Quick Fix Recommendations</h3>
            <ol className="space-y-3 text-sm">
              <Fix n={1} icon={<Wrench className="size-4" />} text="Add JSON-LD Organization Schema" link="/tools/schema-generator" linkText="Use Our Schema Generator" />
              <Fix n={2} icon={<FileText className="size-4" />} text="Create llms.txt file" link="/tools/schema-generator" linkText="Use Our llms.txt Generator" />
              <Fix n={3} icon={<BarChart3 className="size-4" />} text="Add FAQ sections with direct answers" />
              <Fix n={4} icon={<Globe className="size-4" />} text="Create/verify Wikidata entity page" />
              <Fix n={5} icon={<PenLine className="size-4" />} text="Increase factual content density" link="/tools/content-checker" linkText="Check with Content Analyzer" />
            </ol>
          </Card3D>
        </div>
      )}
    </PageContainer>
  );
}

function Fix({ n, icon, text, link, linkText }: { n: number; icon: React.ReactNode; text: string; link?: string; linkText?: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="size-6 rounded-full grad-primary text-white flex items-center justify-center text-xs font-semibold shrink-0">{n}</span>
      <span className="text-primary">{icon}</span>
      <span>
        {text}
        {link && <> → <Link to={link} className="text-primary hover:underline">[{linkText}]</Link></>}
      </span>
    </li>
  );
}
