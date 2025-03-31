import MarkdownRenderer from "@/components/markdownRenderer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDOMParser } from "@/hooks/domParser";
import { getPublicationList } from "@/services/research.service";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";
import { mainstream_cate } from "../page";

export default async function page({
  params,
}: {
  params: Promise<{
    id:
      | "framework transition"
      | "glocal design"
      | "human centric approach"
      | "urban system"
      | "tech solutions";
  }>;
}) {
  const { id } = await params;

  const cate = mainstream_cate.filter((cate) => cate.cateLink.includes(id))[0];

  const id_transform = id.replaceAll("_", " ") as
    | "framework transition"
    | "glocal design"
    | "human centric approach"
    | "urban system"
    | "tech solutions";

  const locale = await getLocale();
  const {
    payload: { data },
  } = await getPublicationList.getList(locale, id_transform);

  return (
    <section className="container pb-24 pt-16">
      <div>
        <h2 className="text-center">{cate.title}</h2>
        <p className="text-justify">{cate.introduction}</p>
      </div>

      <Tabs defaultValue="publications" className="w-full">
        <TabsList>
          <TabsTrigger value="publications" className="text-base">
            Publications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="publications" className="p-3 border border-black">
          <ul>
            {data.map((list) => (
              <li key={list.year}>
                <p className="font-bold mb-1">{list.year}</p>
                <ul className="ml-5">
                  {list.publications_list.map((publication) => (
                    <li
                      key={publication.id}
                      className="list-disc list-item hover:underline"
                    >
                      <Link
                        className="block italic"
                        href={publication.link}
                        target="_blank"
                      >
                        <MarkdownRenderer content={publication.title} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
}
