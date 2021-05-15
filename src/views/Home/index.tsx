import React from 'react'
import useTheme from '../../hooks/useTheme'
const Home: React.FC = () => {
  const { isDark, toggleTheme, theme } = useTheme()

  return (
    <main style={{ backgroundColor: theme.primary }}>
      <header>
        <h1>Shit Defi</h1>
        {isDark}
        <button onClick={() => toggleTheme()}>
          {isDark ? 'light' : 'dark'}
        </button>
      </header>
      <section></section>
    </main>
  )
}

export default Home
