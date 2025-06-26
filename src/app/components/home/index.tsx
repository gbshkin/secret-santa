'use client';

import Mobile from './Mob';
import Desktop from './Desk';
import { useLayout } from '@/app/context/hooks/useLayout'; 

export default function Home() {
  
  const { isMobile } = useLayout();
  console.log(isMobile)
  console.log('rerender')

  return isMobile ? <Mobile /> : <Desktop />;
}