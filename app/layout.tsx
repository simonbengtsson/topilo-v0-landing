import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Libre_Baskerville } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
})

export const metadata: Metadata = {
  title: "Topilo Notes - Capture thoughts in the thousands",
  description:
    "Writing notes reimagined for capturing thousands of thoughts, ideas and plans effective and useful.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${libreBaskerville.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
