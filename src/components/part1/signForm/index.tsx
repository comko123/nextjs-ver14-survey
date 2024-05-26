"use client"
import { sign_up_action } from "@/action/signUpAction"
import { Fragment } from "react"
import { useFormState } from "react-dom"
import FormBtn from "../formBtn"
import SignInput from "../signInput"

const SignForm = () => {
  const [state, action] = useFormState(sign_up_action, null)
  return (
    <form action={action} className="flex flex-col items-center gap-b-4 w-[50%] *:even:my-3 ">
      {(
        [
          { text: "email", type: "email" },
          { text: "phone_number", type: "number" },
          { text: "password", type: "password" },
          { text: "password_confirm", type: "password" }
        ] as data[]
      ).map(item => (
        <Fragment key={item.text}>
          <article className="w-full flex flex-col my-[0.15rem]">
            <SignInput {...item} />
            <section className="ml-1 -mb-5 text-red-600">{state?.fieldErrors[item.text]}</section>
          </article>
        </Fragment>
      ))}
      <FormBtn />
    </form>
  )
}

export default SignForm

/*
useActionState === useFormState
useFormState 여러번 써보기 => server action과 호환성이 좋은듯 하다.
*/
