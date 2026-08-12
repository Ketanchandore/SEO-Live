import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/tool-meta";
import { PageContainer } from "@/components/Layout";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Free GEO & AISO Learning Hub — SEOAcademys" },
      { name: "description", content: "Everything you need to understand AI Search Optimization — no paid course required." },
      { property: "og:title", content: "Free GEO Learning Hub" },
      { property: "og:description", content: "Learn Generative Engine Optimization for free." },
      { property: "og:url", content: `${SITE_URL}/learn` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/learn` }],
  }),
  component: LearnPage,
});

import { LEARN_MODULES } from "@/lib/learn-content";

const MODULES = Object.values(LEARN_MODULES);

function LearnPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <PageContainer>
      <h1 className="font-display text-3xl sm:text-5xl font-bold">Free GEO & AISO Learning Hub</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">Everything you need to understand AI Search Optimization — no paid course required.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {MODULES.map((m, i) => (
          <article key={m.slug} className="group rounded-xl border border-border bg-surface p-5 hover:border-primary transition flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="size-8 rounded-md bg-primary/15 text-primary font-display font-bold text-sm flex items-center justify-center">{String(i + 1).padStart(2, "0")}</span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock className="size-3" /> {m.readTime}</span>
            </div>
            <h3 className="font-display font-semibold text-base leading-snug flex-1">{m.title}</h3>
            <Link to="/learn/$slug" params={{ slug: m.slug }} className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
              Read Guide <ArrowRight className="size-3 group-hover:translate-x-0.5 transition" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-surface p-4 text-sm text-muted-foreground">
        Need help implementing GEO for your brand? <a href="#" className="text-primary hover:underline">Get Expert Help →</a>
      </div>

      <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-8 sm:p-10 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Get Weekly AI Search Updates</h2>
        <p className="mt-2 text-muted-foreground">What changed in Google AI Overviews this week. Free. No spam.</p>
        <form
          onSubmit={async (e) => { 
            e.preventDefault(); 
            if (!email) return;
            try {
              // Replace YOUR_FORMSPREE_ID with your actual Formspree endpoint ID
              await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({ email, form: "Newsletter Subscription" })
              });
            } catch (err) {
              console.error(err);
            } finally {
              setSent(true);
            }
          }}
          className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
        >
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="you@company.com"
            className="flex-1 px-4 py-3 rounded-md bg-background border border-border outline-none focus:border-primary" />
          <button className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium">
            {sent ? "✓ Subscribed" : "Subscribe Free"}
          </button>
        </form>
      </div>
    </PageContainer>
  );
}
