import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers.js";
// Logger with default options
import logger from "redux-logger";

let store = process.env.NODE_ENV === "development"
    ? createStore(combineReducers, applyMiddleware(logger))
    : createStore(combineReducers, applyMiddleware());

if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}    

export default store;
