/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CustomDialog from "../../../../root/components/CustomDialog";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(media, account) {
  return { media, account };
}

const rows = [createData("Ig", "hn15637648")];

function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SocialMedia</StyledTableCell>
            <StyledTableCell>Account</StyledTableCell>
            <StyledTableCell>deleted</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.media}>
              <StyledTableCell component="th" scope="row">
                {row.media}
              </StyledTableCell>
              <StyledTableCell align="right">{row.account}</StyledTableCell>
              <StyledTableCell padding="checkbox">
                <DeleteIcon
                  css={deleteIconStyle}
                  onClick={() => console.log("delete")}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const SelectSocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState("");
  const [account, setAccount] = useState("");

  const handleChange = (event) => {
    setSocialMedia(event.target.value);
  };
  const selected = socialMedia !== "";

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">SocialMedia</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={socialMedia}
            label="SocialMedia"
            onChange={handleChange}
          >
            <MenuItem value={"ig"}>Ig</MenuItem>
            <MenuItem value={"twitter"}>Twitter</MenuItem>
            <MenuItem value={"fb"}>Fb</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {selected && (
        <TextField
          id="filled-basic"
          label="輸入 Account"
          variant="filled"
          fullWidth
          value={account}
          css={css`
            margin-top: 16px;
          `}
          onChange={(e) => setAccount(e.target.value)}
        />
      )}
    </>
  );
};

export default function SocialMedia() {
  const [popUp, setPopup] = useState(false);
  return (
    <div css={avatarImgStyle}>
      <div>
        <Typography variant="h6" css={textStyle}>
          社群媒體帳號
        </Typography>
        <CustomizedTables />
      </div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setPopup(true)}
      >
        新增
      </Button>
      <CustomDialog
        open={popUp}
        onclose={() => setPopup(false)}
        disagreeHandler={() => setPopup(false)}
        agreeHandler={() => setPopup(false)}
        title={"選擇你的Social Media"}
        contentText={SelectSocialMedia()}
        cancelBtnText={"取消"}
        agreeBtntext={"送出"}
      />
    </div>
  );
}

const avatarImgStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 24px 0;
`;

const textStyle = css`
  margin-bottom: 8px;
`;

const deleteIconStyle = css`
  cursor: pointer;
`;
