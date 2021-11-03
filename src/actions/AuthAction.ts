import jwt_decode from "jwt-decode";
import {LoginUser, LogoutUser, RegisterUser} from "../redux/userActions";
import {useDispatch} from "react-redux";
import {useCookies} from "react-cookie";
import {removeAuthorization, setAuthorization} from "../api/api";
import {AxiosResponse} from "axios";
import UserApi from "../api/UserApi";
import {useCallback} from "react";

type JwtToken = {
    username?: string
    exp: number
}

const getToken = (bearer: string) => bearer.substring(7, bearer.length)

const maxAge = (exp: number) => exp - Math.floor(Date.now() / 1000)

export function useDispatchLogin() {
    const dispatch = useDispatch()
    return useCallback((token: string, decodedToken: JwtToken) => {
        setAuthorization(token)
        if (decodedToken.username) {
            dispatch(LoginUser(decodedToken.username))
        } else {
            dispatch(RegisterUser())
        }
    }, [dispatch])
}

export function useLoginLoadAction() {
    const [cookies] = useCookies(['token'])
    const dispatchLogin = useDispatchLogin()

    return useCallback(() => {
        let token: string | undefined = cookies.token
        if (token) {
            let decodedToken = jwt_decode<JwtToken>(token)
            dispatchLogin(token, decodedToken)
        }
    }, [cookies.token, dispatchLogin])
}

export function useLogoutAction() {
    const dispatch = useDispatch()
    const [, , removeCookie] = useCookies()
    return useCallback(() => {
        removeAuthorization()
        removeCookie("token")
        dispatch(LogoutUser())
    }, [removeCookie, dispatch])
}


function useLoginResponseAction() {
    const [, setCookie] = useCookies()
    const dispatchLogin = useDispatchLogin()

    return useCallback((response: AxiosResponse) => {
        let authorizationHeader = response.headers.authorization
        if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {

            let token = getToken(authorizationHeader)
            let decodedToken = jwt_decode<JwtToken>(token)

            setCookie("token", token, {maxAge: maxAge(decodedToken.exp), sameSite: "strict"})

            dispatchLogin(token, decodedToken)
        } else if (!authorizationHeader) {
            throw new Error("authorization header missing")
        } else {
            throw new Error("authorization header does not start with Bearer ")
        }
    }, [setCookie, dispatchLogin])
}

export function useRegisterAction() {
    const loginResponseAction = useLoginResponseAction()
    return useCallback((username: string) => {
        return UserApi.registerUser(username).then(loginResponseAction)
    }, [loginResponseAction])
}

export function useLoginAction() {
    const loginResponseAction = useLoginResponseAction()
    return useCallback((code: string) => {
        return UserApi.loginUser(code).then(loginResponseAction)
    }, [loginResponseAction])
}

