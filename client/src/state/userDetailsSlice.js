import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
  user: {},
  loading: false
}

export const userDetails = createAsyncThunk(
  'user/userDetails',
  async (userId, { rejectWithValue }) => {
    const url = `http://192.168.0.8:5000/user/${userId}`
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


const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  extraReducers: {
    [userDetails.pending]: (state) => {
      state.loading = true
    },
    [userDetails.fulfilled]: (state, action) => {
      state.user = action.payload
      state.loading = false

    },
    [userDetails.rejected]: (state) => {
      state.loading = false
    },
  }
})

export default userDetailsSlice.reducer