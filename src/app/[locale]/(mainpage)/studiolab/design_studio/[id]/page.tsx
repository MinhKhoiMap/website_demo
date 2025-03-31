import { ibm_plex_sans } from "@/app/fontDeclare";
import Mansory from "@/components/mansory";
import PageHeader from "@/components/partials/pageHeader";
import { Separator } from "@/components/ui/separator";
import { CollaborationStudioProject } from "@/schemaValidations/studiolab.schema";
import {
  getCollaborationServices,
  getISCMServices,
} from "@/services/studiolab.service";
import { RequestProps } from "@/types/page.type";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

export default async function page({ params }: RequestProps) {
  const para = await params;

  const {
    payload: { data },
  } = await getCollaborationServices.getProject(para.id, para.locale);

  const parse = CollaborationStudioProject.safeParse(data);

  if (parse.error) {
    console.log(parse.error);
    return null;
  }

  const content = parse.data;

  return (
    <>
      <PageHeader />
      <section className="container py-8">
        <h1 className={`text-center ${ibm_plex_sans.className}`}>
          {content.title}
        </h1>
        <div className="row mt-20">
          <div className="col-lg-5 col-12 h-full">
            <Separator className="bg-black h-[1.5px] mb-3" />
            <div className="px-3">
              <span className="flex">
                <p className="underline font-bold mb-0">Date:</p>
                <p>{format(new Date(), "PPPP")}.</p>
              </span>
              <span className="flex">
                <p className="underline font-bold mb-0">Location:</p>
                <p>{content.location}.</p>
              </span>
              <span>
                <p className="underline font-bold mb-0">Supervisor Team:</p>
                <div className="flex flex-wrap">
                  {content.supervisor.map((supervisor) => (
                    <p key={supervisor} className="mb-2 w-1/2 text-center">
                      {supervisor}
                    </p>
                  ))}
                </div>
              </span>
              <span>
                <p className="underline font-bold mb-0">Student List:</p>
                <div className="flex flex-wrap">
                  {content.members.map((member) => (
                    <p key={member} className="mb-2 w-1/2 text-center">
                      {member}
                    </p>
                  ))}
                </div>
              </span>
            </div>
          </div>
          <div className="col-1 d-lg-block d-none"></div>
          <div className="col-lg-6 col-12">
            <figure className="w-full mt-2 mt-lg-0 mb-5 mb-lg-0">
              <Image
                src={content.thumbnail}
                alt={para.id}
                width={1000}
                height={800}
                quality={100}
                className="w-full h-full object-contain object-top"
              />
            </figure>
            <Mansory listItems={content.gallery} />
          </div>
        </div>
      </section>
    </>
  );
}
