import "./Button.css";

export default function Button({
  icon,
  title,
  link,
}: {
  icon: string;
  title: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="direct_link d-block position-relative w-100 px-4 py-2 bg-white text-black rounded-pill overflow-hidden
       border border-white mb-4 transition-all"
    >
      <div
        className="icon position-absolute top-50 start-0 translate-middle"
        style={{
          maskImage: `url("${icon}")`,
          width: "2rem",
          height: "2rem",
          backgroundColor: "currentcolor",
        }}
      ></div>

      <p className="text-center mb-0" style={{ color: "currentcolor" }}>
        {title}
      </p>
    </a>
  );
}
