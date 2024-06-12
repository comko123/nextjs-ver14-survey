"use client"

import { FC, useRef } from "react"
import useConfirmReload from "@/hooks/useConfirmReload"
import useClickAuth from "@/hooks/useClickAuth"
import Error from "../error"
const FirstAuth: FC<Auth> = ({ title }) => {
  const ref = useRef<HTMLInputElement>(null)
  const { info, clickFn, name } = useClickAuth({ title, ref })

  useConfirmReload()
  //새로고침 및 탭닫기 요청등등 요청을 확인하는 hook

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
          onClick={clickFn}
        />
      </article>
      <Error condition={info[`${title}Error`]} />
      {name && <span className="text-lime-400 input-text">인증 완료!!</span>}
      {name && <div className="absolute -bottom-1 -left-2 w-[102%] h-12 opacity-0" />}
      {/*  모든 인증 완료후 input의 수정을 막기위해 생성되는 filter box  */}
    </section>
  )
}
export default FirstAuth
