import React from 'react'
import useTheme from '../../hooks/useTheme'
import { Button, Droplet } from '../../components/base'
import logo from '../../assets/images/shit.svg'
import { FaTwitter, FaTelegram, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

const Home: React.FC = () => {
  const { isDark, toggleTheme, theme } = useTheme()

  return (
    <main
      style={{
        backgroundColor: theme.backgroundColor.main,
        color: theme.textColor.main,
      }}
    >
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
          {isDark}
          <Button onClick={() => toggleTheme()}>
            {isDark ? 'light' : 'dark'}
          </Button>
        </Droplet>
      </header>
      <TextArea>
        <p>Shit Defi is not trying to be the next moon project. It's shit.</p>
        <p>
          It is a completely honest and open project but please be aware that
          your funds are at risk and it has been made as a personal project.
        </p>
      </TextArea>
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

const TextArea = styled.section`
  font-size: 16px;
  color: ${(props) => props.theme.colorPallette.white};
  padding: 10px;
  line-height: 18px;
  letter-spacing: 1.5px;
  opacity: 0.9;
`

export default Home
