"use client"

import { useRouter } from "next/navigation"

const Blind = () => {
  const { back } = useRouter()
  return <div onClick={back} className="size-full bg-opcity-gray absolute" />
}
export default Blind
