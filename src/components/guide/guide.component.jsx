import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";

import PropTypes from "prop-types";
import Step from "@mui/material/Step";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Check from "@mui/icons-material/Check";
import StepLabel from "@mui/material/StepLabel";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import cube from "../../assets/ai-repricer/cube.png";
import wind from "../../assets/ai-repricer/wind.png";
import power from "../../assets/ai-repricer/power.png";

import aiStrategyLogo from "../../assets/ai-repricer/ai-strategy-logo.png";
import customStrategyLogo from "../../assets/ai-repricer/custom-strategy-logo.png";

import manual from "../../assets/ai-repricer/manual.png";
import roi from "../../assets/ai-repricer/roi.png";
import profitMargin from "../../assets/ai-repricer/profit-margin.png";
import fixedProfit from "../../assets/ai-repricer/fixed-profit.png";
import madMax from "../../assets/ai-repricer/madmax.png";
import slowAndSteady from "../../assets/ai-repricer/slownsteady.png";

import { useState } from "react";
import CostUploader from "../costUploader/costUploader.component";
import SelectMarketplace from "../selectMarketplace/selectMarketplace.component";
import {
  Button,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
} from "@mui/material";

import {
  AdjustMinMaxContainer,
  AiProfile,
  AiProfileImageBox,
  AiProfileSelect,
  AiProfilesButtonsContainer,
  AiProfilesContainer,
  AiProfilesSelectContainer,
  AiStrategyImageAndText,
  AiStrategyImageBox,
  BackButton,
  BoxText,
  DescriptionText,
  HeaderText,
  ImageBox,
  MinMaxTypeSelect,
  NavigationButtonsContainer,
  SpanText,
  StrategyChip,
  StrategyImageBox,
  StrategyType,
  StrategyTypesContainer,
  StyledAccordion,
  StyledListItemAvatar,
  StyledPaper,
  StyledPaperRight,
  StyledStack,
  SubmitButton,
  TextContainer,
} from "./guide.styles";
import RepricerButton from "../repricerButton/repricerButton.component";
import ChooseStrategy from "../chooseStrategy/chooseStrategy.component";

//-------------------------------
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(136deg, rgb(37,170,225) 0%, rgb(68,129,235) 50%, rgb(4,190,254) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(136deg, rgb(37,170,225) 0%, rgb(68,129,235) 50%, rgb(4,190,254) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(136deg, rgb(37,170,225) 0%, rgb(68,129,235) 50%, rgb(4,190,254) 100%)",
    boxShadow:
      "0px 6px 12px 0px rgba(0,0,0,.25), 0px 0px 0px 10px #fff, inset 0px 0px 0px 0px #fff",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(136deg, rgb(37,170,225) 0%, rgb(68,129,235) 50%, rgb(4,190,254) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PowerSettingsNewOutlinedIcon />,
    2: <PaymentsOutlinedIcon />,
    3: <OpenWithOutlinedIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const headingGuideSteps = [
  "Authorize Marketplace",
  "Add Cost",
  "Choose Strategy",
];

const Guide = () => {
  // accordion
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container spacing={0}>
      {/* grid for side steps */}
      <Grid item xs={4} sx={{ margin: "20px" }}>
        {/* for the power button */}
        <StyledPaper sx={{ marginBottom: "50px" }}>
          <StyledAccordion
            //for the power button
            sx={{ paddingBottom: "30px" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ArrowOutwardOutlinedIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <ImageBox component="img" src={power} />
              <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                1. Authorize Marketplace
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Let AI Repricer determine the optimal strategy in real time for
                any of your listings. No more micro-management of your listings.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <RepricerButton />
        </StyledPaper>

        <StyledPaper>
          <StyledAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ArrowOutwardOutlinedIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <ImageBox component="img" src={cube} />
              <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                2. Add Cost
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Let AI Repricer determine the optimal strategy in real time for
                any of your listings. No more micro-management of your listings.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </StyledPaper>

        <StyledPaper>
          <StyledAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ArrowOutwardOutlinedIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <ImageBox component="img" src={wind} />
              <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                3. Choose Strategy
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Maximize sales with Sales.Support's AI and ML algorithms.
                Dominate the Buy Box with optimized pricing strategies.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </StyledPaper>
        {/* end of grid for side steps */}
      </Grid>

      <Grid item xs={7} sx={{ margin: "20px" }}>
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={
              expanded === "panel1"
                ? "1" && 0
                : expanded === "panel2"
                ? "2" && 1
                : expanded === "panel3"
                ? "3" && 2
                : "1"
            }
            connector={<ColorlibConnector />}
          >
            {headingGuideSteps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>

        <StyledPaperRight>
          {expanded === "panel1" ? (
            <SelectMarketplace />
          ) : expanded === "panel2" ? (
            <CostUploader />
          ) : (
            <ChooseStrategy />
          )}
        </StyledPaperRight>
      </Grid>
    </Grid>
  );
};

export default Guide;
