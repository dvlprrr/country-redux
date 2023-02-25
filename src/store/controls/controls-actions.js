import { SET_SEARCH, SET_REGION, CLEAR_CONTROLS } from "./controls-constants";

export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search,

})

export const setRegion = (region) => ({
    type: SET_REGION,
    payload: region,
})
export const clearControls = () => ({
    type: CLEAR_CONTROLS,
})