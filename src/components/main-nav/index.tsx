import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, SocialIcons } from '../base'
import logo from '../../assets/images/shit-logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { siteInfo } from '../../config'

const MainNav: React.FC = () => {
  const [drawerOpen, setDrawOpen] = useState<boolean>(false)
  const history = useHistory()

  const navDrawerToggle = () => {
    setDrawOpen(!drawerOpen)
  }

  return (
    <>
      <Nav>
        <NavLogoLink to="/">
          <img width="25" height="25" src={logo} alt="Shit Defi logo" />
        </NavLogoLink>
        <NavButtons>
          <NavButton onClick={navDrawerToggle}>Menu</NavButton>
          <NavButton onClick={() => console.log('login')}>Login</NavButton>
        </NavButtons>
      </Nav>
      <Drawer className={drawerOpen ? 'visible' : ''}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerHeaderLogo>
              <NavLogoLink to="/">
                <img width="25" height="25" src={logo} alt="Shit Defi logo" />
              </NavLogoLink>
              <span>{siteInfo.title}</span>
            </DrawerHeaderLogo>
            <NavButton onClick={navDrawerToggle}>Close</NavButton>
          </DrawerHeader>
          <DrawerLinks>
            {siteInfo.navLinks.map((link) => (
              <DrawerLinkItem key={`nav-link-${link.label}`}>
                <DrawerLink to={link.url} title={link.title}>
                  {link.label}
                </DrawerLink>
              </DrawerLinkItem>
            ))}
          </DrawerLinks>
          <DrawerFooter>
            <SocialIcons />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colorPallette.black};
  z-index: 9;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const NavButtons = styled.div`
  display: block;
`

const NavButton = styled(Button)`
  background-color: transparent;
`

const NavLogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`

const Drawer = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  content: '';
  top: 0;
  left: 0;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  z-index: 0;

  &.visible {
    z-index: 10;
    opacity: 1;
    visibility: visible;
    max-height: 1000%;

    div:first-child {
      transform: translate(0);
    }
  }
`
const DrawerContent = styled.div`
  height: 100%;
  width: 300px;
  max-width: 90%;
  background-color: ${(props) => props.theme.colorPallette.black};
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  transform: translate(-100%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 0.3s ease;
`
const DrawerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  align-self: flex-start;
`
const DrawerHeaderLogo = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 15px;
    font-size: ${(props) => props.theme.textSize.p};
  }
`

const DrawerLinks = styled.ul`
  list-style-type: none;
  margin: 0 0 0 0;
  padding: 0;
  width: 100%;
`
const DrawerLinkItem = styled.li`
  padding: 0;
  margin: 0;
  display: block;
`

const DrawerLink = styled(Link)`
  padding: 0.6rem 1.2rem;
  text-align: center;
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colorPallette.white};
  font-size: ${(props) => props.theme.textSize.p};
`

const DrawerFooter = styled.footer`
  width: 100%;
  align-self: flex-end;
  padding: 1rem 1.4rem;
`

export default MainNav
