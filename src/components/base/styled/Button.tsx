import styled from 'styled-components'

const Button = styled.button`
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
  cursor: pointer;
`
export default Button
