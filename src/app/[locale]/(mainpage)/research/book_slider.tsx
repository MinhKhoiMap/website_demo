"use client";

import { BookType } from "@/schemaValidations/research.schema";
import Image from "next/image";
import Link from "next/link";

export default function BookSlider({ books }: { books: BookType[] }) {
  return (
    <div className="row h-full flex-nowrap">
      {books.map((book) => (
        <Link
          href={"/research/book/" + book.id}
          className="h-full col-12 col-md-4 p-2 mr-2 card !flex flex-col"
          key={book.id}
        >
          <figure className="w-full h-2/3 flex-1">
            <Image
              src={book.thumbnail}
              className="w-full h-full object-contain"
              alt={book.title}
              width={120}
              height={200}
            />
          </figure>
          <div className="">
            <p className="font-bold text-lg text-ellipsis">{book.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
