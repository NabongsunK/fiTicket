import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "myMap",
  initialState: { mapItude: [], mapCode: 0, mapData: [] },
  reducers: {
    setMapItude(state, action) {
      state.mapItude = action.payload.newMapItude;
    },
    setMapCode(state, action) {
      state.mapCode = action.payload.newMapCode;
    },
    setMapData(state, action) {
      state.mapData = action.payload.newMapData;
    },
    deletes(state, action) {
      state.myCarts = [];
    },
  },
});

export default mapSlice;
export const { setMapItude, setMapCode, setMapData } = mapSlice.actions;
