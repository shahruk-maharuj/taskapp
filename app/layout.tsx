import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task App',
  description: 'Best mini task management app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  )
}
