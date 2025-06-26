export interface ThemeContextValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface LayoutContextValue {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}