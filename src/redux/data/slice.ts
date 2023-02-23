import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData } from "./async";
import { dataState, FetchedData } from "./types";

const initialState: dataState = {
  items: [],
  isLoad: false,
  selectedTimeFrame: "daily",
  currentTimeFrame: 1,
  timePeriod: ["Daily", " Weekly", "Monthly"],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCurrentTF(state, action: PayloadAction<number>) {
      state.currentTimeFrame = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getData.fulfilled,
      (state, action: PayloadAction<FetchedData[]>) => {
        state.items = action.payload;
        state.isLoad = true;
      }
    );
    builder.addCase(getData.pending, (state) => {
      state.isLoad = false;
    });
  },
});

export const { setCurrentTF } = dataSlice.actions;
export default dataSlice.reducer;
