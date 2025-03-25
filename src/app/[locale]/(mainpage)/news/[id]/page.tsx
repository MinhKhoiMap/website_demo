import { PageHeaderContextComponent } from "@/app/context";
import { useDOMParser as DOMParser } from "@/hooks/domParser";
import { getPostServices } from "@/services/post.service";
import Image from "next/image";

export default async function page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const locale = (await params).locale;
  const postID = (await params).id;

  const {
    payload: { data },
  } = await getPostServices.getPost("news", postID, locale);

  return (
    <section className="section-sm content-body">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">{data.metadata.title}</h1>
          </div>
          {data.metadata.showImage && (
            <div className="col-12 mb-4">
              <Image
                style={{ objectFit: "contain" }}
                src={data.metadata.thumbnail}
                className="img-fluid w-100"
                alt="thumbnail"
                width={1120}
                height={400}
                quality={90}
              />
            </div>
          )}
        </div>

        {/* <!-- event details --> */}
        <div className="row">
          <div className="col-12 mb-50 content">{DOMParser(data.content)}</div>
        </div>

        {/* <!-- border --> */}
        <div className="col-12 mt-4 order-4">
          <div className="border-bottom border-primary"></div>
        </div>
      </div>
      <PageHeaderContextComponent title={data.metadata.title} />
    </section>
  );
}
