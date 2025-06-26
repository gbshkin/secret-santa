
import { useContext } from "react";
import { LayoutContext } from "../providers/layoutProvider";
import { LayoutContextValue } from "../types"

export const useLayout = (): LayoutContextValue => {

  const context = useContext(LayoutContext);
  
  if (!context) throw new Error('useLayout must be used within a LayoutProvider');
  
  return context;
};
