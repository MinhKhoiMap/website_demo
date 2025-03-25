"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DataTablePagination({
  totalPage,
  currentPage,
}: {
  totalPage: number;
  currentPage: number;
}) {
  return (
    <div className="flex items-center px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {currentPage} of {totalPage}
        </div>
        <div className="flex items-center space-x-2">
          <Link
            href={{
              query: {
                page: 1,
              },
            }}
          >
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              disabled={currentPage * 1 === 1}
            >
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft />
            </Button>
          </Link>
          <Link
            href={{
              query: {
                page: currentPage - 1 > 0 ? currentPage - 1 : currentPage,
              },
            }}
          >
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              disabled={currentPage * 1 === 1}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft />
            </Button>
          </Link>
          <Link
            href={{
              query: {
                page:
                  currentPage * 1 + 1 <= totalPage
                    ? currentPage * 1 + 1
                    : currentPage,
              },
            }}
          >
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              disabled={currentPage * 1 === totalPage}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight />
            </Button>
          </Link>
          <Link href={{ query: { page: totalPage } }}>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              disabled={currentPage * 1 === totalPage}
            >
              <span className="sr-only">Go to last page</span>
              <ChevronsRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
