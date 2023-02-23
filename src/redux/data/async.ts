import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchedData } from "./types";

export const getData = createAsyncThunk("data/fetchData", async () => {
  const { data } = await axios.get<FetchedData[]>(
    "https://63f6a61a9daf59d1ad8c47be.mockapi.io/data"
  );
  return data;
});
