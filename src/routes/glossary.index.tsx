import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { GLOSSARY } from "@/lib/glossary-content";
import { Card3D } from "@/components/Card3D";
import { BookA, Search } from "lucide-react";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/glossary/")({
  head: () => ({
    meta: [
      { title: "SEO Glossary 2026: 200+ Terms Defined | SEOAcademys" },
      { name: "description", content: "Complete SEO and GEO glossary for 2026. Understand technical SEO terms, AI search concepts, and web vitals metrics in plain English." },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/glossary" }],
  }),
  component: GlossaryIndex,
});

function GlossaryIndex() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return GLOSSARY;
    return GLOSSARY.filter((t) => 
      t.term.toLowerCase().includes(needle) || t.definition.toLowerCase().includes(needle)
    );
  }, [q]);

  // Group by first letter
  const grouped = useMemo(() => {
    const map = new Map<string, typeof GLOSSARY>();
    for (const item of filtered) {
      const first = item.term[0].toUpperCase();
      const arr = map.get(first) || [];
      arr.push(item);
      map.set(first, arr);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  return (
    <PageContainer>
      <header className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 flex items-center gap-2">
          <BookA className="size-4" /> SEO Dictionary
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          SEO Glossary
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The complete dictionary of SEO, GEO, and AI search terminology. Understand complex search engine concepts in plain English.
        </p>
      </header>

      <div className="mb-12 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search for a term..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="space-y-12">
        {grouped.length > 0 ? (
          grouped.map(([letter, items]) => (
            <section key={letter}>
              <h2 className="font-display text-2xl font-bold border-b border-border pb-2 mb-6 text-primary">
                {letter}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <Card3D key={item.slug} className="p-5 flex flex-col">
                    <h3 className="font-semibold text-lg mb-2">
                      <Link to="/glossary/$term" params={{ term: item.slug }} className="hover:text-primary transition-colors">
                        {item.term}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.definition}
                    </p>
                  </Card3D>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="text-muted-foreground py-10">No glossary terms found matching "{q}".</p>
        )}
      </div>
    </PageContainer>
  );
}
