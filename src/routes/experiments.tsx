import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/Layout";
import { FlaskConical, ExternalLink, Calendar, Info } from "lucide-react";

export const Route = createFileRoute("/experiments")({
  head: () => ({
    meta: [
      { title: "SEOAcademys Experiment Log | Real SEO & GEO Data" },
      { name: "description", content: "Real SEO experiments with documented methodology and honest results. See what actually works in Google and AI search." },
    ],
    links: [{ rel: "canonical", href: "https://seoacademys.com/experiments/" }],
  }),
  component: ExperimentsPage,
});

function ExperimentsPage() {
  const experiments = [
    {
      id: "001",
      title: "Adding Quick Answer boxes to 10 articles to track featured snippet wins.",
      hypothesis: "AEO formatting (50-100 word concise answers with evidence levels) will increase featured snippet ownership and AI citations.",
      status: "Ongoing",
      date: "August 2026",
      link: null,
    }
  ];

  return (
    <PageContainer>
      <div className="max-w-5xl mx-auto py-12 space-y-12">
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <FlaskConical className="size-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">SEOAcademys Experiment Log</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real SEO experiments with documented methodology and honest results. No theories, just data.
          </p>
        </header>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-xl p-6 flex gap-4">
          <Info className="size-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
            <strong>Radical Transparency:</strong> We publish our failures as openly as our successes. If an SEO tactic doesn't work, you'll see the data proving it here.
          </div>
        </div>

        <div className="bg-surface border border-border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-2 border-b border-border text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  <th className="p-4 pl-6 whitespace-nowrap">Experiment #</th>
                  <th className="p-4 min-w-[300px]">Title & Hypothesis</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 pr-6 text-right">Results</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {experiments.map((exp) => (
                  <tr key={exp.id} className="hover:bg-surface-2/50 transition-colors">
                    <td className="p-4 pl-6 font-mono text-sm font-bold text-foreground align-top">
                      {exp.id}
                    </td>
                    <td className="p-4 align-top">
                      <p className="font-semibold text-foreground mb-2">{exp.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-3"><strong>Hypothesis:</strong> {exp.hypothesis}</p>
                    </td>
                    <td className="p-4 align-top">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800/50">
                        {exp.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground whitespace-nowrap align-top">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" /> {exp.date}
                      </div>
                    </td>
                    <td className="p-4 pr-6 text-right align-top">
                      {exp.link ? (
                        <a href={exp.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                          View Data <ExternalLink className="size-3.5" />
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground italic">Collecting Data...</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
