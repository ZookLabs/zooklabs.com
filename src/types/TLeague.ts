
export type TLeagueEntry = {
    zookId: number
    name: string
    score: number
    position: number
}

export type TLeague = {
    updatedAt: string
    entries: TLeagueEntry[]
}