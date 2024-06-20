import Back from "@/components/part3/back"

const InterceptingDetail = async ({ params: { id } }: dynamic_params) => {
  const [post, images]: [post, dynamic_images] = await Promise.all([
    await (await fetch(`${process.env.BOARD_MOCK_DATA as string}/${id}`)).json(),
    await (await fetch(`${process.env.BOARD_MOCK_IMAGE as string}/${id}`)).json()
  ])
  return (
    <>
      <section className="flex-center fixed-content ">
        <div className="size-full bg-opcity-gray absolute" />
        <article className="z-10 size-3/4 bg-white rounded-xl relative flex">
          <h3>Intercepting Detail</h3>
          <Back />
        </article>
      </section>
    </>
  )
}
export default InterceptingDetail
