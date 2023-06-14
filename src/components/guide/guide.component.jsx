import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

import PropTypes from "prop-types";
import Step from "@mui/material/Step";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import cube from "../../assets/ai-repricer/cube.png";
import wind from "../../assets/ai-repricer/wind.png";
import power from "../../assets/ai-repricer/power.png";
import arrowBlue from "../../assets/ai-repricer/arrow-blue.png";
import arrowGray from "../../assets/ai-repricer/arrow-gray.png";
import inProgress from "../../assets/ai-repricer/in-progress.png";
import completed from "../../assets/ai-repricer/completed.png";

import { useState } from "react";
import CostUploader from "../costUploader/costUploader.component";
import SelectMarketplace from "../selectMarketplace/selectMarketplace.component";

import {
  ArrowContainer,
  GuideContainer,
  GuideLeftSide,
  GuideRightSide,
  GuideText,
  ImageBox,
  StepText,
  StyledAccordion,
  StyledPaper,
  StyledPaperRight,
} from "./guide.styles";
import RepricerButton from "../repricerButton/repricerButton.component";
import ChooseStrategy from "../chooseStrategy/chooseStrategy.component";
import { Box } from "@mui/material";

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
  borderRadius: "10%",
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

const headingGuideSteps = ["", "", ""];

const Guide = () => {
  // accordion
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container spacing={0}>
      <GuideContainer>
        <GuideLeftSide>
          <ImageBox
            component="img"
            src={cube}
            sx={{ width: "34px", height: "36px", margin: "0px" }}
          />
          <GuideText>Guide</GuideText>
        </GuideLeftSide>
        <GuideRightSide>
          <Box sx={{ position: "relative" }}>
            <ImageBox
              component="img"
              src={expanded === "panel1" ? arrowBlue : arrowGray}
              sx={
                expanded === "panel1"
                  ? {
                      width: "240px",
                      height: "50px",
                      margin: "0px",
                      right: "-10px",
                    }
                  : {
                      width: "240px",
                      height: "50px",
                      margin: "0px",
                      filter: "drop-shadow(5px 5px 5px #d5d5d5)",
                    }
              }
            />
            <ArrowContainer>
              <Box
                component="img"
                src={expanded === "panel1" ? inProgress : power}
                sx={{
                  width: "30px",
                  height: "30px",
                  margin: "0px",
                }}
              />
              <StepText>Authorize Marketplace</StepText>
            </ArrowContainer>
          </Box>
          <Box sx={{ position: "relative" }}>
            <ImageBox
              component="img"
              src={expanded === "panel2" ? arrowBlue : arrowGray}
              sx={
                expanded === "panel2"
                  ? {
                      width: "240px",
                      height: "50px",
                      margin: "0px",
                    }
                  : {
                      width: "240px",
                      height: "50px",
                      margin: "0px",
                      filter: "drop-shadow(5px 5px 5px #d5d5d5)",
                    }
              }
            />
            <ArrowContainer>
              <Box
                component="img"
                src={expanded === "panel2" ? inProgress : cube}
                sx={{
                  width: "30px",
                  height: "30px",
                  margin: "0px",
                }}
              />
              <StepText>Add Cost</StepText>
            </ArrowContainer>
          </Box>
          <Box sx={{ position: "relative" }}>
            <ImageBox
              component="img"
              src={expanded === "panel3" ? arrowBlue : arrowGray}
              sx={
                expanded === "panel3"
                  ? {
                      width: "240px",
                      height: "50px",
                      margin: "0px",
                    }
                  : {
                      width: "240px",
                      height: "50px",
                      margin: "0px",
                      filter: "drop-shadow(5px 5px 5px #d5d5d5)",
                    }
              }
            />
            <ArrowContainer>
              <Box
                component="img"
                src={expanded === "panel3" ? inProgress : wind}
                sx={{
                  width: "30px",
                  height: "30px",
                  margin: "0px",
                }}
              />
              <StepText>Choose Strategy</StepText>
            </ArrowContainer>
          </Box>
        </GuideRightSide>
        {/* <Stack sx={{ width: "70%" }} spacing={4}>
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
        </Stack> */}
      </GuideContainer>
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
