import { postFetch } from "@/utils/postFetch"
import MainContent from "@/components/part3/mainContent"

export const generateMetadata = async ({ params: { id } }: dynamic_params) => {
  const { post } = await postFetch(+id)
  return {
    title: post.title,
    description: post.body
  }
}

/*
동적인 제목을 가지고있는 페이지를 위해 존재함.
generateMetadata는 data fetch를 지원하여 metadata에 적용가능한 함수.
generateMetadata에서 data를 fetch하면 캐싱을 하기 때문에 여러번 fetch해도 상관없다.
page파일의 컴포넌트처럼 params와 searchparams를 props로 받을수 있으며 이를이용하여 fetch한다.


metadata 및 generateMetadata 함수는 서버 컴포넌트에서만 지원된다.
동일한 경로에서 메타데이터 객체와 generateMetadata 함수를 모두 export 할 수는 없다. (둘 중 하나만 사용 가능)

*/

const Detail = ({ params: { id } }: dynamic_params) => {
  return <MainContent id={id} />
}
export default Detail

// 이미 blur처리된 base64형식으로 인코딩된 이미지가 있으면 placehorder속성에 이미지를 넣어도 상관없음.
