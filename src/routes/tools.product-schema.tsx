import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { SchemaBuilder } from "./tools.faq-schema";
export const Route = createFileRoute("/tools/product-schema")({
  loader: () => getToolContent("product-schema"), head: () => toolHead("product-schema"), component: () => <SchemaBuilder kind="product" /> });
