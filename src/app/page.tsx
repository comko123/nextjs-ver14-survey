import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col gpa-y-5 w-full h-[80vh] items-center justify-center">
      {["part1", "part2", "part3"].map(item => (
        <article key={item} className="gradient-btn text-2xl p-4 my-4">
          <Link href={item} prefetch={false}>
            {item}
          </Link>
        </article>
      ))}
    </main>
  )
}
// meta-data 적용하기
// test-code 작성하기
