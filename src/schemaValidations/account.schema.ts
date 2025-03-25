import { z } from "zod";

export const LoginBodySchema = z
  .object({
    username: z.string().email(),
    password: z.string().min(8),
  })
  .strict();

export type LoginBodyType = z.TypeOf<typeof LoginBodySchema>;

export const UserSchema = z.object({
  id: z.string(),
  username: z.string().email(),
  token: z.string(),
});

export type UserType = z.TypeOf<typeof UserSchema>;

export const AccountRes = z
  .object({
    data: z.object({
      token: z.string(),
      expiresAt: z.date(),
      account: z.object({
        id: z.string(),
        username: z.string().email(),
      }),
    }),
    message: z.string(),
  })
  .strict();

export type AccountResType = z.TypeOf<typeof AccountRes>;

// export const UpdateProfileBody = z.object({
//   name: z.string().trim().min(2).max(256),
// });

// export type UpdateProfileBodyType = z.TypeOf<typeof UpdateProfileBody>;
