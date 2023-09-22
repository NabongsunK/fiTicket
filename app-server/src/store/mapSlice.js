import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "myMap",
  initialState: { mapItude: [], mapCode: 0 },
  reducers: {
    setMapItude(state, action) {
      state.mapItude = action.payload.newMapItude;
    },
    setMapCode(state, action) {
      state.mapCode = action.payload.newMapCode;
    },
    change(state, action) {
      state.myCarts[action.payload.index] = action.payload.updateItem;
    },
    deletes(state, action) {
      state.myCarts = [];
    },
  },
});

export default mapSlice;
export const { setMapItude, setMapCode } = mapSlice.actions;
