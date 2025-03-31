"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import "./style.scss";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { barlow, ibm_plex_sans } from "@/app/fontDeclare";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

// const studioCategories = [
//   {
//     title: "UEH-MAKERSPACE",
//     introduction: `UEH - MakerSpace là tổ hợp không gian sáng tạo trực thuộc Trường Công nghệ và Thiết kế - Đại học Kinh tế TP. Hồ Chí Minh. UEH Makerspace tự hào là nơi hiện thực hóa những ý tưởng đang nằm trên trang giấy cùng hàng loạt máy móc hiện đại, những trainers có chuyên môn, và sức sáng tạo mạnh mẽ của bạn - những makers tương lai.`,
//     subtitles: [
//       <div key={"addr"} className="flex gap-[6px]">
//         <div>
//           <FontAwesomeIcon icon={faLocationDot} color="#971919" />
//         </div>
//         <div>
//           <p className="!leading-4 text-sm">
//             UEH Cơ sở B <br />
//             279 Nguyễn Tri Phương, Phường 5, Quận 10, TP. HCM
//           </p>
//         </div>
//       </div>,
//     ],
//     thumb: "/images/studiolab/makerspace.png",
//     categoryLink: "",
//   },
//   {
//     title: "LIVING LAB",
//     introduction:
//       "Living Lab hay còn gọi là Phòng Thí Nghiệm Sống là một hệ sinh thái đổi mới mở được vận hành với định hướng lấy người sử dụng làm trung tâm, tận dụng tối ưu sự kết nối các bên liên quan, với yếu tố cốt lõi là tích hợp nghiên cứu – giáo dục và đổi mới sáng tạo nhằm giải quyết các vấn đề thực tế từ cuộc sống.",
//     subtitles: [
//       <div key={"addrr"} className="flex gap-[6px]">
//         <div>
//           <FontAwesomeIcon icon={faLocationDot} color="#971919" />
//         </div>
//         <div>
//           <p className="!leading-4 text-sm">
//             UEH Cơ sở V <br />
//             232/6 Võ Thị Sáu, Phường Võ Thị Sáu, Quận 3, TP. HCM
//           </p>
//         </div>
//       </div>,
//     ],
//     thumb: "/images/studiolab/livinglab.png",
//     categoryLink: "https://gogreen.ueh.edu.vn/living-lab-uehgc",
//   },
//   {
//     title: "GALLERY",
//     introduction:
//       "Hướng tới kiến tạo cộng đồng truyền cảm hứng nghệ thuật, UEH Gallery được xây dựng như một khu vực diễn ra các triển lãm tác phẩm nghệ thuật, đặc biệt là các tác phẩm có sự kết hợp và giao thoa giữa công nghệ - nghệ thuật. Bên cạnh đó, Gallery còn thường diễn ra các workshop nghệ thuật, công nghệ, nghiên cứu để phát triển đô thị thông minh và bền vững.",
//     subtitles: [
//       <div key={"gallery"} className="flex gap-[6px]">
//         <div>
//           <FontAwesomeIcon icon={faLocationDot} color="#971919" />
//         </div>
//         <div>
//           <p className="!leading-4 text-sm">
//             UEH Cơ sở V <br />
//             232/6 Võ Thị Sáu, Phường Võ Thị Sáu, Quận 3, TP. HCM
//           </p>
//         </div>
//       </div>,
//     ],
//     thumb: "/images/studiolab/gallery.png",
//     categoryLink: "",
//   },
// ];

const EventItem = ({
  title,
  time,
  href,
  description,
}: {
  title: string;
  time: string;
  href: string;
  description?: string;
}) => {
  return (
    <Link href={href}>
      <div className="border-b border-[#959595] mt-[15px]">
        <h3 className="font-bold text-[17px] mb-0">{title}</h3>
        <p className="text-sm mb-1">{time}</p>
        {description && <p className="text-sm">{description}</p>}
      </div>
    </Link>
  );
};

export default function Main() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const i18n = useTranslations();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <section className="pt-[88px] overlay w-full h-fit flex justify-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            loop: true,
          }}
          setApi={setApi}
          className="w-fit relative"
        >
          <CarouselContent className="h-[512px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="p-0">
                <figure className="text-4xl font-semibold w-full h-full">
                  <Image
                    src={"/images/page_header/image1.png"}
                    className="w-full h-full object-cover"
                    alt=""
                    width={1200}
                    height={400}
                    quality={90}
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 justify-between">
            {api?.scrollSnapList().map((_, id) => (
              <div
                key={id}
                className={`indicator h-[9px] rounded-full cursor-pointer ${
                  current == id + 1 && "active"
                }`}
                onClick={() => api.scrollTo(id)}
              ></div>
            ))}
          </div>
        </Carousel>
      </section>
      <div className="container pt-[60px] pb-20">
        <div className="row">
          <div className="col-5">
            <h1 className={`${ibm_plex_sans.className} text-4xl`}>
              INTEGRATED STUDIOLAB
            </h1>
            <p
              className={`text-sm ${barlow.className} leading-4 text-justify mt-3`}
            >
              ISCM tự hào khi sở hữu hệ thống cơ sở vật chất hiện đại, thông
              minh, tích hợp đa chức năng, và hơn hết là một nơi kết nối các bên
              (trường đại học, đơn vị quản lý Nhà nước, tổ chức nghiên cứu)
              chung tay trong việc giải quyết các vấn đề đô thị hướng tới thành
              phố thông minh và tương lai bền vững.
            </p>
          </div>
        </div>
        <div className="row pb-11">
          <div className="col-3">
            <Link
              href="https://smarttech.ueh.edu.vn/"
              className="text-base leading-3 underline italic text-[#1D6D60]"
              target="_blank"
            >
              Tìm hiểu thêm về cơ sở vật chất của Đại học UEH Đa ngành và Bền
              vững
            </Link>
          </div>
        </div>
        <Separator className="bg-[#971919] h-[2.5px]" />
        <div className="mt-6">
          {/* Design Studio */}
          <div className="row justify-between mb-[78px]">
            <div className="col-5">
              <div className="flex flex-col">
                <h2
                  className={`text-4xl ${ibm_plex_sans.className} leading-[46.8px]`}
                >
                  DESIGN STUDIO
                </h2>
                <div>
                  <div className="flex gap-[6px]">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} color="#971919" />
                    </div>
                    <div>
                      <p className="!leading-4 text-sm">
                        UEH Cơ sở B <br />
                        279 Nguyễn Tri Phương, Phường 5, Quận 10, TP. HCM
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[6px]">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} color="#971919" />
                    </div>
                    <div>
                      <p className="!leading-4 text-sm">
                        UEH Cơ sở V <br />
                        232/6 Võ Thị Sáu, Phường Võ Thị Sáu, Quận 3, TP. HCM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm text-justify font-normal mb-4 mt-6">
                Lorem ipsum dolor sit amet consectetur. Velit donec pellentesque
                egestas rutrum dictumst congue sem in. Sapien pulvinar augue dui
                est. Arcu quis in tortor congue cursus. Vitae in natoque amet
                non. Consectetur scelerisque adipiscing nunc leo. Ultrices elit
                sed lorem vitae lectus. In nisl tortor aenean venenatis nisi
                enim imperdiet. Amet nulla eget etiam tincidunt sagittis neque.
                Nunc bibendum nunc turpis condimentum bibendum at sit porttitor
                et.
              </h3>

              <Link href={"studiolab/design_studio"}>
                <Button
                  variant="outline"
                  className="!uppercase border-[2px] btn btn-outline-primary"
                >
                  khám phá design studio
                </Button>
              </Link>
            </div>
            <div className="col-6 flex flex-col py-3">
              <figure className="flex-1 w-full h-full mb-0">
                <Image
                  src="/images/studiolab/design_stu.png"
                  alt="DESIGN STUDIO"
                  className="w-full h-full object-cover"
                  width={650}
                  height={200}
                  quality={100}
                />
              </figure>
            </div>
          </div>

          {/* UEH Makerspace */}
          <div className="row justify-between mb-[78px]">
            <div className="col-5 pt-3 border-t-[2.5px] border-[#971919]">
              <div className="flex flex-col">
                <h2
                  className={`text-4xl ${ibm_plex_sans.className} leading-[46.8px]`}
                >
                  UEH-MAKERSPACE
                </h2>
                <div>
                  <div className="flex gap-[6px]">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} color="#971919" />
                    </div>
                    <div>
                      <p className="!leading-4 text-sm">
                        UEH Cơ sở B <br />
                        279 Nguyễn Tri Phương, Phường 5, Quận 10, TP. HCM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm text-justify font-normal mb-4 mt-6">
                UEH - MakerSpace là tổ hợp không gian sáng tạo trực thuộc Trường
                Công nghệ và Thiết kế - Đại học Kinh tế TP. Hồ Chí Minh. UEH
                Makerspace tự hào là nơi hiện thực hóa những ý tưởng đang nằm
                trên trang giấy cùng hàng loạt máy móc hiện đại, những trainers
                có chuyên môn, và sức sáng tạo mạnh mẽ của bạn - những makers
                tương lai.
              </h3>

              <Link href={"studiolab/ueh-makerspace"}>
                <Button
                  variant="outline"
                  className="!uppercase border-[2px] btn btn-outline-primary"
                >
                  khám phá UEH-Makerspace
                </Button>
              </Link>

              <div className="mt-6">
                <EventItem
                  title="Cuộc thi Thiết kế bộ sản phẩm quà tặng thương hiệu UEH"
                  time="2024"
                  href="studiolab/ueh-makerspace"
                />
                <EventItem
                  title="Workshop đầu tiên về Mộc tay được tổ chức tại UEH"
                  time="2023"
                  href="studiolab/ueh-makerspace"
                />
                <EventItem
                  title="Lễ ra mắt UEH - MakerSpace"
                  time="2023"
                  href="studiolab/ueh-makerspace"
                />
              </div>
            </div>
            <div className="col-6 flex flex-col py-3">
              <figure className="flex-1 w-full h-full mb-0">
                <Image
                  src="/images/studiolab/makerspace.png"
                  alt="DESIGN STUDIO"
                  className="w-full h-full object-cover"
                  width={650}
                  height={200}
                  quality={100}
                />
              </figure>
            </div>
          </div>

          {/* Living Lab */}
          <div className="row justify-between mb-[78px]">
            <div className="col-5 pt-3 border-t-[2.5px] border-[#971919]">
              <div className="flex flex-col">
                <h2
                  className={`text-4xl ${ibm_plex_sans.className} leading-[46.8px]`}
                >
                  Living Lab
                </h2>
                <div>
                  <div className="flex gap-[6px]">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} color="#971919" />
                    </div>
                    <div>
                      <p className="!leading-4 text-sm">
                        UEH Cơ sở V <br />
                        232/6 Võ Thị Sáu, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí
                        Minh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm text-justify font-normal mb-4 mt-6">
                Living Lab hay còn gọi là Phòng Thí Nghiệm Sống là một hệ sinh
                thái đổi mới mở được vận hành với định hướng lấy người sử dụng
                làm trung tâm, tận dụng tối ưu sự kết nối các bên liên quan, với
                yếu tố cốt lõi là tích hợp nghiên cứu – giáo dục và đổi mới sáng
                tạo nhằm giải quyết các vấn đề thực tế từ cuộc sống.
              </h3>

              <Link href={"studiolab/ueh-makerspace"}>
                <Button
                  variant="outline"
                  className="!uppercase border-[2px] btn btn-outline-primary"
                >
                  {i18n("learn_more")}
                </Button>
              </Link>

              <div className="mt-7">
                <EventItem
                  title="No Single-use plastic campaign"
                  time="2024 - nay"
                  href="studiolab/ueh-makerspace"
                  description="UEH Green Campus - Living Lab cơ sở Võ Thị Sáu thực hiện chiến dịch “Towards No Single-Use Plastic Future” nhằm hướng đến mục tiêu tiết giảm và tiến tới không sử dụng nhựa dùng một lần."
                />
              </div>
            </div>
            <div className="col-6 flex flex-col py-3">
              <figure className="flex-1 w-full h-full mb-0">
                <Image
                  src="/images/studiolab/livinglab.png"
                  alt="DESIGN STUDIO"
                  className="w-full h-full object-cover"
                  width={650}
                  height={200}
                  quality={100}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div
        className="other-system__container flex items-center justify-center py-28"
        style={{
          backgroundImage: "url(/images/studiolab/footer.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="px-16 pt-4 pb-20 bg-black/75 backdrop-blur-sm m-auto w-fit">
          <div className="flex items-center flex-col">
            <h2 className="uppercase text-white text-center">
              và nhiều hệ thống khác
            </h2>
            <p className="text-center max-w-[698px] text-white mt-3">
              Không chỉ dừng lại ở những hệ thống cơ sở vật chất hiện tại, ISCM
              hứa hẹn sẽ tiếp tục cho ra mắt nhiều không gian công nghệ là nền
              tảng kết nối các bên, cùng nuôi dưỡng những ý tưởng sáng tạo,
              hướng tới đô thị thông minh và bền vững trong tương lai.
            </p>
          </div>
          <div className="flex gap-16 justify-evenly mt-3">
            <div className="bg-white px-[1px]">
              <Image
                src="/images/studiolab/design_cell.png"
                width={250}
                height={200}
                alt="design cell"
                quality="100"
              />
              <div className="py-3">
                <p className="text-center mb-0 text-base">2025</p>
                <h4 className="uppercase text-[#971919] text-center">
                  design cell
                </h4>
              </div>
            </div>
            <div className="bg-white px-[1px]">
              <Image
                src="/images/studiolab/test_bed.png"
                width={250}
                height={200}
                alt="design cell"
                quality="100"
              />
              <div className="py-3">
                <p className="text-center mb-0 text-base">2026</p>
                <h4 className="uppercase text-[#971919] text-center">
                  test bed
                </h4>
              </div>
            </div>
            <div className="bg-white px-[1px]">
              <Image
                src="/images/studiolab/sim_lab.png"
                width={250}
                height={200}
                alt="design cell"
                quality="100"
              />
              <div className="py-3">
                <p className="text-center mb-0 text-base">2027</p>
                <h4 className="uppercase text-[#971919] text-center">
                  sim lab
                </h4>
              </div>
            </div>
            <div className="bg-white px-[1px]">
              <Image
                src="/images/studiolab/meta_lab.png"
                width={250}
                height={200}
                alt="design cell"
                quality="100"
              />
              <div className="py-3">
                <p className="text-center mb-0 text-base">2028</p>
                <h4 className="uppercase text-[#971919] text-center">
                  meta lab
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
