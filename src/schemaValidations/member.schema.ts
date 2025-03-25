import z from "zod";

export const MemberMetadata = z.object({
  name: z.string(),
  title: z.string(),
  image: z.string().startsWith("http"),
  interest: z.array(z.string()).nullable().default(null),
  bio: z.string(),
  contact: z
    .array(
      z.object({
        icon: z.string(),
        link: z.string(),
      })
    )
    .nullable()
    .default(null),
  draft: z.boolean(),
});

export type MemberMetadataType = z.TypeOf<typeof MemberMetadata>;

export const MemberSchema = z
  .object({
    metadata: MemberMetadata,
    detail: z.string(),
  })
  .describe("metadata");

export type MemberType = z.TypeOf<typeof MemberSchema>;

export const MemberResSchema = z.object({
  data: MemberSchema,
  message: z.string(),
});

export type MemberResType = z.TypeOf<typeof MemberResSchema>;

export const MemberCardSchema = z.object({
  name: z.string(),
  title: z.string(),
  order: z.number().default(-1),
  draft: z.boolean().default(false),
  image: z.string().startsWith("http"),
  id: z.string(),
});

export type MemberCardType = z.TypeOf<typeof MemberCardSchema>;

export const MemberListResSchema = z.object({
  data: z.array(MemberCardSchema),
  totalPage: z.number(),
  message: z.string(),
});

export type MemberListResType = z.TypeOf<typeof MemberListResSchema>;
