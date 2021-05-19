import React, { useEffect } from 'react'
import { Droplet, Main } from '../../components/base'
import logo from '../../assets/images/shit-logo.svg'
import { Card } from '../../components/base'
import styled from 'styled-components'
import { useTokenBalance } from '../../hooks'
import farms from '../../config/farms'

const Farms: React.FC = () => {
  const { tokenBalance, setActiveTokenBalance } = useTokenBalance()

  useEffect(() => {
    setActiveTokenBalance(farms[0].stakedToken.contract[97])
  }, [farms, tokenBalance, setActiveTokenBalance])

  return (
    <Main>
      <Header>
        <Droplet small={true}>
          <img
            src={logo}
            width="50"
            height="50"
            alt="Shit Defi logo"
            style={{ marginTop: 7.5 }}
          />
        </Droplet>
        <h1>Shit Defi Farms</h1>
        <p>Stake your coins to earn SHTFI</p>
      </Header>
      <Card>
        <header className="">
          <div className="header-icon--wrapper"></div>
          <div className="header-content--wrapper">
            <p>
              Stake: <span>MOCK</span>
            </p>
            <p>
              Get: <span>SHTFI</span>
            </p>
            <p>
              Farm SHTFI Balance:: <span>1k</span>
            </p>
            <p>
              Farm MOCK Balance: <span>2k</span>
            </p>
          </div>
        </header>
        <div className="main-content--wrapper">
          <select>
            <option value="">Select Farm</option>
            <option value="MOCK">MOCK</option>
          </select>
          <div className="main-content__balance--wrapper">
            <p>Your balance:</p>
            <p>
              {tokenBalance}
              <span>12% APY</span>
            </p>
          </div>
          <div className="main-content__rewards--wrapper">
            <button>Rewards: 3123 SHTFI</button>
          </div>
        </div>
        <footer>
          <button>Select Farm</button>
        </footer>
      </Card>
    </Main>
  )
}

const Header = styled.header`
  color: ${(props) => props.theme.colorPallette.white};
`

export default Farms
