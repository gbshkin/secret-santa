export interface LayoutContextValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isMobile: boolean | null;
}