"use client"
import { useRouter } from "next/navigation"

const InterceptingDetail = () => {
  const { back } = useRouter()

  return (
    <>
      <section className=" flex justify-center items-center">
        <div
          onClick={back}
          className="w-[100vw] h-[100vh] fixed top-0 bg-slate-700 bg-opacity-50"
        />
        <article className="z-10 w-1/2 h-[72vh] bg-white rounded-xl">
          <h3>Intercepting Detail</h3>
          <span onClick={back}>x</span>
        </article>
      </section>
    </>
  )
}
export default InterceptingDetail
