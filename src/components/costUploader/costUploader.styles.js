import { Box, Button, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const UploaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0;
  min-height: 100px;
  gap: 15px;
`;

export const StyledPaper = styled(Paper)`
  border: 1px solid #00a3ff;
  border-radius: 16px !important;
  min-width: 100px;
  min-height: 100px;
  max-width: 255px;
  background-color: #f8fafb !important;
  box-shadow: 0;
`;

export const TextfieldContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  grid-row-gap: 10px;
  margin: 20px;
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

export const StyledWhiteButton = styled(Button)`
  height: 40px;
  border: 1px solid #e6e6e6;
  border-radius: 10px !important;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
`;
