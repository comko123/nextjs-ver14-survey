import { useCertifiedAuth, useCertifiedState } from "@/store/certified"
import { reg_check } from "@/utils/regCheck"
import { strFn } from "@/utils/stringFn"
import { RefObject, useCallback, useState } from "react"

interface click_auth extends Auth {
  ref: RefObject<HTMLInputElement>
}

const useClickAuth = ({ title, ref }: click_auth) => {
  const state = useCertifiedState(state => state)
  const auth = useCertifiedAuth(state => state)
  const [info, setInfo] = useState({
    email: "",
    emailError: false,
    phone: "",
    phoneError: false
  })
  const clickFn = useCallback(() => {
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
  }, [state, title, info, ref])
  return { info, clickFn, name: auth[title] }
}

export default useClickAuth
