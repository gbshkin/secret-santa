import { useContext } from "react";
import { ThemeContext } from "@/app/context/providers/themeProvider";
import { ThemeContextValue } from "../types";

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  

  return context;
};