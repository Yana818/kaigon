/** @jsxImportSource @emotion/react */
import AppleIcon from "@mui/icons-material/Apple";
import ButtonComponent from "./ButtonComponent";

export default function LoginWithApple({ style }) {
  return (
    <ButtonComponent
      variant={"outlined"}
      startIcon={<AppleIcon />}
      style={style}
      btnText={"使用google登入"}
    />
  );
}
