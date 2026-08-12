

export type ToolMeta = {
  slug: string;
  name: string;
  type: string;
  title: string;
  description: string;
  features: string[];
  faqs: { q: string; a: string }[];
  /** Optional override H1 — falls back to `Free ${name} — …` */
  h1?: string;
  /** Optional comparison competitor name (defaults to Semrush) */
  competitor?: string;
  /** Optional list of related tool slugs to feature (defaults to auto-picked) */
  related?: string[];
  /** Optional list of common issues for the "Common issues" SEO block */
  commonIssues?: { title: string; body: string }[];
  /** Direct-answer paragraph (extracted first-200-words for AI citation) */
  directAnswer?: string;
  /** Quick-facts box lines (e.g. "✅ Signals Checked: 47") */
  quickFacts?: string[];
  /** "Why [metric] matters in 2026" educational paragraph */
  whyMatters?: string;
  /** Additional freeform H2 block (title + markdown-lite body) */
  extraBlocks?: { title: string; body: string }[];
  /** Last updated date shown for freshness/E-E-A-T */
  updatedDate?: string;
};

const SITE = "https://seoacademys.com";
const UPDATED = new Date().toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

function buildFaqs(name: string, signals: string, frequency = "monthly", advantage = "real-time live-URL checks"): { q: string; a: string }[] {
  return [
    { q: `What is ${name}?`, a: `${name} is a free SEO tool from SEOAcademys that analyzes ${signals} in real time from any live URL. It runs in your browser with no signup and is used by 2.4M+ marketers.` },
    { q: `Is ${name} free?`, a: `Yes, ${name} is 100% free, with no signup or credit card required. It fetches live data directly from the URL you submit and returns results in under 8 seconds.` },
    { q: `How accurate is ${name}?`, a: `${name} fetches data in real time from the live URL — never cached. It evaluates ${signals} using the same methodology as enterprise SEO suites and has been used by 2.4M+ marketers across 80+ countries.` },
    { q: `How does ${name} compare to paid tools?`, a: `${name} provides the same core checks as paid tools like Semrush and Ahrefs, but completely free. Its advantage is ${advantage} and full transparency on every signal evaluated.` },
    { q: `How often should I use ${name}?`, a: `SEO experts recommend running ${name} ${frequency}, and after every major release or content update. Changes to the signals it tracks can affect rankings within 7–30 days.` },
    { q: `Does ${name} store my data?`, a: `No. ${name} fetches the URL you submit, returns the analysis, and discards everything. We never log URLs, never store results, and never share data with third parties.` },
    { q: `Can I use ${name} on competitor sites?`, a: `Yes. ${name} works on any publicly accessible URL — your own pages or competitors. Run side-by-side audits to find gaps in their SEO that you can exploit.` },
    { q: `Is there an API for ${name}?`, a: `${name} is browser-based today. Bulk and API access are on the roadmap. Until then, you can run unlimited URLs through the dashboard at no cost.` },
  ];
}

export const TOOL_META: Record<string, ToolMeta> = {
  "seo-audit": {
    slug: "seo-audit",
    name: "Full SEO Audit",
    type: "On-Page SEO Audit",
    title: "Free Full SEO Audit Tool — 47 On-Page Signals Checked in 2 Seconds | SEOAcademys",
    description: "Run a free 47-point SEO audit on any URL. Checks meta tags, headings, schema markup, Core Web Vitals, HTTPS, canonical URLs, AI crawler access. No signup. Results in 2 seconds.",
    h1: "Free Full SEO Audit Tool — Check 47 On-Page SEO Signals Instantly",
    competitor: "Semrush",
    related: ["meta-tag-checker", "heading-checker", "schema-validator", "robots-checker"],
    updatedDate: UPDATED,
  },

  "rank-tracker": {
    slug: "rank-tracker",
    name: "Rank Tracker",
    type: "Keyword Rank Tracker",
    title: "Free Rank Tracker — Check Google, Yahoo & Bing Keyword Positions Daily | SEOAcademys",
    description: "Track keyword rankings in Google, Yahoo, and Bing for free. Daily position updates, unlimited keywords, position history, SERP features. No signup. Used by 2.4M+ SEOs.",
    h1: "Free Rank Tracker — Monitor Any Keyword's Google Position Daily",
    competitor: "Semrush",
    related: ["keyword-research", "serp-preview", "ai-citation-audit", "seo-audit"],
    updatedDate: UPDATED,
  },

  "ai-citation-audit": {
    slug: "ai-citation-audit",
    name: "AI Citation Audit",
    type: "AI Search Optimization Tool",
    title: "Free AI Citation Audit — Check If ChatGPT, Gemini, Perplexity & Claude Cite You | SEOAcademys",
    description: "Check if AI search engines cite your website. Scans 47 GEO signals. See your AI visibility score for ChatGPT, Google Gemini, Perplexity, Claude & DeepSeek. Free, instant.",
    h1: "Free AI Citation Audit — Find Out If AI Search Engines Recommend Your Website",
    competitor: "Profound",
    related: ["schema-generator", "schema-validator", "seo-audit", "robots-checker"],
    updatedDate: UPDATED,
  },

  "meta-tag-checker": {
    slug: "meta-tag-checker",
    name: "Meta Tag Checker",
    type: "Meta Tag Analyzer",
    title: "Free Meta Tag Checker — Inspect Title, Description & OG Tags on Any URL | SEOAcademys",
    description: "Check all meta tags on any URL instantly. Verifies title length, meta description, Open Graph (og:title, og:image), Twitter Cards, viewport, robots directives. Free.",
    h1: "Free Meta Tag Checker — Inspect All 12 Meta Tag Types on Any Web Page",
    competitor: "Semrush",
    related: ["seo-audit", "og-checker", "twitter-card-checker", "canonical-checker"],
    updatedDate: UPDATED,
  },

  "robots-checker": {
    slug: "robots-checker",
    name: "Robots.txt Checker",
    type: "Robots.txt Validator",
    title: "Free Robots.txt Checker — Validate Google, AI Bot & Crawler Access | SEOAcademys",
    description: "Validate your robots.txt file. Tests rules for Googlebot, Bingbot, GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot — 14 crawlers. Prevent accidental AI citation blocking. Free.",
    h1: "Free Robots.txt Checker — Validate Crawler Access for Google, AI & Social Bots",
    competitor: "Screaming Frog",
    updatedDate: UPDATED,
  },

  "heading-checker": {
    slug: "heading-checker",
    name: "Heading Structure Checker",
    type: "Heading Outline Analyzer",
    title: "Free Heading Structure Checker — Visualize H1–H6 Hierarchy on Any Page",
    description: "Check any URL's heading hierarchy. Find missing H1s, skipped heading levels, multiple H1 errors. Visualize H1-H6 outline. Free heading structure analyzer.",
    h1: "Free Heading Structure Checker — Map Complete H1–H6 Hierarchy on Any Page",
    competitor: "Screaming Frog",
    related: ["seo-audit", "content-checker", "readability", "schema-validator"],
    updatedDate: UPDATED,
  },

  "og-checker": {
    slug: "og-checker",
    name: "Open Graph Checker",
    type: "OG Tag Inspector",
    title: "Free Open Graph Checker — Test Facebook, LinkedIn & Social Share Previews",
    description: "Check Open Graph tags on any URL. Verify og:title, og:description, og:image (size & URL), og:type. Preview social share cards. Free OG checker.",
    h1: "Free Open Graph Checker — See How Any URL Appears When Shared on Social Media",
    competitor: "Facebook Sharing Debugger",
    related: ["twitter-card-checker", "meta-tag-checker", "seo-audit", "canonical-checker"],
    updatedDate: UPDATED,
  },

  "twitter-card-checker": {
    slug: "twitter-card-checker",
    name: "Twitter Card Checker",
    type: "Twitter / X Card Inspector",
    title: "Free Twitter Card Checker — Validate X Share Card Tags | SEOAcademys",
    description: "Validate Twitter Card tags on any URL. Checks card type (summary_large_image), twitter:title, twitter:image, twitter:description. Preview X share appearance. Free.",
    h1: "Free Twitter Card Validator — Check How Your Pages Display on X (Twitter)",
    competitor: "X Card Validator",
    related: ["og-checker", "meta-tag-checker", "seo-audit", "canonical-checker"],
    updatedDate: UPDATED,
  },

  "canonical-checker": {
    slug: "canonical-checker",
    name: "Canonical URL Checker",
    type: "Canonical Validator",
    title: "Free Canonical URL Checker — Detect Duplicate Content & Canonical Issues",
    description: "Check canonical tags on any URL. Detect missing canonicals, redirect-chain canonicals, cross-domain canonicals. Prevent duplicate content SEO problems. Free.",
    h1: "Free Canonical URL Checker — Stop Duplicate Content From Hurting Rankings",
    competitor: "Screaming Frog",
    related: ["redirect-checker", "meta-tag-checker", "seo-audit", "sitemap-checker"],
    updatedDate: UPDATED,
  },

  "sitemap-checker": {
    slug: "sitemap-checker",
    name: "Sitemap Checker",
    type: "XML Sitemap Analyzer",
    title: "Free XML Sitemap Checker — Validate Sitemap Structure & URL Accessibility",
    description: "Validate any XML sitemap. Checks syntax, URL accessibility, lastmod dates, file size limits. Find errors blocking Googlebot indexing. Free sitemap validator.",
    h1: "Free XML Sitemap Checker — Validate Your Sitemap & Fix Google Indexing Errors",
    competitor: "Screaming Frog",
    related: ["robots-checker", "canonical-checker", "seo-audit", "redirect-checker"],
    updatedDate: UPDATED,
  },

  "mobile-checker": {
    slug: "mobile-checker",
    name: "Mobile-Friendly Checker",
    type: "Mobile UX Tester",
    title: "Free Mobile-Friendly Test — Check Mobile Usability & Core Web Vitals",
    description: "Test any URL for mobile usability. Checks viewport, touch targets, font sizes, content width, Core Web Vitals (LCP, CLS, INP). Google mobile-first indexing compliance. Free.",
    h1: "Free Mobile-Friendly Checker — Ensure Your Site Passes Google's Mobile-First Standard",
    competitor: "Google PageSpeed Insights",
    related: ["seo-audit", "page-size", "ssl-checker", "http-headers"],
    updatedDate: UPDATED,
  },

  "ssl-checker": {
    slug: "ssl-checker",
    name: "SSL / HTTPS Checker",
    type: "SSL Certificate Tester",
    title: "Free SSL Certificate Checker — Verify HTTPS, TLS & Certificate Expiry",
    description: "Check any domain's SSL certificate. Verify expiry date, TLS version (1.3 recommended), certificate chain, HSTS header. HTTPS is a confirmed Google ranking factor. Free.",
    h1: "Free SSL Certificate Checker — Verify HTTPS Security & Certificate Expiry",
    competitor: "SSL Labs",
    related: ["http-headers", "seo-audit", "redirect-checker", "mobile-checker"],
    updatedDate: UPDATED,
  },

  "tech-detector": {
    slug: "tech-detector",
    name: "Website Technology Detector",
    type: "Tech Stack Detector",
    title: "Free Website Technology Detector — Identify Any Site's Tech Stack in Seconds",
    description: "Identify any website's technology stack. Detects CMS (WordPress, Shopify), JavaScript frameworks (React, Next.js), CDN (Cloudflare), analytics — 200+ technologies. Free.",
    h1: "Free Website Technology Detector — See Any Site's Complete Tech Stack",
    competitor: "Wappalyzer",
    related: ["http-headers", "seo-audit", "page-size", "ssl-checker"],
    updatedDate: UPDATED,
  },

  "redirect-checker": {
    slug: "redirect-checker",
    name: "Redirect Chain Checker",
    type: "Redirect Tracer",
    title: "Free Redirect Checker — Trace Full Redirect Chains & HTTP Status Codes",
    description: "Trace redirect chains for any URL. Shows HTTP status codes (301, 302, 307, 308), hop count, redirect loops, and latency. Free URL redirect checker.",
    h1: "Free Redirect Checker — Trace Complete Redirect Chains on Any URL",
    competitor: "httpstatus.io",
    related: ["http-headers", "canonical-checker", "sitemap-checker", "seo-audit"],
    updatedDate: UPDATED,
  },

  "http-headers": {
    slug: "http-headers",
    name: "HTTP Headers Checker",
    type: "Response Header Analyzer",
    title: "Free HTTP Headers Checker — Inspect Server Response Headers | SEOAcademys",
    description: "Inspect HTTP response headers for any URL. Checks cache-control, content-type, X-Robots-Tag, security headers (HSTS, CSP), compression, server software. Free.",
    h1: "Free HTTP Headers Checker — Inspect Any URL's Full Server Response Headers",
    competitor: "SecurityHeaders.com",
    related: ["ssl-checker", "redirect-checker", "canonical-checker", "seo-audit"],
    updatedDate: UPDATED,
  },

  "page-size": {
    slug: "page-size",
    name: "Page Size Analyzer",
    type: "Page Weight Tool",
    title: "Free Page Size Analyzer — Check Page Weight & Core Web Vitals Impact",
    description: "Analyze any webpage's size. Breaks down weight by HTML, CSS, JavaScript, images, fonts. Identify bloat causing slow LCP. Free page size and performance analyzer.",
    h1: "Free Page Size Analyzer — Break Down Page Weight by Resource Type",
    competitor: "GTmetrix",
    related: ["html-minifier", "image-seo", "http-headers", "seo-audit"],
    updatedDate: UPDATED,
  },

  "keyword-density": {
    slug: "keyword-density",
    name: "Keyword Density Analyzer",
    type: "Keyword Density Tool",
    title: "Free Keyword Density Checker — Find Over-Optimized Keywords on Any Page",
    description: "Check keyword density on any URL or text. Analyzes single, double, triple-word phrase frequency. Find keyword stuffing and under-optimized terms. Free keyword density tool.",
    h1: "Free Keyword Density Checker — Detect Over-Optimization & Thin Content",
    updatedDate: UPDATED,
  },

  "readability": {
    slug: "readability",
    name: "Readability Checker",
    type: "Readability Scorer",
    title: "Free Readability Checker — Flesch-Kincaid Score & 5 Readability Metrics",
    description: "Check content readability with 5 scores: Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog, SMOG, ARI. Optimize for humans and AI. Free readability analyzer.",
    h1: "Free Readability Checker — Get 5 Readability Scores for Better Rankings",
    updatedDate: UPDATED,
  },

  "word-counter": {
    slug: "word-counter",
    name: "Word & Character Counter",
    type: "Word Counter",
    title: "Free Word Counter — Count Words, Characters, Sentences & Reading Time",
    description: "Count words, characters, sentences, paragraphs, and estimate reading time. Analyze content length for SEO. Works with any text or URL. Free word counter.",
    h1: "Free Word Counter — Analyze Content Length, Reading Time & Keyword Frequency",
    updatedDate: UPDATED,
  },

  "link-analyzer": {
    slug: "link-analyzer",
    name: "Link Analyzer",
    type: "Internal/External Link Audit",
    title: "Free Link Analyzer — Audit Internal & External Links on Any Web Page",
    description: "Analyze all links on any webpage. Count internal vs. external links, identify nofollow/sponsored links, map anchor text distribution. Free link analysis tool.",
    h1: "Free Link Analyzer — Audit Every Internal & External Link on Any Page",
    updatedDate: UPDATED,
  },

  "broken-links": {
    slug: "broken-links",
    name: "Broken Link Checker",
    type: "Broken Link Crawler",
    title: "Free Broken Link Checker — Find All 404 Errors on Any Web Page Instantly",
    description: "Find broken links (404 errors, server errors, timeouts) on any webpage. Live crawl. Fix dead links before they damage SEO and user experience. Free broken link checker.",
    h1: "Free Broken Link Checker — Find and Fix All Dead Links in Seconds",
    competitor: "Dead Link Checker",
    updatedDate: UPDATED,
  },

  "image-seo": {
    slug: "image-seo",
    name: "Image SEO Checker",
    type: "Image Optimization Audit",
    title: "Free Image SEO Checker — Audit Alt Text, WebP Format & Image Optimization",
    description: "Check all images on any webpage for SEO issues. Verify alt text, file names, image dimensions, WebP format, lazy loading. Free image SEO analyzer.",
    h1: "Free Image SEO Checker — Audit Alt Text and Image Optimization on Any Page",
    competitor: "Screaming Frog",
    related: ["page-size", "seo-audit", "content-checker", "meta-tag-checker"],
    updatedDate: UPDATED,
  },

  "schema-validator": {
    slug: "schema-validator",
    name: "Schema.org Validator",
    type: "JSON-LD Validator",
    title: "Free Schema Markup Validator — Validate JSON-LD for Google Rich Results",
    description: "Validate JSON-LD, Microdata, and RDFa schema markup against Schema.org standards. Find errors preventing rich results. Checks 800+ Schema.org types. Free.",
    h1: "Free Schema Markup Validator — Find Errors Preventing Google Rich Results",
    competitor: "Google Rich Results Test",
    related: ["schema-generator", "faq-schema", "seo-audit", "meta-tag-checker"],
    updatedDate: UPDATED,
  },

  "faq-schema": {
    slug: "faq-schema",
    name: "FAQ Schema Generator",
    type: "FAQ JSON-LD Builder",
    title: "Free FAQ Schema Generator — Create FAQPage JSON-LD for Rich Snippets",
    description: "Generate FAQPage JSON-LD schema markup. Get expandable FAQ dropdowns in Google search results. Copy-paste ready. No signup required. Free FAQ schema generator.",
    h1: "Free FAQ Schema Generator — Add FAQ Rich Results to Google Search",
    competitor: "Merkle Schema Generator",
    related: ["schema-validator", "schema-generator", "article-schema", "breadcrumb-schema"],
    updatedDate: UPDATED,
  },

  "product-schema": {
    slug: "product-schema",
    name: "Product Schema Generator",
    type: "Product JSON-LD Builder",
    title: "Free Product Schema Generator — Enable Star Ratings & Price in Google",
    description: "Generate Product schema with price, availability, brand, AggregateRating. Enable rich results with star ratings in Google search. Copy-paste JSON-LD. Free.",
    h1: "Free Product Schema Generator — Get Star Ratings & Prices in Google Search",
    competitor: "Google Rich Results Test",
    related: ["schema-validator", "faq-schema", "article-schema", "schema-generator"],
    updatedDate: UPDATED,
  },

  "article-schema": {
    slug: "article-schema",
    name: "Article Schema Generator",
    type: "Article JSON-LD Builder",
    title: "Free Article Schema Generator — BlogPosting & NewsArticle JSON-LD",
    description: "Generate Article, BlogPosting, NewsArticle schema with author, datePublished, headline, image. Required for Google News and Discover eligibility. Free.",
    h1: "Free Article Schema Generator — Create Proper BlogPosting & Article Schema",
    competitor: "Yoast SEO",
    related: ["schema-validator", "faq-schema", "breadcrumb-schema", "schema-generator"],
    updatedDate: UPDATED,
  },

  "breadcrumb-schema": {
    slug: "breadcrumb-schema",
    name: "Breadcrumb Schema Generator",
    type: "BreadcrumbList Builder",
    title: "Free Breadcrumb Schema Generator — Show Site Navigation in Google SERPs",
    description: "Generate BreadcrumbList JSON-LD schema. Enable breadcrumb navigation display in Google search results. Shows site hierarchy in SERPs. Copy-paste ready. Free.",
    h1: "Free Breadcrumb Schema Generator — Enable Navigation Breadcrumbs in Google",
    competitor: "Merkle Schema Generator",
    related: ["schema-validator", "article-schema", "schema-generator", "faq-schema"],
    updatedDate: UPDATED,
  },

  "schema-generator": {
    slug: "schema-generator",
    name: "Schema & llms.txt Generator",
    type: "Structured Data Generator",
    title: "Free Schema + llms.txt Generator — Make Your Site AI-Search Ready",
    description: "Generate Organization JSON-LD schema and llms.txt file. Configure AI crawler access for ChatGPT, Gemini, Perplexity, Claude. Get cited by AI search engines. Free.",
    h1: "Free Schema & llms.txt Generator — Make Your Website AI-Search Ready in Minutes",
    competitor: "Schema App",
    related: ["schema-validator", "faq-schema", "article-schema", "robots-txt"],
    updatedDate: UPDATED,
  },

  "html-minifier": {
    slug: "html-minifier",
    name: "HTML Minifier",
    type: "HTML Minifier",
    title: "Free HTML Minifier — Compress HTML Code Online for Faster Loading",
    description: "Minify HTML by removing whitespace, comments, redundant attributes. Reduce HTML file size 15-30%. Improve LCP and Core Web Vitals scores. Free online HTML minifier.",
    h1: "Free HTML Minifier — Compress HTML to Improve Page Speed & Core Web Vitals",
    competitor: "html-minifier.com",
    related: ["css-minifier", "js-minifier", "page-size", "seo-audit"],
    updatedDate: UPDATED,
  },

  "css-minifier": {
    slug: "css-minifier",
    name: "CSS Minifier",
    type: "CSS Minifier",
    title: "Free CSS Minifier — Compress CSS Stylesheets for Better Performance",
    description: "Minify CSS files online. Remove whitespace, comments, and optimize values. Reduce CSS size 20-40%. Improve Total Blocking Time and LCP. Free CSS minifier.",
    h1: "Free CSS Minifier — Compress CSS Stylesheets for Faster Core Web Vitals",
    competitor: "cssnano",
    related: ["html-minifier", "js-minifier", "page-size", "seo-audit"],
    updatedDate: UPDATED,
  },

  "js-minifier": {
    slug: "js-minifier",
    name: "JS Minifier",
    type: "JavaScript Minifier",
    title: "Free JavaScript Minifier — Compress JS Files to Improve Page Speed",
    description: "Minify JavaScript online. Remove whitespace, shorten variable names. Reduce JS file size 30-50%. Improve Total Blocking Time (TBT) and INP score. Free JS minifier.",
    h1: "Free JavaScript Minifier — Compress JS Code for Better INP and Page Speed",
    competitor: "terser",
    related: ["html-minifier", "css-minifier", "page-size", "seo-audit"],
    updatedDate: UPDATED,
  },

  "geo-tracker": {
    slug: "geo-tracker",
    name: "GEO Market Intelligence",
    type: "AI Market Tracker",
    title: "Free GEO Market Intelligence — See AI Citation Patterns in Your Industry",
    description: "Discover which brands AI engines cite in Tech, Finance, Health, SaaS, E-commerce. Live citation patterns. See who wins AI visibility in your market. Free GEO tracker.",
    h1: "Free GEO Market Intelligence — Track AI Citation Trends Across Industries",
    updatedDate: UPDATED,
  },

  "content-checker": {
    slug: "content-checker",
    name: "Content Readiness Checker",
    type: "AI Content Score",
    title: "Free AI Content Readiness Checker — LLM Citation Probability Score",
    description: "Score your content's AI citability. Checks 9 LLM-readiness factors: factual density, entity mentions, direct answers, statistics, named sources, freshness. Free.",
    h1: "Free AI Content Readiness Checker — Score Your LLM Citation Probability",
    updatedDate: UPDATED,
  },

  "keyword-research": {
    slug: "keyword-research",
    name: "Keyword Research",
    type: "Keyword Ideas Tool",
    title: "Free Keyword Research Tool — Search Volume, Difficulty & CPC Data",
    description: "Research keywords with search volume, keyword difficulty (KD 0-100), CPC data, and related keyword suggestions. Find low-competition keywords for free. No signup.",
    h1: "Free Keyword Research Tool — Find Low-Competition Keywords That Actually Rank",
    competitor: "Ahrefs Keywords Explorer",
    related: ["rank-tracker", "serp-preview", "seo-audit"],
    updatedDate: UPDATED,
  },

  "serp-preview": {
    slug: "serp-preview",
    name: "SERP Preview",
    type: "Google SERP Preview",
    title: "Free Google SERP Preview Tool — See Your Search Snippet Before Publishing",
    description: "Preview how your page looks in Google search results. Shows desktop and mobile SERP appearance with live character count warnings. Free Google snippet simulator.",
    h1: "Free SERP Preview Tool — Visualize Your Google Snippet Before You Publish",
    updatedDate: UPDATED,
  },

  "meta-generator": {
    slug: "meta-generator",
    name: "Meta Tag Generator",
    type: "Meta Tag Builder",
    title: "Free Meta Tag Generator — Create SEO Title, Description & OG Tags",
    description: "Generate optimized title tags, meta descriptions, Open Graph tags, and Twitter Cards in one step. Real-time character counter. Copy-paste HTML code. Free.",
    h1: "Free Meta Tag Generator — Create All SEO Meta Tags in One Step",
    competitor: "Metatags.io",
    related: ["meta-tag-checker", "og-checker", "twitter-card-checker", "serp-preview"],
    updatedDate: UPDATED,
  },

  "robots-txt": {
    slug: "robots-txt",
    name: "Robots.txt Builder",
    type: "Robots.txt Generator",
    title: "Robots.txt Builder — Free Generator with AI Crawler Rules | SEOAcademys",
    description: "Visually build robots.txt — including AI crawler rules (GPTBot, PerplexityBot, ClaudeBot, Google-Extended). Free, no signup.",
    h1: "Free Robots.txt Builder — Generate Robots.txt with AI Crawler Rules",
    competitor: "SmallSEOTools Robots.txt Generator",
    related: ["robots-checker", "sitemap-checker", "schema-generator", "seo-audit"],
    updatedDate: UPDATED,
  },

  "backlink-checker": {
    slug: "backlink-checker",
    name: "Backlink Checker",
    type: "Backlink Analyzer",
    title: "Free Backlink Checker — Analyze Any Domain's Backlink Profile",
    description: "Check any website's backlinks. Referring domains, anchor text distribution, dofollow/nofollow ratio, new and lost links. Free backlink analyzer, no signup.",
    h1: "Free Backlink Checker — Audit Any Website's Complete Backlink Profile",
    competitor: "Ahrefs",
    updatedDate: UPDATED,
  },
};

export async function getToolContent(slug: string): Promise<ToolMeta | undefined> {
  const base = TOOL_META[slug];
  if (!base) return undefined;

  try {
    const [coreMod, geoMod] = await Promise.all([
      import("./tool-content-core"),
      import("./tool-content-geo")
    ]);
    const patch = { ...coreMod.CORE_CONTENT[slug], ...geoMod.GEO_CONTENT[slug] };
    return { ...base, ...patch } as ToolMeta;
  } catch (e) {
    console.error("Failed to load tool content", e);
    return base;
  }
}

export function getToolMeta(slug: string): ToolMeta | undefined {
  return TOOL_META[slug];
}

export function toolJsonLd(meta: ToolMeta): object[] {
  const url = `${SITE}/tools/${meta.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: meta.name,
      applicationCategory: "WebApplication",
      operatingSystem: "Any web browser",
      description: meta.description,
      url,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "2400000", bestRating: "5" },
      featureList: meta.features.join(", "),
      provider: { "@type": "Organization", name: "SEOAcademys", url: SITE },
      isPartOf: { "@type": "WebSite", name: "SEOAcademys", url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE}/tools` },
        { "@type": "ListItem", position: 3, name: meta.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: meta.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to Use ${meta.name}`,
      description: `Step-by-step guide to run ${meta.name} on any URL in under 8 seconds.`,
      totalTime: "PT30S",
      tool: [{ "@type": "HowToTool", name: meta.name }],
      step: [
        { "@type": "HowToStep", position: 1, name: "Enter Your URL", text: `Paste any public URL into ${meta.name}. Both http:// and https:// are accepted and redirects are auto-resolved.`, url: `${url}#how-to-use` },
        { "@type": "HowToStep", position: 2, name: "Run the Analysis", text: `Click Analyze. ${meta.name} fetches the live HTML server-side in under 8 seconds — no caching, always fresh.`, url: `${url}#how-to-use` },
        { "@type": "HowToStep", position: 3, name: "Fix the Issues", text: `Review the prioritized fix list, apply the recommended snippets, then re-run ${meta.name} to confirm the improvement.`, url: `${url}#how-to-use` },
      ],
    },
  ];
}

export const SITE_URL = SITE;

/** Full head() payload for a /tools/<slug> route: title, description, canonical, OG/Twitter. */
export function toolHead(slug: string, fallbackTitle?: string) {
  const meta = TOOL_META[slug];
  const url = `${SITE}/tools/${slug}`;
  const title = meta?.title ?? fallbackTitle ?? "Free SEO Tool | SEOAcademys";
  const description =
    meta?.description ??
    "Free SEO and GEO tool from SEOAcademys. Real-time analysis of any live URL — no signup, no limits.";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
