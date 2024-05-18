import { FC } from "react"

const SignInput: FC<{ text: string; type: string }> = ({ text, type }) => {
  return (
    <section className="flex my-2 gap-x-2">
      <input
        type={type}
        name={text}
        className="border-4 rounded-lg p-2 font-bold border-fuchsia-300 w-full"
        placeholder={text}
        required
      />
      {(type === "email" || type === "number") && (
        <button className="gradient-btn w-[15%] py-2">inspect</button>
      )}
    </section>
  )
}

export default SignInput
