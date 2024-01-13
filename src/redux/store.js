import { configureStore } from "@reduxjs/toolkit";
import { loaderSlice } from "./loaderSlice";
import { userslice } from "./userSlice";

const store = configureStore({
  reducer: {
    loaders: loaderSlice.reducer,
    users: userslice.reducer,
  },
});

export default store;
