'use client';

import { createContext, ReactNode, useState } from 'react';
import { LayoutContextValue } from '@/app/context/types';

export const LayoutContext = createContext<LayoutContextValue | null>(null);

export function LayoutProvider({ 
  children,
  initialIsMobile = false 
}: {
  children: ReactNode;
  initialIsMobile?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(initialIsMobile);

  return (
    <LayoutContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </LayoutContext.Provider>
  );
}