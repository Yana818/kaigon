import Head from "next/head";
import Link from "next/link";
import React from "react";
import { css } from "@emotion/react";
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
