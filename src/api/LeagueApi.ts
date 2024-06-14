import {AxiosResponse} from "axios";

import denoApi from "./denoApi";
import {TLeagues} from "../types/TLeagues";
import {TLeague} from "../types/TLeague";

namespace LeagueApi {

    export async function getLeagues(): Promise<AxiosResponse<TLeagues>> {
        return denoApi.get<TLeagues>('/leagues')
    }

    export async function getLeague(league: string): Promise<AxiosResponse<TLeague>> {
        return denoApi.get<TLeague>(`/leagues/${league}`)
    }


}

export default LeagueApi