'use client';

import { ReactNode, useEffect } from "react";
import { useLayout, useTheme } from "@/app/context/hooks/";
import { ReactLenis, useLenis } from 'lenis/react';
import Header from "@/app/components/shared/Header";



export default function Container({ children }: { children: ReactNode }) {
  const { setIsMobile } = useLayout();
  const { theme }  = useTheme();


  const lenis = useLenis((lenis) => {
  })

  const onResize = () => {
    if(setIsMobile) setIsMobile(window.innerWidth <= 1000);
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
 
  return (
    <>
    <ReactLenis root />
    <div className={`wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
     <Header />
      {children}
    </div>
    </>
  );
}