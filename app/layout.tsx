import SmoothScroll from "./components/SmoothScroll";
import Header from "@/app/components/Header"
import CustomCursor from "./components/CustomCursor";

import "./globals.css"
import "./styles/font.css"

export const metadata = {
  title: '2025 LEESANGJUN Portfolio',
  description: '안녕하세요. 1년차 UI/UX 엔지니어 이상준입니다.',
  openGraph: {
    title: '2025 LEESANGJUN Portfolio',
    description: '안녕하세요. 1년차 UI/UX 엔지니어 이상준입니다.',
    url: 'https://sangjun2025.vercel.app/',
    siteName: 'LEESANGJUN Portfolio',
    images: [
      {
        url: 'https://sangjun2025.vercel.app/images/thumbnail.jpg', 
        width: 1200,
        height: 630,
        alt: 'LEESANGJUN 포트폴리오 썸네일',
      },
    ],
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <CustomCursor/>
        <SmoothScroll/>
        <Header/>
        {children}
      </body>
    </html>
  )
}
