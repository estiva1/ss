import { Accordion, Box, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  margin-bottom: 5px;
  padding: 0px;
  border: none;
  box-shadow: none !important;

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
  border: 1px solid #e6e6e6;
  border-radius: 16px !important;
  background: #fff;
  box-shadow: none;
`;

export const ImageBox = styled(Box)`
  height: 20px;
  margin-right: 15px;
  filter: drop-shadow(2px 2px 2px rgb(10, 61, 176));
`;
//--------------------------

export const StyledPaperRight = styled(Paper)`
  margin-top: 20px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  border-radius: 16px!important;
  background: #F8FAFB!important;
  box-shadow: 4px 4px 25px rgba(111, 213, 246, 0.25)!important;
`;

export const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: #f8fafb;
  gap: 15px;
`;

export const HeaderText = styled(Typography)`
  font-weight: 700 !important;
  color: #000 !important;
`;

export const DescriptionText = styled(Typography)`
  margin: auto;
  font-size: 16px;
`;
