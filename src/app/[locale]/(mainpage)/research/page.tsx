import { ibm_plex_sans } from "@/app/fontDeclare";
import { getLocale } from "next-intl/server";
import BookSlider from "./book_slider";
import { getBookList } from "@/services/research.service";
import ResearchCategory from "./category";

export const mainstream_cate = [
  {
    title: "Framework Transition",
    introduction:
      "Framework Transition involves redefining existing paradigms to enhance urban governance and development. It includes Governance and Policy Innovation, which fosters collaborative and adaptive policymaking among stakeholders to address dynamic urban needs. This mainstream also emphasizes Global and Comparative Urban Development, allowing cities to learn from diverse practices worldwide and adopt best solutions tailored to their contexts. Lastly, the Smart City Model and Framework integrates technology and data analytics into urban planning, improving infrastructure and public services while enhancing the quality of life for residents. Together, these elements promote resilient, efficient, and sustainable urban environments.",
    cateLink: "/research/framework_transition",
    thumb: "/images/researches/framework transition.jpg",
    subtitles: [
      "goal_1",
      "goal_2",
      "goal_3",
      "goal_4",
      "goal_5",
      "goal_6",
      "goal_7",
      "goal_8",
      "goal_9",
      "goal_10",
      "goal_11",
      "goal_12",
      "goal_13",
      "goal_14",
      "goal_15",
      "goal_16",
      "goal_17",
    ],
  },
  {
    title: "Glocal Design",
    introduction:
      "Glocal Design emphasizes the integration of local context with global perspectives in urban planning and development, focusing on Urban Sustainability and Resilience as well as Smart Housing. It advocates for creating urban environments that can adapt to environmental, social, and economic challenges by promoting sustainable practices that minimize resource consumption and enhance residents' quality of life. Resilience strategies address climate change and social inequalities, ensuring cities can recover from disruptions. Additionally, Smart Housing incorporates advanced technologies and sustainable design principles to create energy-efficient, accessible homes that meet the diverse needs of communities while prioritizing environmental sustainability and community engagement.",
    cateLink: "/research/glocal_design",
    thumb: "/images/researches/glocal design.jpg",
    subtitles: [
      "goal_1",
      "goal_2",
      "goal_3",
      "goal_4",
      "goal_5",
      "goal_6",
      "goal_7",
      "goal_8",
      "goal_9",
      "goal_10",
      "goal_11",
      "goal_12",
      "goal_13",
      "goal_14",
      "goal_15",
      "goal_16",
      "goal_17",
    ],
  },
  {
    title: "Human Centric Approach",
    introduction:
      "Human-Centric Approach centers on the needs and experiences of individuals in urban planning, highlighting Social Equity and Inclusive Urban Design, Health and Well-Being, and Behavioral Study alongside Human-Centric Design. This approach aims to create urban environments that are accessible and equitable for all residents, ensuring that marginalized communities can actively participate in the planning process and benefit from inclusive public spaces. It emphasizes the connection between urban design and the health of individuals, advocating for environments that promote physical activity, mental well-being, and social interactions. By incorporating insights from behavioral studies, planners can better understand how people engage with their surroundings, leading to the creation of spaces that prioritize user experience and foster a sense of community, ultimately enhancing the quality of life for all urban dwellers.",
    cateLink: "/research/human_centric_approach",
    thumb: "/images/researches/human centric.jpg",
    subtitles: [
      "goal_1",
      "goal_2",
      "goal_3",
      "goal_4",
      "goal_5",
      "goal_6",
      "goal_7",
      "goal_8",
      "goal_9",
      "goal_10",
      "goal_11",
      "goal_12",
      "goal_13",
      "goal_14",
      "goal_15",
      "goal_16",
      "goal_17",
    ],
  },
  {
    title: "Urban System",
    introduction:
      "Urban System focuses on the interconnected components that shape urban life, emphasizing Urban Mobility and Transportation, Disaster Preparedness and Urban Safety, and Urban Economics. Effective urban mobility and transportation systems are essential for facilitating movement, reducing congestion, and promoting accessibility, thereby enhancing the overall quality of urban life. Disaster Preparedness and Urban Safety involve planning and infrastructure designed to mitigate risks from natural disasters and ensure the protection of residents, fostering resilience in the face of emergencies. Additionally, Urban Economics examines the financial dynamics of cities, including the impact of economic policies, real estate markets, and employment opportunities, striving to create sustainable economic growth while addressing inequalities and enhancing the overall prosperity of urban communities.",
    cateLink: "/research/urban_system",
    thumb: "/images/researches/urban system.jpg",
    subtitles: [
      "goal_1",
      "goal_2",
      "goal_3",
      "goal_4",
      "goal_5",
      "goal_6",
      "goal_7",
      "goal_8",
      "goal_9",
      "goal_10",
      "goal_11",
      "goal_12",
      "goal_13",
      "goal_14",
      "goal_15",
      "goal_16",
      "goal_17",
    ],
  },
  {
    title: "Tech Solutions",
    introduction:
      "Tech Solutions mainstream encompasses the integration of technology into urban planning and development, focusing on Smart Infrastructure and Tech, Data-driven Urban Design, and Emerging Technologies in Urban Context. Smart Infrastructure and Tech employs advanced technologies, such as IoT and sensors, to enhance the efficiency and functionality of urban systems, improving services like transportation, waste management, and energy usage. Data-driven and Urban Design leverages analytics and real-time data to inform planning decisions, enabling more responsive and adaptive environments that meet the dynamic needs of residents. Additionally, Emerging Tech in Urban Context applies technologies to address urban challenges, streamline processes, and foster innovation in governance and community engagement, ultimately creating smarter, more resilient urban spaces.",
    cateLink: "/research/tech_solutions",
    thumb: "/images/researches/tech solutions.jpg",
    subtitles: [
      "goal_1",
      "goal_2",
      "goal_3",
      "goal_4",
      "goal_5",
      "goal_6",
      "goal_7",
      "goal_8",
      "goal_9",
      "goal_10",
      "goal_11",
      "goal_12",
      "goal_13",
      "goal_14",
      "goal_15",
      "goal_16",
      "goal_17",
    ],
  },
];

export default async function ResearchPage() {
  const locale = await getLocale();

  const {
    payload: { data },
  } = await getBookList.getList(locale);

  return (
    <section className="container py-24">
      <div id="books" className="row">
        <div className="col-12 col-lg-4">
          <h2 className={`${ibm_plex_sans.className}`}>
            {locale === "en" ? "Books" : "Sách"}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Volutpat adipiscing tortor
            sapien ut euismod. Viverra quis orci eu at praesent. Feugiat massa
            nullam posuere ut. A vel et rutrum pellentesque adipiscing sagittis.
          </p>
        </div>
        <div className="col-12 col-lg-8 h-[350px] overflow-hidden">
          <BookSlider books={data} />
        </div>
      </div>
      <div id="mainstream" className="mt-14">
        <h2
          className={`text-[#971919] uppercase ${ibm_plex_sans.className} text-center`}
        >
          {locale === "en"
            ? "research mainstream"
            : "xu hướng nghiên cứu chính"}
        </h2>
        <span className="flex w-full justify-center mt-6">
          <p className="lg:max-w-[75%] text-justify font-bold leading-6">
            The mission of ISCM is to conduct in-depth research and
            problem-solving projects in terms of “Think Globally - Act Locally.”
            The R&D section showcases a commitment to pioneering innovative
            solutions that address contemporary challenges through five key
            mainstreams: Framework Transition Glocal Design Human-Centric
            Approach Tech Solutions Urban System Together, these pillars form
            the backbone of research and development efforts, enabling impactful
            solutions for a better future.
          </p>
        </span>
        <div className="mt-11">
          {mainstream_cate.map((cate, id) => (
            <ResearchCategory
              key={cate.title}
              title={cate.title}
              introduction={cate.introduction}
              categoryLink={cate.cateLink}
              thumb={cate.thumb}
              sdgs={cate.subtitles}
              isReverse={(id + 1) % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
