/** @jsxImportSource @emotion/react */
import Button from "@mui/material/Button";

export default function ButtonComponent({
  variant,
  startIcon,
  style,
  btnText,
  color,
  href,
  onClick,
}) {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      css={style}
      color={color}
      href={href}
      onClick={onClick}
    >
      {btnText}
    </Button>
  );
}
