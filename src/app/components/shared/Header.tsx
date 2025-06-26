'use client'
import styles from '@/app/styles/shared.module.scss';
import { useTheme } from '@/app/context/hooks/';
import { Button } from '@mui/material';

export default function Header() {

  const { theme, toggleTheme } = useTheme()

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return <div className={styles.header}>
    <Button color="secondary" variant="contained" onClick={handleToggleTheme}>
      Toggle Theme
    </Button>
  </div>
}