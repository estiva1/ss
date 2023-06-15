import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import { Button } from "@mui/material";

const ColorButton = materialStyled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#FFFFFF"),
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
}));

export const WhiteButton = styled(ColorButton)`
  height: 40px;
  width: 85%;
  color: #4e5969 !important;
  background: #ffffff !important;
  border: 1px solid #e6e6e6 !important;
  border-radius: 10px !important;
  text-transform: none !important;
  font-size: 13px !important;
  font-weight: 400 !important;
  line-height: 16px !important;
  box-shadow: none !important;
  -o-transition: all 0.4s ease-in-out !important;
  -webkit-transition: all 0.4s ease-in-out !important;
  transition: all 0.4s ease-in-out !important;

  &:hover {
    box-shadow: 0px 4px 3px -1px rgb(0 0 0 / 10%),
      0px 2px 8px 0px rgb(0 0 0 / 12%) !important;
    scale: 1.02;
    -o-transition: all 0.4s ease-in-out !important;
    -webkit-transition: all 0.4s ease-in-out !important;
    transition: all 0.4s ease-in-out !important;
  }
`;
