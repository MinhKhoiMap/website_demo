import { useDOMParser } from "@/hooks/domParser";
import { getCompetitionServices } from "@/services/competition.service";
import { RequestProps } from "@/types/page.type";
import Image from "next/image";

export default async function page({ params }: RequestProps) {
  const locale = (await params).locale;
  const slug = (await params).id;
  const {
    payload: { data },
  } = await getCompetitionServices.getDetail(slug, locale);

  return (
    <section className="section-sm">
      <div className="container" style={{ scrollBehavior: "smooth" }}>
        <div className="row">
          <div className="col-12">
            <h2
              className="section-title"
              style={{ textAlign: "center", marginLeft: "2%" }}
            >
              {data.title}
            </h2>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark p-0 col-12">
            <div style={{ textAlign: "center", width: "100%" }}>
              <ul
                className="navbar-navld"
                style={{
                  width: "100%",
                  padding: 0,
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                <li className="nav-item" style={{ whiteSpace: "nowrap" }}>
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>

                <li className="nav-item" style={{ whiteSpace: "nowrap" }}>
                  <a className="nav-link" href="#timeline">
                    Timeline
                  </a>
                </li>
                <li className="nav-item" style={{ whiteSpace: "nowrap" }}>
                  <a className="nav-link" href="#prize">
                    Prizes and Mentions
                  </a>
                </li>
                {data.isLaunch && (
                  <li className="nav-item" style={{ whiteSpace: "nowrap" }}>
                    <a className="nav-link" href="#registration">
                      Registration
                    </a>
                  </li>
                )}
                <li className="nav-item" style={{ whiteSpace: "nowrap" }}>
                  <a className="nav-link" href="#sponsors">
                    Co-Organizers
                  </a>
                </li>
                <li className="nav-item" style={{ whiteSpace: "nowrap" }}>
                  <a className="nav-link" href="#panels">
                    Jury Panels
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="col-12 mb-4">
            <Image
              src={data.image || ""}
              style={{ objectFit: "contain", height: "600px" }}
              className="img-fluid w-100"
              alt={data.title}
              width={600}
              height={600}
              quality={90}
            />
          </div>
        </div>
        <div className="row">
          {data.isLaunch && useDOMParser(data.registrationContent)}
          {useDOMParser(data.content)}
        </div>
      </div>
    </section>
  );
}
