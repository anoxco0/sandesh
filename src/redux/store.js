import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Authentication/reducer";
import { settingReducer } from "./Setting/reducer";

const composeEnhancers=
   typeof window === 'object' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose;

   const middleware = [thunk];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const rootReducer = combineReducers({
    authReducer : authReducer,
    settingReducer:settingReducer
});

export const store = createStore(rootReducer, enhancer);