/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonComponent from "../../root/components/ButtonComponent";
import InputPassword from "../../root/components/InputPassword";
import CaptchaComponent from "../../root/components/captchaComponent";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <div css={cotainerStyle}>
        <div css={mainStyle}>
          <div css={signupStyle}>
            <Typography variant="h6" css={textStyle}>
              重新設定密碼
            </Typography>
            <InputPassword
              style={textFieldStyle}
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
            />
            <InputPassword
              style={textFieldStyle}
              password={confirmPassword}
              setPassword={setConfirmPassword}
              showPassword={showPassword}
              label={"再次輸入你的 Password"}
            />
            <CaptchaComponent />
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
            <ButtonComponent
              variant={"contained"}
              color={"error"}
              style={btnstyle}
              btnText={"確定"}
            />
          </div>
        </div>
      </div>
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
