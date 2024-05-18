import { z } from "zod"
export const extenstion = z
  .object({
    email: z
      .string({ required_error: "email is required" })
      .min(8, "email to short")
      .trim()
      .toLowerCase(),
    phone_number: z
      .string({ required_error: "phone_number is required" })
      .min(8, "recap to phone number")
      .regex(/[+-eㄷ]/gim, "only number"),
    password: z
      .string({ required_error: "password is required" })
      .min(8, "at least 8")
      .trim()
      .toLowerCase(),
    password_confirm: z
      .string({ required_error: "password_confirm is required" })
      .min(8, "at least 8")
      .trim()
      .toLowerCase()
  })
  .refine(({ password, password_confirm }) => password === password_confirm, {
    path: ["password_confirm"],
    message: "two password should be same"
  })
