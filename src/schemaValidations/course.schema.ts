import z from "zod";
import { PageHeaderSchema } from "./pageHeader.schema";

export const CourseSchema = z.object({
  title: z.string(),
  date: z.date(),
  image: z.string(),
  duration: z.string(),
  courseStructure: z
    .array(
      z.object({
        years: z.string(),
        image: z.string(),
      })
    )
    .optional(),
  content: z.string(),
  dualDegree: z.string().optional(),
});

export type CourseType = z.TypeOf<typeof CourseSchema>;

export const CourseCardSchema = z.object({
  title: z.string(),
  draft: z.boolean(),
  image: z.string(),
  weight: z.number().default(0),
  chance: z.string().optional(),
  id: z.string(),
});

export type CourseCardType = z.TypeOf<typeof CourseCardSchema>;

export const CourseListResSchema = z.object({
  data: z.array(CourseCardSchema),
  headerPageInfo: PageHeaderSchema,
  totalPage: z.number(),
  message: z.string(),
});

export type CourseListResType = z.TypeOf<typeof CourseListResSchema>;

export const CourseResSchema = z.object({
  data: CourseSchema.strict(),
  headerPageInfo: PageHeaderSchema,
  message: z.string(),
});

export type CourseResType = z.TypeOf<typeof CourseResSchema>;
