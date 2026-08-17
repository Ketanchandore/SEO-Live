import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  BookOpen, CheckCircle2, ShieldCheck, Scale, History, 
  Lightbulb, AlertCircle, RefreshCw, XCircle, Bot, AlertTriangle, 
  FileText, Link as LinkIcon
} from "lucide-react";

const TITLE = "Editorial Policy — How SEOAcademys Creates and Reviews Content";
const DESC = "How SEOAcademys creates, reviews, and updates content — including AI usage policy, accuracy standards, and update procedures.";

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/editorial-policy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/editorial-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": TITLE,
          "description": DESC,
          "url": "https://seoacademys.com/editorial-policy",
          "publisher": {
            "@type": "Organization",
            "name": "SEOAcademys",
            "url": "https://seoacademys.com"
          },
          "dateModified": "2026-08-15"
        }),
      },
    ],
  }),
  component: EditorialPolicyPage,
});

function EditorialPolicyPage() {
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
            Editorial <span className="grad-text">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            How content on SEOAcademys is created, reviewed, and maintained.
          </motion.p>
        </section>

        {/* OVERVIEW */}
        <section className="bg-surface-2 border border-border p-8 rounded-3xl">
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
            <BookOpen className="size-6 text-primary" /> Overview
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              SEOAcademys publishes guides, tutorials, experiment reports, troubleshooting articles, and tool documentation related to SEO, GEO, AEO, Technical SEO, and E-E-A-T.
            </p>
            <p>
              This page documents the standards that content on this platform is held to — how it's created, how it's reviewed, when it's updated, and how errors are handled.
            </p>
          </div>
        </section>

        {/* CONTENT PRINCIPLES */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-6">Content Principles</h2>
          <p className="text-lg text-muted-foreground mb-8">Every article published on SEOAcademys is expected to meet these standards:</p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: CheckCircle2, title: "1. Useful", desc: "Content must solve a real problem or answer a genuine question. Articles written primarily to rank for a keyword — without actually helping the reader — are not acceptable." },
              { icon: ShieldCheck, title: "2. Accurate", desc: "Claims must be based on verifiable sources: official documentation, published research, or documented experiments. Claims that cannot be verified are either clearly labeled as hypotheses or not published." },
              { icon: Lightbulb, title: "3. Original", desc: "SEOAcademys does not publish generic rewrites of content that already exists elsewhere. Articles must provide original perspective, original data, or original analysis." },
              { icon: Scale, title: "4. Transparent about uncertainty", desc: "SEO involves significant uncertainty. Google does not publicly document its full algorithm. Where something is confirmed, we cite the source. Where something is our hypothesis, we clearly say so." },
              { icon: RefreshCw, title: "5. Updated", desc: "Outdated content is worse than no content. Articles include published and last-updated dates. Significant updates include a 'What changed' note." },
              { icon: FileText, title: "6. Evidence-based", desc: "Where possible, claims are supported by SEOAcademys experiment data, official documentation, or established industry research — not just common belief." },
            ].map((principle, i) => (
              <div key={i} className="bg-surface rounded-2xl border border-border p-6 hover:border-primary/40 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg"><principle.icon className="size-5 text-primary" /></div>
                  <h3 className="font-bold text-lg text-foreground">{principle.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO CREATES CONTENT */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-10 border border-primary/20 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Who Creates Content</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            SEOAcademys content is created by <Link to="/about/ketan-chandore" className="text-primary hover:underline font-semibold">Ketan Chandore</Link>, the platform's founder.
            <br/><br/>
            There is currently no external contributor team. If that changes, contributor profiles and editorial standards will be documented here.
          </p>
        </section>

        {/* AI USAGE POLICY */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3">
            <Bot className="size-8 text-primary" /> AI Usage Policy
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            AI tools, including Claude, are used in the content creation process. Specifically:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-surface-2 border border-border rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-success" /> What AI is used for:
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Research assistance", desc: "identifying relevant sources and documentation" },
                  { title: "Outlining", desc: "structuring the flow of articles" },
                  { title: "Drafting", desc: "generating initial drafts that are then reviewed and rewritten" },
                  { title: "Editing", desc: "checking clarity and consistency" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-success mt-0.5 shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">{item.title}</span> — <span className="text-muted-foreground">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-surface-2 border border-border rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <XCircle className="size-5 text-destructive" /> What AI is NOT used for:
              </h3>
              <ul className="space-y-4">
                {[
                  "Publishing content without review",
                  "Making factual claims without verification",
                  "Replacing judgment on what is and isn't accurate",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-destructive/70 mt-0.5 shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-2xl text-foreground font-medium leading-relaxed">
            Every article published on SEOAcademys is reviewed before publication for factual accuracy. AI-generated claims are verified against official documentation or reliable sources before being included. We do not treat AI output as automatically correct. Google's documentation, official announcements, and established research take precedence.
          </div>
        </section>

        {/* WHAT SEOACADEMYS COVERS */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-8">What SEOAcademys Covers</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">In scope:</h3>
              <ul className="space-y-3">
                {[
                  "SEO fundamentals, technical SEO, on-page SEO",
                  "Keyword research and search intent",
                  "E-E-A-T implementation",
                  "GEO — Generative Engine Optimization",
                  "AEO — Answer Engine Optimization",
                  "Google Search Console and Analytics",
                  "Structured data and schema markup",
                  "Real experiments and case studies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <div className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">What we don't claim:</h3>
              <ul className="space-y-4">
                {[
                  { title: "Google's internal ranking algorithm", desc: "nobody outside Google knows this" },
                  { title: "Guaranteed ranking positions", desc: "SEO doesn't work that way" },
                  { title: "Secret or proprietary methods", desc: "that override Google's guidelines" },
                  { title: "AI search manipulation techniques", desc: "the goal is to help AI systems understand your content accurately, not to trick them" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertTriangle className="size-4 text-warning shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">"{item.title}"</span> — {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EVIDENCE LABELING */}
        <section className="bg-surface rounded-3xl border border-border overflow-hidden">
          <div className="p-8 border-b border-border">
            <h2 className="font-display text-2xl font-bold mb-2">Evidence Labeling</h2>
            <p className="text-muted-foreground">Articles on SEOAcademys use the following evidence labels where relevant:</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-surface-2 text-sm">
                  <th className="p-4 font-semibold text-foreground border-b border-border w-1/3">Label</th>
                  <th className="p-4 font-semibold text-muted-foreground border-b border-border">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-sm bg-background">
                {[
                  { icon: "✅", label: "Confirmed", desc: "Documented in official Google or platform documentation" },
                  { icon: "🧪", label: "Experiment-based", desc: "Observed in SEOAcademys experiments with documented methodology" },
                  { icon: "📊", label: "Evidence-backed", desc: "Supported by published research or multiple documented cases" },
                  { icon: "💡", label: "Hypothesis", desc: "Our reasoning, not confirmed — clearly marked" },
                  { icon: "❌", label: "Myth", desc: "Commonly believed but not supported by evidence" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-2/30 transition">
                    <td className="p-4 font-medium text-foreground border-b border-border flex items-center gap-2">
                      <span className="text-lg">{row.icon}</span> {row.label}
                    </td>
                    <td className="p-4 text-muted-foreground border-b border-border">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* UPDATE POLICY & CORRECTIONS & MONETIZATION */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-8">
            <div className="bg-surface-2 p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <History className="size-5 text-primary" /> Update Policy
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><span className="text-primary mt-1">✦</span> All articles display a Published date and a Last Updated date</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-1">✦</span> Articles are reviewed for accuracy when significant algorithm changes occur</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-1">✦</span> Major updates include a brief "What changed" note</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-1">✦</span> Outdated articles are either updated or clearly marked as outdated</li>
              </ul>
            </div>

            <div className="bg-surface-2 p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="size-5 text-destructive" /> Corrections
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                If something on SEOAcademys is factually incorrect or outdated, we want to know.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Report a correction <LinkIcon className="size-4" />
              </Link>
            </div>
          </section>

          <section className="bg-surface p-6 md:p-8 rounded-2xl border border-border h-full flex flex-col justify-center">
            <h2 className="font-display text-xl font-bold mb-4">Affiliate and Sponsored Content</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                If an article contains affiliate links, it will be clearly marked with <span className="font-semibold text-foreground bg-surface-2 px-1.5 py-0.5 rounded">[Affiliate]</span> at the link and disclosed at the top of the article.
              </p>
              <p>
                If content is sponsored, it will be clearly labeled <span className="font-semibold text-foreground bg-surface-2 px-1.5 py-0.5 rounded">[Sponsored]</span> and maintained separate from editorial content.
              </p>
              <p className="font-medium text-foreground p-4 bg-primary/5 rounded-xl border border-primary/20">
                Monetization does not influence editorial recommendations. Tools or approaches recommended in SEOAcademys guides are recommended because they are considered genuinely useful — not because of financial relationships.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <Link to="/monetization" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Full monetization details <LinkIcon className="size-4" />
              </Link>
            </div>
          </section>
        </div>

      </div>
    </PageContainer>
  );
}
