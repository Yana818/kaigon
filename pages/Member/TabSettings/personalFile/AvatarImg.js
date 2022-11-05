/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function AvatarImg() {
  const handleChange = (event) => {
    console.log(123);
    console.log("event.target.value", event.target.files);
  };

  return (
    <div css={avatarImgStyle}>
      <div>
        <Typography variant="h6" css={textStyle}>
          大頭貼
        </Typography>
        <Avatar alt="" src="" sx={{ width: 60, height: 60 }} />
      </div>
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          accept="image/*"
          type="file"
          onChange={handleChange}
        />
        <Button color="primary" variant="contained" component="span">
          更改圖片
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
