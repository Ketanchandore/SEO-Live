import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { MinifierPage } from "./tools.html-minifier";

export const Route = createFileRoute("/tools/css-minifier")({
  loader: () => getToolContent("css-minifier"),
  head: () => toolHead("css-minifier"),
  component: () => <MinifierPage kind="css" />,
});
