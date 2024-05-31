export const strFn = (str: Ref_Value) => {
  if (!str) return
  return str.replaceAll(" ", "")
}
//문자열의 모든 공백을 제거해주는 함수
