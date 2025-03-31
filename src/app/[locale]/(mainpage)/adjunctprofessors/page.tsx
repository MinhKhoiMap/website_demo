import { PageHeaderContextComponent } from "@/app/context";
import Card from "@/components/card";
import Pagination from "@/components/pagination";
import { getMemberServices } from "@/services/member.service";
import { RequestProps } from "@/types/page.type";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  const {
    payload: { data, totalPage },
  } = await getMemberServices.getList("adjunctprofessors", page, locale);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            {data.map(({ title, image, name, id }) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={name}>
                <Card
                  basePath="adjunctprofessors"
                  title={name}
                  thumb={image}
                  subTitle={title}
                  id={id}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pagination totalPage={totalPage} />
      <PageHeaderContextComponent title="Adjunct Professors" description="" />
    </>
  );
}
