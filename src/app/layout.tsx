import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const font = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mastering SOLID Principles in React',
  description: 'by @bkdev98',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
