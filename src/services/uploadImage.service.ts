import http from "@/lib/http";

const uploadImageService = async (
  category: string,
  idPost: string,
  fileList: File[]
) => {
  const files = new FormData();

  for await (const file of fileList) {
    files.append("files", file as Blob);
  }

  return http.post<{
    message: string;
    path: string;
  }>(`/api/upload/${category}/${idPost}`, files);
};

export { uploadImageService };
