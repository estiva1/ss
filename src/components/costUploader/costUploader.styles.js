import { Box, Button, Paper } from "@mui/material";
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
  border: 1px solid #00A3FF;
  border-radius: 16px !important;
  min-width: 100px;
  min-height: 100px;
  max-width: 255px;
  background-color: #F8FAFB!important;
  box-shadow: 0;
`;

export const TextfieldContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  grid-row-gap: 10px;
  margin: 20px;
`;

export const StyledWhiteButton = styled(Button)`
  height: 40px;
  border: 1px solid #E6E6E6;
  border-radius: 10px!important;
  margin-top: 20px!important;
  margin-bottom: 20px!important;
`;
