export type VsCompetitor = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  price: string;
  ourPrice: string;
  features: { name: string; theirs: boolean | string; ours: boolean | string }[];
  conclusion: string;
};

export const VS_CONTENT: Record<string, VsCompetitor> = {
  "semrush": {
    slug: "semrush",
    name: "Semrush",
    title: "Free Semrush Alternative: SEOAcademys vs Semrush (2026)",
    description: "Looking for a free Semrush alternative? Compare SEOAcademys to Semrush. Get free rank tracking, site audits, and AI SEO tools without the $129/mo price tag.",
    h1: "SEOAcademys vs Semrush: The Best Free Alternative in 2026",
    intro: "Semrush is one of the most powerful SEO platforms on the market, but at $129+ per month, it's too expensive for many freelancers, bloggers, and small businesses. If you're looking for a free Semrush alternative that covers technical auditing, rank tracking, and modern AI SEO (GEO) without the steep learning curve or high price tag, SEOAcademys offers 37+ production-grade tools completely free.",
    price: "$129.95 / month",
    ourPrice: "$0 (Forever Free)",
    features: [
      { name: "Live Technical SEO Audits", theirs: true, ours: true },
      { name: "Keyword Research & Intent", theirs: true, ours: true },
      { name: "Rank Tracking", theirs: true, ours: true },
      { name: "AI Citation Auditing (GEO)", theirs: false, ours: true },
      { name: "JSON-LD & llms.txt Generators", theirs: false, ours: true },
      { name: "Historical Backlink Database", theirs: true, ours: false },
      { name: "Account Required", theirs: "Yes", ours: "No" },
    ],
    conclusion: "If you are an enterprise agency that needs historical backlink databases and competitor PPC analysis, Semrush is worth the investment. However, if you are focused on on-page SEO, technical health, rank tracking, and optimizing for the new wave of AI Search (GEO), SEOAcademys provides a complete toolkit instantly, without requiring a credit card or even an account."
  },
  "ahrefs": {
    slug: "ahrefs",
    name: "Ahrefs",
    title: "Free Ahrefs Alternative: SEOAcademys vs Ahrefs (2026)",
    description: "Need a free Ahrefs alternative? Compare SEOAcademys and Ahrefs. Access 37+ free SEO tools for audits, keyword research, and rank tracking instantly.",
    h1: "SEOAcademys vs Ahrefs: The Best Free Alternative in 2026",
    intro: "Ahrefs is famous for its massive backlink database, but its credit-based pricing model and $99+ monthly fee can drain your budget quickly. If you want a free Ahrefs alternative to run unlimited site audits, track your keyword positions, and optimize your content for Google and AI Overviews, SEOAcademys provides a robust, zero-cost solution.",
    price: "$99.00 / month (Credit Limits Apply)",
    ourPrice: "$0 (Unlimited, No Credits)",
    features: [
      { name: "Unlimited Technical Audits", theirs: false, ours: true },
      { name: "Keyword Difficulty Scores", theirs: true, ours: true },
      { name: "Real-time SERP Analysis", theirs: true, ours: true },
      { name: "Generative Engine Optimization (GEO)", theirs: false, ours: true },
      { name: "Schema & Structured Data Builders", theirs: false, ours: true },
      { name: "Massive Link Index", theirs: true, ours: false },
      { name: "No Signup Required", theirs: false, ours: true },
    ],
    conclusion: "Ahrefs is unparalleled when it comes to deep off-page link analysis and reverse-engineering competitor backlink profiles. But for daily on-page optimization, technical site health checks, and preparing your content for AI search engines like ChatGPT and Gemini, SEOAcademys is a faster, completely free alternative that doesn't limit your usage with credits."
  },
  "moz": {
    slug: "moz",
    name: "Moz",
    title: "Free Moz Alternative: SEOAcademys vs Moz Pro (2026)",
    description: "Looking for a free Moz Pro alternative? Compare SEOAcademys to Moz. Get unlimited technical SEO tools, rank tracking, and AI citation audits for free.",
    h1: "SEOAcademys vs Moz Pro: The Best Free Alternative in 2026",
    intro: "Moz Pro helped pioneer the SEO software industry, but its platform hasn't evolved as fast as the search landscape. At $99 per month, you might be overpaying for basic rank tracking and site crawls. As a free Moz alternative, SEOAcademys offers 37 modern, fast, browser-based tools that handle technical SEO, content readability, and AI Search Optimization (GEO) without the monthly fee.",
    price: "$99.00 / month",
    ourPrice: "$0 (Forever Free)",
    features: [
      { name: "On-Page Grader & Content Checks", theirs: true, ours: true },
      { name: "Rank Tracking", theirs: true, ours: true },
      { name: "Domain Authority (DA) Metric", theirs: true, ours: false },
      { name: "AI Overview Readiness Scores", theirs: false, ours: true },
      { name: "HTTP Header & Security Checks", theirs: false, ours: true },
      { name: "Schema Validator", theirs: false, ours: true },
      { name: "Instant Browser-Based Execution", theirs: false, ours: true },
    ],
    conclusion: "If you rely heavily on Moz's proprietary Domain Authority (DA) metric, you'll need to stick with Moz. But if you want actionable technical data, faster audits, and modern tools to optimize for Generative AI search engines, SEOAcademys gives you everything you need directly in your browser, completely free."
  },
  "ubersuggest": {
    slug: "ubersuggest",
    name: "Ubersuggest",
    title: "Free Ubersuggest Alternative: SEOAcademys vs Ubersuggest",
    description: "Need a truly free Ubersuggest alternative? Compare SEOAcademys and Ubersuggest. Get unlimited keyword research and SEO audits without paywalls.",
    h1: "SEOAcademys vs Ubersuggest: The Best Free Alternative",
    intro: "Ubersuggest positions itself as a budget-friendly SEO tool, but its 'free' version aggressively limits your daily searches and pushes you toward a paid subscription. SEOAcademys is a truly free Ubersuggest alternative. We offer 37+ production-grade tools—including keyword research, site audits, and rank tracking—with absolutely zero usage caps, paywalls, or required signups.",
    price: "$29.00 / month (or aggressive daily limits)",
    ourPrice: "$0 (Unlimited forever)",
    features: [
      { name: "Unlimited Keyword Searches", theirs: false, ours: true },
      { name: "Unlimited Site Audits", theirs: false, ours: true },
      { name: "Rank Tracking", theirs: true, ours: true },
      { name: "Generative AI Search (GEO) Tools", theirs: false, ours: true },
      { name: "Advanced Technical SEO Checkers", theirs: false, ours: true },
      { name: "Historical Traffic Estimates", theirs: true, ours: false },
      { name: "Zero Paywalls / No Signup", theirs: false, ours: true },
    ],
    conclusion: "Ubersuggest is a good starting point for beginners, but its strict daily limits on free accounts make it frustrating to use for serious work. SEOAcademys provides a more comprehensive, technically advanced toolkit with absolutely no limits, making it the perfect free alternative for marketers who need to get work done without hitting a paywall."
  }
};
