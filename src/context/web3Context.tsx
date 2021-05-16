import { getNodeUrls } from '../utils'
import {} from '@web3-react/core'
import { BscConnector } from '@binance-chain/bsc-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import Web3 from 'web3'

const CHAIN_ID = parseInt(process.env.REACT_APP_CHAIN_ID as string)

const nodeUrl = getNodeUrls()[0]

const Bsc = new BscConnector({ supportedChainIds: [CHAIN_ID] })

const Injected = new InjectedConnector({
  supportedChainIds: [CHAIN_ID],
})
const WalletConnect = new WalletConnectConnector({
  rpc: { [CHAIN_ID]: nodeUrl },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 12000,
})

enum ConnectorNames {
  Injected = 'Injected',
  WalletConnect = 'WalletConnect',
  BSC = 'Bsc',
}

export const ConnectorsByName: { [ConnectorName in ConnectorNames]: any } = {
  Injected,
  WalletConnect,
  Bsc,
}

export const getLibrary = (provider: any): Web3 => {
  const library = new Web3(provider)
  return library
}
