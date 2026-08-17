import { Link } from "@tanstack/react-router";
import { CheckCircle2, FlaskConical, Link2, Lightbulb, XOctagon } from "lucide-react";

export function AuthorBoxFull({ datePublished, dateModified }: { datePublished: string; dateModified: string }) {
  return (
    <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-6 items-start sm:items-center">
      <div className="size-20 shrink-0 rounded-full overflow-hidden border border-border">
        {/* Fallback avatar if no image */}
        <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">K</div>
      </div>
      <div className="flex-1">
        <h3 className="font-display font-bold text-lg">Written by Ketan Chandore</h3>
        <p className="text-sm font-semibold text-primary mb-2">Founder, SEOAcademys.com</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Ketan is a B.Tech Computer Science student from Khargone, MP who builds independent web projects and researches SEO, GEO and AEO. He created SEOAcademys to make SEO education and diagnostic tools accessible without expensive subscriptions.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <Link to="/about/ketan-chandore" className="hover:text-primary transition">→ Author Profile</Link>
          <a href="https://www.linkedin.com/in/ketan-chandore-51a533254" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">LinkedIn ↗</a>
          <a href="https://x.com/pinepl_techai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">X ↗</a>
        </div>
      </div>
      <div className="sm:text-right text-xs text-muted-foreground space-y-1">
        <div>Published: {datePublished}</div>
        <div>Last Updated: {dateModified}</div>
      </div>
    </div>
  );
}

export function AuthorBoxShort() {
  return (
    <div className="flex items-center gap-3">
      <div className="size-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-border">K</div>
      <div>
        <div className="text-sm font-bold">Ketan Chandore <span className="font-normal text-muted-foreground">· Founder, SEOAcademys.com</span></div>
        <div className="text-xs text-muted-foreground">B.Tech CS · SEO, GEO & AEO Researcher · <Link to="/about/ketan-chandore" className="text-primary hover:underline">Author Profile →</Link></div>
      </div>
    </div>
  );
}

export function ArticleTrustHeader({ 
  datePublished, 
  dateModified, 
  sources, 
  evidenceLevel 
}: { 
  datePublished: string; 
  dateModified: string; 
  sources: string; 
  evidenceLevel: "Confirmed" | "Experiment" | "Hypothesis" 
}) {
  return (
    <div className="my-8 rounded-xl border border-border bg-surface/50 p-5 font-mono text-sm shadow-sm">
      <div className="flex items-center gap-2 font-bold mb-3 border-b border-border pb-2 text-foreground">
        📋 About This Article
      </div>
      <div className="space-y-2 text-muted-foreground">
        <div><span className="font-semibold text-foreground">Author:</span> Ketan Chandore, Founder — SEOAcademys</div>
        <div><span className="font-semibold text-foreground">Published:</span> {datePublished} <span className="mx-2">|</span> <span className="font-semibold text-foreground">Last Updated:</span> {dateModified}</div>
        <div className="pt-2 mt-2 border-t border-border/50">
          <span className="font-semibold text-foreground">Sources:</span> {sources}
        </div>
        <div>
          <span className="font-semibold text-foreground">Evidence Level:</span>{" "}
          {evidenceLevel === "Confirmed" && <span className="text-success inline-flex items-center gap-1"><CheckCircle2 className="size-3" /> Confirmed</span>}
          {evidenceLevel === "Experiment" && <span className="text-primary inline-flex items-center gap-1"><FlaskConical className="size-3" /> Experiment</span>}
          {evidenceLevel === "Hypothesis" && <span className="text-warning inline-flex items-center gap-1"><Lightbulb className="size-3" /> Hypothesis</span>}
        </div>
      </div>
    </div>
  );
}

export function ArticleUpdateNotice({ date, description }: { date: string; description: string }) {
  return (
    <div className="my-6 p-4 rounded-lg bg-primary/10 border border-primary/20 text-sm text-foreground/90">
      <span className="font-bold">📌 Update {date}:</span> {description}
    </div>
  );
}

export function EvidenceLevel({ type, source }: { type: "Confirmed" | "Experiment-based" | "Evidence-backed" | "Hypothesis" | "Myth", source?: string }) {
  const getIcon = () => {
    switch (type) {
      case "Confirmed": return <CheckCircle2 className="size-4 text-success" />;
      case "Experiment-based": return <FlaskConical className="size-4 text-primary" />;
      case "Evidence-backed": return <Link2 className="size-4 text-info" />;
      case "Hypothesis": return <Lightbulb className="size-4 text-warning" />;
      case "Myth": return <XOctagon className="size-4 text-destructive" />;
    }
  };

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-surface border border-border text-xs font-medium">
      {getIcon()} {type}
      {source && <span className="text-muted-foreground font-normal ml-1">— {source}</span>}
    </span>
  );
}
