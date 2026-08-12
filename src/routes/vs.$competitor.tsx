import { createFileRoute, Link } from "@tanstack/react-router";
import { VS_CONTENT } from "@/lib/vs-content";
import { SITE_URL } from "@/lib/tool-meta";
import { PageContainer } from "@/components/Layout";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/vs/$competitor")({
  loader: ({ params }) => {
    const data = VS_CONTENT[params.competitor.toLowerCase()];
    if (!data) throw new Error("Competitor not found");
    return data;
  },
  head: ({ loaderData }) => {
    return {
      meta: [
        { title: `${loaderData?.title} — SEOAcademys` },
        { name: "description", content: loaderData?.description },
        { property: "og:title", content: loaderData?.title },
        { property: "og:description", content: loaderData?.description },
        { property: "og:url", content: `${SITE_URL}/vs/${loaderData?.slug}` },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/vs/${loaderData?.slug}` }],
    };
  },
  component: VsPage,
});

function VsPage() {
  const data = Route.useLoaderData();

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-8">
        
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">{data.h1}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{data.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col">
            <h2 className="font-display text-2xl font-bold mb-2 text-muted-foreground">{data.name}</h2>
            <div className="text-3xl font-bold mb-6 text-muted-foreground">{data.price}</div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {data.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  {f.theirs === true ? <CheckCircle2 className="size-5 text-muted-foreground shrink-0" /> 
                    : f.theirs === false ? <XCircle className="size-5 text-destructive shrink-0" />
                    : <span className="text-sm font-bold w-5 text-center text-muted-foreground">{f.theirs}</span>}
                  <span className="text-sm text-muted-foreground">{f.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 sm:p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl-lg font-medium text-xs">
              Recommended
            </div>
            <h2 className="font-display text-2xl font-bold mb-2 text-foreground">SEOAcademys</h2>
            <div className="text-3xl font-bold mb-6 text-primary">{data.ourPrice}</div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {data.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  {f.ours === true ? <CheckCircle2 className="size-5 text-success shrink-0" /> 
                    : f.ours === false ? <XCircle className="size-5 text-muted-foreground shrink-0" />
                    : <span className="text-sm font-bold w-5 text-center">{f.ours}</span>}
                  <span className="text-sm font-medium">{f.name}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/tools" className="w-full py-3 rounded-md bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
              Try Tools For Free <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="prose prose-slate max-w-none dark:prose-invert bg-surface border border-border rounded-xl p-8">
          <h3 className="font-display text-2xl font-bold mb-4 mt-0">The Verdict</h3>
          <p className="lead">{data.conclusion}</p>
        </div>

      </div>
    </PageContainer>
  );
}
