import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  DescriptionText,
  DividerBox,
  HeaderText,
  MarketplaceContainer,
  StyledDivider,
  StyledPaper,
  TextContainer,
} from "./addCost.styles";

import amazonLogo from "../../assets/amazon-logo.png";
import walmartLogo from "../../assets/walmart-logo.png";
import shopifyLogo from "../../assets/shopify-logo.png";

const ColorButton = styled(StyledBlueButton)(({ theme }) => ({
  color: theme.palette.getContrastText("#0A3DB0"),
  backgroundColor: "#0A3DB0",
  "&:hover": {
    backgroundColor: "#0A3DB0",
  },
}));

const SelectMarketplace = () => {
  return (
    <Box>
      <TextContainer>
        <HeaderText align="center" variant="h5" component="div">
          Select Your Market Place
        </HeaderText>
        <DescriptionText component="div" align="center">
          After selecting you will be redirected to your marketplace setup page
          to connect your account.
        </DescriptionText>
      </TextContainer>
      <DividerBox>
        <StyledDivider />
      </DividerBox>
      <MarketplaceContainer>
        <StyledPaper>
          <ImageBox component="img" src={amazonLogo} />
          <ColorButton variant="contained">Add Account</ColorButton>
        </StyledPaper>
        <StyledPaper>
          <ImageBox component="img" src={walmartLogo} />
          <ColorButton variant="contained">Add Account</ColorButton>
        </StyledPaper>
        <StyledPaper>
          <ImageBox component="img" src={shopifyLogo} />
          <ColorButton variant="contained">Add Account</ColorButton>
        </StyledPaper>
      </MarketplaceContainer>
    </Box>
  );
};

export default SelectMarketplace;
