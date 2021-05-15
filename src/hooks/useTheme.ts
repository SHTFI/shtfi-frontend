import { useContext } from 'react'
import { ThemeContext } from '../context'

const useTheme = () => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext)
  const themeToUse = isDark ? theme.dark : theme.light
  return { isDark, toggleTheme, theme: themeToUse }
}

export default useTheme
