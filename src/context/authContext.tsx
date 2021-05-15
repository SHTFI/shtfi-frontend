import React, { useState } from 'react'

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
  const [isConnected, setConnection] = useState(() => {
    const localStorage = window.localStorage.getItem(CACHE_KEY)
    return localStorage ? true : false
  })
  const [address, setAddress] = useState(() => {
    const localStorage = window.localStorage.getItem(CACHE_KEY)
    return localStorage ? JSON.parse(localStorage).address : undefined
  })

  const login = () => {
    setConnection(true)
    setAddress('yo')
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
    window.localStorage.removeItem(CACHE_KEY)
  }

  return (
    <AuthContext.Provider value={{ isConnected, address, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
