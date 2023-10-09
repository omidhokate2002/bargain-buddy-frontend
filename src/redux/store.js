import { configureStore } from "@reduxjs/toolkit";
import { loaderSlice } from "./loaderSlice";

const store = configureStore({
  reducer: {
    loaders: loaderSlice.reducer,
  },
});

export default store;
