import { z } from "zod"
import validator from "validator"

const z_function =
  (name: string) =>
  (customError: string = "at least 8") =>
    z
      .string({ required_error: `${name} is required` })
      .min(8, customError)
      .trim()
      .toLowerCase()

export const extenstion = z
  .object({
    email: z_function("email")("email to short"),
    phone_number: z_function("phone_number")("recap to phone number")
      .regex(/[+-eㄷ]/gim, "only number")
      .refine(data => validator.isMobilePhone(data, "ko-KR")),
    password: z_function("password")(),
    password_confirm: z_function("password_confirm")()
  })
  .refine(({ password, password_confirm }) => password === password_confirm, {
    path: ["password_confirm"],
    message: "two password should be same"
  })
