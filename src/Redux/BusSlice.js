import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBusList = createAsyncThunk(
  "bus/getBusList",
  async (thunkAPI) => {
    const res = await fetch(
      "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
    ).then((data) => data.json());
    return res;
  }
);
export const getSearchList = createAsyncThunk(
  "bus/getSearchList",
  async ({ from, destination }) => {
    const res = await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${destination}`
    ).then((data) => data.json());
    return res;
  }
);
const initialState = {
  busData: [],
};

export const busSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getBusList.fulfilled]: (state, { payload }) => {
      state.busData = payload;
    },
    [getSearchList.fulfilled]: (state, { payload }) => {
      state.busData = payload;
    },
  },
});

export const {  } = busSlice.actions;

export default busSlice.reducer;
