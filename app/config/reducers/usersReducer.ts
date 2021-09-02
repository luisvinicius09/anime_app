import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incrementValue(state, action) {
      return state + 1;
    },
    decrementValue(state, action) {
      return state - 1;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = usersSlice;

export const { incrementValue, decrementValue } = actions;

export default reducer;
