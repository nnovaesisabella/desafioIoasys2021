/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    error: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    errorMsg: (state, action) => {
      state.error = action.payload
    },
  }
});

export const { login, logout ,errorMsg} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
