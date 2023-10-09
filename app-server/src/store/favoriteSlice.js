import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "myFavor",
  initialState: { is_favored: false },
  reducers: {
    like: function (state, action) {
      state.is_favored = true;
    },
    dislike: function (state, action) {
      state.is_favored = false;
    },
  },
});

export default favoriteSlice;
export const { like, dislike } = favoriteSlice.actions;
