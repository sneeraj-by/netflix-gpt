import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    isGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    setGptSearch: (state) => {
      state.isGptSearch = !state.isGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { setGptSearch, addGptMovieResult } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
