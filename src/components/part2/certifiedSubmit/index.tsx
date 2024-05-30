"use client"

import { useCertifiedAuth } from "@/store/certified"
import { useFormStatus } from "react-dom"

const CertifiedSubmit = () => {
  const { email, phone } = useCertifiedAuth()
  const { pending } = useFormStatus()
  return (
    <section className="flex-center">
      <input
        type="submit"
        value="submit"
        disabled={!email || !phone || pending}
        className={`${email && phone ? "gradient-btn2" : "bg-slate-300 min-w-28"} btn-group-event`}
      />
    </section>
  )
}
export default CertifiedSubmit
