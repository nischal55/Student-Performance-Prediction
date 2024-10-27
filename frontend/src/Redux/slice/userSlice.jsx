import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: localStorage.getItem("username")? localStorage.getItem("username"): null, 
  },
  reducers: {
    setReduxUser: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("username",state.value)
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("access_token")
      localStorage.removeItem("username")
     
    },
  },
});


export const { setReduxUser, logout } = userSlice.actions;

export default userSlice.reducer;