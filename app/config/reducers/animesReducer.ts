import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialURL =
  "https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0";

const animesSlice = createSlice({
  name: "animes",
  initialState: {
    loading: "idle",
    data: [],
    errors: undefined,
    next: "",
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
    getNextLink: (state, { payload }) => {
      state.next = payload;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = animesSlice;

export const {
  getAnimesStart,
  getAnimesSuccess,
  getAnimesFailed,
  getNextLink,
} = actions;

const fetchAnimes =
  (url = initialURL) =>
  async (dispatch: any) => {
    dispatch(getAnimesStart());

    try {
      const response = await axios.get(url);
      dispatch(getNextLink(response.data.links.next));
      dispatch(getAnimesSuccess(response.data.data));
    } catch (error) {
      dispatch(getAnimesFailed(error));
    }
  };

export { fetchAnimes };

export default reducer;
