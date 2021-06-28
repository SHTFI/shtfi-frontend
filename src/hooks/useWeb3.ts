import { useEffect, useRef, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers'
import { getWeb3Http } from '../utils'

const useWeb3 = (): Web3Provider | JsonRpcProvider => {
  const { library } = useWeb3React()
  const [web3, setWeb3] = useState(
    library ? new Web3Provider(library) : getWeb3Http()
  )
  const providerRef = useRef(library)

  useEffect(() => {
    if (library !== providerRef.current) {
      setWeb3(library ? new Web3Provider(library) : getWeb3Http())
      providerRef.current = library
    }
  }, [library])

  return web3
}

export default useWeb3
