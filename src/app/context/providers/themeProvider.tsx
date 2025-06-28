'use client';
import { createContext, useState, ReactNode, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{
    theme: Theme | null;
    resolvedTheme: ResolvedTheme;
    mounted: boolean;
  }>({
    theme: null,
    resolvedTheme: 'light',
    mounted: false
  });

  const applyTheme = useCallback((theme: Theme) => {
    const resolved = theme === 'system' 
      ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      : theme;

    document.body.classList.toggle('dark-theme', resolved === 'dark');
    localStorage.setItem('theme', theme);
    setState(prev => ({ ...prev, resolvedTheme: resolved }));
  }, []);

  useEffect(() => {
    const initialTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setState({ theme: initialTheme, resolvedTheme: 'light', mounted: true });
    applyTheme(initialTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => initialTheme === 'system' && applyTheme('system');
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [applyTheme]);

  if (!state.mounted || state.theme === null) return null;

  return (
    <ThemeContext.Provider value={{
      theme: state.theme,
      resolvedTheme: state.resolvedTheme,
      setTheme: (theme) => {
        setState(prev => ({ ...prev, theme }));
        applyTheme(theme);
      }
    }}>
      {children}
    </ThemeContext.Provider>
  );
}