import  { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
const url = 'http://localhost:5000/posts/'
const initialState = {
 posts :[],
 loading :false
}

export const getFeedPost = createAsyncThunk('post/getFeedPost',()=>{
    return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
})


const displayPostSlice = createSlice ({
    name : 'displayPost',
    initialState,
    extraReducers :{
            [getFeedPost.pending ] : (state) => {
                state.loading = true
          },
            [getFeedPost.fulfilled ] : (state,action) => {
                state.posts = action.payload
                console.log(state.posts)
          },
          [getFeedPost.rejected ] : (state) => {
            state.loading = false
      },
    },
})


export default displayPostSlice.reducer