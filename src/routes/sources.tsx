import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  BookOpen, Link as LinkIcon, AlertTriangle, Lightbulb, UserX, 
  HelpCircle, Mail, Database
} from "lucide-react";

const TITLE = "Sources Policy — How SEOAcademys References and Verifies Information";
const DESC = "SEOAcademys source hierarchy — from official Google documentation to community signals. How we verify and attribute information.";
const EMAIL = "ketanchandore114@gmail.com";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/sources" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/sources" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": TITLE,
          "description": DESC,
          "url": "https://seoacademys.com/sources",
        }),
      },
    ],
  }),
  component: SourcesPage,
});

function SourcesPage() {
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
            Sources & <span className="grad-text">References Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Where our information comes from — and how we evaluate it.
          </motion.p>
        </section>

        {/* HIERARCHY */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-6">Our Source Hierarchy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Not all sources carry equal weight. SEOAcademys uses the following hierarchy when evaluating and citing information:
          </p>

          <div className="space-y-6">
            
            <div className="bg-surface border border-border p-6 rounded-2xl relative shadow-sm">
              <div className="absolute top-0 right-0 p-4 font-mono text-primary/10 text-6xl font-bold -z-10 pointer-events-none">1</div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="size-5 text-primary" /> Tier 1 — Official Platform Documentation
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Examples:</span> Google Search Central (developers.google.com/search), Google's Search Central Blog, OpenAI's documentation, Anthropic's documentation, Microsoft's Bing Webmaster documentation</p>
                <p>These are statements made directly by the platforms themselves. When something is documented here, we treat it as the highest-confidence available information.</p>
                <p className="p-3 bg-warning/10 border border-warning/20 rounded-lg text-warning-foreground">
                  <span className="font-semibold">Limitation:</span> Official documentation is sometimes incomplete, sometimes slow to reflect recent changes, and occasionally internally inconsistent.
                </p>
              </div>
            </div>

            <div className="bg-surface border border-border p-6 rounded-2xl relative shadow-sm">
              <div className="absolute top-0 right-0 p-4 font-mono text-primary/10 text-6xl font-bold -z-10 pointer-events-none">2</div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Database className="size-5 text-primary" /> Tier 2 — SEOAcademys Original Experiments
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Source:</span> Tests conducted by SEOAcademys on real websites with documented methodology</p>
                <p>First-hand tested data carries significant weight — but individual experiments have limitations: small sample sizes, confounding variables, and context-specific results.</p>
                <p className="font-medium text-foreground">Every experiment published on SEOAcademys includes its methodology, limitations, and conclusion.</p>
              </div>
            </div>

            <div className="bg-surface border border-border p-6 rounded-2xl relative shadow-sm">
              <div className="absolute top-0 right-0 p-4 font-mono text-primary/10 text-6xl font-bold -z-10 pointer-events-none">3</div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Lightbulb className="size-5 text-primary" /> Tier 3 — Primary Research
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Examples:</span> Academic studies on information retrieval and search systems, published research with documented methodology and sample sizes</p>
                <p>We assess research quality before treating it as evidence — methodology, sample size, independence, and potential conflicts of interest.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-surface-2 border border-border p-6 rounded-2xl">
                <h3 className="font-bold text-foreground mb-3">Tier 4 — Established Industry Evidence</h3>
                <p className="text-sm text-muted-foreground mb-3"><span className="font-semibold text-foreground">Examples:</span> Documented case studies from credible practitioners, multiple independently observed consistent patterns</p>
                <p className="text-sm text-muted-foreground">Used to identify patterns worth investigating or to support existing evidence — not to make standalone definitive claims.</p>
              </div>
              <div className="bg-surface-2 border border-border p-6 rounded-2xl">
                <h3 className="font-bold text-foreground mb-3">Tier 5 — Community Signals</h3>
                <p className="text-sm text-muted-foreground mb-3"><span className="font-semibold text-foreground">Examples:</span> Reddit discussions, X/Twitter practitioner observations, SEO community forums</p>
                <p className="text-sm text-muted-foreground">Useful for identifying real problems people are experiencing and generating hypotheses for investigation.</p>
              </div>
            </div>

            <div className="p-6 bg-warning/10 border border-warning/20 rounded-2xl text-sm text-warning-foreground mt-6">
              <strong className="block mb-1 flex items-center gap-2"><AlertTriangle className="size-4" /> Important:</strong>
              Community discussions reflect individual experiences. They are not treated as authoritative evidence of universal patterns. We clearly label when something comes from community observation rather than documented evidence.
            </div>
            
          </div>
        </section>

        {/* CITATION PRACTICE & WHAT WE DONT CITE */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-surface p-8 rounded-3xl border border-border">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <LinkIcon className="size-6 text-primary" /> Citation Practice
            </h2>
            <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li><strong className="text-foreground">When citing official documentation:</strong> We link directly to the specific page, not the homepage of the source.</li>
              <li><strong className="text-foreground">When citing research:</strong> We identify the research, note the sample size and methodology where relevant, and link to the original where accessible.</li>
              <li><strong className="text-foreground">When citing community sources:</strong> We note that the source is community observation and distinguish it from confirmed information.</li>
              <li><strong className="text-foreground">When information is our own:</strong> We identify it as SEOAcademys analysis or experiment — and document the methodology.</li>
            </ul>
          </section>

          <section className="bg-surface p-8 rounded-3xl border border-border">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <UserX className="size-6 text-destructive" /> What We Don't Cite
            </h2>
            <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-3 items-start"><span className="text-destructive mt-0.5">✕</span> Anonymous claims without verifiable attribution</li>
              <li className="flex gap-3 items-start"><span className="text-destructive mt-0.5">✕</span> Sources with clear conflicts of interest that are not disclosed</li>
              <li className="flex gap-3 items-start"><span className="text-destructive mt-0.5">✕</span> Old documentation without checking if it remains current</li>
              <li className="flex gap-3 items-start"><span className="text-destructive mt-0.5">✕</span> AI-generated summaries of sources without verifying the original</li>
            </ul>
          </section>
        </div>

        {/* REQUESTING CLARIFICATION */}
        <section className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/20 text-center">
          <HelpCircle className="size-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold mb-4">Requesting Source Clarification</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            If an article does not clearly cite its sources and you want to know where a claim comes from, contact us at:
          </p>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform active:scale-95 mb-6">
            <Mail className="size-5" /> {EMAIL}
          </a>
          <p className="text-sm font-medium text-foreground">We'll either add the citation or clarify the basis for the claim.</p>
        </section>

      </div>
    </PageContainer>
  );
}
