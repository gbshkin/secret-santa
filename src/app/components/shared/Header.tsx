'use client'
import styles from '@/app/styles/shared.module.scss';
import classNames from 'classnames';
import { useTheme } from '@/app/context/hooks/';
import { Button } from '@mui/material';
import { ThemeContextValue } from '@/app/context/types';
import Logo from '/public/img/icon.svg'


export function Header() {
  const context = useTheme()
  const { toggleTheme, header, theme }: ThemeContextValue = context


  console.log('header is active', header)
  console.log('theme is:', theme)

  const handleToggleTheme = (): void => {
    toggleTheme();
  };



  return (
    <div className={classNames(styles.header, { [styles.active]: header })}>
      <Logo className={styles.logo} />
      <Button size={'small'} className={'primaryButton'} variant="contained" onClick={handleToggleTheme}>
        Toggle Theme
      </Button>
    </div>
  )
}