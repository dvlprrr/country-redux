import { SET_ERROR, SET_COUNTRIES, SET_LOADING } from "./countries-constants";

export const setLoading = () => ({
    type: SET_LOADING
})
export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries,
})
export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
})


export const loadingCountries = () => (dispatch, _, { client, api }) => {
    dispatch(setLoading())
    client.get(api.ALL_COUNTRIES)
        .then(({ data }) => dispatch(setCountries(data)))
        .catch(err => dispatch(setError(err)))
} 