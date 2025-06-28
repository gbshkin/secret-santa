
import { LayoutInner } from './layoutInner'
import localFont from 'next/font/local';
import type { Metadata } from 'next'
import MobileDetect from 'mobile-detect'
import { headers } from 'next/headers'
import { type ReactNode } from 'react'
import '@/app/styles/globals.scss'


export const metadata: Metadata = {
  title: 'Secret Santa',
  description: 'Secret Santa app',
}
const Slussen = localFont({
  src: [
    {
      path: '../../public/fonts/Slussen/Slussen-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Slussen/Slussen-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Slussen/Slussen-Compressed-Black.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Slussen/Slussen-Expanded-Black.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-slussen'
})


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
          <LayoutInner isMobile={isMobile}>
            {children}
          </LayoutInner>
      </body>
    </html>
  )
}

