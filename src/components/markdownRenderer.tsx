import { useDOMParser as DOMParser } from "@/hooks/domParser";
import { markdownToHtml } from "@/lib/html2md";

export default async function MarkdownRenderer({
  content,
}: {
  content: string;
}) {
  const htmlContent = await markdownToHtml(content);

  return <>{DOMParser(htmlContent)}</>;
}
