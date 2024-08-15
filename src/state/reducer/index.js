
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import themeReducer from "./themereducer";
import apiReducer from "./apiReducer";

// Below function will wrap all reducers in a single reducer
const reducers = combineReducers({
    amount: amountReducer,
    theme: themeReducer,
    myapi: apiReducer
});

export default reducers;
