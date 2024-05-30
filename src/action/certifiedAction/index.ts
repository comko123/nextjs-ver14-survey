"use server"
export const certified_action = async (data: FormData) => {
  await new Promise(res => setTimeout(res, 3000))
  //useFormState가 제대로 작동하는지 확인
  console.log(data)
}
