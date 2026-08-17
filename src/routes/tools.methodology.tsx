import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  Wrench, AlertTriangle, ShieldAlert, BarChart3, 
  Code2, Type, FileText, Bot, ShieldCheck, Database, CheckCircle2, XCircle
} from "lucide-react";

const TITLE = "How SEOAcademys Tools Work — Methodology & Scoring Explained";
const DESC = "Understand exactly how every SEOAcademys diagnostic tool works, what scores mean, what they don't measure, and how data is handled.";

export const Route = createFileRoute("/tools/methodology")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/tools/methodology" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/tools/methodology" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": TITLE,
          "description": DESC,
          "url": "https://seoacademys.com/tools/methodology",
        }),
      },
    ],
  }),
  component: ToolsMethodologyPage,
});

function ToolsMethodologyPage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12 md:py-16 space-y-16">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs text-primary font-mono mb-2"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Last updated: August 2026
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
          >
            How Our <span className="grad-text">Tools Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            What the scores mean, how they're calculated, and what they don't measure.
          </motion.p>
        </section>

        {/* IMPORTANT DISCLAIMERS */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-warning/10 border border-warning/20 p-8 rounded-3xl">
            <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2 text-warning-foreground">
              <AlertTriangle className="size-6" /> Important: Read This First
            </h2>
            <div className="space-y-4 text-warning-foreground/90 leading-relaxed text-sm">
              <p className="font-bold text-base">SEOAcademys tools are diagnostic tools.</p>
              <p>They help you identify issues, understand patterns, and check specific technical elements on your website. They are not:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Google ranking score calculators</li>
                <li>Replacements for Google Search Console, Google PageSpeed Insights, or other official tools</li>
                <li>Predictors of search position</li>
              </ul>
              <p className="font-medium pt-2">
                A high score from an SEOAcademys tool does not guarantee ranking improvement. A low score does not guarantee poor rankings. These tools identify elements worth checking — not outcomes.
              </p>
            </div>
          </section>

          <section className="bg-surface-2 border border-border p-8 rounded-3xl">
            <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
              <ShieldAlert className="size-6 text-primary" /> Universal Scoring Disclaimer
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                Any score produced by an SEOAcademys tool is a diagnostic indicator based on SEOAcademys's own assessment criteria.
              </p>
              <p>
                It is not a Google score, a ranking signal, or a metric from any search engine. Google does not publish a "site score" and SEOAcademys does not claim to replicate one.
              </p>
            </div>
          </section>
        </div>

        {/* HOW EACH TOOL WORKS */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <Wrench className="size-8 text-primary" /> How Each Tool Works
          </h2>
          
          <div className="space-y-8">
            
            {/* SEO Audit Tool */}
            <div className="bg-surface border border-border rounded-3xl p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <BarChart3 className="size-32 text-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6">SEO Audit Tool</h3>
              
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <h4 className="font-bold text-foreground mb-3">What it checks:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><span className="font-medium text-foreground">Title tag:</span> presence, length (50–60 characters optimal), keyword inclusion</li>
                    <li><span className="font-medium text-foreground">Meta description:</span> presence, length (120–160 characters optimal)</li>
                    <li><span className="font-medium text-foreground">H1 tag:</span> presence, uniqueness, content quality signals</li>
                    <li><span className="font-medium text-foreground">Canonical tag:</span> presence and configuration</li>
                    <li><span className="font-medium text-foreground">Robots.txt:</span> accessibility and blocking status</li>
                    <li><span className="font-medium text-foreground">XML Sitemap:</span> presence and accessibility</li>
                    <li><span className="font-medium text-foreground">HTTPS:</span> secure connection status</li>
                    <li><span className="font-medium text-foreground">Mobile viewport meta tag:</span> presence</li>
                    <li><span className="font-medium text-foreground">Image alt text:</span> presence on key images</li>
                    <li><span className="font-medium text-foreground">Internal links:</span> minimum threshold check</li>
                    <li><span className="font-medium text-foreground">Page load signals:</span> basic performance indicators</li>
                  </ul>
                  <div className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/20 text-sm">
                    <span className="font-bold text-primary block mb-1">Score calculation:</span>
                    <span className="text-muted-foreground">Each element carries a defined weight. The total score reflects how many elements pass the check and at what quality level. Full scoring breakdown is available within the tool interface.</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <XCircle className="size-4 text-destructive" /> What it doesn't check:
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>Content quality (this requires human evaluation)</li>
                    <li>Actual search rankings</li>
                    <li>Backlink profile</li>
                    <li>Google's index status (use Google Search Console for this)</li>
                    <li>Dynamic rendering or JavaScript-loaded content</li>
                    <li>Server-side performance metrics</li>
                  </ul>
                  
                  <h4 className="font-bold text-foreground mt-8 mb-3 flex items-center gap-2">
                    <Database className="size-4 text-primary" /> Data handling:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>URL is sent to the tool for analysis</li>
                    <li>No URL data is stored permanently after the session</li>
                    <li>No personal data is required or collected</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Schema Markup Generator */}
              <div className="bg-surface border border-border rounded-3xl p-8">
                <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                  <Code2 className="size-6 text-primary" /> Schema Generator / Validator
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><span className="font-bold text-foreground">What it does:</span> Generates valid JSON-LD structured data markup for common schema types (Article, FAQ, Organization, Person, BreadcrumbList, WebSite, etc.) and validates existing markup for errors.</p>
                  <p><span className="font-bold text-foreground">What it doesn't guarantee:</span> Generating valid schema does not guarantee Google will display rich results. Google determines eligibility for rich results based on multiple factors. The tool validates technical correctness — not eligibility for specific search features.</p>
                  <p className="p-3 bg-surface-2 rounded-lg border border-border">
                    <span className="font-bold text-foreground block mb-1">Official reference:</span> Google's Rich Results Test is the authoritative validator for rich results eligibility.
                  </p>
                </div>
              </div>

              {/* Title Analyzer */}
              <div className="bg-surface border border-border rounded-3xl p-8">
                <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                  <Type className="size-6 text-primary" /> Title Analyzer
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><span className="font-bold text-foreground block mb-1">What it checks:</span></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Character length (optimal: 50–60 characters)</li>
                    <li>Word count</li>
                    <li>Presence of power words</li>
                    <li>Question format detection</li>
                    <li>Number inclusion</li>
                    <li>Basic readability signals</li>
                  </ul>
                  <p className="pt-2"><span className="font-bold text-foreground">What score means:</span> A higher score reflects more elements associated with effective title tags in documented best practices. It does not predict CTR improvement — that depends on your specific audience, query, and competitive context.</p>
                </div>
              </div>

              {/* Meta Description Analyzer */}
              <div className="bg-surface border border-border rounded-3xl p-8">
                <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="size-6 text-primary" /> Meta Description Analyzer
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><span className="font-bold text-foreground block mb-1">What it checks:</span></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Character length (optimal: 120–160 characters)</li>
                    <li>Call-to-action presence</li>
                    <li>Keyword mention</li>
                    <li>Readability signals</li>
                  </ul>
                </div>
              </div>

              {/* Robots.txt Checker */}
              <div className="bg-surface border border-border rounded-3xl p-8">
                <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                  <Bot className="size-6 text-primary" /> Robots.txt Checker
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><span className="font-bold text-foreground">What it does:</span> Fetches and displays the robots.txt file from your domain, checks for common errors, and identifies if Googlebot, other search bots, or AI crawlers are blocked.</p>
                  <p className="p-3 bg-warning/10 border border-warning/20 rounded-lg text-warning-foreground">
                    <span className="font-bold block mb-1">Important note:</span> Changes to robots.txt take effect when Google recrawls it — not immediately. Use Google Search Console's Robots.txt Tester for authoritative verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center p-4 text-sm text-muted-foreground italic">
              [Additional tools will be documented here as they are added to the platform]
            </div>
          </div>
        </section>

        {/* DATA PRIVACY SUMMARY */}
        <section className="bg-surface-2 p-8 rounded-3xl border border-border">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck className="size-6 text-primary" /> Data Privacy Summary
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-surface text-sm">
                  <th className="p-4 font-semibold text-foreground border-b border-border">Data Type</th>
                  <th className="p-4 font-semibold text-foreground border-b border-border">Collected?</th>
                  <th className="p-4 font-semibold text-foreground border-b border-border">Stored?</th>
                  <th className="p-4 font-semibold text-foreground border-b border-border">Third-party?</th>
                </tr>
              </thead>
              <tbody className="text-sm bg-background">
                {[
                  { type: "URL analyzed", col: "Yes (for processing)", store: "No (session only)", third: "No" },
                  { type: "Email address", col: "No", store: "No", third: "No" },
                  { type: "IP address", col: "Standard server logs", store: "Standard retention", third: "No" },
                  { type: "Uploaded files", col: "If applicable", store: "Deleted after processing", third: "No" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-2/30 transition">
                    <td className="p-4 font-medium text-foreground border-b border-border">{row.type}</td>
                    <td className="p-4 text-muted-foreground border-b border-border">{row.col}</td>
                    <td className="p-4 text-muted-foreground border-b border-border">{row.store}</td>
                    <td className="p-4 text-muted-foreground border-b border-border">{row.third}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <Link to="/privacy" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Full details: Privacy Policy →
            </Link>
          </div>
        </section>

      </div>
    </PageContainer>
  );
}
