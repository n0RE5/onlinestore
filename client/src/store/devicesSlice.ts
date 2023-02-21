import { createSlice } from "@reduxjs/toolkit";

export const globalList = createSlice({
    name: "globalList",
    initialState: {
        deviceList: []
    },
    reducers: {
        setDeviceList(state, action) {
            state.deviceList = action.payload
        }
    }
})

export default globalList.reducer
export const {setDeviceList} = globalList.actions