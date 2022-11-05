/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import TabGroup from "./tabGroup";
import { allTabs } from "./MemberTab";
import DisplayTabSettings from "./DisplayTabSettings";
import PersonalFile from "./TabSettings/personalFile/PersonalFile";
import AccountSettings from "./TabSettings/accountSettings/AccountSettings";

const defaultTab = "defaultTab";

export default function Member() {
  const [tab, setTab] = useState(defaultTab);
  const showTab = () => {
    if (tab === allTabs[0].value) {
      return { value: "文章總覽", render: null };
    } else if (tab === allTabs[1].value) {
      return { value: "收藏的文章", render: null };
    } else if (tab === allTabs[2].value) {
      return { value: "追蹤的看板", render: null };
    } else if (tab === allTabs[3].value) {
      return { value: "追蹤的hastag", render: null };
    } else if (tab === allTabs[4].value) {
      return { value: "追蹤的作者", render: null };
    } else if (tab === allTabs[5].value) {
      return { value: "發表的文章", render: null };
    } else if (tab === allTabs[6].value) {
      return { value: "個人檔案", render: <PersonalFile /> };
    } else if (tab === allTabs[7].value) {
      return { value: "我的封鎖名單", render: null };
    } else if (tab === allTabs[8].value) {
      return { value: "帳號設定", render: <AccountSettings /> };
    } else if (tab === defaultTab) {
      return { value: "請選擇你的設定選項", render: null };
    }
  };

  return (
    <div css={containerStyle}>
      <div css={tabGroupStyle}>
        <TabGroup setTab={setTab} />
      </div>
      <DisplayTabSettings title={showTab().value}>
        {showTab().render}
      </DisplayTabSettings>
    </div>
  );
}

const containerStyle = css`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #054c88;
  padding: 16px 8px;
`;

const tabGroupStyle = css`
  width: 30%;
  background: orange;
  margin-right: 16px;
  height: 100%;
  padding: 16px;
`;
