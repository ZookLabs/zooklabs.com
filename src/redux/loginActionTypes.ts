export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const LOGOUT = 'LOGOUT'

interface LoginAction {
  type: typeof LOGIN
  username: string
}

interface RegisterAction {
  type: typeof REGISTER
}

interface LogoutAction {
  type: typeof LOGOUT
}

export type LoginActionTypes = LoginAction | RegisterAction | LogoutAction