import {AxiosResponse} from "axios";

import denoApi from "./denoApi";

namespace AdminApi {

    export async function setOwner(zookId?: string, ownerId?: string): Promise<AxiosResponse> {
        return denoApi.patch(`admin/zook/${zookId}/owner/${ownerId}`)
    }

}

export default AdminApi