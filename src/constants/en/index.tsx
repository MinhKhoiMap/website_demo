import { MenuType } from "@/types/menu.type";

export const address = "232/6 Vo Thi Sau Str, D.3, Ho Chi Minh City";
export const copyright = "Copyright &copy; 2021 by [ISCM]";
export const ueh_address = "59C Nguyen Dinh Chieu Str, D.3, Ho Chi Minh City";

// Menu
export const mainMenuEn: Array<MenuType> = [
  {
    name: "About",
    url: "/about",
    weight: 1,
  },
  {
    name: "News & Events",
    weight: 2,
    subMenu: [
      {
        name: "ISCM Impactful Life",
        url: "/news",
        weight: 1,
      },
      {
        name: "Evolving Research",
        url: "/evolving_research",
        weight: 2,
      },
      {
        name: "ISCM in the Media",
        url: "/iscm_in_the_media",
        weight: 3,
      },
      {
        name: "Open Admission",
        url: "/open_admission",
        weight: 4,
      },
      {
        name: "Up-coming Events",
        url: "/event",
        weight: 5,
      },
    ],
  },
  {
    name: "Education",
    weight: 3,
    subMenu: [
      {
        name: "Undergraduate",
        weight: 1,
        url: "/course_undergraduate",
      },
      {
        name: "Graduate",
        weight: 2,
        url: "/course_graduate",
      },
      {
        name: "Short Course",
        weight: 3,
        url: "/course_shortcourse",
      },
    ],
  },
  {
    name: "R&D",
    weight: 4,
    url: "research",
  },
  {
    name: "StudioLAB",
    weight: 4,
    url: "/studiolab",
  },
  {
    name: "People",
    weight: 5,
    subMenu: [
      {
        name: "Advisory Board",
        url: "/advisory",
      },
      {
        name: "Members",
        url: "/members",
      },
      {
        name: "Adjunct Professors",
        url: "/adjunctprofessors",
      },
      {
        name: "Glocal Experts",
        url: "/network",
      },
    ],
  },
  {
    name: "Careers",
    url: "https://iscm.notion.site/Job-Board-96512d630e1642698e921c64714594a6",
    weight: 6,
  },
];

export const iscmname = "Institute of Smart City and Management";

// About
export const about = {
  title: "About ISCM",
  image: "/images/about/about-page.jpg",
  content:
    "Founded in September 2020, the Institute of Smart City and Management (ISCM) is a part of the College of Technology and Design, University of Economics Ho Chi Minh City (UEH University). Aspiring to develop communal efforts to improve the smartness, resilience, and sustainability of the society, ISCM has actively marked the way in improving the quality of urban life through international integrated education activities, and practical problem-solving projects.",
};

// Event
export const event = {
  title: "News & Events",
};

// Success story
export const success_story = {
  bg_image: "/images/backgrounds/success-story-1.jpg",
  content:
    "At ISCM, Smart City is not about the destination, it is about a lifelong journey. From our perspective, cities are considered organisms full of ceaseless activities. In these activities, urban problems may emerge. To effectively solve these problems, we must prioritize them, allocate our limited assets, and apply technology to create smart solutions. Smart is not only about applying advanced technology, but it also integrates all efficient resources as sustainable as possible. Within our Smart City, decisions are human-centric, and the unity of universities, organizations, government,  stakeholders, and communities create a co-creative culture. This, hereby, leads this organism to be more lively, a place for all people, leaving no one behind. </br> </br> We are shaping the unknown future by our main fields of Smart Planning, Smart Design, Smart Management, Smart Transportation, and Integrated Application. We warmly welcome you to join our extensive network, be inspired, and inspire the world by our innovation, ambition, and creativity. </br> </br> Dr. Tu Anh Trinh <br /> Director of Institute of Smart City and Management ",
};
