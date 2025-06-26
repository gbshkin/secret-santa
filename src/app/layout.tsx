
import { LayoutInner } from './layoutInner'
import type { Metadata } from 'next'
import MobileDetect from 'mobile-detect'
import { headers } from 'next/headers'
import { type ReactNode } from 'react'
import '@/app/styles/globals.scss'


export const metadata: Metadata = {
  title: 'Secret Santa',
  description: 'Secret Santa app',
}


export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {


  const userAgent = (await headers()).get('user-agent') || ''


  const md = new MobileDetect(userAgent)
  const isMobile = !!md.mobile()
  

  return (
    <html lang="ru">
      <body suppressHydrationWarning={true}>
        <LayoutInner isMobile={isMobile}>{children}</LayoutInner>
      </body>
    </html>
  )
}

