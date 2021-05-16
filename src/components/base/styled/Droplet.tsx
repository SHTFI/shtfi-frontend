import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: ${(props) => props.theme.colorPallette.primary};
  width: 150px;
  border-radius: 50%;
  max-width: 90%;
  height: 150px;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 2;

  &::before {
    background-color: ${(props) => props.theme.colorPallette.primary};
    position: absolute;
    content: '';
    border-radius: 50% 0 50% 50%;
    width: 150px;
    height: 150px;
    z-index: -1;
    transform: rotate(-45deg);
  }
`

const Droplet: React.FC = ({ children, ...rest }) => {
  return <Div {...rest}>{children}</Div>
}

export default Droplet
