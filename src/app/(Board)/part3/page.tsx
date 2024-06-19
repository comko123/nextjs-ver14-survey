import Link from "next/link"

async function Part3() {
  const [post, images]: [post, images] = await Promise.all([
    await (await fetch(process.env.BOARD_MOCK_DATA as string)).json(),
    (await (await fetch(process.env.BOARD_MOCK_IMAGE as string)).json()).slice(0, 100)
  ])
  console.log(Array.isArray(images))
  return (
    <main>
      <h1>Board</h1>
      <main>
        {post.map((item, index) => (
          <section key={item.userId}>
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
