import Card from "@/components/card";
// import DateCard from "@/components/dateCard";
import PageHeader from "@/components/partials/pageHeader";
import { getCourseServices } from "@/services/course.service";
import { RequestProps } from "@/types/page.type";

export default async function CourseGraduatePage({
  searchParams,
  params,
}: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page;

  const {
    payload: { data },
  } = await getCourseServices.getList("course_graduate", locale);

  return (
    <>
      <PageHeader />
      <section className="section">
        <div className="container">
          <div className="row">
            {data.map(({ title, image, id }) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={id}>
                <Card
                  basePath="course_graduate"
                  title={title}
                  thumb={image}
                  id={id}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
