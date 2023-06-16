import { Box, Grow } from "@mui/material";

import {
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
import { BlueButton } from "../buttons/blueButton.styles";

import amazonLogo from "../../assets/amazon-logo.png";
import walmartLogo from "../../assets/walmart-logo.png";
import shopifyLogo from "../../assets/shopify-logo.png";
import { WhiteButton } from "../buttons/whiteButton.styles";

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

      <DividerContainer>
        <MarketplaceStyledDivider />
      </DividerContainer>

      <MarketplacesContainer>
        <Grow in={true}>
          <Marketplace>
            <StrategyChip
              label="Repricer only"
              style={{ background: "#7CCFFD" }}
            />
            <MarketplaceImageBox component="img" src={amazonLogo} />
            <BlueButton sx={{ width: "85%" }} variant="contained">
              Add Account
            </BlueButton>
          </Marketplace>
        </Grow>
        <Grow in={true} timeout={1000}>
          <Marketplace>
            <StrategyChip label="WFS & DS 3PL only" />
            <MarketplaceImageBox component="img" src={walmartLogo} />
            <BlueButton sx={{ width: "85%" }} variant="contained">
              Add Account
            </BlueButton>
          </Marketplace>
        </Grow>
        <Grow in={true} timeout={2000}>
          <Marketplace>
            <StrategyChip label="DTC 3PL orders only" />
            <MarketplaceImageBox component="img" src={shopifyLogo} />
            <BlueButton sx={{ width: "85%" }} variant="contained">
              Add Account
            </BlueButton>
          </Marketplace>
        </Grow>
      </MarketplacesContainer>
    </Box>
  );
};

export default SelectMarketplace;
