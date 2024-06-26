import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import local from "next/font/local"
import "./globals.css"
import Link from "next/link"

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "800"],
  style: "normal",
  variable: "--font-noto"
})
// using google font
const nanum_pen = local({
  src: "./NanumPenScript-Regular.ttf",
  variable: "--font-nanumpen"
})
//using local font

/* 
nextjs는  모든종류의 google폰트를 별도의 다운로드없이 사용가능한 패키지를 제공한다.
별도로 사용을 월하는 폰트나 local pc에있는 폰트도 손쉽게 사용가능하다.
*/

export const metadata: Metadata = {
  title: {
    template: "%s | near  ",
    default: "home"
  },
  description: "new version study"
}

export default function RootLayout({ children }: Readonly<layout>) {
  return (
    <html lang="ko">
      <body className={`${noto_sans.variable} ${nanum_pen.variable}`}>
        <header className="w-full flex justify-between py-3 px-16  border-b-4 border-violet-700">
          {["part1", "part2", "part3"].map(item => (
            <article key={item} className="hover-text">
              <Link href={`/${item}`} prefetch={false}>
                {item}
              </Link>
            </article>
          ))}
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
