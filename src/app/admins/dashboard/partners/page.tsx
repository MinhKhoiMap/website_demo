import { getPartnerServices } from "@/services/partner.service";
import { RequestProps } from "@/types/page.type";
import React from "react";
import DataTable from "../components/datatable";
import { TableCell, TableRow } from "@/components/ui/table";
// import { DataTableRowActions } from "../components/datatable-row-actions";
import Link from "next/link";

export default async function page({ searchParams, params }: RequestProps) {
  const locale = (await params).locale;
  const page = (await searchParams).page || 1;

  const {
    payload: { data },
  } = await getPartnerServices.getList(page, locale);

  return (
    <DataTable tableHead={["Name", "Link", "Draft"]} currentPage={page}>
      {data.map((partner, id) => (
        <TableRow key={partner.title} className="h-[75px]">
          <TableCell>{6 * (page - 1) + id + 1}.</TableCell>
          <TableCell
            className="flex-1 max-w-[700px] h-fit overflow-hidden"
            title={partner.title}
          >
            <p className="line-clamp-1 max-w-[700px]">{partner.title}</p>
          </TableCell>
          <TableCell>
            {partner.link ? (
              <Link
                href={partner.link}
                target="_blank"
                className="hover:underline hover:text-[#0D52A9] transition-colors duration-150"
              >
                {partner.link}
              </Link>
            ) : (
              partner.link
            )}
          </TableCell>
          <TableCell className="capitalize">{String(partner.draft)}</TableCell>
          {/* <TableCell className="flex justify-end">
            <DataTableRowAction  />
          </TableCell> */}
        </TableRow>
      ))}
    </DataTable>
  );
}
