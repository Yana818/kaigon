/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from "react";
import { css } from "@emotion/react";
// import { css } from "@emotion/react";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import ButtonComponent from "../../root/components/ButtonComponent";
// import LoginWithApple from "../../root/components/LoginWithApple";
// import LoginWithFB from "../../root/components/LoginWithFB";
// import LoginWithGoogle from "../../root/components/LoginWithGoogle";
// import InputEmail from "../../root/components/InputEmail";
// import InputPassword from "../../root/components/InputPassword";
// import CaptchaComponent from "../../root/components/captchaComponent";
// import InputResetPassword from "./InputResetPassword";
// import { logIn } from "../../root/api/logIn";

export default function Chat() {


  return (
    <>
    <div css={LeftContainerStyle}>123</div>
    <div css={RightContainerStyle}>123</div>

    </>
  );
}

const LeftContainerStyle = css`
  width: 25vw;
  height: calc(100vh - 68px);
  background: #80e7dc;
`;
const RightContainerStyle = css`
  width: 75vw;
  height: calc(100vh - 68px);
  background: #1aa600;
`;
