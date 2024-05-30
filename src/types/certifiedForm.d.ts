interface Auth {
  title: "email" | "phone"
}

type Certified_State = {
  [k in Auth["title"]]: boolean
} & {
  second_certified: (title: Auth["title"]) => void
  create_filter: (title: Auth["title"]) => void
}

type Certified_Parse<str extends "create_filter" | "second_certified"> = Omit<Certified_State, str>
