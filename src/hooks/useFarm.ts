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
  const [farmContract, setFarm] = useState<Contract>()
  const [farmInfo, setFarmInfo] = useState<FarmInfo | undefined>()
  const web3 = useWeb3()

  useEffect(() => {
    const getFarmInfo = async () => {
      const farmInfoRequest = farmContract?.methods.poolInfo(0).call()
      const data = await farmInfoRequest
      const {
        allocPoint,
        lastRewardBlock,
        shitAlloc,
        shitPerBlock,
        stakedBalance,
        stakedToken,
        startBlock,
      } = data
      setFarmInfo({
        allocPoint,
        lastRewardBlock,
        shitAlloc,
        shitPerBlock,
        stakedBalance,
        stakedToken,
        startBlock,
      })
    }
    getFarmInfo()
  }, [farmContract])

  const setActiveFarm = (address: string) => {
    const contract = new web3.eth.Contract(
      shitFarmABI as unknown as AbiItem,
      address
    )
    setFarm(contract)
  }

  return { farmContract, setActiveFarm, farmInfo }
}

export default useFarm
