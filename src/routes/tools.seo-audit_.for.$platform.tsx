import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ToolPanel } from "@/components/ToolPanel";
import { getPlatform } from "@/lib/programmatic-seo";
import { ArrowRight, Gauge, CheckCircle2, AlertCircle } from "lucide-react";
import { Card3D } from "@/components/Card3D";

export const Route = createFileRoute("/tools/seo-audit_/for/$platform")({
  loader: ({ params }) => {
    const platform = getPlatform(params.platform);
    if (!platform) throw notFound();
    return { platform };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { platform } = loaderData;
    return {
      meta: [
        { title: `${platform.h1} | SEOAcademys` },
        { name: "description", content: platform.description },
      ],
    };
  },
  component: PlatformAuditPage,
});

function PlatformAuditPage() {
  const { platform } = Route.useLoaderData();

  return (
    <ToolPanel>
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <Gauge className="size-4" /> Platform-Specific Audit
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          {platform.h1}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {platform.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <Card3D className="p-6">
            <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-success" />
              Supported Checks
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                Technical SEO & Core Web Vitals
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                Platform-specific schema & metadata
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                Mobile responsiveness analysis
              </li>
            </ul>
          </Card3D>
          <Card3D className="p-6">
            <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="size-5 text-warning" />
              Common Issues
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                Theme or plugin bloat slowing down LCP
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                Missing or duplicate canonical tags
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                Improperly configured robots.txt
              </li>
            </ul>
          </Card3D>
        </div>

        <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to audit your {platform.name} site?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Use our general SEO audit tool to deeply analyze your {platform.name} website's performance, technical health, and content.
          </p>
          <Link
            to="/tools/seo-audit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Run Full SEO Audit <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </ToolPanel>
  );
}
