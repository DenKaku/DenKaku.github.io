import _ from "lodash"

const HIDDEN_TOP_BAR = "HIDDEN_TOP_BAR"



export interface TopbarStateType {
    hidden_top_bar: boolean;
}

export const initState:TopbarStateType = {
    hidden_top_bar: false
}


export const hiddenMenuIcon = (hidden:boolean) => {
    return {
        type: HIDDEN_TOP_BAR,
        payload: {
            hidden_top_bar: hidden
        }
    }
}

export default function reducer(state=initState, action:{type:any, payload:any}) {
    switch(action.type) {
        case HIDDEN_TOP_BAR:
            return _.assign({}, state, {
                hidden_top_bar: action.payload.hidden_top_bar
            })

        default:
            return {}
    }
}