import {TUserIdentifier} from "./TUserIdentifier";
import {TZookIdentifier} from "./TZookIdentifier";
import {TUserAbout} from "./TUserAbout";

export type TUser = {
    identifier: TUserIdentifier,
    about: TUserAbout,
    zooks: TZookIdentifier[]
}
