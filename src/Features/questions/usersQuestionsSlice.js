import { createSlice } from "@reduxjs/toolkit";

export const usersQuestions_slice = createSlice({
  name: "usersQuestions",
  initialState: { questions: [], filteredQuestions: [] },
  reducers: {
    usersQuestions: (state, action) => {
      state.questions = action.payload;
      state.filteredQuestions = action.payload;
    },
    filteredUsersQuestions(state, action) {
      state.filteredQuestions = action.payload;
    },
  },
});

export const { usersQuestions, filteredUsersQuestions } =
  usersQuestions_slice.actions;

