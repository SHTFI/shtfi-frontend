import React from 'react'
import { ThemeProvider, AuthProvider } from './context'

const Providers: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  )
}

export default Providers
