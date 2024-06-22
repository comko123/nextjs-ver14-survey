import Link from "next/link"

async function Part3() {
  const post: post[] = (await (await fetch(process.env.BOARD_MOCK_DATA as string)).json()).slice(
    0,
    30
  )
  return (
    <main className="m-12">
      <h1 className="mb-3">Board</h1>
      <section className="grid-content grid-cols-3">
        {post.map((item, index) => (
          <article key={item.title}>
            <Link
              href={`/part3/post/${index}`}
              prefetch={false}
              className="dash-board-blue-box border-link-text-size str-three-dash mb-5 p-5"
            >
              {index + 1}. {item.title}
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Part3
// next font 적용하기
//다기능 route 주석작성하기
