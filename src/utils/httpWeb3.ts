import { JsonRpcProvider } from '@ethersproject/providers'
import { getNodeUrls } from './getRPCEndpoint'

const RPC_URL = getNodeUrls()[97]

const httpProvider = new JsonRpcProvider(RPC_URL[0])

export const getWeb3Http = () => httpProvider
