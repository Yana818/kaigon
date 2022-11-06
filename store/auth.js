import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";


// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  // Initial state
  initialState : {
    authState: false,
  },
  reducers: {

    // Action to set the authentication status
    changeAuthState(state, action) {
      state.authState = action.payload;
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

export const { changeAuthState } = authSlice.actions;

// export const changeAuthState = (state) => state.auth.authState;

export default authSlice.reducer;
