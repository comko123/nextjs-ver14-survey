"use client"
import { server_action } from "@/action/serverAction"
import { Fragment } from "react"
import SignInput from "../signInput"
import { useFormState } from "react-dom"

const SignForm = () => {
  const [state, action] = useFormState(server_action, null)
  return (
    <form action={action} className="flex flex-col items-center gap-b-4 w-[50%]">
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
            <section className="font-bold ml-1 -mt-2 text-red-600">
              {state?.fieldErrors[item.text]}
            </section>
          </article>
        </Fragment>
      ))}
      <input type="submit" value="submit" className="gradient-btn w-[30%] py-2 mt-2" />
    </form>
  )
}

export default SignForm

/*
useActionState === useFormState
*/
