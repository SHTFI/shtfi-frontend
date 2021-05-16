import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { AbiItem } from 'web3-utils'
import erc20ABI from '../config/abi/erc20.json'
import { Token, Contract } from '../config/types'
import { tokens } from '../config/contracts'
import web3 from 'web3'

const useTokenBalance = () => {
  const [tokenBalance, setTokenBalance] = useState<number>(0)
  const { library, account, chainId } = useWeb3React<web3>()
  const { ethereum } = window as any

  useEffect(() => {
    getTokenBalance(tokens[0])
  }, [])

  const getTokenBalance = async (token: Token) => {
    if (library) {
      const contract = new library.eth.Contract(
        erc20ABI as unknown as AbiItem,
        token.contract[chainId as keyof Contract]
      )
      const balance = await contract.methods.balanceOf(account)
      console.log(balance)
    }
  }

  return { tokenBalance, getTokenBalance }
}

export default useTokenBalance
