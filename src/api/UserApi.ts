import {AxiosResponse} from "axios";
import {TAvailability} from "../types/TAvailability";
import api from "./api";
import denoApi from "./denoApi";
import {TUserIdentifier} from "../types/TUserIdentifier";
import {TUser} from "../types/TUser";

namespace UserApi {
    export async function checkUsername(username: string): Promise<AxiosResponse<TAvailability>> {
        return api.get<TAvailability>(`/login/availability/${username}`)
    }

    export async function registerUser(username: string): Promise<AxiosResponse> {
        return api.post(`/login/register`, {username: username})
    }

    export async function loginUser(code: string): Promise<AxiosResponse> {
        return api.get(`/login?code=${code}`)
    }

    export async function listUsers(): Promise<AxiosResponse<TUserIdentifier[]>> {
        return denoApi.get<TUserIdentifier[]>('/users')
    }

    export async function getUser(username: string): Promise<AxiosResponse<TUser>> {
        return denoApi.get<TUser>(`/users/${username}`)
    }
}

export default UserApi