import {
  Accordion,
  Box,
  Button,
  Chip,
  ListItemAvatar,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";

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
  border-radius: 16px !important;
  background: #f8fafb !important;
  box-shadow: 4px 4px 25px rgba(111, 213, 246, 0.25) !important;
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
  font-size: 16px !important;
  color: #4e5969 !important;
`;

export const StyledStack = styled(Stack)`
  width: 75%;
  display: flex;
  margin: auto;
  padding: 5px;
`;

export const StrategyTypesContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background: #f8fafb;
  gap: 20px;
`;

export const StrategyType = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #00a3ff;
  border-radius: 16px !important;
  width: 280px;
  min-height: 250px;
  background: #ffffff;
`;

export const StrategyChip = styled(Chip)`
  position: absolute;
  top: -20px;
  padding: 20px !important;
  font-weight: 700 !important;
`;

export const StrategyImageBox = styled(Box)`
  width: 64px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const BoxText = styled(Typography)`
  font-weight: 700 !important;
  font-size: 18px !important;
  color: #000;
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

export const ChooseStrategyButton = styled(ContrastColorButton)`
  height: 40px;
  width: 180px;
  border-radius: 10px !important;
  margin-top: 5px !important;
  margin-bottom: 20px !important;
`;

//-----------------------

export const AiProfilesContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background: #f8fafb;
  gap: 15px;
`;

export const AiProfileButton = styled(Button)`
  padding: 0px;
  text-transform: none !important;
  border-radius: 16px !important;
`;

export const AiType = styled(Paper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #00a3ff;
  border-radius: 16px !important;
  width: 280px;
  height: 80px;
  background: #fff;
`;

export const AiProfileImageBox = styled(Box)`
  height: 24px;
  margin-right: 15px;
`;