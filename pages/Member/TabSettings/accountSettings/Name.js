/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomDialog from "../../../../root/components/CustomDialog";
import TextField from "@mui/material/TextField";

export default function Name() {
  const [popUp, setPopup] = useState(false);
  const [name, setName] = useState("");
  const contentText = () => {
    return (
      <div>
        <TextField
          id="filled-basic"
          label={"輸入您的姓名"}
          variant="filled"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    );
  };
  return (
    <div css={avatarImgStyle}>
      <div>
        <Typography variant="h6" css={textStyle}>
          姓名
        </Typography>
        <div css={passwordInfoStyle}>
          <Typography variant="subtitle2" css={passwordStyle}>
            郭上瑞
          </Typography>
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
        title={"更改姓名"}
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
