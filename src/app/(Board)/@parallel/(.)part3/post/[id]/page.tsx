"use client"
import { useRouter } from "next/navigation"

const InterceptingDetail = () => {
  const { back } = useRouter()

  return (
    <>
      <section className=" flex justify-center items-center fixed top-0 right-0 size-full">
        <div onClick={back} className="size-full bg-slate-700 bg-opacity-50 absolute" />
        <article className="z-10 size-3/4 bg-white rounded-xl">
          <h3>Intercepting Detail</h3>
          <span onClick={back}>x</span>
        </article>
      </section>
    </>
  )
}
export default InterceptingDetail
