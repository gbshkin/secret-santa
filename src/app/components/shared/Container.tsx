'use client'
import { ReactNode, useEffect, useRef, useCallback } from 'react'
import { useLayout, useTheme } from '@/app/context/hooks/'
import { ReactLenis } from 'lenis/react'
import classNames from 'classnames'
import { Header } from '@/app/components/shared/header/Header'

export function Container({ children }: { children: ReactNode }) {

  const { setIsMobile } = useLayout()

  
  const lastScrollY = useRef(0)
  const headerState = useRef(false)

  const handleScroll = useCallback(() => {

    const currentScrollY: number = window?.scrollY
    const SCROLL_THRESHOLD: number = 50;

    lastScrollY.current = currentScrollY

    if (currentScrollY > SCROLL_THRESHOLD && !headerState.current) {
      headerState.current = true
    } 
    else if (currentScrollY <= SCROLL_THRESHOLD && headerState.current) {
      headerState.current = false
  
    }
  }, [])

  const onResize = useCallback(() => {
    setIsMobile?.(window.innerWidth <= 1000)
  }, [setIsMobile])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', onResize)
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [handleScroll, onResize])

  return (
    <ReactLenis root>
      <div className={'wrapper'}>
        <Header />
        {children}
      </div>
    </ReactLenis>
  )
}