import styled from "styled-components";
import { Box, Chip, Divider, Paper, Typography } from "@mui/material";

export const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  background: #f8fafb;
  gap: 16px;
`;

export const HeaderText = styled(Typography)`
  font-family: Titillium Web !important;
  font-size: 24px !important;
  line-height: 30px !important;
  font-weight: 700 !important;
  color: #000 !important;
`;

export const DescriptionText = styled(Typography)`
  margin: auto;
  font-family: Titillium Web !important;
  font-size: 14px !important;
  line-height: 18px !important;
  color: #4e5969;
`;

export const DividerContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f8fafb;
`;

export const MarketplaceStyledDivider = styled(Divider)`
  width: 88px;
  height: 4px;
  background: #00a3ff;
  border-radius: 8px;
  margin: auto !important;
`;

export const MarketplacesContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  padding-top: 60px;
  background: #f8fafb;
`;

export const Marketplace = styled(Paper)`
  display: flex;
  width: 33.3%;
  height: 230px;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #00a3ff !important;
  border-radius: 16px !important;
  box-shadow: 4px 4px 25px rgba(111, 213, 246, 0.25);
  background: #ffffff !important;
  box-shadow: 4px 4px 25px rgba(111, 213, 246, 0.25) !important;
`;

export const StrategyChip = styled(Chip)`
  position: absolute;
  height: 30px;
  top: -32px;
  padding: 15px 5px 15px 5px !important;
  color: #000;
  border-radius: 16px 16px 0px 0px !important;
  border-color: #dedfdf;
  font-weight: 700 !important;
`;

export const MarketplaceImageBox = styled(Box)`
  width: 180px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const HeaderTextLarge = styled(Typography)`
  color: #000 !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Titillium Web !important;
  font-size: 2rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: normal !important;
`;

export const HeaderTextExtraLarge = styled(Typography)`
  color: #1565d8 !important;
  text-align: center !important;
  font-family: Titillium Web !important;
  font-size: 60px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 72px !important;
`;

export const SpanText = styled(Typography)`
  color: #4e5969 !important;
  font-family: Titillium Web !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: normal !important;
  white-space: pre-line;
`;

export const SpanTextSmall = styled(Typography)`
  color: #979797 !important;
  font-family: Titillium Web !important;
  font-size: 0.75rem !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: normal !important;
`;
