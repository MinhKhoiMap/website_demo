"use client";

import { useState } from "react";

// Components
import Image from "next/image";
import Button from "./Button/Button";
import Navbar from "./Navbar";

// Assets
import "./page.css";

let logo = "/images/iscm_logo.webp";
let linkedin = "/images/icons/brand-linkedin.svg";
let website = "/images/icons/unlink.svg";
let fb = "/images/icons/brand-facebook.svg";
let youtube = "/images/icons/brand-youtube.svg";
let award = "/images/icons/award.svg";
let link = "/images/icons/link.svg";
let notebook = "/images/icons/notebook.svg";

export default function ContactPage() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div
        className={`position-fixed top-4 start-50 translate-middle zindex-999 w-100 ${
          showNav && "navbar--show"
        } `}
        style={{ maxWidth: "580px", opacity: 0, transition: "all .2s" }}
      >
        <Navbar />
      </div>
      <div
        className="min-vh-100 py-5 px-3 contact-page"
        style={{ background: "#960c0c" }}
      >
        <div
          className="d-flex flex-column align-items-center mx-auto"
          style={{ maxWidth: "580px" }}
        >
          <figure className="iscm_logo rounded-circle overflow-hidden mb-4">
            <Image src={logo} alt="logo ISCM" width={96} height={96} />
          </figure>
          <h1
            className="text-uppercase text-white"
            style={{ fontSize: "20px", fontWeight: "700" }}
          >
            iscm - ueh
          </h1>
          <h2 className="text-center align-baseline text-white fs-5 fw-500">
            Viện Đô thị Thông minh và Quản Lý - Institute of Smart City and
            Management
          </h2>
          <div className="w-100 mt-4">
            <h3 className="text-white text-center mb-4 fw-bold">
              Liên hệ - Contact us
            </h3>
            <div className="w-100">
              <Button
                icon={linkedin}
                title="LinkedIn"
                link={"https://www.linkedin.com/company/iscm-ueh/"}
              />
              <Button
                icon={website}
                title="Website"
                link={"https://www.iscm.ueh.edu.vn/"}
              />
              <Button
                icon={fb}
                title="Facebook"
                link={"https://www.facebook.com/ISCM.UEH"}
              />
              <Button
                icon={youtube}
                title="Youtube"
                link={"https://www.youtube.com/@instituteofsmartcityandman8501"}
              />
              <Button
                icon={youtube}
                title="ISCM StudioLab"
                link={"https://www.youtube.com/@iscmstudiolab2172"}
              />
            </div>
          </div>
          <div className="w-100 mt-4">
            <h3 className="text-white text-center mb-4 fw-bold">
              Chương trình học - Study Program
            </h3>
            <div className="w-100">
              <Button
                icon={award}
                title="Cao Học - Graduate"
                link={"https://www.iscm.ueh.edu.vn/vi/course_graduate/"}
              />
              <Button
                icon={link}
                title="Đại Học - Undergraduate"
                link={"https://www.iscm.ueh.edu.vn/vi/course_undergraduate/"}
              />
              <Button
                icon={notebook}
                title="Khóa học ngắn hạn - Short Course"
                link={"https://www.iscm.ueh.edu.vn/vi/course_shortcourse/"}
              />
            </div>
          </div>
          <div className="mt-6">
            <a
              href="mailto:iscm@ueh.edu.vn"
              target="_blank"
              className="d-flex flex-column align-items-center"
            >
              <svg
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                className="hover:scale-110"
                style={{
                  fill: "white",
                  width: 48,
                  height: 40,
                  transition: "transform .2s",
                }}
              >
                <title data-testid="svgTitle" id="title_0.8231513934249679">
                  Email
                </title>
                <path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"></path>
                <path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"></path>
                <path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"></path>
                <path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"></path>
              </svg>
              <p className="text-white mt-2">iscm@ueh.edu.vn</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
