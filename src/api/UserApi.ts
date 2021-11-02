import {AxiosResponse} from "axios";
import {TAvailability} from "../types/TAvailability";
import http from "./api";
import {TUserIdentifier} from "../types/TUserIdentifier";
import {TUser} from "../types/TUser";

namespace UserApi {
    export async function checkUsername(username: string): Promise<AxiosResponse<TAvailability>> {
        return http.get<TAvailability>(`/login/availability/${username}`)
    }

    export async function registerUser(username: string): Promise<AxiosResponse> {
        return http.post(`/login/register`, {username: username})
    }

    export async function loginUser(code: string): Promise<AxiosResponse> {
        return http.get(`/login?code=${code}`)
    }

    export async function listUsers(): Promise<AxiosResponse<TUserIdentifier[]>> {
        return http.get<TUserIdentifier[]>('/users')
    }

    export async function getUser(username: string): Promise<AxiosResponse<TUser>> {
        return http.get<TUser>(`/users/${username}`)
    }
}

export default UserApi