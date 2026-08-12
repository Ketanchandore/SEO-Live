import { createFileRoute, Link } from "@tanstack/react-router";
import { LEARN_MODULES } from "@/lib/learn-content";
import { PageContainer } from "@/components/Layout";
import { ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const Route = createFileRoute("/learn/$slug")({
  loader: ({ params }) => {
    const module = LEARN_MODULES[params.slug];
    if (!module) throw new Error("Module not found");
    return module;
  },
  head: ({ loaderData }) => {
    return {
      meta: [
        { title: `${loaderData?.title} — SEOAcademys Learning Hub` },
        { name: "description", content: `Learn about ${loaderData?.title} in this free comprehensive GEO guide.` },
        { property: "og:title", content: loaderData?.title },
        { property: "og:description", content: `Learn about ${loaderData?.title} in this free comprehensive GEO guide.` },
      ]
    };
  },
  component: LearnModulePage,
});

function LearnModulePage() {
  const module = Route.useLoaderData();

  return (
    <PageContainer>
      <div className="max-w-3xl mx-auto py-8">
        <Link to="/learn" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8 transition">
          <ArrowLeft className="size-4" /> Back to Learning Hub
        </Link>
        
        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-4">{module.title}</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
          <Clock className="size-4" /> {module.readTime} read
        </div>
        
        <article className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-display prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown>{module.content}</ReactMarkdown>
        </article>
      </div>
    </PageContainer>
  );
}
