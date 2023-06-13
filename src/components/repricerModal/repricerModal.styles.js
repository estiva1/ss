import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";

export const RepricerModalContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ModalImageBox = styled(Box)`
  width: 64px;
`;

export const ModalText = styled(Typography)`
  font-size: 18px !important;
  line-height: 24px !important;
  font-weight: 700 !important;
  color: #4e5969;
  white-space: pre-wrap !important;
`;

const ColorButton = materialStyled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#0A3DB0"),
  backgroundColor: "#0A3DB0",
  "&:hover": {
    backgroundColor: "#0A3DB0",
  },
}));
export const GradientGreenButton = styled(ColorButton)`
  height: 40px;
  width: max-content;
  border: none !important;
  background-image: ${(props) =>
    props.disabled
      ? ""
      : "linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021)"} !important;
  background-size: 300% 100% !important;
  box-shadow: ${(props) =>
    props.disabled ? "" : "0 4px 15px 0 rgba(83, 176, 57, 0.75)"} !important;
  border-radius: 10px !important;
  -o-transition: all 0.4s ease-in-out !important;
  -webkit-transition: all 0.4s ease-in-out !important;
  transition: all 0.4s ease-in-out !important;

  &:hover {
    background-position: 99% 0 !important;
    box-shadow: 4px 8px 15px 0 rgba(83, 176, 57, 0.75) !important;
    scale: 1.03;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
