import {AxiosResponse} from "axios";
import {TZookIdentifier} from "../types/TZookIdentifier";
import http from "./api";
import {TUploadResponse} from "../types/TUploadResponse";
import {TZook} from "../types/TZook";

namespace ZookApi {
    export async function getZooks(): Promise<AxiosResponse<TZookIdentifier[]>> {
        return http.get<TZookIdentifier[]>('/zooks')
    }

    export async function getZook(id: string): Promise<AxiosResponse<TZook>> {
        return http.get<TZook>(`zooks/${id}`, {withCredentials: true})
    }

    export async function uploadZook(formData: FormData): Promise<AxiosResponse<TUploadResponse>> {
        return http.post('/zooks/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export default ZookApi