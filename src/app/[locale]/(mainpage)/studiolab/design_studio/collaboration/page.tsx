import { ibm_plex_sans } from "@/app/fontDeclare";
import Card from "@/components/card";
import PageHeader from "@/components/partials/pageHeader";
import { RequestProps } from "@/types/page.type";

export default async function page({ searchParams, params }: RequestProps) {
  // const locale = (await params).locale;
  // const page = (await searchParams).page;

  return (
    <>
      <PageHeader />
      <section className="container py-8">
        <h1 className={`text-center ${ibm_plex_sans.className}`}>
          Collaboration Studios
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          maiores earum fugiat. Quia, veritatis totam id obcaecati vitae harum!
          In, dolore! Maiores aspernatur exercitationem saepe, perspiciatis
          nostrum sequi delectus nesciunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestiae possimus est, id deserunt
          totam quasi officiis asperiores natus velit atque sequi necessitatibus
          deleniti dolore doloribus, ut sit nisi, dolorum minima!
        </p>
        <div className="row gap-y-3 mt-24">
          <div className="col-12 col-lg-4">
            <Card
              id="thanhda"
              thumb="http://localhost:4000/public/static/images/studiolab/collaboration/thanhda/thanhda.jpg"
              basePath="collaboration"
              title="Drowing minor cities / Urban Adaptation Scenarios for Thanh Da"
              style={{
                maxWidth: "350px",
                fontWeight: "400",
              }}
              imageStyle={{ height: "250px" }}
              titleStyle={{ fontSize: "16px", fontWeight: "normal" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
