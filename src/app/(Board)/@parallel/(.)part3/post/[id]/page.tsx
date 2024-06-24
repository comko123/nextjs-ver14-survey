import Back from "@/components/part3/back"
import MainContent from "@/components/part3/mainContent"
const InterceptingDetail = ({ params: { id } }: dynamic_params) => {
  return (
    <>
      <div className="flex-center fixed-content ">
        <div className="size-full bg-opcity-gray absolute" />
        <MainContent id={id} scale />
        <Back />
      </div>
    </>
  )
}
export default InterceptingDetail
/*
Intercepting Route - 사용자가 페이지를 방문했을때 사용자에게 실제 페이지를 보여주는 대신 지정한 컴포넌트를 보여주는것 (정확히는 해당페이지로 이동하는것을 가로채는것.)

사용방법 - Nextjs 14버전이나 그 이상의 버전에서 이기능을 사용하는 방법은 Intercepting Route를 적용하려는 페이지와 같은 폴더 구조를 app폴더 안에 생성하면 되는데 
적용하려는 폴더의 위치에따라 (.)이나 (..)등 경로를 표현하는 문자열을 폴더명에 작성하면 사용가능.
해당 프로젝트에서는 part3/post/[id]경로에 Intercepting Route를 사용하는것을 의도했기 때문에 폴더 구조를 (.)part3/post/[id]로 생성함. 

유의사항 - Intercepting Route를 사용하는 경우 반드시 경로를 표현하는 문자열로 시작해야한다. ( ex) ( (.)part3 => O  , part3(.)=> X ) ) 

작성해야하는 경로의 차이점 - (.)은 같은부모 폴더안에 Intercepting Route를 원하는 폴더가 있을때
(..)은 다른부모 폴더안에 Intercepting Route를 원하는 폴더가 있을때
현재 프로젝트안에서는 (Board) 폴더안에 part3가 있기때문에 (Board) 폴더안에 생성후 
(.)part3로 생성 (부모가 (Board)폴더로 같기 때문에) 

사용후기 - Nextjs를 사용하지않는 React환경에서 React-Route-Dom 라이브러리를 사용하여 이기능을 직접 구현해본 경험으로는  
구현할 때에도 Route를 복잡하게 설정하여 헷갈리는 부분들이 존재해서 구현하는 난이도도 높았고 유지보수 측면에서도 어려웠던 부분들이 많았었는데
Nextjs에서 그나마 접근성이 쉽게 구현이 가능하도록 Intercepting Route기능을 제공하여 필요한 상황에서 용이하게 사용이 가능할것같다.

자소설 닷컴 , 인스타그램에서 사용중인 기능. 
*/
