/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import ButtonComponent from "./ButtonComponent";
import { logInWithGoogle } from "../api/logIn";

export default function LoginWithGoogle({ style }) {
  const [googleUrl, setGoogleUrl] = useState("");
  useEffect(() => {
    const getGoogleUrl = async () => {
      const res = await logInWithGoogle();
      setGoogleUrl(res.payload.data.url);
    };
    getGoogleUrl();
  }, []);
  return (
    <ButtonComponent
      variant={"outlined"}
      startIcon={<GoogleIcon />}
      style={style}
      btnText={"使用google登入"}
      href={googleUrl}
    />
  );
}
