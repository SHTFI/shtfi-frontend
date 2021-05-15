import React from 'react'
import { Home } from './views'

import { Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Home.default />
      </Route>
    </Switch>
  )
}

export default App
