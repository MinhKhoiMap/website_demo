import { ibm_plex_sans } from "@/app/fontDeclare";
import Card from "@/components/card";
import PageHeader from "@/components/partials/pageHeader";
import { Separator } from "@/components/ui/separator";
import { getCollaborationServices } from "@/services/studiolab.service";
import { RequestProps } from "@/types/page.type";
import { MapPinnedIcon } from "lucide-react";
import Image from "next/image";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  const {
    payload: { data },
  } = await getCollaborationServices.getList(page, locale);

  return (
    <>
      <PageHeader />
      <section className="container py-8">
        <h1 className={`text-center ${ibm_plex_sans.className}`}>
          Drowing minor cities / Urban Adaptation Scenarios for Thanh Da
        </h1>
        <div className="row min-h-[400px] mt-20">
          <div className="col-lg-5 col-12 mt-3 mt-lg-0 h-full">
            {/* <h3>{"fasdfs"}</h3> */}
            <Separator className="bg-black h-[1.5px] mb-3" />
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ut
              culpa accusamus? Quasi consequatur incidunt, voluptatum
              dignissimos dolore voluptas eius assumenda ullam nihil quo, culpa
              molestiae est sed error reiciendis. Eum asperiores alias sint
              facere tenetur, id minus fugiat, expedita, saepe tempora ab
              aliquid. Fuga reprehenderit, nam sunt eaque nihil atque provident
              optio tenetur suscipit iste beatae excepturi, nesciunt officiis!
            </p>
          </div>
          <div className="col-lg-7 col-12 max-h-[450px]">
            <figure className="w-full h-fit">
              <Image
                src="http://localhost:4000/public/static/images/studiolab/collaboration/thanhda/thanhda.jpg"
                alt={"fasdf"}
                width={1000}
                height={800}
                quality={100}
                className="w-full h-full object-contain object-top"
              />
            </figure>
          </div>
        </div>
        <div className="row gap-y-3 mt-24">
          {data.map((project) => (
            <div
              className="col-lg-4 col-12 flex justify-center"
              key={project.id}
            >
              <Card
                id={project.id}
                thumb={project.thumbnail}
                basePath="./thanhda"
                title={project.title}
                style={{
                  width: "100%",
                  fontWeight: "400",
                }}
                subTitle={
                  <div className="flex gap-2 w-full justify-end items-center">
                    <MapPinnedIcon width={18} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                }
                imageStyle={{ height: "205px", objectPosition: "top left" }}
                titleStyle={{ fontSize: "18px", fontWeight: "normal" }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
