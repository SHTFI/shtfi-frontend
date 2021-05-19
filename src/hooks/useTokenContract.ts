import { useState } from 'react'
import erc20ABI from '../config/abi/erc20.json'
import { Contract } from 'web3-eth-contract'
import { useWeb3 } from '.'
import { AbiItem } from 'web3-utils'

const useTokenContract = () => {
  const [tokenContract, setTokenContract] = useState<Contract>()
  const web3 = useWeb3()

  const setActiveTokenContract = (address: any) => {
    const contract = new web3.eth.Contract(
      erc20ABI as unknown as AbiItem,
      address
    )
    if (contract) return setTokenContract(contract)
  }

  return { tokenContract, setActiveTokenContract }
}

export default useTokenContract
