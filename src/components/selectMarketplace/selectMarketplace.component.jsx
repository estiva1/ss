import { useState } from "react";
import { Backdrop, Box, Grow, Modal } from "@mui/material";

import {
  DescriptionText,
  DividerContainer,
  HeaderText,
  HeaderTextExtraLarge,
  HeaderTextLarge,
  Marketplace,
  MarketplaceImageBox,
  MarketplaceStyledDivider,
  MarketplacesContainer,
  SpanText,
  SpanTextSmall,
  StrategyChip,
  TextContainer,
} from "./selectMarketplace.styles";
import { BlueButton } from "../buttons/blueButton.styles";
import { WhiteButton } from "../buttons/whiteButton.styles";

import amazonLogo from "../../assets/amazon-logo.png";
import walmartLogo from "../../assets/walmart-logo.png";
import shopifyLogo from "../../assets/shopify-logo.png";
import completedIcon from "../../assets/ai-repricer/completed.png"
import walmartScreenshotOne from "../../assets/walmart-screenshot-1.jpg";
import walmartScreenshotTwo from "../../assets/walmart-screenshot-2.jpg";

const SelectMarketplace = () => {
  const [openModalForWalmart, setOpenModalForWalmart] = useState(false);
  const [walmartSetupStep, setWalmartSetupStep] = useState(1);

  // for modal
  const style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    padding: "20px 50px",
    gap: "40px",
  };

  return (
    <>
      <Box>
        <TextContainer>
          <HeaderText align="center" variant="h5" component="div">
            Select Your Market Place
          </HeaderText>
          <DescriptionText component="div" align="center">
            After selecting you will be redirected to your marketplace setup page to connect your account.
          </DescriptionText>
        </TextContainer>

        <DividerContainer>
          <MarketplaceStyledDivider />
        </DividerContainer>

        <MarketplacesContainer>
          <Grow in={true}>
            <Marketplace>
              <StrategyChip label="Repricer only" style={{ background: "#7CCFFD" }} />
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
              <BlueButton sx={{ width: "85%" }} variant="contained" onClick={() => setOpenModalForWalmart(true)}>
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModalForWalmart}
        onClose={() => setOpenModalForWalmart(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>
          {walmartSetupStep === 1 && (
            <>
              <Box
                sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
              >
                <Box>
                  <HeaderTextLarge sx={{ marginBottom: "20px" }}>Add Marketplace</HeaderTextLarge>
                  <HeaderText sx={{ color: "#1565D8 !important", marginBottom: "16px" }}>
                    Step 1: Navigate to walmart Seller Central
                  </HeaderText>
                  <Box sx={{ marginBottom: "24px" }}>
                    <SpanText sx={{ marginBottom: "16px" }}>Login to Walmart Developer Portal</SpanText>
                    <SpanText
                      sx={{ marginBottom: "16px" }}
                    >{`b) Look for the production keys in Solution Provider,\nFirst add Sale Support then allow permissions.`}</SpanText>
                    <SpanText>c) Generate Production keys.</SpanText>
                  </Box>
                  <BlueButton sx={{ padding: "10px 28px" }}>Go to Walmart Developer Portalcount</BlueButton>
                </Box>
                <Box sx={{ width: "380px", maxWidth: "380px" }}>
                  <Box component="img" src={walmartScreenshotOne} sx={{ width: "380px", maxWidth: "380px" }} />
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
              >
                <Box>
                  <HeaderText sx={{ color: "#1565D8 !important", marginBottom: "16px" }}>
                    Step 2: Copy and Paste the Credentials
                  </HeaderText>
                  <SpanText
                    sx={{ marginBottom: "16px" }}
                  >{`Copy and paste the Client ID and Client Secret from\nthe Walmart developer center to the corresponding fields: `}</SpanText>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <Box>
                      <SpanTextSmall>Client ID:</SpanTextSmall>
                      <Box
                        sx={{
                          width: "max-content",
                          borderRadius: "6px",
                          border: "1px solid #E6E6E6",
                          padding: "10px 20px",
                        }}
                      >
                        <SpanText sx={{ color: "#979797 !important" }}>ABC123DE456F78</SpanText>
                      </Box>
                    </Box>

                    <Box>
                      <SpanTextSmall>Client Secret:</SpanTextSmall>
                      <Box
                        sx={{
                          width: "max-content",
                          borderRadius: "6px",
                          border: "1px solid #E6E6E6",
                          padding: "10px 20px",
                        }}
                      >
                        <SpanText sx={{ color: "#979797 !important" }}>
                          amzn.mws.123e4567-e89b-12d3-a456-426655440000
                        </SpanText>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
                      <WhiteButton
                        sx={{ width: "200px", borderRadius: "4px !important" }}
                        onClick={() => setOpenModalForWalmart(false)}
                      >
                        Skip Now
                      </WhiteButton>
                      <BlueButton sx={{ width: "200px" }} onClick={() => setWalmartSetupStep(2)}>
                        Connect Now
                      </BlueButton>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ width: "380px", maxWidth: "380px" }}>
                  <Box component="img" src={walmartScreenshotTwo} sx={{ width: "380px", maxWidth: "380px" }} />
                </Box>
              </Box>
            </>
          )}

          {walmartSetupStep === 2 && (
            <>
              <Box>
                <HeaderText>Add Marketplace</HeaderText>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "32px",
                }}
              >
                <Box sx={{display: "flex", flexDirection: "column", gap: "24px"}}>
                  <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Box alignSelf="center" component="img" src={completedIcon} sx={{ width: "100px", maxWidth: "100px", mb: "32px" }} />
                    <HeaderTextExtraLarge>Congratulations!</HeaderTextExtraLarge>
                  </Box>
                  <HeaderText>You are succesfully connected with</HeaderText>
                  <Box alignSelf="center" component="img" src={walmartLogo} sx={{ width: "200px", maxWidth: "200px" }} />
                </Box>

                <Box>
                  <SpanTextSmall align="center" sx={{ marginBottom: "40px" }}>
                    Your store has been successfully setup, ready to be used.
                  </SpanTextSmall>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
                    <WhiteButton
                      sx={{ width: "150px", borderRadius: "4px !important" }}
                      onClick={() => setOpenModalForWalmart(false)}
                    >
                      Select Price Plan
                    </WhiteButton>
                    <BlueButton sx={{ width: "150px" }} onClick={() => setWalmartSetupStep(2)}>
                      Add Another Store
                    </BlueButton>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default SelectMarketplace;
