/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CustomDialog from "../../../../root/components/CustomDialog";
import InputEmail from "../../../../root/components/InputEmail";
import InputPassword from "../../../../root/components/InputPassword";

export default function CommonEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popUp, setPopup] = useState(false);
  const verify = true;

  const contentText = () => {
    return (
      <div>
        <Typography variant="subtitle2" css={textStyle}>
          以後可以用這個常用信箱登入
        </Typography>
        <InputEmail style={textFieldStyle} email={email} setEmail={setEmail} />
        <InputPassword
          style={textFieldStyle}
          password={password}
          setPassword={setPassword}
        />
      </div>
    );
  };

  return (
    <div css={avatarImgStyle}>
      <div>
        <Typography variant="h6" css={textStyle}>
          常用信箱
        </Typography>
        <Typography variant="subtitle2" css={subtitleStyle}>
          這是你目前可以用來登入的信箱
        </Typography>
        <div css={mailInfoStyle}>
          <Typography variant="subtitle2" css={mailStyle}>
            hn15637648@gmail
          </Typography>
          <Alert
            severity={verify ? "success" : "warning"}
            css={iconStyle}
          ></Alert>
        </div>
      </div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setPopup(true)}
      >
        更改
      </Button>
      <CustomDialog
        open={popUp}
        onclose={() => setPopup(false)}
        disagreeHandler={() => setPopup(false)}
        agreeHandler={() => setPopup(false)}
        title={"更改常用信箱"}
        contentText={contentText()}
        cancelBtnText={"取消"}
        agreeBtntext={"送出"}
      />
    </div>
  );
}

const avatarImgStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 24px 0;
`;

const textStyle = css`
  margin-bottom: 8px;
`;

const subtitleStyle = css`
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
`;

const mailInfoStyle = css`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const mailStyle = css`
  margin-right: 8px;
`;

const iconStyle = css`
  display: contents;
`;

const textFieldStyle = css`
  margin-bottom: 16px;
`;
