import { createSlice } from "@reduxjs/toolkit";

const pagingSlice = createSlice({
  name: "viewPage",
  initialState: { page: 1 },
  reducers: {
    prev(state, action) {
      state.page -= action.payload.step;
    },
    next(state, action) {
      state.page += action.payload.step;
    },
    curr(state, action) {
      state.page = action.payload.page;
    },
  },
});

export default pagingSlice;
export const { next, prev, curr } = pagingSlice.actions;
