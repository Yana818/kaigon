import Head from "next/head";
import React from "react";
import Header from "../root/common/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>專案</title>
      </Head>
      <Header />
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}
