import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: "",
    avatar: "",
    token: ""
}

const userSlice = createSlice({
    name: "userData",

    initialState: initialState,

    reducers: {
        setUserData(state, action) {
            state.name = action.payload.name;
            state.avatar = action.payload.avatar;
            state.token = action.payload.token;
        },
        removeUserData(state) {
            state.name = initialState.name;
            state.avatar = initialState.avatar;
            state.token = initialState.token;
        }
    }
})

export default userSlice.reducer

export const {setUserData, removeUserData} = userSlice.actions