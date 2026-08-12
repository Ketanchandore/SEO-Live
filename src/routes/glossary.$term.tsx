import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { getGlossaryTerm } from "@/lib/glossary-content";
import { ArrowRight, BookA } from "lucide-react";

export const Route = createFileRoute("/glossary/$term")({
  loader: ({ params }) => {
    const item = getGlossaryTerm(params.term);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { item } = loaderData;
    const url = `https://seoacademys.com/glossary/${item.slug}`;
    return {
      meta: [
        { title: `What is ${item.term}? Definition & Guide | SEOAcademys` },
        { name: "description", content: item.definition },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: item.term,
            description: item.definition,
            url,
            inDefinedTermSet: "https://seoacademys.com/glossary",
          }),
        },
      ],
    };
  },
  component: GlossaryTermPage,
});

function GlossaryTermPage() {
  const { item } = Route.useLoaderData();

  return (
    <PageContainer>
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary">Home</Link> ›{" "}
        <Link to="/glossary" className="hover:text-primary">Glossary</Link> › <span>{item.term}</span>
      </nav>

      <article className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <BookA className="size-4" /> SEO Glossary Term
        </div>
        
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          What is {item.term}?
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-foreground leading-relaxed">
            {item.definition}
          </p>
        </div>

        {item.relatedToolSlug && (
          <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <h2 className="font-display text-xl font-bold mb-2">Analyze your {item.term}</h2>
            <p className="text-muted-foreground mb-4">
              Use our free tool to audit and optimize your website's {item.term.toLowerCase()}.
            </p>
            <Link
              to={`/tools/${item.relatedToolSlug}` as never}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Open Free Tool <ArrowRight className="size-4" />
            </Link>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/glossary" className="text-primary hover:underline font-medium flex items-center gap-2">
            <ArrowRight className="size-4 rotate-180" /> Back to Glossary
          </Link>
        </div>
      </article>
    </PageContainer>
  );
}
