import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ConnectorsByName } from '../context/web3Context'
import web3 from 'web3'

const CACHE_KEY = 'AUTH'

const useAuth = () => {
  const { activate, active, deactivate, account, library, chainId, connector } =
    useWeb3React<web3>()
  const { ethereum } = window as any

  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await ConnectorsByName.Injected.isAuthorized()
        const isAuthorized = await response
        if (isAuthorized) await activate(ConnectorsByName.Injected)
      } catch (error) {
        console.error(error)
      }
    }
    if (!active) authCheck()
  }, [])

  useEffect(() => {
    const handleConnect = async () => {
      await activate(ConnectorsByName.Injected)
      console.info('Connected')
    }

    const handleDisconnect = async () => {
      deactivate()
      console.info('Disconnected')
    }

    const handleAccountsChanged = async (accounts: any) => {
      console.info("Handling 'accountsChanged' event with payload", accounts)
      if (accounts.length > 0) {
        await activate(ConnectorsByName.Injected)
      }
    }

    const handleChainChanged = async (chainId: string | number) => {
      console.info("Handling 'chainChanged' event with payload", chainId)
      await activate(ConnectorsByName.Injected)
    }
    const handleNetworkChanged = async (networkId: string | number) => {
      console.info("Handling 'networkChanged' event with payload", networkId)
      await activate(ConnectorsByName.Injected)
    }

    ethereum.on('connect', handleConnect)
    ethereum.on('disconnect', handleDisconnect)
    ethereum.on('accountsChanged', handleAccountsChanged)
    ethereum.on('chainChanged', handleChainChanged)
    ethereum.on('networkChanged', handleNetworkChanged)

    return () => {
      if (ethereum.removeListener) {
        ethereum.removeListener('connect', handleConnect)
        ethereum.removeListener('disconnect', handleDisconnect)
        ethereum.removeListener('accountsChanged', handleAccountsChanged)
        ethereum.removeListener('chainChanged', handleChainChanged)
        ethereum.removeListener('networkChanged', handleNetworkChanged)
      }
    }
  }, [active, activate, account, library, chainId, connector])

  const login = async (event?: any) => {
    try {
      await ethereum.emit('connect')
      if (account) {
        window.localStorage.setItem(CACHE_KEY, JSON.stringify(account))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    ethereum.emit('disconnect')
    window.localStorage.removeItem(CACHE_KEY)
  }

  return {
    login,
    logout,
    address: account,
    library,
    chainId,
    isConnected: active,
  }
}

export default useAuth
