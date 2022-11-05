/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function DisplayTabSettings({ title = 123, children }) {
  return (
    <div css={displayStyle}>
      <div css={headerStyle}>
        <Typography variant="h2" css={textStyle}>
          {title}
        </Typography>
        <Divider sx={{ border: 1 }} />
        {children}
      </div>
    </div>
  );
}

const displayStyle = css`
  width: 70%;
  background: green;
  height: 100%;
  border-radius: 24px;
  padding: 16px;
  overflow: scroll;
`;

const textStyle = css`
  margin-bottom: 24px;
`;

const headerStyle = css`
  padding: 24px 72px;
`;
