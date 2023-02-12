import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: {} },
  reducers: {
    userInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { userInfo } = userSlice.actions;
