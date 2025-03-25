import { z } from "zod";
import { PageHeaderSchema } from "./pageHeader.schema";

export const CompetitionSchema = z.object({
  title: z.string(),
  image: z.string().startsWith("http").optional().nullable(),
  register: z.string().startsWith("http").optional().nullable(),
  linkRegister: z.string(),
  fb: z.string().startsWith("http").optional().nullable(),
  linkFB: z.string().nullable().optional(),
  isLaunch: z.boolean(),
  content: z.string(),
  registrationContent: z.string().default(""),
});

export type CompetitionType = z.TypeOf<typeof CompetitionSchema>;

export const CompetitionCardSchema = z.object({
  title: z.string(),
  image: z.string().startsWith("http"),
  draft: z.boolean().default(false),
  isLaunch: z.boolean(),
  weight: z.number(),
  id: z.string(),
});

export type CompetitionCardType = z.TypeOf<typeof CompetitionCardSchema>;

export const CompetitionListResSchema = z.object({
  data: z.array(CompetitionCardSchema),
  headerPageInfo: PageHeaderSchema,
  totalPage: z.number(),
  message: z.string(),
});

export type CompetitionListResType = z.TypeOf<typeof CompetitionListResSchema>;

export const CompetitionResSchema = z.object({
  data: CompetitionSchema,
  headerPageInfo: PageHeaderSchema,
  message: z.string(),
});

export type CompetitionResType = z.TypeOf<typeof CompetitionResSchema>;
