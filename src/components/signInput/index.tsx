import { FC } from "react"

const SignInput: FC<{ text: string; type: string }> = ({ text, type }) => {
  return (
    <section className="">
      <input
        type={type}
        name={text}
        className="border-4 rounded-lg p-2 font-bold border-fuchsia-300 w-full"
        placeholder={text}
        required
      />
    </section>
  )
}

export default SignInput
