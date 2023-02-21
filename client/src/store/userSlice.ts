import { createSlice } from "@reduxjs/toolkit";

export const userState = createSlice({
    name: "userState",
    initialState: {
        isAuth: false,
        user: {}
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setAuth(state, action) {
            state.isAuth = action.payload
        }
    }
})

export default userState.reducer
export const {setUser, setAuth} = userState.actions