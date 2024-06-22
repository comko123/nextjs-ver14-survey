"use client"
import { useRouter } from "next/navigation"

const Back = () => {
  const { back } = useRouter()
  return (
    <span onClick={back} className="absolute right-0">
      x
    </span>
  )
}
export default Back
