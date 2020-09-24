import jwt_decode from "jwt-decode";
import {LoginUser, LogoutUser, RegisterUser} from "../redux/userActions";
import axios, {AxiosResponse} from "axios";
import {useDispatch} from "react-redux";
import {useCookies} from "react-cookie";

type JwtToken = {
    username?: string
    exp: number
}

const getToken = (bearer: string) => bearer.substring(7, bearer.length)

const maxAge = (exp: number) => exp - Math.floor(Date.now() / 1000)


export const useDispatchLogin = () => {
    const dispatch = useDispatch()
    return (token: string, decodedToken: JwtToken) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        if (decodedToken.username) {
            dispatch(LoginUser(decodedToken.username))
        } else {
            dispatch(RegisterUser())
        }
    }
}

export const useLoginLoadAction = () => {
    const [cookies] = useCookies(['token'])
    const dispatchLogin = useDispatchLogin()

    return () => {
        let token: string | undefined = cookies.token
        if (token) {
            let decodedToken = jwt_decode<JwtToken>(token)
            dispatchLogin(token, decodedToken)
        }
    }
}

export const useLogoutAction = () => {
    const dispatch = useDispatch()
    const [, , removeCookie] = useCookies()
    return () => {
        axios.defaults.headers = undefined
        removeCookie("token")
        dispatch(LogoutUser())
    }
}


const useLoginResponseAction = () => {
    const [, setCookie] = useCookies()
    const dispatchLogin = useDispatchLogin()

    return (response: AxiosResponse) => {
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
    }
}

export const useRegisterAction = () => {
    const login = useLoginResponseAction()
    return (username: string) => {
        return axios.post(`/login/register`, {username: username}).then(login)
    }
}

export const useLoginAction = () => {
    const login = useLoginResponseAction()
    return (code: string) => {
        return axios.get(`/login?code=${code}`).then(login)
    }
}

