import { Web3ReactProvider } from '@web3-react/core'
import React from 'react'
import { ThemeProvider, OverlayProvider, ModalProvider } from './context'
import { getLibrary } from './context/web3Context'

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider>
        <OverlayProvider>
          <ModalProvider>{children}</ModalProvider>
        </OverlayProvider>
      </ThemeProvider>
    </Web3ReactProvider>
  )
}

export default Providers
