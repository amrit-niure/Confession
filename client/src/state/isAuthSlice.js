import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated : false
}

const isAuthSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers :{
        toggleAuth : (state) => {
            state.isAuthenticated = !state.isAuthenticated
        },
    }
})

export const {toggleAuth} = isAuthSlice.actions
export default modalSlice.reducer