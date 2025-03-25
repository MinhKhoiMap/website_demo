"use client";

import React from "react";
import RichtextEditor from "../../components/Editor/richtext-editor";
import { UpdatePostBody } from "@/schemaValidations/post.schema";
import { uploadImageService } from "@/services/uploadImage.service";
import { createUpdatePostServices } from "@/services/post.service";
import { toast } from "@/hooks/use-toast";

export default function Editor({
  data,
  locale,
  postID,
}: {
  data: string;
  postID: string;
  locale: string;
}) {
  async function updatePost(imageUploads: File[], content: string) {
    const bodyParse = UpdatePostBody.safeParse({
      content: content,
    });

    if (bodyParse.error) throw new Error(bodyParse.error.message);

    await uploadImageService("news", postID, imageUploads);

    await createUpdatePostServices.updatePost(
      "news",
      postID,
      locale,
      bodyParse.data
    );

    toast({
      title: "Update Post Success",
      duration: 2500,
    });
  }

  return (
    <RichtextEditor
      content={data}
      categories={{ locale, postID, category: "news" }}
      onSubmit={updatePost}
    />
  );
}
