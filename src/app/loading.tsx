"use client";

import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <html lang="en">
      <body className="antialiased w-screen h-screen">
        <div className="preloader">
          <Image
            unoptimized
            src="/images/preloader.gif"
            width={350}
            height={350}
            alt="preloader"
          />
        </div>
      </body>
    </html>
  );
}
