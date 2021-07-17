import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'

const useWeb3 = (): Web3ReactContextInterface<Web3Provider> => {
  const injectedContext = useWeb3React<Web3Provider>()
  const networkContext = useWeb3React<Web3Provider>('Network')
  return injectedContext.active ? injectedContext : networkContext
}

export default useWeb3
