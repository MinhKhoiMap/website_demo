"use client";
import { useTranslations, useLocale } from "next-intl";
import { remark } from "remark";
import html from "remark-html";

// Services
import PageHeader from "@/components/partials/pageHeader";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { PageHeaderContextComponent } from "@/app/context";
import { useDOMParser } from "@/hooks/domParser";

const mission = {
  en: [
    "Improving urban quality and environment by excellent education, in-depth research and problem-solving projects in terms of “Think Globally - Act Locally”.",
    "Educating new generation students for creative and critical thinking, as well as global knowledge, professional skills, sense of sustainability.",
    "Developing the most advanced integrated Smart City StudioLab system with sufficient spaces and equipment to conduct thorough research.",
    "Impacting on urban planning, design and management by changing the way of thinking and involvement of the community, local authority and stakeholders.",
    "Connect people with people, communities with communities. From that, ISCM aims to create a co-creation community to join hands to resolve their confronted problems, towards creating a smart, strong and sustainable community.",
  ],
  vi: [
    "Nâng cao chất lượng cuộc sống và môi trường bằng hoạt động giáo dục chất lượng, các dự án nghiên cứu chuyên sâu và giải quyết vấn đề thực tiễn với phương châm “Tư duy toàn cầu – Hành động địa phương”.",
    "Giáo dục các thế hệ sinh viên về tư duy sáng tạo và phản biện, cập nhật tri thức thế giới, kỹ năng chuyên môn và ý thức bền vững.",
    "Phát triển hệ thống Smart City StudioLab tích hợp tiên tiến nhất với không gian và trang thiết bị đầy đủ phục vụ nghiên cứu chuyên sâu.",
    "Tác động đến hoạt động quy hoạch, thiết kế và quản lý đô thị bằng cách thay đổi tư duy và vai trò của cộng đồng, chính quyền địa phương và các bên liên quan, định hướng phát triển đồng sáng tạo.",
    "Kết nối con người với con người, cộng đồng với cộng đồng. Từ đó, ISCM đặt mục tiêu xây dựng một cộng đồng đồng sáng tạo để cùng chung tay đưa ra giải pháp cho các vấn đề phát triển đô thị, hướng tới một cộng đồng thông minh, đầy sức sống, và bền vững.",
  ],
};

export default function AboutPage() {
  const i18n = useTranslations();
  const locale = useLocale() as "vi" | "en";

  async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown);
    return useDOMParser(result.toString());
  }

  return (
    <>
      <PageHeader />
      <section className="section about-page">
        <div className="container">
          <div className="row">
            <div className="col-12 text-justify flex justify-center">
              <video
                id="introduce_iscm"
                className="img-fluid w-[80%] mb-4 shadow-lg"
                width={540}
                height={360}
                controls
                autoPlay
                muted
                playsInline
                loop
              >
                <source
                  src="/images/about/RECAP NO7.1 2025 SOUND EDITED.mov"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="p-2 border-2 rounded-[24px] border-[#689EE0] mb-5">
            <div className="slogan px-[60px] py-10 rounded-[16px] bg-[#EEF6FF] relative">
              <div className="w-fit rotate-180 absolute top-3 left-[15px]">
                <img
                  src="/images/quote-icon.png"
                  alt="icon"
                  width={36}
                  height={36}
                />
              </div>
              <div className="w-fit absolute bottom-3 right-[15px]">
                <img
                  src="/images/quote-icon.png"
                  alt="icon"
                  width={36}
                  height={36}
                />
              </div>
              <p className="text-justify italic">
                {markdownToHtml(i18n("about_quote"))}
              </p>
              <p className="font-bold mt-3">
                {markdownToHtml(i18n("about_author"))}
              </p>
            </div>
          </div>

          <div className="row justify-center">
            <h3 className="w-fit uppercase italic text-center relative after:h-1 after:rounded-sm after:w-[80%] after:bg-[#ce2027] after:absolute after:-bottom-[6px] after:left-1/2 after:-translate-x-1/2">
              {i18n("about_introduction_title")}
            </h3>
          </div>
          <p className="text-justify mt-2">
            {markdownToHtml(i18n("about_introduction"))}
          </p>

          <div className="row justify-center mt-5">
            <h3 className="w-fit uppercase italic text-center relative after:h-1 after:rounded-sm after:w-[80%] after:bg-[#ce2027] after:absolute after:-bottom-[6px] after:left-1/2 after:-translate-x-1/2">
              {i18n("about_vision_title")}
            </h3>
          </div>
          <p className="text-justify mt-2">{i18n("about_vision")}</p>

          <div className="row justify-center mt-5">
            <h3 className="w-fit uppercase italic text-center relative after:h-1 after:rounded-sm after:w-[80%] after:bg-[#ce2027] after:absolute after:-bottom-[6px] after:left-1/2 after:-translate-x-1/2">
              {i18n("about_mission_title")}
            </h3>
          </div>
          <ul className="mission mt-2">
            {mission[locale].map((mission: string) => (
              <li className="ml-3">{mission}</li>
            ))}
          </ul>

          <h4 className="text-black text-lg mt-4 font-[600]">Downloads:</h4>
          <div>
            <a
              className="block mb-2"
              href="https://drive.google.com/uc?export=download&id=197twtVZCGX0LfIhpapTNCNUFo-RjDAOc"
              download={"ISCM_Brochure_2024"}
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              ISCM Brochure 2024
            </a>
            <a
              className="block"
              href="https://drive.google.com/uc?export=download&id=1GOgUl-Prc8oUm35JzSTKy8opqYgRIXqF"
              download={"ISCM_Portfolio_2024"}
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              ISCM Portfolio 2024
            </a>
          </div>
        </div>
      </section>
      <PageHeaderContextComponent
        title={"About ISCM"}
        description={
          "Different people, students, stakeholders from various background comprised to resolve local problems by global thinkings, towards smart, resilient, and sustainable city. This is how the Institute of Smart City and Management (ISCM) commute on our lifelong journey."
        }
      />
    </>
  );
}
