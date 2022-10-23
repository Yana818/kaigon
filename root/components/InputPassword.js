/** @jsxImportSource @emotion/react */
import TextField from "@mui/material/TextField";

export default function InputPassword({
  style,
  password,
  setPassword,
  label = "輸入 Password",
  showPassword = true,
  error,
  errorType,
}) {
  if (password.length < 8 && password.length !== 0) {
    error = true;
    errorType = "notEnough";
  }
  return (
    <TextField
      id="filled-basic"
      label={label}
      variant="filled"
      fullWidth
      css={style}
      value={password}
      type={showPassword ? "text" : "password"}
      helperText={error && errorMessage(errorType)}
      error={error ? true : false}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}

const errorMessage = (errorType) => {
  if (errorType === "notEnough") {
    return "密碼需8個字";
  } else if (errorType === "empty") {
    return "需輸入密碼";
  }
};
