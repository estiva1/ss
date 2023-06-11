import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import { Box, Button, Chip, Divider, Paper, Typography } from "@mui/material";

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
  color: #4e5969;
`;

export const DividerContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background: #f8fafb;
  gap: 15px;
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
  justify-content: space-between;
  padding: 20px;
  background: #f8fafb;
  gap: 15px;
`;

export const Marketplace = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #00a3ff !important;
  border-radius: 16px !important;
  width: 180px;
  height: 180px;
  background: #ffffff !important;
`;

export const StrategyChip = styled(Chip)`
  position: absolute;
  top: -20px;
  padding: 20px 10px 20px 10px !important;
  font-weight: 700 !important;
`;

export const MarketplaceImageBox = styled(Box)`
  width: 130px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ColorButton = materialStyled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#0A3DB0"),
  backgroundColor: "#0A3DB0",
  "&:hover": {
    backgroundColor: "#0A3DB0",
  },
}));

export const AddMarketplaceAccountButton = styled(ColorButton)`
  height: 40px;
  width: 150px;
  border: 1px solid #0a3db0 !important;
  border-radius: 10px !important;
`;
