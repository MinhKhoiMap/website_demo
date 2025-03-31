import { TableCell, TableRow } from "@/components/ui/table";
import { getPostServices } from "@/services/post.service";
import { RequestProps } from "@/types/page.type";
import React from "react";
import { DataTableRowActions } from "../components/datatable-row-actions";
import DataTable from "../components/datatable";
import ErrorComp from "../components/error";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ArrowDownToDot, ArrowUpFromDot } from "lucide-react";

export default async function page({ searchParams, params }: RequestProps) {
  const page = (await searchParams).page || 1;
  const lang = (await params).locale;

  try {
    const {
      payload: { data, totalPage },
    } = await getPostServices.getList("event", page, "en");

    return (
      <DataTable
        totalPage={totalPage}
        tableHead={["Title", "Publish Date", "Draft"]}
        currentPage={page}
      >
        {data.map((post, id) => (
          <TableRow key={post.id} className="h-[75px]">
            <TableCell>{6 * (page - 1) + id + 1}.</TableCell>
            <TableCell
              className="flex-1 max-w-[700px] h-fit overflow-hidden"
              title={post.title}
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
                category="event"
                locale={lang}
                isDraft={post.draft}
                customActions={[
                  <DropdownMenuItem className="cursor-pointer" key="move up">
                    <ArrowUpFromDot /> Move Up
                  </DropdownMenuItem>,
                  <DropdownMenuItem className="cursor-pointer" key="move down">
                    <ArrowDownToDot /> Move Down
                  </DropdownMenuItem>,
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
    );
  } catch (error) {
    console.log(error);
    return <ErrorComp />;
  }
}
