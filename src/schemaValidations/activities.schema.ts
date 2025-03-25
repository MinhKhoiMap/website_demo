import z from "zod";
import { PageHeaderSchema } from "./pageHeader.schema";

export const ActivitiesSchema = z.object({
  title: z.string(),
  image: z.string().startsWith("http"),
  flipbook: z.boolean(),
  flipbook_page: z
    .array(
      z.object({
        flipbook_page_front: z.string().startsWith("http"),
        flipbook_page_back: z.string().startsWith("http"),
      })
    )
    .optional(),
  flipbook_width: z.number().optional(),
  flipbook_height: z.number().optional(),
  content: z.string().nullable(),
});

export type ActivitiesType = z.TypeOf<typeof ActivitiesSchema>;

export const ActivitiesCardSchema = z.object({
  title: z.string(),
  image: z.string().startsWith("http"),
  draft: z.boolean().default(false),
  weight: z.number().nullable(),
  id: z.string(),
});

export type ActivitiesCardType = z.TypeOf<typeof ActivitiesCardSchema>;

export const ActivitiesListResSchema = z.object({
  data: z.array(ActivitiesCardSchema),
  headerPageInfo: PageHeaderSchema,
  totalPage: z.number(),
  message: z.string(),
});

export type ActivitiesListResType = z.TypeOf<typeof ActivitiesListResSchema>;

export const ActivitiesResSchema = z.object({
  data: ActivitiesSchema,
  headerPageInfo: PageHeaderSchema,
  message: z.string(),
});

export type ActivitiesResType = z.TypeOf<typeof ActivitiesResSchema>;
