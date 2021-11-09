import {AxiosResponse} from "axios";

import api from "./api";
import {TLeagues} from "../types/TLeagues";
import {TLeague} from "../types/TLeague";

namespace LeagueApi {

    export async function getLeagues(): Promise<AxiosResponse<TLeagues>> {
        return api.get<TLeagues>('/leagues')
    }

    export async function getLeague(league: string): Promise<AxiosResponse<TLeague>> {
        return api.get<TLeague>(`/leagues/${league}`)
    }


}

export default LeagueApi