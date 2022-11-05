/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function AvatarInfo() {
  const name = "盧 Nemo";
  return (
    <div css={containerStyle}>
      <Avatar alt="" src="" sx={{ width: 120, height: 120 }} />
      <Typography variant="h4" css={textStyle}>
        {name}
      </Typography>
    </div>
  );
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const textStyle = css`
  margin-top: 16px;
  color: white;
`;
