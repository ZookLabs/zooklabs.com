import {LOGIN, LoginActionTypes, LOGOUT, REGISTER} from "./loginActionTypes";


export enum UserLoginState {
    LoggedOut,
    LoggedIn,
    Registering
}

interface State {
    state: UserLoginState
}

interface LoggedIn extends State {
    username: string
    state: UserLoginState.LoggedIn
}


interface LoggedOut extends State {
    state: UserLoginState.LoggedOut
}

interface Registering extends State {
    state: UserLoginState.Registering
}

export type UserState = LoggedIn | LoggedOut | Registering

export const isLoggedIn = (userState: UserState) => {
    return userState.state === UserLoginState.LoggedIn
}

export const isRegistering = (userState: UserState) => {
    return userState.state === UserLoginState.Registering
}

export const isLoggedOut = (userState: UserState) => {
    return userState.state === UserLoginState.LoggedOut
}


export const initialUserState: UserState = {
    state: UserLoginState.LoggedOut
}

export function userReducer(
    state = initialUserState,
    action: LoginActionTypes
):  UserState {
    switch (action.type) {
        case LOGIN:
            return {
                state: UserLoginState.LoggedIn,
                username: action.username
            }
        case REGISTER:
            return {
                state: UserLoginState.Registering
            }
        case LOGOUT:
            return {
                state: UserLoginState.LoggedOut
            }
        default:
            return state
    }
}