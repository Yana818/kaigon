/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import ButtonComponent from "../../root/components/ButtonComponent";
import InputEmail from "../../root/components/InputEmail";
import { sendForgetPasswordEmail } from "../../root/api/logIn";
import { useRouter } from "next/router";

export default function InputResetPassword({ setOpenForgertPassword }) {
  const router = useRouter();
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");
  const handleSendForgetPasswordEmail = async () => {
    if (forgetPasswordEmail.length === 0) {
      return;
    }
    await sendForgetPasswordEmail({
      email: forgetPasswordEmail,
      path: "http://localhost:3000/ResetPassword",
    });
  };

  return (
    <>
      <div css={forgetPasswordDialogStyle}>
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
            onClick={() => handleSendForgetPasswordEmail()}
          />
        </div>
      </div>
    </>
  );
}

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

const textFieldStyle = css`
  margin-bottom: 16px;
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
