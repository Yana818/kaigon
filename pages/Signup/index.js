/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonComponent from "../../root/components/ButtonComponent";
import AppleIcon from "@mui/icons-material/Apple";

export default function Signup() {
  return (
    <div css={cotainerStyle}>
      <div css={mainStyle}>
        <div css={signupStyle}>
          <Typography variant="h6" css={textStyle}>
            註冊帳號
            <TextField
              id="filled-basic"
              label="輸入 Email"
              variant="filled"
              fullWidth
              css={textFieldStyle}
            />
            <TextField
              id="filled-basic"
              label="輸入 Password"
              variant="filled"
              fullWidth
              css={textFieldStyle}
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
          <ButtonComponent
            variant={"contained"}
            startIcon={<FacebookOutlinedIcon />}
            style={[btnstyle, fbbtnStyle]}
            btnText={"使用facebook登入"}
          />
          <ButtonComponent
            variant={"outlined"}
            startIcon={<GoogleIcon />}
            style={[btnstyle, googlebtnStyle]}
            btnText={"使用google登入"}
          />
          <ButtonComponent
            variant={"outlined"}
            startIcon={<AppleIcon />}
            style={[btnstyle, googlebtnStyle]}
            btnText={"使用Apple登入"}
          />
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
