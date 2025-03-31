import z from "zod";

//  ---------------------------------------------------------------- publications ----------------------------------------------------------------
export const PublicationSchema = z.object({
  id: z.string(),
  title: z.string(),
  link: z.string(),
});

export type PublicationType = z.TypeOf<typeof PublicationSchema>;

export const PublicationRes = z.object({
  message: z.string(),
  data: z.array(
    z.object({
      year: z.number(),
      publications_list: z.array(PublicationSchema),
    })
  ),
});

export type PublicationResType = z.TypeOf<typeof PublicationRes>;

export const CreatePublicationBody = z.object({
  id: z.string(),
  title: z.string(),
  link: z.string(),
});

export type CreatePublicationType = z.TypeOf<typeof CreatePublicationBody>;

export const UpdatePublicationBody = z.object({
  title: z.string().optional(),
  link: z.string().optional(),
  year: z.number().optional(),
});

export type UpdatePublicationType = z.TypeOf<typeof UpdatePublicationBody>;

export const BookSchema = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.string(),
  year: z.number(),
  description: z.string(),
  authors: z.string().array(),
});

export type BookType = z.TypeOf<typeof BookSchema>;

export const BookRes = z.object({
  message: z.string(),
  data: z.array(BookSchema),
});

export type BookResType = z.TypeOf<typeof BookRes>;
