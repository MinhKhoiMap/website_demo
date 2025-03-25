import { DomElement } from "htmlparser2";
import Image from "next/image";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
} from "react-html-parser";

export const useDOMParser = (htmlString: string) => {
  const transform = (node: DomElement, index: number) => {
    if (node.type === "tag" && node.name === "img") {
      return (
        <Image
          style={{ objectFit: "contain" }}
          src={node.attribs?.src as string}
          className="img-fluid w-80"
          quality={90}
          alt="thumbnail"
          width={1120}
          height={400}
        />
      );
    }
  };

  return <>{ReactHtmlParser(htmlString, { transform })}</>;
};
