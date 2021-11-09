import {AxiosResponse} from "axios";
import {TZookIdentifier} from "../types/TZookIdentifier";
import api from "./api";
import {TUploadResponse} from "../types/TUploadResponse";
import {TZook} from "../types/TZook";

namespace ZookApi {
    export async function getZooks(): Promise<AxiosResponse<TZookIdentifier[]>> {
        return api.get<TZookIdentifier[]>('/zooks')
    }

    export async function getZook(id: string): Promise<AxiosResponse<TZook>> {
        return api.get<TZook>(`zooks/${id}`)
    }

    export async function uploadZook(formData: FormData): Promise<AxiosResponse<TUploadResponse>> {
        return api.post('zooks/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export default ZookApi