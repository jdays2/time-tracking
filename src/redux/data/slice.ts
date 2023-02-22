import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
