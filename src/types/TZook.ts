import {TZookTrial} from "../components/Trial";
import {TZookIdentifier} from "./TZookIdentifier";

export type TZookOwner = {
    id: string
    username: string
}

export type TZookAbout = {
    owner?: TZookOwner
    dateCreated: string
    dateUploaded: string
    downloads: number
    views: number
}

export type TZookPhysical = {
    height: number
    length: number
    width: number
    weight: number
    components: number
}

export type TZookAchievement = {
    sprint?: TZookTrial
    blockPush?: TZookTrial
    hurdles?: TZookTrial
    highJump?: TZookTrial
    lap?: TZookTrial
    overall?: TZookTrial
}

export type TZook = {
    identifier: TZookIdentifier
    about: TZookAbout
    physical: TZookPhysical
    achievement: TZookAchievement
}