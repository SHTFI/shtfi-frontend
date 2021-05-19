import { useRef, useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { useWeb3, useTokenContract } from '.'

const useTokenBalance = () => {
  const { account } = useWeb3React<Web3>()
  const { tokenContract, setActiveTokenContract } = useTokenContract()
  const [tokenBalance, setTokenBalance] = useState(0)
  const currentToken = useRef<string>('')
  const web3 = useWeb3()

  const setActiveTokenBalance = async (tokenAddress: string) => {
    currentToken.current = tokenAddress
  }

  useEffect(() => {
    const getTokenBalance = async () => {
      if (account && tokenContract) {
        const request = await tokenContract.methods.balanceOf(account).call()
        const balance = parseFloat(
          web3.utils.fromWei((await request).toString())
        )
        setTokenBalance(balance)
      }
    }

    if (tokenContract?.options.address !== currentToken.current) {
      setActiveTokenContract(currentToken.current)
    } else {
      getTokenBalance()
    }
  }, [currentToken, account, setActiveTokenContract, tokenContract, web3.utils])
  return { tokenBalance, setActiveTokenBalance }
}

export default useTokenBalance
