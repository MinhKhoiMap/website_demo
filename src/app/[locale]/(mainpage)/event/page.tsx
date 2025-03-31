import PostCard from "@/components/dateCard";
import Pagination from "@/components/pagination";
import { getPostServices } from "@/services/post.service";
import { RequestProps } from "@/types/page.type";

export default async function EventPage({
  searchParams,
  params,
}: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  const {
    payload: { data, totalPage },
  } = await getPostServices.getList("event", page, locale);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            {data.map(({ title, thumbnail, publishDate, id }) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={id}>
                <PostCard
                  basePath="event"
                  title={title}
                  thumb={thumbnail}
                  publishDate={publishDate}
                  id={id}
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
