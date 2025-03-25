import { PageHeaderContextComponent } from "@/app/context";
import MemberCard from "@/components/card";
import Pagination from "@/components/pagination";
import PageHeader from "@/components/partials/pageHeader";
import { getMemberServices } from "@/services/member.service";
import { RequestProps } from "@/types/page.type";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  const {
    payload: { data, totalPage },
  } = await getMemberServices.getList("advisory", page, locale);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            {data.map(({ name, image, title, id }) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={id}>
                <MemberCard
                  basePath="advisory"
                  title={name}
                  thumb={image}
                  subTitle={title}
                  id={id}
                  isDisabled={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pagination totalPage={totalPage} />
      <PageHeaderContextComponent title={"advisory"} description="" />
    </>
  );
}
