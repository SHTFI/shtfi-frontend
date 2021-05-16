import { Web3ReactProvider } from '@web3-react/core'
import React from 'react'
import { ThemeProvider, AuthProvider } from './context'
import { getLibrary } from './context/web3Context'

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </Web3ReactProvider>
  )
}

export default Providers
