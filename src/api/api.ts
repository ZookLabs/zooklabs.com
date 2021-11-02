import axios, {AxiosInstance} from 'axios';

const http: AxiosInstance = axios.create(
    {
        baseURL: `${process.env.REACT_APP_API_URL}/api`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
    });

export default http

export function removeAuthorization() {
    // @ts-ignore
    delete http.defaults.headers.common["Authorization"]
}

export function setAuthorization(token: string) {
    // @ts-ignore
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

