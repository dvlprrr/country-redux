import { SET_THEME } from "./theme-constants";

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
})