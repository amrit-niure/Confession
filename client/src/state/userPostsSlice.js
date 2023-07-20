import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    userPosts : [],
    loading : false,
}
const endpoint = import.meta.env.VITE_ENDPOINT;
export const getuserPosts = createAsyncThunk(
    'user/userPosts',
    async (userId, { rejectWithValue }) => {
        const url = `${endpoint}/user/posts/${userId}`
      try {
        const response = await axios.get(url);
        
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


const userPostsSlice = createSlice({
    name : "userPosts",
    initialState,
    extraReducers :{
        [getuserPosts.pending ] : (state) => {
            state.loading = true
      },
        [getuserPosts.fulfilled ] : (state,action) => {
            state.userPosts = action.payload
            state.loading = false
      },
      [getuserPosts.rejected ] : (state) => {
        state.loading = false
  },
    }
})


export default userPostsSlice.reducer