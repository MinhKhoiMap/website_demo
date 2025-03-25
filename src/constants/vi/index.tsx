import { MenuType } from "@/types/menu.type";

export const address = "232/6 Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh";
export const copyright = "Bản Quyền của [ISCM](https://iscm.ueh.edu.vn) 2021";
export const ueh_address = "59C Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh";

export const mainMenuVi: Array<MenuType> = [
  {
    name: "Giới thiệu",
    url: "/about",
    weight: 1,
  },
  {
    name: "Tin & Sự kiện",
    weight: 2,
    subMenu: [
      {
        name: "Cuộc sống ISCM",
        url: "/news",
        weight: 1,
      },
      {
        name: "Góc nhìn chuyên gia",
        url: "/evolving_research",
        weight: 2,
      },
      {
        name: "Báo chí nói gì về ISCM",
        url: "/voice_from_public",
        weight: 3,
      },
      {
        name: "Tuyển sinh",
        url: "/open_admission",
        weight: 4,
      },

      {
        name: "Sự kiện",
        url: "/event",
        weight: 5,
      },
    ],
  },
  {
    name: "Giáo dục",
    weight: 3,
    subMenu: [
      {
        name: "Đại học",
        weight: 1,
        url: "/course_undergraduate",
      },
      {
        name: "Sau đại học",
        weight: 2,
        url: "/course_graduate",
      },
      {
        name: "Khóa học ngắn hạn",
        weight: 3,
        url: "/course_shortcourse",
      },
    ],
  },
  {
    name: "R&D",
    weight: 4,
    subMenu: [
      {
        name: "Nghiên cứu",
        weight: 1,
        url: "/research",
      },
      {
        name: "Cuộc thi",
        weight: 2,
        url: "/competition",
      },
      {
        name: "Các hoạt động khác",
        weight: 3,
        url: "/activities",
      },
    ],
  },
  {
    name: "StudioLAB",
    weight: 4,
    url: "/studiolab",
  },
  {
    name: "Nhân sự",
    weight: 5,
    subMenu: [
      {
        name: "Ban cố vấn",
        url: "/advisory",
      },
      {
        name: "Thành viên",
        url: "/members",
      },
      {
        name: "Adjunct Professors",
        url: "/adjunctprofessors",
      },
      {
        name: "Mạng lưới chuyên gia",
        url: "/network",
      },
    ],
  },
  {
    name: "Liên hệ",
    url: "/contact",
    weight: 6,
  },
];

export const iscmname = "Viện Đô thị Thông minh và Quản lý";

// About
export const about = {
  title: "Giới thiệu về ISCM",
  image: "/images/about/about-page.jpg",
  content:
    "Được chính thức thành lập vào Tháng 9 năm 2020, Viện Đô thị Thông minh và Quản lý (ISCM) là Viện nghiên cứu và Giáo dục trực thuộc Trường Công nghệ và Thiết kế, Đại học Kinh tế TP. Hồ Chí Minh (UEH - CTD). ISCM đang tích cực đẩy mạnh các hoạt động giáo dục quốc tế và tích hợp đa ngành, cùng các dự án/đề án giải quyết vấn đề thực tiễn địa phương thông qua tư duy toàn cầu. Đây chính là những nỗ lực để ISCM có thể kiến tạo cộng đồng chung tay phát triển tính thông minh và bền vững của cộng đồng.",
};

// Event
export const event = {
  title: "Tin & Sự kiện",
};

// Success story
export const success_story = {
  bg_image: "/images/backgrounds/success-story-1.jpg",
  content:
    "Ở ISCM, Đô thị Thông minh không phải là một điểm đến, mà là một hành trình liên tục để bảo vệ trục phát triển bền vững của đô thị. Đối với chúng tôi, mỗi vùng, mỗi đô thị đều có bản chất là một thực thể sống. Trong sự chuyển động và phát triển liên tục của chính thực thể đó, các vấn đề sẽ xuất hiện, làm mất đi tính cân bằng và bền vững vốn có. Ở Thành phố Thông minh của chúng tôi, các vấn đề này được giải quyết không chỉ qua công nghệ, mà còn qua việc sử dụng các nguồn lực một cách bền vững, các quyết định lấy con người làm trung tâm, và sự đoàn kết của các đại học, tổ chức, chính phủ, các bên liên quan, và cộng đồng để kiến tạo một văn hóa đồng sáng tạo. Chính điều này sẽ giúp cho thực thể sống này trở nên sống động hơn, trở thành một nơi dành cho tất cả mọi người, không để một ai bị bỏ lại phía sau. ISCM, với sứ mệnh về giáo dục và nghiên cứu trong các lĩnh vực Quy hoạch Thông minh, Thiết kế Thông minh, Quản lý Thông Minh, Giao thông Thông minh, và Ứng dụng tích hợp, đã đang và sẽ luôn hướng tới phát triển các vùng xanh và bền vững trong tương lai. ISCM được truyền cảm hứng, và là một cộng đồng truyền cảm hứng với sự đổi mới, sáng tạo, và hoài bão cho một hành trình cống hiến cho Đô thị Bền vững không hồi kết. TS. Trịnh Tú Anh <br /> Viện Trưởng Viện Đô thị Thông minh và Quản lý",
};
