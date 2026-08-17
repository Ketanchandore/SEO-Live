import { createFileRoute } from "@tanstack/react-router";
import { TOOL_META } from "@/lib/tool-meta";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { MODULES, MOCK_CHAPTERS } from "@/lib/learning-curriculum";
import { SEO_PLATFORMS, KEYWORD_NICHES } from "@/lib/programmatic-seo";
import { GLOSSARY } from "@/lib/glossary-content";

const BASE_URL = "https://seoacademys.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  loader: async () => {

        const staticPaths = [
          "/",
          "/tools",
          "/blog",
          "/blog/author/team",
          "/how-it-works",
          "/changelog",
          "/api-docs",
          "/tools/seo-audit-hub",
          "/tools/ai-geo-hub",
          "/tools/schema-hub",
          "/learn",
          "/about",
          "/about/ketan-chandore",
          "/why-free",
          "/editorial-policy",
          "/methodology",
          "/tools/methodology",
          "/monetization",
          "/corrections",
          "/sources",
          "/contact",
          "/privacy",
          "/terms",
          "/experiments",
          "/seo-stack",
        ];

        const entries: SitemapEntry[] = [
          ...staticPaths.map((path) => ({ path, changefreq: "weekly" as const, priority: "0.5" })),
          ...BLOG_POSTS.map<SitemapEntry>((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.8" })),
          ...Object.keys(TOOL_META).map<SitemapEntry>((slug) => ({ path: `/tools/${slug}`, changefreq: "weekly", priority: "0.8" })),
          ...SEO_PLATFORMS.map<SitemapEntry>((p) => ({ path: `/tools/seo-audit/for/${p.slug}`, changefreq: "weekly", priority: "0.7" })),
          ...KEYWORD_NICHES.map<SitemapEntry>((n) => ({ path: `/tools/keyword-research/for/${n.slug}`, changefreq: "weekly", priority: "0.7" })),
          { path: "/glossary", changefreq: "weekly", priority: "0.8" },
          ...GLOSSARY.map<SitemapEntry>((t) => ({ path: `/glossary/${t.slug}`, changefreq: "monthly", priority: "0.7" })),
          ...MODULES.flatMap((mod) => {
            const urls: SitemapEntry[] = [{ path: `/learn/${mod.slug}`, changefreq: "monthly", priority: "0.9" }];
            if (MOCK_CHAPTERS[mod.slug]) {
              MOCK_CHAPTERS[mod.slug].forEach((chapter) => {
                urls.push({ path: `/learn/${mod.slug}/${chapter.slug}`, changefreq: "monthly", priority: "0.9" });
              });
            }
            return urls;
          }),
        ];

        const urls = entries
          .map((e) =>
            [
              "  <url>",
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>`,
              e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              "  </url>",
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

    throw new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
  component: () => null,
});
