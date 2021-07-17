import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../context/web3Context'

// Function to try and connect to our injected web3 interface if we have already received auth
const useEagerConnect = () => {
  // Get some helpers from the useWeb3React library
  const { active, activate } = useWeb3React()
  // Set a state so we don't try to connect multiple times
  const [tried, setTried] = useState(false)
  // Use effect to try and connect on component mount
  useEffect(() => {
    // Check if the injected connector is authorized
    injected.isAuthorized().then((isAuthorized: boolean) => {
      // If it is then activate it
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          // And set the tried state to true
          setTried(true)
        })
      } else {
        // If it isnt just set tried state to true
        setTried(true)
      }
    })
  }, [activate])

  // If we connected successfully we will wait for confirmation then set the tried state to true
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [tried, active])

  return tried
}

export default useEagerConnect
