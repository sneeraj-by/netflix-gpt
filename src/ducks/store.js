import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSearch from "./gptSearchSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptSearch,
  },
});

export default store;
