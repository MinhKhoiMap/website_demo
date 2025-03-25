import "./style.scss";

import { getActivitiesServices } from "@/services/activities.service";
import { RequestProps } from "@/types/page.type";
import React from "react";
import Booklet from "./booklet";

export default async function page({ params }: RequestProps) {
  const slug = (await params).id;
  const locale = (await params).locale;

  const {
    payload: { data },
  } = await getActivitiesServices.getDetail(slug, locale);

  return (
    <section className="section-sm activities">
      <div className="container" style={{ width: "100%" }}>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-12">
            <h2
              className="section-title"
              style={{
                textAlign: "center",
                marginLeft: "2%",
                fontSize: "35px",
              }}
            >
              {data.title}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 content">{data.content}</div>

          {data.flipbook && (
            <div className="book-section">
              <div className="container">
                {data.flipbook &&
                  data.flipbook_page?.map(
                    ({ flipbook_page_front, flipbook_page_back }, id) => (
                      <Booklet
                        flipbook_page_front={flipbook_page_front}
                        flipbook_page_back={flipbook_page_back}
                        flipbook_width={data.flipbook_width}
                        flipbook_height={data.flipbook_height}
                        page={id}
                      />
                    )
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
