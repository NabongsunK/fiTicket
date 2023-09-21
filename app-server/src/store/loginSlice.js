import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "myLogin",
  initialState: { is_signed: false, user_id: -1 },
  reducers: {
    signin: function (state, action) {
      state.is_signed = true;
      state.user_id = action.payload.user_id;
    },
    signout: function (state, action) {
      state.is_signed = false;
      state.user_id = -1;
    },
  },
});

export default loginSlice;
export const { signin, signout } = loginSlice.actions;
