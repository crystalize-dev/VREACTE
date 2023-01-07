import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "../reducer/userReducer";
import {devToolsEnhancer} from "redux-devtools-extension";


const rootReducer = combineReducers({
    toolkit: userReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: devToolsEnhancer
});