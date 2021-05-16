import { useContext } from 'react'
import { AuthContext } from '../context'

const useAuth = () => {
  const { isConnected, address, login, logout } = useContext(AuthContext)

  return { isConnected, address, login, logout }
}

export default useAuth
