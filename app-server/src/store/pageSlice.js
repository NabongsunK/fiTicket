import { createSlice } from "@reduxjs/toolkit";

const pagingSlice = createSlice({
  name: "viewPage",
  initialState: { page: 1 },
  reducers: {
    prev(state, action) {
      state.page -= action.payload.step;
    },
    next(state, action) {
      if (state) {
        state.page += action.payload.step;
      }
    },
  },
});

export default pagingSlice;
export const { next, prev } = pagingSlice.actions;
