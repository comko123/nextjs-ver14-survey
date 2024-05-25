import CertifiedForm from "@/components/part2/certifiedForm"

function Part2() {
  return (
    <main className="form-page-layout">
      <h1 className="form-page-title">certified form</h1>
      <CertifiedForm />
    </main>
  )
}

/*peer , has , group 생성자 사용하기 */
/*
peer and group의 차이점
peer - 한단계 위의 부모 html엘리먼트가 깉은 html태그안에서 사용 가능
group - 같은 부모 html엘리먼트안에서 사용 가능
주의점 gradiant를 사용하는 경우 peer나 group 에서도 같이 gradiant를사용해야함 
*/
export default Part2
