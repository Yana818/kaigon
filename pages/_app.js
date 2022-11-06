import React from "react";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
