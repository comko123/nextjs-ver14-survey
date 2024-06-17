import Link from "next/link"

async function Part3() {
  const data = await Promise.all([
    await (await fetch(process.env.BOARD_MOCK_DATA as string)).json(),
    (await (await fetch(process.env.BOARD_MOCK_IMAGE as string)).json()).slice(0, 100)
  ])
  // console.log(data[0][0], data[1][1])
  return (
    <main>
      <h1>Board</h1>
      <main>
        {data[0].map((item, index) => (
          <section key={item.title}>
            <Link href={`/part3/post/${index}`} prefetch={false}>
              {index}. {item.title}
            </Link>
          </section>
        ))}
      </main>
    </main>
  )
}

export default Part3
