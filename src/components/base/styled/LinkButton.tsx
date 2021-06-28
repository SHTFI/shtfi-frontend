import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkButton = styled(Link)`
  border: 2px solid transparent;
  appearance: none;
  background-color: ${(props) => props.theme.colorPallette.primary};
  color: ${(props) => props.theme.colorPallette.white};
  font-weight: normal;
  border-radius: 25px;
  padding: 5px 10px;
  margin: 5px;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
`
export default LinkButton
