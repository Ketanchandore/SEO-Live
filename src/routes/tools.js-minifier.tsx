import { createFileRoute } from "@tanstack/react-router";
import { toolHead, getToolContent } from "@/lib/tool-meta";
import { MinifierPage } from "./tools.html-minifier";

export const Route = createFileRoute("/tools/js-minifier")({
  loader: () => getToolContent("js-minifier"),
  head: () => toolHead("js-minifier"),
  component: () => <MinifierPage kind="js" />,
});
