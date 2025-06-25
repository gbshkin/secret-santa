import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { type ReactNode } from 'react'
import '@/app/styles/globals.scss'
import { LayoutInner } from './layoutInner'

export const metadata: Metadata = {
  title: 'Secret Santa',
  description: 'Secret Santa app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}


export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  const headersList = await headers()
  const isMobile = headersList.get('x-is-mobile') === '1'

  return (
    <html lang="ru">
      <body suppressHydrationWarning={true}>
        <LayoutInner isMobile={isMobile}>{children}</LayoutInner>
      </body>
    </html>
  )
}