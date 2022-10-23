import Head from "next/head";
import React from "react";
import store from '../store/store'
import { Provider } from 'react-redux'
import Header from "../root/common/header";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>專案</title>
        </Head>
        <Header />
        <main>main</main>
        <footer>footer</footer>
      </div>
    </Provider>
  );
}
