import SignForm from "@/components/signForm"
function Part1() {
  return (
    <main className="grid grid-cols-1 place-items-center w-full h-[75vh]">
      <h1 className="font-bold text-2xl -mb-16">Sign Up Form</h1>
      <SignForm />
    </main>
  )
}

export default Part1
/*
페이지를 구현하며 zod+server_action+react_hook_form을 같이 병합하여 사용하는 방법이 있었지만
2개의 라이브러리와 고유기능을 사용하는 방법은 장점은 분명하게 있겠지만 코드예시를 봤을때 코드가 너무 복잡해 지고
굳이 2개의 라이브러리와 고유기능을 사용할 필요가 있는지 의문이 들었다.
즉 장점보다는 단점이 더 많아보였다. (높은 유지보수 난이도 , 새로운 인력투입시 비교적 많은시간을 투자해야할수있는 적응기간)
개인적으로는 csr환경(ex => vite+react & create react app)에서는 react_hook_form을 사용하는것 
그리고 framework를 사용하는(ex => remix & nextjs) ssr환경에서는 zod+framework에서 
지원하는 고유기능(ex => server_action)으로 충분한듯하다.   
*/
