"use client"
import { FC, useRef } from "react"
import { useCertifiedAuth, useCertifiedState } from "@/store/certified"

const SecondAuth: FC<Auth> = ({ title }) => {
  const state = useCertifiedState(state => state)
  const auth = useCertifiedAuth(state => state)
  const ref = useRef<HTMLInputElement>(null)
  return (
    <>
      {state[title] && (
        <section className="form-auth">
          <input type="number" required ref={ref} className="input-rose peer" />
          <input
            type="button"
            value="auth"
            className="gradient-btn2 btn-peer-event"
            onClick={() => {
              console.log(ref.current?.value)
              state.second_certified(title)
              auth.create_filter(title)
            }}
          />
        </section>
      )}
    </>
  )
}
export default SecondAuth
