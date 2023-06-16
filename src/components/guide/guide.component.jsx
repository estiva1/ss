import { Box, Slide, Zoom } from "@mui/material";
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

import { useRef, useState } from "react";
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
  StepText,
  StyledAccordion,
  StyledAccordionContainer,
  StyledPaperRight,
} from "./guide.styles";

const Guide = () => {
  // accordion
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const containerRef = useRef(null);

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

          <Zoom in={true} style={{ transitionDelay: "500ms" }}>
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
          <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
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

      {/* grid for side steps */}
      <Grid item xs={4} sx={{ margin: "20px" }}>
        <Slide direction="right" in={true}>
          <StyledAccordionContainer>
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
                  Let AI Repricer determine the optimal strategy in real time
                  for any of your listings. No more micro-management of your
                  listings.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
            <RepricerButton />
          </StyledAccordionContainer>
        </Slide>

        <Slide direction="right" in={true} timeout={500}>
          <StyledAccordionContainer>
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
                  Let AI Repricer determine the optimal strategy in real time
                  for any of your listings. No more micro-management of your
                  listings.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </StyledAccordionContainer>
        </Slide>

        <Slide direction="right" in={true} timeout={1000}>
          <StyledAccordionContainer>
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
            <ChooseStrategy />
          )}
        </StyledPaperRight>
      </Grid>
    </Grid>
  );
};

export default Guide;
