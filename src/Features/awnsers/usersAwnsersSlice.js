import { createSlice } from "@reduxjs/toolkit";

export const usersAwnsers_slice = createSlice({
  name: "usersaAwnsers",
  initialState: {
    awnsers: [],
    filteredAwnsers: [],
  },
  reducers: {
    usersAwnsers: (state, action) => {
      state.awnsers = action.payload;
      state.filteredAwnsers = action.payload;
    },

    filteredUsersAwnsers: (state, action) => {
      const filteredItem = state.awnsers.filter(
        (item) => item.targetUser === action.payload.username
      );
      state.filteredAwnsers = filteredItem;
    },
  },
});

export const { filteredUsersAwnsers, usersAwnsers } =
  usersAwnsers_slice.actions;
