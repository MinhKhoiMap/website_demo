import React from "react";
import "./style.scss";
import Link from "next/link";

export default function CardOverlay({
  id,
  thumb,
  title,
  basePath,
}: {
  id?: string;
  thumb: string;
  title: string;
  basePath: string;
}) {
  return (
    <Link
      href={{
        pathname: id ? `${basePath}/${id}` : basePath,
      }}
    >
      <div className="w-[350px] h-[200px] cursor-pointer card_overlay shadow-md">
        <img src={thumb} className="w-full h-full object-cover" />
        <div className="text_overlay">
          <p className="text-xl">{title}</p>
        </div>
      </div>
    </Link>
  );
}
