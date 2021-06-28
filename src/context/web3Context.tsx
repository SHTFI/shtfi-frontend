import { getNodeUrls } from '../utils'
import { NodeList } from '../utils/getRPCEndpoint'
import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { Web3Provider } from '@ethersproject/providers'

// Get a list of all compatible chain IDs which have been correctly typed
const CHAIN_IDS = (process.env.REACT_APP_CHAIN_ID as string)
  .split(',')
  .map((id) => parseInt(id))

/**
 * Get the default chain ID by first typing the env variable to a string and
 * then parsing it as an integer to then type as a key of NodeList
 */
const DEFAULT_CHAIN_ID = parseInt(
  process.env.REACT_APP_DEFAULT_CHAIN_ID as string
) as keyof NodeList

// Get an object with all Network Endpoints
const nodeUrls = getNodeUrls()

// Create our inject web3 connector using our array of valid chain IDs
export const injected = new InjectedConnector({
  supportedChainIds: [...CHAIN_IDS],
})

// Create our http network connector which our correctly typed array of RPC end points
export const network = new NetworkConnector({
  urls: { ...nodeUrls[DEFAULT_CHAIN_ID] },
  defaultChainId: DEFAULT_CHAIN_ID,
})

enum ConnectorNames {
  Injected = 'Injected',
  Network = 'Network',
}

export const connectorsByName: { [ConnectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
}

export const getLibrary = (provider: any): Web3Provider => {
  return new Web3Provider(provider)
}
