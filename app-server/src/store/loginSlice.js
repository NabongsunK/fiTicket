import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "myLogin",
  initialState: { isLogined: false, user_id: -1 },
  reducers: {
    signin: function (state, action) {
      state.isLogined = true;
      state.user_id = action.payload.user_id;
      console.log("로그인완료", state.isLogined, state.user_id);
    },
    signout: function (state, action) {
      state.isLogined = false;
      state.user_id = -1;
      console.log("로그아웃완료", state.isLogined, state.user_id);
    },
  },
});

export default loginSlice;
export const { signin, signout } = loginSlice.actions;
