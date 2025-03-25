import Card from "@/components/card";
import Pagination from "@/components/pagination";
import PageHeader from "@/components/partials/pageHeader";
import { getActivitiesServices } from "@/services/activities.service";
import { RequestProps } from "@/types/page.type";

export default async function ActivitiesPage({
  params,
  searchParams,
}: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  const {
    payload: { data, totalPage },
  } = await getActivitiesServices.getList(page, locale);

  return (
    <>
      <PageHeader />
      <section className="section">
        <div className="container">
          <div className="row align-items-stretch">
            {data.map((act) => (
              <div
                className="col-lg-4 col-sm-6 mb-4"
                style={{ height: "fit-content" }}
              >
                <Card
                  basePath="activities"
                  title={act.title}
                  thumb={act.image}
                  id={act.id}
                  thumbW={250}
                  thumbH={250}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pagination totalPage={totalPage} />
    </>
  );
}
