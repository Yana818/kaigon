/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonComponent from "../../root/components/ButtonComponent";
import LoginWithApple from "../../root/components/LoginWithApple";
import LoginWithFB from "../../root/components/LoginWithFB";
import LoginWithGoogle from "../../root/components/LoginWithGoogle";
import InputEmail from "../../root/components/InputEmail";
import InputPassword from "../../root/components/InputPassword";
import CaptchaComponent from "../../root/components/captchaComponent";
import InputResetPassword from "./InputResetPassword";
import { logIn } from "../../root/api/logIn";

export default function Login() {
  const CaptChaRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openForgetPassword, setOpenForgertPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleLogIn = async () => {
    if (email.length === 0 || password.length === 0) {
      return;
    }
    let captchaUuid = "";
    let captchaCode = "";
    if (CaptChaRef && CaptChaRef.current) {
      captchaUuid = CaptChaRef.current.getCaptchaUuid();
      captchaCode = CaptChaRef.current.getCaptcha();
    }
    await logIn({ email, password, captchaUuid, captchaCode });
  };

  return (
    <>
      <div css={[cotainerStyle, openForgetPassword && blurBg]}>
        <div css={mainStyle}>
          <div css={signupStyle}>
            <Typography variant="h6" css={textStyle}>
              立即登入
            </Typography>
            <LoginWithFB style={[btnstyle, fbbtnStyle]} />
            <LoginWithGoogle style={[btnstyle, googlebtnStyle]} />
            <LoginWithApple style={[btnstyle, googlebtnStyle]} />
            <div css={dividerContainerStyle}>
              <Divider css={dividerStyle} />
              <Typography variant="caption" css={dividertextStyle}>
                或是
              </Typography>
            </div>
            <InputEmail
              style={textFieldStyle}
              email={email}
              setEmail={setEmail}
            />
            <InputPassword
              style={textFieldStyle}
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  value={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
              }
              label="顯示密碼"
            />
            <CaptchaComponent ref={CaptChaRef} />
            <ButtonComponent
              variant={"contained"}
              color={"error"}
              style={btnstyle}
              btnText={"登入"}
              onClick={() => handleLogIn()}
            />
            <div css={forgetPasswordStyle}>
              <ButtonComponent
                color={"inherit"}
                btnText={"忘記密碼？"}
                onClick={() => setOpenForgertPassword(true)}
              />
            </div>
            <div>
              <Typography
                variant="body2"
                css={[textStyle, textColor("#d32f2f")]}
              >
                還沒有帳號嗎？
              </Typography>
              <ButtonComponent
                variant={"outlined"}
                color={"error"}
                style={btnstyle}
                btnText={"前往註冊"}
                href={"/Signup"}
              />
            </div>
          </div>
        </div>
      </div>
      {openForgetPassword && (
        <InputResetPassword setOpenForgertPassword={setOpenForgertPassword} />
        /* <div css={forgetPasswordDialogStyle}>
          <Typography variant="h6" css={textStyle}>
            輸入您註冊的 Email
          </Typography>
          <InputEmail
            style={textFieldStyle}
            email={forgetPasswordEmail}
            setEmail={setForgetPasswordEmail}
          />
          <div css={btnGropuStyle}>
            <ButtonComponent
              variant={"contained"}
              color={"error"}
              style={[btnstyle, unsetWidthAndMargin, cancelBtn]}
              btnText={"取消"}
              onClick={() => setOpenForgertPassword(false)}
            />
            <ButtonComponent
              variant={"contained"}
              style={[btnstyle, unsetWidthAndMargin]}
              btnText={"發送重設密碼信"}
              onClick={() => console.log("123")}
            />
          </div>
        </div> */
      )}
    </>
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

const forgetPasswordDialogStyle = css`
  width: 360px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px, rgb(0 0 0 / 12%) 0px 6px 30px 5px,
    rgb(0 0 0 / 14%) 0px 16px 24px 2px;
  padding: 16px 24px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  margin: auto;
  max-height: 200px;
`;

const blurBg = css`
  filter: blur(15px);
`;

const btnGropuStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const unsetWidthAndMargin = css`
  width: unset;
  margin: unset;
`;

const cancelBtn = css`
  margin-right: 16px;
`;
