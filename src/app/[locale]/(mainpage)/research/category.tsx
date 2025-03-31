import { ibm_plex_sans } from "@/app/fontDeclare";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResearchCategory({
  introduction,
  categoryLink,
  thumb,
  title,
  sdgs,
  isReverse = false,
}: {
  introduction: string;
  categoryLink: string;
  thumb: string;
  title: string;
  sdgs: string[];
  isReverse?: boolean;
}) {
  const i18n = useTranslations();

  return (
    <div
      className="row mb-[78px]"
      style={{ flexDirection: isReverse ? "row-reverse" : "row" }}
    >
      <div className="col-6 mt-3 border-t border-[#971919] first:border-none">
        <div className="flex flex-col">
          <h2
            className={`text-4xl ${ibm_plex_sans.className} leading-[46.8px]`}
          >
            {title}
          </h2>
          <div className="flex flex-wrap gap-3 mb-2">
            {sdgs.map((sdg) => (
              <Image
                key={sdg}
                width={30}
                height={30}
                quality={100}
                alt="sdg_1"
                src={`/images/sdgs_icon/${sdg}.svg`}
              />
            ))}
          </div>
        </div>
        <h3 className="text-sm text-justify font-normal mb-4">
          {introduction}
        </h3>

        <Link href={categoryLink}>
          <Button
            variant="outline"
            className="uppercase border-[2px] btn btn-outline-primary"
          >
            {i18n("learn_more")}
          </Button>
        </Link>
      </div>
      <div className="col-6 flex flex-col">
        <figure className="flex-1 w-full h-full mb-0">
          <Image
            src={thumb}
            alt={title}
            className="max-h-[450px] w-full h-full object-cover"
            width={650}
            height={200}
            quality={100}
          />
        </figure>
      </div>
    </div>
  );
}
