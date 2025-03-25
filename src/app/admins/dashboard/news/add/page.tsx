import React from "react";
import { RequestProps } from "@/types/page.type";
import Editor from "./editor";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  return (
    <section className="overflow-auto h-screen">
      <Editor locale={locale} />
    </section>
  );
}
