import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { SchemaBuilder } from "./tools.faq-schema";
export const Route = createFileRoute("/tools/article-schema")({
  loader: () => getToolContent("article-schema"), head: () => toolHead("article-schema"), component: () => <SchemaBuilder kind="article" /> });
