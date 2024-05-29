"use client"
import { FC, useRef } from "react"
import { useCertifiedAuth, useCertifiedState } from "@/store/certified"
const FirstAuth: FC<Auth> = ({ title }) => {
  const state = useCertifiedState(state => state)
  const auth = useCertifiedAuth(state => state)
  const ref = useRef<HTMLInputElement>(null)
  return (
    <section className="form-auth relative">
      <input type={title} placeholder={title} required ref={ref} className="input-rose peer" />
      <input
        type="button"
        value={title}
        placeholder={title}
        className="gradient-btn2 btn-peer-event"
        onClick={() => {
          console.log(ref.current?.value)
          state.second_certified(title)
        }}
      />
      {auth[title] && <div className="absolute -bottom-1 -left-2 w-[102%] h-12 opacity-0" />}
      {/*  모든 인증 완료후 input의 수정을 막기위해 생성되는 filter box  */}
    </section>
  )
}
export default FirstAuth
