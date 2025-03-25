import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div
      className="rounded-pill d-flex justify-content-between bg-light bg-opacity-50 border border-white p-3"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <figure className="flex-1">
        <Image
          src="/images/logo/iscm_logo.webp"
          alt="ISCM - UEH"
          className="rounded-circle"
          width={44}
          height={44}
        />
      </figure>
      <p
        className="text-center font-weight-semibold text-black"
        style={{ fontStyle: "600" }}
      >
        ISCM - UEH
      </p>
      <div className="flex-1"></div>
    </div>
  );
}
