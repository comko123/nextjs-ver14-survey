import Image from "next/image"
import { postFetch } from "@/utils/postFetch"

const MainContent = async ({ id, scale }: detail_box) => {
  const { blur_image, post, image } = await postFetch(+id)
  return (
    <main
      className={`${
        scale ? "z-10 size-3/4 bg-white rounded-xl relative" : "size-full "
      } flex flex-col p-5`}
    >
      <div className={`flex ${scale ? "w-full h-3/4" : "size-full "} gap-x-3`}>
        <figure className={`relative ${scale ? "size-full" : "w-[50vw] h-[30vh]"}`}>
          <Image
            src={image.url}
            fill
            alt={image.title}
            placeholder="blur"
            blurDataURL={blur_image}
          />
        </figure>
        <div className="border-l-2 pl-4">
          <div>post title: {post.title}</div>
          <div>image title: {image.title}</div>
        </div>
      </div>
      <div className="border-t-2 mt-4 pt-4">{post.body}</div>
    </main>
  )
}
export default MainContent
