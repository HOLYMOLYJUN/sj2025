import SmoothScroll from "./components/SmoothScroll";
import Header from "@/app/components/Header"
import CustomCursor from "./components/CustomCursor";

import "./globals.css"
import "/public/styles/font.css"

export const metadata = {
  title: '2025 LEESANGJUN Portfolio',
  description: 'Generated by Next.js',
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
