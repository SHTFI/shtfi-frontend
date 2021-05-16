import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ConnectorsByName } from './web3Context'

const CACHE_KEY = 'AUTH'

interface AuthInterface {
  isConnected: boolean
  address: undefined | string
  login: () => void
  logout: () => void
}

const defaultState: AuthInterface = {
  isConnected: false,
  address: undefined,
  login: () => {},
  logout: () => {},
}

const AuthContext = React.createContext(defaultState)

const AuthProvider: React.FC = ({ children }) => {
  const [isConnected, setConnection] = useState<boolean>(() => {
    const localStorage = window.localStorage.getItem(CACHE_KEY)
    return localStorage ? true : false
  })

  const [address, setAddress] = useState<string | undefined>(() => {
    const localStorage = window.localStorage.getItem(CACHE_KEY)
    return localStorage ? JSON.parse(localStorage).address : undefined
  })

  const { activate, deactivate } = useWeb3React()

  const login = () => {
    activate(ConnectorsByName.Injected).then((data) => {
      setConnection(true)
    })
    const localStorage = JSON.parse(
      window.localStorage.getItem(CACHE_KEY) as string
    )
    window.localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ ...localStorage, address })
    )
  }

  const logout = () => {
    setAddress(undefined)
    setConnection(false)
    deactivate()
    window.localStorage.removeItem(CACHE_KEY)
  }

  return (
    <AuthContext.Provider value={{ isConnected, address, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
