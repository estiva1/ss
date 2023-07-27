import { Box, Button, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const CostUploaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 275px;
  //justify-content: space-between;
  padding: 20px 20px 20px 20px;
  gap: 10px;
  overflow: hidden;
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #00a3ff;
  border-radius: 16px !important;
  //min-width: 100px;
  //min-height: 100px;
  width: 60%;
  background-color: #f8fafb !important;
  box-shadow: 0;
  overflow: hidden;
`;

export const TextContainer = styled(Box)`
  background-color: #fff !important;
  padding: 20px;
`;

export const HeaderText = styled(Typography)`
  color: #000 !important;
  font-family: Titillium Web !important;
  font-size: 1.125rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 1.25rem !important;
`;

export const DescriptionText = styled(Typography)`
  font-size: 16px;
  color: #4e5969;
`;

export const StyledWhiteButton = styled(Button)`
  height: 40px;
  border: 1px solid #e6e6e6;
  border-radius: 10px !important;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
`;

export const SubheaderText = styled(Typography)`
  color: #000 !important;
  text-align: center !important;
  font-size: 0.875rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 1.125rem !important;
`;

export const SpanText = styled.p`
  color: #4e5969;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const TableDescriptionText = styled(Typography)`
  color: #000 !important;
  text-align: center !important;
  font-family: Titillium Web !important;
  font-size: 0.875rem !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 1.125rem !important;
`;

export const AboutContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`;

export const AboutContainerTop = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 15px 25px;
  background: #f1fbfe;
`;

export const AboutContainerBottom = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 25px;
  background: #fff;
`;

export const AboutText = styled(Typography)`
  font-size: 12px !important;
  color: #4e5969 !important;
  line-height: 18px !important;
`;

export const CostUploaderButtonsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 20px;
`;

export const StyledTableContainer = styled(Paper)`
  overflow: hidden;
  margin: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 16px !important;
  background: #f8fafb !important;
  box-shadow: 4px 4px 25px rgba(111, 213, 246, 0.25) !important;
`;

export const FileStatusContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const FileStatusLineSuccess = styled(Box)`
  width: 140px;
  height: 8px;
  background: #009c34;
  border-radius: 8px;
`;
