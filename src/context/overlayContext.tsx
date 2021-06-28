import React, { createContext, useState } from 'react'

export const OverlayContext = createContext<any>(null)

export const OverlayProvider: React.FC = ({ children }) => {
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false)

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible)
  }

  const hideOverlay = () => {
    setOverlayVisible(false)
  }

  return (
    <OverlayContext.Provider
      value={{ overlayVisible, toggleOverlay, hideOverlay }}
    >
      {children}
    </OverlayContext.Provider>
  )
}
