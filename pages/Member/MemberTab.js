/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const allTabs = [
  { value: "articleOverview", name: "文章總覽" },
  { value: "favoriteArticles", name: "收藏的文章" },
  { value: "trackedKanban", name: "追蹤的看板" },
  { value: "trackedhashtag", name: "追蹤的hashtag" },
  { value: "trackedAuthor", name: "追蹤的作者" },
  { value: "publishedArticles", name: "發表的文章" },
  { value: "personalFile", name: "個人檔案" },
  { value: "blockList", name: "我的封鎖名單" },
  { value: "accountSettings", name: "帳號設定" },
];

export default function MemberTab({ setTab }) {
  function generate() {
    return allTabs.map((value, index) => (
      <ListItem key={index}>
        <ListItemText
          primary={value.name}
          onClick={() => setTab(value.value)}
        />
      </ListItem>
    ));
  }
  return (
    <div css={containerStyle}>
      <List>{generate()}</List>
    </div>
  );
}

const containerStyle = css`
  background: gray;
  margin-top: 24px;
  width: 100%;
  height: 100%;
`;
