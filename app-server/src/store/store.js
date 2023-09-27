import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import pageSlice from "./pageSlice";
import cartSlice from "./cartSlice";
import mapSlice from "./mapSlice";
import reviewSlice from "./reviewSlice";

const store = configureStore({
  reducer: {
    myLoginSlice: loginSlice.reducer,
    myPageSlice: pageSlice.reducer,
    myCartSlice: cartSlice.reducer,
    myMapSlice: mapSlice.reducer,
    reviewSlice: reviewSlice.reducer,
  },
});

export default store;
