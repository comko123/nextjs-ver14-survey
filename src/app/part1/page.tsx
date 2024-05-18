import { Fragment } from "react"

function Part1() {
  const server_action = async (data: FormData) => {
    "use server"
    console.log(data)
  }
  return (
    <main className="grid grid-cols-1 place-items-center w-full h-[75vh]">
      <h1 className="font-bold text-2xl">Sign Up Form</h1>
      <form action={server_action} className="flex flex-col items-center gap-y-4 w-[50%]">
        {[
          { text: "email", type: "email" },
          { text: "휴대폰 번호 (- 빼고 입력)", type: "number" },
          { text: "비밀번호", type: "password" },
          { text: "비밀번호 확인", type: "password" }
        ].map(item => (
          <Fragment key={item.text}>
            <section className="w-full flex gap-x-2">
              <input
                type={item.type}
                className="border-4 rounded-lg p-2 font-bold border-rose-300 w-full"
                placeholder={item.text}
              />
              {(item.type === "email" || item.type === "number") && (
                <button className="gradient-btn w-[15%] py-2">inspect</button>
              )}
            </section>
          </Fragment>
        ))}
        <input type="submit" value="submit" className="gradient-btn w-[30%] py-2 mt-2" />
      </form>
    </main>
  )
}

export default Part1
