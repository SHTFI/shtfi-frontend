import { useState } from 'react'
import erc20ABI from '../config/abi/erc20.json'
import { Contract, ContractInterface } from '@ethersproject/contracts'
import { useWeb3 } from '.'

/**
 * Function to return an ERC20/BEP20 token contract instance.
 * Will get the library from the current provider unless the use is logged in via
 * an injected connector.
 *
 * If the user is logged in via an injected connector we will provide a signer from
 * the exposed library which will allow them to make transactions.
 *
 * @returns new Contract instance
 */

const useTokenContract = () => {
  const { library } = useWeb3()
  const [tokenContract, setTokenContract] = useState<Contract>()

  const setActiveTokenContract = (address: any) => {
    const contract = new Contract(
      address,
      erc20ABI as unknown as ContractInterface,
      library as any
    )
    if (contract) return setTokenContract(contract)
  }

  return { tokenContract, setActiveTokenContract }
}

export default useTokenContract
