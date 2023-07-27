import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import { Box, Button, Chip, ListItemAvatar, Paper, Stack, Typography } from "@mui/material";

export const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: #f8fafb;
  gap: 15px;
`;

export const HeaderText = styled(Typography)`
  font-family: Titillium Web !important;
  font-weight: 700 !important;
  color: #000 !important;
`;

export const DescriptionText = styled(Typography)`
  margin: auto;
  font-family: Titillium Web !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 18px !important;
  color: #4e5969 !important;
`;
//--------------------------------------------------------------

export const StyledStack = styled(Stack)`
  width: 75%;
  display: flex;
  margin: auto;
  padding: 5px;
`;

//--------------------------------------------------------------

export const StrategyTypesContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px 30px 40px;
  background: #f8fafb;
  gap: 40px;
`;

export const StrategyType = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 40px;
  border: 1px solid #00a3ff;
  border-radius: 16px !important;
  min-height: 250px;
  background: #ffffff;
`;

export const StrategyChip = styled(Chip)`
  position: absolute;
  height: 30px;
  top: -33px;
  padding: 15px 18% !important;
  color: #000;
  border-radius: 16px 16px 0px 0px !important;
  border-color: #dedfdf;
  font-weight: 700 !important;
`;

export const StrategyImageBox = styled(Box)`
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const BoxText = styled(Typography)`
  color: #000 !important;
  font-family: Titillium Web !important;
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 20px !important;
`;

export const StyledListItemAvatar = styled(ListItemAvatar)`
  display: flex;
  align-self: start;
  margin-top: 2px;
  min-width: 20px !important;
`;

const ContrastColorButton = materialStyled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#0A3DB0"),
  backgroundColor: "#0A3DB0",
  "&:hover": {
    backgroundColor: "#0A3DB0",
  },
}));
export const SubmitButton = styled(ContrastColorButton)`
  height: 40px;
  width: max-content;
  border-radius: 10px !important;
`;

//--------------------------------------------------------------

export const AiProfilesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`;

export const AiProfile = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  border: 1px solid #00a3ff;
  border-radius: 16px !important;
  min-height: 250px;
  background: #ffffff;
`;

export const AiStrategyImageAndText = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
`;

export const AiStrategyImageBox = styled(Box)`
  width: 64px;
`;

export const AiProfilesSelectContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 40px 40px 40px;
  width: 100%;
  gap: 40px;
`;

export const AiProfileSelect = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px !important;
  text-transform: none !important;
  border-radius: 16px !important;
  box-shadow: 4px 4px 20px rgba(111, 213, 246, 0.25), inset 0px 0px 0px 1px #00a3ff;
  width: 100%;
  height: 80px;
  background-color: ${(props) => (props.active ? "#F1FBFE" : "#FFF")} !important;
  box-shadow: ${(props) => (props.active ? "inset 0px 0px 0px 2px #00a3ff" : "")} !important;

  &:first-of-type {
    margin-left: 40px !important;
  }
  &:last-of-type {
    margin-right: 40px !important;
  }
`;

export const AiProfileImageBox = styled(Box)`
  height: 24px;
  margin-right: 15px;
`;

export const NavigationButtonsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 15px;
`;

//--------------------------------------------------------------

export const AdjustMinMaxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  margin-bottom: 20px;
  background: #f8fafb;
  gap: 30px;
`;

export const MinMaxTypeSelect = styled(Button)`
  display: flex;
  flex-direction: column;
  text-transform: none !important;
  border-radius: 16px !important;
  box-shadow: 4px 4px 20px rgba(111, 213, 246, 0.25);
  align-items: center;
  justify-content: center;
  border: 1px solid #00a3ff !important;
  width: 100%;
  height: 120px;
  background: #ffffff !important;
  background-color: ${(props) => (props.active ? "#F1FBFE" : "#FFF")} !important;
  box-shadow: ${(props) => (props.active ? "inset 0px 0px 0px 1px #00a3ff" : "")} !important;
`;

export const SpanText = styled(Typography)`
  font-family: Titillium Web !important;
  margin-top: 10px !important;
  font-size: 12px !important;
  color: #4e5969 !important;
  line-height: 18px !important;
`;

export const SpanTextSmall = styled(Typography)`
  font-family: Titillium Web !important;
  font-size: 11px !important;
  color: #4e5969 !important;
  line-height: 12px !important;
`;

export const AboutManualPricingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;

export const AboutManualPricingTop = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 15px 25px;
  background: #f1fbfe;
`;

export const AboutManualPricingBottom = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 25px;
  background: #fff;
`;

export const AboutManualPricingBottomText = styled(Typography)`
  font-family: Titillium Web !important;
  font-size: 12px !important;
  color: #4e5969 !important;
  line-height: 18px !important;
`;

export const AboutManualPricingUploadBox = styled(Box)`
  display: flex;
  flex-direction: column;
  min-width: 450px;
  width: 450px;
  height: 220px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border: 1px dashed #6fd5f6;
  border-radius: 8px;
  grid-row-gap: 10px;
`;

export const ProductForCalculationContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: top;
  justify-content: space-between;
  //gap: 15px;
`;

export const ProductForCalculationImageBox = styled(Box)`
  min-height: 100px;
  height: 100px;
`;

export const ProductForCalculationDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProductForCalculationName = styled(Typography)`
  font-family: Titillium Web !important;
  font-size: 16px !important;
  line-height: 24px !important;
  font-weight: 400 !important;
`;

export const ProductForCalculationParam = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ParamText = styled(Typography)`
  font-family: Titillium Web !important;
  font-size: 14px !important;
  line-height: 18px !important;
`;

export const RoundChartsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
`;

export const RoundChartText = styled(Typography)`
  font-family: Titillium Web !important;
  font-size: 24px !important;
  line-height: 28px !important;
  font-weight: 700 !important;
`;
//--------------------------------------------------------------

export const AssignStrategyToProductsContainer = styled(Box)`
  width: 100%;
  margin-top: 20px;
`;

export const AssignItem = styled(Paper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
  padding-left: 20px;
  border: 1px solid #00a3ff;
  border-radius: 16px !important;
  height: 60px;
  background: #ffffff;
  box-shadow: 4px 4px 25px rgba(111, 213, 246, 0.25) !important;
`;

export const AssignItemContentLeft = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AssignItemSpanText = styled(Typography)`
  font-family: Titillium Web !important;
  font-size: 12px !important;
  color: #4e5969 !important;
  line-height: 18px !important;
`;

export const AssignItemContentRight = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
`;
export const AssignItemContentRightExtended = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  padding-right: 20px;
`;

export const AssignItemQuantityText = styled(Typography)`
  font-family: Titillium Web !important;
  font-size: 24px !important;
  font-weight: 700 !important;
`;

export const BuyBoxStrategyRulesLabel = styled(Typography)`
  font-family: Titillium Web !important;
  font-size: 14px !important;
  line-height: 16px !important;
  font-weight: 500 !important;
  color: #4e5969 !important;
`;

export const StackItems = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const Hint = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  width: 100%;
  padding: 8px;
  gap: 10px;
  border-radius: 4px;
  background-color: #f9f0e2;
  cursor: help;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 3px 4px 6px 1px rgba(0, 0, 255, 0.2);
  }
`;
