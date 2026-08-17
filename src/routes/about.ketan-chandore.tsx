import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { ExternalLink, Linkedin, Mail, Twitter, Youtube, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const TITLE = "Ketan Chandore — Founder of SEOAcademys.com";
const DESC = "Meet Ketan Chandore, the founder and creator of SEOAcademys.com — an independent SEO, GEO and AEO learning platform built from Khargone, MP.";

export const Route = createFileRoute("/about/ketan-chandore")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/about/ketan-chandore" },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/about/ketan-chandore" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Ketan Chandore",
            "givenName": "Ketan",
            "familyName": "Chandore",
            "jobTitle": "Founder",
            "description": "Ketan Chandore is the founder and creator of SEOAcademys.com — an independent SEO, GEO and AEO learning platform. B.Tech CS student from Khargone, Madhya Pradesh.",
            "url": "https://seoacademys.com/about/ketan-chandore",
            "image": "https://seoacademys.com/images/ketan-chandore.jpg",
            "worksFor": {
              "@type": "Organization",
              "name": "SEOAcademys",
              "url": "https://seoacademys.com"
            },
            "knowsAbout": [
              "Search Engine Optimization",
              "Generative Engine Optimization",
              "Answer Engine Optimization",
              "Technical SEO",
              "E-E-A-T",
              "AI Search Visibility"
            ],
            "sameAs": [
              "https://www.linkedin.com/in/ketan-chandore-51a533254",
              "https://x.com/pinepl_techai",
              "https://youtube.com/@pinepl_techai"
            ]
          }
        }),
      },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12 md:py-16 space-y-16">
        
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Avatar Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="shrink-0 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/0 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="size-40 md:size-48 rounded-3xl bg-surface-2 border-2 border-border overflow-hidden relative shadow-xl shadow-primary/5 flex items-center justify-center">
              {/* NOTE: Replace with actual image <img src="/images/ketan-chandore.jpg" alt="Ketan Chandore" className="w-full h-full object-cover" /> */}
              <span className="text-5xl font-display font-bold text-primary">KC</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs text-primary font-mono mb-4">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              AVAILABLE FOR CONNECTIONS
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">
              Ketan Chandore
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
              Founder & Creator, <span className="text-foreground">SEOAcademys.com</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0 mb-6">
              B.Tech Computer Science · SEO, GEO & AEO Researcher · Independent Builder · Khargone, Madhya Pradesh
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a href="https://www.linkedin.com/in/ketan-chandore-51a533254" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:bg-surface-2 transition text-sm font-medium">
                <Linkedin className="size-4 text-[#0A66C2]" /> LinkedIn
              </a>
              <a href="https://x.com/pinepl_techai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:bg-surface-2 transition text-sm font-medium">
                <Twitter className="size-4 text-foreground" /> Twitter
              </a>
              <a href="https://youtube.com/@pinepl_techai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:bg-surface-2 transition text-sm font-medium">
                <Youtube className="size-4 text-[#FF0000]" /> YouTube
              </a>
              <a href="mailto:ketanchandore114@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:bg-surface-2 transition text-sm font-medium">
                <Mail className="size-4 text-muted-foreground" /> Email
              </a>
            </div>
          </motion.div>
        </section>

        <hr className="border-border/60" />

        <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start">
          
          <div className="space-y-12">
            {/* SECTION: WHO I AM */}
            <section>
              <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">01.</span> The Person Behind SEOAcademys
              </h3>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>I'm Ketan Chandore — a 21-year-old Computer Science student from Khargone, Madhya Pradesh.</p>
                <p>No agency runs this website. No funded startup team. No marketing department.</p>
                <p>SEOAcademys.com is built, written, and maintained entirely by me — one person, working from a small city in central India, building tools and writing guides that I genuinely wish had existed when I started learning SEO.</p>
                <p>I'm currently pursuing B.Tech in Computer Science Engineering. I build web products independently using Lovable.ai and the Claude API. I've built multiple websites — SEOAcademys.com, ColourPine.com, and ProtoolsKit — entirely on my own, without a team or external funding.</p>
              </div>
            </section>

            {/* SECTION: HOW THIS STARTED */}
            <section>
              <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">02.</span> Why I Built SEOAcademys
              </h3>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground">The honest answer: frustration.</p>
                <p>When I started building websites, I quickly realised that if I wanted to grow organic traffic, I needed to understand SEO. So I started learning.</p>
                
                <div className="mt-6 space-y-6">
                  <div className="bg-surface-2/50 border border-border/50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-2">Problem 1: The tools were impossibly expensive.</h4>
                    <p className="text-sm m-0">Ahrefs costs ₹8,000+ per month. SEMrush costs ₹7,500+ per month. For a CS student from Khargone, these weren't just expensive — they were simply not an option. I searched for free alternatives, and found that most were either extremely limited, unreliable, or riddled with ads and upsells designed to push you into a paid plan.</p>
                  </div>
                  
                  <div className="bg-surface-2/50 border border-border/50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-2">Problem 2: The content was generic and outdated.</h4>
                    <p className="text-sm m-0">Most SEO articles online follow the same template — rewritten from older articles, filled with generic advice, no real examples, no actual testing, no original thinking. Searching for "how to fix crawled currently not indexed" or "how does GEO work" often led to articles that repeated the same surface-level points without actually helping me solve the problem.</p>
                  </div>

                  <div className="bg-surface-2/50 border border-border/50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-2">Problem 3: AI search was changing everything.</h4>
                    <p className="text-sm m-0">ChatGPT, Perplexity, Google AI Mode — the way people find information is genuinely shifting. I found myself researching GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) because I wanted my own websites to be visible in AI search results. But clear, honest, practical guides on these topics were almost nonexistent.</p>
                  </div>
                </div>

                <p className="mt-6 font-medium text-foreground">These three problems led to a simple decision: if these tools and guides don't exist in a useful form, I'll build them. That's SEOAcademys.</p>
              </div>
            </section>

            {/* SECTION: MY PHILOSOPHY */}
            <section>
              <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">03.</span> My Philosophy on SEO Education
              </h3>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>I'm not here to sell you a "secret ranking formula." There isn't one.</p>
                <p>Google's ranking system involves hundreds of factors, most of which Google does not publicly document. What does exist — official documentation, reliable research, and real experiments — is genuinely useful. I focus on that.</p>
                
                <h4 className="font-semibold text-foreground mt-6 mb-3">My approach:</h4>
                <ol className="space-y-2 mt-0">
                  <li>Start with what Google officially documents</li>
                  <li>Test it on real websites (including this one)</li>
                  <li>Report honest results — including when something doesn't work as expected</li>
                  <li>Clearly separate confirmed information from hypotheses</li>
                </ol>

                <p className="mt-6">I also believe that SEO education doesn't need to be locked behind expensive courses or confusing jargon. My goal with SEOAcademys is to make this genuinely useful to someone building their first website in a tier-3 city — not just to enterprise marketing teams.</p>
              </div>
            </section>
          </div>

          <div className="space-y-8 sticky top-24">
            
            {/* SECTION: WHAT I ACTUALLY DO */}
            <div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden">
              <div className="bg-surface-2 px-6 py-4 border-b border-border">
                <h3 className="font-display font-bold text-foreground">What I Work On</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { title: "SEOAcademys.com", desc: "SEO education, free diagnostic tools, real experiments." },
                  { title: "ColourPine.com", desc: "Free web-based tools for color exploration and design." },
                  { title: "ProtoolsKit", desc: "A utility tools site with converters and calculators." },
                  { title: "Mind Unfolded", desc: "A YouTube channel I run in a separate niche." },
                  { title: "PineLab", desc: "Another YouTube channel I work on." },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <ExternalLink className="size-4 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-sm text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: EXPERTISE */}
            <div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden">
              <div className="bg-surface-2 px-6 py-4 border-b border-border">
                <h3 className="font-display font-bold text-foreground">My Expertise</h3>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-success mb-3">What I genuinely know</h4>
                  <ul className="space-y-2.5">
                    {["SEO strategy & architecture", "GEO / AI Search structuring", "AEO / Featured snippets", "E-E-A-T signals", "Technical SEO / Schema", "No-code web development (Lovable)", "AI API implementations (Claude)"].map(skill => (
                      <li key={skill} className="flex gap-2 items-start text-sm text-muted-foreground">
                        <CheckCircle2 className="size-4 text-success shrink-0 mt-0.5" />
                        <span className="leading-snug">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">What I don't claim</h4>
                  <ul className="space-y-2.5">
                    {["I am not a Google employee", "No access to internal algos", "I cannot guarantee rankings", "SEO constantly changes"].map(claim => (
                      <li key={claim} className="flex gap-2 items-start text-sm text-muted-foreground">
                        <XCircle className="size-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                        <span className="leading-snug">{claim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </PageContainer>
  );
}
