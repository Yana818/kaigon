/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function PersonalSignature() {
  return (
    <div css={avatarImgStyle}>
      <div>
        <Typography variant="h6" css={textStyle}>
          個人簽名檔
        </Typography>
        <div
          css={css`
            width: 500px;
            height: 100px;
            background: gray;
          `}
        ></div>
      </div>
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
        />
        <Button color="primary" variant="contained" component="span">
          更改簽名檔
        </Button>
      </label>
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
