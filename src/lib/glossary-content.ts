export type GlossaryTerm = {
  slug: string;
  term: string;
  definition: string;
  relatedToolSlug?: string;
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "geo",
    term: "Generative Engine Optimization (GEO)",
    definition: "Generative Engine Optimization (GEO) is the strategy of formatting and structuring website content so that it is selected and cited by AI engines like ChatGPT, Gemini, and Perplexity. It relies on factual density, E-E-A-T signals, and direct answers.",
    relatedToolSlug: "ai-citation-audit",
  },
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    definition: "Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience. The 2026 metrics are Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP).",
    relatedToolSlug: "page-size",
  },
  {
    slug: "canonical-tag",
    term: "Canonical Tag",
    definition: "A canonical tag (rel=\"canonical\") is a snippet of HTML code that defines the main version for duplicate, near-duplicate and similar pages. It tells search engines which version of a URL you want to appear in search results.",
    relatedToolSlug: "canonical-checker",
  },
  {
    slug: "json-ld",
    term: "JSON-LD",
    definition: "JSON-LD (JavaScript Object Notation for Linked Data) is a lightweight Linked Data format. It is the recommended format by Google for implementing Schema.org structured data, as it is easy for humans to read and write and easy for machines to parse.",
    relatedToolSlug: "schema-validator",
  },
  {
    slug: "llms-txt",
    term: "llms.txt",
    definition: "llms.txt is a plain text file placed at the root of a domain that provides information and directives to Large Language Models (LLMs) and AI crawlers about the site's content structure and citation preferences.",
    relatedToolSlug: "schema-generator",
  },
  {
    slug: "robots-txt",
    term: "robots.txt",
    definition: "A robots.txt file tells search engine crawlers which URLs the crawler can access on your site. This is used mainly to avoid overloading your site with requests.",
    relatedToolSlug: "robots-checker",
  },
  {
    slug: "keyword-difficulty",
    term: "Keyword Difficulty",
    definition: "Keyword Difficulty is an estimate of how hard it would be to rank in the top 10 organic search results for a given keyword. It is usually calculated based on the domain authority and backlink profiles of the current top-ranking pages.",
    relatedToolSlug: "keyword-research",
  },
  {
    slug: "backlink",
    term: "Backlink",
    definition: "A backlink is a link created when one website links to another. Backlinks are also called \"inbound links\" or \"incoming links.\" Backlinks are important to SEO because they represent a \"vote of confidence\" from one site to another.",
    relatedToolSlug: "backlink-checker",
  }
];

export function getGlossaryTerm(slug: string) {
  return GLOSSARY.find(t => t.slug === slug);
}
