/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import AvatarInfo from "./AvatarInfo";
import MemberAchievement from "./MemberAchievement";
import MemberTab from "./MemberTab";

export default function TabGroup({ setTab }) {
  return (
    <div css={containerStyle}>
      <AvatarInfo />
      <MemberAchievement />
      <MemberTab setTab={setTab} />
    </div>
  );
}

const containerStyle = css``;
