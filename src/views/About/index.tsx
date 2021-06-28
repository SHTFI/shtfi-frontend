import React from 'react'
import { Droplet } from '../../components/base'
import logo from '../../assets/images/shit-logo.svg'
import styled from 'styled-components'
import { FaTwitter, FaTelegram, FaEnvelope } from 'react-icons/fa'

const Contact: React.FC = () => {
  return (
    <main>
      <header>
        {' '}
        <Droplet>
          <img src={logo} width="50" height="50" alt="Shit Defi logo" />
          <h1>Shit Defi</h1>
          <SocialIcons>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://twitter.com">
              <FaTelegram />
            </a>
            <a href="https://twitter.com">
              <FaEnvelope />
            </a>
          </SocialIcons>
        </Droplet>
      </header>
    </main>
  )
}

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;

  a {
    color: ${(props) => props.theme.colorPallette.white};
    margin: 2px;
  }
`

export default Contact
