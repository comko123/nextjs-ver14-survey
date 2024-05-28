"use client"

import Auth from "../auth"
import { certified_action } from "@/action/certifiedAction"
import { useCertifiedAuth, useCertifiedState } from "@/store/certified"

const CertifiedForm = () => {
  const state = useCertifiedState(state => state)
  const auth = useCertifiedAuth(state => state)
  return (
    <form action={certified_action} className="group">
      {["email", "phone"].map(item => (
        <Auth
          key={item}
          title={item}
          input_state={state[item]}
          input_auth_state={state[`${item}_auth`]}
          auth_state={auth[item]}
        />
      ))}

      <section className="flex-center">
        <input
          type="submit"
          disabled={state.submit}
          value="submit"
          className="gradient-btn2 btn-group-event"
        />
      </section>
    </form>
  )
}

export default CertifiedForm

// 인증 완료된 input을 state로 수정을 방지하는것이 아닌 투명필터를 생성하여 수정을 못하도록 변경
