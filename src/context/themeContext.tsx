import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from '../config/style'
import { Theme } from '../config/style/types'

const CACHE_KEY = 'IS_DARK'

interface ThemeInterface {
  isDark: boolean
  toggleTheme: () => void
  theme: Theme
}

const defaultState: ThemeInterface = {
  isDark: false,
  toggleTheme: () => {},
  theme,
}

const ThemeContext = React.createContext(defaultState)

const ThemeProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const storageValue = window.localStorage.getItem(CACHE_KEY)
    return storageValue ? JSON.parse(storageValue) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState: boolean) => {
      window.localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      <StyledThemeProvider theme={isDark ? theme.dark : theme.light}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
