
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  theme:'light' | 'dark' | 'system';
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

export interface LayoutContextValue {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}