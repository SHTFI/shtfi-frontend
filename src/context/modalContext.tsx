import React, { createContext, useContext, useEffect, useState } from 'react'
import Card from '../components/card'
import { OverlayContext } from './overlayContext'
import styled from 'styled-components'

export const ModalContext = createContext<any>(null)

export const ModalProvider: React.FC = ({ children }) => {
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [modalChildren, setModalChildren] = useState<React.FC[]>([])
  const { toggleOverlay, overlayVisible, hideOverlay } =
    useContext(OverlayContext)

  useEffect(() => {
    if (overlayVisible !== modalActive) {
      setModalActive(overlayVisible)
    }
  }, [overlayVisible, modalActive])

  const toggleModal = (childNodes: React.FC[]) => {
    setModalChildren(childNodes)
    setModalActive(!modalActive)
    toggleOverlay()
  }

  const closeModal = () => {
    setModalActive(false)
    hideOverlay()
  }

  return (
    <ModalContext.Provider value={{ modalActive, toggleModal, closeModal }}>
      {modalActive && <StyledModal>{modalChildren}</StyledModal>}
      {children}
    </ModalContext.Provider>
  )
}

const StyledModal = styled(Card)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`
