import { useDOMParser as DOMParser } from "@/hooks/domParser";
import { getMemberServices } from "@/services/member.service";
import { RequestProps } from "@/types/page.type";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function page({ params }: RequestProps) {
  const i18n = await getTranslations();
  const locale = (await params).locale;
  const {
    payload: { data },
    status,
  } = await getMemberServices.getDetail("network", (await params).id, locale);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-5">
            <Image
              className="img-fluid w-100"
              src={data.metadata.image}
              alt={data.metadata.name}
              width={445}
              height={445}
              quality={90}
              loading="lazy"
            />
          </div>
          <div className="col-md-6 mb-5">
            <h3>{data.metadata.name}</h3>
            <h6 className="text-color">{DOMParser(data.metadata.title)}</h6>
            <p className="mb-5 text-justify">{DOMParser(data.metadata.bio)}</p>
            <div className="row">
              {data.metadata.interest && data.metadata.interest?.length > 0 && (
                <div className="col-md-6">
                  <h4 className="mb-4">{i18n("interest")}</h4>
                  <ul className="pl-3">
                    {data.metadata.interest.map((int) => (
                      <li
                        key={int}
                        className="mb-3"
                        style={{
                          listStyleType: "circle",
                          display: "list-item",
                        }}
                      >
                        {int}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 content">{DOMParser(data.detail)}</div>
        </div>
      </div>
    </section>
  );
}
