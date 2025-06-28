'use client';

import { createContext, useState, ReactNode } from 'react';
import { ThemeContextValue } from '@/app/context/types';

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [header, setHeader] = useState<true | false>(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleHeader = () => {
    setHeader(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, header, toggleHeader }}>
      {children}
    </ThemeContext.Provider>
  );
}
