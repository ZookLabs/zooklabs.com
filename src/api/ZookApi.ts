import {AxiosResponse} from "axios";
import {TZookIdentifier} from "../types/TZookIdentifier";
import denoApi from "./denoApi";
import {TUploadResponse} from "../types/TUploadResponse";
import {TZook} from "../types/TZook";

namespace ZookApi {
    export async function getZooks(): Promise<AxiosResponse<TZookIdentifier[]>> {
        return denoApi.get<TZookIdentifier[]>('/zooks')
    }

    export async function getZook(id: string): Promise<AxiosResponse<TZook>> {
        return denoApi.get<TZook>(`zooks/${id}`)
    }

    export async function uploadZook(formData: FormData): Promise<AxiosResponse<TUploadResponse>> {
        return denoApi.post('zooks/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export default ZookApi