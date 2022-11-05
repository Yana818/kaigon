/** @jsxImportSource @emotion/react */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import { css } from "@emotion/react";

export default function CustomDialog({
  open,
  onclose,
  disagreeHandler,
  agreeHandler,
  title,
  contentText,
  cancelBtnText,
  agreeBtntext,
  needDivider = true,
}) {
  return (
    <Dialog open={open} onClose={onclose}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      {needDivider && <Divider css={dividerStyle}></Divider>}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {contentText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={disagreeHandler}>{cancelBtnText}</Button>
        <Button onClick={agreeHandler} autoFocus>
          {agreeBtntext}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const dividerStyle = css`
  margin: 0 16px;
`;
