import { useState } from 'react'
import shitFarmABI from '../config/abi/shitFarm.json'
import { Contract, ContractInterface } from '@ethersproject/contracts'

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

  const setActiveFarmContract = (address: string) => {
    const contract = new Contract(
      address,
      shitFarmABI as unknown as ContractInterface
    )

    if (contract) {
      setFarmContract(contract)
    }
  }

  return { farmContract, setActiveFarmContract }
}

export default useFarm
