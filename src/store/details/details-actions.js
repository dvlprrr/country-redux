import { SET_ERROR, SET_COUNTRY, SET_LOADING, CLEAR_DETAILS, SET_NEIGHBORS } from "./details-constants";

const setLoading = () => ({
    type: SET_LOADING,
})

const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})
const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country,
})
const setNeighbors = (neighbors) => ({
    type: SET_NEIGHBORS,
    payload: neighbors,
})

export const clearDetails = () => ({
    type: CLEAR_DETAILS,
})


export const loadCountryByName = (name) => (dispatch, _, { client, api }) => {
    dispatch(setLoading())

    client.get(api.searchByCountry(name))
        .then(({ data }) => dispatch(setCountry(data[0])))
        .catch((err) => dispatch(setError(err)))
}

export const loadNeighborsByBorder = (border) => (dispatch, _, { client, api }) => {
    client.get(api.filterByCode(border))
        .then(({ data }) => dispatch(setNeighbors(data.map(c => c.name))))
}