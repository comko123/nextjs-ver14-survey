import { Buffer } from "buffer"

export const postFetch = async (id: number) => {
  const [post, image]: [post, dynamic_image] = await Promise.all([
    await (await fetch(`${process.env.BOARD_MOCK_DATA as string}/${id + 1}`)).json(),
    await (await fetch(`${process.env.BOARD_MOCK_IMAGE as string}/${id + 1}`)).json()
  ])
  const blur_image = `data:image/png;base64,${Buffer.from(
    await (await fetch(image.url)).arrayBuffer()
  ).toString("base64")}`
  return { blur_image, post, image }
}

//blur 이미지를 제공하기위해 buffer라이브러리를 통하여 base64형식으로 인코딩하가위한 함수
