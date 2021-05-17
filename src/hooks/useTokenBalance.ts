import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import erc20ABI from '../config/abi/erc20.json'
import { Contract, Token } from '../config/types'
import { getContract } from '../utils'
import web3 from 'web3'
import { useWeb3 } from '.'
import { tokens } from '../config/contracts'

const useTokenBalance = () => {
  const [tokenBalance, setTokenBalance] = useState<number>(0)
  const { account, chainId } = useWeb3React<web3>()
  const web3 = useWeb3()

  useEffect(() => {
    getTokenBalance(tokens[0])
  }, [account, chainId])

  const getTokenBalance = async (token: Token) => {
    if (account && chainId) {
      const contract = getContract(
        erc20ABI,
        tokens[0].contract[chainId as keyof Contract]
      )
      const request = await contract.methods.balanceOf(account).call()
      const balance = parseFloat(web3.utils.fromWei((await request).toString()))
      setTokenBalance(balance)
    }
  }

  return { tokenBalance, getTokenBalance }
}

export default useTokenBalance
