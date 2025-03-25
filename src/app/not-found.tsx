import Link from "next/link";
import "./style.css";

export default function NotFound() {
  return (
    // <html lang="en">
    //   <body className="antialiased">
    <section className="bg-gray-900 w-screen h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#76A9FA]">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <a
            href="#"
            className="inline-flex text-2xl hover:underline text-white bg-primary-600 hover:bg-primary-800 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center focus:ring-primary-900 my-4"
          >
            <Link href="/" locale="en">
              Back to Homepage
            </Link>
          </a>
        </div>
      </div>
    </section>
    //   </body>
    // </html>
  );
}
