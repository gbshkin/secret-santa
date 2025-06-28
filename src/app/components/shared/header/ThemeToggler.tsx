
'use client'
import classNames from 'classnames';
import { useTheme } from '@/app/context/hooks/';
import { ThemeContextValue } from '@/app/context/types';
import ToggleIcon from '@mui/icons-material/JoinRightOutlined';
import styles from '@/app/styles/shared.module.scss';

export function ThemeToggler() {

  const context = useTheme()
  const { setTheme, theme }: ThemeContextValue = context;
  const handleSwitchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className={styles.themeToggler} onClick={handleSwitchTheme}>
      <ToggleIcon className={classNames(styles.toggleIcon)} />
      <p>theme</p>
    </div>
  )
}
