import http from "@/lib/http";
import {
  CreatePostBodyType,
  CreateUpdateResType,
  PostCardType,
  PostListResType,
  PostResType,
  UpdatePostBodyType,
} from "@/schemaValidations/post.schema";

const getPostServices = {
  getList: (
    dirName: "news" | "about" | "event",
    page: number | undefined = undefined,
    lang: string,
    options?: { [key: string]: any }
  ) => {
    return http.get<PostListResType>(
      `/api/${dirName}${lang ? `?lang=${lang}` : ""}${
        page ? `&page=${page}` : ""
      }`,
      { ...options }
    );
  },

  getPost: (
    dirName: "news" | "about" | "event",
    idPost: string | null,
    lang: string
  ) =>
    http.get<PostResType>(
      `/api/${dirName}${idPost !== null ? `/${idPost}` : ""}${
        lang ? `?lang=${lang}` : ""
      }`
    ),
};

const createUpdatePostServices = {
  createPost: (
    dirName: "news" | "event",
    idPost: string,
    lang: string,
    body: CreatePostBodyType
  ) =>
    http.post<CreateUpdateResType>(
      `/api/${dirName}${idPost !== null ? `/${idPost}` : ""}${
        lang ? `?lang=${lang}` : ""
      }`,
      body
    ),

  updatePost: (
    dirName: string,
    idPost: string,
    lang: string,
    body: UpdatePostBodyType
  ) => {
    if (dirName === "news" || dirName === "event") {
      return http.put<CreateUpdateResType>(
        `/api/${dirName}${idPost !== null ? `/${idPost}` : ""}${
          lang ? `?lang=${lang}` : ""
        }`,
        body
      );
    } else {
      throw new Error("Invalid directory");
    }
  },
};

const deletePostServices = {
  delete: (dirName: string, idPost: string, lang: string) => {
    if (dirName === "news" || dirName === "event") {
      return http.delete<{ message: string; data: PostCardType }>(
        `/api/${dirName}/${idPost}${lang ? `?lang=${lang}` : ""}`
      );
    } else {
      throw new Error("Invalid directory");
    }
  },
};

export { getPostServices, createUpdatePostServices, deletePostServices };
