import axios from "axios";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

import * as api from "../config"

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
            api,
        })
    )
))
