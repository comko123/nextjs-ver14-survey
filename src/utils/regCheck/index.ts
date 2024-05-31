export const reg_check = (type: Auth["title"], info: Ref_Value) => {
  const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
  const phone = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/
  if (type === "phone") return phone.test(info as string)
  else return email.test(info as string)
}
