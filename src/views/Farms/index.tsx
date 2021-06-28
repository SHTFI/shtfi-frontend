import React, { useEffect, useState, useContext } from 'react'
import { Droplet, Main } from '../../components/base'
import logo from '../../assets/images/shit-logo.svg'
import { Card, Button } from '../../components/base'
import styled from 'styled-components'
import { useTokenBalance } from '../../hooks'
import farms from '../../config/farms'
import { FaPlus } from 'react-icons/fa'
import { OverlayContext } from '../../context'
import { Link, useRouteMatch } from 'react-router-dom'

const Farms: React.FC = () => {
  const [farm, setActiveFarm] = useState(farms[0])
  const { toggleOverlay } = useContext(OverlayContext)
  const { tokenBalance, setActiveTokenBalance } = useTokenBalance()

  useEffect(() => {
    setActiveTokenBalance(farm.stakedToken.contract[97])
  }, [farm, tokenBalance, setActiveTokenBalance])
  const match = useRouteMatch('/farm/:farm')

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
        <CardHeader>
          <CardHeaderIconWrapper>
            <img
              src={`/images/token-icons/${farm.stakedToken.symbol.toLocaleLowerCase()}.svg`}
              alt={`Logo for ${farm.stakedToken.name}`}
              width="50"
              height="50"
            />
          </CardHeaderIconWrapper>
          <CardHeaderContentWrapper>
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
          </CardHeaderContentWrapper>
        </CardHeader>
        <CardContentWrapper>
          <CardChangeWrapper onClick={toggleOverlay}>
            <span>MOCK</span>
            <FaPlus />
          </CardChangeWrapper>
          <CardUserBalance>
            <p>Your balance:</p>
            <p>
              {tokenBalance}
              <span>12% APY</span>
            </p>
          </CardUserBalance>
          <CardRewardsButton>Rewards: 3123 SHTFI</CardRewardsButton>
        </CardContentWrapper>
        <CardSelectButton to={`/farm/${farm.stakedToken.symbol}`}>
          Select Farm
        </CardSelectButton>
      </Card>
      {}
    </Main>
  )
}

const Header = styled.header`
  color: ${(props) => props.theme.colorPallette.white};
  margin-bottom: 25px;
`
const CardHeader = styled.header`
  display: flex;
  padding: 5px;
`
const CardHeaderIconWrapper = styled.div`
  background-color: ${(props) => props.theme.colorPallette.white};
  padding: 5px;
  border-radius: 0 5px 5px 5px;
  margin-right: 10px;
`
const CardHeaderContentWrapper = styled.div`
  align-self: center;
  font-size: 12px;

  p {
    margin: 0;
    line-height: 16px;
    color: ${(props) => props.theme.colorPallette.white};
    font-weight: bold;

    span {
      font-weight: normal;
    }
  }
`
const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`
const CardChangeWrapper = styled(Button)`
  background-color: ${(props) => props.theme.colorPallette.white};
  color: ${(props) => props.theme.colorPallette.black};
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: bold;
  }
`
const CardUserBalance = styled.div`
  color: ${(props) => props.theme.colorPallette.white};
  margin: 0;
  text-align: left;
  width: 100%;
  padding: 12px;
  p {
    margin: 0;
  }
  p:first-child {
    font-size: 12px;
  }
  p:nth-child(2) {
    font-size: 3.2em;
    span {
      margin-left: 12px;
      font-size: 12px;
      vertical-align: super;
    }
  }
`
const CardRewardsButton = styled(Button)`
  background-color: ${(props) => props.theme.colorPallette.white};
  color: ${(props) => props.theme.colorPallette.black};
  font-weight: bold;
  letter-spacing: 1.25px;
  border-radius: 0;
  padding: 3px;
  font-size: 10px;
`
const CardSelectButton = styled(Link)`
  background-color: ${(props) => props.theme.colorPallette.black};
  color: ${(props) => props.theme.colorPallette.white};
  font-weight: bold;
  letter-spacing: 1.25px;
  margin: 10px auto 0 auto;
  padding: 10px;
`

export default Farms
