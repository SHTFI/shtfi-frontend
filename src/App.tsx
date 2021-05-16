import React, { useEffect } from 'react'
import { Home, Farms } from './views'
import MainNav from './components/main-nav'

import { Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight / 100}`
    )
  }, [])

  const HomeView = Home.default
  const FarmsView = Farms.default

  return (
    <>
      <MainNav />
      <Switch>
        <Route path="/farms">
          <FarmsView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </>
  )
}

export default App
