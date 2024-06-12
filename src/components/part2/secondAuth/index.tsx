"use client"
import { FC, useRef } from "react"
import useSecondAuth from "@/hooks/useSecondAuth"
import Error from "../error"

const SecondAuth: FC<Auth> = ({ title }) => {
  const ref = useRef<HTMLInputElement>(null)
  const { error, secondFn, name } = useSecondAuth({ title, ref })
  return (
    <>
      {name && (
        <section className="form-auth">
          <article className="flex gap-x-2">
            <input
              required
              ref={ref}
              minLength={5}
              maxLength={5}
              type="number"
              placeholder={`${title}_auth`}
              className="input-rose peer"
            />
            <input
              type="button"
              value="auth"
              className="gradient-btn2 btn-peer-event"
              onClick={secondFn}
            />
          </article>
          <Error condition={error} />
        </section>
      )}
    </>
  )
}
export default SecondAuth
