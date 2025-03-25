import Card from "@/components/card";
import Pagination from "@/components/pagination";
import PageHeader from "@/components/partials/pageHeader";
import { getPartnerServices } from "@/services/partner.service";
import { RequestProps } from "@/types/page.type";

export default async function PartnerPage({
  params,
  searchParams,
}: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  const {
    payload: { data },
  } = await getPartnerServices.getList(page, locale);

  return (
    <>
      <PageHeader />
      <section className="section">
        <div className="container">
          <div className="row">
            {data.map((partner) => (
              <div
                className="col-2 mb-4"
                key={partner.title}
                title={partner.title}
              >
                <Card
                  basePath={partner.link || "#"}
                  thumb={partner.image}
                  title={partner.title}
                  isShowTitle={false}
                  thumbW={140}
                  thumbH={140}
                  style={{ width: "140px", height: "140px", padding: "0 10px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
