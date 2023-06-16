import React from "react";
import { useState } from "react";
import { cloneElement } from "react";

import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import Check from "@mui/icons-material/Check";
import StepLabel from "@mui/material/StepLabel";

import CircleIcon from "@mui/icons-material/Circle";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import PanoramaFishEyeOutlinedIcon from "@mui/icons-material/PanoramaFishEyeOutlined";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import dragndrop from "../../assets/dragndrop.png";
import roi from "../../assets/ai-repricer/roi.png";
import aiStrategyLogo from "../../assets/ai-repricer/ai-strategy-logo.png";
import customStrategyLogo from "../../assets/ai-repricer/custom-strategy-logo.png";
import manual from "../../assets/ai-repricer/manual.png";
import profitMargin from "../../assets/ai-repricer/profit-margin.png";
import fixedProfit from "../../assets/ai-repricer/fixed-profit.png";
import madMax from "../../assets/ai-repricer/madmax.png";
import slowAndSteady from "../../assets/ai-repricer/slownsteady.png";
import lightBulb from "../../assets/ai-repricer/light-bulb.png";
import fileUploaded from "../../assets/ai-repricer/file-uploaded.png";

import {
  AboutManualPricingBottom,
  AboutManualPricingBottomText,
  AboutManualPricingContainer,
  AboutManualPricingTop,
  AboutManualPricingUploadBox,
  AdjustMinMaxContainer,
  AiProfile,
  AiProfileImageBox,
  AiProfileSelect,
  AiProfilesContainer,
  AiProfilesSelectContainer,
  AiStrategyImageAndText,
  AiStrategyImageBox,
  AssignItem,
  AssignItemContent,
  AssignItemContentLeft,
  AssignItemContentRight,
  AssignItemContentRightExtended,
  AssignItemName,
  AssignItemQuantityText,
  AssignItemSpanText,
  AssignStrategyToProductsContainer,
  BoxText,
  DescriptionText,
  HeaderText,
  MinMaxTypeSelect,
  NavigationButtonsContainer,
  SpanText,
  StrategyChip,
  StrategyImageBox,
  StrategyType,
  StrategyTypesContainer,
  StyledListItemAvatar,
  StyledStack,
  TextContainer,
} from "./chooseStrategy.styles";
import { BlueButton } from "../buttons/blueButton.styles";
import { BackButton } from "../buttons/backButton.styles";

import RepricerModal from "../repricerModal/repricerModal.component";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

//slider styles
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#00A3FF",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#00A3FF",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#EAEAF0",
    borderTopWidth: 5,
    borderRadius: 6,
  },
}));

//slider icon
const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#EAEAF0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#00A3FF",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#00A3FF",
    zIndex: 1,
    fontSize: 0,
  },
  "& .QontoStepIcon-circle": {
    width: 0,
    height: 0,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const chooseStrategySteps = ["", "", "", ""];

//-------------------------------

function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

const ChooseStrategy = () => {
  const [step, setStep] = useState(1);
  const [strategyStep, setStrategyStep] = useState(null);
  const handleStrategyStepChange = (strategy, step) => (event) => {
    setStrategyStep(strategy);
    setStep(step);
  };

  const [strategy, setStrategy] = useState("");
  const handleChangeStrategy = (event) => {
    setStrategy(event.target.value);
  };

  //---------------------------------------------------------------------
  const [aiProfileSelectButton, setAiProfileSelectButton] = useState(null);
  const aiProfileHandleClick = (aiProfileButtonId) => {
    setAiProfileSelectButton(aiProfileButtonId);
  };

  const [minMaxPriceSelectButton, setMinMaxPriceSelectButton] = useState(null);
  const minMaxPriceHandleClick = (minMaxPriceSelectButtonId) => {
    setMinMaxPriceSelectButton(minMaxPriceSelectButtonId);
  };

  //check if file uploaded
  const [isManualFileUploaded, setIsManualFileUploaded] = useState(false);
  const minMaxPriceUploadHandleClick = () => {
    setIsManualFileUploaded(!isManualFileUploaded);
  };

  //---------------------------------------------------------------------

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      {strategyStep === null && (
        <>
          <TextContainer>
            <HeaderText align="center" variant="h5" component="div">
              Choose one
            </HeaderText>
            <DescriptionText gutterBottom component="div" align="center">
              Strategies are your unique repricing rules that determine exactly
              how your listings will compete against other sellers on the
              marketplace. Please choose the strategy you would like to create.
            </DescriptionText>
          </TextContainer>

          <StyledStack spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={step}
              connector={<QontoConnector />}
            >
              {chooseStrategySteps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </StyledStack>

          <StrategyTypesContainer>
            <StrategyType>
              <StrategyChip
                label="FAST ROUTE"
                icon={<BoltOutlinedIcon sx={{ fill: "black" }} />}
                style={{
                  background: "#7CCFFD",
                  padding: "0px 20px",
                }}
              />
              <StrategyImageBox component="img" src={aiStrategyLogo} />
              <BoxText gutterBottom align="center" component="div">
                Ai Powered Strategy
              </BoxText>
              <List dense={true}>
                {generate(
                  <ListItem>
                    <StyledListItemAvatar>
                      <CircleIcon sx={{ width: "8px", color: "#4E5969" }} />
                    </StyledListItemAvatar>
                    <ListItemText
                      sx={{ color: "#4E5969" }}
                      primary="Lorem ipsum dolor sit amet, conse"
                    />
                  </ListItem>
                )}
              </List>
              <BlueButton
                variant="contained"
                onClick={handleStrategyStepChange("ai", 1)}
                sx={{ marginBottom: "20px" }}
              >
                Choose Strategy
              </BlueButton>
            </StrategyType>

            <StrategyType>
              <StrategyChip
                label="PERSONALIZED"
                icon={<TuneOutlinedIcon sx={{ fill: "black" }} />}
                style={{
                  background: "#DEDFDF",
                  padding: "0px 20px",
                }}
              />
              <StrategyImageBox component="img" src={customStrategyLogo} />
              <BoxText gutterBottom align="center" component="div">
                Custom Rules Strategy
              </BoxText>
              <List dense={true}>
                {generate(
                  <ListItem>
                    <StyledListItemAvatar>
                      <CircleIcon sx={{ width: "8px", color: "#4E5969" }} />
                    </StyledListItemAvatar>
                    <ListItemText
                      sx={{ color: "#4E5969" }}
                      primary="Lorem ipsum dolor sit amet, conse"
                    />
                  </ListItem>
                )}
              </List>
              <BlueButton
                variant="contained"
                // SHOULD BE CHANGED TO "custom"
                onClick={handleStrategyStepChange("ai", 1)}
                sx={{ marginBottom: "20px" }}
              >
                Choose Strategy
              </BlueButton>
            </StrategyType>
          </StrategyTypesContainer>
        </>
      )}
      {strategyStep === "ai" && (
        <>
          <TextContainer>
            <HeaderText align="center" variant="h5" component="div">
              Choose one
            </HeaderText>
            <DescriptionText gutterBottom component="div" align="center">
              Strategies are your unique repricing rules that determine exactly
              how your listings will compete against other sellers on the
              marketplace. Please choose the strategy you would like to create.
            </DescriptionText>
          </TextContainer>

          <StyledStack spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={step}
              connector={<QontoConnector />}
            >
              {chooseStrategySteps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </StyledStack>

          <AiProfilesContainer>
            <AiProfile>
              <StrategyChip
                label="FAST ROUTE"
                icon={<BoltOutlinedIcon sx={{ fill: "black" }} />}
                style={{
                  background: "#7CCFFD",
                  padding: "0px 20px",
                  left: "11.5%",
                }}
              />
              <AiStrategyImageAndText>
                <AiStrategyImageBox component="img" src={aiStrategyLogo} />
                <BoxText gutterBottom align="center" component="div">
                  Ai Powered Strategy
                </BoxText>
              </AiStrategyImageAndText>

              <Divider sx={{ margin: "10px", width: "70%" }} variant="middle" />

              <TextContainer sx={{ background: "#fff" }}>
                <HeaderText align="center" variant="h5" component="div">
                  Choose Ai Profile
                </HeaderText>
                <DescriptionText gutterBottom component="div" align="center">
                  There are Algorithmic base Strategies are your unique
                  repricing rules that determine exactly how your listings will
                  compete against other sellers on the marketplace. Please
                  choose any one strategy you would like to create.
                </DescriptionText>
              </TextContainer>

              <AiProfilesSelectContainer>
                <AiProfileSelect
                  active={aiProfileSelectButton === 1}
                  onClick={() => aiProfileHandleClick(1)}
                >
                  <AiProfileImageBox component="img" src={madMax} />
                  <BoxText align="center" variant="h5" component="div">
                    MadMax
                  </BoxText>
                </AiProfileSelect>

                <AiProfileSelect
                  active={aiProfileSelectButton === 2}
                  onClick={() => aiProfileHandleClick(2)}
                >
                  <AiProfileImageBox component="img" src={slowAndSteady} />
                  <BoxText align="center" variant="h5" component="div">
                    Slow and Steady
                  </BoxText>
                </AiProfileSelect>
              </AiProfilesSelectContainer>
            </AiProfile>

            <NavigationButtonsContainer>
              <BackButton
                variant="contained"
                startIcon={<KeyboardBackspaceOutlinedIcon />}
                onClick={
                  //setActiveButton(null);
                  handleStrategyStepChange(null, 1)
                }
              >
                Back
              </BackButton>
              <BlueButton
                variant="contained"
                endIcon={<EastOutlinedIcon />}
                disabled={!aiProfileSelectButton}
                onClick={handleStrategyStepChange("madMax", 2)}
              >
                Next
              </BlueButton>
            </NavigationButtonsContainer>
          </AiProfilesContainer>
        </>
      )}

      {strategyStep === "madMax" && (
        <>
          <TextContainer>
            <HeaderText align="center" variant="h5" component="div">
              Adjust Min/Max Price
            </HeaderText>
            <DescriptionText gutterBottom component="div" align="center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </DescriptionText>
          </TextContainer>

          <StyledStack spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={step}
              connector={<QontoConnector />}
            >
              {chooseStrategySteps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </StyledStack>

          <AdjustMinMaxContainer>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item>
                  <MinMaxTypeSelect
                    active={minMaxPriceSelectButton === 1}
                    onClick={() => minMaxPriceHandleClick(1)}
                  >
                    <DescriptionText component="div" align="center">
                      Manual
                    </DescriptionText>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          height: 24,
                          marginRight: "8px",
                        }}
                        src={manual}
                      />
                      <HeaderText
                        gutterBottom
                        align="center"
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Manual
                      </HeaderText>
                    </Box>
                    <SpanText component="div" align="center">
                      Manual min/max for each listing
                    </SpanText>
                  </MinMaxTypeSelect>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <MinMaxTypeSelect
                    active={minMaxPriceSelectButton === 2}
                    onClick={() => minMaxPriceHandleClick(2)}
                  >
                    <DescriptionText component="div" align="center">
                      Automatic
                    </DescriptionText>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          height: 24,
                          marginRight: "8px",
                        }}
                        src={roi}
                      />
                      <HeaderText
                        gutterBottom
                        align="center"
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        ROI
                      </HeaderText>
                    </Box>
                    <SpanText component="div" align="center">
                      Calculation based on return on investment
                    </SpanText>
                  </MinMaxTypeSelect>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <MinMaxTypeSelect
                    active={minMaxPriceSelectButton === 3}
                    onClick={() => minMaxPriceHandleClick(3)}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <DescriptionText component="div" align="center">
                        Automatic
                      </DescriptionText>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: 24,
                            marginRight: "8px",
                          }}
                          src={profitMargin}
                        />
                        <HeaderText
                          gutterBottom
                          align="center"
                          variant="h5"
                          component="div"
                          sx={{
                            fontSize: "18px",
                          }}
                        >
                          Profit Margin
                        </HeaderText>
                      </Box>
                      <SpanText component="div" align="center">
                        Calculated based on profit margin
                      </SpanText>
                    </Box>
                  </MinMaxTypeSelect>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <MinMaxTypeSelect
                    active={minMaxPriceSelectButton === 4}
                    onClick={() => minMaxPriceHandleClick(4)}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <DescriptionText component="div" align="center">
                        Automatic
                      </DescriptionText>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: 24,
                            marginRight: "8px",
                          }}
                          src={fixedProfit}
                        />
                        <HeaderText
                          gutterBottom
                          align="center"
                          variant="h5"
                          component="div"
                          sx={{
                            fontSize: "18px",
                          }}
                        >
                          Fixed Profit
                        </HeaderText>
                      </Box>
                      <SpanText component="div" align="center">
                        Calculated based on fixed amount of profit
                      </SpanText>
                    </Box>
                  </MinMaxTypeSelect>
                </Item>
              </Grid>
            </Grid>

            {minMaxPriceSelectButton === 1 && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Item>
                    <AboutManualPricingContainer>
                      <AboutManualPricingTop>
                        <Box
                          component="img"
                          sx={{
                            height: 24,
                            marginRight: "8px",
                          }}
                          src={lightBulb}
                        />
                        <DescriptionText
                          component="div"
                          align="center"
                          sx={{ fontWeight: 600 }}
                        >
                          About Manual Pricing Method
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                        <AboutManualPricingBottomText
                          component="div"
                          align="center"
                        >
                          You'll have to manually specify the minimum and
                          maximum prices for each listing under the Catalogs
                          page.
                        </AboutManualPricingBottomText>
                      </AboutManualPricingBottom>
                    </AboutManualPricingContainer>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <AboutManualPricingContainer>
                      <AboutManualPricingTop>
                        <DescriptionText
                          component="div"
                          align="center"
                          sx={{ fontWeight: 700 }}
                        >
                          Upload File for Manual Price
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom>
                        <AboutManualPricingUploadBox sx={{ gap: "20px" }}>
                          {isManualFileUploaded ? (
                            <>
                              <Box
                                component="img"
                                sx={{
                                  height: 36,
                                  width: 36,
                                }}
                                src={fileUploaded}
                              />
                              <DescriptionText component="div" align="center">
                                File name goes here...
                              </DescriptionText>
                              <HeaderText
                                align="center"
                                variant="h5"
                                component="div"
                                sx={{ color: "#009C34!important" }}
                              >
                                File Successfully Uploaded!
                              </HeaderText>
                            </>
                          ) : (
                            <>
                              <Box
                                component="img"
                                sx={{
                                  height: 36,
                                  width: 36,
                                }}
                                src={dragndrop}
                              />
                              <DescriptionText component="div" align="center">
                                Drag file here to upload, or click to browse,
                                Only CSV files are supported
                              </DescriptionText>
                              <Box sx={{ width: "100%" }}>
                                <Divider
                                  sx={{
                                    maxWidth: "70%",
                                    margin: "auto",
                                    color: "#4E5969",
                                  }}
                                >
                                  OR
                                </Divider>
                              </Box>
                              <Button
                                variant="outlined"
                                onClick={() => minMaxPriceUploadHandleClick()}
                              >
                                Upload File
                              </Button>
                              <DescriptionText
                                component="div"
                                align="center"
                                sx={{ color: "#00A3FF!important" }}
                              >
                                You can skip uploading file here and set Manual
                                Price Later
                              </DescriptionText>
                            </>
                          )}
                        </AboutManualPricingUploadBox>
                      </AboutManualPricingBottom>
                    </AboutManualPricingContainer>
                  </Item>
                </Grid>
              </Grid>
            )}
            {minMaxPriceSelectButton === 2 && <Box>2</Box>}
            {minMaxPriceSelectButton === 3 && <Box>3</Box>}
            {minMaxPriceSelectButton === 4 && <Box>4</Box>}

            <NavigationButtonsContainer>
              <BackButton
                variant="contained"
                startIcon={<KeyboardBackspaceOutlinedIcon />}
                onClick={
                  //setActiveButton(null);
                  handleStrategyStepChange("ai", 1)
                }
              >
                Back
              </BackButton>
              <BlueButton
                disabled={!minMaxPriceSelectButton}
                variant="contained"
                endIcon={<EastOutlinedIcon />}
                onClick={handleStrategyStepChange(
                  "assignStrategyToProducts",
                  3
                )}
              >
                Assign and proceed
              </BlueButton>
            </NavigationButtonsContainer>
          </AdjustMinMaxContainer>
        </>
      )}
      {strategyStep === "assignStrategyToProducts" && (
        <>
          <TextContainer>
            <HeaderText align="center" variant="h5" component="div">
              Assign Strategy to Products
            </HeaderText>
            <DescriptionText gutterBottom component="div" align="center">
              By checking below option, you are going to assign this strategy to
              all these products which have not been assigned any strategy yet
              and replace the default strategy of the group you select below
              (FBA, FBM or Both)
            </DescriptionText>
          </TextContainer>

          <StyledStack spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={step}
              connector={<QontoConnector />}
            >
              {chooseStrategySteps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </StyledStack>

          <AssignStrategyToProductsContainer>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={strategy}
                onChange={handleChangeStrategy}
              >
                <AssignItem>
                  <AssignItemContentLeft>
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": {
                          fontWeight: "700",
                        },
                      }}
                      value="fba"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 44,
                              color: "#1565D8",
                            },
                          }}
                        />
                      }
                      label="FBA"
                    />
                    <AssignItemSpanText component="div" align="center">
                      Fulfillment by Amazon
                    </AssignItemSpanText>
                  </AssignItemContentLeft>
                  <AssignItemContentRight>
                    <AssignItemQuantityText
                      variant="h5"
                      sx={{
                        color: "#1565D8",
                      }}
                    >
                      999
                    </AssignItemQuantityText>
                    <AssignItemSpanText>Products</AssignItemSpanText>
                  </AssignItemContentRight>
                </AssignItem>

                <AssignItem>
                  <AssignItemContentLeft>
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": {
                          fontWeight: "700",
                        },
                      }}
                      value="fbm"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 44,
                              color: "#1565D8",
                            },
                          }}
                        />
                      }
                      label="FBM"
                    />
                    <AssignItemSpanText component="div" align="center">
                      Fulfillment by Merchant
                    </AssignItemSpanText>
                  </AssignItemContentLeft>
                  <AssignItemContentRight>
                    <AssignItemQuantityText
                      variant="h5"
                      sx={{
                        color: "#1565D8",
                      }}
                    >
                      999
                    </AssignItemQuantityText>
                    <AssignItemSpanText>Products</AssignItemSpanText>
                  </AssignItemContentRight>
                </AssignItem>

                <AssignItem>
                  <AssignItemContentLeft>
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": {
                          fontWeight: "700",
                        },
                      }}
                      value="all"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 44,
                              color: "#1565D8",
                            },
                          }}
                        />
                      }
                      label="All"
                    />
                    <AssignItemSpanText component="div" align="center">
                      Both FBA and FBM
                    </AssignItemSpanText>
                  </AssignItemContentLeft>
                  <AssignItemContentRight>
                    <AssignItemQuantityText
                      variant="h5"
                      sx={{
                        color: "#1565D8",
                      }}
                    >
                      999
                    </AssignItemQuantityText>
                    <AssignItemSpanText>Products</AssignItemSpanText>
                  </AssignItemContentRight>
                </AssignItem>

                <AssignItem>
                  <AssignItemContentLeft>
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": {
                          fontWeight: "700",
                        },
                      }}
                      value="select-products"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 44,
                              color: "#1565D8",
                            },
                          }}
                        />
                      }
                      label="Select Products"
                    />
                    <AssignItemSpanText component="div" align="center">
                      Fulfillment by Amazon
                    </AssignItemSpanText>
                  </AssignItemContentLeft>
                  <AssignItemContentRightExtended>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <AssignItemQuantityText
                        variant="h5"
                        sx={{
                          color: "#009C34",
                        }}
                      >
                        --
                      </AssignItemQuantityText>
                      <AssignItemSpanText>Selected Products</AssignItemSpanText>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <AssignItemQuantityText
                        variant="h5"
                        sx={{
                          color: "#1565D8",
                        }}
                      >
                        999
                      </AssignItemQuantityText>
                      <AssignItemSpanText>Products</AssignItemSpanText>
                    </Box>
                  </AssignItemContentRightExtended>
                </AssignItem>

                <AssignItem>
                  <AssignItemContentLeft>
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": {
                          fontWeight: "700",
                        },
                      }}
                      value="apply-later"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 44,
                              color: "#1565D8",
                            },
                          }}
                        />
                      }
                      label="Apply Later"
                    />
                    <AssignItemSpanText component="div" align="center">
                      Fulfillment by Amazon
                    </AssignItemSpanText>
                  </AssignItemContentLeft>
                  <AssignItemContentRight sx={{ visibility: "hidden" }}>
                    <AssignItemQuantityText
                      variant="h5"
                      sx={{
                        color: "#1565D8",
                      }}
                    >
                      999
                    </AssignItemQuantityText>
                    <AssignItemSpanText>Products</AssignItemSpanText>
                  </AssignItemContentRight>
                </AssignItem>
              </RadioGroup>
            </FormControl>
          </AssignStrategyToProductsContainer>
          <NavigationButtonsContainer sx={{ margin: "20px" }}>
            <BackButton
              variant="contained"
              startIcon={<KeyboardBackspaceOutlinedIcon />}
              onClick={
                //setActiveButton(null);
                handleStrategyStepChange("madMax", 2)
              }
            >
              Back
            </BackButton>
            <BlueButton
              disabled={!minMaxPriceSelectButton}
              variant="contained"
              endIcon={<EastOutlinedIcon />}
              onClick={() => handleOpenModal()}
            >
              Finish & Create Strategy
            </BlueButton>
          </NavigationButtonsContainer>
          <RepricerModal open={openModal} close={handleCloseModal} />
        </>
      )}
    </>
  );
};

export default ChooseStrategy;
