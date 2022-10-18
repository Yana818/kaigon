/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ButtonComponent({
  variant,
  startIcon,
  style,
  btnText,
  color,
  href,
}) {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      css={style}
      color={color}
      href={href}
    >
      {btnText}
    </Button>
  );
}
