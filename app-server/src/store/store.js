import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import pageSlice from "./pageSlice";
import cartSlice from "./cartSlice";
import mapSlice from "./mapSlice";
import reviewSlice from "./reviewSlice";
import favoriteSlice from "./favorSlice";

const store = configureStore({
  reducer: {
    myLoginSlice: loginSlice.reducer,
    myPageSlice: pageSlice.reducer,
    myCartSlice: cartSlice.reducer,
    myMapSlice: mapSlice.reducer,
    reviewSlice: reviewSlice.reducer,
    myFavorSlice: favoriteSlice.reducer,
  },
});

export default store;
