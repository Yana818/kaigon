/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomDialog from "../../../../root/components/CustomDialog";
import TextField from "@mui/material/TextField";

export default function GoogleConnect() {
  const [popUp, setPopup] = useState(false);
  return (
    <div css={avatarImgStyle}>
      <div>
        <Typography variant="h6" css={textStyle}>
          Goolge 帳號連結
        </Typography>
        <Typography variant="subtitle2" css={textStyle}>
          此功能只用於快速登入免於輸入帳密，不做其他用途
        </Typography>
      </div>
      <a href="http://google.com" target="_blank" rel="noreferrer">
        <Button color="primary" variant="contained">
          連結至 Google
        </Button>
      </a>
      <CustomDialog
        open={popUp}
        onclose={() => setPopup(false)}
        disagreeHandler={() => setPopup(false)}
        agreeHandler={() => setPopup(false)}
        title={"確定綁定嗎？"}
        cancelBtnText={"取消"}
        agreeBtntext={"送出"}
        needDivider={false}
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

const passwordInfoStyle = css`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const passwordStyle = css`
  margin-right: 8px;
`;

const textFieldStyle = css`
  margin-bottom: 16px;
`;
