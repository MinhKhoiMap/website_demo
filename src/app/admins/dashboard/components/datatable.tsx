import React from "react";
import {
  Table,
  TableBody,
  // TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { DataTableRowActions } from "./datatable-row-actions";
import DataTablePagination from "./datatable-pagination";
import { Separator } from "@radix-ui/react-dropdown-menu";
// import { useDOMParser } from "@/hooks/domParser";

export default function DataTable({
  totalPage,
  children,
  tableHead,
  currentPage,
}: {
  totalPage?: number;
  children: React.JSX.Element[];
  tableHead: string[];
  currentPage: number;
}) {
  return (
    <div className="flex flex-col justify-between h-full pb-2">
      <Table>
        <TableHeader className="sticky top-0 bg-white w-full shadow-md">
          <TableRow>
            <TableHead className="font-bold"></TableHead>
            {tableHead.map((head) => (
              <TableHead className="font-bold" key={head}>
                {head}
              </TableHead>
            ))}
            <TableHead className="font-bold"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
      <div className="flex flex-col gap-6">
        <Separator className="h-[1px] bg-red-500" />
        <DataTablePagination
          totalPage={totalPage || 1}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
