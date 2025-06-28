export interface ThemeContextValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  header:  boolean;
  toggleHeader: () => void;
}

export interface LayoutContextValue {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}