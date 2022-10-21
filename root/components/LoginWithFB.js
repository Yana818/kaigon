/** @jsxImportSource @emotion/react */
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import ButtonComponent from "./ButtonComponent";

export default function LoginWithFB({ style }) {
  return (
    <ButtonComponent
      variant={"outlined"}
      startIcon={<FacebookOutlinedIcon />}
      style={style}
      btnText={"使用google登入"}
    />
  );
}
