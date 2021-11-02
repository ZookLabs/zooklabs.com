import {AxiosResponse} from "axios";

import http from "./api";

namespace AdminApi {

    export async function setOwner(zookId?: string, ownerId?: string): Promise<AxiosResponse> {
        return http.patch(`admin/zook/${zookId}/owner/${ownerId}`)
    }

}

export default AdminApi