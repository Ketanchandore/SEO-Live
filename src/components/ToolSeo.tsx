import { useRouterState } from "@tanstack/react-router";
import { useMemo } from "react";
import { getToolMeta, toolJsonLd } from "@/lib/tool-meta";

/**
 * Injects SoftwareApplication + BreadcrumbList + FAQPage JSON-LD for the
 * currently-mounted /tools/<slug> route. Rendered inside <body> — both Google
 * and AI crawlers (GPTBot, PerplexityBot, ClaudeBot) parse JSON-LD wherever
 * it appears in the document.
 */
export function ToolSeo() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const matches = useRouterState({ select: (s) => s.matches });
  
  const blocks = useMemo(() => {
    const leafMatch = matches[matches.length - 1];
    const loadedMeta = leafMatch?.loaderData as any; // any to avoid ToolMeta import loop if any

    const slug = path.split("/tools/")[1]?.split("/")[0];
    if (!slug) return [];
    
    const meta = loadedMeta ?? getToolMeta(slug);
    if (!meta) return [];
    
    // We only want to generate jsonld if features and faqs are loaded
    if (!meta.features || !meta.faqs) return [];
    
    return toolJsonLd(meta);
  }, [path, matches]);
  if (blocks.length === 0) return null;
  return (
    <>
      {blocks.map((b, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
        />
      ))}
    </>
  );
}
