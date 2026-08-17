import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { Hammer, CheckCircle2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/seo-stack")({
  head: () => ({
    meta: [
      { title: "Free SEO Tools Stack — No Paid Subscription Needed" },
      { name: "description", content: "Complete ₹0/month SEO tool stack using SEOAcademys tools, Google Search Console, GA4 and other free tools." },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/seo-stack/" }],
  }),
  component: SeoStackPage,
});

function SeoStackPage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12 space-y-12">
        
        <header className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <Hammer className="size-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Free SEO Tools Stack</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            You do not need a $99/month tool to do SEO. Here is exactly what we use and recommend for every budget.
          </p>
        </header>

        <div className="bg-surface-2 border border-border rounded-xl p-4 text-sm text-muted-foreground flex items-start gap-3">
          <AlertCircle className="size-5 text-primary shrink-0 mt-0.5" />
          <p>
            <strong>Radical Transparency:</strong> Affiliate links are clearly marked with <span className="font-mono text-xs bg-primary/10 text-primary px-1 py-0.5 rounded">[Affiliate]</span>. Recommendations are based on genuine usefulness, not payouts. The ₹0 stack is always our primary recommendation for beginners.
          </p>
        </div>

        <div className="space-y-10">
          
          {/* Stack 1: Free */}
          <section className="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-green-50 dark:bg-green-950/20 p-6 border-b border-border">
              <h2 className="font-display text-2xl font-bold text-green-900 dark:text-green-400">The ₹0/month Stack</h2>
              <p className="text-sm text-green-800/80 dark:text-green-300/80 mt-1">Everything you need to reach 100k+ monthly visitors.</p>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              {[
                { name: "Google Search Console", desc: "The only source of absolute truth for Google Search data." },
                { name: "Google Analytics 4 (GA4)", desc: "For measuring user engagement and conversion." },
                { name: "SEOAcademys Diagnostic Tools", desc: "For technical audits, GEO tracking, and schema generation." },
                { name: "PageSpeed Insights", desc: "For Core Web Vitals measurement." },
                { name: "Bing Webmaster Tools", desc: "Often catches technical issues GSC misses." }
              ].map((tool, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stack 2: Starter */}
          <section className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 border-b border-border">
              <h2 className="font-display text-2xl font-bold text-blue-900 dark:text-blue-400">The ₹500–1000/month Starter</h2>
              <p className="text-sm text-blue-800/80 dark:text-blue-300/80 mt-1">For freelancers and small businesses scaling up.</p>
            </div>
            <div className="p-6 md:p-8 space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>When you outgrow manual free tools and need to save time, we recommend focusing on affordable keyword research and rank tracking.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>KeywordsEverywhere <span className="font-mono text-[10px] bg-primary/10 text-primary px-1 py-0.5 rounded">[Affiliate]</span></strong> — ~$10/year. Incredible value for volume data directly in SERPs.</li>
                <li><strong>Screaming Frog (Free version)</strong> — Crawl up to 500 URLs for technical audits.</li>
              </ul>
            </div>
          </section>

          {/* Stack 3: Pro */}
          <section className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="bg-purple-50 dark:bg-purple-950/20 p-6 border-b border-border">
              <h2 className="font-display text-2xl font-bold text-purple-900 dark:text-purple-400">The ₹5000+/month Pro</h2>
              <p className="text-sm text-purple-800/80 dark:text-purple-300/80 mt-1">For agencies and enterprise SEOs.</p>
            </div>
            <div className="p-6 md:p-8 space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>For heavy competitor analysis and large-scale backlink tracking, the industry standards are necessary.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Ahrefs <span className="font-mono text-[10px] bg-primary/10 text-primary px-1 py-0.5 rounded">[Affiliate]</span></strong> — The gold standard for backlink indexes and competitor research.</li>
                <li><strong>Screaming Frog (Paid)</strong> — Essential for unlimited crawling.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </PageContainer>
  );
}
