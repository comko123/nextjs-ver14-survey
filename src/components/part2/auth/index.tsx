import { FC } from "react"
import FirstAuth from "../firstAuth"
import SecondAuth from "../secondAuth"

const Auth: FC<Auth> = ({ title }) => {
  return (
    <article className="form-continer">
      <FirstAuth title={title} />
      <SecondAuth title={title} />
    </article>
  )
}
export default Auth
