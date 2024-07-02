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
    template: "%s | near",
    default: "home"
  },
  description: "new version study"
}
/*
 향상된 seo를 위해 application metadata를 정의하는 데 사용하는 api
 metadata의 title은 string|object 둘중하나로 작성
 string인 경우는dayamic한 metadata가 필요없을때
 object인 경우는dayamic한 metadata가 필요할때
 title가 string인경우와 title의 template속성은 웹페이지의 head태그안 title태그로 삽입된다.
 description속성은 head태그안 meta태그 안에 삽입된다.

 object인경우 template속성에 %s문자열을 넣고 dynamic하게 metadata를 사용하고싶은 페이지에서 
 generateMetadata 함수를사용하거나 metadata를 설정(title를 string로 설정)하면 
 %s라는 문자열을 nextjs가 dynamic하게 변경해준다.
 
 default속성은 %s에 따로 입력되는값이 필요하지않을때 보여지는것. 
 (generateMetadata 함수를 사용하지않거나 따로 metadata를 설정하지 않은경우에는 home | near로 title태그안에 설정된다.)

 metadata는 병합되기 때문에 metadata가 중첩되어 생길수있는 문제가 발생하지 않음. 
 metadata는 page파일이나 layout파일에만 사용가능하며 client컴포넌트에서는 사용불가능.
*/
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
