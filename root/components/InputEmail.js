/** @jsxImportSource @emotion/react */
import TextField from "@mui/material/TextField";

export default function InputEmail({
  style,
  email,
  setEmail,
  error = false,
  errorType = "",
}) {
  const emailRegxp = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
  if (emailRegxp.test(email) != true && email.length !== 0) {
    error = true;
    errorType = "emailFormatError";
  }
  return (
    <TextField
      id="filled-basic"
      label="輸入 Email"
      variant="filled"
      fullWidth
      css={style}
      value={email}
      helperText={error && errorMessage(errorType)}
      error={error ? true : false}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}

const errorMessage = (errorType) => {
  if (errorType === "emailFormatError") {
    return "Email 格式錯誤";
  } else if (errorType === "empty") {
    return "需輸入Email";
  }
};

