import axios, {AxiosInstance} from 'axios';

const api: AxiosInstance = axios.create(
    {
        baseURL: `${process.env.REACT_APP_API_URL}/api`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
    });

export default api

export function removeAuthorization() {
    // @ts-ignore
    delete api.defaults.headers.common["Authorization"]
}

export function setAuthorization(token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

