"use client";

import { useDOMParser as DOMParser } from "@/hooks/domParser";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Card({
  id,
  thumb,
  title,
  subTitle,
  basePath,
  thumbW = 350,
  thumbH = 350,
  style = {},
  titleStyle = {},
  imageStyle = {},
  isShowTitle = true,
  isDisabled = false,
  classname = "",
}: {
  id?: string;
  thumb: string;
  title?: string;
  subTitle?: string | ReactNode;
  basePath: string;
  thumbW?: number;
  thumbH?: number;
  style?: React.CSSProperties;
  isShowTitle?: boolean;
  titleStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  isDisabled?: boolean;
  classname?: string;
}) {
  return (
    <Link
      href={{
        pathname: id ? `${basePath}/${id}` : basePath,
      }}
      className={`card border-0 rounded-0 hover-shadow !mb-0 mb-lg-5 !w-full h-full ${classname}`}
      title={title}
      style={{ cursor: "pointer", ...style }}
      onClick={(e) => isDisabled && e.preventDefault()}
    >
      <Image
        className="card-img-top rounded-0 h-full"
        src={thumb}
        alt={`${title} - ${subTitle}`}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          maxHeight: thumbH,
          ...imageStyle,
        }}
        loading="lazy"
        width={thumbW}
        height={thumbH}
      />
      {isShowTitle && (
        <div className="card-body h-fit">
          <h4
            className="card-title leading-6 line-clamp-2"
            style={{
              height: "50px",
              fontWeight: "bold",
              color: "#141414",
              fontSize: "20px",
              fontFamily: "Barlow, sans-serif",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              wordBreak: "keep-all",
              textDecoration: "none",
              textOverflow: "ellipsis",
              ...titleStyle,
            }}
          >
            {title}
          </h4>
          <p className="mt-3">
            {typeof subTitle === "string"
              ? DOMParser(subTitle || "")
              : subTitle}
          </p>
        </div>
      )}
    </Link>
  );
}
