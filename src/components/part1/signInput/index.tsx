import { FC } from "react"

const SignInput: FC<{ text: string; type: string }> = ({ text, type }) => {
  return (
    <section>
      <input
        type={type}
        name={text}
        minLength={8}
        className="form-input"
        placeholder={text}
        required
      />
    </section>
  )
}

export default SignInput
