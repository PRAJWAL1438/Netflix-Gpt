import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import GptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: movieReducer,
    Gpt: GptReducer,
    config: configReducer,
  },
});

export default appStore;
