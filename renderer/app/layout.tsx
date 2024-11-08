import React from 'react'
import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import ThemeProvider from '@/components/providers/theme-provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Storm Downloader',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased overflow-hidden',
          fontSans.variable
        )}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
