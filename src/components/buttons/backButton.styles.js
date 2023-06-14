import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import { Button } from "@mui/material";

const TransparentButton = materialStyled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#F8FAFB"),
  backgroundColor: "#F8FAFB",
  "&:hover": {
    backgroundColor: "#F8FAFB",
  },
}));

export const BackButton = styled(TransparentButton)`
  height: 40px;
  width: max-content;
  border-radius: 4px !important;
  text-transform: none !important;
  font-size: 13px !important;
  font-weight: 700 !important;
  line-height: 16px !important;

  &:hover {
    scale: 1.02;
  }
`;
