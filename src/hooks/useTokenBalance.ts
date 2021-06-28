import { useRef, useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useTokenContract } from '.'
import { formatUnits } from '@ethersproject/units'

const useTokenBalance = () => {
  const { account } = useWeb3React()
  const { tokenContract, setActiveTokenContract } = useTokenContract()
  const [tokenBalance, setTokenBalance] = useState(0)
  const currentToken = useRef<string>('')

  const setActiveTokenBalance = async (tokenAddress: string) => {
    currentToken.current = tokenAddress
  }

  useEffect(() => {
    const getTokenBalance = async () => {
      if (account && tokenContract) {
        const request = await tokenContract.methods.balanceOf(account).call()
        const balance = parseFloat(formatUnits((await request).toString()))
        setTokenBalance(balance)
      }
    }

    if (
      currentToken.current &&
      tokenContract?.options.address !== currentToken.current
    ) {
      setActiveTokenContract(currentToken.current)
    } else {
      getTokenBalance()
    }
  }, [currentToken, account, setActiveTokenContract, tokenContract])
  return { tokenBalance, setActiveTokenBalance }
}

export default useTokenBalance
