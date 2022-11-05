/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { Divider } from "@mui/material";
import AvatarImg from "./AvatarImg";
import BannerImg from "./BannerImg";
import PersonalSignature from "./PersonalSignature";
import SocialMedia from "./SocialMedia";
import CommonEmail from "./CommonEmail";

export default function PersonalFile() {
  return (
    <>
      <AvatarImg />
      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />
      <BannerImg />
      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />
      <SocialMedia />
      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />
      <CommonEmail />
      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />
      <PersonalSignature />
      <Divider sx={{ border: 1, color: "rgba(0, 0, 0,.3)" }} />
    </>
  );
}
