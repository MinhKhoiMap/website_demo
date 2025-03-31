"use client";

import Image from "next/image";

export default function ErrorComp() {
  return (
    <figure className="w-full flex flex-col items-center pt-16">
      <Image
        src="/images/error.png"
        alt="Some things went wrong..."
        width={150}
        height={150}
        className="object-contain"
      />
      <figcaption className="text-center mt-3">
        <em>Oops!</em> Something went wrong... <br />
        <span>
          Please refresh page <em>(Fress F5)</em> to try again
        </span>
      </figcaption>
    </figure>
  );
}
