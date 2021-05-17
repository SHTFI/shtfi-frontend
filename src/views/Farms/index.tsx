import React, { useEffect } from 'react'
import { Droplet, Main } from '../../components/base'
import logo from '../../assets/images/shit-logo.svg'
import { Card } from '../../components/base'
import styled from 'styled-components'
import { useTokenBalance, useFarm } from '../../hooks'
import farms from '../../config/farms'

const Farms: React.FC = () => {
  const { farmInfo, setActiveFarm } = useFarm()
  const { tokenBalance, getTokenBalance } = useTokenBalance()

  useEffect(() => {
    setActiveFarm(farms[0].contract)
  }, [])

  console.log(farmInfo)
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
        <p>Yo</p>
      </Card>
    </Main>
  )
}

const Header = styled.header`
  color: ${(props) => props.theme.colorPallette.white};
`

export default Farms
