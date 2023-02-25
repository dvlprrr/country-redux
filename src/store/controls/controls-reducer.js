import { SET_SEARCH } from "./controls-constants";

const initialValue = {
    search: "",
    region: "",
}

export const controlsReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case SET_SEARCH:
            return {
                ...state,
                search: payload,
            }
        default:
            return state
    }
}