import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    categoryPosts : [],
    loading : false,
}

export const getCategoryPosts = createAsyncThunk(
    'user/categoryPosts',
    async (category, { rejectWithValue }) => {
        const url = `http://192.168.0.8:5000/posts/category/${category}`
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

  const categoryPostsSlice = createSlice({
    name : "userPosts",
    initialState,
    extraReducers :{
        [getCategoryPosts.pending ] : (state) => {
            state.loading = true
      },
        [getCategoryPosts.fulfilled ] : (state,action) => {
            state.categoryPosts = action.payload
            state.loading = false
      },
      [getCategoryPosts.rejected ] : (state) => {
        state.loading = false
    },
}
})

export default categoryPostsSlice.reducer
