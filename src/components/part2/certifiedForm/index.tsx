import Auth from "../auth"
import { certified_action } from "@/action/certifiedAction"

const CertifiedForm = () => {
  return (
    <form action={certified_action} className="group">
      {["email", "phone"].map(item => (
        <Auth key={item} title={item as Auth["title"]} />
      ))}

      <section className="flex-center">
        <input type="submit" value="submit" className="gradient-btn2 btn-group-event" />
      </section>
    </form>
  )
}

export default CertifiedForm

/*
Remaining Features
----------------------------------------------
1. input zod 유효성 검사 추가
2. 모든 이증을 하지 않으면 submit 방지
*/
