import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";


// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  // Initial state
  initialState : {
    value: false,
  },
  reducers: {

    // Action to set the authentication status
    changeAuthStatus(state, action) {
      state.value = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },

  },
});

export const { changeAuthStatus } = authSlice.actions;
export const selectAuth = (state) => state.auth.value;

export default authSlice.reducer;
