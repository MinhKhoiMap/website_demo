import z from "zod";

export const PageHeaderSchema = z.object({
  title: z.string(),
  description: z.string(),
  bg_image: z.string(),
});

export type PageHeaderType = z.TypeOf<typeof PageHeaderSchema>;
