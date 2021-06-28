import { Reducer } from 'react'

interface AuthState {
  value: string
}

interface AuthAction {
  type: string
}

const initialState: AuthState = {
  value: 'Logged out',
}

export const auth: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, value: 'Logged in' }
    case 'LOG_OUT':
      return { ...state, value: 'Logged out' }
    default:
      return state
  }
}
