import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  FileSearch, BookOpen, Microscope, TestTube, Lightbulb, AlertTriangle, 
  CheckCircle2, AlertCircle, HelpCircle, XCircle, FileText, BarChart3,
  Users, Bookmark, Info, Link as LinkIcon
} from "lucide-react";

const TITLE = "Our Methodology — How SEOAcademys Evaluates SEO Information";
const DESC = "How SEOAcademys evaluates, verifies and presents SEO, GEO and AEO information — including our evidence hierarchy and what we separate from speculation.";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/methodology" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/methodology" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": TITLE,
          "description": DESC,
          "url": "https://seoacademys.com/methodology",
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
  component: MethodologyPage,
});

function MethodologyPage() {
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
            Our <span className="grad-text">Methodology</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            How we decide what to publish, what to claim, and what to leave uncertain.
          </motion.p>
        </section>

        {/* WHY THIS PAGE EXISTS */}
        <section className="bg-surface-2 border border-border p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <FileSearch className="size-32 text-foreground" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-display text-2xl font-bold mb-4">Why This Page Exists</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                SEO is an industry with an enormous amount of contradictory, overclaimed, and outdated information.
              </p>
              <p className="font-semibold text-foreground italic">
                "Do X to rank #1." "Google rewards Y." "AI search responds to Z."
              </p>
              <p>
                A lot of this advice exists with no documented evidence behind it. Some of it was accurate years ago and no longer is. Some of it has never been validated at all.
              </p>
              <p className="text-foreground font-medium pt-2">
                SEOAcademys follows a documented methodology for evaluating what we publish — because the quality of what we claim matters more than the volume of what we produce.
              </p>
            </div>
          </div>
        </section>

        {/* OUR EVIDENCE HIERARCHY */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-6">Our Evidence Hierarchy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            When a claim appears on SEOAcademys, it is based on one or more of the following sources, listed in order of priority:
          </p>
          
          <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[27px] before:w-0.5 before:bg-border before:-z-10 ml-2">
            
            {/* TIER 1 */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm relative">
              <div className="absolute -left-[30px] top-6 bg-background border-2 border-primary rounded-full size-8 flex items-center justify-center font-bold text-primary text-sm shadow-sm z-10">1</div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="size-5 text-primary" /> Tier 1 — Official Documentation
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p><span className="font-semibold text-foreground">Sources:</span> Google Search Central, Google's official developer documentation, official Google blog announcements, official documentation from AI search platforms (OpenAI, Anthropic, Perplexity, Microsoft)</p>
                <p><span className="font-semibold text-foreground">Why it's Tier 1:</span> These are statements made directly by the platforms. They represent the highest-confidence information available to anyone outside these companies.</p>
                <p className="p-3 bg-warning/10 border border-warning/20 rounded-lg text-warning-foreground">
                  <span className="font-semibold">Limitation:</span> Official documentation is sometimes incomplete, sometimes delayed, and sometimes changed without announcement.
                </p>
              </div>
            </div>

            {/* TIER 2 */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm relative">
              <div className="absolute -left-[30px] top-6 bg-background border-2 border-primary rounded-full size-8 flex items-center justify-center font-bold text-primary text-sm shadow-sm z-10">2</div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Microscope className="size-5 text-primary" /> Tier 2 — SEOAcademys Experiments
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p><span className="font-semibold text-foreground">Sources:</span> Tests conducted on real websites — including SEOAcademys.com itself — with documented methodology, defined variables, measurement periods, and observed results.</p>
                <p><span className="font-semibold text-foreground">Why it's Tier 2:</span> First-hand experimental evidence is more reliable than secondhand reports, but individual experiments have real limitations — small sample sizes, confounding variables, and results that may not generalise.</p>
                <p className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-foreground">
                  <span className="font-semibold">How we document it:</span> Every SEOAcademys experiment includes: hypothesis, method, website context, duration, results, limitations, and conclusion.
                </p>
              </div>
            </div>

            {/* TIER 3 */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm relative">
              <div className="absolute -left-[30px] top-6 bg-background border-2 border-primary rounded-full size-8 flex items-center justify-center font-bold text-primary text-sm shadow-sm z-10">3</div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <TestTube className="size-5 text-primary" /> Tier 3 — Primary Research
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p><span className="font-semibold text-foreground">Sources:</span> Published academic or industry studies with documented methodology, peer review where applicable, and clearly reported data.</p>
                <p className="p-3 bg-warning/10 border border-warning/20 rounded-lg text-warning-foreground">
                  <span className="font-semibold">Limitation:</span> Research quality varies significantly. We assess methodology, sample size, and potential biases before treating research as strong evidence.
                </p>
              </div>
            </div>

            {/* TIER 4 */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm relative">
              <div className="absolute -left-[30px] top-6 bg-background border-2 border-primary rounded-full size-8 flex items-center justify-center font-bold text-primary text-sm shadow-sm z-10">4</div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <BarChart3 className="size-5 text-primary" /> Tier 4 — Established Industry Evidence
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p><span className="font-semibold text-foreground">Sources:</span> Documented case studies from credible SEO practitioners with verifiable methodology and results. Multiple consistent observations from independent sources.</p>
                <p className="p-3 bg-warning/10 border border-warning/20 rounded-lg text-warning-foreground">
                  <span className="font-semibold">Limitation:</span> Practitioner evidence is anecdotal without independent replication. We use it to identify patterns, not to make definitive claims.
                </p>
              </div>
            </div>

            {/* TIER 5 */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm relative">
              <div className="absolute -left-[30px] top-6 bg-background border-2 border-primary rounded-full size-8 flex items-center justify-center font-bold text-primary text-sm shadow-sm z-10">5</div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Users className="size-5 text-primary" /> Tier 5 — Community Signals
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p><span className="font-semibold text-foreground">Sources:</span> Reddit discussions, X/Twitter observations, SEO community forums — used to identify real-world problems, patterns, and questions worth investigating.</p>
                <p className="p-3 bg-warning/10 border border-warning/20 rounded-lg text-warning-foreground">
                  <span className="font-semibold">Limitation:</span> Community discussions reflect individual experiences and cannot be treated as evidence of universal patterns. They are useful for generating hypotheses, not confirming them.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* HOW WE SEPARATE WHAT WE KNOW */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-6">How We Separate What We Know From What We Don't</h2>
          <p className="text-lg text-muted-foreground mb-6">Every article on SEOAcademys distinguishes between:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                icon: CheckCircle2, color: "text-success", bg: "bg-success/10", title: "What is confirmed", 
                examples: ["Google's documentation states that...", "Our experiment showed that...", "Multiple independent studies have found that..."] 
              },
              { 
                icon: Bookmark, color: "text-primary", bg: "bg-primary/10", title: "What is supported but not confirmed", 
                examples: ["Evidence suggests that...", "Several practitioners have reported..."] 
              },
              { 
                icon: Lightbulb, color: "text-warning", bg: "bg-warning/10", title: "What is our hypothesis", 
                examples: ["We believe that... [reason], but this is not confirmed", "Our working hypothesis is..."] 
              },
              { 
                icon: HelpCircle, color: "text-muted-foreground", bg: "bg-surface-2", title: "What is unknown", 
                examples: ["Google has not documented this publicly", "The evidence on this is limited and conflicting"] 
              },
              { 
                icon: XCircle, color: "text-destructive", bg: "bg-destructive/10", title: "What is a myth", 
                examples: ["This is commonly claimed, but no credible evidence supports it"] 
              }
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-xl p-5 bg-surface">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${item.bg}`}><item.icon className={`size-5 ${item.color}`} /></div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.examples.map((ex, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2 items-start">
                      <span className="text-muted-foreground/50 shrink-0">→</span>
                      <span className="italic">"{ex}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE DON'T DO */}
        <section className="bg-destructive/5 border border-destructive/20 rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="size-6 text-destructive" /> What We Don't Do
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <p className="font-bold text-foreground mb-1 text-base">We don't promise guaranteed rankings.</p>
              <p>No credible SEO source can. Google's systems involve hundreds of factors, many undisclosed, and rankings depend on competitive context that changes constantly.</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1 text-base">We don't publish correlation as causation.</p>
              <p>"Site X did Y and ranked higher" does not mean Y caused the ranking increase. We note correlation honestly and avoid presenting it as confirmed cause.</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1 text-base">We don't claim insider knowledge.</p>
              <p>We don't have access to Google's ranking algorithm, AI search systems' retrieval logic, or any non-public information from these platforms.</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1 text-base">We don't hide financial relationships.</p>
              <p>We don't present affiliate-influenced recommendations as objective analysis. If financial relationships affect what we write about, this is disclosed clearly.</p>
            </div>
          </div>
        </section>

        {/* WHAT THIS MEANS FOR YOU */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-10 border border-primary/20">
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
            <Info className="size-6 text-primary" /> What This Means for You
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            When you read something on SEOAcademys, you can expect:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "To know where the information comes from",
              "To know how confident we are in it",
              "To understand its limitations",
              "To see the evidence we're basing it on"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground font-medium items-center">
                <span className="size-2 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You should still apply critical thinking. SEO advice that works in one context may not work in another. Test recommendations on your own site where possible.
          </p>
          <div className="flex flex-wrap gap-4 pt-6 border-t border-primary/10">
            <Link to="/experiments" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Experiment reports <LinkIcon className="size-4" />
            </Link>
            <Link to="/sources" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Sources policy <LinkIcon className="size-4" />
            </Link>
          </div>
        </section>

      </div>
    </PageContainer>
  );
}
