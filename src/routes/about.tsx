import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  CheckCircle2, XCircle, Target, ArrowRight, ShieldCheck,
  Search, Code2, FileText, BarChart3, Bot, Wrench, Microscope, BadgeCheck
} from "lucide-react";

const TITLE = "About SEOAcademys — Independent SEO, GEO & AEO Learning Platform";
const DESC = "SEOAcademys is an independent SEO, GEO and AEO learning platform — free tools, honest guides, and real experiments. Built by one person from Khargone, India.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About SEOAcademys",
          "url": "https://seoacademys.com/about",
          "description": "SEOAcademys is an independent SEO, GEO and AEO learning platform — free tools, honest guides, and real experiments. Built by Ketan Chandore.",
          "mainEntity": {
            "@type": "Organization",
            "name": "SEOAcademys",
            "url": "https://seoacademys.com",
            "founder": {
              "@type": "Person",
              "name": "Ketan Chandore",
              "url": "https://seoacademys.com/about/ketan-chandore"
            },
            "foundingDate": "2024",
            "description": "Independent SEO, GEO and AEO learning platform with free diagnostic tools and experiment-based guides.",
            "knowsAbout": [
              "SEO", "GEO", "AEO", "Technical SEO", "E-E-A-T", "AI Search"
            ],
            "sameAs": [
              "https://www.linkedin.com/in/ketan-chandore-51a533254",
              "https://x.com/pinepl_techai"
            ]
          }
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
            100% INDEPENDENT PLATFORM
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
          >
            About <span className="grad-text">SEOAcademys</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            An independent SEO, GEO and AEO learning platform. <br className="hidden md:block"/>
            <span className="font-semibold text-foreground">Free tools. Honest guides. Real experiments.</span><br/>
            Built by one person — for everyone who can't afford ₹8,000/month tools.
          </motion.p>
        </section>

        {/* SECTION: WHAT IS SEOACADEMYS */}
        <section className="scroll-mt-24">
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="size-8 text-primary" /> What Is SEOAcademys?
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
            <p>
              SEOAcademys is an independent learning and tools platform focused on SEO (Search Engine Optimization), GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), Technical SEO, and E-E-A-T.
            </p>
            <p>
              It exists for one clear reason: quality SEO education and useful diagnostic tools should be accessible to everyone — not just companies that can afford expensive subscriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-surface-2 rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-success" /> What you'll find here
              </h3>
              <ul className="space-y-3">
                {[
                  "Free diagnostic tools — SEO audit, keyword tools, schema generators",
                  "Practical guides — written from real experience, not generic rewrites",
                  "Experiment reports — real tests on websites, with honest results",
                  "Troubleshooting articles — specific problems with specific solutions",
                  "GEO and AEO content — how to be visible in AI search results"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground items-start">
                    <span className="text-success mt-0.5 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-2 rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="size-5 text-destructive" /> What you won't find here
              </h3>
              <ul className="space-y-3">
                {[
                  "Guaranteed ranking promises",
                  "\"Secret Google tricks\"",
                  "Expensive course upsells disguised as free content",
                  "Fake team members or inflated authority claims"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground items-start">
                    <span className="text-destructive/70 mt-0.5 shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: MISSION */}
        <section className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
          <ShieldCheck className="size-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            To make SEO, AI search visibility, and website trust architecture genuinely understandable — through <span className="font-semibold text-foreground">honest information, free tools, and evidence-based content.</span>
          </p>
          <p className="mt-4 text-muted-foreground">
            Not through hype. Not through overclaiming. Not through charging for basics that should be free.
          </p>
        </section>

        {/* SECTION: WHAT MAKES IT DIFFERENT */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-6">Why SEOAcademys Exists (And Why It's Different)</h2>
          <p className="text-lg text-muted-foreground mb-8">Most SEO websites fall into one of three categories:</p>
          
          <div className="space-y-4 mb-8">
            <div className="p-5 rounded-xl border border-border bg-surface-2">
              <h4 className="font-semibold text-foreground mb-2">1. Tool companies that also publish content</h4>
              <p className="text-sm text-muted-foreground">Ahrefs, SEMrush, Moz — their content is often very good, but it exists to drive you toward a ₹8,000+/month subscription. Their free tools are limited by design.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-surface-2">
              <h4 className="font-semibold text-foreground mb-2">2. Generic content farms</h4>
              <p className="text-sm text-muted-foreground">Sites that publish hundreds of articles rewritten from other articles, often with no original research, no real examples, and no actual testing.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-surface-2">
              <h4 className="font-semibold text-foreground mb-2">3. Course sellers</h4>
              <p className="text-sm text-muted-foreground">Sites built to funnel you into a paid course, with free content deliberately incomplete enough that you feel you need to buy more.</p>
            </div>
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
            <p className="font-semibold text-foreground">SEOAcademys is none of those.</p>
            <p>
              It's an independent platform — no VC funding, no agency behind it, no tool subscription to upsell. The tools are free because expensive tools were the problem that caused this site to exist. The guides are written with real examples because generic rewrites are what made learning frustrating. And the GEO/AEO content exists because AI search is changing how people find information, and that change deserves honest, clear explanation.
            </p>
          </div>
        </section>

        {/* SECTION: COMPARISON TABLE */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-6">How SEOAcademys Compares</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-surface-2">
                  <th className="p-4 font-semibold text-foreground border-b border-border w-1/3">Feature</th>
                  <th className="p-4 font-semibold text-muted-foreground border-b border-border w-1/3">Most SEO Platforms</th>
                  <th className="p-4 font-bold text-primary border-b border-border w-1/3 bg-primary/5">SEOAcademys</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { label: "Who runs it", bad: "Anonymous team / agency", good: "Ketan Chandore — one real person" },
                  { label: "Tool cost", bad: "₹7,500–₹12,000/month", good: "Free" },
                  { label: "Content basis", bad: "Generic advice", good: "Real experiments + official doc" },
                  { label: "GEO/AEO focus", bad: "Minimal", good: "Core pillar" },
                  { label: "Ranking guarantees", bad: "Commonly implied", good: "Never promised" },
                  { label: "India-specific context", bad: "Rarely addressed", good: "Central focus" },
                  { label: "Monetization", bad: "Hidden or aggressive", good: "Transparent — see /monetization" },
                  { label: "Author identity", bad: "Often anonymous", good: "Real person, real LinkedIn" },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-surface-2/50 transition">
                    <td className="p-4 font-medium text-foreground border-b border-border">{row.label}</td>
                    <td className="p-4 text-muted-foreground border-b border-border">{row.bad}</td>
                    <td className="p-4 text-foreground font-medium border-b border-border bg-primary/5 group-hover:bg-primary/10 transition">{row.good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION: WHAT WE COVER */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-8">What SEOAcademys Covers</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Search, title: "SEO Fundamentals", desc: "How search engines work, keyword research, search intent, crawling, indexing, ranking signals — explained clearly without unnecessary jargon." },
              { icon: Code2, title: "Technical SEO", desc: "Core Web Vitals, robots.txt, XML sitemaps, canonical URLs, JavaScript SEO, structured data, redirects, and site architecture." },
              { icon: FileText, title: "On-Page SEO", desc: "Title tags, meta descriptions, heading structure, internal linking, content structure, featured snippet optimization, and CTR improvement." },
              { icon: BadgeCheck, title: "E-E-A-T", desc: "How Google evaluates Experience, Expertise, Authoritativeness and Trust — and how to build these signals legitimately, not with fake authors." },
              { icon: Bot, title: "AEO — Answer Engine Optimization", desc: "How to structure content to appear in featured snippets, People Also Ask, direct answer boxes, and voice search results." },
              { icon: Microscope, title: "GEO — Generative Engine Optimization", desc: "How to make your website visible and citable in AI search results — ChatGPT, Perplexity, Google AI Overviews, and Claude. Based on real experiments." },
              { icon: Wrench, title: "Troubleshooting", desc: "Specific articles for specific problems — \"Discovered Currently Not Indexed,\" traffic drops, crawl issues, schema errors, and more." },
              { icon: BarChart3, title: "Experiments", desc: "Real before-and-after tests run on actual websites, with methodology, results, and honest limitations." }
            ].map((topic, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-primary/30 transition">
                <topic.icon className="size-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">{topic.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: BUILT BY ONE PERSON */}
        <section className="rounded-3xl border border-border overflow-hidden">
          <div className="bg-surface-2 p-8 md:p-10 border-b border-border">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="size-24 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                <span className="text-3xl font-display font-bold text-primary">KC</span>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold mb-3">Built By One Person</h2>
                <div className="prose prose-slate dark:prose-invert text-muted-foreground leading-relaxed max-w-none text-sm md:text-base">
                  <p>
                    SEOAcademys is built, written and maintained by Ketan Chandore — a 21-year-old Computer Science student from Khargone, Madhya Pradesh.
                  </p>
                  <p>
                    There is no team. There is no agency. There are no ghost writers. This is worth saying clearly because a lot of websites present a polished "team" that doesn't exist. SEOAcademys doesn't do that.
                  </p>
                  <p>
                    Being a solo project has real limitations — content takes longer to produce, tools take longer to build, and response times are slower. But it also means that everything on this site is written by someone with a real perspective on why this information matters, not by a content team optimizing for output volume.
                  </p>
                </div>
                <Link to="/about/ketan-chandore" className="inline-flex items-center gap-2 mt-5 font-semibold text-primary hover:underline">
                  Learn more about Ketan <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: HOW WE WORK & ROADMAP */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-surface p-8 rounded-3xl border border-border">
            <h2 className="font-display text-2xl font-bold mb-6">How SEOAcademys Works</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-1">Content methodology</h4>
                <p className="text-sm text-muted-foreground mb-2">Every guide on SEOAcademys is written following an evidence hierarchy: official documentation first, then real experiment results, then established industry research. Hypotheses are clearly labeled. Confirmed information is cited.</p>
                <Link to="/methodology" className="text-xs font-semibold text-primary hover:underline">Full details →</Link>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Editorial policy</h4>
                <p className="text-sm text-muted-foreground mb-2">We use AI tools to assist with research and editing, but every published article is reviewed for accuracy. AI-generated claims are not published without verification.</p>
                <Link to="/editorial-policy" className="text-xs font-semibold text-primary hover:underline">Full details →</Link>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Tools</h4>
                <p className="text-sm text-muted-foreground mb-2">SEOAcademys tools are diagnostic tools — they help you identify issues and understand your site. They are not ranking score calculators. Every tool's methodology is documented.</p>
                <Link to="/tools/methodology" className="text-xs font-semibold text-primary hover:underline">Full details →</Link>
              </div>
            </div>
          </section>

          <div className="space-y-8">
            <section className="bg-surface p-8 rounded-3xl border border-border">
              <h2 className="font-display text-2xl font-bold mb-4">What's Being Built</h2>
              <p className="text-sm text-muted-foreground mb-4">SEOAcademys is an evolving platform. Current priorities:</p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">•</span> <b>Experiment Lab</b> — Documented SEO experiments with real before/after data</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">•</span> <b>Troubleshooting Library</b> — 100+ specific articles for specific problems</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">•</span> <b>GEO Research</b> — Original data and case studies on AI search visibility</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">•</span> <b>More Free Tools</b> — Expanding the diagnostic tool suite</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Changes and additions are documented in the <Link to="/changelog" className="text-primary hover:underline font-medium">changelog</Link>.
              </p>
            </section>

            <section className="bg-surface p-8 rounded-3xl border border-border">
              <h2 className="font-display text-xl font-bold mb-4">Transparency Links</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <Link to="/about/ketan-chandore" className="text-muted-foreground hover:text-primary transition">Who runs it</Link>
                <Link to="/editorial-policy" className="text-muted-foreground hover:text-primary transition">Editorial Policy</Link>
                <Link to="/methodology" className="text-muted-foreground hover:text-primary transition">Methodology</Link>
                <Link to="/tools/methodology" className="text-muted-foreground hover:text-primary transition">Tools Methodology</Link>
                <Link to="/why-free" className="text-muted-foreground hover:text-primary transition">Why tools are free</Link>
                <Link to="/monetization" className="text-muted-foreground hover:text-primary transition">Monetization</Link>
                <Link to="/corrections" className="text-muted-foreground hover:text-primary transition">Corrections Policy</Link>
                <Link to="/sources" className="text-muted-foreground hover:text-primary transition">Sources Policy</Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition">Privacy Policy</Link>
              </div>
            </section>
          </div>
        </div>

      </div>
    </PageContainer>
  );
}
