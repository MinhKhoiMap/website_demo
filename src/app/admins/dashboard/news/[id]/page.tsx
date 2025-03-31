import { RequestProps } from "@/types/page.type";
import { getPostServices } from "@/services/post.service";
import Editor from "./editor";

export default async function page({ params }: RequestProps) {
  const locale = (await params).locale;
  const postID = (await params).id;

  const {
    payload: { data },
  } = await getPostServices.getPost("news", postID, locale);

  return (
    <section className="overflow-auto h-screen">
      <Editor data={data} locale={locale} />
    </section>
  );
}
