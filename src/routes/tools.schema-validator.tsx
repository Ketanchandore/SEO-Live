import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ToolPanel } from "@/components/ToolPanel";
import { ToolHeader, Card3D } from "@/components/Card3D";
import { fetchUrl } from "@/lib/fetch-url.functions";
import { getJsonLd } from "@/lib/html-analyzer";
import { Loader2, Search, CheckCircle2, AlertTriangle, FileJson, Info } from "lucide-react";

export const Route = createFileRoute("/tools/schema-validator")({
  loader: () => getToolContent("schema-validator"),
  head: () => toolHead("schema-validator"),
  component: Page,
});

function Page() {
  const fn = useServerFn(fetchUrl);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [schemas, setSchemas] = useState<any[]>([]);

  const run = async () => {
    let u = url.trim(); if (!u) return;
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    setLoading(true); setErr(""); setSchemas([]);
    try {
      const r = await fn({ data: { url: u } });
      if (!r.ok) { setErr(r.error || `Fetch failed: ${r.status}`); return; }
      const j = getJsonLd(r.html);
      setSchemas(j);
      if (j.length === 0) setErr("No JSON-LD schema found on this page.");
    } catch (e) {
      setErr((e as Error).message);
    } finally { setLoading(false); }
  };

  const validateSchema = (schema: any) => {
    const errors: string[] = [];
    const warnings: string[] = [];
    if (!schema) return { errors, warnings };
    
    const type = schema["@type"];
    if (!type) {
      errors.push("Missing @type definition.");
      return { errors, warnings };
    }

    // Basic Validation rules for common types
    if (type === "Article" || type === "NewsArticle" || type === "BlogPosting") {
      if (!schema.headline) errors.push("Missing 'headline'");
      if (!schema.image) errors.push("Missing 'image'");
      if (!schema.author) warnings.push("Missing 'author' (Recommended)");
      if (!schema.datePublished) warnings.push("Missing 'datePublished' (Recommended)");
    } 
    else if (type === "Product") {
      if (!schema.name) errors.push("Missing 'name'");
      if (!schema.image) errors.push("Missing 'image'");
      if (!schema.offers) warnings.push("Missing 'offers' (Price/Availability)");
      if (!schema.review && !schema.aggregateRating) warnings.push("Missing 'review' or 'aggregateRating' (Required for rich snippet stars)");
    }
    else if (type === "FAQPage") {
      if (!schema.mainEntity) errors.push("Missing 'mainEntity' (The FAQ items)");
      else if (Array.isArray(schema.mainEntity) && schema.mainEntity.length > 0) {
         if (schema.mainEntity[0]["@type"] !== "Question") errors.push("mainEntity items must be of @type 'Question'");
      }
    }
    else if (type === "LocalBusiness" || type === "Organization") {
      if (!schema.name) errors.push("Missing 'name'");
      if (!schema.image && !schema.logo) errors.push("Missing 'image' or 'logo'");
      if (type === "LocalBusiness" && !schema.address) warnings.push("Missing 'address' for LocalBusiness");
    }

    return { errors, warnings };
  };

  return (
    <ToolPanel>
      <ToolHeader 
        title="Deep Schema Validator" 
        badge="PRO"
        desc="Extract and validate JSON-LD structured data against Schema.org guidelines to ensure Google Rich Results eligibility." 
      />
      
      <Card3D tilt={false} className="p-5 mb-6 shadow-xl border-primary/20 bg-gradient-to-br from-surface to-surface-2">
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            value={url} 
            onChange={e=>setUrl(e.target.value)} 
            onKeyDown={e=>e.key==='Enter'&&run()} 
            placeholder="https://example.com/product-page" 
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none shadow-inner" 
          />
          <button onClick={run} disabled={loading || !url.trim()} className="px-6 py-3 rounded-lg grad-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 hover:scale-105 transition-transform">
            {loading ? <Loader2 className="size-5 animate-spin" /> : <Search className="size-5" />}
            {loading ? "Validating..." : "Validate Schema"}
          </button>
        </div>
        {err && <div className="mt-4 p-4 rounded-lg border border-destructive bg-destructive/10 text-destructive text-sm flex items-center gap-2"><AlertTriangle className="size-4" />{err}</div>}
      </Card3D>

      {schemas.length > 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="bg-surface rounded-xl p-5 border border-border/50 shadow-sm flex flex-col justify-center text-center col-span-2 md:col-span-4 bg-gradient-to-r from-primary/10 to-transparent">
                <div className="text-xl font-display font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="size-6 text-success" />
                  {schemas.length} Schema Entity{schemas.length > 1 ? "ies" : ""} Detected
                </div>
                <div className="text-sm text-muted-foreground mt-1">Ready for Rich Snippet processing</div>
             </div>
          </div>

          <div className="space-y-6">
            {schemas.map((schema, idx) => {
               const { errors, warnings } = validateSchema(schema);
               const type = schema["@type"] || "UnknownType";
               const isArray = Array.isArray(type) ? type.join(", ") : type;
               
               return (
                 <Card3D tilt={false} key={idx} className="p-0 overflow-hidden border-border/50 shadow-xl bg-surface flex flex-col lg:flex-row">
                    {/* Left: Validation Results */}
                    <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-border/50 p-5 bg-surface-2/30 flex flex-col">
                       <div className="flex items-center gap-2 mb-4">
                         <FileJson className="size-5 text-primary" />
                         <h3 className="font-display font-bold text-lg">{isArray}</h3>
                       </div>
                       
                       <div className="flex-1 space-y-4">
                         {errors.length === 0 && warnings.length === 0 && (
                            <div className="p-4 rounded-lg bg-success/10 border border-success/20 text-success text-sm flex flex-col items-center justify-center h-32 text-center">
                              <CheckCircle2 className="size-8 mb-2 opacity-80" />
                              <span className="font-semibold">Fully Valid</span>
                              <span className="text-xs opacity-80 mt-1">Ready for Rich Results</span>
                            </div>
                         )}

                         {errors.length > 0 && (
                            <div className="space-y-2">
                              <div className="text-xs font-bold text-destructive uppercase tracking-wider flex items-center gap-1"><AlertTriangle className="size-3" /> Critical Errors</div>
                              <ul className="space-y-2">
                                {errors.map((e, i) => (
                                  <li key={i} className="text-xs font-medium text-destructive bg-destructive/10 p-2 rounded border border-destructive/20">{e}</li>
                                ))}
                              </ul>
                            </div>
                         )}

                         {warnings.length > 0 && (
                            <div className="space-y-2 mt-4">
                              <div className="text-xs font-bold text-warning uppercase tracking-wider flex items-center gap-1"><Info className="size-3" /> Warnings (Recommended)</div>
                              <ul className="space-y-2">
                                {warnings.map((w, i) => (
                                  <li key={i} className="text-xs font-medium text-warning-foreground bg-warning/20 p-2 rounded border border-warning/30">{w}</li>
                                ))}
                              </ul>
                            </div>
                         )}
                       </div>
                    </div>

                    {/* Right: Code Viewer */}
                    <div className="lg:w-2/3 p-0 relative bg-[#1e1e1e] overflow-hidden flex flex-col">
                      <div className="bg-[#2d2d2d] text-[#d4d4d4] text-xs px-4 py-2 font-mono flex justify-between items-center border-b border-[#404040]">
                        <span>structured-data.json</span>
                        <span className="opacity-50">JSON-LD</span>
                      </div>
                      <div className="p-4 overflow-auto max-h-[500px] text-sm">
                        <pre className="font-mono text-[#d4d4d4] leading-relaxed">
                          {JSON.stringify(schema, null, 2).split('\n').map((line, i) => {
                             // Very basic syntax highlighting for JSON
                             const isKey = line.match(/"([^"]+)":/);
                             const isString = line.match(/: "([^"]+)"/);
                             const isType = isKey && isKey[1] === "@type";
                             
                             let htmlLine = line;
                             if (isType) htmlLine = htmlLine.replace(/"@type"/, '<span class="text-[#569cd6]">"@type"</span>');
                             else if (isKey) htmlLine = htmlLine.replace(`"${isKey[1]}"`, `<span class="text-[#9cdcfe]">"${isKey[1]}"</span>`);
                             
                             if (isString) htmlLine = htmlLine.replace(`"${isString[1]}"`, `<span class="text-[#ce9178]">"${isString[1]}"</span>`);

                             return (
                               <div key={i} className="table-row">
                                 <span className="table-cell text-right pr-4 opacity-30 select-none w-8">{i + 1}</span>
                                 <span className="table-cell" dangerouslySetInnerHTML={{ __html: htmlLine }} />
                               </div>
                             );
                          })}
                        </pre>
                      </div>
                    </div>
                 </Card3D>
               );
            })}
          </div>
          
        </div>
      )}
    </ToolPanel>
  );
}
