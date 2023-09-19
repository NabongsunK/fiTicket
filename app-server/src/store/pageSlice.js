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
    move(state, action) {
      state.page = action.payload.point;
    },
  },
});

export default pagingSlice;
export const { next, prev, move } = pagingSlice.actions;
