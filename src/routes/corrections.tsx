import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  AlertCircle, ShieldCheck, Mail, Edit3, Link as LinkIcon, 
  EyeOff, Search, History, Pin, CheckCircle2
} from "lucide-react";

const TITLE = "Corrections Policy — How SEOAcademys Handles Errors and Updates";
const DESC = "How SEOAcademys identifies, reviews, and corrects factual errors and outdated information — including how to report an issue.";
const EMAIL = "ketanchandore114@gmail.com";

export const Route = createFileRoute("/corrections")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/corrections" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/corrections" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": TITLE,
          "description": DESC,
          "url": "https://seoacademys.com/corrections",
        }),
      },
    ],
  }),
  component: CorrectionsPage,
});

function CorrectionsPage() {
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
            Corrections <span className="grad-text">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            How we handle mistakes, outdated information, and factual errors.
          </motion.p>
        </section>

        {/* WHY THIS PAGE EXISTS */}
        <section className="bg-surface-2 p-8 md:p-10 rounded-3xl border border-border">
          <h2 className="font-display text-2xl font-bold mb-4">Why This Page Exists</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>SEO changes constantly. Algorithm updates happen. Official documentation changes. Things that were accurate six months ago may need updating today.</p>
            <p>Additionally, despite our best efforts, factual errors can appear in published content.</p>
            <p className="font-medium text-foreground">This page documents how SEOAcademys handles both — and how you can help.</p>
          </div>
        </section>

        {/* TYPES OF ISSUES */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-6">Types of Issues We Fix</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: AlertCircle, title: "Factual errors", desc: "Information that is demonstrably incorrect — wrong statistics, inaccurate technical explanations, incorrect claims about how tools or platforms work." },
              { icon: History, title: "Outdated information", desc: "Accurate information that has since changed — deprecated practices, updated documentation, changed platform behaviour." },
              { icon: LinkIcon, title: "Broken or changed links", desc: "Links to external resources that no longer work or have changed." },
              { icon: EyeOff, title: "Misleading framing", desc: "Content that is technically accurate but presented in a way that could create false impressions." }
            ].map((item, i) => (
              <div key={i} className="bg-surface border border-border p-6 rounded-2xl flex gap-4 hover:border-primary/40 transition">
                <item.icon className="size-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REPORT AN ERROR */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 text-center">
          <ShieldCheck className="size-12 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold mb-6">How to Report an Error</h2>
          <p className="text-lg text-muted-foreground mb-6">Send a report directly to:</p>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform active:scale-95 mb-8">
            <Mail className="size-5" /> {EMAIL}
          </a>
          
          <div className="text-left max-w-lg mx-auto bg-background p-6 rounded-2xl border border-border shadow-sm">
            <h4 className="font-bold text-foreground mb-3">Please Include:</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary">✦</span> The URL of the article</li>
              <li className="flex gap-2"><span className="text-primary">✦</span> What is incorrect or outdated</li>
              <li className="flex gap-2"><span className="text-primary">✦</span> A source or reference if you have one (not required, but helpful)</li>
            </ul>
          </div>
          <p className="mt-6 text-sm font-medium text-foreground italic">We review all correction reports — including anonymous ones.</p>
        </section>

        {/* WHAT HAPPENS & HOW WE MARK */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-surface-2 p-8 rounded-3xl border border-border">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <Search className="size-6 text-primary" /> What Happens After a Report
            </h2>
            <div className="space-y-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-bold text-foreground mb-2 text-base">Within 5 business days:</h4>
                <ul className="space-y-2">
                  <li><strong className="text-foreground">1.</strong> We review the reported issue against available sources</li>
                  <li><strong className="text-foreground">2.</strong> If the correction is valid: the article is updated</li>
                  <li><strong className="text-foreground">3.</strong> If the correction is disputed: we'll note our reasoning</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-border">
                <h4 className="font-bold text-foreground mb-2 text-base">After updating:</h4>
                <ul className="space-y-2">
                  <li><span className="text-primary">✓</span> The article's <span className="font-medium text-foreground">Last Updated</span> date is changed</li>
                  <li><span className="text-primary">✓</span> A <span className="font-medium text-foreground">What changed</span> note is added for significant corrections</li>
                  <li><span className="text-primary">✓</span> Major corrections may include a clear inline note within the article</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-surface p-8 rounded-3xl border border-border flex flex-col justify-center">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <Edit3 className="size-6 text-primary" /> How We Mark Updates
            </h2>
            <p className="text-sm text-muted-foreground mb-4">Every article on SEOAcademys displays:</p>
            <div className="p-3 bg-surface-2 rounded-lg border border-border font-mono text-xs text-foreground mb-6">
              Published: [Date] | Last Updated: [Date]
            </div>
            <p className="text-sm text-muted-foreground mb-4">For significant factual corrections:</p>
            <div className="p-4 bg-warning/10 border border-warning/20 rounded-xl text-sm text-foreground">
              <div className="flex gap-2 items-start">
                <Pin className="size-4 text-warning shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Update [Month Year]:</span> [Brief description of what changed and why]
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* PROACTIVE UPDATES */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Proactive Updates</h2>
          <p className="text-muted-foreground mb-6">
            Beyond reader-reported corrections, SEOAcademys proactively reviews and updates content when:
          </p>
          <div className="flex flex-col gap-3 text-sm font-medium text-foreground text-left max-w-lg mx-auto bg-surface-2 p-6 rounded-2xl border border-border">
            <div className="flex gap-3 items-center"><CheckCircle2 className="size-4 text-primary shrink-0"/> Google publishes significant algorithm updates or documentation changes</div>
            <div className="flex gap-3 items-center"><CheckCircle2 className="size-4 text-primary shrink-0"/> AI search platforms announce changes to their systems</div>
            <div className="flex gap-3 items-center"><CheckCircle2 className="size-4 text-primary shrink-0"/> New research changes the evidence base for existing claims</div>
            <div className="flex gap-3 items-center"><CheckCircle2 className="size-4 text-primary shrink-0"/> Our own experiments produce results that update previous conclusions</div>
          </div>
        </section>

      </div>
    </PageContainer>
  );
}
