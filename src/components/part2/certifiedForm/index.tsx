import Auth from "../auth"
import { certified_action } from "@/action/certifiedAction"
import CertifiedSubmit from "../certifiedSubmit"

const CertifiedForm = () => {
  return (
    <form action={certified_action} className="group">
      {["email", "phone"].map(item => (
        <Auth key={item} title={item as Auth["title"]} />
      ))}

      <CertifiedSubmit />
    </form>
  )
}

export default CertifiedForm

/*
Remaining Features
----------------------------------------------
1. 테스트 코드 작성하기
-----------------------------------------------
해당 part는 zod로 유효성검사를 할필요가 없을듯...
이유는 약식이긴 하지만 이메일 인증 , 휴대폰 번호인증을 완료하지않으면 submit을 할수가 없기때문
zod나 react-hook-form특성상 유효성 검사를 submit을 한후에 진행하는데 
해당 part는 모든 인증을 완료해야만 submit을 할수있기 때문에 validation라이브러리를 사용할 필요가 없다.
(본인의 이메일 인증이나 휴대폰인증을 하지않으면 submit을할수 없기 때문)
html의 속성으로만 유효성검사를 진행해도 무방할듯하다. 

*/
