import { createSlice } from "@reduxjs/toolkit";

export const categorysSlice = createSlice({
  name: "categorys",
  initialState: { categorys: {} },
  reducers: {
    categorys: (state, action) => {
      state.categorys = action.payload;
    },
  },
});

export const { categorys } = categorysSlice.actions;
