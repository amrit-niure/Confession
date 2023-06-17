import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post_details :{},
    openUpdate : false
}

const updatePostSlice = createSlice({
    name : "updateModal",
    initialState,
    reducers : {
        toggleUpdatePost : (state) => {
            state.openUpdate = !state.openUpdate
        },
        setPostDetails : (state,action)=>{
            state.post_details = action.payload
            console.log(state.post_details)
        }
    }
})

export const {toggleUpdatePost,setPostDetails} = updatePostSlice.actions
export default updatePostSlice.reducer