
'use client'

import { type ReactNode } from 'react'
import { LayoutProvider } from './context/provider'
import { initialLayoutValue } from './context/values'

interface LayoutInnerProps {
  children: ReactNode
  isMobile: boolean 
}

export function LayoutInner({ children, isMobile }: LayoutInnerProps) {
  return (
    <LayoutProvider 
      isMobile={isMobile} 
      value={{ ...initialLayoutValue, isMobile }} 
    >
      {children}
    </LayoutProvider>
  )
}