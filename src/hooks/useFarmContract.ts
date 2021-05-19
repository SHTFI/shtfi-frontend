import { useState, useEffect } from 'react'
import { useWeb3 } from '.'
import shitFarmABI from '../config/abi/shitFarm.json'
import { Contract } from 'web3-eth-contract'
import { AbiItem } from 'web3-utils'

interface FarmInfo {
  allocPoint: string | undefined
  lastRewardBlock: string | undefined
  shitAlloc: string | undefined
  shitPerBlock: string | undefined
  stakedBalance: string | undefined
  stakedToken: string | undefined
  startBlock: string | undefined
}

const useFarm = () => {
  const [farmContract, setFarmContract] = useState<Contract>()
  const web3 = useWeb3()

  const setActiveFarmContract = (address: string) => {
    const contract = new web3.eth.Contract(
      shitFarmABI as unknown as AbiItem,
      address
    )

    if (contract) {
      setFarmContract(contract)
    }
  }

  return { farmContract, setActiveFarmContract }
}

export default useFarm
