"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { acceptPendingPost } from "@/services/post.service";
import { CircleCheckBigIcon } from "lucide-react";
import React from "react";

export default function AcceptPendingPost({ idPost }: { idPost: string }) {
  async function handleAcceptPost() {
    try {
      await acceptPendingPost("en", idPost, "news", {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3MmI0YzM0MC1lODA5LTQ2NzMtOGQwNy1jNThiZGU0OTNjZWUiLCJ0b2tlblR5cGUiOiJzZXNzaW9uVG9rZW4iLCJpYXQiOjE3NDE5NzI5NTgsImV4cCI6MTc0NDU2NDk1OH0.QsrzFaUgxsak8XRJM9b4xEX6ngmD5b85rnyu8TRIKMA",
      });

      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleAcceptPost}>
      <CircleCheckBigIcon /> Accept
    </DropdownMenuItem>
  );
}
