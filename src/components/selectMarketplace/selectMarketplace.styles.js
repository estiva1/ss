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
  font-size: 24px !important;
  line-height: 30px !important;
  font-weight: 700 !important;
  color: #000 !important;
`;

export const DescriptionText = styled(Typography)`
  margin: auto;
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
  width: 200px;
  height: 200px;
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
