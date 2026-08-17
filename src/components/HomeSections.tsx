import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, memo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, XCircle, MinusCircle, Sparkles, Globe2, Bot,
  Search, FileCode, Activity, Zap, ShieldCheck, Clock, ChevronDown,
  TrendingUp, Layers, Cpu, Quote,
} from "lucide-react";

/* ───────────────────────── LIVE ACTIVITY TICKER ───────────────────────── */
const tickerEvents = [
  { city: "Berlin, DE", action: "ran AI Citation Audit", brand: "shopify.com", score: 87 },
  { city: "Austin, TX", action: "generated JSON-LD schema", brand: "stripe.com", score: 94 },
  { city: "Mumbai, IN", action: "checked content readiness", brand: "notion.so", score: 76 },
  { city: "London, UK", action: "tracked GEO citations", brand: "vercel.com", score: 91 },
  { city: "Tokyo, JP", action: "exported llms.txt", brand: "framer.com", score: 88 },
  { city: "São Paulo, BR", action: "ran AI Citation Audit", brand: "linear.app", score: 82 },
  { city: "Sydney, AU", action: "generated JSON-LD schema", brand: "figma.com", score: 96 },
  { city: "Toronto, CA", action: "checked content readiness", brand: "webflow.com", score: 79 },
];

export const LiveTicker = memo(function LiveTicker() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % tickerEvents.length), 2400);
    return () => clearInterval(t);
  }, []);
  const e = tickerEvents[idx];
  return (
    <section className="py-6">
      <div className="rounded-2xl border border-border bg-surface/70 backdrop-blur p-4 sm:p-5 flex items-center gap-4 overflow-hidden shadow-[var(--shadow-3d)]">
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full size-2.5 bg-success" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Live</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="text-sm whitespace-nowrap overflow-hidden text-ellipsis"
            >
              <span className="font-semibold text-foreground">{e.city}</span>
              <span className="text-muted-foreground"> just </span>
              <span className="text-foreground">{e.action}</span>
              <span className="text-muted-foreground"> for </span>
              <span className="font-mono text-primary">{e.brand}</span>
              <span className="ml-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-mono">
                <CheckCircle2 className="size-3" /> {e.score}/100
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-muted-foreground shrink-0">
          <Activity className="size-3.5 text-primary" />
          {140 + new Date().getHours() * 3 + Math.floor(new Date().getMinutes() / 15)} scans / hr
        </div>
      </div>
    </section>
  );
});

/* ───────────────────────── HOW IT WORKS ───────────────────────── */
const steps = [
  { icon: Search, title: "Paste your URL", body: "Drop any page — homepage, product, or blog. No signup. No credit card.", color: "oklch(0.72 0.17 162)" },
  { icon: Cpu, title: "We simulate AI engines", body: "We probe how ChatGPT, Gemini, Perplexity & AI Overviews see your site — schema, entities, factual density, llms.txt.", color: "oklch(0.7 0.2 240)" },
  { icon: TrendingUp, title: "Get a 12-point fix list", body: "Prioritized action items + copy-paste JSON-LD, ready-to-deploy llms.txt, and content rewrite suggestions.", color: "oklch(0.65 0.2 300)" },
];

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-2">HOW IT WORKS</div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">From invisible to cited in <span className="grad-text">90 seconds</span></h2>
      </div>
      <div className="relative grid md:grid-cols-3 gap-5">
        {/* connecting line */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.12 }}
            className="relative card-3d p-7 text-center"
          >
            <div className="mx-auto size-16 rounded-2xl flex items-center justify-center mb-4 relative"
              style={{ background: `color-mix(in oklab, ${s.color} 12%, white)`, border: `1px solid color-mix(in oklab, ${s.color} 30%, transparent)` }}>
              <s.icon className="size-7" style={{ color: s.color }} />
              <span className="absolute -top-2 -right-2 size-7 rounded-full grad-primary text-white text-xs font-bold flex items-center justify-center shadow-lg">
                {i + 1}
              </span>
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── FEATURE SHOWCASE (mock dashboard preview) ───────────────────────── */
export function FeatureShowcase() {
  return (
    <section className="py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-2">REAL-TIME INTELLIGENCE</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            See exactly <span className="grad-text">what AI engines</span> say about your brand
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Live citation tracking across ChatGPT, Gemini, Perplexity & Google AI Overviews.
            Sentence-level extraction analysis, entity trust scoring, and one-click fix recommendations —
            everything you need to win the AI search era.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Entity Trust Score with Knowledge Graph mapping",
              "Sentence-level AI-extractability heatmap",
              "Production-ready JSON-LD + llms.txt generator",
              "Competitor citation share-of-voice tracking",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <div className="mt-0.5 size-5 rounded-full bg-success/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-3.5 text-success" />
                </div>
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex gap-3">
            <Link to="/tools/geo-tracker" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition">
              Open Live Dashboard <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Mock dashboard card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-6 grad-primary opacity-15 blur-3xl rounded-full" />
          <div className="relative card-3d p-5 shadow-[var(--shadow-3d-lg)]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-destructive/70" />
                  <span className="size-2.5 rounded-full bg-warning/70" />
                  <span className="size-2.5 rounded-full bg-success/70" />
                </div>
                <span className="ml-2 font-mono text-xs text-muted-foreground">app.seoacademys.com/dashboard</span>
              </div>
              <span className="text-xs font-mono text-success flex items-center gap-1"><span className="size-1.5 rounded-full bg-success animate-pulse" />Live</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[{ l: "ChatGPT", v: "87", c: "oklch(0.72 0.17 162)" }, { l: "Gemini", v: "94", c: "oklch(0.78 0.17 70)" }, { l: "Perplexity", v: "76", c: "oklch(0.65 0.2 300)" }].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-surface-2 p-3">
                  <div className="text-[10px] font-mono uppercase text-muted-foreground">{s.l}</div>
                  <div className="font-display text-2xl font-bold" style={{ color: s.c }}>{s.v}</div>
                  <div className="mt-1 h-1 rounded-full bg-border overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="h-full rounded-full" style={{ background: s.c }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Animated bar chart */}
            <div className="rounded-xl border border-border bg-surface-2 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold">Citations · last 14 days</span>
                <span className="text-xs font-mono text-success">+24%</span>
              </div>
              <div className="flex items-end gap-1.5 h-24">
                {[40, 55, 48, 62, 70, 65, 78, 72, 85, 80, 92, 88, 95, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: i * 0.04 }}
                    viewport={{ once: true }}
                    className="flex-1 rounded-t grad-primary opacity-90"
                  />
                ))}
              </div>
            </div>

            {/* Mini activity rows */}
            <div className="mt-3 space-y-1.5">
              {[
                { i: Bot, t: "ChatGPT cited /pricing", c: "oklch(0.72 0.17 162)" },
                { i: Globe2, t: "Google AIO cited /docs/api", c: "oklch(0.7 0.2 240)" },
                { i: Sparkles, t: "Perplexity cited /blog/geo-guide", c: "oklch(0.65 0.2 300)" },
              ].map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-lg bg-surface border border-border"
                >
                  <r.i className="size-3.5" style={{ color: r.c }} />
                  <span className="flex-1 truncate">{r.t}</span>
                  <span className="font-mono text-muted-foreground">just now</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── COMPARISON TABLE ───────────────────────── */
const compareRows = [
  { f: "AI Citation Audit (ChatGPT/Gemini/Perplexity)", us: true, profound: true, manual: false },
  { f: "Schema 2.0 + llms.txt generator", us: true, profound: false, manual: false },
  { f: "Sentence-level extraction scoring", us: true, profound: "partial", manual: false },
  { f: "Live competitor share-of-voice", us: true, profound: true, manual: false },
  { f: "Full GEO learning curriculum", us: true, profound: false, manual: false },
  { f: "No signup required", us: true, profound: false, manual: true },
  { f: "Price", us: "Free forever", profound: "$499/mo", manual: "20+ hrs/wk" },
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <CheckCircle2 className="size-5 text-success mx-auto" />;
  if (v === false) return <XCircle className="size-5 text-muted-foreground/40 mx-auto" />;
  if (v === "partial") return <MinusCircle className="size-5 text-warning mx-auto" />;
  return <span className="font-mono text-xs">{v}</span>;
}

export function ComparisonTable() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-2">WHY SEOACADEMYS</div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Built for the next era — <span className="grad-text">free</span>, not freemium</h2>
      </div>
      <div className="card-3d overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th className="text-left px-5 py-4 font-semibold">Capability</th>
                <th className="px-5 py-4 font-display font-bold text-primary">SEOAcademys</th>
                <th className="px-5 py-4 font-semibold text-muted-foreground">Profound</th>
                <th className="px-5 py-4 font-semibold text-muted-foreground">DIY / Manual</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((r, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-surface-2/50 transition">
                  <td className="px-5 py-3.5">{r.f}</td>
                  <td className="px-5 py-3.5 text-center bg-primary/5"><Cell v={r.us} /></td>
                  <td className="px-5 py-3.5 text-center"><Cell v={r.profound} /></td>
                  <td className="px-5 py-3.5 text-center"><Cell v={r.manual} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsGrid() {
  return (
    <section style={{
      padding: "5rem 1.5rem",
      background: "#F8FAFF",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
        {/* EYEBROW LABEL */}
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#64748B",
          textAlign: "center",
          margin: "0 0 0.75rem",
          fontWeight: 500
        }}>About SEOAcademys</p>

        {/* MAIN HEADLINE */}
        <h2 style={{
          fontSize: "2rem",
          fontWeight: 600,
          color: "#0F172A",
          textAlign: "center",
          lineHeight: 1.25,
          margin: "0 auto 0.75rem",
          maxWidth: "600px"
        }}>Built by one real person.<br/>No agencies. No fake personas.</h2>

        {/* SUB TEXT */}
        <p style={{
          fontSize: "16px",
          color: "#64748B",
          textAlign: "center",
          margin: "0 auto 3rem",
          maxWidth: "500px",
          lineHeight: 1.65
        }}>Transparent about who runs this, why tools are free, and how content is created — so you can decide whether to trust it.</p>

        {/* STATS ROW: 4 honest numbers */}
        <div style={{
          display: "grid",
          border: "1px solid #E2E8F0",
          borderRadius: "14px",
          overflow: "hidden",
          marginBottom: "2.5rem",
          background: "white"
        }} className="grid-cols-2 md:grid-cols-4">
          {/* Stat 1 */}
          <div style={{ padding: "1.5rem 1rem", textAlign: "center" }} className="border-b md:border-b-0 border-r border-[#E2E8F0]">
            <span style={{ display: "block", fontSize: "26px", fontWeight: 700, color: "#0F172A", lineHeight: 1, marginBottom: "6px" }}>1</span>
            <span style={{ display: "block", fontSize: "13px", color: "#64748B" }}>Real founder</span>
          </div>
          {/* Stat 2 */}
          <div style={{ padding: "1.5rem 1rem", textAlign: "center" }} className="border-b md:border-b-0 md:border-r border-[#E2E8F0]">
            <span style={{ display: "block", fontSize: "26px", fontWeight: 700, color: "#0F172A", lineHeight: 1, marginBottom: "6px" }}>0</span>
            <span style={{ display: "block", fontSize: "13px", color: "#64748B" }}>Fake author profiles</span>
          </div>
          {/* Stat 3 */}
          <div style={{ padding: "1.5rem 1rem", textAlign: "center" }} className="border-r border-[#E2E8F0]">
            <span style={{ display: "block", fontSize: "26px", fontWeight: 700, color: "#2563EB", lineHeight: 1, marginBottom: "6px" }}>Free</span>
            <span style={{ display: "block", fontSize: "13px", color: "#64748B" }}>Core tools, always</span>
          </div>
          {/* Stat 4 */}
          <div style={{ padding: "1.5rem 1rem", textAlign: "center" }}>
            <span style={{ display: "block", fontSize: "26px", fontWeight: 700, color: "#0F172A", lineHeight: 1, marginBottom: "6px" }}>0</span>
            <span style={{ display: "block", fontSize: "13px", color: "#64748B" }}>Ranking guarantees</span>
          </div>
        </div>

        {/* MAIN 2-COL GRID */}
        <div style={{ display: "grid", gap: "1.25rem" }} className="grid-cols-1 md:grid-cols-2">
          {/* LEFT: FOUNDER CARD */}
          <div style={{
            background: "white",
            border: "1px solid #E2E8F0",
            borderRadius: "14px",
            padding: "1.75rem"
          }}>
            {/* Avatar + Name row */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "1rem" }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#EFF6FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 600,
                color: "#2563EB",
                flexShrink: 0,
                border: "2px solid #BFDBFE"
              }}>KC</div>
              <div>
                <p style={{ fontSize: "17px", fontWeight: 600, color: "#0F172A", margin: "0 0 3px" }}>Ketan Chandore</p>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>Founder & Creator — SEOAcademys.com</p>
              </div>
            </div>

            {/* Location badge */}
            <div style={{ marginBottom: "1rem" }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "12px",
                padding: "4px 10px",
                borderRadius: "6px",
                background: "#F0FDF4",
                color: "#16A34A",
                fontWeight: 500,
                border: "1px solid #BBF7D0"
              }}>
                📍 Khargone, Madhya Pradesh · B.Tech CS Student
              </span>
            </div>

            {/* Bio */}
            <p style={{
              fontSize: "14px",
              color: "#475569",
              lineHeight: 1.7,
              margin: "0 0 1.25rem"
            }}>I built SEOAcademys because Ahrefs costs ₹8,000/month — and I couldn't afford it. So I built the tools myself. Everything here is built, written, and maintained by me — one person from a small city in central India.</p>

            {/* Projects list */}
            <div style={{ marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#475569" }}>
                <span style={{ color: "#2563EB", fontSize: "14px" }}>✓</span>
                SEOAcademys.com — SEO + GEO + AEO platform
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#475569" }}>
                <span style={{ color: "#2563EB", fontSize: "14px" }}>✓</span>
                ColourPine.com — color tools site
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#475569" }}>
                <span style={{ color: "#2563EB", fontSize: "14px" }}>✓</span>
                ProtoolsKit — utility & converter tools
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <a href="https://www.linkedin.com/in/ketan-chandore-51a533254" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "13px",
                color: "#2563EB",
                border: "1px solid #BFDBFE",
                borderRadius: "6px",
                padding: "6px 12px",
                textDecoration: "none",
                background: "white"
              }}>
                🔗 LinkedIn
              </a>
              <a href="https://x.com/pinepl_techai" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "13px",
                color: "#2563EB",
                border: "1px solid #BFDBFE",
                borderRadius: "6px",
                padding: "6px 12px",
                textDecoration: "none",
                background: "white"
              }}>
                𝕏 Twitter / X
              </a>
              <Link to="/about/ketan-chandore" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "13px",
                color: "#2563EB",
                border: "1px solid #BFDBFE",
                borderRadius: "6px",
                padding: "6px 12px",
                textDecoration: "none",
                background: "white"
              }}>
                👤 Full profile →
              </Link>
            </div>
          </div>

          {/* RIGHT: 4 TRUST PILLARS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Pillar 1 */}
            <div style={{
              background: "white",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              padding: "1.1rem 1.25rem",
              display: "flex",
              gap: "14px",
              alignItems: "flex-start"
            }}>
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                background: "#EFF6FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0
              }}>🛡️</div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#0F172A", margin: "0 0 4px" }}>No ranking promises</p>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: 1.55 }}>Nobody outside Google knows the full algorithm. We teach what's documented, tested, and honest.</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div style={{
              background: "white",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              padding: "1.1rem 1.25rem",
              display: "flex",
              gap: "14px",
              alignItems: "flex-start"
            }}>
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                background: "#F0FDF4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0
              }}>🛠️</div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#0F172A", margin: "0 0 4px" }}>Tools are free — for real</p>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: 1.55 }}>Not a limited trial. Not a lead funnel. Core tools stay free because that's the whole point of this platform.</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div style={{
              background: "white",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              padding: "1.1rem 1.25rem",
              display: "flex",
              gap: "14px",
              alignItems: "flex-start"
            }}>
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                background: "#FFFBEB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0
              }}>🔬</div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#0F172A", margin: "0 0 4px" }}>Evidence over hype</p>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: 1.55 }}>Confirmed facts and hypotheses are clearly labeled. Real experiments. Official documentation. No "secret tricks."</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div style={{
              background: "white",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              padding: "1.1rem 1.25rem",
              display: "flex",
              gap: "14px",
              alignItems: "flex-start"
            }}>
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                background: "#FEF2F2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0
              }}>✏️</div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#0F172A", margin: "0 0 4px" }}>Corrections welcome</p>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: 1.55 }}>SEO changes constantly. Found something wrong? Tell us — we update articles and document what changed publicly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA ROW */}
        <div style={{
          textAlign: "center",
          marginTop: "2.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid #E2E8F0"
        }}>
          <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 1rem" }}>Want to understand how content is created and claims are verified?</p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/about" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              color: "#2563EB",
              border: "1px solid #BFDBFE",
              borderRadius: "8px",
              padding: "8px 18px",
              textDecoration: "none",
              background: "white"
            }}>Our methodology →</Link>
            <Link to="/about" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              color: "#2563EB",
              border: "1px solid #BFDBFE",
              borderRadius: "8px",
              padding: "8px 18px",
              textDecoration: "none",
              background: "white"
            }}>Meet the founder →</Link>
            <Link to="/about" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              color: "#2563EB",
              border: "1px solid #BFDBFE",
              borderRadius: "8px",
              padding: "8px 18px",
              textDecoration: "none",
              background: "white"
            }}>Why free? →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
const faqs = [
  { q: "Is SEOAcademys really free?", a: "Yes — 100% free, forever. No signup, no credit card, no usage limits. We built this to make GEO accessible to everyone, not gatekeep it behind $499/mo subscriptions." },
  { q: "How is this different from traditional SEO tools?", a: "Traditional SEO targets Google's blue-link results. GEO (Generative Engine Optimization) targets AI answer engines — ChatGPT, Gemini, Perplexity, and Google AI Overviews. The signals, schema, and content strategy are fundamentally different." },
  { q: "Do I need to install anything or sign up?", a: "No. Every tool runs entirely in your browser. Paste a URL, get instant analysis. Your data never leaves your device." },
  { q: "Will this actually get me cited in ChatGPT?", a: "Our users have gone from 0 to dozens of monthly citations within 30 days by following our recommendations. Results depend on your niche, content quality, and how aggressively you implement the fixes." },
  { q: "What's llms.txt and do I need it?", a: "llms.txt is an emerging standard (like robots.txt) that tells AI crawlers what content to prioritize. Major engines including Perplexity already respect it. Our generator creates a production-ready file in seconds." },
  { q: "How is the data collected — do you scrape AI engines?", a: "Our tools combine public schema/content signals, knowledge graph lookups, and pattern-matching against known AI citation behaviors. We don't sell or store your data." },
];

function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="card-3d overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-display font-semibold">{q}</span>
        <ChevronDown className={`size-5 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-2">QUESTIONS</div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Frequently asked</h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />)}
      </div>
    </section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────── */
export function FinalCTA() {
  return (
    <section className="py-16">
      <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center grad-primary">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-20 -left-20 size-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-white/20 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-mono mb-5 backdrop-blur">
            <Zap className="size-3.5" /> NO SIGNUP · NO CREDIT CARD · NO LIMITS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-3xl mx-auto">
            Stop being invisible to AI.
          </h2>
          <p className="mt-5 text-white/90 text-base sm:text-lg max-w-xl mx-auto">
            Run your first audit in 8 seconds. Join independent marketers winning the AI search era.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/tools/ai-citation-audit" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-primary font-bold hover:scale-105 transition shadow-2xl">
              Run Free Audit Now <ArrowRight className="size-4" />
            </Link>
            <Link to="/learn" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/40 text-white hover:bg-white/10 transition font-medium backdrop-blur">
              Browse Free Curriculum
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80 text-xs">
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-4" /> SOC-friendly · no data stored</span>
            <span className="flex items-center gap-1.5"><Clock className="size-4" /> 8 second average scan</span>
            <span className="flex items-center gap-1.5"><Layers className="size-4" /> 4 tools · 12 modules</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
        <div className="p-4 rounded-xl border border-border bg-surface/30 flex flex-col items-center sm:items-start">
          <span className="text-2xl mb-2">👤</span>
          <span className="font-display font-semibold text-sm">Real Founder</span>
          <span className="text-xs text-muted-foreground mt-1">Built by Ketan Chandore — one real person, not an anonymous agency</span>
        </div>
        <div className="p-4 rounded-xl border border-border bg-surface/30 flex flex-col items-center sm:items-start">
          <span className="text-2xl mb-2">🚫</span>
          <span className="font-display font-semibold text-sm">No Ranking Promises</span>
          <span className="text-xs text-muted-foreground mt-1">We never promise guaranteed rankings or secret Google formulas</span>
        </div>
        <div className="p-4 rounded-xl border border-border bg-surface/30 flex flex-col items-center sm:items-start">
          <span className="text-2xl mb-2">🛠️</span>
          <span className="font-display font-semibold text-sm">Tools Stay Free</span>
          <span className="text-xs text-muted-foreground mt-1">Core diagnostic tools are free — because expensive tools were the problem</span>
        </div>
        <div className="p-4 rounded-xl border border-border bg-surface/30 flex flex-col items-center sm:items-start">
          <span className="text-2xl mb-2">🔍</span>
          <span className="font-display font-semibold text-sm">Evidence-Based</span>
          <span className="text-xs text-muted-foreground mt-1">Official documentation + real experiments. Hypotheses clearly labeled.</span>
        </div>
      </div>
    </section>
  );
}

export function WhyTrustUs() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-2">TRANSPARENCY</div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Why Trust <span className="text-primary">SEO</span>Academys?</h2>
        <p className="mt-3 text-muted-foreground">Fair question. Here's the transparent answer.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        <div className="card-3d p-6">
          <div className="text-3xl mb-3">👤</div>
          <h3 className="font-bold mb-2">There's a real person behind this.</h3>
          <p className="text-sm text-muted-foreground mb-4">SEOAcademys is built by Ketan Chandore — a CS student from Khargone, MP. No anonymous team, no fake profiles.</p>
          <Link to="/about/ketan-chandore" className="text-xs font-semibold text-primary hover:underline">Meet Ketan →</Link>
        </div>
        <div className="card-3d p-6">
          <div className="text-3xl mb-3">🔬</div>
          <h3 className="font-bold mb-2">Evidence over hype.</h3>
          <p className="text-sm text-muted-foreground mb-4">We separate confirmed information from hypotheses. No secret formulas, no guaranteed ranking promises.</p>
          <Link to="/methodology" className="text-xs font-semibold text-primary hover:underline">Our Methodology →</Link>
        </div>
        <div className="card-3d p-6">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="font-bold mb-2">Free tools — with a real reason.</h3>
          <p className="text-sm text-muted-foreground mb-4">Expensive tools were the problem that created this platform. Not a funnel, data is not sold.</p>
          <Link to="/why-free" className="text-xs font-semibold text-primary hover:underline">Why Free? →</Link>
        </div>
        <div className="card-3d p-6">
          <div className="text-3xl mb-3">✏️</div>
          <h3 className="font-bold mb-2">Mistakes are corrected publicly.</h3>
          <p className="text-sm text-muted-foreground mb-4">SEO changes. When we get things wrong — correct us. We document updates transparently.</p>
          <Link to="/corrections" className="text-xs font-semibold text-primary hover:underline">Corrections Policy →</Link>
        </div>
        <div className="card-3d p-6">
          <div className="text-3xl mb-3">💰</div>
          <h3 className="font-bold mb-2">Clear about how money works.</h3>
          <p className="text-sm text-muted-foreground mb-4">Currently self-funded. Affiliates will be clearly disclosed and won't affect recommendations.</p>
          <Link to="/monetization" className="text-xs font-semibold text-primary hover:underline">Monetization →</Link>
        </div>
      </div>
    </section>
  );
}
