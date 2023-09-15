import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "myLogin",
  initialState: { count: 1 },
  reducers: {
    up: function (state, action) {
      state.count += action.payload.step;
    },
    down(state, action) {
      state.count -= action.payload.step;
    },
  },
});

export default loginSlice;
// export const { up, down } = counterSlice.actions;
