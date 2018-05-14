import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import combineReducers from "./reducers.js";
// Logger with default options
import logger from "redux-logger";

let store = process.env.NODE_ENV === "development"
    ? createStore(combineReducers, applyMiddleware(thunkMiddleware, logger))
    : createStore(combineReducers, applyMiddleware(thunkMiddleware));

export default store;
