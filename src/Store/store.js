import { configureStore } from "@reduxjs/toolkit";

import { usersQuestions_slice } from "../Features/questions/usersQuestionsSlice";
import { usersAwnsers_slice } from "../Features/awnsers/usersAwnsersSlice";
import { userSlice } from "../Features/user/userSlice";
import { categorysSlice } from "../Features/categorys/categorysSlice";

const store = configureStore({
  reducer: {
    usersQuestions: usersQuestions_slice.reducer,
    usersAwnsers: usersAwnsers_slice.reducer,
    user: userSlice.reducer,
    categorys: categorysSlice.reducer,
  },
});

export default store;
