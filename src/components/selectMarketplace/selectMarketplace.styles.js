import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: #F8FAFB;
  gap: 15px;
`;

export const HeaderText = styled(Typography)`
  font-weight: 700!important;
  color: #000!important;
`;

export const DescriptionText = styled(Typography)`
  margin: auto;
  font-size: 16px;
`;