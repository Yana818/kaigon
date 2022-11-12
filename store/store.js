import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./authSlice";

const combinedReducer = combineReducers({
  auth,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      auth: {
        auth: state.auth.value,
      },
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const makeStore = () => {
  return configureStore(
    { reducer},
    composeWithDevTools(applyMiddleware())
  );
};

export const wrapper = createWrapper(makeStore, { debug: true });
