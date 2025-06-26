'use client';

import { ReactNode } from 'react';
import { LayoutProvider } from '@/app/context/providers/layoutProvider';
import { ThemeProvider } from '@/app/context/providers/themeProvider';

interface LayoutInnerProps {
  children: ReactNode;
  isMobile: boolean;
}
export function LayoutInner({ children, isMobile }: LayoutInnerProps) {
  return (
    <ThemeProvider> 
      <LayoutProvider initialIsMobile={isMobile}> 
        {children}
      </LayoutProvider>
    </ThemeProvider>
  );
}