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
  justify-content: space-evenly;
  padding-top: 30px;
  padding-bottom: 20px;
  background: #f8fafb;
`;

export const Marketplace = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #00a3ff !important;
  border-radius: 16px !important;
  width: 200px;
  height: 200px;
  background: #ffffff !important;
`;

export const StrategyChip = styled(Chip)`
  position: absolute;
  top: -20px;
  padding: 20px 5px 20px 5px !important;
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

export const GradientColorButton = styled(ColorButton)`
  height: 40px;
  width: max-content;
  border: none !important;
  background-image: ${(props) =>
    props.disabled
      ? ""
      : "linear-gradient(to right, #25aae1,#4481eb, #04befe, #3f86ed)"} !important;
  background-size: 300% 100% !important;
  box-shadow: ${(props) =>
    props.disabled ? "" : "0 4px 12px 0 rgba(65, 132, 234, 0.75)"} !important;
  border-radius: 10px !important;
  -o-transition: all 0.4s ease-in-out !important;
  -webkit-transition: all 0.4s ease-in-out !important;
  transition: all 0.4s ease-in-out !important;

  &:hover {
    background-position: 100% 0 !important;
    box-shadow: 4px 8px 15px 0 rgba(65, 132, 234, 0.75) !important;
    scale: 1.03;
    -o-transition: all 0.4s ease-in-out !important;
    -webkit-transition: all 0.4s ease-in-out !important;
    transition: all 0.4s ease-in-out !important;
  }
`;
