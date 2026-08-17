import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  Banknote, Megaphone, Link as LinkIcon, Sparkles, Gem, ArrowRight, Info
} from "lucide-react";

const TITLE = "How SEOAcademys Earns Money — Complete Monetization Transparency";
const DESC = "Full transparency on how SEOAcademys is funded, how it may earn money in the future, and how monetization does and doesn't affect content.";

export const Route = createFileRoute("/monetization")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/monetization" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/monetization" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": TITLE,
          "description": DESC,
          "url": "https://seoacademys.com/monetization",
        }),
      },
    ],
  }),
  component: MonetizationPage,
});

function MonetizationPage() {
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
            Monetization <span className="grad-text">Transparency</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            How SEOAcademys earns money — and how it doesn't affect our content.
          </motion.p>
        </section>

        {/* CURRENT STATUS */}
        <section className="bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-3xl text-center">
          <Banknote className="size-12 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold mb-4">Current Status (2026)</h2>
          <p className="text-xl font-medium text-foreground mb-4">SEOAcademys is currently self-funded.</p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            There is no active advertising, no affiliate revenue, and no premium plan. This platform is funded by <Link to="/about/ketan-chandore" className="text-primary hover:underline font-semibold">Ketan Chandore</Link> — the founder — as an independent project.
          </p>
        </section>

        {/* FUTURE MONETIZATION MODELS */}
        <section>
          <h2 className="font-display text-3xl font-bold mb-4">Future Monetization Models</h2>
          <p className="text-lg text-muted-foreground mb-8">As SEOAcademys grows, the following models may be introduced. Each one will be clearly implemented and disclosed:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-surface rounded-3xl border border-border p-8 hover:border-primary/30 transition">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-3">
                <div className="bg-surface-2 p-2 rounded-lg"><Megaphone className="size-5 text-primary" /></div>
                1. Advertising
              </h3>
              <p className="text-sm text-foreground font-medium mb-4">If display advertising is added to SEOAcademys:</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> Ads will be visually distinct from editorial content</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> Ad placements will not influence article recommendations or rankings</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> Advertising partners will not be allowed to influence editorial decisions</li>
              </ul>
            </div>

            <div className="bg-surface rounded-3xl border border-border p-8 hover:border-primary/30 transition">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-3">
                <div className="bg-surface-2 p-2 rounded-lg"><LinkIcon className="size-5 text-primary" /></div>
                2. Affiliate Links
              </h3>
              <p className="text-sm text-muted-foreground mb-4">SEOAcademys may include affiliate links to tools, products, or services that are genuinely recommended.</p>
              <p className="text-sm text-foreground font-medium mb-3">How affiliate links will be handled:</p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-4">
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> Every affiliate link will be labeled with [Affiliate] at the link</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> A disclosure will appear at the top of any article containing affiliate links</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> Affiliate status will never make a product appear in a recommendation it doesn't deserve</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> If we stop recommending a product, affiliate links will be removed</li>
              </ul>
              <div className="p-3 bg-surface-2 rounded-lg text-xs font-medium text-foreground border border-border">
                Current affiliate relationships: None active as of August 2026.
              </div>
            </div>

            <div className="bg-surface rounded-3xl border border-border p-8 hover:border-primary/30 transition">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-3">
                <div className="bg-surface-2 p-2 rounded-lg"><Sparkles className="size-5 text-primary" /></div>
                3. Premium Tool Features
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Core diagnostic tools will remain free. In the future, advanced features may be offered as optional paid upgrades.</p>
              <p className="text-sm text-foreground font-medium mb-3">If this happens:</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> The free version will remain genuinely useful — not artificially crippled</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> Paid features will provide additional depth, not access to basic functionality</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> Changes will be announced clearly in advance</li>
              </ul>
            </div>

            <div className="bg-surface rounded-3xl border border-border p-8 hover:border-primary/30 transition">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-3">
                <div className="bg-surface-2 p-2 rounded-lg"><Gem className="size-5 text-primary" /></div>
                4. Sponsored Content
              </h3>
              <p className="text-sm text-muted-foreground mb-4">SEOAcademys may accept sponsorships from companies whose products are relevant to the audience.</p>
              <p className="text-sm text-foreground font-medium mb-3">How sponsorships will be handled:</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> All sponsored content will be clearly labeled [Sponsored]</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> Sponsored content will not appear as regular editorial content</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> Sponsors will not influence or control non-sponsored editorial content</li>
                <li className="flex gap-2 items-start"><span className="text-primary mt-0.5">✦</span> SEOAcademys will not accept sponsorships from products we don't consider suitable</li>
              </ul>
            </div>

          </div>
        </section>

        {/* WHAT MONETIZATION DOESN'T AFFECT */}
        <section className="bg-surface-2 p-8 md:p-12 rounded-3xl border border-border">
          <h2 className="font-display text-2xl font-bold mb-6">What Monetization Doesn't Affect</h2>
          <p className="text-base text-muted-foreground mb-6">
            The following are not for sale and will not be influenced by monetization relationships:
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Article recommendations", "Research conclusions", "Experiment results", "Educational content accuracy", "Editorial positions"].map((item, i) => (
              <div key={i} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground">
                {item}
              </div>
            ))}
          </div>
          <div className="p-5 border-l-4 border-primary bg-primary/5 rounded-r-xl text-foreground font-medium">
            If a product we previously recommended becomes less suitable, we will update our recommendation regardless of any existing relationship.
          </div>
        </section>

        {/* AFFILIATE DISCLOSURE */}
        <section className="bg-background border border-border p-8 rounded-3xl">
          <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <Info className="size-5 text-muted-foreground" /> Affiliate Disclosure (Full)
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>In compliance with FTC guidelines and standard disclosure practice:</p>
            <p>
              SEOAcademys may participate in affiliate programs. This means that when you click on certain links on this website and make a purchase, SEOAcademys may receive a commission. This comes at no additional cost to you.
            </p>
            <p>
              Affiliate relationships do not influence our editorial content. Products are recommended based on their merit.
            </p>
            <p className="font-medium text-foreground">
              All affiliate links are clearly marked with [Affiliate] at the point of the link.
            </p>
          </div>
        </section>

      </div>
    </PageContainer>
  );
}
