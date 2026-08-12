import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ToolSeo } from "@/components/ToolSeo";
import { ToolContent } from "@/components/ToolContent";

export function ToolPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("px-4 md:px-8 py-6 max-w-[1400px] mx-auto", className)}>
      <ToolSeo />
      {children}
      <ToolContent />
    </div>
  );
}
