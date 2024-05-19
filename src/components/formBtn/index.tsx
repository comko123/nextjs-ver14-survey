import { useFormStatus } from "react-dom"

const FormBtn = () => {
  const { pending } = useFormStatus()
  return (
    <input
      type="submit"
      disabled={pending}
      value={pending ? "waiting..." : "submit"}
      className={`${
        pending ? "bg-slate-400 text-white rounded-xl font-bold" : "gradient-btn"
      }  w-[30%] py-2 mt-2`}
    />
  )
}
/*
useFormStatus = 부모컴포넌트의 form을 찾아 이벤트를 갑지하여 내부에서 렌더링된다.
주의사항 - form태그가 있는 컴포넌트에서 사용못함(form태그의 자식 컴포넌트에서 사용해야함)
*/
export default FormBtn
