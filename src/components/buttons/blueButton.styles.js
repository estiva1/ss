import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import { Button } from "@mui/material";

const ColorButton = materialStyled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#0057D3"),
  backgroundColor: "#0057D3",
  "&:hover": {
    backgroundColor: "#0057D3",
  },
}));

export const BlueButton = styled(ColorButton)`
  height: 40px;
  width: max-content;
  border: none !important;
  background-color: ${(props) =>
    props.active ? "#0057D3" : ""} !important;
  //background: #0057D3 !important;
  border-radius: 4px !important;
  text-transform: none !important;
  font-size: 13px !important;
  font-weight: 700 !important;
  line-height: 16px !important;
  -o-transition: all 0.4s ease-in-out !important;
  -webkit-transition: all 0.4s ease-in-out !important;
  transition: all 0.4s ease-in-out !important;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(65, 132, 234, 0.75) !important;
    scale: 1.02;
    -o-transition: all 0.4s ease-in-out !important;
    -webkit-transition: all 0.4s ease-in-out !important;
    transition: all 0.4s ease-in-out !important;
  }
`;
