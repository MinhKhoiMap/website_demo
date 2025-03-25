import { ibm_plex_sans } from "@/app/fontDeclare";
import PageHeader from "@/components/partials/pageHeader";
import React from "react";
import YearTabs from "./year_tabs";
import { TabsProps } from "antd";
import Card from "@/components/card";
import Image from "next/image";
import CardOverlay from "@/components/card_overlay";
import {
  getCollaborationServices,
  getISCMServices,
} from "@/services/studiolab.service";
import { LangType } from "@/types/lang.type";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ title: string; id: string; locale: LangType }>;
  searchParams: Promise<{ page?: number }>;
}) {
  const para = await params;
  const page = (await searchParams).page;

  const items: TabsProps["items"] = [
    {
      key: "2025",
      label: "2025",
    },
    {
      key: "2024",
      label: "2024",
    },
    {
      key: "2023",
      label: "2023",
    },
    {
      key: "2022",
      label: "2022",
    },
    {
      key: "2021",
      label: "2021",
    },
  ];

  const {
    payload: { data, totalPage },
  } = await getCollaborationServices.getList(page, para.locale);

  return (
    <>
      <PageHeader />
      <section className="container pt-16">
        <div>
          <h1
            className={`text-4xl ${ibm_plex_sans.className} border-b-2 border-dashed border-black w-fit`}
          >
            Design Studio Lab
          </h1>
          <div className="row flex gap-3">
            <p className="col-lg-6 col-12 mt-2 pb-3 text-justify text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus eum quam mollitia molestiae totam voluptates
              exercitationem laboriosam ducimus! Iusto sunt dolor pariatur
              expedita architecto, minima libero ipsum blanditiis cumque
              numquam.
            </p>
          </div>
        </div>

        <div className="flex relative pb-20">
          <YearTabs
            items={items}
            tabPosition="left"
            defaultKey={new Date().getFullYear().toString()}
          />
          <div className="w-full">
            <div>
              <h3 className={`text-3xl ${ibm_plex_sans.className}`}>
                ISCM Studios
              </h3>
              <div className="flex gap-3 flex-wrap">
                {data.map((studio) => (
                  <Card
                    id={studio.id}
                    thumb={studio.thumbnail}
                    basePath="design_studio"
                    title={studio.title}
                    style={{
                      maxWidth: "350px",
                      height: "fit-content",
                      fontWeight: "400",
                    }}
                    thumbH={250}
                    titleStyle={{ fontSize: "16px", fontWeight: "normal" }}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className={`text-3xl ${ibm_plex_sans.className}`}>
                Collaboration Studios
              </h3>
              <div className="flex gap-3">
                <CardOverlay
                  thumb="/images/studiolab/collaboration_studio.jpg"
                  title="Collaboration Studios"
                  basePath="design_studio/collaboration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
