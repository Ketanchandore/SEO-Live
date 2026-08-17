export interface ModuleMeta {
  id: number;
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All levels";
  chapterCount: number;
  readTimeMinutes: number;
  description: string;
  targetKeyword: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface ChapterMeta {
  id: number;
  slug: string;
  title: string;
  readTimeMinutes: number;
  prerequisiteSlug?: string;
}

export const MODULES: ModuleMeta[] = [
  { id: 1, slug: "seo-fundamentals", title: "SEO Fundamentals", level: "Beginner", chapterCount: 7, readTimeMinutes: 55, description: "Complete beginner guide to what SEO is, how Google works, and realistic timelines.", targetKeyword: "learn SEO", metaTitle: "SEO Fundamentals: Complete Beginner Guide — SEOAcademys", metaDescription: "7-chapter module covering what SEO is, how Google works, crawling, indexing, ranking, search intent, and realistic SEO timelines. Free. Evidence-based." },
  { id: 2, slug: "technical-seo", title: "Technical SEO", level: "Beginner", chapterCount: 12, readTimeMinutes: 120, description: "The foundation of a healthy website. Crawling, indexing, and site architecture.", targetKeyword: "technical SEO guide complete", metaTitle: "Technical SEO: Complete Guide 2026 — SEOAcademys", metaDescription: "12-chapter free technical SEO guide. Robots.txt, sitemaps, canonical URLs, Core Web Vitals, page speed, mobile-first indexing. Evidence-based. By Ketan Chandore." },
  { id: 3, slug: "keyword-research", title: "Keyword Research", level: "Beginner", chapterCount: 10, readTimeMinutes: 90, description: "How to find what your audience is searching for and evaluate search intent.", targetKeyword: "keyword research tutorial free", metaTitle: "Keyword Research Tutorial: Free Complete Guide — SEOAcademys", metaDescription: "10-chapter free keyword research guide. Find keywords without paid tools, understand search intent, build topical clusters, fix cannibalization. By Ketan Chandore." },
  { id: 4, slug: "on-page-seo", title: "On-Page SEO", level: "Beginner", chapterCount: 10, readTimeMinutes: 80, description: "Optimizing individual pages for relevance, user experience, and conversions.", targetKeyword: "on-page SEO checklist 2026", metaTitle: "On-Page SEO Checklist 2026: Complete Guide — SEOAcademys", metaDescription: "10-chapter on-page SEO guide covering title tags, meta descriptions, heading structure, featured snippets, CTR optimization and internal linking." },
  { id: 5, slug: "content-strategy", title: "Content Strategy & Helpful Content", level: "Beginner", chapterCount: 10, readTimeMinutes: 85, description: "Building a scalable, SEO-focused content engine that ranks and converts.", targetKeyword: "helpful content guide SEO", metaTitle: "Helpful Content Guide: SEO Content Strategy — SEOAcademys", metaDescription: "10-chapter content strategy guide. What helpful content means, topic clusters, content pruning, AI content policy, and comparison page templates." },
  { id: 6, slug: "eeat-google-trust", title: "E-E-A-T & Google Trust", level: "Intermediate", chapterCount: 10, readTimeMinutes: 90, description: "How to signal Experience, Expertise, Authoritativeness, and Trust to Google.", targetKeyword: "E-E-A-T guide 2026", metaTitle: "E-E-A-T Guide 2026: Build Google Trust — SEOAcademys", metaDescription: "10-chapter E-E-A-T guide. Experience, Expertise, Authoritativeness, Trust — what they mean and how to build them. Author pages, about page, editorial policy." },
  { id: 7, slug: "internal-linking", title: "Internal Linking & Topical Authority", level: "Intermediate", chapterCount: 7, readTimeMinutes: 60, description: "Distributing authority and guiding users through strategic site architecture.", targetKeyword: "internal linking SEO strategy", metaTitle: "Internal Linking SEO Strategy: Complete Guide — SEOAcademys", metaDescription: "7-chapter internal linking guide. Hub-and-spoke model, topical authority, orphan pages, anchor text and how to translate your topical map into links." },
  { id: 8, slug: "off-page-seo", title: "Off-Page SEO & Link Building", level: "Intermediate", chapterCount: 9, readTimeMinutes: 80, description: "Building authority through high-quality backlinks and digital PR.", targetKeyword: "link building guide 2026", metaTitle: "Link Building Guide 2026: Free Methods — SEOAcademys", metaDescription: "9-chapter link building guide. Free backlink methods, digital PR, competitor analysis, Reddit authority, broken link building and toxic link removal." },
  { id: 9, slug: "aeo-guide", title: "AEO — Answer Engine Optimization", level: "Intermediate", chapterCount: 9, readTimeMinutes: 75, description: "Optimizing for AI answers, featured snippets, and voice search.", targetKeyword: "answer engine optimization guide", metaTitle: "Answer Engine Optimization (AEO): Complete Guide — SEOAcademys", metaDescription: "9-chapter AEO guide. Featured snippets, People Also Ask, direct answer format, FAQ schema, voice search and zero-click optimization." },
  { id: 10, slug: "geo-guide", title: "GEO — Generative Engine Optimization", level: "Intermediate", chapterCount: 10, readTimeMinutes: 95, description: "Advanced optimization for LLMs (ChatGPT, Gemini, Perplexity).", targetKeyword: "generative engine optimization guide", metaTitle: "Generative Engine Optimization (GEO): Complete Guide — SEOAcademys", metaDescription: "10-chapter GEO guide. How AI search works, citation-worthy content, entity consistency, llms.txt, AI citation tracking and GEO myths debunked." },
  { id: 11, slug: "ai-search-seo", title: "AI Search Platform Guides", level: "Intermediate", chapterCount: 9, readTimeMinutes: 85, description: "How to adapt traditional SEO strategies for an AI-first search landscape.", targetKeyword: "AI search optimization guide", metaTitle: "AI Search Optimization Guide 2026 — SEOAcademys", metaDescription: "9-chapter AI search guide. Google AI Overviews, ChatGPT Search, Perplexity, Claude, Copilot — how to appear and get cited in each AI search engine." },
  { id: 12, slug: "structured-data", title: "Structured Data & Schema", level: "Intermediate", chapterCount: 10, readTimeMinutes: 110, description: "Using JSON-LD to help search engines understand your entities.", targetKeyword: "schema markup complete guide", metaTitle: "Schema Markup Complete Guide: Structured Data — SEOAcademys", metaDescription: "10-chapter schema markup guide. JSON-LD, Article, FAQ, Organization, Person, HowTo, BreadcrumbList schema — implementation and validation." },
  { id: 13, slug: "serp-ctr-optimization", title: "SERP Features & CTR Optimization", level: "Intermediate", chapterCount: 8, readTimeMinutes: 65, description: "Winning rich snippets and maximizing click-through rates.", targetKeyword: "SERP features optimization guide", metaTitle: "SERP Features & CTR Optimization Guide — SEOAcademys", metaDescription: "8-chapter SERP features guide. Featured snippets, knowledge panels, rich snippets, title tag A/B testing and meta description CTR improvement." },
  { id: 14, slug: "seo-analytics", title: "SEO Analytics", level: "Beginner", chapterCount: 8, readTimeMinutes: 75, description: "Measuring what matters using Google Search Console and GA4.", targetKeyword: "Google Search Console tutorial", metaTitle: "Google Search Console Tutorial: SEO Analytics Guide — SEOAcademys", metaDescription: "8-chapter SEO analytics guide. Google Search Console mastery, GA4 for SEO, AI referral traffic tracking, content decay detection." },
  { id: 15, slug: "seo-audit", title: "SEO Audit Framework", level: "Intermediate", chapterCount: 8, readTimeMinutes: 90, description: "Step-by-step process for conducting a comprehensive SEO audit.", targetKeyword: "how to do an SEO audit", metaTitle: "How to Do an SEO Audit: 8-Layer Framework — SEOAcademys", metaDescription: "8-chapter SEO audit guide. Technical, content, on-page, E-E-A-T, AEO and GEO audit checklists. Complete self-audit framework." },
  { id: 16, slug: "platform-seo", title: "Platform-Specific SEO", level: "Beginner", chapterCount: 6, readTimeMinutes: 55, description: "SEO nuances for WordPress, Shopify, Next.js, and other CMS platforms.", targetKeyword: "WordPress SEO complete guide", metaTitle: "WordPress SEO Complete Setup Guide 2026 — SEOAcademys", metaDescription: "Platform-specific SEO guides for WordPress, Shopify, Webflow, Next.js, Lovable.ai and Framer. Built by someone who actually uses these tools." },
  { id: 17, slug: "ecommerce-seo", title: "eCommerce SEO", level: "Intermediate", chapterCount: 7, readTimeMinutes: 85, description: "Faceted navigation, product schemas, and category page optimization.", targetKeyword: "ecommerce SEO guide", metaTitle: "eCommerce SEO Guide 2026: Complete — SEOAcademys", metaDescription: "7-chapter eCommerce SEO guide. Product pages, category pages, product schema, faceted navigation, buyer intent keywords." },
  { id: 18, slug: "local-seo", title: "Local SEO", level: "Beginner", chapterCount: 7, readTimeMinutes: 65, description: "Dominating the Map Pack and localized organic search results.", targetKeyword: "local SEO guide 2026", metaTitle: "Local SEO Guide 2026: Complete — SEOAcademys", metaDescription: "7-chapter local SEO guide. Google Business Profile, local citations, NAP consistency, reviews, map pack rankings." },
  { id: 19, slug: "youtube-seo", title: "YouTube & Video SEO", level: "Beginner", chapterCount: 8, readTimeMinutes: 70, description: "Ranking videos on YouTube and in Google's universal search.", targetKeyword: "YouTube SEO tutorial 2026", metaTitle: "YouTube SEO Tutorial 2026: Complete Guide — SEOAcademys", metaDescription: "8-chapter YouTube SEO guide. Keyword research, title optimization, descriptions, chapters, watch time and VideoObject schema." },
  { id: 20, slug: "programmatic-seo", title: "Programmatic SEO", level: "Advanced", chapterCount: 5, readTimeMinutes: 60, description: "Building scalable, database-driven page templates for long-tail search.", targetKeyword: "programmatic SEO guide", metaTitle: "Programmatic SEO Guide: Template Pages at Scale — SEOAcademys", metaDescription: "5-chapter programmatic SEO guide. When to use it, quality vs spam, database-driven pages, and when NOT to use programmatic SEO." },
  { id: 21, slug: "google-algorithm-updates", title: "Algorithm Updates & Recovery", level: "Intermediate", chapterCount: 7, readTimeMinutes: 80, description: "Understanding core updates, helpful content systems, and penalty recovery.", targetKeyword: "Google algorithm update history", metaTitle: "Google Algorithm Update History 2024–2026 — SEOAcademys", metaDescription: "7-chapter algorithm guide. How updates work, Helpful Content Update recovery, core update recovery, traffic drop diagnosis." },
  { id: 22, slug: "competitor-seo-analysis", title: "Competitor Analysis", level: "Intermediate", chapterCount: 6, readTimeMinutes: 55, description: "Reverse-engineering your competitors' SEO strategies and finding gaps.", targetKeyword: "competitor SEO analysis guide", metaTitle: "Competitor SEO Analysis: Free Complete Guide — SEOAcademys", metaDescription: "6-chapter competitor analysis guide. Free keyword research methods, content gap analysis, backlink analysis and niche-down strategy." },
  { id: 23, slug: "seo-troubleshooting", title: "SEO Troubleshooting", level: "All levels", chapterCount: 10, readTimeMinutes: 100, description: "Diagnosing and fixing traffic drops, indexing issues, and technical errors.", targetKeyword: "SEO problems solutions", metaTitle: "SEO Problems Solutions: Complete Troubleshooting Guide — SEOAcademys", metaDescription: "10-chapter SEO troubleshooting guide. Fix indexing issues, traffic drops, CTR problems, backlinks not working, AI search visibility." },
  { id: 24, slug: "seo-case-studies", title: "Case Studies & Experiments", level: "All levels", chapterCount: 8, readTimeMinutes: 75, description: "Real-world tests, data, and results from SEOAcademys experiments.", targetKeyword: "SEO case studies real results", metaTitle: "SEO Case Studies: Real Results and Experiments — SEOAcademys", metaDescription: "8 real SEO case studies and experiments from SEOAcademys. Documented methodology, honest results, before-and-after data." },
  { id: 25, slug: "seo-myths", title: "SEO Myths Debunked", level: "All levels", chapterCount: 5, readTimeMinutes: 45, description: "Common SEO advice that is outdated, unproven, or demonstrably false.", targetKeyword: "SEO myths debunked 2026", metaTitle: "SEO Myths Debunked 2026: 15 Common Misconceptions — SEOAcademys", metaDescription: "The 15 biggest SEO myths — about backlinks, content length, AI penalties, domain authority and more. Evidence-based debunking." },
  { id: 26, slug: "advanced-seo", title: "Advanced SEO Topics", level: "Advanced", chapterCount: 8, readTimeMinutes: 90, description: "Log file analysis, custom extraction, and enterprise SEO tactics.", targetKeyword: "advanced SEO guide", metaTitle: "Advanced SEO Guide: Semantic SEO, Entity Building — SEOAcademys", metaDescription: "8-chapter advanced SEO guide. Semantic SEO, Google Knowledge Graph, entity building, SaaS SEO, international SEO." },
  { id: 27, slug: "seo-glossary", title: "SEO Glossary", level: "All levels", chapterCount: 5, readTimeMinutes: 30, description: "A comprehensive dictionary of SEO, GEO, and technical search terminology.", targetKeyword: "SEO glossary terms definitions", metaTitle: "SEO Glossary: 200+ Terms Defined — SEOAcademys", metaDescription: "Complete SEO glossary with 200+ terms defined. SEO, GEO, AEO, Technical SEO, Schema and Analytics terminology. Free." },
];

export const TRACKS = {
  beginner: [1, 3, 4, 5, 14, 16, 18, 19],
  technical: [2, 12, 15, 17, 20],
  ai_geo: [9, 10, 11]
};



export const MOCK_CHAPTERS: Record<string, ChapterMeta[]> = {
  "seo-fundamentals": [
    {
      "id": 1,
      "slug": "what-is-seo",
      "title": "What Is SEO?",
      "readTimeMinutes": 6
    },
    {
      "id": 2,
      "slug": "how-google-search-actually-works",
      "title": "How Google Search Actually Works",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "what-is-seo"
    },
    {
      "id": 3,
      "slug": "what-is-crawling",
      "title": "What Is Crawling?",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "how-google-search-actually-works"
    },
    {
      "id": 4,
      "slug": "what-is-indexing",
      "title": "What Is Indexing?",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "what-is-crawling"
    },
    {
      "id": 5,
      "slug": "how-does-google-rank-pages",
      "title": "How Does Google Rank Pages?",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "what-is-indexing"
    },
    {
      "id": 6,
      "slug": "search-intent-the-most-important-concept",
      "title": "Search Intent: The Most Important Concept",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "how-does-google-rank-pages"
    },
    {
      "id": 7,
      "slug": "seo-timeline-realistic-expectations",
      "title": "SEO Timeline: Realistic Expectations",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "search-intent-the-most-important-concept"
    }
  ],
  "technical-seo": [
    {
      "id": 1,
      "slug": "what-is-technical-seo",
      "title": "What is Technical SEO?",
      "readTimeMinutes": 9
    },
    {
      "id": 2,
      "slug": "robots-txt-complete-setup-guide",
      "title": "Robots.txt: Complete Setup Guide",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "what-is-technical-seo"
    },
    {
      "id": 3,
      "slug": "xml-sitemap-create-submit-fix",
      "title": "XML Sitemap: Create, Submit, Fix",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "robots-txt-complete-setup-guide"
    },
    {
      "id": 4,
      "slug": "canonical-urls-the-complete-guide",
      "title": "Canonical URLs: The Complete Guide",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "xml-sitemap-create-submit-fix"
    },
    {
      "id": 5,
      "slug": "duplicate-content-find-and-fix",
      "title": "Duplicate Content: Find and Fix",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "canonical-urls-the-complete-guide"
    },
    {
      "id": 6,
      "slug": "core-web-vitals-lcp-inp-cls",
      "title": "Core Web Vitals: LCP, INP, CLS",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "duplicate-content-find-and-fix"
    },
    {
      "id": 7,
      "slug": "page-speed-optimization",
      "title": "Page Speed Optimization",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "core-web-vitals-lcp-inp-cls"
    },
    {
      "id": 8,
      "slug": "mobile-first-indexing",
      "title": "Mobile-First Indexing",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "page-speed-optimization"
    },
    {
      "id": 9,
      "slug": "redirects-301-vs-302-vs-307",
      "title": "Redirects: 301 vs 302 vs 307",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "mobile-first-indexing"
    },
    {
      "id": 10,
      "slug": "javascript-seo",
      "title": "JavaScript SEO",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "redirects-301-vs-302-vs-307"
    },
    {
      "id": 11,
      "slug": "international-seo-hreflang",
      "title": "International SEO + hreflang",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "javascript-seo"
    },
    {
      "id": 12,
      "slug": "site-migration-seo",
      "title": "Site Migration SEO",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "international-seo-hreflang"
    }
  ],
  "keyword-research": [
    {
      "id": 1,
      "slug": "what-is-keyword-research",
      "title": "What is Keyword Research?",
      "readTimeMinutes": 10
    },
    {
      "id": 2,
      "slug": "free-keyword-research-7-methods",
      "title": "Free Keyword Research: 7 Methods",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "what-is-keyword-research"
    },
    {
      "id": 3,
      "slug": "search-volume-vs-search-intent",
      "title": "Search Volume vs Search Intent",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "free-keyword-research-7-methods"
    },
    {
      "id": 4,
      "slug": "long-tail-keywords-find-and-use",
      "title": "Long-tail Keywords: Find and Use",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "search-volume-vs-search-intent"
    },
    {
      "id": 5,
      "slug": "question-keywords-paa-autocomplete",
      "title": "Question Keywords: PAA + Autocomplete",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "long-tail-keywords-find-and-use"
    },
    {
      "id": 6,
      "slug": "keyword-difficulty-how-to-evaluate",
      "title": "Keyword Difficulty: How to Evaluate",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "question-keywords-paa-autocomplete"
    },
    {
      "id": 7,
      "slug": "topical-keyword-clusters",
      "title": "Topical Keyword Clusters",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "keyword-difficulty-how-to-evaluate"
    },
    {
      "id": 8,
      "slug": "keyword-cannibalization",
      "title": "Keyword Cannibalization",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "topical-keyword-clusters"
    },
    {
      "id": 9,
      "slug": "keyword-mapping",
      "title": "Keyword Mapping",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "keyword-cannibalization"
    },
    {
      "id": 10,
      "slug": "topical-map-building",
      "title": "Topical Map Building",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "keyword-mapping"
    }
  ],
  "on-page-seo": [
    {
      "id": 1,
      "slug": "on-page-seo-what-it-is",
      "title": "On-Page SEO: What It Is",
      "readTimeMinutes": 5
    },
    {
      "id": 2,
      "slug": "title-tag-optimization",
      "title": "Title Tag Optimization",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "on-page-seo-what-it-is"
    },
    {
      "id": 3,
      "slug": "meta-description-write-for-clicks",
      "title": "Meta Description: Write for Clicks",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "title-tag-optimization"
    },
    {
      "id": 4,
      "slug": "heading-structure-h1-h3",
      "title": "Heading Structure (H1-H3)",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "meta-description-write-for-clicks"
    },
    {
      "id": 5,
      "slug": "url-optimization",
      "title": "URL Optimization",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "heading-structure-h1-h3"
    },
    {
      "id": 6,
      "slug": "featured-snippet-optimization",
      "title": "Featured Snippet Optimization",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "url-optimization"
    },
    {
      "id": 7,
      "slug": "image-seo-alt-text-naming",
      "title": "Image SEO: Alt Text + Naming",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "featured-snippet-optimization"
    },
    {
      "id": 8,
      "slug": "content-freshness-update-strategy",
      "title": "Content Freshness: Update Strategy",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "image-seo-alt-text-naming"
    },
    {
      "id": 9,
      "slug": "ctr-optimization-titles-that-get-clicked",
      "title": "CTR Optimization: Titles That Get Clicked",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "content-freshness-update-strategy"
    },
    {
      "id": 10,
      "slug": "internal-linking-on-page-strategy",
      "title": "Internal Linking: On-Page Strategy",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "ctr-optimization-titles-that-get-clicked"
    }
  ],
  "content-strategy": [
    {
      "id": 1,
      "slug": "what-is-helpful-content",
      "title": "What is Helpful Content?",
      "readTimeMinutes": 8
    },
    {
      "id": 2,
      "slug": "people-first-vs-seo-first",
      "title": "People-First vs SEO-First",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "what-is-helpful-content"
    },
    {
      "id": 3,
      "slug": "original-research-in-content",
      "title": "Original Research in Content",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "people-first-vs-seo-first"
    },
    {
      "id": 4,
      "slug": "topic-clusters-build-the-model",
      "title": "Topic Clusters: Build the Model",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "original-research-in-content"
    },
    {
      "id": 5,
      "slug": "content-decay-detect-fix",
      "title": "Content Decay: Detect + Fix",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "topic-clusters-build-the-model"
    },
    {
      "id": 6,
      "slug": "content-pruning",
      "title": "Content Pruning",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "content-decay-detect-fix"
    },
    {
      "id": 7,
      "slug": "content-gap-analysis",
      "title": "Content Gap Analysis",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "content-pruning"
    },
    {
      "id": 8,
      "slug": "ai-content-human-review",
      "title": "AI Content + Human Review",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "content-gap-analysis"
    },
    {
      "id": 9,
      "slug": "thin-content-identify-fix",
      "title": "Thin Content: Identify + Fix",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "ai-content-human-review"
    },
    {
      "id": 10,
      "slug": "comparison-alternative-pages",
      "title": "Comparison + Alternative Pages",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "thin-content-identify-fix"
    }
  ],
  "eeat-google-trust": [
    {
      "id": 1,
      "slug": "what-is-e-e-a-t",
      "title": "What is E-E-A-T?",
      "readTimeMinutes": 9
    },
    {
      "id": 2,
      "slug": "experience-how-to-demonstrate-it",
      "title": "Experience: How to Demonstrate It",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "what-is-e-e-a-t"
    },
    {
      "id": 3,
      "slug": "expertise-prove-subject-knowledge",
      "title": "Expertise: Prove Subject Knowledge",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "experience-how-to-demonstrate-it"
    },
    {
      "id": 4,
      "slug": "authoritativeness-build-site-reputation",
      "title": "Authoritativeness: Build Site Reputation",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "expertise-prove-subject-knowledge"
    },
    {
      "id": 5,
      "slug": "trust-google-s-core-requirement",
      "title": "Trust: Google's Core Requirement",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "authoritativeness-build-site-reputation"
    },
    {
      "id": 6,
      "slug": "author-page-build-the-right-way",
      "title": "Author Page: Build the Right Way",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "trust-google-s-core-requirement"
    },
    {
      "id": 7,
      "slug": "e-e-a-t-audit-35-point-checklist",
      "title": "E-E-A-T Audit: 35-Point Checklist",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "author-page-build-the-right-way"
    },
    {
      "id": 8,
      "slug": "ymyl-content-extra-requirements",
      "title": "YMYL Content: Extra Requirements",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "e-e-a-t-audit-35-point-checklist"
    },
    {
      "id": 9,
      "slug": "knowledge-panel-how-to-get-one",
      "title": "Knowledge Panel: How to Get One",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "ymyl-content-extra-requirements"
    },
    {
      "id": 10,
      "slug": "case-studies-as-e-e-a-t-proof",
      "title": "Case Studies as E-E-A-T Proof",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "knowledge-panel-how-to-get-one"
    }
  ],
  "internal-linking": [
    {
      "id": 1,
      "slug": "why-internal-links-matter",
      "title": "Why Internal Links Matter",
      "readTimeMinutes": 11
    },
    {
      "id": 2,
      "slug": "hub-and-spoke-model",
      "title": "Hub-and-Spoke Model",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "why-internal-links-matter"
    },
    {
      "id": 3,
      "slug": "contextual-internal-links",
      "title": "Contextual Internal Links",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "hub-and-spoke-model"
    },
    {
      "id": 4,
      "slug": "topical-authority-build-it",
      "title": "Topical Authority: Build It",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "contextual-internal-links"
    },
    {
      "id": 5,
      "slug": "orphan-pages-find-and-fix",
      "title": "Orphan Pages: Find and Fix",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "topical-authority-build-it"
    },
    {
      "id": 6,
      "slug": "link-depth-optimization",
      "title": "Link Depth Optimization",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "orphan-pages-find-and-fix"
    },
    {
      "id": 7,
      "slug": "topical-map-to-internal-link-architecture",
      "title": "Topical Map to Internal Link Architecture",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "link-depth-optimization"
    }
  ],
  "off-page-seo": [
    {
      "id": 1,
      "slug": "what-are-backlinks-why-they-matter",
      "title": "What Are Backlinks? Why They Matter",
      "readTimeMinutes": 9
    },
    {
      "id": 2,
      "slug": "how-to-evaluate-link-quality",
      "title": "How to Evaluate Link Quality",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "what-are-backlinks-why-they-matter"
    },
    {
      "id": 3,
      "slug": "free-link-building-7-proven-methods",
      "title": "Free Link Building: 7 Proven Methods",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "how-to-evaluate-link-quality"
    },
    {
      "id": 4,
      "slug": "digital-pr-earn-links-through-news",
      "title": "Digital PR: Earn Links Through News",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "free-link-building-7-proven-methods"
    },
    {
      "id": 5,
      "slug": "free-tools-as-link-magnets",
      "title": "Free Tools as Link Magnets",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "digital-pr-earn-links-through-news"
    },
    {
      "id": 6,
      "slug": "reddit-community-for-authority",
      "title": "Reddit + Community for Authority",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "free-tools-as-link-magnets"
    },
    {
      "id": 7,
      "slug": "broken-link-building",
      "title": "Broken Link Building",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "reddit-community-for-authority"
    },
    {
      "id": 8,
      "slug": "competitor-backlink-analysis-free",
      "title": "Competitor Backlink Analysis (Free)",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "broken-link-building"
    },
    {
      "id": 9,
      "slug": "toxic-links-disavow",
      "title": "Toxic Links + Disavow",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "competitor-backlink-analysis-free"
    }
  ],
  "aeo-guide": [
    {
      "id": 1,
      "slug": "what-is-aeo",
      "title": "What is AEO?",
      "readTimeMinutes": 10
    },
    {
      "id": 2,
      "slug": "featured-snippets-how-to-win-them",
      "title": "Featured Snippets: How to Win Them",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "what-is-aeo"
    },
    {
      "id": 3,
      "slug": "people-also-ask-rank-and-own-paa",
      "title": "People Also Ask: Rank and Own PAA",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "featured-snippets-how-to-win-them"
    },
    {
      "id": 4,
      "slug": "direct-answer-format-write-it-right",
      "title": "Direct Answer Format: Write It Right",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "people-also-ask-rank-and-own-paa"
    },
    {
      "id": 5,
      "slug": "question-based-content-architecture",
      "title": "Question-Based Content Architecture",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "direct-answer-format-write-it-right"
    },
    {
      "id": 6,
      "slug": "faq-content-aeo-best-format",
      "title": "FAQ Content: AEO Best Format",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "question-based-content-architecture"
    },
    {
      "id": 7,
      "slug": "voice-search-optimization-2026",
      "title": "Voice Search Optimization 2026",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "faq-content-aeo-best-format"
    },
    {
      "id": 8,
      "slug": "direct-answer-box-optimization",
      "title": "Direct Answer Box Optimization",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "voice-search-optimization-2026"
    },
    {
      "id": 9,
      "slug": "zero-click-optimization",
      "title": "Zero-Click Optimization",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "direct-answer-box-optimization"
    }
  ],
  "geo-guide": [
    {
      "id": 1,
      "slug": "what-is-geo",
      "title": "What is GEO?",
      "readTimeMinutes": 5
    },
    {
      "id": 2,
      "slug": "how-ai-search-works-rag-explained",
      "title": "How AI Search Works: RAG Explained",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "what-is-geo"
    },
    {
      "id": 3,
      "slug": "citation-worthy-content",
      "title": "Citation-Worthy Content",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "how-ai-search-works-rag-explained"
    },
    {
      "id": 4,
      "slug": "factual-density-improve-it",
      "title": "Factual Density: Improve It",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "citation-worthy-content"
    },
    {
      "id": 5,
      "slug": "entity-consistency-across-all-platforms",
      "title": "Entity Consistency: Across All Platforms",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "factual-density-improve-it"
    },
    {
      "id": 6,
      "slug": "original-data-as-geo-asset",
      "title": "Original Data as GEO Asset",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "entity-consistency-across-all-platforms"
    },
    {
      "id": 7,
      "slug": "ai-citation-tracking-measure-it",
      "title": "AI Citation Tracking: Measure It",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "original-data-as-geo-asset"
    },
    {
      "id": 8,
      "slug": "reddit-ai-search-the-connection",
      "title": "Reddit + AI Search: The Connection",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "ai-citation-tracking-measure-it"
    },
    {
      "id": 9,
      "slug": "llms-txt-complete-implementation",
      "title": "llms.txt: Complete Implementation",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "reddit-ai-search-the-connection"
    },
    {
      "id": 10,
      "slug": "geo-myths-what-doesn-t-work",
      "title": "GEO Myths: What Doesn't Work",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "llms-txt-complete-implementation"
    }
  ],
  "ai-search-seo": [
    {
      "id": 1,
      "slug": "ai-search-overview",
      "title": "AI Search Overview",
      "readTimeMinutes": 9
    },
    {
      "id": 2,
      "slug": "google-ai-overviews-optimize-for-them",
      "title": "Google AI Overviews: Optimize for Them",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "ai-search-overview"
    },
    {
      "id": 3,
      "slug": "chatgpt-search-oai-searchbot-guide",
      "title": "ChatGPT Search: OAI-SearchBot Guide",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "google-ai-overviews-optimize-for-them"
    },
    {
      "id": 4,
      "slug": "perplexity-seo-get-cited",
      "title": "Perplexity SEO: Get Cited",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "chatgpt-search-oai-searchbot-guide"
    },
    {
      "id": 5,
      "slug": "claude-ai-search-claudebot-optimization",
      "title": "Claude AI Search: ClaudeBot Optimization",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "perplexity-seo-get-cited"
    },
    {
      "id": 6,
      "slug": "allow-vs-block-ai-bots-robots-txt",
      "title": "Allow vs Block AI Bots: Robots.txt",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "claude-ai-search-claudebot-optimization"
    },
    {
      "id": 7,
      "slug": "ai-referral-traffic-track-in-ga4",
      "title": "AI Referral Traffic: Track in GA4",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "allow-vs-block-ai-bots-robots-txt"
    },
    {
      "id": 8,
      "slug": "brand-recognition-in-ai-search",
      "title": "Brand Recognition in AI Search",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "ai-referral-traffic-track-in-ga4"
    },
    {
      "id": 9,
      "slug": "ai-search-traffic-measurement",
      "title": "AI Search Traffic Measurement",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "brand-recognition-in-ai-search"
    }
  ],
  "structured-data": [
    {
      "id": 1,
      "slug": "schema-markup-beginner-guide",
      "title": "Schema Markup: Beginner Guide",
      "readTimeMinutes": 9
    },
    {
      "id": 2,
      "slug": "json-ld-the-recommended-format",
      "title": "JSON-LD: The Recommended Format",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "schema-markup-beginner-guide"
    },
    {
      "id": 3,
      "slug": "article-schema",
      "title": "Article Schema",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "json-ld-the-recommended-format"
    },
    {
      "id": 4,
      "slug": "faqpage-schema",
      "title": "FAQPage Schema",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "article-schema"
    },
    {
      "id": 5,
      "slug": "organization-website-schema",
      "title": "Organization + WebSite Schema",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "faqpage-schema"
    },
    {
      "id": 6,
      "slug": "person-schema-author-pages",
      "title": "Person Schema: Author Pages",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "organization-website-schema"
    },
    {
      "id": 7,
      "slug": "howto-schema",
      "title": "HowTo Schema",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "person-schema-author-pages"
    },
    {
      "id": 8,
      "slug": "breadcrumblist-schema",
      "title": "BreadcrumbList Schema",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "howto-schema"
    },
    {
      "id": 9,
      "slug": "schema-validation-fix-errors",
      "title": "Schema Validation: Fix Errors",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "breadcrumblist-schema"
    },
    {
      "id": 10,
      "slug": "schema-ai-visibility",
      "title": "Schema + AI Visibility",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "schema-validation-fix-errors"
    }
  ],
  "serp-ctr-optimization": [
    {
      "id": 1,
      "slug": "serp-features-map",
      "title": "SERP Features Map",
      "readTimeMinutes": 7
    },
    {
      "id": 2,
      "slug": "featured-snippet-types",
      "title": "Featured Snippet Types",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "serp-features-map"
    },
    {
      "id": 3,
      "slug": "knowledge-panel-get-one",
      "title": "Knowledge Panel: Get One",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "featured-snippet-types"
    },
    {
      "id": 4,
      "slug": "rich-snippets-earn-stars-and-prices",
      "title": "Rich Snippets: Earn Stars and Prices",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "knowledge-panel-get-one"
    },
    {
      "id": 5,
      "slug": "title-tag-ctr-testing",
      "title": "Title Tag CTR Testing",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "rich-snippets-earn-stars-and-prices"
    },
    {
      "id": 6,
      "slug": "meta-description-ctr-psychology",
      "title": "Meta Description CTR Psychology",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "title-tag-ctr-testing"
    },
    {
      "id": 7,
      "slug": "emotional-triggers-in-titles",
      "title": "Emotional Triggers in Titles",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "meta-description-ctr-psychology"
    },
    {
      "id": 8,
      "slug": "numbers-in-titles-ctr-data",
      "title": "Numbers in Titles: CTR Data",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "emotional-triggers-in-titles"
    }
  ],
  "seo-analytics": [
    {
      "id": 1,
      "slug": "google-search-console-setup-overview",
      "title": "Google Search Console: Setup + Overview",
      "readTimeMinutes": 6
    },
    {
      "id": 2,
      "slug": "gsc-performance-report-mastery",
      "title": "GSC Performance Report: Mastery",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "google-search-console-setup-overview"
    },
    {
      "id": 3,
      "slug": "gsc-index-coverage-interpret-fix",
      "title": "GSC Index Coverage: Interpret + Fix",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "gsc-performance-report-mastery"
    },
    {
      "id": 4,
      "slug": "gsc-url-inspection-tool",
      "title": "GSC URL Inspection Tool",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "gsc-index-coverage-interpret-fix"
    },
    {
      "id": 5,
      "slug": "ga4-for-seo-traffic-analysis",
      "title": "GA4 for SEO: Traffic Analysis",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "gsc-url-inspection-tool"
    },
    {
      "id": 6,
      "slug": "ai-referral-traffic-in-ga4",
      "title": "AI Referral Traffic in GA4",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "ga4-for-seo-traffic-analysis"
    },
    {
      "id": 7,
      "slug": "content-decay-detection",
      "title": "Content Decay Detection",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "ai-referral-traffic-in-ga4"
    },
    {
      "id": 8,
      "slug": "seo-experiment-measurement",
      "title": "SEO Experiment Measurement",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "content-decay-detection"
    }
  ],
  "seo-audit": [
    {
      "id": 1,
      "slug": "seo-audit-the-8-layer-framework",
      "title": "SEO Audit: The 8-Layer Framework",
      "readTimeMinutes": 11
    },
    {
      "id": 2,
      "slug": "technical-audit-47-point-checklist",
      "title": "Technical Audit: 47-Point Checklist",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "seo-audit-the-8-layer-framework"
    },
    {
      "id": 3,
      "slug": "content-audit-evaluate-all-pages",
      "title": "Content Audit: Evaluate All Pages",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "technical-audit-47-point-checklist"
    },
    {
      "id": 4,
      "slug": "on-page-audit-full-checklist",
      "title": "On-Page Audit: Full Checklist",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "content-audit-evaluate-all-pages"
    },
    {
      "id": 5,
      "slug": "e-e-a-t-audit-35-point-checklist",
      "title": "E-E-A-T Audit: 35-Point Checklist",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "on-page-audit-full-checklist"
    },
    {
      "id": 6,
      "slug": "aeo-audit-answer-readiness-check",
      "title": "AEO Audit: Answer-Readiness Check",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "e-e-a-t-audit-35-point-checklist"
    },
    {
      "id": 7,
      "slug": "geo-audit-ai-visibility-checklist",
      "title": "GEO Audit: AI Visibility Checklist",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "aeo-audit-answer-readiness-check"
    },
    {
      "id": 8,
      "slug": "monthly-seo-audit-recurring-template",
      "title": "Monthly SEO Audit: Recurring Template",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "geo-audit-ai-visibility-checklist"
    }
  ],
  "platform-seo": [
    {
      "id": 1,
      "slug": "wordpress-seo-complete-setup",
      "title": "WordPress SEO: Complete Setup",
      "readTimeMinutes": 5
    },
    {
      "id": 2,
      "slug": "shopify-seo-built-in-custom",
      "title": "Shopify SEO: Built-in + Custom",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "wordpress-seo-complete-setup"
    },
    {
      "id": 3,
      "slug": "webflow-seo-complete-guide",
      "title": "Webflow SEO: Complete Guide",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "shopify-seo-built-in-custom"
    },
    {
      "id": 4,
      "slug": "next-js-seo-react-framework",
      "title": "Next.js SEO: React Framework",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "webflow-seo-complete-guide"
    },
    {
      "id": 5,
      "slug": "lovable-ai-seo-no-code-guide",
      "title": "Lovable.ai SEO: No-Code Guide",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "next-js-seo-react-framework"
    },
    {
      "id": 6,
      "slug": "framer-seo-setup-guide",
      "title": "Framer SEO: Setup Guide",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "lovable-ai-seo-no-code-guide"
    }
  ],
  "ecommerce-seo": [
    {
      "id": 1,
      "slug": "ecommerce-seo-overview",
      "title": "eCommerce SEO Overview",
      "readTimeMinutes": 10
    },
    {
      "id": 2,
      "slug": "product-page-seo",
      "title": "Product Page SEO",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "ecommerce-seo-overview"
    },
    {
      "id": 3,
      "slug": "category-page-seo",
      "title": "Category Page SEO",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "product-page-seo"
    },
    {
      "id": 4,
      "slug": "product-schema-ratings-price",
      "title": "Product Schema: Ratings + Price",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "category-page-seo"
    },
    {
      "id": 5,
      "slug": "ecommerce-keyword-research",
      "title": "eCommerce Keyword Research",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "product-schema-ratings-price"
    },
    {
      "id": 6,
      "slug": "faceted-navigation-fix-it",
      "title": "Faceted Navigation: Fix It",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "ecommerce-keyword-research"
    },
    {
      "id": 7,
      "slug": "review-content-for-seo",
      "title": "Review Content for SEO",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "faceted-navigation-fix-it"
    }
  ],
  "local-seo": [
    {
      "id": 1,
      "slug": "local-seo-overview",
      "title": "Local SEO Overview",
      "readTimeMinutes": 7
    },
    {
      "id": 2,
      "slug": "google-business-profile-complete-setup",
      "title": "Google Business Profile: Complete Setup",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "local-seo-overview"
    },
    {
      "id": 3,
      "slug": "local-citations-nap-consistency",
      "title": "Local Citations: NAP Consistency",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "google-business-profile-complete-setup"
    },
    {
      "id": 4,
      "slug": "google-reviews-manage-for-seo",
      "title": "Google Reviews: Manage for SEO",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "local-citations-nap-consistency"
    },
    {
      "id": 5,
      "slug": "local-keywords-find-target",
      "title": "Local Keywords: Find + Target",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "google-reviews-manage-for-seo"
    },
    {
      "id": 6,
      "slug": "local-schema-markup",
      "title": "Local Schema Markup",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "local-keywords-find-target"
    },
    {
      "id": 7,
      "slug": "map-pack-rankings-how-to-appear",
      "title": "Map Pack Rankings: How to Appear",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "local-schema-markup"
    }
  ],
  "youtube-seo": [
    {
      "id": 1,
      "slug": "youtube-seo-overview",
      "title": "YouTube SEO Overview",
      "readTimeMinutes": 6
    },
    {
      "id": 2,
      "slug": "youtube-keyword-research",
      "title": "YouTube Keyword Research",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "youtube-seo-overview"
    },
    {
      "id": 3,
      "slug": "title-optimization-for-ctr",
      "title": "Title Optimization for CTR",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "youtube-keyword-research"
    },
    {
      "id": 4,
      "slug": "description-seo",
      "title": "Description SEO",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "title-optimization-for-ctr"
    },
    {
      "id": 5,
      "slug": "youtube-chapters-seo-value",
      "title": "YouTube Chapters: SEO Value",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "description-seo"
    },
    {
      "id": 6,
      "slug": "watch-time-ranking",
      "title": "Watch Time + Ranking",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "youtube-chapters-seo-value"
    },
    {
      "id": 7,
      "slug": "videoobject-schema-for-your-site",
      "title": "VideoObject Schema for Your Site",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "watch-time-ranking"
    },
    {
      "id": 8,
      "slug": "youtube-website-traffic-synergy",
      "title": "YouTube + Website: Traffic Synergy",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "videoobject-schema-for-your-site"
    }
  ],
  "programmatic-seo": [
    {
      "id": 1,
      "slug": "programmatic-seo-what-it-is",
      "title": "Programmatic SEO: What It Is",
      "readTimeMinutes": 10
    },
    {
      "id": 2,
      "slug": "when-to-use-it",
      "title": "When to Use It",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "programmatic-seo-what-it-is"
    },
    {
      "id": 3,
      "slug": "quality-vs-spam-the-line",
      "title": "Quality vs Spam: The Line",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "when-to-use-it"
    },
    {
      "id": 4,
      "slug": "database-driven-page-seo",
      "title": "Database-Driven Page SEO",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "quality-vs-spam-the-line"
    },
    {
      "id": 5,
      "slug": "when-not-to-use-programmatic",
      "title": "When NOT to Use Programmatic",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "database-driven-page-seo"
    }
  ],
  "google-algorithm-updates": [
    {
      "id": 1,
      "slug": "algorithm-updates-how-they-work",
      "title": "Algorithm Updates: How They Work",
      "readTimeMinutes": 6
    },
    {
      "id": 2,
      "slug": "helpful-content-update-what-changed",
      "title": "Helpful Content Update: What Changed",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "algorithm-updates-how-they-work"
    },
    {
      "id": 3,
      "slug": "hcu-recovery-step-by-step",
      "title": "HCU Recovery: Step-by-Step",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "helpful-content-update-what-changed"
    },
    {
      "id": 4,
      "slug": "core-update-recovery",
      "title": "Core Update Recovery",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "hcu-recovery-step-by-step"
    },
    {
      "id": 5,
      "slug": "traffic-drop-diagnosis",
      "title": "Traffic Drop Diagnosis",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "core-update-recovery"
    },
    {
      "id": 6,
      "slug": "algorithm-update-detection",
      "title": "Algorithm Update Detection",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "traffic-drop-diagnosis"
    },
    {
      "id": 7,
      "slug": "update-history-2024-2026",
      "title": "Update History 2024-2026",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "algorithm-update-detection"
    }
  ],
  "competitor-seo-analysis": [
    {
      "id": 1,
      "slug": "competitor-analysis-framework",
      "title": "Competitor Analysis: Framework",
      "readTimeMinutes": 11
    },
    {
      "id": 2,
      "slug": "competitor-keywords-free-methods",
      "title": "Competitor Keywords (Free Methods)",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "competitor-analysis-framework"
    },
    {
      "id": 3,
      "slug": "content-gap-analysis",
      "title": "Content Gap Analysis",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "competitor-keywords-free-methods"
    },
    {
      "id": 4,
      "slug": "competitor-backlink-analysis",
      "title": "Competitor Backlink Analysis",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "content-gap-analysis"
    },
    {
      "id": 5,
      "slug": "niche-down-strategy",
      "title": "Niche-Down Strategy",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "competitor-backlink-analysis"
    },
    {
      "id": 6,
      "slug": "serp-competitor-analysis",
      "title": "SERP Competitor Analysis",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "niche-down-strategy"
    }
  ],
  "seo-troubleshooting": [
    {
      "id": 1,
      "slug": "website-not-indexing-complete-fix",
      "title": "Website Not Indexing: Complete Fix",
      "readTimeMinutes": 7
    },
    {
      "id": 2,
      "slug": "discovered-not-indexed-fix",
      "title": "Discovered Not Indexed: Fix",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "website-not-indexing-complete-fix"
    },
    {
      "id": 3,
      "slug": "crawled-not-indexed-fix",
      "title": "Crawled Not Indexed: Fix",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "discovered-not-indexed-fix"
    },
    {
      "id": 4,
      "slug": "traffic-suddenly-dropped",
      "title": "Traffic Suddenly Dropped",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "crawled-not-indexed-fix"
    },
    {
      "id": 5,
      "slug": "impressions-up-clicks-down",
      "title": "Impressions Up, Clicks Down",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "traffic-suddenly-dropped"
    },
    {
      "id": 6,
      "slug": "page-stuck-at-position-50",
      "title": "Page Stuck at Position 50",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "impressions-up-clicks-down"
    },
    {
      "id": 7,
      "slug": "new-website-not-ranking",
      "title": "New Website Not Ranking",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "page-stuck-at-position-50"
    },
    {
      "id": 8,
      "slug": "backlinks-but-no-rankings",
      "title": "Backlinks but No Rankings",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "new-website-not-ranking"
    },
    {
      "id": 9,
      "slug": "ai-search-won-t-cite-my-site",
      "title": "AI Search Won't Cite My Site",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "backlinks-but-no-rankings"
    },
    {
      "id": 10,
      "slug": "old-content-losing-traffic",
      "title": "Old Content Losing Traffic",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "ai-search-won-t-cite-my-site"
    }
  ],
  "seo-case-studies": [
    {
      "id": 1,
      "slug": "case-study-0-to-100-clicks",
      "title": "Case Study: 0 to 100 Clicks",
      "readTimeMinutes": 7
    },
    {
      "id": 2,
      "slug": "1-good-article-vs-20-ai-articles",
      "title": "1 Good Article vs 20 AI Articles",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "case-study-0-to-100-clicks"
    },
    {
      "id": 3,
      "slug": "internal-linking-impact",
      "title": "Internal Linking Impact",
      "readTimeMinutes": 6,
      "prerequisiteSlug": "1-good-article-vs-20-ai-articles"
    },
    {
      "id": 4,
      "slug": "llms-txt-ai-citations",
      "title": "llms.txt + AI Citations",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "internal-linking-impact"
    },
    {
      "id": 5,
      "slug": "content-pruning-results",
      "title": "Content Pruning: Results",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "llms-txt-ai-citations"
    },
    {
      "id": 6,
      "slug": "experiment-lab-title-tag-test",
      "title": "Experiment Lab: Title Tag Test",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "content-pruning-results"
    },
    {
      "id": 7,
      "slug": "experiment-lab-faq-section-impact",
      "title": "Experiment Lab: FAQ Section Impact",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "experiment-lab-title-tag-test"
    },
    {
      "id": 8,
      "slug": "experiment-lab-author-bio-e-e-a-t",
      "title": "Experiment Lab: Author Bio + E-E-A-T",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "experiment-lab-faq-section-impact"
    }
  ],
  "seo-myths": [
    {
      "id": 1,
      "slug": "the-15-biggest-seo-myths",
      "title": "The 15 Biggest SEO Myths",
      "readTimeMinutes": 6
    },
    {
      "id": 2,
      "slug": "myths-about-backlinks",
      "title": "Myths About Backlinks",
      "readTimeMinutes": 7,
      "prerequisiteSlug": "the-15-biggest-seo-myths"
    },
    {
      "id": 3,
      "slug": "myths-about-content",
      "title": "Myths About Content",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "myths-about-backlinks"
    },
    {
      "id": 4,
      "slug": "myths-about-ai-search",
      "title": "Myths About AI Search",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "myths-about-content"
    },
    {
      "id": 5,
      "slug": "myths-about-tools",
      "title": "Myths About Tools",
      "readTimeMinutes": 11,
      "prerequisiteSlug": "myths-about-ai-search"
    }
  ],
  "advanced-seo": [
    {
      "id": 1,
      "slug": "semantic-seo-entities-nlp",
      "title": "Semantic SEO: Entities + NLP",
      "readTimeMinutes": 6
    },
    {
      "id": 2,
      "slug": "google-knowledge-graph",
      "title": "Google Knowledge Graph",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "semantic-seo-entities-nlp"
    },
    {
      "id": 3,
      "slug": "entity-building-strategy",
      "title": "Entity Building Strategy",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "google-knowledge-graph"
    },
    {
      "id": 4,
      "slug": "saas-seo-free-tools-strategy",
      "title": "SaaS SEO: Free Tools Strategy",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "entity-building-strategy"
    },
    {
      "id": 5,
      "slug": "seo-for-personal-brands",
      "title": "SEO for Personal Brands",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "saas-seo-free-tools-strategy"
    },
    {
      "id": 6,
      "slug": "international-seo-multi-region",
      "title": "International SEO: Multi-Region",
      "readTimeMinutes": 10,
      "prerequisiteSlug": "seo-for-personal-brands"
    },
    {
      "id": 7,
      "slug": "content-velocity-vs-quality",
      "title": "Content Velocity vs Quality",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "international-seo-multi-region"
    },
    {
      "id": 8,
      "slug": "seo-a-b-testing-methodology",
      "title": "SEO A/B Testing: Methodology",
      "readTimeMinutes": 8,
      "prerequisiteSlug": "content-velocity-vs-quality"
    }
  ],
  "seo-glossary": [
    {
      "id": 1,
      "slug": "seo-terms-a-f",
      "title": "SEO Terms A-F",
      "readTimeMinutes": 11
    },
    {
      "id": 2,
      "slug": "seo-terms-g-m",
      "title": "SEO Terms G-M",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "seo-terms-a-f"
    },
    {
      "id": 3,
      "slug": "seo-terms-n-z",
      "title": "SEO Terms N-Z",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "seo-terms-g-m"
    },
    {
      "id": 4,
      "slug": "geo-aeo-glossary",
      "title": "GEO + AEO Glossary",
      "readTimeMinutes": 9,
      "prerequisiteSlug": "seo-terms-n-z"
    },
    {
      "id": 5,
      "slug": "schema-technical-glossary",
      "title": "Schema + Technical Glossary",
      "readTimeMinutes": 5,
      "prerequisiteSlug": "geo-aeo-glossary"
    }
  ]
};

export function getModule(slug: string): ModuleMeta | undefined {
  return MODULES.find(m => m.slug === slug);
}

export function getChapters(moduleSlug: string): ChapterMeta[] {
  return MOCK_CHAPTERS[moduleSlug] || [];
}

export function getChapter(moduleSlug: string, chapterSlug: string): ChapterMeta | undefined {
  const chapters = getChapters(moduleSlug);
  return chapters.find(c => c.slug === chapterSlug);
}
