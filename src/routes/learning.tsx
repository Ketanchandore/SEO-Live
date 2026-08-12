import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";

const TITLE = "Learning Modules — SEOAcademys";
const DESC = "SEO, GEO, and AEO learning modules and chapters.";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://seoacademys.com/learning" },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/learning" }],
  }),
  component: Learning,
});

function Learning() {
  return (
    <PageContainer>
      <div className="max-w-3xl mx-auto py-16 text-center space-y-6">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-mono mb-3">Coming Soon</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Learning Modules
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
          Comprehensive SEO, GEO, and AEO learning modules and chapters will be available here soon. Stay tuned!
        </p>
      </div>
    </PageContainer>
  );
}
