import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { MODULES, TRACKS } from "@/lib/learning-curriculum";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Map, Cpu, Compass, LayoutList, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/learn/")({
  head: () => {
    const url = "https://seoacademys.com/learn/";
    
    const collectionSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "SEO Learning Hub — SEOAcademys",
      "description": "27 free learning modules covering SEO, GEO, AEO, Technical SEO and AI search optimization.",
      "url": url,
      "author": {
        "@type": "Person",
        "name": "Ketan Chandore"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SEOAcademys",
        "url": "https://seoacademys.com"
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://seoacademys.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Learn",
          "item": url
        }
      ]
    };

    return {
      meta: [
        { title: "SEO Learning Hub — Free SEO, GEO & AEO Modules | SEOAcademys" },
        { name: "description", content: "27 free learning modules covering SEO, Technical SEO, GEO, AEO, E-E-A-T and AI Search. Evidence-based. By Ketan Chandore, SEOAcademys." },
        { property: "og:title", content: "SEO Learning Hub — Free SEO, GEO & AEO Modules" },
        { property: "og:description", content: "27 free learning modules covering SEO, Technical SEO, GEO, AEO, E-E-A-T and AI Search. Evidence-based." },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(collectionSchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }
      ],
    };
  },
  component: LearnHubPage,
});

function ModuleCard({ module }: { module: typeof MODULES[0] }) {
  const isStartHere = [1, 6, 9].includes(module.id);
  return (
    <Link 
      to={`/learn/${module.slug}`}
      className="group block bg-surface border border-border hover:border-primary/50 hover:shadow-md transition-all rounded-2xl p-6 relative"
    >
      {isStartHere && (
        <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          START HERE
        </div>
      )}
      <div className="flex items-start justify-between mb-4">
        <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
          {module.id}
        </div>
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-surface-2 px-2 py-1 rounded-md">
          {module.level}
        </div>
      </div>
      <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
        {module.title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-4 h-10">
        {module.description}
      </p>
      <div className="flex items-center gap-4 text-xs font-medium text-foreground/70">
        <span className="flex items-center gap-1.5"><LayoutList className="size-3.5" /> {module.chapterCount} Chapters</span>
        <span className="flex items-center gap-1.5"><BookOpen className="size-3.5" /> ~{module.readTimeMinutes} min</span>
      </div>
    </Link>
  );
}

function LearnHubPage() {
  const trackABeginner = MODULES.filter(m => TRACKS.beginner.includes(m.id));
  const trackBTech = MODULES.filter(m => TRACKS.technical.includes(m.id));
  const trackCAI = MODULES.filter(m => TRACKS.ai_geo.includes(m.id));
  
  // All other modules not explicitly highlighted in a track (we'll just show them in a grid at the bottom)
  const trackIds = [...TRACKS.beginner, ...TRACKS.technical, ...TRACKS.ai_geo];
  const remainingModules = MODULES.filter(m => !trackIds.includes(m.id));

  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto py-12 space-y-16">
        
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-primary uppercase tracking-widest flex items-center justify-center gap-2">
            <GraduationCap className="size-4" /> SEOAcademys Curriculum
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            SEO Learning Hub
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            27 modules. 200+ chapters. From complete beginner to technical expert and AI search optimization. Evidence-based learning.
          </motion.p>
        </section>

        {/* Learning Tracks */}
        <div className="space-y-16">
          
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Map className="size-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground">Track A: Complete Beginner</h2>
                <p className="text-muted-foreground text-sm">The essential path to understand how search works.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trackABeginner.map(m => <ModuleCard key={m.id} module={m} />)}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Cpu className="size-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground">Track B: Technical SEO Focus</h2>
                <p className="text-muted-foreground text-sm">For developers and technical marketers.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trackBTech.map(m => <ModuleCard key={m.id} module={m} />)}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Compass className="size-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground">Track C: AI Search & GEO</h2>
                <p className="text-muted-foreground text-sm">Preparing for the LLM-driven search landscape.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trackCAI.map(m => <ModuleCard key={m.id} module={m} />)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-foreground mb-6">All Other Modules</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {remainingModules.map(m => (
                <Link key={m.id} to={`/learn/${m.slug}`} className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl hover:border-primary/50 group transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground font-mono text-sm font-bold w-6">{m.id}.</span>
                    <span className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{m.title}</span>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </PageContainer>
  );
}
