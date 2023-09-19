import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import pagingSlice from "./pageSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    myLoginSlice: loginSlice.reducer,
    viewPageSlice: pagingSlice.reducer,
    myCartSlice: cartSlice.reducer,
  },
});

export default store;
