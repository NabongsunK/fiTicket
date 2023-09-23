import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: { review: [] },
  reducers: {
    pop(state, action) {
      state.review = action.payload.list;
    },
  },
});

export default reviewSlice;
export const { pop } = reviewSlice.actions;
