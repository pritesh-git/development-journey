import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ReactNode } from 'react'
import NavHeader from '@/components/NavHeader'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const handWritten = localFont({
  src: './fonts/HandWritten-rg10A.woff',
  variable: '--font-handwritten',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: {
    default: 'Dev Journey',
    template: '%s | Dev Journey',
  },
  description: 'Dev Journey Website',
  icons: { icon: ['/logo.png'] },
}

type PropsType = {
  children: ReactNode
}

export default function RootLayout({
  children,
}: Readonly<PropsType>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${handWritten.variable} antialiased select-none`}
        suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <NavHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
