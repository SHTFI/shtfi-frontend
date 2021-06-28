import React, { useContext } from 'react'
import styled from 'styled-components'
import { OverlayContext } from '../../../context'

const Overlay: React.FC = () => {
  const { overlayVisible, toggleOverlay } = useContext(OverlayContext)
  const ReturnedOverlay = styled(StyledOverlay)`
    opacity: ${overlayVisible ? 1 : 0};
    visibility: ${overlayVisible ? 'visible' : 'hidden'};
    max-height: ${overlayVisible ? '100%' : '0'};
    transition: opacity 0.3s ease 0s, visibility 0s ease 0.4s,
      max-height 0s ease 0.4s;
  `
  return <ReturnedOverlay onClick={toggleOverlay} />
}

const StyledOverlay = styled.div`
  height: 100%;
  width: 100%;
  content: '';
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 12;
  transition: opacity 0.3s ease 0.1s, visibility 0s ease 0s,
    max-height 0s ease 0s;
`
export default Overlay
