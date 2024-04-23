import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
    movieNames: null,
  },
  reducers: {
    ToggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      // const {movieResult,movieNames } = action.payload ;

      state.movieResult = action.payload;
      // state.movieNames = movieNames;
    },
    addGptMovieNames: (state, action) => {
      state.movieNames = action.payload;
    },
  },
});

export const { ToggleGptSearchView, addGptMovieResult, addGptMovieNames } =
  gptSlice.actions;

export default gptSlice.reducer;
