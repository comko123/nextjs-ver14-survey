import MainContent from "@/components/part3/mainContent"

const Detail = ({ params: { id } }: dynamic_params) => {
  return <MainContent id={id} />
}
export default Detail

// 이미 blur처리된 base64형식으로 인코딩된 이미지가 있으면 placehorder속성에 이미지를 넣어도 상관없음.
