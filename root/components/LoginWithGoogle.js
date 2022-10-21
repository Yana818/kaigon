/** @jsxImportSource @emotion/react */
import GoogleIcon from "@mui/icons-material/Google";
import ButtonComponent from "./ButtonComponent";

export default function LoginWithGoogle({ style }) {
  return (
    <ButtonComponent
      variant={"outlined"}
      startIcon={<GoogleIcon />}
      style={style}
      btnText={"使用google登入"}
    />
  );
}
