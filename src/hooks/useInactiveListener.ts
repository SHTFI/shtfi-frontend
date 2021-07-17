import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected, network } from '../context/web3Context'

// Function to listen to changes to the web3 interface
const useInactiveListener = (suppress: boolean = false) => {
  const { active, error, activate } = useWeb3React()

  // Use effect to react to any changes in the web3 interface
  useEffect((): any => {
    // Get the ethereum class if it is provided
    const { ethereum } = window as any

    // If Ethereum is defined, inactive, unsuppressed  and without error add our listeners
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      // Handle any connections to the ethereum class made with an injected connector
      const handleConnect = () => {
        console.info('Handling connect event')
        console.log(injected)
        activate(injected)
      }
      // Handle changing of the current chain
      const handleChainChanged = (chainId: string | number) => {
        console.info('Handling chainChanged event with payload', chainId)
        activate(injected)
      }
      // Handle account change event
      const handleAccountsChanged = (accounts: string[]) => {
        console.info('Handling accounts changed event with payload: ', accounts)
        // If an account has been passed activate our injected connector
        if (accounts.length > 0) {
          activate(injected)
        }
      }
      // Handle network change event
      const handleNetworkChanged = (networkId: string | number) => {
        console.info('Handling networkChanged event with payload: ', networkId)
        activate(injected)
      }
      // Add our listeners using the ethereum.on method
      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)

      // Clean up after ourselves so we don't end up with multiple listeners for each event
      return () => {
        // Ensure the removeListener method is available
        if (ethereum.removeListener) {
          // Remove our listeners
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
        }
      }
    }
  }, [active, error, suppress, activate])
}

export default useInactiveListener
