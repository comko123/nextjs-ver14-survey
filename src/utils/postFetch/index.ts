import { Buffer } from "buffer"

export const postFetch = async (id: number) => {
  const [post, image]: [post, dynamic_image] = await Promise.all([
    await (await fetch(`${process.env.BOARD_MOCK_DATA as string}/${id + 1}`)).json(),
    await (await fetch(`${process.env.BOARD_MOCK_IMAGE as string}/${id + 1}`)).json()
  ])
  const blur_image = `data:image/png;base64,${Buffer.from(
    await (await fetch(image.url)).arrayBuffer()
  ).toString("base64")}`

  //buffer라이브러리를 통하여 base64형식으로 인코딩

  return { blur_image, post, image }
}

/*
현재 nextjs 14버전의 fetch함수는 api요청에대한 응답을 기본적으로 caching한다. 
(15버전에서는 별도의 설정을 추가해야 caching을 해준다)

추가적으로 nextjs 14버전에서 build를 하면 dynamic페이지인지 static페이지인지 nextjs가 판별하여
페이지를 생성해주는데 dynamic페이지를 생성했는데 static페이지로 판별하거나 그반대의 경우로 판별하는 일이
종종 발생하여 강제로 dynamic페이지로 변환하거나 static페이지로 변환시켜주는 방법도 지원한다.
*/
