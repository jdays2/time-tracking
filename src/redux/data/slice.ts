import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type timeData = {
  current: number;
  previous: number;
};

export type fetchedTimeframes = {
  daily: timeData;
  weekly: timeData;
  monthly: timeData;
};

interface FetchedData {
  title: string;
  timeframes: fetchedTimeframes;
}

type dataState = {
  items: FetchedData[];
  selectedTimeFrame: "daily" | "weekly" | "monthly";
  currentTimeFrame: number;
  timePeriod: string[];
};

const initialState: dataState = {
  items: [],
  selectedTimeFrame: "daily",
  currentTimeFrame: 1,
  timePeriod: ["Daily", " Weekly", "Monthly"],
};

export const getData = createAsyncThunk("data/fetchData", async () => {
  const { data } = await axios.get<FetchedData[]>(
    "https://63f6a61a9daf59d1ad8c47be.mockapi.io/data"
  );
  return data;
});

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
      }
    );
  },
});

export const { setCurrentTF } = dataSlice.actions;
export default dataSlice.reducer;
