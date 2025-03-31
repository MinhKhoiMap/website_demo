import { RequestProps } from "@/types/page.type";
import ErrorComp from "./components/error";
import { getPendingPost } from "@/services/post.service";
import DataTable from "./components/datatable";
import { TableCell, TableRow } from "@/components/ui/table";
import { DataTableRowActions } from "./components/datatable-row-actions";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import AcceptPendingPost from "./accpetPendingPost";

export default async function page({ params }: RequestProps) {
  const lang = (await params).locale;
  const page = 1;
  console.log(lang);

  try {
    const {
      payload: { data },
    } = await getPendingPost.getList("en", {
      headers: {
        // authorization: cookieStorage.get("sessionToken")?.value,
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3MmI0YzM0MC1lODA5LTQ2NzMtOGQwNy1jNThiZGU0OTNjZWUiLCJ0b2tlblR5cGUiOiJzZXNzaW9uVG9rZW4iLCJpYXQiOjE3NDE5NzI5NTgsImV4cCI6MTc0NDU2NDk1OH0.QsrzFaUgxsak8XRJM9b4xEX6ngmD5b85rnyu8TRIKMA",
      },
    });

    return (
      <DataTable
        totalPage={1}
        tableHead={["Title", "Publish Date", "Draft", "Author", "Categories"]}
        currentPage={page}
      >
        {data.map((post, id) => (
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
            <TableCell className="capitalize">{post.author}</TableCell>
            <TableCell className="capitalize">
              <div className="flex gap-1">
                {post.categories.map((cate) => (
                  <Badge variant="default" key={cate}>
                    {cate}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell className="flex justify-end">
              <DataTableRowActions
                id={post.id}
                category="news"
                locale={lang}
                isDraft={post.draft}
                customEditLink="/pending"
                customActions={[
                  <AcceptPendingPost key="accept" idPost={post.id} />,
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
    );
  } catch (error) {
    console.log(error, "wtf");
    return <p>afasdf</p>
  }
}
