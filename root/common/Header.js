/** @jsxImportSource @emotion/react */
/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { changeAuthStatus, selectAuth } from "../../store/authSlice";


export default function Header() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <header css={mainStyle}>
      <Link href="/Login">
        <a>Login</a>
      </Link>
      {/* <button onClick={() => dispatch(changeAuthStatus(!auth))}>更改登入狀態</button> */}
    </header>
  );
}

const mainStyle = css`
  width: 100vw;
  height: 48px;
  position: fixed;
  top: 0px;
  z-index: 10;
  background: #006aa6;
`;