import { Accordion, Box, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const GuideContainer = styled(Paper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  padding: 0px 40px;
  width: 100%;
  height: 100px;
  background-color: #f1fbfe !important;
  box-shadow: none !important;
  border-radius: 16px !important;
`;

export const GuideLeftSide = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const GuideRightSide = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GuideText = styled(Typography)`
  font-weight: 400 !important;
  font-size: 46px !important;
  line-height: 46px !important;
  color: #000 !important;
`;

export const StyledAccordionContainer = styled(Paper)`
  margin-bottom: 5px;
  padding: 0px;
  border: none;
  box-shadow: none !important;
  border-radius: 16px !important;

  &:first-of-type {
    margin-bottom: 50px;
  }

  & .MuiPaper-root.Mui-expanded {
    margin-bottom: 0px; //fix for floating buttons
    //border: 2px solid #00A3FF;
    box-shadow: inset 0px 0px 0px 2px #00a3ff;
    background: #f1fbfe;
  }
`;

export const StyledAccordion = styled(Accordion)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border: 1px solid #e6e6e6 !important;
  border-radius: 16px !important;
  background: #fff;
  box-shadow: none;
`;

export const ImageBox = styled(Box)`
  height: 20px;
  margin-right: 15px;
  //filter: drop-shadow(2px 2px 2px rgb(10, 61, 176));
`;

export const StepText = styled(Typography)`
  font-weight: 700 !important;
  font-size: 13px !important;
  line-height: 18px !important;
  color: #000 !important;
`;

export const ArrowContainer = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//--------------------------------------------------------------

export const StyledPaperRight = styled(Paper)`
  overflow: hidden;
  border: 1px solid #e6e6e6;
  border-radius: 16px !important;
  background: #f8fafb !important;
  box-shadow: 4px 4px 25px rgba(111, 213, 246, 0.25) !important;
`;

export const StepperStrategyText = styled(Typography)`
  color: #4e5969 !important;
  font-family: Titillium Web !important;
  font-size: 0.75rem !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 0.875rem !important;
  letter-spacing: 0.00375rem !important;
  margin-bottom: 4px !important;
`;

export const StepperSubstrategyText = styled(Typography)`
  color: #979797 !important;
  font-family: Titillium Web !important;
  font-size: 0.625rem !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 0.625rem !important;
`;

export const ValueText = styled(Typography)`
  color: #000 !important;
  font-family: Titillium Web !important;
  font-size: 1.125rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 1.5rem !important;
`;

export const MainWrapper = styled(Box)`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 1500px) {
    width: 1500px;
    max-width: 1500px;
    justify-content: center;
    margin: auto;
  }
`;
