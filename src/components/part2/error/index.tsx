import { FC } from "react"

const Error: FC<input_error> = ({ condition }) => {
  return (
    <>
      {condition && <span className="text-red-500 input-text"> 올바른 형식을 입력해주세요.</span>}
    </>
  )
}
export default Error
