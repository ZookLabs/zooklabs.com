import {LOGIN, LoginActionTypes, LOGOUT, REGISTER} from "./loginActionTypes";


export function LoginUser(username: string): LoginActionTypes {
  return {
    type: LOGIN,
    username: username
  }
}

export function RegisterUser(): LoginActionTypes {
  return {
    type: REGISTER
  }
}

export function LogoutUser(): LoginActionTypes {
  return {
    type: LOGOUT
  }
}