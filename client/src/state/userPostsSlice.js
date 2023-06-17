import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    userPosts : [],
    loading : false,
}
export const getuserPosts = createAsyncThunk(
    'user/userPosts',
    async (userId, { rejectWithValue }) => {
        const url = `http://192.168.0.8:5000/user/posts/${userId}`
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