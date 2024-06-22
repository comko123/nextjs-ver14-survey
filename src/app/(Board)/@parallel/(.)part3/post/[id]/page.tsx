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
