"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPage }: { totalPage: number }) {
  const searchParams = useSearchParams();
  const currentPathname = usePathname();
  const page: number = Number(searchParams.get("page")) || 1;
  // Array number which are presented in the pagination
  const pagination: Array<number> = [];
  let end;

  if (page + 2 > totalPage) {
    end = totalPage;
  } else {
    if (page + 2 < 5) {
      // This trigger
      end = Math.min(5, totalPage);
    } else {
      end = page + 2;
    }
  }

  let start = Math.max(end - 4, 1);
  for (let i = start; i <= end; i++) pagination.push(i);

  return (
    <ul className="pagination pagination-default mb-4">
      <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
        <Link
          href={{ pathname: currentPathname, query: { page: 1 } }}
          aria-disabled="true"
          aria-label="First"
          className="page-link"
        >
          &laquo;&laquo;
        </Link>
      </li>
      <li className={`page-item ${page - 1 < 1 ? "disabled" : ""}`}>
        <Link
          aria-disabled="true"
          aria-label="Previous"
          className="page-link"
          href={{ pathname: currentPathname, query: { page: page - 1 } }}
        >
          &laquo;
        </Link>
      </li>

      {pagination.map((p) => (
        <li className={`page-item ${p === page ? "active" : ""}`} key={p}>
          <Link
            aria-current="page"
            aria-label={`Page ${p}`}
            className="page-link"
            href={{ pathname: currentPathname, query: { page: p } }}
          >
            {p}
          </Link>
        </li>
      ))}
      <li className={`page-item ${page + 1 > totalPage ? "disabled" : ""}`}>
        <Link
          aria-label="Next"
          className="page-link"
          href={{ pathname: currentPathname, query: { page: +1 } }}
        >
          &raquo;
        </Link>
      </li>
      <li className={`page-item ${page + 1 > totalPage ? "disabled" : ""}`}>
        <Link
          aria-label="Last"
          className="page-link"
          href={{ pathname: currentPathname, query: { page: totalPage } }}
        >
          &raquo;&raquo;
        </Link>
      </li>
    </ul>
  );
}
