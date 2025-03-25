import MemberCard from "@/components/card";
import Pagination from "@/components/pagination";
import { getMemberServices } from "@/services/member.service";
import { RequestProps } from "@/types/page.type";

export default async function MembersPage({
  searchParams,
  params,
}: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  const {
    payload: { data, totalPage },
  } = await getMemberServices.getList("members", page, locale);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            {data.map(({ name, image, title, id }) => (
              <div className="col-lg-4 col-sm-6 mb-4">
                <MemberCard
                  basePath="members"
                  title={name}
                  thumb={image}
                  subTitle={title}
                  id={id}
                  style={{ height: "100%" }}
                  imageStyle={{ objectPosition: "top center", height: "350px" }}
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
