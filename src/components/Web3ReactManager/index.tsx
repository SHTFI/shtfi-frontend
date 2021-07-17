import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { network } from '../../context/web3Context'
import { useEagerConnect, useInactiveListener } from '../../hooks'

const Web3ReactManager: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  // Get the status of the injected connector
  const { active: injectedActive } = useWeb3React()
  // Get the status of the network connector
  const {
    active: networkActive,
    activate: activateNetwork,
    error: networkError,
  } = useWeb3React('Network')
  // Try to connect to the injected connector asap
  const triedEager = useEagerConnect()
  // Use effect to connect to network connector if eager connect fails
  useEffect(() => {
    if (triedEager && !networkActive && !networkError && !injectedActive) {
      activateNetwork(network)
    }
  }, [triedEager, networkActive, activateNetwork, injectedActive, networkError])

  // If no account is active (triedEager is falsy) use the inactive listener
  useInactiveListener(!triedEager)

  // Prevent anything from happening on page load until we have tried the injected connector
  if (!triedEager) return null

  // If we don't have an account context and there's a network error something has gone wrong
  if (!injectedActive && networkError) {
    console.info('Something went tits up with web3')
    console.error(networkError)
    return null
  }

  // If neither injected or network is active we must be loading
  if (!injectedActive && !networkActive) {
    console.info('Loading web3')
    return null
  }

  // Return children to this
  return children
}

export default Web3ReactManager
