import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "myCart",
  initialState: { myCarts: [] },
  reducers: {
    push(state, action) {
      state.myCarts.push(action.payload.ticket);
    },
    pop(state, action) {
      state.myCarts.splice(action.payload.id, 1);
    },
  },
});

export default cartSlice;
export const { push, pop } = cartSlice.actions;
