import { useCallback, useState } from "react"
import { useCertifiedAuth, useCertifiedState } from "@/store/certified"

const useSecondAuth = ({ title, ref }: click_auth) => {
  const state = useCertifiedState(state => state)
  const { create_filter } = useCertifiedAuth(state => state)
  const [input, setInput] = useState<second_auth>({
    inputStr: "",
    error: false
  })
  const secondFn = useCallback(() => {
    if (!ref.current) return
    else {
      if (input.inputStr !== ref.current.value) {
        //잘못된 인증번호 중복입력 방지
        if (isNaN(+ref.current.value) || ref.current.value.length !== 5) {
          //regexp double check(number or length)
          setInput(() => ({ inputStr: ref.current?.value, error: true }))
          console.log(ref.current?.value)
        } else {
          console.log(ref.current?.value)
          state.second_certified(title)
          create_filter(title)
        }
      }
    }
  }, [input.inputStr, ref, title])
  //state와 create_filter함수가 재생성 될때와 secondFn의 재생성 여부는 상관없음
  return { error: input.error, name: state[title], secondFn }
}
export default useSecondAuth

/* 앞으로 나올 react 19 version에서는 함수의 리턴값, 함수, 컴포넌트의 
   렌더링 최적화를 자동으로 처리한다는 발표가 있었기 떄문에 최적화의 자동처리 기능만 잘 구현이되어 나온다면
   useCallback, useMemo, react.memo와같은 메모이제이션을 위한 도구들은 사용할 필요가 없을듯하다...*/
