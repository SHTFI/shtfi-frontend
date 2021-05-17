import Web3 from 'web3'
import { getNodeUrls } from './getRPCEndpoint'

const RPC_URL = getNodeUrls()[0]

const httpProvider = new Web3.providers.HttpProvider(RPC_URL)
export const httpWeb3 = new Web3(httpProvider)

export const getWeb3Http = () => httpWeb3
