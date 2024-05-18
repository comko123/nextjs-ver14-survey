interface data {
  text: "email" | "password_confirm" | "password" | "phone_number"
  type: string
}
type form_object = { [k in data["text"]]: string }
