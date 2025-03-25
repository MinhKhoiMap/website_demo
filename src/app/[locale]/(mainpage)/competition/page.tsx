import Card from "@/components/card";
import Pagination from "@/components/pagination";
import PageHeader from "@/components/partials/pageHeader";
import { getCompetitionServices } from "@/services/competition.service";
import { RequestProps } from "@/types/page.type";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  // const {
  //   payload: { data, totalPage, headerPageInfo },
  // } = await getCompetitionServices.getList(page, locale);

  return (
    <>
      <PageHeader />
      <section className="section">
        <div className="container">
          <div className="row">
            {/* {data.map((comp) => {
              return (
                <div className="col-lg-4 col-sm-6 mb-4">
                  <Card
                    basePath="competition"
                    title={comp.title}
                    thumb={comp.image || ""}
                    id={comp.id}
                    thumbW={200}
                    thumbH={200}
                  />
                </div>
              );
            })} */}
          </div>
        </div>
      </section>
      {/* <Pagination totalPage={totalPage} /> */}
    </>
  );
}
