interface Auth {
  title: "email" | "phone"
}

type Certified_State = {
  [k in Auth["title"]]: boolean
} & {
  second_certified: (title: Auth["title"]) => void
  create_filter: (title: Auth["title"]) => void
}
