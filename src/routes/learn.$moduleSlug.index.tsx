import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { getModule, getChapters } from "@/lib/learning-curriculum";
import { generateCourseSchema, generateLearningBreadcrumbSchema } from "@/lib/learning-schema";
import { Clock, GraduationCap, LayoutList, CheckCircle2, ChevronRight, User } from "lucide-react";

export const Route = createFileRoute("/learn/$moduleSlug/")({
  loader: ({ params }) => {
    const moduleData = getModule(params.moduleSlug);
    if (!moduleData) {
      throw redirect({ to: "/learn" });
    }
    const chapters = getChapters(params.moduleSlug);
    return { moduleData, chapters };
  },
  head: ({ loaderData }) => {
    const { moduleData } = loaderData;
    const url = `https://seoacademys.com/learn/${moduleData.slug}`;
    const courseSchema = generateCourseSchema(moduleData, url);
    const breadcrumbSchema = generateLearningBreadcrumbSchema(moduleData);
    
    return {
      meta: [
        { title: moduleData.metaTitle || `${moduleData.title}: Complete ${moduleData.level} Guide — SEOAcademys` },
        { name: "description", content: moduleData.metaDescription || `${moduleData.title} complete guide: ${moduleData.chapterCount} chapters covering ${moduleData.targetKeyword}. Free, evidence-based. By Ketan Chandore, SEOAcademys.` },
        { property: "og:title", content: moduleData.metaTitle || `${moduleData.title}: Complete ${moduleData.level} Guide` },
        { property: "og:description", content: moduleData.metaDescription || moduleData.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(courseSchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }
      ],
    };
  },
  component: ModuleLandingPage,
});

function ModuleLandingPage() {
  const { moduleData, chapters } = Route.useLoaderData();

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="size-3.5" />
          <Link to="/learn" className="hover:text-primary transition-colors">Learn</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground font-medium">{moduleData.title}</span>
        </nav>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-10">
            
            <header className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Module {moduleData.id}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-border text-foreground text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="size-3.5" /> {moduleData.level}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-border text-foreground text-xs font-bold uppercase tracking-wider">
                  <LayoutList className="size-3.5" /> {moduleData.chapterCount} Chapters
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {moduleData.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {moduleData.description}
              </p>
            </header>

            <section className="bg-surface border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-xl font-bold mb-4">What you'll learn:</h2>
              <ul className="space-y-3">
                {[
                  "Understand the core principles without confusing jargon",
                  "Actionable steps you can implement today",
                  "How to measure real results",
                  "Common mistakes to avoid"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic flex items-start gap-2">
                  <span className="font-bold text-foreground">What this won't promise:</span>
                  It won't promise you #1 rankings overnight. It will give you the foundation to make informed decisions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <LayoutList className="size-5 text-primary" /> Module Chapters
              </h2>
              
              {chapters.length > 0 ? (
                <div className="space-y-3">
                  {chapters.map((chapter, i) => (
                    <Link 
                      key={chapter.id} 
                      to={`/learn/${moduleData.slug}/${chapter.slug}`}
                      className="flex items-center justify-between bg-surface border border-border hover:border-primary/50 hover:shadow-sm transition-all rounded-xl p-4 md:p-5 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="size-8 rounded-full bg-surface-2 flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                          {i + 1}
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base md:text-lg">
                          {chapter.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                          <Clock className="size-3.5" /> {chapter.readTimeMinutes} min
                        </span>
                        <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center border border-dashed border-border rounded-xl bg-surface-2">
                  <p className="text-muted-foreground font-medium">Chapters for this module are currently being written.</p>
                </div>
              )}
            </section>
            
          </div>

          {/* Sidebar / Info Box */}
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-surface border border-border rounded-2xl p-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Module Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Author</p>
                    <Link to="/about/ketan-chandore" className="text-sm font-bold hover:text-primary transition-colors">Ketan Chandore</Link>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Level</p>
                    <p className="text-sm font-semibold">{moduleData.level}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Time</p>
                    <p className="text-sm font-semibold">~{moduleData.readTimeMinutes} min</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Chapters</p>
                    <p className="text-sm font-semibold">{moduleData.chapterCount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Updated</p>
                    <p className="text-sm font-semibold">Aug 2026</p>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Prerequisites</p>
                  <p className="text-sm font-semibold">None — start here</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageContainer>
  );
}
