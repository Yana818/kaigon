/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ButtonComponent from "../../root/components/ButtonComponent";
import LoginWithApple from "../../root/components/LoginWithApple";
import LoginWithFB from "../../root/components/LoginWithFB";
import LoginWithGoogle from "../../root/components/LoginWithGoogle";
import InputEmail from "../../root/components/InputEmail";
import InputPassword from "../../root/components/InputPassword";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div css={cotainerStyle}>
      <div css={mainStyle}>
        <div css={signupStyle}>
          <Typography variant="h6" css={textStyle}>
            註冊帳號
            <InputEmail
              style={textFieldStyle}
              email={email}
              setEmail={setEmail}
            />
            <InputPassword
              style={textFieldStyle}
              password={password}
              setPassword={setPassword}
            />
            <ButtonComponent
              variant={"contained"}
              color={"error"}
              style={btnstyle}
              btnText={"註冊"}
            />
          </Typography>
          <div css={dividerContainerStyle}>
            <Divider css={dividerStyle} />
            <Typography variant="caption" css={dividertextStyle}>
              或是
            </Typography>
          </div>
          <LoginWithFB style={[btnstyle, fbbtnStyle]} />
          <LoginWithGoogle style={[btnstyle, googlebtnStyle]} />
          <LoginWithApple style={[btnstyle, googlebtnStyle]} />
          <div>
            <Typography variant="body2" css={[textStyle, textColor("#d32f2f")]}>
              已經有帳號嗎？
            </Typography>
            <ButtonComponent
              variant={"outlined"}
              color={"error"}
              style={btnstyle}
              btnText={"前往登入"}
              href={"/Login"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const cotainerStyle = css`
  width: 100%;
  height: 100vh;
`;

const mainStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const signupStyle = css`
  width: 360px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px, rgb(0 0 0 / 12%) 0px 6px 30px 5px,
    rgb(0 0 0 / 14%) 0px 16px 24px 2px;
  padding: 16px 24px;
`;

const textStyle = css`
  text-align: center;
  margin: 0px 0px 8px;
`;

const btnstyle = css`
  position: relative;
  width: 100%;
  border-radius: 4px;
  padding: 10px 16px;
  margin-bottom: 8px;
`;
const fbbtnStyle = css`
  color: rgb(255, 255, 255);
  background-color: rgb(50, 95, 159);
`;

const googlebtnStyle = css`
  color: #000;
`;

const dividerContainerStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 16px 0px;
`;

const dividerStyle = css`
  position: absolute;
  z-index: 0;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  top: calc(50% - 1px);
  left: 0px;
  width: 100%;
`;

const dividertextStyle = css`
  position: relative;
  z-index: 1;
  background-color: rgb(255, 255, 255);
  color: rgb(182, 182, 182);
  padding: 0px 8px;
`;

const textFieldStyle = css`
  margin-bottom: 16px;
`;

const forgetPasswordStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
`;

const textColor = (color) =>
  css`
    color: ${color};
  `;
