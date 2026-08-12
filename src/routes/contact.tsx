import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { useState } from "react";
import {
  Zap, Globe2, Star, Lock, Mail, Search, BarChart3, Bot, Settings, Link2,
  FileText, Wrench, Handshake, PenLine, TrendingUp, Tag, Globe, CheckCircle2,
} from "lucide-react";

const TITLE = "Contact SEOAcademys — SEO, GEO & Growth Help. We Respond Within 24 Hours.";
const DESC = "Got an SEO question, tool suggestion, or collaboration idea? Contact the SEOAcademys team. We read every message and reply within one business day. No bots. No automated replies.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact SEOAcademys",
          url: "https://seoacademys.com/contact",
          description: DESC,
          publisher: { "@type": "Organization", name: "SEOAcademys", url: "https://seoacademys.com" },
          mainEntity: {
            "@type": "Organization",
            name: "SEOAcademys",
            email: "pinetech.webagency@gmail.com",
            url: "https://seoacademys.com",
          },
        }),
      },
    ],
  }),
  component: Contact,
});

const BADGES = [
  { icon: Zap, label: "24-Hour Response" },
  { icon: Globe2, label: "Worldwide Support" },
  { icon: Star, label: "Always Free Advice" },
  { icon: Lock, label: "No Spam, Ever" },
];

const TOPICS = [
  "Choose a topic...",
  "SEO Help / Website Ranking",
  "GEO / AI Search Optimization",
  "Keyword Research",
  "Technical SEO",
  "SEO Tool Support / Bug Report",
  "Content / Article Feedback",
  "Guest Post / Content Collaboration",
  "Business Partnership",
  "Advertising / Sponsorship",
  "Something Else",
];

const RESPONSE_TIMES = [
  { label: "Weekdays (Mon–Fri)", value: "Response within 24 hours" },
  { label: "Weekends & Holidays", value: "Response by next business day" },
  { label: "Partnership Proposals", value: "Response within 48–72 hours" },
  { label: "Tool Bug Reports", value: "Acknowledged same day" },
];

const HELP_TAGS = [
  { icon: Search, text: "Keyword Research" },
  { icon: BarChart3, text: "On-Page SEO" },
  { icon: Bot, text: "AI Search (GEO)" },
  { icon: Settings, text: "Technical SEO" },
  { icon: Link2, text: "Link Building" },
  { icon: FileText, text: "Content Strategy" },
  { icon: Wrench, text: "Tool Support" },
  { icon: Handshake, text: "Partnerships" },
  { icon: PenLine, text: "Guest Posts" },
  { icon: TrendingUp, text: "Rank Tracking" },
  { icon: Tag, text: "Schema Markup" },
  { icon: Globe, text: "E-E-A-T Strategy" },
];

const HOW_WE_HELP = [
  {
    icon: "🔍",
    title: "SEO & GEO Questions",
    body: "Ask us anything about ranking on Google, appearing in AI overviews, ChatGPT, Perplexity, or Gemini. We explain concepts clearly and give you actionable steps — not generic advice.",
  },
  {
    icon: "🛠️",
    title: "Free Tool Support",
    body: "Found a bug in one of our SEO tools? Tool not loading correctly? Tell us and we'll fix it. We take tool quality seriously — every report gets reviewed by our team directly.",
  },
  {
    icon: "✍️",
    title: "Content & Guest Posts",
    body: "Have expertise in SEO, digital marketing, or AI search? We welcome high-quality guest contributions. Write to us with your topic idea and we'll review it within 48 hours.",
  },
  {
    icon: "🤝",
    title: "Partnerships & Collaborations",
    body: "Building an SEO tool, agency, or educational resource? Let's explore how we can work together. We're open to tool integrations, content partnerships, and cross-promotions.",
  },
  {
    icon: "📢",
    title: "Advertising & Sponsorship",
    body: "Reach thousands of SEO professionals, marketers, and website owners. We offer select advertising placements that match our audience's interests. Send us your brief and we'll share our rates.",
  },
  {
    icon: "💡",
    title: "Feature Requests & Feedback",
    body: "Have an idea for a new SEO tool we should build? Feedback on our guides? We listen to every suggestion. Our best features and articles have come directly from readers like you.",
  },
];

const STATS = [
  { value: "37+", label: "Free SEO Tools on the Platform" },
  { value: "100+", label: "In-Depth SEO Guides Published" },
  { value: "24h", label: "Guaranteed Response Time" },
  { value: "$0", label: "Cost to Get Expert SEO Help" },
];

const FAQS = [
  {
    q: "How quickly will I get a reply?",
    a: "We respond to all messages within 24 hours on business days (Monday–Friday). Bug reports and tool outages are acknowledged the same day. Weekend messages are answered by the next business day.",
  },
  {
    q: "Do real people read and reply to messages?",
    a: "Yes — always. SEOAcademys does not use bots or automated reply systems for contact form messages. Every message is read and answered personally by our team.",
  },
  {
    q: "Can I pitch a guest post or article?",
    a: "Absolutely. We welcome expert contributions on SEO, GEO, technical SEO, content strategy, and AI search. Use the contact form, select 'Guest Post / Content Collaboration', and describe your topic idea. We review all pitches within 48 hours.",
  },
  {
    q: "I found a bug in one of your tools. How do I report it?",
    a: "Select 'SEO Tool Support / Bug Report' from the topic dropdown, name the tool, describe what happened, and include your browser and OS. We'll investigate and update you directly once resolved.",
  },
  {
    q: "Can I request a new SEO tool to be built?",
    a: "Yes — feature requests are one of our most valued message types. Several tools on our platform were built because readers asked for them. Describe what you need, what problem it solves, and we'll add it to our roadmap review.",
  },
  {
    q: "Is there a phone number I can call?",
    a: "We operate as an online-first platform and handle all communication via email and our contact form. This allows us to give each message the focused attention it deserves — and keep all 37 tools free.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 hover:bg-surface-2 transition"
        aria-expanded={open}
      >
        <span className="font-semibold text-sm leading-snug">{q}</span>
        <span className={`text-primary shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border bg-surface/50">
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [topic, setTopic] = useState("Choose a topic...");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || topic === "Choose a topic..." || !message) return;
    
    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree endpoint ID
      await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, website, topic, message, form: "Contact Page" })
      });
    } catch (err) {
      console.error(err);
    } finally {
      setSent(true);
    }
  };

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-surface p-8 sm:p-12 mb-10 shadow-[var(--shadow-3d)]">
        <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-mesh)" }} />
        <div className="relative max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-3">We respond within 24 hours</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Let's Talk <span className="grad-text">SEO, GEO</span> & Growth
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base max-w-xl">
            Got an SEO question, a tool suggestion, or a collaboration idea? Our team reads every message and replies within one business day. No bots. No automated replies.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {BADGES.map((b) => (
              <div key={b.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background text-sm font-medium">
                <b.icon className="size-3.5 text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 mb-12">
        {/* ── CONTACT FORM ── */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-[var(--shadow-3d)]">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold">Send Us a Message</h2>
              <p className="text-sm text-muted-foreground mt-1">We're Here to Help You Rank</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Fill in the form below and tell us what you need. Whether it's an SEO question, a bug report, a guest post pitch, or a partnership idea — we read everything personally.
              </p>
            </div>

            {sent ? (
              <div className="rounded-xl border border-success/40 bg-success/5 p-8 text-center">
                <div className="size-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="size-7 text-success" />
                </div>
                <div className="font-display text-xl font-bold text-success mb-2">Message Sent Successfully ✓</div>
                <p className="text-sm text-muted-foreground">Thanks for reaching out! We'll reply to <span className="font-medium text-foreground">{email}</span> within 24 hours on business days.</p>
                <button
                  onClick={() => { setSent(false); setFirstName(""); setLastName(""); setEmail(""); setWebsite(""); setTopic("Choose a topic..."); setMessage(""); }}
                  className="mt-5 px-5 py-2 rounded-lg border border-border text-sm hover:border-primary hover:text-primary transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@yourcompany.com"
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Your Website (Optional)</label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    What's Your Question About? <span className="text-destructive">*</span>
                  </label>
                  <select
                    required
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition text-sm"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t} disabled={t === "Choose a topic..."}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Your Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition text-sm resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg grad-primary text-primary-foreground font-semibold text-sm inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
                >
                  Send Message →
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  🔒 We respect your privacy. Your information is never shared or sold.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* ── SIDEBAR ── */}
        <div className="lg:col-span-2 space-y-5">
          {/* Direct Email */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="size-10 rounded-xl grad-primary flex items-center justify-center mb-4">
              <Mail className="size-5 text-primary-foreground" />
            </div>
            <h2 className="font-display text-lg font-bold mb-1">Email Us Directly</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Prefer email over forms? Reach out to us directly. We check our inbox every day and reply to every genuine message.
            </p>
            <a
              href="mailto:pinetech.webagency@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/40 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition"
            >
              <Mail className="size-4" />
              pinetech.webagency@gmail.com
            </a>
          </div>

          {/* Response Times */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-display text-lg font-bold mb-4">What to Expect After You Write</h2>
            <div className="space-y-3">
              {RESPONSE_TIMES.map((r) => (
                <div key={r.label} className="flex items-start justify-between gap-3 py-2.5 border-b border-border/60 last:border-0">
                  <span className="text-sm text-muted-foreground leading-snug">{r.label}</span>
                  <span className="text-sm font-medium text-right shrink-0 text-foreground">{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* We Can Help You With */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-display text-lg font-bold mb-4">We Can Help You With</h2>
            <div className="flex flex-wrap gap-2">
              {HELP_TAGS.map((tag) => (
                <span
                  key={tag.text}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-background text-xs font-medium text-muted-foreground"
                >
                  <tag.icon className="size-3 text-primary" />
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── HOW WE HELP ── */}
      <section className="mb-12">
        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-2">How We Help</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Not Just a Contact Page — A Real Resource</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            SEO Academys is built by SEO practitioners who have been in the trenches. When you write to us, you get a real answer — not a copy-paste reply.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HOW_WE_HELP.map((card) => (
            <div key={card.title} className="rounded-xl border border-border bg-surface p-5 hover:border-primary/40 transition">
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="font-display font-semibold text-base mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="rounded-2xl border border-border bg-surface p-8 sm:p-10 mb-12 shadow-[var(--shadow-3d)]">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-3">Who You're Talking To</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Real SEO Practitioners.<br />Not a Chatbot.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm mb-3">
              SEO Academys is built by digital marketing professionals who have spent years in the field — doing keyword research, building backlinks, fixing technical issues, and adapting to every Google algorithm update.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We built this platform because we saw a gap: most SEO resources are either too surface-level or locked behind expensive paywalls. Our goal is simple — give every website owner access to the same quality of SEO knowledge that enterprise brands pay thousands for.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mt-3 font-medium text-foreground">
              When you contact us, a real person reads your message and crafts a real answer. That's a promise we take seriously.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-background p-5 text-center">
                <div className="font-display text-3xl font-bold grad-text mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mb-12">
        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-2">Frequently Asked Questions</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Questions About Contacting Us</h2>
          <p className="mt-2 text-muted-foreground">Answers to the most common questions we receive about reaching our team.</p>
        </div>
        <div className="space-y-3 max-w-3xl">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center mb-4">
        <div className="text-2xl mb-3">✉️</div>
        <h2 className="font-display text-xl font-bold mb-2">Still Have a Question?</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Don't wait. Send us an email right now — we'll get back to you personally within 24 hours.
        </p>
        <a
          href="mailto:pinetech.webagency@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg grad-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition"
        >
          <Mail className="size-4" />
          pinetech.webagency@gmail.com
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          SEO Academys · Contact · pinetech.webagency@gmail.com · Response within 24 hours
        </p>
      </div>
    </PageContainer>
  );
}
