import { useEffect, useRef, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { getWeb3Http } from '../utils'

const useWeb3 = (): Web3 => {
  const { library } = useWeb3React()
  const [web3, setWeb3] = useState(library ? new Web3(library) : getWeb3Http())
  const providerRef = useRef(library)

  useEffect(() => {
    if (library !== providerRef.current) {
      setWeb3(library ? new Web3(library) : getWeb3Http())
      providerRef.current = library
    }
  }, [library])

  return web3
}

export default useWeb3
