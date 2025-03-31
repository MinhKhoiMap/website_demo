import { TableCell, TableRow } from "@/components/ui/table";
import { RequestProps } from "@/types/page.type";
import React from "react";
import { DataTableRowActions } from "../../components/datatable-row-actions";
import { getMemberServices } from "@/services/member.service";
import { useDOMParser } from "@/hooks/domParser";
import DataTable from "../../components/datatable";

export default async function page({ searchParams, params }: RequestProps) {
  const page = (await searchParams).page || 1;

  const {
    payload: { data, totalPage },
  } = await getMemberServices.getList("members", page, "en");

  return (
    <DataTable
      totalPage={totalPage}
      tableHead={["Title", "Course", "Order", "Draft"]}
      currentPage={page}
    >
      {data.map((people, id) => (
        <TableRow key={people.id} className="h-[75px]">
          <TableCell>{6 * (page - 1) + id + 1}.</TableCell>
          <TableCell
            className="flex-1 max-w-[700px] h-fit overflow-hidden"
            title={people.name}
          >
            <p className="line-clamp-1 max-w-[700px]">{people.title}</p>
          </TableCell>
          <TableCell>{useDOMParser(people.title)}</TableCell>
          <TableCell className="capitalize">{String(people.order)}</TableCell>
          <TableCell className="capitalize">{String(people.draft)}</TableCell>
          {/* <TableCell className="flex justify-end">
            <DataTableRowActions />
          </TableCell> */}
        </TableRow>
      ))}
    </DataTable>
  );
}
