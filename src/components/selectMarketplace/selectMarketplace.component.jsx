import { Box } from "@mui/material";

import amazonLogo from "../../assets/amazon-logo.png";
import walmartLogo from "../../assets/walmart-logo.png";
import shopifyLogo from "../../assets/shopify-logo.png";
import {
  AddMarketplaceAccountButton,
  DescriptionText,
  DividerContainer,
  HeaderText,
  Marketplace,
  MarketplaceImageBox,
  MarketplaceStyledDivider,
  MarketplacesContainer,
  StrategyChip,
  TextContainer,
} from "./selectMarketplace.styles";

const SelectMarketplace = () => {
  return (
    <Box>
      <TextContainer>
        <HeaderText gutterBottom align="center" variant="h5" component="div">
          Select Your Market Place
        </HeaderText>
        <DescriptionText component="div" align="center">
          After selecting you will be redirected to your marketplace setup page
          to connect your account.
        </DescriptionText>
      </TextContainer>

      <DividerContainer>
        <MarketplaceStyledDivider />
      </DividerContainer>

      <MarketplacesContainer>
        <Marketplace>
          <StrategyChip label="Repricer only" color="primary" />
          <MarketplaceImageBox component="img" src={amazonLogo} />
          <AddMarketplaceAccountButton variant="contained">
            Add Account
          </AddMarketplaceAccountButton>
        </Marketplace>
        <Marketplace>
          <MarketplaceImageBox component="img" src={walmartLogo} />
          <AddMarketplaceAccountButton variant="contained">
            Add Account
          </AddMarketplaceAccountButton>
        </Marketplace>
        <Marketplace>
          <MarketplaceImageBox component="img" src={shopifyLogo} />
          <AddMarketplaceAccountButton variant="contained">
            Add Account
          </AddMarketplaceAccountButton>
        </Marketplace>
      </MarketplacesContainer>
    </Box>
  );
};

export default SelectMarketplace;
