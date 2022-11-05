/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="title5">文章與留言</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            我追蹤的/我的文章有所新留言
          </Typography>
          <RadioButtonsGroup />
          <div>
            <ControlLabelBySwitch
              label={"我的留言被標註"}
              value={"commentTagged"}
            />
          </div>
          <div>
            <ControlLabelBySwitch
              label={"我的文章獲得心情"}
              value={"articleTweet"}
            />
          </div>
          <div>
            <ControlLabelBySwitch
              label={"我的留言獲得愛心"}
              value={"commentTweet"}
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>其他通知</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ControlLabelBySwitch
              label={"我感興趣的內容"}
              value={"interestRecommendation"}
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>個人</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ControlLabelBySwitch label={"聊天室通知"} value={"chat"} />
          </div>
          <div>
            <ControlLabelBySwitch label={"我被追蹤"} value={"chat"} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function RadioButtonsGroup() {
  const [selected, setSelected] = useState("0");
  return (
    <FormControl>
      <RadioGroup
        defaultValue={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <FormControlLabel value="0" control={<Radio />} label="關閉" />
        <FormControlLabel value="1" control={<Radio />} label="標注我的留言" />
        <FormControlLabel value="2" control={<Radio />} label="所有留言" />
      </RadioGroup>
    </FormControl>
  );
}

function ControlLabelBySwitch({ value, label }) {
  const [checked, setChecked] = useState(true);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <FormControlLabel
      value={value}
      control={<Switch color="primary" />}
      label={label}
      labelPlacement="start"
      checked={checked}
      onChange={handleChange}
    />
  );
}

export default function NotificationSettings() {
  return (
    <div css={avatarImgStyle}>
      <Typography variant="h6" css={textStyle}>
        通知設定
      </Typography>
      <CustomizedAccordions />
    </div>
  );
}

const avatarImgStyle = css`
  padding: 24px 0;
`;

const textStyle = css`
  margin-bottom: 8px;
`;
