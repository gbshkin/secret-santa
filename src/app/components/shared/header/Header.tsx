'use client'
import '@/app/styles/globals.scss';
import styles from '@/app/styles/shared.module.scss';
import classNames from 'classnames';
import { useRef, useState, useEffect} from 'react'

import { SantaIcon } from '@/app/components/shared/svg/'
import { ThemeToggler } from '@/app/components/shared/header/ThemeToggler'
import UserIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/MailOutline';

export function Header() {


  const headerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      setIsActive(scrollY > 10)
    }
    handleScroll() 
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={headerRef} className={classNames(styles.header, { [styles.active]: isActive })}>
      <SantaIcon cn={styles.logo} />
      <div className={styles.right}>
        <div className={styles.rightIcons}>
          <MailIcon />
          <UserIcon />
        </div>
        <ThemeToggler />
      </div>
    </div>
  )
}