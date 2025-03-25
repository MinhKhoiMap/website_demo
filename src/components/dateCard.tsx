import { DateFormat, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";

export default async function DateCard({
  id,
  thumb,
  publishDate,
  title,
  basePath,
}: {
  id: string;
  thumb: string;
  publishDate: string;
  title: string;
  basePath: string;
}) {
  const dateFormat: DateFormat = formatDate(publishDate);

  return (
    <Link
      href={{
        pathname: `${basePath}/${id}`,
      }}
      className="card border-0 rounded-0 !w-full"
      title={title}
      style={{ cursor: "pointer" }}
    >
      <div className="card-img position-relative" style={{ height: "200px" }}>
        <Image
          className="card-img-top rounded-0 w-full h-full"
          loading="lazy"
          style={{ objectFit: "cover" }}
          width={350}
          height={200}
          alt="af"
          src={thumb}
        />

        <div className="card-date">
          <span>{dateFormat.day}</span>
          <br />
          {dateFormat.month}
        </div>
      </div>
      <div className="card-body" style={{ height: "130px" }}>
        <div style={{ height: "50px" }}>
          <h4 className="card-title" style={{ maxHeight: "100%" }}>
            <p
              style={{
                height: "100%",
                fontSize: "18px",
                color: "rgba(41, 0, 2, 0.534)",
                fontFamily: "Barlow, sans-serif",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                wordBreak: "keep-all",
                textDecoration: "none",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </p>
          </h4>
        </div>
      </div>
    </Link>
  );
}
