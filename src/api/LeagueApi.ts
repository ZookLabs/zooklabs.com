import {AxiosResponse} from "axios";

import http from "./api";
import {TLeagues} from "../types/TLeagues";
import {TLeague} from "../types/TLeague";

namespace LeagueApi {

    export async function getLeagues(): Promise<AxiosResponse<TLeagues>> {
        return http.get<TLeagues>('/leagues')
    }

    export async function getLeague(league: string): Promise<AxiosResponse<TLeague>> {
        return http.get<TLeague>(`/leagues/${league}`)
    }


}

export default LeagueApi