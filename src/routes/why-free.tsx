import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  HeartHandshake, ShieldCheck, Database, Zap, 
  ArrowRight, CheckCircle2, XCircle, Users, BarChart3, Gem, Megaphone
} from "lucide-react";

const TITLE = "Why Are SEOAcademys Tools Free? — No Catch Explanation";
const DESC = "SEOAcademys tools are free because expensive tools were the original problem. Here's the complete, honest explanation — including how this platform sustains itself.";

export const Route = createFileRoute("/why-free")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/why-free" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/why-free" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": TITLE,
          "description": DESC,
          "url": "https://seoacademys.com/why-free",
          "publisher": {
            "@type": "Organization",
            "name": "SEOAcademys",
            "url": "https://seoacademys.com"
          }
        }),
      },
    ],
  }),
  component: WhyFreePage,
});

function WhyFreePage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12 md:py-16 space-y-20">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs text-primary font-mono mb-2"
          >
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            TRANSPARENCY REPORT
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
          >
            Why Are the <span className="grad-text">Tools Free?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            No catch. No bait-and-switch. <br className="hidden sm:block"/>
            Here's the honest answer.
          </motion.p>
        </section>

        {/* THE QUESTION */}
        <section className="bg-surface-2 border border-border p-8 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-mesh)" }} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4">The Question You're Probably Asking</h2>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
              "Free tools — what's the angle? Are you collecting my data? Will you charge me later? Is this some kind of lead funnel?"
            </blockquote>
            <p className="mt-4 text-muted-foreground font-medium uppercase tracking-widest text-sm">
              Fair questions. Here's the direct answer.
            </p>
          </div>
        </section>

        {/* THE REAL REASON */}
        <section className="scroll-mt-24">
          <h2 className="font-display text-3xl font-bold mb-6">The Real Reason</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg space-y-6">
            <p>
              When I — <Link to="/about/ketan-chandore" className="text-primary hover:underline font-semibold">Ketan</Link>, the person who built this — started making websites, I ran into the same wall every independent site owner eventually hits: the tools that would actually help me understand my SEO were priced at ₹7,500 to ₹12,000 per month.
            </p>
            <p>
              That's not a one-time cost. That's every month. For a student in Khargone, MP, that wasn't a hard decision — it was simply not possible.
            </p>
            <p>
              I looked for free alternatives. Most were frustrating: intentionally limited to push you toward a paid plan, unreliable in their data, covered in ads, or simply poorly built.
            </p>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-foreground font-medium text-xl my-8 text-center">
              So I built my own.
            </div>
            <p>
              Not because I had extra time. Because the alternative was paying for something I couldn't afford or working without tools I needed.
            </p>
            <div className="bg-surface rounded-2xl border border-border p-8 mt-10">
              <h3 className="font-bold text-foreground mb-4">SEOAcademys exists because that problem is real, and it's especially real for:</h3>
              <ul className="space-y-3">
                {[
                  "Students learning SEO while building their first websites",
                  "Independent bloggers and content creators",
                  "Small business owners managing their own sites",
                  "Developers building client sites without agency budgets",
                  "Anyone in India — or anywhere — where $100/month tool subscriptions are simply not realistic"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-primary mt-1">✦</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-primary mt-6 text-lg">
                The tools are free because the expensive-tool problem is what created this platform.
              </p>
            </div>
          </div>
        </section>

        {/* HIDDEN COSTS? */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-8">Does "Free" Mean There's a Hidden Cost?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface border border-border p-6 rounded-2xl">
              <Database className="size-8 text-primary mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-2">No data selling</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SEOAcademys does not sell user data to third parties. The full data handling details are in the <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-2xl">
              <ShieldCheck className="size-8 text-primary mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-2">No forced accounts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Core tools don't require you to create an account or provide an email address to use them.
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-2xl">
              <Zap className="size-8 text-primary mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-2">No bait-and-switch</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Free tools aren't deliberately crippled versions of paid tools. They're built to be genuinely useful.
              </p>
            </div>
          </div>
        </section>

        {/* SUSTAINABILITY */}
        <section className="bg-surface-2 p-8 md:p-10 rounded-3xl border border-border">
          <h2 className="font-display text-3xl font-bold mb-6">How Does SEOAcademys Sustain Itself?</h2>
          <p className="text-lg text-muted-foreground mb-6">Completely honestly:</p>
          <div className="bg-background rounded-xl p-6 border border-primary/20 mb-8 flex items-start gap-4">
            <HeartHandshake className="size-6 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-foreground">Currently (2026): SEOAcademys is self-funded.</h4>
              <p className="text-muted-foreground text-sm mt-1">There is no revenue model actively running right now. This is a bootstrapped, independent project.</p>
            </div>
          </div>

          <h3 className="font-bold text-foreground text-lg mb-4">Future plans — transparent:</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-surface text-sm">
                  <th className="p-4 font-semibold text-foreground border-b border-border w-1/3">Model</th>
                  <th className="p-4 font-semibold text-muted-foreground border-b border-border">Details</th>
                </tr>
              </thead>
              <tbody className="text-sm bg-background">
                {[
                  { icon: Megaphone, label: "Ethical advertising", desc: "Non-intrusive display ads, clearly marked, not targeting sensitive data" },
                  { icon: Gem, label: "Affiliate links", desc: "If a paid tool is recommended, affiliate links will be clearly labeled with \"[Affiliate]\"" },
                  { icon: Zap, label: "Premium features", desc: "Optional advanced features may become paid — core tools will remain free" },
                  { icon: Users, label: "Sponsorships", desc: "Any sponsored content will be clearly labeled \"[Sponsored]\"" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 font-medium text-foreground border-b border-border flex items-center gap-2">
                      <row.icon className="size-4 text-muted-foreground" /> {row.label}
                    </td>
                    <td className="p-4 text-muted-foreground border-b border-border">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            This page will be updated when any of these change. No surprises.
          </p>
        </section>

        {/* WHAT FREE MEANS */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              What "Free" Means
            </h3>
            <ul className="space-y-4">
              {[
                "Core tools will remain free — that's the founding commitment",
                "Educational content will remain free",
                "No email required for basic tool access",
                "No hidden data collection for advertising"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground items-start">
                  <span className="text-success mt-1 shrink-0"><CheckCircle2 className="size-5" /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              What It Doesn't Mean
            </h3>
            <ul className="space-y-4">
              {[
                "\"Free\" is not a trick to get you into a paid funnel",
                "\"Free\" does not mean we sell your data",
                "\"Free\" does not mean the tools are poorly built"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground items-start">
                  <span className="text-destructive/70 mt-1 shrink-0"><XCircle className="size-5" /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHAT YOU GET / PLATFORM GETS */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-8">The Mutual Exchange</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface rounded-2xl border border-border p-6 md:p-8">
              <h3 className="font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">You Get</h3>
              <ul className="space-y-4">
                {[
                  "Free SEO diagnostic tools",
                  "Practical, honest guides",
                  "GEO and AEO education",
                  "No upsell pressure"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                    <span className="size-2 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 md:p-8">
              <h3 className="font-bold text-xl text-primary mb-6 pb-4 border-b border-primary/20">SEOAcademys Builds</h3>
              <ul className="space-y-4">
                {[
                  "A community of real users",
                  "Real-world feedback to improve tools",
                  "Domain authority through genuine usefulness",
                  "A sustainable independent platform"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <BarChart3 className="size-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ONE MORE THING */}
        <section className="bg-foreground text-background p-8 md:p-12 rounded-3xl text-center">
          <h2 className="font-display text-3xl font-bold mb-6">One More Thing</h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-8">
            SEOAcademys will never claim that a paid product is free. And if that ever changes — if core tools ever become paid — it will be announced clearly, with enough notice for you to decide what to do.
            <br/><br/>
            <span className="font-bold text-background">That's the commitment.</span>
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-transform hover:scale-105 active:scale-95">
            Questions? Contact Us <ArrowRight className="size-4" />
          </Link>
        </section>

      </div>
    </PageContainer>
  );
}
