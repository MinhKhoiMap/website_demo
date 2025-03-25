"use client";

import { Eye, EyeOff, MoreHorizontal, Pen, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import {
  createUpdatePostServices,
  deletePostServices,
} from "@/services/post.service";
import { toast } from "@/hooks/use-toast";

export function DataTableRowActions({
  id,
  category,
  locale,
  isDraft,
  customActions,
}: {
  id: string;
  category: string;
  locale: string;
  isDraft: boolean;
  customActions: React.JSX.Element[];
}) {
  const router = useRouter();
  const currentPathname = usePathname();

  async function handleDelete() {
    try {
      await deletePostServices.delete(category, id, locale);

      router.refresh();

      toast({
        title: "Delete Post Success",
        duration: 2500,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function handleHide() {
    try {
      await createUpdatePostServices.updatePost(category, id, locale, {
        metadata: { draft: !isDraft },
      });

      router.refresh();

      toast({
        title: "Hide Post Success",
        duration: 2500,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push(`${currentPathname}/${id}`)}
        >
          <Pen /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={handleHide}>
          {!isDraft ? (
            <>
              <EyeOff /> Hide
            </>
          ) : (
            <>
              <Eye /> Show
            </>
          )}
        </DropdownMenuItem>
        {customActions}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:bg-red-400 cursor-pointer hover:text-white"
          onClick={handleDelete}
        >
          <Trash2 /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
