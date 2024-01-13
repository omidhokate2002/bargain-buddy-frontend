import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "users",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userslice.actions;