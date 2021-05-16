import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: ${(props) => props.theme.colorPallette.primary};
  border-radius: 50%;
  max-width: 90%;
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
    z-index: -1;
    transform: rotate(-45deg);
  }
`
const Droplet: React.FC<{ small?: boolean }> = ({
  children,
  small = false,
  ...rest
}) => {
  const StyledDroplet = styled(Div)`
    width: ${() => (small ? '75px' : '150px')};
    height: ${() => (small ? '75px' : '150px')};

    &::before {
      width: ${() => (small ? '75px' : '150px')};
      height: ${() => (small ? '75px' : '150px')};
    }
  `
  return <StyledDroplet {...rest}>{children}</StyledDroplet>
}

export default Droplet
