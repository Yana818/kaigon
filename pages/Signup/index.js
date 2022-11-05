/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ButtonComponent from "../../root/components/ButtonComponent";
import LoginWithApple from "../../root/components/LoginWithApple";
import LoginWithFB from "../../root/components/LoginWithFB";
import LoginWithGoogle from "../../root/components/LoginWithGoogle";
import InputEmail from "../../root/components/InputEmail";
import InputPassword from "../../root/components/InputPassword";
import CaptchaComponent from "../../root/components/captchaComponent";
import { signUp } from "../../root/api/signup";

export default function Signup() {
  const CaptChaRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [severity, setSeverity] = useState(false);
  const [alertTitleText, setAlertTitleText] = useState("");
  const [alertText, setAlertText] = useState("");


  const handleSignup = async (inputEmail, inputPassword) => {
    console.log(inputEmail, inputPassword);
    let captchaUuid;
    let captchaCode;
    if (CaptChaRef && CaptChaRef.current) {
      captchaUuid = CaptChaRef.current.getCaptchaUuid();
      captchaCode = CaptChaRef.current.getCaptchaCode();
      console.log("captchaUuid", captchaUuid);
      console.log("captcha", captchaCode);
    }
    const data = {
      email: inputEmail,
      password: inputPassword,
      captchaUuid,
      captchaCode,
    };

    try {
      const res = await signUp(data);
      console.log(res);
      if (res.httpStatus !== 200) {
        console.log(`status is not 200: ${res}`);
      } else {
        console.log("Sign up done");
        setEmail("");
        setPassword("");
      }
      setSeverity("success")
      setAlertTitleText("註冊成功")
      setAlertText("認證信寄送到信箱囉，快去信箱看看吧！")
    } catch (error) {
      console.log(`Error: ${error}`);

      // setAlertTitleText("註冊成功")
      // setAlertText("認證信寄送到信箱囉，快去信箱看看吧！")
    } finally {
      setShowAlert(true);
    }
  };

  return (
    <div css={cotainerStyle}>
      <div css={mainStyle}>
        {showAlert && (
          <Alert css={alertStyle} severity={severity}>
            <AlertTitle>{alertTitleText}</AlertTitle>
            {alertText}
          </Alert>
        )}
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
              btnText={"註冊"}
              onClick={() => handleSignup(email, password)}
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

const alertStyle = css`
  position: fixed;
  z-index: 5;
  top: 5vh;
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

const CaptchaFieldStyle = css`
  margin-bottom: 16px;
  display: flex;
`;

const CaptchaStyle = (url) =>
  css`
    flex-grow: 2;
    background-image: url(${url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300%;
  `;

const refreshIconStyle = css`
  margin: auto;
  cursor: pointer;
`;
