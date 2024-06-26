import axios, {AxiosInstance} from 'axios';

const denoApi: AxiosInstance = axios.create(
    {
        baseURL: `${process.env.REACT_APP_DENO_API_URL}/api`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
    });

export default denoApi

export function removeDenoAuthorization() {
    // @ts-ignore
    delete denoApi.defaults.headers.common["Authorization"]
}

export function setDenoAuthorization(token: string) {
    denoApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

