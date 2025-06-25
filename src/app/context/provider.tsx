'use client';

import { createContext, ReactNode, useContext } from 'react';
import { LayoutContextValue } from './types';

export const LayoutContext = createContext<LayoutContextValue | null>(null);

interface LayoutProviderProps {
  children: ReactNode;
  value: LayoutContextValue;
}

export const LayoutProvider = ({ children, value }: LayoutProviderProps) => {
  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};

