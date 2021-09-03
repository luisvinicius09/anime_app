import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const animesSlice = createSlice({
  name: "animes",
  initialState: {
    loading: "idle",
    data: [],
    errors: undefined,
  },
  reducers: {
    getAnimesStart: (state) => {
      state.loading = "loading";
    },
    getAnimesSuccess: (state, { payload }) => {
      state.loading = "idle";
      state.data = payload;
      state.errors = undefined;
    },
    getAnimesFailed: (state, { payload }) => {
      state.loading = "idle";
      state.errors = payload;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = animesSlice;

export const { getAnimesStart, getAnimesSuccess, getAnimesFailed } = actions;

const fetchAnimes = () => async (dispatch: any) => {
  dispatch(getAnimesStart());

  try {
    const response = await axios.get('https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0');
    dispatch(getAnimesSuccess(response.data.data));
  } catch (error) {
    dispatch(getAnimesFailed(error));
  }
};

export { fetchAnimes };

export default reducer;
