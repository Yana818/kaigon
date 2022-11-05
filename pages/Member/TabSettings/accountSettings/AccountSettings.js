/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { Divider } from "@mui/material";
import Password from "./Password";
import Name from "./Name";
import GoogleConnect from "./GoogleConnect";
import NotificationSettings from "./NotificationSettings";

export default function AccountSettings() {
  return (
    <>
      <Password />
      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />
      <Name />
      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />
      <GoogleConnect />
      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />
      <NotificationSettings />
      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />

      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />
    </>
  );
}
