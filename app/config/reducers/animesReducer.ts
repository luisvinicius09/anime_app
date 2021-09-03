import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const animesSlice = createSlice({
  name: "animes",
  initialState: {
    loading: "idle",
    animes: [],
    errors: undefined,
  },
  reducers: {
    getAnimesStart: (state) => {
      state.loading = "loading";
    },
    getAnimesSuccess: (state, { payload }) => {
      state.loading = "idle";
      state.animes = payload;
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
    const data = axios.get('https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0');
    dispatch(getAnimesSuccess(data));
  } catch (error) {
    dispatch(getAnimesFailed(error));
  }
};

export { fetchAnimes };

export default reducer;
