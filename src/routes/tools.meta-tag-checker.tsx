import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ToolPanel } from "@/components/ToolPanel";
import { ToolHeader, Card3D } from "@/components/Card3D";
import { fetchUrl } from "@/lib/fetch-url.functions";
import { getMeta } from "@/lib/html-analyzer";
import { Loader2, Search, CheckCircle2, AlertTriangle, Share2, Facebook, Twitter, Info } from "lucide-react";

export const Route = createFileRoute("/tools/meta-tag-checker")({
  loader: () => getToolContent("meta-tag-checker"),
  head: () => toolHead("meta-tag-checker"),
  component: Page,
});

function Page() {
  const fn = useServerFn(fetchUrl);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [data, setData] = useState<any>(null);
  const [rawHtml, setRawHtml] = useState("");

  const run = async () => {
    let u = url.trim(); if (!u) return;
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    setLoading(true); setErr(""); setData(null);
    try {
      const r = await fn({ data: { url: u } });
      if (!r.ok) { setErr(r.error || `Fetch failed: ${r.status}`); return; }
      const meta = getMeta(r.html);
      
      // Parse specific tags manually for deeper inspection
      const ogTitle = (r.html.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["']/i) || [])[1];
      const ogDesc = (r.html.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["']/i) || [])[1];
      const ogImage = (r.html.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["']/i) || [])[1];
      const twCard = (r.html.match(/<meta[^>]+name=["']twitter:card["'][^>]*content=["']([^"']+)["']/i) || [])[1];
      const canonical = (r.html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || [])[1];
      const robots = (r.html.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i) || [])[1];

      setData({
        ...meta,
        finalUrl: r.finalUrl,
        ogTitle, ogDesc, ogImage, twCard, canonical, robots
      });
      setRawHtml(r.html.substring(0, 5000));
    } catch (e) {
      setErr((e as Error).message);
    } finally { setLoading(false); }
  };

  const getMissing = () => {
    if (!data) return [];
    const m = [];
    if (!data.title) m.push("Title tag missing");
    if (!data.description) m.push("Meta description missing");
    if (!data.ogImage) m.push("og:image missing (No image on social shares)");
    if (!data.canonical) m.push("Canonical tag missing (Risk of duplicate content)");
    return m;
  };

  return (
    <ToolPanel>
      <ToolHeader 
        title="Meta Tag & Social Graph Auditor" 
        badge="PRO"
        desc="Audit your standard meta tags, Open Graph (Facebook/LinkedIn) and Twitter Cards. Identify critical missing elements." 
      />
      
      <Card3D tilt={false} className="p-5 mb-6 shadow-xl border-primary/20 bg-gradient-to-br from-surface to-surface-2">
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            value={url} 
            onChange={e=>setUrl(e.target.value)} 
            onKeyDown={e=>e.key==='Enter'&&run()} 
            placeholder="https://example.com/blog-post" 
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none shadow-inner" 
          />
          <button onClick={run} disabled={loading || !url.trim()} className="px-6 py-3 rounded-lg grad-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 hover:scale-105 transition-transform">
            {loading ? <Loader2 className="size-5 animate-spin" /> : <Search className="size-5" />}
            {loading ? "Scanning..." : "Audit Meta Tags"}
          </button>
        </div>
        {err && <div className="mt-4 p-4 rounded-lg border border-destructive bg-destructive/10 text-destructive text-sm flex items-center gap-2"><AlertTriangle className="size-4" />{err}</div>}
      </Card3D>

      {data && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card3D tilt={false} className="p-0 overflow-hidden border-border/50 shadow-xl bg-surface">
               <div className="p-4 border-b border-border/50 flex items-center gap-2">
                 <Share2 className="size-5 text-primary" />
                 <h3 className="font-display font-bold">Standard SEO Meta Tags</h3>
               </div>
               <div className="p-5 space-y-4 text-sm">
                 <div>
                   <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Title</div>
                   <div className="font-medium p-3 rounded bg-surface-2 border border-border">{data.title || <span className="text-destructive italic">Missing</span>}</div>
                   <div className={`text-xs mt-1 ${data.title?.length > 60 ? "text-warning" : "text-success"}`}>{data.title?.length || 0} characters</div>
                 </div>
                 <div>
                   <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Description</div>
                   <div className="font-medium p-3 rounded bg-surface-2 border border-border">{data.description || <span className="text-destructive italic">Missing</span>}</div>
                   <div className={`text-xs mt-1 ${data.description?.length > 155 ? "text-warning" : "text-success"}`}>{data.description?.length || 0} characters</div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Canonical Tag</div>
                     <div className="font-mono text-xs break-all text-primary">{data.canonical || <span className="text-warning">Not Set</span>}</div>
                   </div>
                   <div>
                     <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Robots Tag</div>
                     <div className="font-mono text-xs">{data.robots || "index, follow (default)"}</div>
                   </div>
                 </div>
               </div>
            </Card3D>

            <Card3D tilt={false} className="p-0 overflow-hidden border-border/50 shadow-xl bg-surface flex flex-col">
               <div className="p-4 border-b border-border/50 flex items-center gap-2 bg-warning/10">
                 <AlertTriangle className="size-5 text-warning" />
                 <h3 className="font-display font-bold text-warning-foreground">Audit Warnings</h3>
               </div>
               <div className="p-5 flex-1">
                 {getMissing().length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-2 text-success">
                      <CheckCircle2 className="size-12" />
                      <div className="font-bold">Perfect Setup!</div>
                      <div className="text-sm text-foreground/70">No critical meta tags are missing.</div>
                    </div>
                 ) : (
                    <ul className="space-y-3">
                      {getMissing().map((msg, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-destructive font-medium bg-destructive/5 p-3 rounded border border-destructive/20">
                          <Info className="size-4 shrink-0 mt-0.5" />
                          <span>{msg}</span>
                        </li>
                      ))}
                    </ul>
                 )}
               </div>
            </Card3D>
          </div>

          {/* Social Previews */}
          <div className="grid md:grid-cols-2 gap-6">
            
            <Card3D tilt={false} className="p-0 overflow-hidden border-border/50 shadow-xl bg-surface">
               <div className="p-4 border-b border-border/50 flex items-center gap-2 text-[#1877F2]">
                 <Facebook className="size-5" />
                 <h3 className="font-display font-bold text-foreground">Facebook & LinkedIn Preview</h3>
               </div>
               <div className="p-5 bg-gray-100 flex justify-center">
                 <div className="w-[400px] max-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm font-sans text-left">
                   <div className="w-full aspect-[1.91/1] bg-gray-200 flex items-center justify-center relative border-b border-gray-200">
                      {data.ogImage ? (
                        <img src={data.ogImage} alt="OG Image" className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-gray-400 text-sm">No og:image</div>
                      )}
                   </div>
                   <div className="p-3 bg-[#f2f3f5]">
                     <div className="text-[12px] text-gray-500 uppercase tracking-widest truncate">{new URL(data.finalUrl).hostname}</div>
                     <div className="text-[16px] font-semibold text-gray-900 leading-tight mt-1 line-clamp-1">{data.ogTitle || data.title || "No Title"}</div>
                     <div className="text-[14px] text-gray-600 line-clamp-1 mt-0.5">{data.ogDesc || data.description || "No Description"}</div>
                   </div>
                 </div>
               </div>
            </Card3D>

            <Card3D tilt={false} className="p-0 overflow-hidden border-border/50 shadow-xl bg-surface">
               <div className="p-4 border-b border-border/50 flex items-center gap-2 text-[#1DA1F2]">
                 <Twitter className="size-5" />
                 <h3 className="font-display font-bold text-foreground">X (Twitter) Preview</h3>
               </div>
               <div className="p-5 bg-gray-100 flex justify-center">
                 <div className="w-[400px] max-w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm font-sans text-left">
                   {(!data.twCard || data.twCard === "summary_large_image") ? (
                     <>
                       <div className="w-full aspect-[1.91/1] bg-gray-200 flex items-center justify-center relative border-b border-gray-200">
                          {data.ogImage ? (
                            <img src={data.ogImage} alt="OG Image" className="w-full h-full object-cover" />
                          ) : (
                            <div className="text-gray-400 text-sm">No image provided</div>
                          )}
                       </div>
                       <div className="p-3">
                         <div className="text-[15px] text-gray-900 leading-tight line-clamp-1">{data.ogTitle || data.title || "No Title"}</div>
                         <div className="text-[15px] text-gray-500 line-clamp-1 mt-0.5">{data.ogDesc || data.description || "No Description"}</div>
                         <div className="text-[15px] text-gray-500 flex items-center gap-1 mt-0.5"><LinkIcon className="size-3"/> {new URL(data.finalUrl).hostname}</div>
                       </div>
                     </>
                   ) : (
                     <div className="flex h-[130px]">
                       <div className="w-[130px] h-full bg-gray-200 border-r border-gray-200 shrink-0">
                          {data.ogImage ? <img src={data.ogImage} className="w-full h-full object-cover" /> : null}
                       </div>
                       <div className="p-3 flex-1 min-w-0 flex flex-col justify-center">
                         <div className="text-[15px] text-gray-900 leading-tight line-clamp-1">{data.ogTitle || data.title || "No Title"}</div>
                         <div className="text-[15px] text-gray-500 line-clamp-2 mt-0.5">{data.ogDesc || data.description || "No Description"}</div>
                         <div className="text-[15px] text-gray-500 flex items-center gap-1 mt-0.5"><LinkIcon className="size-3"/> {new URL(data.finalUrl).hostname}</div>
                       </div>
                     </div>
                   )}
                 </div>
               </div>
            </Card3D>
          </div>
          
        </div>
      )}
    </ToolPanel>
  );
}

function LinkIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  );
}
