import React from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, FlaskConical, BookOpen, Lightbulb, XCircle, AlertTriangle, Hammer } from "lucide-react";

export type EvidenceLevel = "CONFIRMED" | "TESTED" | "RESEARCH" | "HYPOTHESIS" | "MYTH";

export const EvidenceBadge = ({ level }: { level: EvidenceLevel }) => {
  const styles = {
    CONFIRMED: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50",
    TESTED: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50",
    RESEARCH: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800/50",
    HYPOTHESIS: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800/50",
    MYTH: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800/50",
  };

  const icons = {
    CONFIRMED: <CheckCircle2 className="size-3.5" />,
    TESTED: <FlaskConical className="size-3.5" />,
    RESEARCH: <BookOpen className="size-3.5" />,
    HYPOTHESIS: <Lightbulb className="size-3.5" />,
    MYTH: <XCircle className="size-3.5" />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles[level]}`}>
      {icons[level]} {level}
    </span>
  );
};

export const QuickAnswerBox = ({ answer, evidence, detail }: { answer: string; evidence: EvidenceLevel; detail: string }) => {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <Lightbulb className="size-24" />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-foreground mb-4 font-display">Quick Answer</h3>
        <p className="text-lg text-foreground/90 font-medium leading-relaxed mb-6">
          {answer}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-primary/10">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground/70 shrink-0">
            Evidence Level: <EvidenceBadge level={evidence} />
          </div>
          <span className="hidden sm:block text-border">•</span>
          <p className="text-sm text-muted-foreground">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export const WhatWeDontKnow = ({ points }: { points: string[] }) => {
  return (
    <div className="bg-surface-2 border border-border rounded-xl p-6 my-8">
      <h4 className="flex items-center gap-2 font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
        <Lightbulb className="size-4 text-muted-foreground" /> What We Don't Know
      </h4>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-muted-foreground">
            <span className="mt-1.5 size-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        We tell you what is confirmed. We do not guess.
      </p>
    </div>
  );
};

export const IndiaContext = ({ points }: { points: string[] }) => {
  return (
    <div className="bg-orange-50 dark:bg-orange-950/10 border border-orange-200 dark:border-orange-900/30 rounded-xl p-6 my-8">
      <h4 className="flex items-center gap-2 font-bold text-orange-900 dark:text-orange-400 mb-4 uppercase tracking-wider text-sm">
        <span className="text-lg">🇮🇳</span> India Context
      </h4>
      <p className="text-sm font-semibold text-orange-800/80 dark:text-orange-300/80 mb-3">Why this matters for Indian websites specifically:</p>
      <ul className="space-y-2.5">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-orange-900/90 dark:text-orange-200/90">
            <span className="mt-1.5 size-1.5 rounded-full bg-orange-400 shrink-0" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AISearchConnection = ({ text }: { text: React.ReactNode }) => {
  return (
    <div className="bg-blue-50 dark:bg-blue-950/10 border border-blue-200 dark:border-blue-900/30 rounded-xl p-6 my-8">
      <h4 className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-400 mb-3 uppercase tracking-wider text-sm">
        <span className="text-lg">🤖</span> AI Search Connection
      </h4>
      <p className="text-blue-900/90 dark:text-blue-200/90 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export const CommonMistake = ({ description, fix }: { description: string; fix: string }) => {
  return (
    <div className="bg-red-50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 rounded-xl p-6 my-8">
      <h4 className="flex items-center gap-2 font-bold text-red-900 dark:text-red-400 mb-4 uppercase tracking-wider text-sm">
        <AlertTriangle className="size-4" /> Common Mistake
      </h4>
      <p className="text-red-900/90 dark:text-red-200/90 font-medium mb-4 leading-relaxed">
        {description}
      </p>
      <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg border border-red-100 dark:border-red-900/20">
        <span className="font-bold text-red-800 dark:text-red-300 text-sm uppercase tracking-wider block mb-1">The Fix:</span>
        <span className="text-red-900/80 dark:text-red-200/80 text-sm leading-relaxed">{fix}</span>
      </div>
    </div>
  );
};

export const FreeToolLink = ({ toolName, toolSlug }: { toolName: string; toolSlug: string }) => {
  return (
    <div className="bg-emerald-50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-900/30 rounded-xl p-5 my-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h4 className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-400 mb-1">
          <Hammer className="size-4" /> Check this on your website
        </h4>
        <p className="text-sm text-emerald-800/80 dark:text-emerald-300/80">
          Takes 60 seconds. No account required.
        </p>
      </div>
      <Link 
        to={`/tools/${toolSlug}`} 
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors whitespace-nowrap"
      >
        Use {toolName} →
      </Link>
    </div>
  );
};

export const ChapterChecklist = ({ items }: { items: string[] }) => {
  return (
    <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 my-8">
      <h3 className="font-display font-bold text-xl mb-4">Chapter Checklist</h3>
      <p className="text-muted-foreground text-sm mb-6">Before moving to the next chapter, you should be able to answer:</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <div className="mt-1 size-4 rounded border-2 border-primary/30 shrink-0" />
            <span className="text-foreground font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const KeyTakeaway = ({ text }: { text: string }) => {
  return (
    <div className="text-center py-8 my-8 border-y border-border">
      <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Key Takeaway</h3>
      <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed max-w-3xl mx-auto">
        "{text}"
      </p>
    </div>
  );
};
