import { combineReducers } from "@reduxjs/toolkit";
import globalList from "./devicesSlice";
import userState from "./userSlice";

const reducer = combineReducers({
    userState,
    globalList,
})

export default reducer