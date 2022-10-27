/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import RefreshIcon from "@mui/icons-material/Refresh";
import { getCaptchaUuid, reloadCaptchaImage } from "../../root/api/signup";

export default function CaptchaComponent() {
  const [imgUrl, setImgurl] = useState("");
  const [captchaUuid, setCaptchaUuid] = useState("");
  const [qs, setQs] = useState(1);

  const url = (captchaUuid, qs) => {
    return `https://kaigon.sidesideeffect.io/api/auth/captcha/${captchaUuid}/image?${qs}`;
  };

  useEffect(() => {
    async function init() {
      const { uuid } = await getCaptchaUuid();
      setCaptchaUuid(uuid);
      setImgurl(url(uuid));
    }
    init();
  }, []);

  useEffect(() => {
    if (captchaUuid) {
      setImgurl(url(captchaUuid, qs));
    }
  }, [captchaUuid, qs]);

  const handleReloadCaptcha = async (captchaUuid) => {
    await reloadCaptchaImage(captchaUuid);
    await setQs((prew) => prew + 1);
  };

  return (
    <div css={CaptchaFieldStyle}>
      <TextField id="outlined-basic" label="輸入驗證碼" variant="outlined" />
      <div css={CaptchaStyle(imgUrl)}></div>
      <RefreshIcon
        css={refreshIconStyle}
        onClick={() => {
          handleReloadCaptcha(captchaUuid);
        }}
      />
    </div>
  );
}

const CaptchaFieldStyle = css`
  margin-bottom: 16px;
  display: flex;
`;

const CaptchaStyle = (url) =>
  css`
    flex-grow: 2;
    background-image: url(${url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300%;
  `;

const refreshIconStyle = css`
  margin: auto;
  cursor: pointer;
`;
