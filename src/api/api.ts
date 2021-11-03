import axios, {AxiosInstance} from 'axios';

const http: AxiosInstance = axios.create(
    {
        baseURL: `${process.env.REACT_APP_API_URL}/api`,
        headers: {'Content-Type': 'application/json'},
    });

export default http

export function removeAuthorization() {
    // @ts-ignore
    delete http.defaults.headers.common["Authorization"]
    http.defaults.withCredentials = undefined
}

export function setAuthorization(token: string) {
    // @ts-ignore
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`
    http.defaults.withCredentials = true
}

