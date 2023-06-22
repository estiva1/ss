import React from "react";
import { useState } from "react";
import { cloneElement } from "react";

import {
  Autocomplete,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  Grow,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  TextField,
  Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

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
import buyBoxStrategy from "../../assets/ai-repricer/buy-box-strategy.png";
import lowPriceStrategy from "../../assets/ai-repricer/low-price-strategy.png";
import lightBulb from "../../assets/ai-repricer/light-bulb.png";
import fileUploaded from "../../assets/ai-repricer/file-uploaded.png";
import productExampleImage from "../../assets/ai-repricer/product-example-image.png";

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
  AssignItemContentLeft,
  AssignItemContentRight,
  AssignItemContentRightExtended,
  AssignItemQuantityText,
  AssignItemSpanText,
  AssignStrategyToProductsContainer,
  BoxText,
  BuyBoxStrategyRulesLabel,
  DescriptionText,
  HeaderText,
  Hint,
  MinMaxTypeSelect,
  NavigationButtonsContainer,
  ParamText,
  ProductForCalculationContainer,
  ProductForCalculationDetails,
  ProductForCalculationImageBox,
  ProductForCalculationName,
  ProductForCalculationParam,
  RoundChartText,
  RoundChartsContainer,
  SpanText,
  StackItems,
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

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
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

const options = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
  { label: "Option 4" },
];

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const ChooseStrategy = () => {
  // blue stepbar starting step
  const [step, setStep] = useState(1);

  // active step
  const [strategyStep, setStrategyStep] = useState(null);

  const handleStrategyStepChange = (strategy, step) => (event) => {
    setStrategyStep(strategy);
    setStep(step);
  };

  // Ai Powered Strategy -> MadMax -or- Slow and Steady
  const [chooseAiProfileSelectButton, setChooseAiProfileSelectButton] =
    useState(null);
  const chooseAiProfileHandleClick = (chooseAiProfileButtonId) => {
    setChooseAiProfileSelectButton(chooseAiProfileButtonId);
  };

  // MadMax -> Adjust Min/Max Price
  const [minMaxPriceSelectButton, setMinMaxPriceSelectButton] = useState(null);
  const minMaxPriceHandleClick = (minMaxPriceSelectButtonId) => {
    setMinMaxPriceSelectButton(minMaxPriceSelectButtonId);
  };

  // Custom Rules Strategy -> Buy Box Strategy -or- Low price Strategy
  const [personalizedProfileSelectButton, setPersonalizedProfileSelectButton] =
    useState(null);
  const personalizedProfileHandleClick = (personalizedProfileButtonId) => {
    setPersonalizedProfileSelectButton(personalizedProfileButtonId);
  };

  // Assign Strategy to Products
  const [assignStrategyToProducts, setAssignStrategyToProducts] = useState("");
  const handleChangeAssignStrategyToProducts = (event) => {
    setAssignStrategyToProducts(event.target.value);
  };

  const [customRuleBaseSelectButton, setCustomRuleBaseSelectButton] =
    useState(null);
  const customRuleBaseHandleClick = (customRuleBaseSelectButtonId) => {
    setCustomRuleBaseSelectButton(customRuleBaseSelectButtonId);
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

          {strategyStep === "ai" ? (
            1
          ) : strategyStep === "personalized" ? (
            2
          ) : (
            <StrategyTypesContainer>
              <Grow in={true}>
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
                          primary="Lorem ipsum dolor sit amet, consectetur"
                        />
                      </ListItem>
                    )}
                  </List>
                  <BlueButton
                    variant="contained"
                    onClick={handleStrategyStepChange("ai", 1)}
                    sx={{ width: "90%", marginBottom: "20px" }}
                  >
                    Choose Strategy
                  </BlueButton>
                </StrategyType>
              </Grow>

              <Grow in={true} timeout={1000}>
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
                          primary="Lorem ipsum dolor sit amet, consectetur"
                        />
                      </ListItem>
                    )}
                  </List>
                  <BlueButton
                    variant="contained"
                    onClick={handleStrategyStepChange("personalized", 1)}
                    sx={{ width: "90%", marginBottom: "20px" }}
                  >
                    Choose Strategy
                  </BlueButton>
                </StrategyType>
              </Grow>
            </StrategyTypesContainer>
          )}
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
                  left: "10%",
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
                <Grow in={true}>
                  <AiProfileSelect
                    active={chooseAiProfileSelectButton === 1}
                    onClick={() => chooseAiProfileHandleClick(1)}
                  >
                    <AiProfileImageBox component="img" src={madMax} />
                    <BoxText align="center" variant="h5" component="div">
                      MadMax
                    </BoxText>
                  </AiProfileSelect>
                </Grow>

                <Grow in={true} timeout={1000}>
                  <AiProfileSelect
                    active={chooseAiProfileSelectButton === 2}
                    onClick={() => chooseAiProfileHandleClick(2)}
                  >
                    <AiProfileImageBox component="img" src={slowAndSteady} />
                    <BoxText align="center" variant="h5" component="div">
                      Slow and Steady
                    </BoxText>
                  </AiProfileSelect>
                </Grow>
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
                disabled={!chooseAiProfileSelectButton}
                onClick={handleStrategyStepChange("madMax", 2)}
              >
                Next
              </BlueButton>
            </NavigationButtonsContainer>
          </AiProfilesContainer>
        </>
      )}

      {strategyStep === "personalized" && (
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
                label="PERSONALIZED"
                icon={<TuneOutlinedIcon sx={{ fill: "black" }} />}
                style={{
                  background: "#DEDFDF",
                  padding: "0px 20px",
                  right: "10.3%",
                }}
              />
              <AiStrategyImageAndText>
                <AiStrategyImageBox component="img" src={customStrategyLogo} />
                <BoxText gutterBottom align="center" component="div">
                  Custom Rules Strategy
                </BoxText>
              </AiStrategyImageAndText>

              <Divider sx={{ margin: "10px", width: "70%" }} variant="middle" />

              <TextContainer sx={{ background: "#fff" }}>
                <HeaderText align="center" variant="h5" component="div">
                  Choose Custom Rule Base
                </HeaderText>
                <DescriptionText gutterBottom component="div" align="center">
                  There are Two Custom base Strategies are your unique repricing
                  rules that determine exactly how your listings will compete
                  against other sellers on the marketplace. Please choose any
                  one strategy you would like to create.
                </DescriptionText>
              </TextContainer>

              <AiProfilesSelectContainer>
                <Grow in={true}>
                  <AiProfileSelect
                    active={personalizedProfileSelectButton === 1}
                    onClick={() => personalizedProfileHandleClick(1)}
                  >
                    <AiProfileImageBox component="img" src={buyBoxStrategy} />
                    <BoxText align="center" variant="h5" component="div">
                      Buy Box Strategy
                    </BoxText>
                  </AiProfileSelect>
                </Grow>
                <Grow in={true} timeout={1000}>
                  <AiProfileSelect
                    active={personalizedProfileSelectButton === 2}
                    onClick={() => personalizedProfileHandleClick(2)}
                  >
                    <AiProfileImageBox component="img" src={lowPriceStrategy} />
                    <BoxText align="center" variant="h5" component="div">
                      Low Price Strategy
                    </BoxText>
                  </AiProfileSelect>
                </Grow>
              </AiProfilesSelectContainer>
            </AiProfile>

            {personalizedProfileSelectButton === 1 && (
              <>
                <Stack spacing={2} sx={{ marginBottom: "20px" }}>
                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <BuyBoxStrategyRulesLabel>
                      How to price against the competition
                    </BuyBoxStrategyRulesLabel>
                  </Box>
                  <StackItems sx={{ marginTop: "0px !important" }}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "250px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                    <TextField
                      size="small"
                      id="select-currency"
                      select
                      label="Currency"
                      defaultValue="USD"
                      sx={{
                        minWidth: "100px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="amount">Amount</InputLabel>
                      <OutlinedInput
                        id="amount"
                        size="small"
                        sx={{ background: "#fff" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                    <Tooltip
                      title="The amount Sale Support will adjust your price by
                        when competing with other sellers."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <StyledSwitch
                      defaultChecked
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    <BuyBoxStrategyRulesLabel>
                      Price differently against Amazon
                    </BuyBoxStrategyRulesLabel>
                  </Box>
                  <StackItems sx={{ marginTop: "0px !important" }}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "250px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                    <TextField
                      size="small"
                      id="select-currency"
                      select
                      label="Currency"
                      defaultValue="USD"
                      sx={{
                        minWidth: "100px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="amount">Amount</InputLabel>
                      <OutlinedInput
                        id="amount"
                        size="small"
                        sx={{ background: "#fff" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                    <Tooltip
                      title="The amount Sale Support will adjust your price by when competing with Amazon."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <StyledSwitch
                      defaultChecked
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    <BuyBoxStrategyRulesLabel>
                      Price differently against FBA
                    </BuyBoxStrategyRulesLabel>
                  </Box>
                  <StackItems sx={{ marginTop: "0px !important" }}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "250px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                    <TextField
                      size="small"
                      id="select-currency"
                      select
                      label="Currency"
                      defaultValue="USD"
                      sx={{
                        minWidth: "100px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="amount">Amount</InputLabel>
                      <OutlinedInput
                        id="amount"
                        size="small"
                        sx={{ background: "#fff" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                    <Tooltip
                      title="The amount Sale Support will adjust your price by when competing with FBA."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <StyledSwitch
                      defaultChecked
                      inputProps={{ "aria-label": "ant design" }}
                    />
                    <BuyBoxStrategyRulesLabel>
                      Price differently against FBM
                    </BuyBoxStrategyRulesLabel>
                  </Box>
                  <StackItems sx={{ marginTop: "0px !important" }}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "250px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                    <TextField
                      size="small"
                      id="select-currency"
                      select
                      label="Currency"
                      defaultValue="USD"
                      sx={{
                        minWidth: "100px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="amount">Amount</InputLabel>
                      <OutlinedInput
                        id="amount"
                        size="small"
                        sx={{ background: "#fff" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                    <Tooltip
                      title="The amount Sale Support will adjust your price by when competing with FBM."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <BuyBoxStrategyRulesLabel>
                      When there is no competition
                    </BuyBoxStrategyRulesLabel>
                  </Box>
                  <StackItems sx={{ marginTop: "0px !important" }}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "160px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel align="center">
                      Set to
                    </BuyBoxStrategyRulesLabel>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "160px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                    <TextField
                      size="small"
                      id="select-currency"
                      select
                      label="Currency"
                      defaultValue="USD"
                      sx={{
                        minWidth: "100px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="amount">Amount</InputLabel>
                      <OutlinedInput
                        id="amount"
                        size="small"
                        sx={{ background: "#fff" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                    <Tooltip
                      title="Action for Sale Support to take when no competition is found on a listing."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <BuyBoxStrategyRulesLabel>
                      When the competition is Below your minimum price
                    </BuyBoxStrategyRulesLabel>
                  </Box>
                  <StackItems sx={{ marginTop: "0px !important" }}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "160px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel align="center">
                      Set to
                    </BuyBoxStrategyRulesLabel>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "160px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                    <TextField
                      size="small"
                      id="select-currency"
                      select
                      label="Currency"
                      defaultValue="USD"
                      sx={{
                        minWidth: "100px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="amount">Amount</InputLabel>
                      <OutlinedInput
                        id="amount"
                        size="small"
                        sx={{ background: "#fff" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                    <Tooltip
                      title="Action for Sale Support to take when the competition is below your min price."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <BuyBoxStrategyRulesLabel>
                      When the competition is Above your minimum price
                    </BuyBoxStrategyRulesLabel>
                  </Box>
                  <StackItems sx={{ marginTop: "0px !important" }}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "160px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel align="center">
                      Set to
                    </BuyBoxStrategyRulesLabel>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "160px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                    <TextField
                      size="small"
                      id="select-currency"
                      select
                      label="Currency"
                      defaultValue="USD"
                      sx={{
                        minWidth: "100px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="amount">Amount</InputLabel>
                      <OutlinedInput
                        id="amount"
                        size="small"
                        sx={{ background: "#fff" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                    <Tooltip
                      title="Action for Sale Support to take when the competition is above your max price."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <Divider variant="middle" />

                  <StackItems sx={{ justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <StyledSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      <BuyBoxStrategyRulesLabel>
                        Use max price when out of stock
                      </BuyBoxStrategyRulesLabel>
                    </Box>
                    <Tooltip
                      sx={{ padding: "8px 80px" }}
                      title="Listings can be set to max price when going out of stock."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <Divider variant="middle" />

                  <BoxText>Exclude Sellers</BoxText>

                  <StackItems sx={{ justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <StyledSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      <FormControl
                        sx={{ width: "80px", background: "#fff" }}
                        variant="outlined"
                      >
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          endAdornment={
                            <InputAdornment position="end">%</InputAdornment>
                          }
                          aria-describedby="outlined-weight-helper-text"
                          inputProps={{
                            "aria-label": "weight",
                          }}
                        />
                      </FormControl>
                      <BuyBoxStrategyRulesLabel>
                        Exclude sellers by their feedback rating
                      </BuyBoxStrategyRulesLabel>
                    </Box>
                    <Tooltip
                      sx={{ padding: "8px 80px" }}
                      title="Sellers that meet or exceed this feedback level will be considered competitors."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <StackItems sx={{ justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <StyledSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      <BuyBoxStrategyRulesLabel>
                        Exclude Amazon as a competitor
                      </BuyBoxStrategyRulesLabel>
                    </Box>
                    <Tooltip
                      sx={{ padding: "8px 80px" }}
                      title="Choose to ignore Amazon when found on a listing."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <StackItems sx={{ justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <StyledSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      <BuyBoxStrategyRulesLabel>
                        Exclude back-ordered sellers
                      </BuyBoxStrategyRulesLabel>
                    </Box>
                    <Tooltip
                      sx={{ padding: "8px 80px" }}
                      title="Exclude sellers whose inventory is not yet available."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <StackItems sx={{ justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <StyledSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      <BuyBoxStrategyRulesLabel>
                        Withe Free Shipping
                      </BuyBoxStrategyRulesLabel>
                    </Box>
                    <Tooltip
                      sx={{ padding: "8px 80px" }}
                      title="Exclude sellers whose entered with free shipping details."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>

                  <Divider
                    variant="middle"
                    sx={{ marginBottom: "20px !important" }}
                  />

                  <BoxText>Staying In the Buy Box</BoxText>

                  {/* Containers need to be renaimed */}
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
                          Maximize your profit in the Buy Box.
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                        <AboutManualPricingBottomText
                          component="div"
                          align="start"
                        >
                          Getting into the Buy Box, and staying there, can
                          require two different strategies. In this stage,
                          you'll determine the strategy and we will use to
                          maximize your time in the Buy Box once you've won it.
                        </AboutManualPricingBottomText>
                      </AboutManualPricingBottom>
                    </AboutManualPricingContainer>
                  </Item>
                  {/* Containers need to be renaimed */}

                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
                  >
                    <BuyBoxStrategyRulesLabel>
                      When you've acquired the buy box
                    </BuyBoxStrategyRulesLabel>
                  </Box>
                  <StackItems sx={{ marginTop: "0px !important" }}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "250px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          label="Choose Option"
                        />
                      )}
                    />
                    <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                    <TextField
                      size="small"
                      id="select-currency"
                      select
                      label="Currency"
                      defaultValue="USD"
                      sx={{
                        minWidth: "100px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="amount">Amount</InputLabel>
                      <OutlinedInput
                        id="amount"
                        size="small"
                        sx={{ background: "#fff" }}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                    <Tooltip
                      title="The action Sale Support will take to keep you in the buy box for longer."
                      followCursor
                    >
                      <Hint>
                        <Box component="img" src={lightBulb} />
                      </Hint>
                    </Tooltip>
                  </StackItems>
                </Stack>
              </>
            )}

            {/* {personalizedProfileSelectButton === 2 && <Box>2</Box>} */}

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
                disabled={!personalizedProfileHandleClick}
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
                <Grow in={true}>
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
                </Grow>
              </Grid>
              <Grid item xs={6}>
                <Grow in={true} timeout={500}>
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
                </Grow>
              </Grid>
              <Grid item xs={6}>
                <Grow in={true} timeout={1000}>
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
                </Grow>
              </Grid>
              <Grid item xs={6}>
                <Grow in={true} timeout={1500}>
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
                </Grow>
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
                          align="left"
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
            {minMaxPriceSelectButton === 2 && (
              <>
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
                            align="left"
                            sx={{ fontWeight: 600 }}
                          >
                            About ROI Based Pricing Method
                          </DescriptionText>
                        </AboutManualPricingTop>
                        <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                          <AboutManualPricingBottomText
                            component="div"
                            align="left"
                          >
                            By selecting the ROI based pricing method, we will
                            set the minimum and maximum prices for each listing
                            dynamically based on the minimum and maximum return
                            on investment that is set for this strategy. Your
                            cost for each listing connected to this strategy
                            will need to be set.
                          </AboutManualPricingBottomText>
                        </AboutManualPricingBottom>
                      </AboutManualPricingContainer>
                    </Item>
                  </Grid>
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
                          Sample ROI Calculation
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom>
                        <ProductForCalculationContainer>
                          <ProductForCalculationImageBox
                            component="img"
                            src={productExampleImage}
                          />
                          <ProductForCalculationDetails>
                            <ProductForCalculationName gutterBottom>
                              3 plus vibe pro smart watch series
                            </ProductForCalculationName>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>
                                Material:
                              </ParamText>
                              <ParamText>10.1 FL OZ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>
                                ASIN:
                              </ParamText>
                              <ParamText>B075VQ3YJQ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>
                                Cost Price:
                              </ParamText>
                              <ParamText>$12.80</ParamText>
                            </ProductForCalculationParam>
                          </ProductForCalculationDetails>

                          <ProductForCalculationDetails
                            sx={{ alignItems: "end" }}
                          >
                            <BlueButton sx={{ padding: "0px 30px" }}>
                              Try another product
                            </BlueButton>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {/* Should be renamed in future */}
                              <BuyBoxStrategyRulesLabel>
                                MIN return on investment
                              </BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={
                                    <InputAdornment position="start">
                                      %
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {/* Should be renamed in future */}
                              <BuyBoxStrategyRulesLabel>
                                MAX return on investment
                              </BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={
                                    <InputAdornment position="start">
                                      %
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </Box>
                          </ProductForCalculationDetails>
                        </ProductForCalculationContainer>

                        <Divider
                          sx={{ margin: "20px", width: "100%" }}
                          variant="middle"
                        />

                        <RoundChartsContainer>
                          <Box sx={{ position: "relative" }}>
                            <CircularProgress
                              variant="determinate"
                              sx={{
                                color: "#F1FBFE",
                                transform: "rotate(180deg) !important",
                              }}
                              size={300}
                              thickness={5}
                              value={50}
                            />
                            <CircularProgress
                              variant="determinate"
                              disableShrink
                              sx={{
                                position: "absolute",
                                color: "#6FD5F6",
                                transform: "rotate(180deg) !important",
                                left: 0,
                              }}
                              size={300}
                              thickness={5}
                              value={15}
                            />
                            <Box
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "33%",
                              }}
                            >
                              <RoundChartText
                                gutterBottom
                                sx={{ color: "#00A3FF" }}
                              >
                                $ 25.12
                              </RoundChartText>
                              <AboutManualPricingBottomText
                                sx={{ fontWeight: "600" }}
                                component="div"
                                align="center"
                              >
                                Sample MIN Price
                              </AboutManualPricingBottomText>
                            </Box>
                          </Box>
                          <Box sx={{ position: "relative" }}>
                            <CircularProgress
                              variant="determinate"
                              sx={{
                                color: "#F1FBFE",
                                transform: "rotate(180deg) !important",
                              }}
                              size={300}
                              thickness={5}
                              value={50}
                            />
                            <CircularProgress
                              variant="determinate"
                              disableShrink
                              sx={{
                                position: "absolute",
                                color: "#FF9900",
                                transform: "rotate(180deg) !important",
                                left: 0,
                              }}
                              size={300}
                              thickness={5}
                              value={35}
                            />
                            <Box
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "33%",
                              }}
                            >
                              <RoundChartText
                                gutterBottom
                                sx={{ color: "#FF9900" }}
                              >
                                $ 40.02
                              </RoundChartText>
                              <AboutManualPricingBottomText
                                sx={{ fontWeight: "600" }}
                                component="div"
                                align="center"
                              >
                                Sample MAX Price
                              </AboutManualPricingBottomText>
                            </Box>
                          </Box>
                        </RoundChartsContainer>
                      </AboutManualPricingBottom>
                    </AboutManualPricingContainer>
                  </Item>
                </Grid>
              </>
            )}
            {minMaxPriceSelectButton === 3 && (
              <>
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
                            align="left"
                            sx={{ fontWeight: 600 }}
                          >
                            About Profit Margin Pricing Method
                          </DescriptionText>
                        </AboutManualPricingTop>
                        <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                          <AboutManualPricingBottomText
                            component="div"
                            align="left"
                          >
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                          </AboutManualPricingBottomText>
                        </AboutManualPricingBottom>
                      </AboutManualPricingContainer>
                    </Item>
                  </Grid>
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
                          Sample Profit Margin Calculation
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom>
                        <ProductForCalculationContainer>
                          <ProductForCalculationImageBox
                            component="img"
                            src={productExampleImage}
                          />
                          <ProductForCalculationDetails>
                            <ProductForCalculationName gutterBottom>
                              3 plus vibe pro smart watch series
                            </ProductForCalculationName>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>
                                Material:
                              </ParamText>
                              <ParamText>10.1 FL OZ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>
                                ASIN:
                              </ParamText>
                              <ParamText>B075VQ3YJQ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>
                                Cost Price:
                              </ParamText>
                              <ParamText>$12.80</ParamText>
                            </ProductForCalculationParam>
                          </ProductForCalculationDetails>

                          <ProductForCalculationDetails
                            sx={{ alignItems: "end" }}
                          >
                            <BlueButton sx={{ padding: "0px 30px" }}>
                              Try another product
                            </BlueButton>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {/* Should be renamed in future */}
                              <BuyBoxStrategyRulesLabel>
                                MIN return on investment
                              </BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={
                                    <InputAdornment position="start">
                                      %
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {/* Should be renamed in future */}
                              <BuyBoxStrategyRulesLabel>
                                MAX return on investment
                              </BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={
                                    <InputAdornment position="start">
                                      %
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </Box>
                          </ProductForCalculationDetails>
                        </ProductForCalculationContainer>

                        <Divider
                          sx={{ margin: "20px", width: "100%" }}
                          variant="middle"
                        />

                        <RoundChartsContainer>
                          <Box sx={{ position: "relative" }}>
                            <CircularProgress
                              variant="determinate"
                              sx={{
                                color: "#F1FBFE",
                                transform: "rotate(180deg) !important",
                              }}
                              size={300}
                              thickness={5}
                              value={50}
                            />
                            <CircularProgress
                              variant="determinate"
                              disableShrink
                              sx={{
                                position: "absolute",
                                color: "#6FD5F6",
                                transform: "rotate(180deg) !important",
                                left: 0,
                              }}
                              size={300}
                              thickness={5}
                              value={15}
                            />
                            <Box
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "33%",
                              }}
                            >
                              <RoundChartText
                                gutterBottom
                                sx={{ color: "#00A3FF" }}
                              >
                                $ 25.12
                              </RoundChartText>
                              <AboutManualPricingBottomText
                                sx={{ fontWeight: "600" }}
                                component="div"
                                align="center"
                              >
                                Sample MIN Price
                              </AboutManualPricingBottomText>
                            </Box>
                          </Box>
                          <Box sx={{ position: "relative" }}>
                            <CircularProgress
                              variant="determinate"
                              sx={{
                                color: "#F1FBFE",
                                transform: "rotate(180deg) !important",
                              }}
                              size={300}
                              thickness={5}
                              value={50}
                            />
                            <CircularProgress
                              variant="determinate"
                              disableShrink
                              sx={{
                                position: "absolute",
                                color: "#FF9900",
                                transform: "rotate(180deg) !important",
                                left: 0,
                              }}
                              size={300}
                              thickness={5}
                              value={35}
                            />
                            <Box
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "33%",
                              }}
                            >
                              <RoundChartText
                                gutterBottom
                                sx={{ color: "#FF9900" }}
                              >
                                $ 40.02
                              </RoundChartText>
                              <AboutManualPricingBottomText
                                sx={{ fontWeight: "600" }}
                                component="div"
                                align="center"
                              >
                                Sample MAX Price
                              </AboutManualPricingBottomText>
                            </Box>
                          </Box>
                        </RoundChartsContainer>
                      </AboutManualPricingBottom>
                    </AboutManualPricingContainer>
                  </Item>
                </Grid>
              </>
            )}
            {minMaxPriceSelectButton === 4 && (
              <>
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
                            align="left"
                            sx={{ fontWeight: 600 }}
                          >
                            About Fixed Profit Pricing Method
                          </DescriptionText>
                        </AboutManualPricingTop>
                        <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                          <AboutManualPricingBottomText
                            component="div"
                            align="left"
                          >
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                          </AboutManualPricingBottomText>
                        </AboutManualPricingBottom>
                      </AboutManualPricingContainer>
                    </Item>
                  </Grid>
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
                          Sample Fixed Profit Calculation
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom>
                        <ProductForCalculationContainer>
                          <ProductForCalculationImageBox
                            component="img"
                            src={productExampleImage}
                          />
                          <ProductForCalculationDetails>
                            <ProductForCalculationName gutterBottom>
                              3 plus vibe pro smart watch series
                            </ProductForCalculationName>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>
                                Material:
                              </ParamText>
                              <ParamText>10.1 FL OZ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>
                                ASIN:
                              </ParamText>
                              <ParamText>B075VQ3YJQ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>
                                Cost Price:
                              </ParamText>
                              <ParamText>$12.80</ParamText>
                            </ProductForCalculationParam>
                          </ProductForCalculationDetails>

                          <ProductForCalculationDetails
                            sx={{ alignItems: "end" }}
                          >
                            <BlueButton sx={{ padding: "0px 30px" }}>
                              Try another product
                            </BlueButton>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {/* Should be renamed in future */}
                              <BuyBoxStrategyRulesLabel>
                                MIN return on investment
                              </BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={
                                    <InputAdornment position="start">
                                      %
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {/* Should be renamed in future */}
                              <BuyBoxStrategyRulesLabel>
                                MAX return on investment
                              </BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={
                                    <InputAdornment position="start">
                                      %
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </Box>
                          </ProductForCalculationDetails>
                        </ProductForCalculationContainer>

                        <Divider
                          sx={{ margin: "20px", width: "100%" }}
                          variant="middle"
                        />

                        <RoundChartsContainer>
                          <Box sx={{ position: "relative" }}>
                            <CircularProgress
                              variant="determinate"
                              sx={{
                                color: "#F1FBFE",
                                transform: "rotate(180deg) !important",
                              }}
                              size={300}
                              thickness={5}
                              value={50}
                            />
                            <CircularProgress
                              variant="determinate"
                              disableShrink
                              sx={{
                                position: "absolute",
                                color: "#6FD5F6",
                                transform: "rotate(180deg) !important",
                                left: 0,
                              }}
                              size={300}
                              thickness={5}
                              value={15}
                            />
                            <Box
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "33%",
                              }}
                            >
                              <RoundChartText
                                gutterBottom
                                sx={{ color: "#00A3FF" }}
                              >
                                $ 25.12
                              </RoundChartText>
                              <AboutManualPricingBottomText
                                sx={{ fontWeight: "600" }}
                                component="div"
                                align="center"
                              >
                                Sample MIN Price
                              </AboutManualPricingBottomText>
                            </Box>
                          </Box>
                          <Box sx={{ position: "relative" }}>
                            <CircularProgress
                              variant="determinate"
                              sx={{
                                color: "#F1FBFE",
                                transform: "rotate(180deg) !important",
                              }}
                              size={300}
                              thickness={5}
                              value={50}
                            />
                            <CircularProgress
                              variant="determinate"
                              disableShrink
                              sx={{
                                position: "absolute",
                                color: "#FF9900",
                                transform: "rotate(180deg) !important",
                                left: 0,
                              }}
                              size={300}
                              thickness={5}
                              value={35}
                            />
                            <Box
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "33%",
                              }}
                            >
                              <RoundChartText
                                gutterBottom
                                sx={{ color: "#FF9900" }}
                              >
                                $ 40.02
                              </RoundChartText>
                              <AboutManualPricingBottomText
                                sx={{ fontWeight: "600" }}
                                component="div"
                                align="center"
                              >
                                Sample MAX Price
                              </AboutManualPricingBottomText>
                            </Box>
                          </Box>
                        </RoundChartsContainer>
                      </AboutManualPricingBottom>
                    </AboutManualPricingContainer>
                  </Item>
                </Grid>
              </>
            )}

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
            <Stack spacing={2}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={assignStrategyToProducts}
                  onChange={handleChangeAssignStrategyToProducts}
                >
                  <Grow in={true}>
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
                  </Grow>

                  <Grow in={true} timeout={250}>
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
                  </Grow>

                  <Grow in={true} timeout={500}>
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
                  </Grow>

                  <Grow in={true} timeout={750}>
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
                          <AssignItemSpanText>
                            Selected Products
                          </AssignItemSpanText>
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
                  </Grow>

                  <Grow in={true} timeout={1000}>
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
                  </Grow>
                </RadioGroup>
              </FormControl>
            </Stack>
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
