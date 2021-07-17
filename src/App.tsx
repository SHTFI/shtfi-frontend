import React, { useEffect } from 'react'
import { Home, Farms, Farm } from './views'
import MainNav from './components/main-nav'
import { Switch, Route } from 'react-router-dom'
import { Overlay } from './components/base'
import Web3ReactManager from './components/Web3ReactManager'

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight / 100}`
    )
  }, [])

  const HomeView = Home.default
  const FarmsView = Farms.default
  const FarmView = Farm.default

  return (
    <Web3ReactManager>
      <>
        <MainNav />
        <Overlay />
        <Switch>
          <Route path="/farm/:stakedToken" component={FarmView} />
          <Route path="/farms" component={FarmsView} />
          <Route path="/" component={HomeView} />
        </Switch>
      </>
    </Web3ReactManager>
  )
}

export default App
