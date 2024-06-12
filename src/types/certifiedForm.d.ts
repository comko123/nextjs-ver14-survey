interface Auth {
  title: "email" | "phone"
}

type Ref_Value = string | undefined

type Certified_State = {
  [k in Auth["title"]]: boolean
} & {
  second_certified: (title: Auth["title"]) => void
  create_filter: (title: Auth["title"]) => void
}

type Certified_Parse<str extends "create_filter" | "second_certified"> = Omit<Certified_State, str>

interface second_auth {
  inputStr: Ref_Value
  error: boolean
}

interface click_auth extends Auth {
  ref: RefObject<HTMLInputElement>
}

interface input_error {
  condition: boolean
}
