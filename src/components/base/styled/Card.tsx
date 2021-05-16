import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>
}

const StyledCard = styled.div`
  width: 300px;
  max-width: 90%;
  background-color: ${(props) => props.theme.colorPallette.primary};
  border-radius: 0 2.5rem 2.5rem 2.5rem;
`

export default Card
