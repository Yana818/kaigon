/** @jsxImportSource @emotion/react */
import Header from "../common/Header";
import { css } from "@emotion/react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main css={mainStyle}>{children}</main>
    </>
  );
}
const mainStyle = css`
  min-height: calc(100vh - 68px);
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 68px;
`;
