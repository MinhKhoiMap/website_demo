import { TableCell, TableRow } from "@/components/ui/table";
import { getPostServices } from "@/services/post.service";
import { RequestProps } from "@/types/page.type";
import React from "react";
import { DataTableRowActions } from "../components/datatable-row-actions";
import DataTable from "../components/datatable";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import ErrorComp from "../components/error";
import { ArrowDownToDot, ArrowUpFromDot } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default async function page({ searchParams, params }: RequestProps) {
  const page = (await searchParams).page || 1;
  const lang = (await params).locale;

  try {
    const cookieStorage = await cookies();

    const {
      payload: { data, totalPage },
    } = await getPostServices.getList("news", page, "en", {
      headers: {
        Authorization: cookieStorage.get("sessionToken")?.value,
      },
    });

    return (
      <DataTable
        totalPage={totalPage}
        tableHead={["Title", "Publish Date", "Draft"]}
        currentPage={page}
        children={data.map((post, id) => (
          <TableRow key={post.id} className="h-[75px]">
            <TableCell>{6 * (page - 1) + id + 1}.</TableCell>
            <TableCell
              className="flex-1 max-w-[700px] h-fit overflow-hidden"
              title={`${post.title}\n[${post.id}]`}
            >
              <p className="line-clamp-1 max-w-[700px]">{post.title}</p>
            </TableCell>
            <TableCell>
              {new Date(post.publishDate).toLocaleDateString()}
            </TableCell>
            <TableCell className="capitalize">{String(post.draft)}</TableCell>
            <TableCell className="flex justify-end">
              <DataTableRowActions
                id={post.id}
                category="news"
                locale={lang}
                isDraft={post.draft}
                customActions={[
                  <DropdownMenuItem className="cursor-pointer">
                    <ArrowUpFromDot /> Move Up
                  </DropdownMenuItem>,
                  <DropdownMenuItem className="cursor-pointer">
                    <ArrowDownToDot /> Move Down
                  </DropdownMenuItem>,
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      />
    );
  } catch (error) {
    console.log(error);
    return <ErrorComp />;
  }
}
