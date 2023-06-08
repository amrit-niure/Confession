import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openPost : false
}

const postSlice = createSlice({
    name : "postModal",
    initialState,
    reducers : {
        toggleOpenPost : (state) => {
            state.openPost = !state.openPost
        },
    }
})

export const {toggleOpenPost} = postSlice.actions
export default postSlice.reducer