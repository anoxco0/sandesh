import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from "redux";

import thunk from "redux-thunk";


const conmposeEnhancers =
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLs_EXTENSION_COMPOSE__({}) : compose;

const middleware = [thunk];

const enhancer = conmposeEnhancers(
    applyMiddleware(...middleware)
)

const rootReducer = combineReducers({

});

export const store = createStore(rootReducer, enhancer);