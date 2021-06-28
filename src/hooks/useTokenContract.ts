import { useState } from 'react'
import erc20ABI from '../config/abi/erc20.json'
import { Contract, ContractInterface } from '@ethersproject/contracts'

const useTokenContract = () => {
  const [tokenContract, setTokenContract] = useState<Contract>()

  const setActiveTokenContract = (address: any) => {
    console.log(address)
    const contract = new Contract(
      address,
      erc20ABI as unknown as ContractInterface
    )
    if (contract) return setTokenContract(contract)
  }

  return { tokenContract, setActiveTokenContract }
}

export default useTokenContract
