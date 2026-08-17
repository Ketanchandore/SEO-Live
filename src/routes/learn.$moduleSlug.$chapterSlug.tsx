import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { getModule, getChapter, getChapters } from "@/lib/learning-curriculum";
import { generateLearningBreadcrumbSchema, generateArticleSchema } from "@/lib/learning-schema";
import { 
  QuickAnswerBox, 
  WhatWeDontKnow, 
  IndiaContext, 
  AISearchConnection, 
  CommonMistake, 
  FreeToolLink, 
  ChapterChecklist, 
  KeyTakeaway 
} from "@/components/LearningElements";
import { ChevronRight, ChevronLeft, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { AuthorBoxFull } from "@/components/TrustElements";

export const Route = createFileRoute("/learn/$moduleSlug/$chapterSlug")({
  loader: ({ params }) => {
    const moduleData = getModule(params.moduleSlug);
    if (!moduleData) throw redirect({ to: "/learn" });
    
    const chapterData = getChapter(params.moduleSlug, params.chapterSlug);
    if (!chapterData) throw redirect({ to: `/learn/${params.moduleSlug}` });

    const allChapters = getChapters(params.moduleSlug);
    const currentIndex = allChapters.findIndex(c => c.slug === params.chapterSlug);
    const previousChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

    return { moduleData, chapterData, allChapters, previousChapter, nextChapter, currentIndex };
  },
  head: ({ loaderData }) => {
    const { moduleData, chapterData } = loaderData;
    const url = `https://seoacademys.com/learn/${moduleData.slug}/${chapterData.slug}`;
    const breadcrumbSchema = generateLearningBreadcrumbSchema(moduleData, chapterData);
    const articleSchema = generateArticleSchema(moduleData, chapterData, url);
    
    // We would ideally extract the quick answer for the description here, 
    // but we'll use a template for now since content isn't added yet.
    const desc = `Read ${chapterData.title} in SEOAcademys' ${moduleData.title} module. Free, evidence-based SEO curriculum.`;

    return {
      meta: [
        { title: `${chapterData.title} — ${moduleData.title} | SEOAcademys` },
        { name: "description", content: desc },
        { property: "og:title", content: chapterData.title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
        { type: "application/ld+json", children: JSON.stringify(articleSchema) }
      ],
    };
  },
  component: ChapterPage,
});

function ChapterPage() {
  const { moduleData, chapterData, previousChapter, nextChapter, currentIndex, allChapters } = Route.useLoaderData();

  return (
    <PageContainer>
      
      {/* Top Bar Navigation */}
      <div className="border-b border-border bg-surface sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-sm font-medium">
          {previousChapter ? (
            <Link to={`/learn/${moduleData.slug}/${previousChapter.slug}`} className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="size-4" /> <span className="hidden sm:inline">Previous Chapter</span>
            </Link>
          ) : (
            <div className="w-24" /> // Spacer
          )}
          
          <Link to={`/learn/${moduleData.slug}`} className="text-foreground hover:text-primary truncate px-4 text-center">
            Module {moduleData.id}: {moduleData.title}
          </Link>
          
          {nextChapter ? (
            <Link to={`/learn/${moduleData.slug}/${nextChapter.slug}`} className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors">
              <span className="hidden sm:inline">Next Chapter</span> <ChevronRight className="size-4" />
            </Link>
          ) : (
            <div className="w-24" /> // Spacer
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="size-3.5" />
          <Link to="/learn" className="hover:text-primary transition-colors">Learn</Link>
          <ChevronRight className="size-3.5" />
          <Link to={`/learn/${moduleData.slug}`} className="hover:text-primary transition-colors truncate max-w-[150px] sm:max-w-[200px]">
            {moduleData.title}
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground font-medium truncate max-w-[200px]">{chapterData.title}</span>
        </nav>

        {/* Chapter Header */}
        <header className="space-y-6 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              Chapter {currentIndex + 1} of {allChapters.length}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-border text-foreground text-xs font-bold uppercase tracking-wider">
              <Clock className="size-3.5" /> {chapterData.readTimeMinutes} min
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-border text-foreground text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="size-3.5" /> {moduleData.level}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {chapterData.title}
          </h1>

          {chapterData.prerequisiteSlug && (
            <div className="bg-surface-2 border border-border rounded-lg p-3 text-sm text-muted-foreground flex items-center gap-2">
              <span className="font-bold text-foreground">📚 Recommended Prerequisite:</span>
              <Link 
                to={`/learn/${moduleData.slug}/${chapterData.prerequisiteSlug}`}
                className="text-primary hover:underline font-medium"
              >
                Read Previous Chapter
              </Link>
            </div>
          )}
        </header>

        {/* 
          THIS IS WHERE ACTUAL CONTENT WILL BE RENDERED ONCE THE USER ADDS IT.
          FOR NOW, WE RENDER A MOCKUP USING THE COMPONENTS TO PROVE THE STRUCTURE WORKS.
        */}
        <article className="prose prose-slate dark:prose-invert prose-lg max-w-none">
          
          <QuickAnswerBox 
            answer="This is a placeholder for the Quick Answer. The Quick Answer box gives a 50-100 word direct response that serves skimmers and is optimized for Featured Snippets and AEO."
            evidence="CONFIRMED"
            detail="Documented in official Google Search Central guidelines."
          />

          <h2>The Full Explanation</h2>
          <p>
            This section will contain the full 600-1,200 word explanation designed for learners. It will include real examples, step-by-step implementations, and detailed logic. 
          </p>
          <p>
            When the content is written, it will be injected here. The styling ensures it looks editorial, clean, and highly readable on all devices.
          </p>

          <WhatWeDontKnow 
            points={[
              "Exact weight of this ranking factor.",
              "Specific threshold for penalties."
            ]}
          />

          <IndiaContext 
            points={[
              "Why this matters specifically in the Indian market.",
              "Unique constraints or behaviors of Indian searchers for this topic."
            ]}
          />

          <AISearchConnection 
            text="How this connects to ChatGPT, Perplexity, and Google AI Overviews. This establishes the topical connection between traditional SEO and GEO."
          />

          <CommonMistake 
            description="Treating this as a technical checkbox exercise instead of focusing on user value."
            fix="Focus on the underlying intent. Check the SERP to verify."
          />

          <FreeToolLink 
            toolName="SEO Audit Hub"
            toolSlug="seo-audit-hub"
          />

        </article>

        <ChapterChecklist 
          items={[
            "I understand the core concept of this chapter.",
            "I know how this applies to my own website.",
            "I understand the common mistake and how to avoid it."
          ]}
        />

        <KeyTakeaway 
          text="This is the single sentence summary that reinforces the most important point of the entire chapter."
        />

        <div className="mt-16 pt-8 border-t border-border">
          <AuthorBoxFull />
        </div>

        {/* Next Chapter Navigation */}
        <div className="mt-12">
          {nextChapter ? (
            <Link 
              to={`/learn/${moduleData.slug}/${nextChapter.slug}`}
              className="group block bg-surface hover:bg-surface-2 border border-border hover:border-primary/50 transition-all rounded-2xl p-6 md:p-8 text-center"
            >
              <span className="block text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Up Next: Chapter {currentIndex + 2}
              </span>
              <span className="block text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-3">
                {nextChapter.title} <ArrowRight className="size-6 text-primary group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          ) : (
            <Link 
              to={`/learn/${moduleData.slug}`}
              className="group block bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all rounded-2xl p-6 md:p-8 text-center"
            >
              <span className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">
                Module Completed
              </span>
              <span className="block text-2xl font-bold font-display text-foreground flex items-center justify-center gap-3">
                Return to Module Overview
              </span>
            </Link>
          )}
        </div>

      </div>
    </PageContainer>
  );
}
