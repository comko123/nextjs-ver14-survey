"use client"
import { FC, useCallback, useRef, useState } from "react"
import { useCertifiedAuth, useCertifiedState } from "@/store/certified"
const FirstAuth: FC<Auth> = ({ title }) => {
  const state = useCertifiedState(state => state)
  const auth = useCertifiedAuth(state => state)
  const ref = useRef<HTMLInputElement>(null)
  const [str, setStr] = useState<string | undefined>("")

  const click_auth = useCallback(() => {
    if (str !== ref.current?.value) {
      // 같은메일인 경우 중복 요청(클릭이벤트) 방지
      console.log(ref.current?.value)
      setStr(ref.current?.value)
      if (!state[title]) state.second_certified(title)
    }
  }, [state, str, title])

  return (
    <section className="form-auth relative">
      <article className="flex gap-x-2">
        <input
          ref={ref}
          required
          name={title}
          minLength={7}
          placeholder={title}
          className="input-rose peer"
          type={title === "phone" ? "number" : title}
        />
        <input
          type="button"
          value={title}
          placeholder={title}
          className="gradient-btn2 btn-peer-event"
          onClick={click_auth}
        />
      </article>
      {auth[title] && <span className="text-lime-400 -mb-4 mt-1 ml-2">인증 완료!!</span>}
      {auth[title] && <div className="absolute -bottom-1 -left-2 w-[102%] h-12 opacity-0" />}
      {/*  모든 인증 완료후 input의 수정을 막기위해 생성되는 filter box  */}
    </section>
  )
}
export default FirstAuth
