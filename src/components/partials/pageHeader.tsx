"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { usePageHeaderContext } from "@/app/context";

// import { findUrlName } from "@/lib/utils";
import { mainMenuEn } from "@/constants/en";
import { mainMenuVi } from "@/constants/vi";

export default function PageHeader() {
  const pathname = usePathname().split("/");
  const locale = useLocale();
  const i18n = useTranslations();
  const mainMenu = locale === "en" ? mainMenuEn : mainMenuVi;
  // const nameMenu = findUrlName(mainMenu, pathname[2] || "");

  const { title, description, bgImage } = usePageHeaderContext();

  return (
    <section
      className="page-title-section overlay h-[500px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="list-inline custom-breadcrumb">
              <li className="list-inline-item h2">
                <Link href="/" className="text-white font-secondary">
                  {i18n("home")}
                  <i className="ti ti-angle-right text-white h5 ml-2"></i>
                </Link>
              </li>
              <li
                className="list-inline-item text-white h3 font-secondary"
                style={{ textAlign: "justify", wordBreak: "keep-all" }}
              >
                <Link
                  href={"/" + pathname[2]}
                  style={{ textTransform: "capitalize", color: "white" }}
                >
                  {title}
                  <i className="ti ti-angle-right text-white h5 ml-2"></i>
                </Link>
              </li>
            </ul>
            <p className="text-lighten" style={{ textAlign: "justify" }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
