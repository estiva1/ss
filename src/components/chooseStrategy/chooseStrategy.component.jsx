import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";

import PropTypes from "prop-types";
import Step from "@mui/material/Step";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Check from "@mui/icons-material/Check";
import StepLabel from "@mui/material/StepLabel";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import cube from "../../assets/ai-repricer/cube.png";
import wind from "../../assets/ai-repricer/wind.png";
import power from "../../assets/ai-repricer/power.png";

import aiStrategyLogo from "../../assets/ai-repricer/ai-strategy-logo.png";
import customStrategyLogo from "../../assets/ai-repricer/custom-strategy-logo.png";

import manual from "../../assets/ai-repricer/manual.png";
import roi from "../../assets/ai-repricer/roi.png";
import profitMargin from "../../assets/ai-repricer/profit-margin.png";
import fixedProfit from "../../assets/ai-repricer/fixed-profit.png";
import madMax from "../../assets/ai-repricer/madmax.png";
import slowAndSteady from "../../assets/ai-repricer/slownsteady.png";
import lightBulb from "../../assets/ai-repricer/light-bulb.png";
import fileUploaded from "../../assets/ai-repricer/file-uploaded.png";
import dragndrop from "../../assets/dragndrop.png";

import { useState } from "react";
import CostUploader from "../costUploader/costUploader.component";
import SelectMarketplace from "../selectMarketplace/selectMarketplace.component";
import {
  Button,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
} from "@mui/material";

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
  AiProfilesButtonsContainer,
  AiProfilesContainer,
  AiProfilesSelectContainer,
  AiStrategyImageAndText,
  AiStrategyImageBox,
  AssignItem,
  AssignItemContent,
  AssignStrategyToProductsContainer,
  BackButton,
  BoxText,
  DescriptionText,
  HeaderText,
  ImageBox,
  MinMaxTypeSelect,
  NavigationButtonsContainer,
  SpanText,
  StrategyChip,
  StrategyImageBox,
  StrategyType,
  StrategyTypesContainer,
  StyledAccordion,
  StyledListItemAvatar,
  StyledPaper,
  StyledPaperRight,
  StyledStack,
  SubmitButton,
  TextContainer,
} from "./chooseStrategy.styles";
import { cloneElement } from "react";
import RepricerButton from "../repricerButton/repricerButton.component";
import { GradientColorButton } from "../selectMarketplace/selectMarketplace.styles";
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
    borderTopWidth: 4,
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
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 14,
    height: 14,
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

const chooseStrategySteps = ["", "", ""];

//-------------------------------

function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

const ChooseStrategy = () => {
  const [step, setStep] = useState(0);
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
                color="success"
                icon={<BoltOutlinedIcon />}
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
              <GradientColorButton
                variant="contained"
                onClick={handleStrategyStepChange("ai", 0)}
                sx={{ marginBottom: "20px" }}
              >
                Choose Strategy
              </GradientColorButton>
            </StrategyType>

            <StrategyType>
              <StrategyChip
                label="PERSONALIZED"
                color="primary"
                icon={<TuneOutlinedIcon />}
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
              <GradientColorButton
                variant="contained"
                // SHOULD BE CHANGED TO "custom"
                onClick={handleStrategyStepChange("ai", 0)}
                sx={{ marginBottom: "20px" }}
              >
                Choose Strategy
              </GradientColorButton>
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
                color="success"
                icon={<BoltOutlinedIcon />}
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
                onClick={
                  //setActiveButton(null);
                  handleStrategyStepChange(null, 0)
                }
              >
                Back
              </BackButton>
              <GradientColorButton
                variant="contained"
                disabled={!aiProfileSelectButton}
                onClick={handleStrategyStepChange("madMax", 1)}
              >
                Next
              </GradientColorButton>
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
                onClick={
                  //setActiveButton(null);
                  handleStrategyStepChange("ai", 0)
                }
              >
                Back
              </BackButton>
              <GradientColorButton
                disabled={!minMaxPriceSelectButton}
                variant="contained"
                onClick={handleStrategyStepChange(
                  "assignStrategyToProducts",
                  2
                )}
              >
                Assign and proceed
              </GradientColorButton>
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
                  <AssignItemContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          alignContent: "center",
                          columnGap: "100px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
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
                                  },
                                }}
                              />
                            }
                            label="FBA"
                          />
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "12px",
                              color: "#4E5969",
                              lineHeight: "18px",
                            }}
                            align="center"
                          >
                            Fulfillment by Amazon
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          paddingRight: "20px",
                        }}
                      >
                        <Typography
                          align="center"
                          variant="h5"
                          component="div"
                          sx={{
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#1565D8",
                          }}
                        >
                          999
                        </Typography>
                        <Typography
                          component="div"
                          sx={{
                            fontSize: "12px",
                            color: "#4E5969",
                            lineHeight: "18px",
                          }}
                          align="center"
                        >
                          Products
                        </Typography>
                      </Box>
                    </Box>
                  </AssignItemContent>
                </AssignItem>

                <Paper
                  sx={{
                    margin: "10px",
                    paddingLeft: "20px",
                    border: "1px solid #00A3FF",
                    borderRadius: "16px",
                    width: "580px",
                    height: "60px",
                    background: "#FFFFFF",
                    boxShadow: "4px 4px 25px rgba(111, 213, 246, 0.25)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      alignContent: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "center",
                        columnGap: "100px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
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
                                },
                              }}
                            />
                          }
                          label="FBM"
                        />
                        <Typography
                          component="div"
                          sx={{
                            fontSize: "12px",
                            color: "#4E5969",
                            lineHeight: "18px",
                          }}
                          align="center"
                        >
                          Fulfillment by Merchant
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingRight: "20px",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "#1565D8",
                        }}
                      >
                        999
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "12px",
                          color: "#4E5969",
                          lineHeight: "18px",
                        }}
                        align="center"
                      >
                        Products
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
                <Paper
                  sx={{
                    margin: "10px",
                    paddingLeft: "20px",
                    border: "1px solid #00A3FF",
                    borderRadius: "16px",
                    width: "580px",
                    height: "60px",
                    background: "#FFFFFF",
                    boxShadow: "4px 4px 25px rgba(111, 213, 246, 0.25)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      alignContent: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "center",
                        columnGap: "100px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
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
                                },
                              }}
                            />
                          }
                          label="All"
                        />
                        <Typography
                          component="div"
                          sx={{
                            fontSize: "12px",
                            color: "#4E5969",
                            lineHeight: "18px",
                          }}
                          align="center"
                        >
                          Both FBA and FBM
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingRight: "20px",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "#1565D8",
                        }}
                      >
                        999
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "12px",
                          color: "#4E5969",
                          lineHeight: "18px",
                        }}
                        align="center"
                      >
                        Products
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
                <Paper
                  sx={{
                    margin: "10px",
                    paddingLeft: "20px",
                    border: "1px solid #00A3FF",
                    borderRadius: "16px",
                    width: "580px",
                    height: "60px",
                    background: "#FFFFFF",
                    boxShadow: "4px 4px 25px rgba(111, 213, 246, 0.25)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      alignContent: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "center",
                        columnGap: "100px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
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
                                },
                              }}
                            />
                          }
                          label="Select Products"
                        />
                        <Typography
                          component="div"
                          sx={{
                            fontSize: "12px",
                            color: "#4E5969",
                            lineHeight: "18px",
                          }}
                          align="center"
                        >
                          Fulfillment by Amazon
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingLeft: "10px",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "#009C34",
                        }}
                      >
                        --
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "12px",
                          color: "#4E5969",
                          lineHeight: "18px",
                        }}
                        align="center"
                      >
                        Selected Products
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingRight: "20px",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "#1565D8",
                        }}
                      >
                        999
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "12px",
                          color: "#4E5969",
                          lineHeight: "18px",
                        }}
                        align="center"
                      >
                        Products
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
                <Paper
                  sx={{
                    margin: "10px",
                    paddingLeft: "20px",
                    border: "1px solid #00A3FF",
                    borderRadius: "16px",
                    width: "580px",
                    height: "60px",
                    background: "#FFFFFF",
                    boxShadow: "4px 4px 25px rgba(111, 213, 246, 0.25)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      alignContent: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "center",
                        columnGap: "100px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
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
                                },
                              }}
                            />
                          }
                          label="Apply Later"
                        />
                        <Typography
                          component="div"
                          sx={{
                            fontSize: "12px",
                            color: "#4E5969",
                            lineHeight: "18px",
                          }}
                          align="center"
                        >
                          [Apply Later]
                        </Typography>
                      </Box>
                    </Box>

                    {/* <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingRight: "20px",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "#1565D8",
                        }}
                      >
                        999
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "12px",
                          color: "#4E5969",
                          lineHeight: "18px",
                        }}
                        align="center"
                      >
                        Products
                      </Typography>
                    </Box> */}
                  </Box>
                </Paper>
              </RadioGroup>
            </FormControl>
            <NavigationButtonsContainer>
              <BackButton
                variant="contained"
                onClick={
                  //setActiveButton(null);
                  handleStrategyStepChange("madMax", 1)
                }
              >
                Back
              </BackButton>
              <GradientColorButton
                disabled={!minMaxPriceSelectButton}
                variant="contained"
                onClick={() => handleOpenModal()}
              >
                Finish & Create Strategy
              </GradientColorButton>
            </NavigationButtonsContainer>
          </AssignStrategyToProductsContainer>
          <RepricerModal open={openModal} close={handleCloseModal} />
        </>
      )}
    </>
  );
};

export default ChooseStrategy;
