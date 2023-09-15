import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import pagingSlice from "./pageSlice";

const store = configureStore({
  reducer: {
    myLoginSlice: loginSlice.reducer,
    viewPageSlice: pagingSlice.reducer,
  },
});

export default store;
