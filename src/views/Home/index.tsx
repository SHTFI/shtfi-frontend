import React from 'react'
import { LinkButton, SocialIcons, Droplet, Main } from '../../components/base'
import logo from '../../assets/images/shit-logo.svg'
import { FaTwitter, FaTelegram, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

const Home: React.FC = () => {
  return (
    <Main>
      <header>
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
      <TextArea>
        <p>
          Please be aware that your funds are at risk and Shit Defi has been
          made as a personal side project.
        </p>
        <p>
          Shit Defi is an open source project which can be verified on our{' '}
          <a href="https://github.com/shitdefi" title="Verify our GitHub">
            GitHub
          </a>
          .
        </p>
        <p>Shit Defi is not trying to be the next moon project. It's shit.</p>
      </TextArea>
      <LinkButton to="/farms">Go To Farms</LinkButton>
    </Main>
  )
}

const TextArea = styled.section`
  font-size: 16px;
  color: ${(props) => props.theme.colorPallette.white};
  padding: 10px;
  line-height: 18px;
  letter-spacing: 1.5px;
  opacity: 0.9;
  max-width: 400px;
  font-weight: normal;
`

export default Home
