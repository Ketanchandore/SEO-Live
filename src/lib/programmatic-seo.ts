export type ProgrammaticPage = {
  slug: string;
  name: string;
  h1: string;
  description: string;
};

export const SEO_PLATFORMS: ProgrammaticPage[] = [
  { slug: "wordpress", name: "WordPress", h1: "SEO Audit for WordPress Sites", description: "Free SEO audit tool optimized for WordPress sites. Check Yoast/RankMath meta tags, Core Web Vitals, and wp-content indexing." },
  { slug: "shopify", name: "Shopify", h1: "SEO Audit for Shopify Stores", description: "Free SEO audit tool for Shopify. Check product schema, collection canonicals, and Liquid template speed." },
  { slug: "wix", name: "Wix", h1: "SEO Audit for Wix Sites", description: "Free SEO audit for Wix websites. Validate Wix SEO Wiz settings, mobile rendering, and dynamic serving." },
  { slug: "squarespace", name: "Squarespace", h1: "SEO Audit for Squarespace", description: "Free SEO audit for Squarespace. Analyze template speed, built-in schema, and image optimization." },
  { slug: "nextjs", name: "Next.js", h1: "SEO Audit for Next.js Apps", description: "Free SEO audit for Next.js applications. Check SSR hydration, Core Web Vitals, and App Router metadata." }
];

export const KEYWORD_NICHES: ProgrammaticPage[] = [
  { slug: "plumbers", name: "Plumbers", h1: "Keyword Research for Plumbers", description: "Find the best local keywords for plumbing businesses. Free keyword research tool to discover high-intent search terms." },
  { slug: "lawyers", name: "Lawyers", h1: "Keyword Research for Lawyers", description: "Discover high-value legal keywords. Free keyword research tool for law firms and attorneys." },
  { slug: "real-estate", name: "Real Estate", h1: "Keyword Research for Real Estate", description: "Find local housing and realtor keywords. Free keyword research tool for real estate agents." },
  { slug: "dentists", name: "Dentists", h1: "Keyword Research for Dentists", description: "Find the best local keywords for dental practices. Free keyword research tool to discover high-intent search terms." },
  { slug: "ecommerce", name: "E-Commerce", h1: "Keyword Research for E-Commerce", description: "Find transactional keywords with high buying intent. Free keyword research tool for online stores." }
];

export function getPlatform(slug: string) {
  return SEO_PLATFORMS.find(p => p.slug === slug);
}

export function getNiche(slug: string) {
  return KEYWORD_NICHES.find(n => n.slug === slug);
}
