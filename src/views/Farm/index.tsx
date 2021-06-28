import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch } from 'react-router'
import { Card, Main, Button } from '../../components/base'
import { Farm } from '../../config/types'
import farms from '../../config/farms'
import styled from 'styled-components'
import { ModalContext } from '../../context'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { useInactiveListener, useEagerConnect } from '../../hooks'

interface FarmRoute {
  farm: string
}

const FarmView: React.FC = () => {
  // Use state to set the farm for this page
  const [currentFarm, setCurrentFarm] = useState<Farm>()
  // Set our activating web3 connector in the state to prevent infinitely trying to connect to one
  const [activatingConnector, setActivatingConnector] = useState<any>()
  // Get our web3 tools from the useWeb3React library
  const { chainId, account, activate, library, connector } =
    useWeb3React<Web3Provider>()
  // Use our modal context
  const { toggleModal, closeModal } = useContext(ModalContext)
  // Get the matched farm from the URL
  const match = useRouteMatch('/farm/:farm')
  // Type the params to satisfy typescript
  const typedParams = match?.params as FarmRoute
  // Set a variable so we know when we have tried to connect to web3 using a pre authorised wallet
  const triedEager = useEagerConnect()

  // Use effect to change the active farm
  useEffect(() => {
    const matchedFarmName = typedParams.farm.toLowerCase()
    if (matchedFarmName !== currentFarm?.stakedToken.symbol.toLowerCase()) {
      const farmObject = farms.find(
        (farm) => farm.stakedToken.symbol.toLowerCase() === matchedFarmName
      )
      setCurrentFarm(farmObject)
    }
  }, [currentFarm, typedParams]) // Will update if the current farm changes or the URL does

  // Farm modal
  const FarmModalContent: React.FC<{ closeModal: () => void }> = ({
    closeModal,
  }) => {
    return (
      <>
        <header>
          <h1>{currentFarm?.stakedToken.name} Info</h1>
        </header>
        <div></div>
        <footer>
          <Button style={{ backgroundColor: 'black' }} onClick={closeModal}>
            Close
          </Button>
        </footer>
      </>
    )
  }

  const handleFarmInfoToggle = () => {
    toggleModal(<FarmModalContent closeModal={closeModal} />)
  }

  // Staked token Modal
  const StakedTokenModalContent: React.FC<{ closeModal: () => void }> = ({
    closeModal,
  }) => {
    return (
      <>
        <header>
          <h1>{currentFarm?.stakedToken.name} Info</h1>
        </header>
        <div>
          {currentFarm?.stakedToken.description?.map((p, i) => (
            <p key={`${currentFarm.stakedToken.symbol}-descModal-p-${i}`}>
              {p}
            </p>
          ))}
        </div>
        <footer>
          <Button style={{ backgroundColor: 'black' }} onClick={closeModal}>
            Close
          </Button>
        </footer>
      </>
    )
  }

  const handleTokenInfoToggle = () => {
    toggleModal(<StakedTokenModalContent closeModal={closeModal} />)
  }

  // Try and add our inactive listener if triedEager or activatingConnector is falsy
  useInactiveListener(!triedEager || !!activatingConnector)

  return (
    <Main>
      <Header>
        <FarmHeaderIconWrapper>
          <img
            src={currentFarm?.stakedToken.icon}
            width="30"
            height="30"
            alt="Shit Defi logo"
            style={{ marginTop: 7.5 }}
          />
          <span>{currentFarm?.stakedToken.symbol}</span>
        </FarmHeaderIconWrapper>
        <h1>{currentFarm?.stakedToken.name} Farm</h1>
        <HeaderToolbar>
          <HeaderButton onClick={handleFarmInfoToggle}>Farm Info</HeaderButton>
          <HeaderButton onClick={handleTokenInfoToggle}>
            {currentFarm?.stakedToken.symbol} Info
          </HeaderButton>
        </HeaderToolbar>
      </Header>
      <Card>
        <CardUserBalance>
          <p>Your balance:</p>
          <p>10000</p>
          <div>
            <span>12% APY</span>
            <span>0.01% DAILY</span>
          </div>
          <button onClick={() => console.log('login')}>Login</button>
        </CardUserBalance>
        <CardRewardsButton>Rewards: 3123 SHTFI</CardRewardsButton>
        <CardActionButtons>
          <div>
            <button>Stake</button>
            <button>Unstake</button>
          </div>
          <button>Claim Rewards</button>
        </CardActionButtons>
      </Card>
    </Main>
  )
}

const Header = styled.header`
  margin-top: 7rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;

  h1,
  p {
    color: ${(props) => props.theme.colorPallette.white};
  }

  h1 {
    text-transform: uppercase;
  }

  p {
    margin: 0.5rem;
    line-height: 1.6rem;
  }
`

const HeaderToolbar = styled.div``

const HeaderButton = styled.button``

const FarmHeaderIconWrapper = styled.div`
  background-color: ${(props) => props.theme.colorPallette.white};
  padding: 5px;
  border-radius: 0 15px 15px 15px;
  text-align: center;
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 1rem;
    font-size: 1.2rem;
    display: block;
    font-weight: 600;
  }
`

const CardUserBalance = styled.div`
  color: ${(props) => props.theme.colorPallette.white};
  margin: 0;
  text-align: left;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;

  p {
    margin: 0;
  }

  p:first-child {
    flex-shrink: 0;
    flex-basis: 100%;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  p:nth-child(2) {
    font-size: 3.2em;
    display: inline-block;
  }

  div {
    display: inline-flex;
    flex-direction: column;
    align-self: center;
    margin-left: 2rem;
    font-weight: 600;
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
  display: inline-block;
  align-self: center;
`

const CardActionButtons = styled.div`
  align-self: center;
  margin: 1rem;

  > button {
    appearance: none;
    background: none;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 25px;
    width: 100%;
    margin: 1rem 0;
    color: ${(props) => props.theme.colorPallette.white};
    background-color: ${(props) => props.theme.colorPallette.black};
  }

  div {
    button {
      appearance: none;
      background: none;
      border: none;
      padding: 1rem 1.5rem;
      border-radius: 25px 0 0 25px;

      &:first-of-type {
        border-radius: 25px 0 0 25px;
        color: ${(props) => props.theme.colorPallette.white};
        background-color: ${(props) => props.theme.colorPallette.black};
      }

      &:nth-of-type(2) {
        border-radius: 0 25px 25px 0;
        background-color: ${(props) => props.theme.colorPallette.white};
        color: ${(props) => props.theme.colorPallette.black};
      }
    }
  }
`

export default FarmView
