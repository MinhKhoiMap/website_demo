import envConfig from "@/config";
import { Options } from "rehype-parse";
import { Plugin } from "unified";
import { Node, Parent } from "unist";
import { remark } from "remark";
import html from "remark-html";

let visit: any;

(async function () {
  visit = (await import("unist-util-visit")).visit;
})();

interface CustomPluginOptions {
  category: string;
  fileID: string;
}

const customPlugin: Plugin<[CustomPluginOptions?]> = (options) => {
  return (tree) => {
    visit(
      tree,
      "element",
      (node: any, index: number | null, parent: Parent | null) => {
        if (node.tagName !== "img" || index === null) return;

        if (String(node.properties.src).startsWith("blob")) {
          node.properties.src = `/images/${options?.category}/${options?.fileID}/${node.properties.alt}`;
        } else if (
          String(node.properties.src).startsWith(
            envConfig.NEXT_PUBLIC_API_ENDPOINT
          )
        ) {
          node.properties.src = String(node.properties.src).substring(
            String(node.properties.src).lastIndexOf("/images")
          );
        }

        // console.log(node);
      }
    );
  };
};

export default async function processHTMLContent(
  htmlcontent: string,
  category: string,
  fileID: string
): Promise<string> {
  const unified = (await import("unified")).unified;
  const rehypeParse = (await import("rehype-parse")).default;
  const remarkStringify = (await import("remark-stringify")).default;
  const rehypeStringify = (await import("rehype-stringify")).default;
  const rehypeRemark = (await import("rehype-remark")).default;

  const converted = await unified()
    .use(rehypeParse, { fragment: true })
    .use(customPlugin, { category: category, fileID: fileID })
    .use(rehypeStringify)
    .process(htmlcontent);

  // console.log(converted.value.toString());

  return converted.value.toString();
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
