import styled from "styled-components";

import { Box, Button, Divider, Paper } from "@mui/material";
import { Typography } from "antd";

export const TextContainer = styled(Box)`
  display: "flex";
  flex-direction: "column";
  justify-content: "space-between";
  padding: "20px";
  background: "#F8FAFB";
  gap: "15px";
`;

export const HeaderText = styled(Typography)`
  font-weight: "700";
  color: "#000";
`;

export const DescriptionText = styled(Typography)`
  margin: "auto";
  font-size: "16px";
`;

export const DividerBox = styled(Box)`
  display: "flex";
  flex-direction: row;
  justify-content: "space-between";
  padding: "20px";
  background: "#F8FAFB";
  gap: "15px";
`;

export const StyledDivider = styled(Divider)`
  width: 88px;
  height: 4px;
  background: #00a3ff;
  border-radius: 8px;
  margin: auto;
`;

export const MarketplaceContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background: #f8fafb;
  gap: 15px;
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #00a3ff;
  border-radius: 16px;
  width: 180px;
  height: 180px;
  background: #ffffff;
`;

export const ImageBox = styled(Box)`
  width: 130px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const StyledBlueButton = styled(Button)`
  height: 40px;
  width: 150px;
  border: 1px solid #0a3db0;
  border-radius: 10px;
`;
