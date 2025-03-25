import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import path from "path";
import fs from "fs";

import { bg_video } from "@/constants";

import Header from "@/components/partials/header";
import Footer from "@/components/partials/footer";
import { useDOMParser as DOMParser } from "@/hooks/domParser";
import { pbkdf2Sync } from "crypto";

export default async function Home() {
  const i18n = await getTranslations();
  const locale = await getLocale();

  const { about, event, iscmname, success_story } = await import(
    `@/constants/${locale}`
  );

  const partnerPath = path.normalize(process.cwd() + "/public/images/partners");

  const partnerLists = fs.readdirSync(partnerPath);
  const partnerSeperateIndex = Math.floor(partnerLists.length / 2);

  return (
    <>
      <Header />
      <div className="header-section overlay bg-cover">
        <div style={{ backgroundColor: "gray", width: "100%", height: "100%" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              zIndex: 999,
              backgroundColor: "rgba(20, 20, 89, 0.7)",
              width: "100%",
              textAlign: "center",
              height: "100%",
              position: "absolute",
            }}
          >
            <h2 className="text-layout" style={{ zIndex: 999 }}>
              {iscmname}
            </h2>
          </div>
          <video
            autoPlay
            loop
            muted
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              backgroundColor: "black",
            }}
          >
            <source src={bg_video} type="video/mp4" />
          </video>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className="section-title">{about.title}</h2>
              <p style={{ textAlign: "justify" }}>{about.content}</p>
              <Link
                href="/about"
                locale={locale}
                className="btn btn-outline-primary"
              >
                {i18n("learn_more")}
              </Link>
            </div>
            <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
              <Image
                className="img-fluid w-100"
                src={about.image}
                alt="about image"
                width={540}
                height={360}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center section-title justify-content-between">
                <h2 className="mb-0 text-nowrap mr-3">{i18n("our_course")}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">{/* render course */}</div>
          <div className="row">
            <div className="col-12 text-center">
              <Link
                locale={locale}
                href="/course_undergraduate"
                className="btn btn-sm btn-outline-primary d-sm-none d-inline-block"
              >
                {i18n("see_all")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section bg-cover"
        style={{ backgroundImage: `url(${success_story.bg_image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-4 position-relative success-video"></div>
            <div className="col-lg-6 col-sm-8" style={{ textAlign: "justify" }}>
              <div className="bg-white p-5">
                <p>{DOMParser(success_story.content)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center section-title justify-content-between">
                <h2 className="mb-0 text-nowrap mr-3">{event.title}</h2>
                <div className="border-top w-100 border-primary d-none d-sm-block"></div>
                <div>
                  <Link
                    locale={locale}
                    href="/news"
                    className="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block text-nowrap"
                  >
                    {i18n("see_all")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">{/* Render news and events */}</div>
        </div>
      </section>
      <section className="section">
        <div className="logo-container">
          <div className="wrapper">
            {partnerLists
              .slice(0, partnerSeperateIndex)
              .map((partner, index) => (
                <Image
                  className="flex-shrink-0 object-contain itemLeft w-[100px] h-full"
                  key={partner}
                  src={"/images/partners/" + partner}
                  width={100}
                  height={100}
                  alt={partner}
                  style={{
                    animationDelay: `calc(120s / ${partnerSeperateIndex} * (${partnerSeperateIndex} - ${
                      index + 1
                    }) * -1)`,
                    left: `max(calc(200px * ${
                      partnerSeperateIndex + 1
                    }), 100%)`,
                    animationName: "scrollLeft",
                  }}
                />
              ))}
          </div>
          <div className="wrapper">
            {partnerLists
              .slice(partnerSeperateIndex, partnerLists.length)
              .map((partner, index) => (
                <Image
                  className="flex-shrink-0 object-contain itemRight w-[100px] h-full"
                  key={partner}
                  src={"/images/partners/" + partner}
                  width={100}
                  height={50}
                  alt={partner}
                  style={{
                    animationDelay: `calc(120s / ${
                      partnerLists.length - partnerSeperateIndex
                    } * (${partnerLists.length - partnerSeperateIndex} - ${
                      index + 1
                    }) * -1)`,
                    right: `max(calc(200px * ${
                      partnerLists.length - partnerSeperateIndex
                    }), 100%)`,
                    animationName: "scrollRight",
                  }}
                />
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
