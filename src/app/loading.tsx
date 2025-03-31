import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="preloader">
      <Image
        unoptimized
        src="/images/preloader.gif"
        width={350}
        height={350}
        alt="preloader"
      />
    </div>
  );
}
