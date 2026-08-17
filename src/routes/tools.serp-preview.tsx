import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ToolPanel } from "@/components/ToolPanel";
import { ToolHeader, Card3D } from "@/components/Card3D";
import { fetchUrl } from "@/lib/fetch-url.functions";
import { getMeta, getJsonLd } from "@/lib/html-analyzer";
import { Loader2, Search, Smartphone, Monitor, Star, MoreVertical } from "lucide-react";

export const Route = createFileRoute("/tools/serp-preview")({
  loader: () => getToolContent("serp-preview"),
  head: () => toolHead("serp-preview"),
  component: Page,
});

function Page() {
  const fn = useServerFn(fetchUrl);
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<"desktop" | "mobile">("mobile");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [data, setData] = useState<{ title: string; desc: string; url: string; hasRating: boolean } | null>(null);

  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const run = async () => {
    let u = url.trim(); if (!u) return;
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    setLoading(true); setErr("");
    try {
      const r = await fn({ data: { url: u } });
      if (!r.ok) { setErr(r.error || `Fetch failed: ${r.status}`); return; }
      
      const meta = getMeta(r.html);
      const jsonLd = getJsonLd(r.html);
      
      let hasRating = false;
      // Simple heuristic for review schema
      if (JSON.stringify(jsonLd).toLowerCase().includes("aggregaterating")) {
         hasRating = true;
      }
      
      setData({ title: meta.title || "No Title Found", desc: meta.description || "No description found.", url: r.finalUrl, hasRating });
      setEditTitle(meta.title || "");
      setEditDesc(meta.description || "");
    } catch (e) {
      setErr((e as Error).message);
    } finally { setLoading(false); }
  };

  const getBreadcrumbs = (u: string) => {
    try {
      const parsed = new URL(u);
      let path = parsed.pathname.split("/").filter(Boolean).join(" › ");
      if (path.length > 30) path = path.slice(0, 30) + "...";
      return `${parsed.protocol}//${parsed.hostname} ${path ? `› ${path}` : ""}`;
    } catch { return u; }
  };

  const titleWidth = editTitle.length * 8; // Roughly 8px per char
  const descWidth = editDesc.length * 7;
  const isTitleLong = editTitle.length > 60 || titleWidth > 580;
  const isDescLong = editDesc.length > 155 || descWidth > 920; // 2 lines on desktop

  return (
    <ToolPanel>
      <ToolHeader 
        title="SERP Simulator & Pixel Analyzer" 
        badge="PRO"
        desc="Visualize how your page appears in Google Search across Mobile and Desktop. Edit live to optimize CTR." 
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
            {loading ? "Fetching..." : "Preview SERP"}
          </button>
        </div>
        {err && <div className="mt-4 p-4 rounded-lg border border-destructive bg-destructive/10 text-destructive text-sm flex items-center gap-2"><span>{err}</span></div>}
      </Card3D>

      {data && (
        <div className="grid md:grid-cols-[1fr_350px] gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* SERP PREVIEW AREA */}
          <Card3D tilt={false} className="p-0 overflow-hidden border-border/50 shadow-xl flex flex-col bg-surface">
             <div className="flex border-b border-border/50">
               <button onClick={() => setMode("desktop")} className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${mode === "desktop" ? "bg-primary/10 text-primary border-b-2 border-primary" : "text-muted-foreground hover:bg-surface-2"}`}>
                 <Monitor className="size-4" /> Desktop
               </button>
               <button onClick={() => setMode("mobile")} className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${mode === "mobile" ? "bg-primary/10 text-primary border-b-2 border-primary" : "text-muted-foreground hover:bg-surface-2"}`}>
                 <Smartphone className="size-4" /> Mobile
               </button>
             </div>
             
             <div className={`p-8 bg-white flex justify-center ${mode === "desktop" ? "min-h-[400px]" : "min-h-[600px] items-center"}`}>
               {/* GOOGLE STYLE PREVIEW */}
               {mode === "desktop" ? (
                 <div className="w-[600px] max-w-full text-left font-sans">
                    <div className="flex items-center gap-2 mb-1.5">
                       <div className="size-7 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-500 overflow-hidden">
                          {data.url.includes("seoacademys") ? <img src="/logo.png" alt="icon" className="w-full h-full object-cover"/> : <GlobeIcon />}
                       </div>
                       <div>
                         <div className="text-[14px] text-[#202124] leading-tight font-medium">SEO Academy</div>
                         <div className="text-[12px] text-[#4d5156] leading-tight">{getBreadcrumbs(data.url)} <MoreVertical className="inline size-3.5 ml-1 text-gray-500 cursor-pointer"/></div>
                       </div>
                    </div>
                    <a href="#" className="text-[20px] text-[#1a0dab] hover:underline leading-[1.3] block mb-1">
                      {editTitle.length > 60 ? editTitle.slice(0, 60) + "..." : editTitle || "Untitled"}
                    </a>
                    {data.hasRating && (
                      <div className="flex items-center gap-1 text-[13px] text-[#70757a] mb-1">
                         <span className="text-[#fbbc04] flex"><Star className="size-3.5 fill-current"/><Star className="size-3.5 fill-current"/><Star className="size-3.5 fill-current"/><Star className="size-3.5 fill-current"/><Star className="size-3.5 fill-current"/></span>
                         <span>Rating: 4.8 · 1,204 reviews</span>
                      </div>
                    )}
                    <div className="text-[14px] text-[#4d5156] leading-[1.58] line-clamp-2">
                       {editDesc.length > 155 ? editDesc.slice(0, 155) + "..." : editDesc || "No meta description available. Google will generate one from the page content."}
                    </div>
                 </div>
               ) : (
                 <div className="w-[375px] h-[750px] max-w-full text-left font-sans border-8 border-gray-100 rounded-[3rem] shadow-2xl p-4 bg-white">
                    {/* Mobile SERP Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mt-10">
                      <div className="flex items-center gap-3 mb-2.5">
                         <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-500 overflow-hidden">
                            {data.url.includes("seoacademys") ? <img src="/logo.png" alt="icon" className="w-full h-full object-cover"/> : <GlobeIcon />}
                         </div>
                         <div className="flex-1 min-w-0">
                           <div className="text-[14px] text-[#202124] leading-tight truncate">SEO Academy</div>
                           <div className="text-[12px] text-[#4d5156] leading-tight truncate">{getBreadcrumbs(data.url)}</div>
                         </div>
                         <MoreVertical className="size-4 text-gray-500 shrink-0"/>
                      </div>
                      <a href="#" className="text-[18px] text-[#1558d6] leading-[1.3] block mb-1.5 font-medium">
                        {editTitle.length > 55 ? editTitle.slice(0, 55) + "..." : editTitle || "Untitled"}
                      </a>
                      {data.hasRating && (
                        <div className="flex items-center gap-1 text-[12px] text-[#70757a] mb-1.5">
                           <span className="text-[#fbbc04] flex"><Star className="size-3 fill-current"/><Star className="size-3 fill-current"/><Star className="size-3 fill-current"/><Star className="size-3 fill-current"/><Star className="size-3 fill-current"/></span>
                           <span>4.8 (1,204)</span>
                        </div>
                      )}
                      <div className="text-[14px] text-[#4d5156] leading-[1.5] line-clamp-3">
                         {editDesc.length > 130 ? editDesc.slice(0, 130) + "..." : editDesc || "No meta description available. Google will generate one from the page content."}
                      </div>
                    </div>
                 </div>
               )}
             </div>
          </Card3D>

          {/* EDITOR AREA */}
          <div className="space-y-4">
             <Card3D tilt={false} className="p-5 border-border/50 shadow-lg">
                <h3 className="font-display font-bold mb-4 uppercase tracking-wider text-xs text-muted-foreground">Title Optimizer</h3>
                <textarea 
                  value={editTitle} 
                  onChange={e=>setEditTitle(e.target.value)} 
                  className={`w-full p-3 rounded-md text-sm border focus:ring-2 outline-none resize-none transition-colors ${isTitleLong ? "border-destructive/50 focus:border-destructive focus:ring-destructive/20 bg-destructive/5" : "border-border bg-background focus:border-primary focus:ring-primary/20"}`}
                  rows={3}
                />
                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className={isTitleLong ? "text-destructive font-bold" : "text-muted-foreground"}>{editTitle.length} chars</span>
                  <span className={titleWidth > 580 ? "text-destructive font-bold" : "text-muted-foreground"}>~{titleWidth}px / 580px</span>
                </div>
                {isTitleLong && <p className="text-[10px] text-destructive mt-1">Title is too long and will be truncated by Google.</p>}
             </Card3D>

             <Card3D tilt={false} className="p-5 border-border/50 shadow-lg">
                <h3 className="font-display font-bold mb-4 uppercase tracking-wider text-xs text-muted-foreground">Description Optimizer</h3>
                <textarea 
                  value={editDesc} 
                  onChange={e=>setEditDesc(e.target.value)} 
                  className={`w-full p-3 rounded-md text-sm border focus:ring-2 outline-none resize-y transition-colors ${isDescLong ? "border-destructive/50 focus:border-destructive focus:ring-destructive/20 bg-destructive/5" : "border-border bg-background focus:border-primary focus:ring-primary/20"}`}
                  rows={5}
                />
                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className={isDescLong ? "text-destructive font-bold" : "text-muted-foreground"}>{editDesc.length} chars</span>
                  <span className={isDescLong ? "text-destructive font-bold" : "text-muted-foreground"}>Max 155 chars</span>
                </div>
                {isDescLong && <p className="text-[10px] text-destructive mt-1">Description is too long and will be truncated by Google.</p>}
             </Card3D>

             {data.hasRating && (
                <div className="p-4 rounded-lg border border-warning/30 bg-warning/10 text-warning text-xs flex gap-2">
                   <Star className="size-4 shrink-0 fill-current" />
                   <div>
                     <strong className="block mb-0.5">Rich Snippets Detected!</strong>
                     Review schema was found on this page. Google might display stars in the SERP.
                   </div>
                </div>
             )}
          </div>
          
        </div>
      )}
    </ToolPanel>
  );
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
  );
}
