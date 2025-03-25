import z from "zod";
import { PageHeaderSchema } from "./pageHeader.schema";

export const MetaDataSchema = z.object({
  id: z.string(),
  title: z.string(),
  publishDate: z.string(),
  draft: z.boolean(),
  thumbnail: z.string().startsWith("http"),
  showImage: z.boolean(),
  author: z.string().readonly(),
  description: z.string(),
});

export type MetaDataType = z.TypeOf<typeof MetaDataSchema>;

export const PostSchema = z
  .object({
    content: z.string(),
    metadata: MetaDataSchema,
  })
  .describe("metadata");

export type PostType = z.TypeOf<typeof PostSchema>;

export const PostResSchema = z.object({
  data: PostSchema.strict(),
  message: z.string(),
});

export type PostResType = z.TypeOf<typeof PostResSchema>;

export const PostCardSchema = z.object({
  title: z.string(),
  publishDate: z.string(),
  draft: z.boolean(),
  thumbnail: z.string(),
  id: z.string(),
});

export type PostCardType = z.TypeOf<typeof PostCardSchema>;

export const PostListResSchema = z.object({
  data: z.array(PostCardSchema),
  totalPage: z.number(),
  message: z.string(),
});

export type PostListResType = z.TypeOf<typeof PostListResSchema>;

export const CreatePostBody = z.object({
  metadata: z.object({
    title: z.string().min(1),
    thumbnail: z.string(),
    draft: z
      .string()
      .transform((value) => value === "true")
      .pipe(z.boolean()),
    publishDate: z.string().default(new Date().toISOString()),
    // category: z.string(),
    sdgs: z.number().array().nonempty().max(3),
    description: z.string().default(""),
  }),
  content: z.string().min(1),
  // imageUploads: z
  //   .any()
  //   .refine((files) => {
  //     for (const file of files)
  //       if (!ACCEPTED_IMAGE_TYPES.includes(file?.type)) return false;
  //   }, "Only .jpg, .jpeg, .png and .webp formats are supported.")
  //   .optional(),
});

export type CreatePostBodyType = z.TypeOf<typeof CreatePostBody>;

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const UpdatePostBody = z.object({
  metadata: z
    .object({
      title: z.string().min(1).optional(),
      thumbnail: z.string().optional(),
      draft: z
        .string()
        .transform((value) => value === "true")
        .pipe(z.boolean())
        .optional(),
      showImage: z
        .string()
        .transform((value) => value === "true")
        .pipe(z.boolean())
        .optional(),
      publishDate: z.string().default(new Date().toISOString()).optional(),
    })
    .optional(),
  content: z.string().min(1).optional(),
  // imageUploads: z
  //   .any()
  //   .refine((files) => {
  //     for (const file of files)
  //       if (!ACCEPTED_IMAGE_TYPES.includes(file?.type)) return false;
  //   }, "Only .jpg, .jpeg, .png and .webp formats are supported.")
  //   .optional(),
});

export type UpdatePostBodyType = z.TypeOf<typeof UpdatePostBody>;

export const PostParamsRequest = z.object({
  title: z.string(),
});

export type PostParamsRequestType = z.TypeOf<typeof PostParamsRequest>;

export const CreateUpdateRes = z.object({
  message: z.string(),
  data: PostSchema,
});

export type CreateUpdateResType = z.TypeOf<typeof CreateUpdateRes>;
