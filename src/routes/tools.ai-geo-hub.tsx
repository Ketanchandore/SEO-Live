import { createFileRoute } from "@tanstack/react-router";
import { HubPage, hubHead, type HubDef } from "@/components/HubPage";
import { getToolContent } from "@/lib/tool-meta";

const hub: HubDef = {
  path: "/tools/ai-geo-hub",
  title: "AI & GEO Hub — Get Cited by ChatGPT, Gemini, Perplexity & Claude | SEOAcademys",
  description:
    "Free Generative Engine Optimization toolkit: AI citation audit, GEO market intelligence, content readiness scoring, llms.txt and AI crawler access checks. No signup.",
  h1: "AI &amp; GEO Hub — Optimize for AI Search Engines, Free",
  intro: [
    "Generative Engine Optimization (GEO) is the practice of making a website quotable by AI answer engines such as ChatGPT, Google Gemini, Perplexity and Claude. It sits on top of SEO: the same crawl and index still apply, but the winning content format is different.",
    "This hub collects every free GEO tool on SEOAcademys, in the order you should use them — audit your citation readiness, study who currently gets cited in your market, then rewrite content until it is extractable.",
  ],
  slugs: ["ai-citation-audit", "geo-tracker", "content-checker", "schema-generator", "robots-checker", "readability"],
  sections: [
    {
      h2: "What makes content citable by AI engines?",
      body: [
        "Models quote sentences, not pages. A quotable sentence names the entity, states a verifiable fact and stands alone without surrounding context.",
        "Five properties reliably raise citation probability.",
      ],
      list: [
        "A direct answer to the page's core question inside the first 200 words",
        "Dated, sourced statistics rather than adjectives",
        "Explicit entity names instead of pronouns in key sentences",
        "Question-format headings that match how people actually ask",
        "Machine-readable schema plus an llms.txt file guiding crawlers to key pages",
      ],
      steps: [
        { title: "Audit Citation Readiness", body: "Use the AI Citation Audit tool to check if your page has the factual density and structure required by LLMs." },
        { title: "Analyze the Market", body: "Use the GEO Tracker to see which competitors are currently being cited by ChatGPT and Perplexity for your keywords." },
        { title: "Optimize Format", body: "Rewrite content to include Direct Answers (Inverted Pyramid style), statistics, and explicit entity relationships." },
        { title: "Provide Machine Maps", body: "Deploy exhaustive JSON-LD schema and an llms.txt file so AI agents can parse your facts instantly." }
      ]
    },
    {
      h2: "Traditional SEO vs GEO",
      body: [
        "While they rely on the same crawling infrastructure, the optimization techniques for the '10 blue links' and AI Overviews are completely different."
      ],
      table: {
        head: ["Concept", "Traditional SEO", "Generative Engine Optimization (GEO)"],
        rows: [
          ["Goal", "Rank #1 in the '10 blue links'", "Be cited as a source in AI answers"],
          ["Content Focus", "Keywords, Search Intent, Length", "Factual Density, Direct Answers, Entities"],
          ["HTML Structure", "H1-H3 for keywords", "Semantic tags for explicit relationship mapping"],
          ["Crawler Access", "Allow Googlebot", "Allow OAI-SearchBot, PerplexityBot, ClaudeBot"],
          ["Result Format", "Title Tag + Meta Description", "Synthesized paragraph + Reference Link"]
        ]
      }
    },
    {
      h2: "Do you need to allow AI crawlers?",
      body: [
        "An AI engine cannot cite a page it cannot fetch. Search-time crawlers such as OAI-SearchBot, PerplexityBot and ClaudeBot must be allowed if you want citations.",
        "Training crawlers are a separate decision — blocking GPTBot or CCBot does not remove you from AI search results, because those are different user agents.",
      ],
    },
    {
      h2: "How do you measure GEO progress?",
      body: [
        "Track two things: your own citation readiness score, and the citation mix in your market.",
        "Re-audit 30 days after each content release, since citation share moves on a weeks-long cycle rather than days.",
      ],
    },
  ],
  faqs: [
    { q: "What is GEO?", a: "GEO stands for Generative Engine Optimization — optimizing content so AI answer engines cite it. It complements SEO rather than replacing it, because AI engines retrieve from the same crawled web." },
    { q: "Does GEO replace SEO?", a: "No. Crawlability, indexing and page quality still gate everything. GEO adds a content-format and entity-clarity layer on top of solid technical SEO." },
    { q: "Which AI engines matter most?", a: "Google AI Overviews reach the largest audience, while ChatGPT Search, Perplexity and Claude drive high-intent research traffic. Optimizing for extractability serves all of them at once." },
    { q: "Should I block GPTBot?", a: "Blocking GPTBot only opts you out of model training, not AI search results. Most sites benefit from allowing search-time crawlers regardless of their training stance." },
    { q: "How long does GEO take to work?", a: "Expect measurable movement in four to eight weeks after publishing genuinely extractable content, assuming the pages are already crawlable and indexed." },
  ],
};

export const Route = createFileRoute("/tools/ai-geo-hub")({
  loader: () => getToolContent("ai-geo-hub"),
  head: () => hubHead(hub),
  component: () => <HubPage hub={hub} />,
});
