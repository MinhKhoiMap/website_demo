import z from "zod";
import { PageHeaderSchema } from "./pageHeader.schema";

export const PartnerCardSchema = z.object({
  title: z.string(),
  image: z.string().startsWith("http"),
  link: z.string().nullable().default(null),
  weight: z.number(),
  draft: z.boolean(),
  author: z.string().nullable().optional(),
});

export type PartnerCardType = z.TypeOf<typeof PartnerCardSchema>;

export const PartnerListResSchema = z.object({
  data: z.array(PartnerCardSchema),
  headerPageInfo: PageHeaderSchema,
  message: z.string(),
});

export type PartnerListResType = z.TypeOf<typeof PartnerListResSchema>;

export const CreatePartnerBody = z.object({
  title: z.string(),
  image: z.string().transform((imgName) => {
    if (imgName.startsWith("/images")) return imgName;

    return `/images/${imgName}`;
  }),
  link: z.string().nullable().default(null),
  weight: z.number(),
  draft: z.boolean(),
});

export const UpdatePartnerBody = z.object({
  title: z.string().optional(),
  image: z
    .string()
    .transform((imgName) => {
      if (imgName.startsWith("/images")) return imgName;

      return `/images/${imgName}`;
    })
    .optional(),
  link: z.string().nullable().default(null),
  weight: z.number().optional(),
  draft: z.boolean().optional(),
});

export type UpdatePartnerBodyType = z.TypeOf<typeof UpdatePartnerBody>;
