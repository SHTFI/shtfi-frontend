import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

const useNativeBalance = () => {
  const [nativeBalance, setNativeBalance] = useState<number>(0)
  const { library, account } = useWeb3React()

  useEffect(() => {
    if (account && library) {
      getBalance(account)
    }
  }, [library, account])

  const getBalance = async (account: string) => {
    if (library) {
      const balance = (await library.eth.getBalance(account)) as string
      setNativeBalance(parseFloat(library.utils.fromWei(balance)))
    }
    return nativeBalance
  }

  return { nativeBalance, getBalance }
}

export default useNativeBalance
