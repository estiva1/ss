import { Box, Slide, Step, StepContent, StepLabel, Stepper, Zoom } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

import cube from "../../assets/ai-repricer/cube.png";
import wind from "../../assets/ai-repricer/wind.png";
import power from "../../assets/ai-repricer/power.png";
import arrowBlue from "../../assets/ai-repricer/arrow-blue.png";
import arrowGray from "../../assets/ai-repricer/arrow-gray.png";
import inProgress from "../../assets/ai-repricer/in-progress.png";

import { useState } from "react";
import CostUploader from "../costUploader/costUploader.component";
import RepricerButton from "../repricerButton/repricerButton.component";
import ChooseStrategy from "../chooseStrategy/chooseStrategy.component";
import SelectMarketplace from "../selectMarketplace/selectMarketplace.component";

import {
  ArrowContainer,
  GuideContainer,
  GuideLeftSide,
  GuideRightSide,
  GuideText,
  ImageBox,
  MainWrapper,
  StepText,
  StepperStrategyText,
  StepperSubstrategyText,
  StyledAccordion,
  StyledAccordionContainer,
  StyledPaperRight,
  ValueText,
} from "./guide.styles";
import styled from "@emotion/styled";

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiSvgIcon-root.Mui-completed": {
    color: "#009C34",
  },
  "& .MuiStepLabel-label.Mui-active": {
    fontSize: "0.875rem",
    fontWeight: "700",
    lineHeight: "1rem",
    color: "#1565D8",
  },
  "& .MuiStepLabel-label.Mui-completed": {
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1rem",
    color: "#000",
  },
}));

const Guide = () => {
  // accordion
  const [expanded, setExpanded] = useState("panel1");
  const [isFirstPanelExpanded, setIsFirstPanelExpanded] = useState(true);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if (panel === "panel1") {
      setIsFirstPanelExpanded(isExpanded);
    }
  };

  const [strategyType, setStrategyType] = useState(null);
  const handleStrategyTypeChange = (strategy) => {
    setStrategyType(strategy);
  };

  const [substrategyType, setSubstrategyType] = useState(null);
  const handleSubstrategyTypeChange = (substrategy) => {
    setSubstrategyType(substrategy);
  };

  const [minMaxType, setMinMaxType] = useState(null);
  const handleMinMaxTypeChange = (minMaxType) => {
    setMinMaxType(minMaxType);
  };

  const [products, setProducts] = useState(null);
  const handleProductsChange = (products) => {
    setProducts(products);
  };

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      return;
    }
  };
  const handleBack = (doubleBack) => {
    if (doubleBack) {
      setActiveStep((prevActiveStep) => prevActiveStep - 2);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Grid container spacing={0}>
        <GuideContainer>
          <GuideLeftSide>
            <ImageBox component="img" src={cube} sx={{ width: "34px", height: "36px", margin: "0px" }} />
            <GuideText>Guide</GuideText>
          </GuideLeftSide>
          <GuideRightSide>
            <Zoom in={true}>
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
            </Zoom>

            <Zoom in={true} timeout={500}>
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
            </Zoom>
            <Zoom in={true} timeout={1000}>
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
            </Zoom>
          </GuideRightSide>
        </GuideContainer>
      </Grid>

      {/* grid for side steps */}
      <MainWrapper>
        <Grid container spacing={0} sx={{ justifyContent: "center" }}>
          <Grid item xs={4} sx={{ margin: "20px" }}>
            <Slide direction="right" in={true}>
              <StyledAccordionContainer sx={{ position: "relative" }}>
                <StyledAccordion
                  //for the power button
                  sx={{ paddingBottom: "40px" }}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ArrowOutwardOutlinedIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <ImageBox component="img" src={power} />
                    <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>1. Authorize Marketplace</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Let AI Repricer determine the optimal strategy in real time for any of your listings. No more
                      micro-management of your listings.
                    </Typography>
                  </AccordionDetails>
                </StyledAccordion>
                <RepricerButton isFirstPanelExpanded={isFirstPanelExpanded} handleChange={handleChange} />
              </StyledAccordionContainer>
            </Slide>

            <Slide direction="right" in={true} timeout={500}>
              <StyledAccordionContainer>
                <StyledAccordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                  <AccordionSummary
                    expandIcon={<ArrowOutwardOutlinedIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <ImageBox component="img" src={cube} />
                    <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>2. Add Cost</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Let AI Repricer determine the optimal strategy in real time for any of your listings. No more
                      micro-management of your listings.
                    </Typography>
                  </AccordionDetails>
                </StyledAccordion>
              </StyledAccordionContainer>
            </Slide>

            <Slide direction="right" in={true} timeout={1000}>
              <StyledAccordionContainer>
                <StyledAccordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                  <AccordionSummary
                    expandIcon={<ArrowOutwardOutlinedIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <ImageBox component="img" src={wind} />
                    <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>3. Choose Strategy</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Maximize sales with Sales.Support's AI and ML algorithms. Dominate the Buy Box with optimized
                      pricing strategies.
                    </Typography>

                    <Box sx={{ maxWidth: 400, marginTop: "24px" }}>
                      <Stepper activeStep={activeStep} orientation="vertical">
                        <Step expanded>
                          <StyledStepLabel>Choose Strategy</StyledStepLabel>
                          <StepContent>
                            <StepperStrategyText>
                              {strategyType === "ai"
                                ? "Ai Powered Strategy"
                                : strategyType === "personalized"
                                ? "Custom Rules Strategy"
                                : "--"}
                            </StepperStrategyText>
                            <StepperSubstrategyText>
                              {substrategyType === "madMax"
                                ? "MadMax"
                                : substrategyType === "slowAndSteady"
                                ? "Slow and Steady"
                                : substrategyType === "buyBox"
                                ? "Buy Box Strategy"
                                : substrategyType === "lowPrice"
                                ? "Low Price Strategy"
                                : "--"}
                            </StepperSubstrategyText>
                            <Box sx={{ mb: 2 }}></Box>
                          </StepContent>
                        </Step>

                        <Step expanded>
                          <StyledStepLabel>Set Min/Max Price</StyledStepLabel>
                          <StepContent>
                            <StepperStrategyText>
                              {minMaxType === "manual"
                                ? "Manual"
                                : minMaxType === "roi"
                                ? "ROI"
                                : minMaxType === "profitMargin"
                                ? "Profit Margin"
                                : minMaxType === "fixedProfit"
                                ? "Fixed Profit"
                                : "Min/Max Type"}
                            </StepperStrategyText>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: "36px" }}>
                              <Box>
                                <ValueText sx={{ color: "#F90 !important" }}>
                                  {minMaxType === "manual"
                                    ? "65%"
                                    : minMaxType === "roi"
                                    ? "80%"
                                    : minMaxType === "profitMargin"
                                    ? "74%"
                                    : minMaxType === "fixedProfit"
                                    ? "77%"
                                    : "--"}
                                </ValueText>
                                <StepperSubstrategyText>Min</StepperSubstrategyText>
                              </Box>
                              <Box>
                                <ValueText sx={{ color: "#009C34 !important" }}>
                                  {minMaxType === "manual"
                                    ? "83%"
                                    : minMaxType === "roi"
                                    ? "99%"
                                    : minMaxType === "profitMargin"
                                    ? "80%"
                                    : minMaxType === "fixedProfit"
                                    ? "92%"
                                    : "--"}
                                </ValueText>
                                <StepperSubstrategyText>Max</StepperSubstrategyText>
                              </Box>
                            </Box>
                          </StepContent>
                        </Step>

                        <Step expanded>
                          <StyledStepLabel>Assign Strategy</StyledStepLabel>
                          <StepContent>
                            <StepperStrategyText>Type of Products</StepperStrategyText>
                            <ValueText>{products ? products : "--"}</ValueText>
                            <StepperSubstrategyText>Products</StepperSubstrategyText>
                          </StepContent>
                        </Step>
                        <Step expanded />
                      </Stepper>
                    </Box>
                  </AccordionDetails>
                </StyledAccordion>
              </StyledAccordionContainer>
            </Slide>
            {/* end of grid for side steps */}
          </Grid>

          <Grid item xs={7} sx={{ margin: "20px" }}>
            <StyledPaperRight>
              {expanded === "panel1" ? (
                <SelectMarketplace />
              ) : expanded === "panel2" ? (
                <CostUploader />
              ) : (
                <ChooseStrategy
                  handleNext={handleNext}
                  handleBack={handleBack}
                  strategyTypeValue={strategyType}
                  onStrategyTypeChange={handleStrategyTypeChange}
                  substrategyTypeValue={substrategyType}
                  onSubstrategyTypeChange={handleSubstrategyTypeChange}
                  minMaxtypeValue={minMaxType}
                  onMinMaxTypeChange={handleMinMaxTypeChange}
                  onProductsChange={handleProductsChange}
                />
              )}
            </StyledPaperRight>
          </Grid>
        </Grid>
      </MainWrapper>
    </>
  );
};

export default Guide;
