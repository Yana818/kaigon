import React from "react";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../root/components/layout";
import "../styles/reset.css";


export default function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
