export type LearnModule = {
  slug: string;
  title: string;
  readTime: string;
  content: string;
};

export const LEARN_MODULES: Record<string, LearnModule> = {
  "what-is-geo": {
    slug: "what-is-geo",
    title: "What is GEO? Complete Beginner Guide",
    readTime: "8 min",
    content: `
## Introduction to Generative Engine Optimization (GEO)

Generative Engine Optimization (GEO) is the practice of optimizing content so that it is recommended, cited, and summarized by AI search engines like ChatGPT, Google AI Overviews (SGE), Perplexity, and Claude. 

Unlike traditional SEO, which focuses on ranking in the "10 blue links," GEO focuses on being the source material that Large Language Models (LLMs) use to generate answers for users.

## Why GEO Matters in 2026

AI search engines now handle over 60% of informational queries. When a user asks an AI a question, the AI reads the top web results, synthesizes an answer, and cites the sources. 

If your website is cited, you get highly qualified traffic. The user is essentially being told by an authoritative AI, "Here is the answer, and this website is the best source."

## The Core Pillars of GEO

1. **Entity Recognition:** AI models understand the world in terms of entities (people, places, concepts, brands). Your brand must be recognized as a distinct entity in Google's Knowledge Graph and training datasets.
2. **Factual Density:** LLMs prefer to cite content that is dense with facts, statistics, verifiable claims, and expert quotes. "Fluff" is ignored.
3. **Technical Accessibility:** If your \`robots.txt\` blocks AI crawlers like \`OAI-SearchBot\` or \`PerplexityBot\`, you cannot be cited. Modern GEO requires allowing these crawlers while optionally blocking training bots like \`GPTBot\`.
4. **Structured Data:** Beyond basic schema, tools like \`llms.txt\` and advanced JSON-LD (FAQPage, SoftwareApplication) explicitly tell AI what your page is about in a machine-readable format.

## Getting Started

To start optimizing for GEO, run your site through our **AI Citation Audit** tool. It will check 47 critical GEO signals and give you a baseline score for ChatGPT, Gemini, and Perplexity.
    `
  },
  "how-ai-overviews-choose-citations": {
    slug: "how-ai-overviews-choose-citations",
    title: "How Google AI Overviews Choose Citations",
    readTime: "10 min",
    content: `
## Decoding Google's AI Overviews (AIO)

Google AI Overviews (formerly SGE) represent the biggest shift in Google Search since the PageRank algorithm. But how does Google decide which websites to feature in the coveted citation carousel above the organic results?

## The AIO Selection Process

When a query triggers an AI Overview, Google's systems perform a multi-step process:

1. **Information Retrieval:** Traditional Google Search retrieves the top 10-20 relevant documents.
2. **Passage Extraction:** The LLM scans these documents for passages that directly answer the query.
3. **Fact-Checking & Consensus:** The LLM cross-references the extracted claims against Google's Knowledge Graph and the consensus of the top results.
4. **Generation & Citation:** The LLM generates the summary and attaches citation links to the documents that provided the specific facts used in the generation.

## How to Increase Your AIO Citation Rate

### 1. The "Direct Answer" Format
AI Overviews heavily favor content that asks a question in an H2 heading, followed immediately by a direct, concise 2-3 sentence answer. 

**Example:**
*H2: What is the speed of light?*
*Paragraph: The speed of light in a vacuum is exactly 299,792,458 meters per second (approximately 300,000 km/s). It is the universal physical constant...*

### 2. High Factual Density
A study of 10,000 AI Overviews found that cited pages have 40% more numerical statistics and data points than non-cited pages. Replace adjectives with data.

### 3. Maintain Traditional SEO
Google's LLM is heavily biased toward the top 10 organic results. If you don't rank on Page 1 or 2 for the query organically, your chances of appearing in the AI Overview are statistically near zero.
    `
  },
  "schema-2-0": {
    slug: "schema-2-0",
    title: "Schema 2.0: Beyond Basic Structured Data",
    readTime: "7 min",
    content: `
## Why Basic Schema Isn't Enough Anymore

For years, SEOs added basic \`Organization\` or \`Article\` schema and called it a day. In the era of AI Search, structured data is no longer just for rich snippets in Google—it is the primary way you feed facts directly into Large Language Models.

## High-Impact Schema Types for GEO

### FAQPage Schema
When you mark up questions and answers using \`FAQPage\` JSON-LD, you are handing AI models pre-packaged training pairs. Perplexity and ChatGPT Search frequently extract answers directly from FAQ structured data because it is highly structured and unambiguous.

### SoftwareApplication & Product Schema
If you sell software or e-commerce products, AI models need to know the price, rating, and feature set instantly. \`Product\` schema with \`aggregateRating\` and \`offers\` ensures that when a user asks "What is the price of X?", the AI has the exact, current data without trying to parse your HTML pricing table.

### ClaimReview Schema
Used originally for fact-checkers, \`ClaimReview\` is incredibly powerful for establishing authoritative stances on industry myths. AI models use this schema to weight the truthfulness of conflicting information.

## Best Practices for Implementation

1. **Avoid Duplication:** Do not put \`FAQPage\` schema on a page if the questions and answers are not visible in the HTML. AI crawlers heavily penalize hidden schema.
2. **Nest Your Entities:** An \`Article\` should be authored by a \`Person\`, who works for an \`Organization\`. Connecting these entities helps Google's Knowledge Graph map your authority.
3. **Validate Constantly:** Use our **Schema Validator** tool to ensure your JSON-LD parses correctly. A single missing comma can invalidate the entire script block.
    `
  },
  "llms-txt-guide": {
    slug: "llms-txt-guide",
    title: "llms.txt: The New robots.txt for AI Crawlers",
    readTime: "6 min",
    content: `
## What is llms.txt?

Just as \`robots.txt\` tells traditional crawlers what they *cannot* access, \`llms.txt\` is a new standard designed to tell AI crawlers what they *should* access. 

It is a markdown file placed in the root directory of your website (\`https://example.com/llms.txt\`) that provides a highly condensed, machine-readable summary of your site's structure, documentation, and key facts.

## Why You Need It

When an AI agent (like ChatGPT searching the web) lands on your site, it has a limited context window. It doesn't want to download 5MB of CSS, JavaScript, and navigation boilerplate. 

\`llms.txt\` provides a clean, text-only map of your most important content. Websites with a valid \`llms.txt\` file see a significantly higher extraction success rate by AI bots.

## How to Write an llms.txt File

A standard \`llms.txt\` file includes:
1. **System Prompt / Description:** A brief summary of what the company/website does.
2. **Key URLs:** Links to the most important documentation, pricing, or product pages, often linking to \`.md\` versions of those pages.
3. **Brand Facts:** Core statistics or features you want the AI to memorize.

**Example:**
\`\`\`markdown
# SEOAcademys
> Free SEO + GEO tools platform used by 2.4M+ marketers.

## Start here
- [All tools](https://seoacademys.com/tools): Directory of every free tool.
- [SEO Audit Hub](https://seoacademys.com/tools/seo-audit-hub)
\`\`\`

You can generate a perfect, standards-compliant file in seconds using our free **Schema & llms.txt Generator** tool.
    `
  },
  "entity-seo": {
    slug: "entity-seo",
    title: "Entity SEO: Get Your Brand into Google's Knowledge Graph",
    readTime: "9 min",
    content: `
## The Shift from Strings to Things

In traditional SEO, we optimized for "strings" (keywords). In Generative Engine Optimization, we must optimize for "things" (Entities). 

An entity is any distinct, well-defined concept, person, place, or brand. AI models don't just match keywords; they understand the relationships between entities. If your brand is not recognized as an entity, AI models will struggle to recommend you.

## How to Build Entity Authority

### 1. Consistent NAP + W
Name, Address, Phone, and Website must be identical across the entire web. Discrepancies confuse the Knowledge Graph.

### 2. The Power of "sameAs"
In your \`Organization\` schema, the \`sameAs\` array is your most powerful tool. Use it to link your website to your Wikipedia page, Crunchbase profile, LinkedIn company page, and Twitter account. This explicitly tells AI, "All these profiles represent the same entity."

### 3. Digital PR and Co-occurrence
Google builds entity relationships by observing co-occurrence. If your brand name is frequently mentioned in the same paragraph as established industry terms on high-authority sites (like Forbes or TechCrunch), the Knowledge Graph maps your entity to those topics.

## Checking Your Entity Status
To see if Google recognizes you as an entity, use the Google Knowledge Graph Search API. If you have a Knowledge Panel on the right side of desktop search results, you are an established entity.
    `
  },
  "content-optimization-llm": {
    slug: "content-optimization-llm",
    title: "Content Optimization for LLM Extraction",
    readTime: "11 min",
    content: `
## Writing for Algorithms, Not Just Humans

When a Large Language Model reads your webpage, it is looking for factual, unambiguous statements to extract and cite. Content that is highly conversational, sarcastic, or meandering performs poorly in AI search.

## 5 Rules for LLM Optimization

### 1. The Inverted Pyramid
Start every article with the definitive answer. Do not bury the solution after three paragraphs of backstory. AI models heavily weight the first 200 words of a document.

### 2. Definitional Language
Use explicit copula verbs (is, are, defined as). 
*Poor:* "When looking at GEO, it's basically about AI."
*Optimized:* "Generative Engine Optimization (GEO) is the practice of optimizing content for AI search engines."

### 3. Factual Density
Princeton researchers found that adding citations and statistics increases a document's likelihood of being cited by an LLM by over 30%. Use specific numbers, dates, and named entities.

### 4. Semantic HTML Structure
Use H2s and H3s properly. An AI uses your heading outline to understand the document's structure. Check your hierarchy using our **Heading Structure Checker**.

### 5. Remove Ambiguity
Avoid pronouns when referring to core concepts. Instead of "It is a great tool," write "The SEOAcademys Rank Tracker is a great tool." LLMs can lose pronoun resolution in complex documents.
    `
  },
  "geo-for-ecommerce": {
    slug: "geo-for-ecommerce",
    title: "GEO for E-Commerce: AI Product Visibility",
    readTime: "8 min",
    content: `
## The New E-Commerce Funnel

Users are increasingly asking AI: "What is the best running shoe for flat feet under $100?" If your product is not in the AI's answer, you lose the sale before the user even visits a store.

## Optimizing Product Pages for AI

### 1. Flawless Product Schema
Your \`Product\` JSON-LD must be exhaustive. Include \`brand\`, \`sku\`, \`gtin14\`, \`aggregateRating\`, and exact \`offers\`. AI models use this structured data to confidently answer price and availability queries.

### 2. Feature-Based Descriptions
Avoid flowery marketing copy. Use bulleted lists for specifications (weight, dimensions, material, compatibility). AI models parse lists much more accurately than dense paragraphs.

### 3. Review Summarization
AI engines often summarize user reviews. Encourage reviewers to mention specific use-cases (e.g., "Great for flat feet"). If the AI sees a consensus in reviews, it will confidently recommend the product for that specific query.

### 4. Comparison Tables
HTML tables comparing your product to alternatives are highly extractable. AI models frequently scrape HTML \`<table>\` elements to construct their own comparison matrices in the chat interface.
    `
  },
  "geo-for-saas": {
    slug: "geo-for-saas",
    title: "GEO for SaaS: Getting Cited in ChatGPT",
    readTime: "9 min",
    content: `
## Winning the "Best Software for..." Queries

For SaaS companies, AI search is a massive threat and opportunity. ChatGPT and Perplexity are becoming the default research tools for B2B software buyers.

## Strategies for SaaS GEO

### 1. The Comparison Page Strategy
Create dedicated "YourBrand vs Competitor" pages. AI models love synthesizing comparisons. If you provide a fair, fact-based comparison (using an HTML table), you can control the narrative when an AI summarizes the differences.

### 2. Explicit Pricing Models
AI users frequently ask, "How much does [Software] cost?" If your pricing is hidden behind a "Book a Demo" wall, the AI will either hallucinate a price based on old forum posts or recommend a competitor with transparent pricing. Put a clear \`SoftwareApplication\` schema on your pricing page.

### 3. API and Integration Documentation
B2B buyers ask AI if tools integrate. Maintain a clean, accessible directory of integrations. Using an \`llms.txt\` file to map your API documentation ensures AI coding assistants (like GitHub Copilot and Claude) recommend your software to developers.

### 4. Technical Authority
Publish deep-dive technical content on the underlying problems your software solves. Authoritative, long-form content establishes your brand as the subject matter expert in the LLM's training data.
    `
  },
  "measuring-ai-visibility": {
    slug: "measuring-ai-visibility",
    title: "Measuring AI Visibility: Free Methods & Tools",
    readTime: "7 min",
    content: `
## The Tracking Problem

Traditional SEO relies on Google Search Console and keyword trackers to measure success. But how do you measure if ChatGPT or Perplexity is citing you? There is no "ChatGPT Search Console."

## 3 Ways to Track GEO Success

### 1. Server Log Analysis
The most accurate method is checking your server logs for AI crawler user-agents. Look for hits from:
- \`OAI-SearchBot\` (ChatGPT Search)
- \`PerplexityBot\` (Perplexity)
- \`ClaudeBot\` (Claude)
- \`Google-Extended\` (Google AI Overviews)

When these bots hit a specific URL, it means a user just asked a query that triggered a real-time fetch of your page.

### 2. Referral Traffic
In Google Analytics, look for referral traffic from:
- \`chatgpt.com\`
- \`perplexity.ai\`
- \`claude.ai\`
While this only tracks clicks (not total citations), an increase in AI referral traffic strongly correlates with improved GEO.

### 3. AI Citation Auditing
Use our **AI Citation Audit** tool to scan your core landing pages. It evaluates the 47 signals that dictate citation probability. Track your score over time; as your score improves, your appearance in AI answers will follow.
    `
  }
};
