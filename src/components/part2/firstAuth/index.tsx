"use client"

import { strFn } from "@/utils/stringFn"
import { reg_check } from "@/utils/regCheck"
import { FC, useCallback, useRef, useState } from "react"
import useConfirmReload from "@/hooks/useConfirmReload"
import { useCertifiedAuth, useCertifiedState } from "@/store/certified"
const FirstAuth: FC<Auth> = ({ title }) => {
  const state = useCertifiedState(state => state)
  const auth = useCertifiedAuth(state => state)
  const ref = useRef<HTMLInputElement>(null)
  const [info, setInfo] = useState({
    email: "",
    emailError: false,
    phone: "",
    phoneError: false
  })

  const click_auth = useCallback(() => {
    if (reg_check(title, strFn(ref.current?.value))) {
      //번호 및 메일의 형식이 맞는지 확인
      if (info[title] !== strFn(ref.current?.value)) {
        // 같은 메일및 번호인 경우 중복 요청(클릭이벤트) 방지
        console.log(ref.current?.value)
        setInfo(state => ({
          ...state,
          [title]: strFn(ref.current?.value),
          [`${title}Error`]: false
        }))
        // 올바른 형식을 입력한 경우 해당 에러 메세지 삭제후 저장
        if (!state[title]) state.second_certified(title)
      }
    } else setInfo(state => ({ ...state, [`${title}Error`]: true }))
    //맞지않는 형식의 데이터를 입력한 경우 에러 발생
  }, [state, title, info])

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
          onClick={click_auth}
        />
      </article>
      {info[`${title}Error`] && (
        <span className="text-red-500 input-text"> 올바른 형식을 입력해주세요.</span>
      )}
      {auth[title] && <span className="text-lime-400 input-text">인증 완료!!</span>}
      {auth[title] && <div className="absolute -bottom-1 -left-2 w-[102%] h-12 opacity-0" />}
      {/*  모든 인증 완료후 input의 수정을 막기위해 생성되는 filter box  */}
    </section>
  )
}
export default FirstAuth
