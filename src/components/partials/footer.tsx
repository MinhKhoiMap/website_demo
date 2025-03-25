import {
  elearningURL,
  email,
  futureURL,
  globalURL,
  informationURL,
  jobURL,
  logo,
  mobile,
  recruitURL,
  ueh_ctd_logo,
  ueh_email,
  ueh_link_elearning,
  ueh_link_future,
  ueh_link_global,
  ueh_link_information,
  ueh_link_job,
  ueh_link_recruit,
  ueh_link_virtual,
  ueh_mobile,
  virtualURL,
} from "@/constants";
import { address, copyright, ueh_address } from "@/constants/en";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer bg-footer section border-bottom">
        <div className="container">
          <div
            className="slogan"
            style={{
              marginTop: "-15%",
              textAlign: "center",
              marginBottom: "10%",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                color: "whitesmoke",
              }}
            >
              SHAPING THE UNKNOWN FUTURE
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-8 mb-5 mb-lg-0">
              <figure className="logo-footer">
                <Image
                  className="img-fluid mb-4"
                  src={logo}
                  alt="logo"
                  width="220"
                  height="70"
                />
              </figure>
              <ul className="list-unstyled row footer__info">
                <li className="mb-4 col-12">{address}</li>
                <li className="mb-4 col-12">{email}</li>
                <li className="mb-4 col-12">{mobile}</li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 mb-5 mb-md-0"></div>

            <div className="col-lg-2 col-sm-3 col-6 mb-5 mb-md-0"></div>
            <div
              className="col-lg-4 col-sm-9 mb-5 mb-lg-0"
              style={{ marginTop: "-2%", textAlign: "right" }}
            >
              <figure className="logo-footer">
                <Image
                  src={ueh_ctd_logo}
                  height="70"
                  width="300"
                  className="img-fluid mb-4"
                  alt="ueh_ctd"
                />
              </figure>
              <ul className="list-unstyled">
                <li className="mb-4 col-12" style={{ fontSize: "97%" }}>
                  {ueh_address}
                </li>
                <li className="mb-4 col-12">{ueh_email}</li>
                <li className="mb-4 col-12">{ueh_mobile}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-footer"
        style={{ width: "auto", height: "100px", paddingTop: "50px" }}
      >
        <ul className="list-unstyled" style={{ textAlign: "center" }}>
          <li className="mb-4">
            <a className="logo-footer" href={recruitURL}>
              <span className="logotext">Admission</span>
              <Image
                className="img-fluid mb-4"
                width={50}
                height={50}
                style={{ marginRight: "20px" }}
                src={ueh_link_recruit}
                alt="ueh_link_recruit"
              />
            </a>
          </li>
          <li className="mb-4">
            <a className="logo-footer" href={futureURL}>
              <span className="logotext">UEH Giving</span>
              <Image
                className="img-fluid mb-4"
                width={50}
                height={50}
                style={{ marginRight: "20px" }}
                src={ueh_link_future}
                alt="ueh_link_future"
              />
            </a>
          </li>
          <li className="mb-4">
            <a className="logo-footer" href={globalURL}>
              <span className="logotext">UEH Global Learning</span>
              <Image
                className="img-fluid mb-4"
                width={50}
                height={50}
                style={{ marginRight: "20px" }}
                src={ueh_link_global}
                alt="ueh_link_global"
              />
            </a>
          </li>
          <li className="mb-4">
            <a className="logo-footer" href={elearningURL}>
              <span className="logotext">E-Learning</span>
              <Image
                className="img-fluid mb-4"
                width={50}
                height={50}
                style={{ marginRight: "20px" }}
                src={ueh_link_elearning}
                alt="ueh_link_elearning"
              />
            </a>
          </li>
          <li className="mb-4">
            <a className="logo-footer" href={jobURL}>
              <span className="logotext">UEH Career for Student</span>
              <Image
                className="img-fluid mb-4"
                width={50}
                height={50}
                style={{ marginRight: "20px" }}
                src={ueh_link_job}
                alt="ueh_link_job"
              />
            </a>
          </li>
          <li className="mb-4">
            <a className="logo-footer" href={informationURL}>
              <span className="logotext">UEH All in One</span>
              <Image
                className="img-fluid mb-4"
                width={50}
                height={50}
                style={{ marginRight: "20px" }}
                src={ueh_link_information}
                alt="ueh_link_information"
              />
            </a>
          </li>
          <li className="mb-4">
            <a className="logo-footer" href={virtualURL}>
              <span className="logotext">UEH Virtual Tour</span>
              <Image
                className="img-fluid mb-4"
                width={50}
                height={50}
                style={{ marginRight: "20px" }}
                src={ueh_link_virtual}
                alt="ueh_link_virtual"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright py-4 bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0" dangerouslySetInnerHTML={{ __html: copyright }}></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
