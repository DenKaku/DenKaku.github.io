import {createStore, combineReducers} from "redux"

import TopbarReducer, {TopbarStateType} from "./TopbarReducer"

export interface rootStateType {
    Topbar: TopbarStateType
}

export const mapTopbarState = (state:rootStateType) => state.Topbar

const rootReducer = combineReducers({
    Topbar: TopbarReducer
})

export default createStore(rootReducer)