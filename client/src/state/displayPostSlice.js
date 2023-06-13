import  { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
const url = 'http://192.168.0.8:5000/posts/'
import axios from 'axios'
const initialState = {
 posts :[],
 loading :false
}
export const getFeedPost = createAsyncThunk(
  'post/getFeedPost',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      const errorData = err.response.data;
      return rejectWithValue({ error: errorData });
    }
  }
);

// export const getFeedPost = createAsyncThunk('post/getFeedPost', async () => {
//     return await fetch('http://localhost:5000/posts/')
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => {
//       // Handle any errors
//       console.error('Error:', error);
//     });
    
// });





const displayPostSlice = createSlice ({
    name : 'displayPost',
    initialState,
    reducers: {
        updatePost : (state,action) => {
          state.posts = state.posts.filter((item) => item._id!==action.payload)
        }
    },
    extraReducers :{
            [getFeedPost.pending ] : (state) => {
                state.loading = true
          },
            [getFeedPost.fulfilled ] : (state,action) => {
                state.posts = action.payload
                console.log(action.payload)
          },
          [getFeedPost.rejected ] : (state) => {
            state.loading = false
      },
    },
})

export const {updatePost} = displayPostSlice.actions
export default displayPostSlice.reducer