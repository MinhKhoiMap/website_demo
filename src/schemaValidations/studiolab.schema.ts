import z from "zod";

export const CollaborationStudioCard = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.string(),
  date: z.string(),
  location: z.string(),
});

export type CollaborationStudioCardType = z.TypeOf<
  typeof CollaborationStudioCard
>;

export const CollaborationStudioProject = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.string().transform((url) => {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    url = url.startsWith("/") ? url : "/" + url;
    return `${process.env.NEXT_PUBLIC_API_ENDPOINT}${url}`;
  }),
  members: z.string().array(),
  description: z.string(),
  supervisor: z.string().array(),
  date: z.date().nullable(),
  location: z.string(),
  gallery: z
    .string()
    .transform((url) => {
      if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
      }

      url = url.startsWith("/") ? url : "/" + url;
      return `${process.env.NEXT_PUBLIC_API_ENDPOINT}${url}`;
    })
    .array(),
});

export type CollaborationStudioProjectType = z.TypeOf<
  typeof CollaborationStudioProject
>;

export const CollaborationStudioListResSchema = z.object({
  data: z.array(CollaborationStudioCard),
  // headerPageInfo: PageHeaderSchema,
  totalPage: z.number(),
  message: z.string(),
});

export type CollaborationStudioListResType = z.TypeOf<
  typeof CollaborationStudioListResSchema
>;

export const CollaborationStudioProjectResSchema = z.object({
  data: CollaborationStudioProject,
  // headerPageInfo: PageHeaderSchema,
  message: z.string(),
});

export type CollaborationStudioProjectResType = z.TypeOf<
  typeof CollaborationStudioProjectResSchema
>;
