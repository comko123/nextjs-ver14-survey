"use client"
import { FC, useRef } from "react"
import { useCertifiedAuth, useCertifiedState } from "@/store/certified"

const SecondAuth: FC<Auth> = ({ title }) => {
  const state = useCertifiedState(state => state)
  const { create_filter } = useCertifiedAuth(state => state)
  const ref = useRef<HTMLInputElement>(null)
  return (
    <>
      {state[title] && (
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
              onClick={() => {
                console.log(ref.current?.value)
                state.second_certified(title)
                create_filter(title)
                //해당익명함수는 useCallback로 최적화를 할 필요가 없음.
              }}
            />
          </article>
        </section>
      )}
    </>
  )
}
export default SecondAuth
