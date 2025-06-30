import { button } from '../../../styled-system/recipes'
import { useColorMode } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <button 
      className={button({ variant: 'toggle' })}
      onClick={toggleColorMode} 
      aria-label="Toggle theme"
    >
      {colorMode === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}