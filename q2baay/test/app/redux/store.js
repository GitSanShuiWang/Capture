import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers.js";
// Logger with default options
import logger from "redux-logger";

let store = process.env.NODE_ENV === "development"
    ? createStore(combineReducers, applyMiddleware(logger))
    : createStore(combineReducers, applyMiddleware());

export default store;
