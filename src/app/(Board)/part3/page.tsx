import Link from "next/link"

async function Part3() {
  // const data = await Promise.all([
  //   await (await fetch(process.env.BOARD_MOCK_DATA as string)).json(),
  //   await (await fetch(process.env.BOARD_MOCK_IMAGE as string)).json()
  // ])
  // console.log(data)
  //branch test
  return (
    <main>
      <h1>Board</h1>
      <Link href="/part3/post/1" prefetch={false}>
        move
      </Link>
    </main>
  )
}

export default Part3
