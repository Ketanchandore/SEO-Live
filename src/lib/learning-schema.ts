import { ModuleMeta, ChapterMeta } from "./learning-curriculum";

export function generateCourseSchema(module: ModuleMeta, currentUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${module.title}: Complete ${module.level} Guide`,
    description: module.description,
    url: currentUrl,
    provider: {
      "@type": "Organization",
      name: "SEOAcademys",
      url: "https://seoacademys.com",
    },
    author: {
      "@type": "Person",
      name: "Ketan Chandore",
      url: "https://seoacademys.com/about/ketan-chandore",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      isAccessibleForFree: true,
      courseSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P0D",
      },
    },
    educationalLevel: module.level,
    teaches: module.targetKeyword,
    numberOfCredits: 0,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "SEOAcademys",
      url: "https://seoacademys.com",
    },
  };
}

export function generateLearningBreadcrumbSchema(module?: ModuleMeta, chapter?: ChapterMeta) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://seoacademys.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Learn",
      item: "https://seoacademys.com/learn",
    },
  ];

  if (module) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: module.title,
      item: `https://seoacademys.com/learn/${module.slug}`,
    });
  }

  if (module && chapter) {
    items.push({
      "@type": "ListItem",
      position: 4,
      name: chapter.title,
      item: `https://seoacademys.com/learn/${module.slug}/${chapter.slug}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function generateArticleSchema(module: ModuleMeta, chapter: ChapterMeta, currentUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: chapter.title,
    url: currentUrl,
    author: {
      "@type": "Person",
      name: "Ketan Chandore",
      url: "https://seoacademys.com/about/ketan-chandore",
    },
    publisher: {
      "@type": "Organization",
      name: "SEOAcademys",
      url: "https://seoacademys.com",
    },
    datePublished: "2026-08-17",
    dateModified: "2026-08-17",
    isPartOf: {
      "@type": "Course",
      name: module.title,
      url: `https://seoacademys.com/learn/${module.slug}/`,
    },
  };
}
