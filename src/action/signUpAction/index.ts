"use server"

import { extenstion } from "@/utils/extensition"

export const sign_up_action = async (_: any, data: FormData) => {
  const schema = {
    email: data.get("email"),
    phone_number: data.get("phone_number"),
    password: data.get("password"),
    password_confirm: data.get("password_confirm")
  }
  const result = extenstion.safeParse(schema)
  console.log(result)
  if (!result.success) {
    console.log(result.error)
    return result.error.flatten()
  } else console.log(result)
}
// prev argument은 사용할 필요가 없어 보이므로 any로 정의
/*
parse - zod의 유효성 검사를 통과하지 못하면 error가 발생한다.
safeParse - zod의 유효성 검사를 통과하지 못해도 error가 발생하지 않는다.
*/
