import React, { useEffect } from 'react'
import { Home } from './views'

import { Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight / 100}`
    )
  }, [])

  const HomeView = Home.default

  return (
    <Switch>
      <Route path="/">
        <HomeView />
      </Route>
    </Switch>
  )
}

export default App
