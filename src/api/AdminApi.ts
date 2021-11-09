import {AxiosResponse} from "axios";

import api from "./api";

namespace AdminApi {

    export async function setOwner(zookId?: string, ownerId?: string): Promise<AxiosResponse> {
        return api.patch(`admin/zook/${zookId}/owner/${ownerId}`)
    }

}

export default AdminApi