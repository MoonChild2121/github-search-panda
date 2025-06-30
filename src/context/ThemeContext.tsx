import { createContext, useContext, useEffect, useState } from 'react'

type ColorMode = 'light' | 'dark'

interface ThemeContextType {
  colorMode: ColorMode
  toggleColorMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('color-mode')
      if (savedMode === 'light' || savedMode === 'dark') {
        return savedMode
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('color-scheme', colorMode)
    if (colorMode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('color-mode', colorMode)
  }, [colorMode])

  const toggleColorMode = () => {
    setColorMode(prev => prev === 'light' ? 'dark' : 'light')
  }

  const value = {
    colorMode,
    toggleColorMode
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useColorMode() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ThemeProvider')
  }
  return context
}

// Custom hook for theme-specific styles
export function useThemeValue<T>(lightValue: T, darkValue: T): T {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? darkValue : lightValue
} 