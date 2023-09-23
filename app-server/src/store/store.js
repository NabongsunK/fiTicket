import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import pagingSlice from "./pageSlice";
import cartSlice from "./cartSlice";
import mapSlice from "./mapSlice";

const store = configureStore({
  reducer: {
    myLoginSlice: loginSlice.reducer,
    viewPageSlice: pagingSlice.reducer,
    myCartSlice: cartSlice.reducer,
    myMapSlice: mapSlice.reducer,
  },
});

export default store;
