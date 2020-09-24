import {combineReducers} from 'redux'
import {userReducer, initialUserState, UserState} from "./userReducer";

export interface ApplicationState {
  user: UserState
}

export const initialState: ApplicationState = {
    user: initialUserState
};


export const rootReducer = combineReducers<ApplicationState>({
  user: userReducer
})

