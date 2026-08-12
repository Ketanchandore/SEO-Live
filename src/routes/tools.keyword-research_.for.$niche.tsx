import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ToolPanel } from "@/components/ToolPanel";
import { getNiche } from "@/lib/programmatic-seo";
import { ArrowRight, Wand2, Search, Target } from "lucide-react";
import { Card3D } from "@/components/Card3D";

export const Route = createFileRoute("/tools/keyword-research_/for/$niche")({
  loader: ({ params }) => {
    const niche = getNiche(params.niche);
    if (!niche) throw notFound();
    return { niche };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { niche } = loaderData;
    return {
      meta: [
        { title: `${niche.h1} | SEOAcademys` },
        { name: "description", content: niche.description },
      ],
    };
  },
  component: NicheKeywordPage,
});

function NicheKeywordPage() {
  const { niche } = Route.useLoaderData();

  return (
    <ToolPanel>
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <Wand2 className="size-4" /> Niche Keyword Research
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          {niche.h1}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {niche.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <Card3D className="p-6">
            <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <Search className="size-5 text-primary" />
              Find High-Intent Keywords
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Discover the exact phrases your {niche.name.toLowerCase()} clients are searching for. Target local variations and long-tail questions to bypass broad competition and capture ready-to-convert traffic.
            </p>
          </Card3D>
          <Card3D className="p-6">
            <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="size-5 text-primary" />
              Analyze Competition
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Check keyword difficulty and search volume instantly. Understand search intent—whether informational, navigational, or transactional—to craft content that exactly matches what {niche.name.toLowerCase()} audiences need.
            </p>
          </Card3D>
        </div>

        <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
          <h2 className="font-display text-2xl font-bold mb-3">Start your {niche.name} keyword research</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Use our comprehensive keyword research tool to generate topics, group clusters, and find low-competition opportunities for your {niche.name.toLowerCase()} website.
          </p>
          <Link
            to="/tools/keyword-research"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Open Keyword Research Tool <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </ToolPanel>
  );
}
