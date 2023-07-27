import React from "react";
import { useState } from "react";
import { cloneElement } from "react";

import {
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Avatar,
  Backdrop,
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
  Modal,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  tableCellClasses,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

import PropTypes from "prop-types";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import Check from "@mui/icons-material/Check";
import StepLabel from "@mui/material/StepLabel";
import MuiAccordion from "@mui/material/Accordion";

import CircleIcon from "@mui/icons-material/Circle";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";

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
import productExampleImage from "../../assets/ai-repricer/product-example-image.png";
import cloud from "../../assets/ai-repricer/cloud.png";
import cloudSuccess from "../../assets/ai-repricer/cloud-success.png";
import productImageForTableExample from "../../assets/ai-repricer/product-image-for-table-example.png";
import completedLoading from "../../assets/ai-repricer/completed.png";

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
  SpanTextSmall,
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
import { FileStatusContainer, FileStatusLineSuccess, StyledTableContainer, SubheaderText } from "../costUploader/costUploader.styles";

const Item = styled(Box)(({ theme }) => ({
  padding: "15px 0px",
  textAlign: "center",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E6E6E6",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    borderRight: "1px solid #E6E6E6",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "white",

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  rowStyle: {
    // Define your row styles here
    backgroundColor: "lightgray",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
}));

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: "none",

  "&:before": {
    display: "none",
  },
}));

//styled switch
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
    backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.25)",
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
    borderColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#EAEAF0",
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
      {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
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

const options = [{ label: "Option 1" }, { label: "Option 2" }, { label: "Option 3" }, { label: "Option 4" }];

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

function fileUploadedSuccess(fileName, fileStatus, output) {
  return { fileName, fileStatus, output };
};

const rowForFile = [fileUploadedSuccess("", "", "")];

const ChooseStrategy = ({
  handleNext,
  handleBack,
  onStrategyTypeChange,
  onSubstrategyTypeChange,
  onMinMaxTypeChange,
  onProductsChange,
}) => {
  // blue stepbar starting step
  const [step, setStep] = useState(1);
  // active global strategy step
  const [strategyStep, setStrategyStep] = useState(1);
  // strategy type (Ai Powered Strategy -or- Custom Rules Strategy)
  const [strategyType, setStrategyType] = useState(null);
  // substrategy type
  const [substrategyType, setSubstrategyType] = useState(null);
  // Min/Max type
  const [minMaxType, setMinMaxType] = useState(null);
  // assign strategy to products
  const [products, setProducts] = useState(null);

  const handleStrategyTypeClick =
    (blueStep, globalStep, strategy, substrategy, minMax, products, stepperInc, stepperDec, stepperDoubleDec) => () => {
      setStep(blueStep);
      setStrategyStep(globalStep);
      setStrategyType(strategy);
      setSubstrategyType(substrategy);
      setMinMaxType(minMax);
      setProducts(products);

      // for vertical stepper within 'Choose Strategy'
      onStrategyTypeChange(strategy);
      onSubstrategyTypeChange(substrategy);
      onMinMaxTypeChange(minMax);
      onProductsChange(products);

      // vertical stepper incrementation or decrementation
      if (stepperInc) {
        handleNext();
      }
      if (stepperDec) {
        handleBack();
      }
      if (stepperDoubleDec) {
        handleBack(true);
      }
    };

  const handleSubstrategyTypeClick = (substrategy) => () => {
    setSubstrategyType(substrategy);
    onSubstrategyTypeChange(substrategy);
  };

  const handleMinMaxTypeClick = (minMax) => () => {
    setMinMaxType(minMax);
    onMinMaxTypeChange(minMax);
  };

  // const handleProductsChangeClick = (products) => () => {
  //   setProducts(products);
  //   onProductsChange(products);
  // };

  // Assign Strategy to Products
  const [openModalForSelectProducts, setOpenModalForSelectProducts] = useState(false);
  const [assignStrategyToProducts, setAssignStrategyToProducts] = useState("");
  const handleAssignStrategyToProductsChange = (event) => {
    setAssignStrategyToProducts(event.target.value);

    event.target.value === "fba" ? (
      <>
        {onProductsChange(564)} {handleNext()}
      </>
    ) : event.target.value === "fbm" ? (
      <>
        {onProductsChange(433)} {handleNext()}
      </>
    ) : event.target.value === "all" ? (
      <>
        {onProductsChange(621)} {handleNext()}
      </>
    ) : event.target.value === "select-products" ? (
      <>
        {setOpenModalForSelectProducts(true)} {onProductsChange(677)}
      </>
    ) : (
      <>
        {onProductsChange(null)} {handleNext()}
      </>
    );
  };

  //check if file uploaded
  const [isManualFileUploaded, setIsManualFileUploaded] = useState(1);
  const minMaxPriceUploadHandleClick = () => {
    setIsManualFileUploaded(2);

    setTimeout(() => {
      setIsManualFileUploaded(3);
    }, 2000);
  };

  //---------------------------------------------------------------------

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // for modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 600,
    width: "80%",
    height: "60%",
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
    paddingBottom: 18,
  };

  const columns = [
    {
      field: "id",
      headerName: "Title/ASIN",
      width: 250,
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <Avatar sx={{ borderRadius: "0px" }} src={params.value.productImage} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <DescriptionText sx={{ color: "#1565D8 !important" }}>{params.value.productName}</DescriptionText>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
                <AssignItemSpanText sx={{ fontWeight: "600", color: "#979797 !important" }}>
                  Seller's SKU:
                </AssignItemSpanText>
                <AssignItemSpanText sx={{ fontWeight: "600", color: "#4E5969 !important" }}>
                  SKU-WM-245667
                </AssignItemSpanText>
              </Box>
            </Box>
          </Box>
        );
      },
    },
    { field: "sell", headerName: "Sell", type: "number", width: 120 },
    { field: "buyBox", headerName: "Buy Box", type: "number", width: 120 },
    {
      field: "sellPriceProfit",
      headerName: "Sell Price Profit",
      type: "number",
      width: 120,
    },
    {
      field: "profitMargin",
      headerName: "Profit Margin",
      type: "number",
      width: 120,
    },
    { field: "prepFee", headerName: "Prep. Fee", type: "number", width: 120 },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];

  const rows = [
    {
      id: {
        productName: "Bubba 24 Oz Envy Bubba 1",
        productImage: `${productImageForTableExample}`,
      },
      sell: "$38.76",
      buyBox: "$61.25",
      sellPriceProfit: "$10.43",
      profitMargin: "$58.10",
      prepFee: "$00.45",
    },
    {
      id: {
        productName: "Bubba 24 Oz Envy Bubba 2",
        productImage: `${productImageForTableExample}`,
      },
      sell: "$38.76",
      buyBox: "$61.25",
      sellPriceProfit: "$10.43",
      profitMargin: "$58.10",
      prepFee: "$00.45",
    },
    {
      id: {
        productName: "Bubba 24 Oz Envy Bubba 3",
        productImage: `${productImageForTableExample}`,
      },
      sell: "$38.76",
      buyBox: "$61.25",
      sellPriceProfit: "$10.43",
      profitMargin: "$58.10",
      prepFee: "$00.45",
    },
    {
      id: {
        productName: "Bubba 24 Oz Envy Bubba 4",
        productImage: `${productImageForTableExample}`,
      },
      sell: "$38.76",
      buyBox: "$61.25",
      sellPriceProfit: "$10.43",
      profitMargin: "$58.10",
      prepFee: "$00.45",
    },
    {
      id: {
        productName: "Bubba 24 Oz Envy Bubba 5",
        productImage: `${productImageForTableExample}`,
      },
      sell: "$38.76",
      buyBox: "$61.25",
      sellPriceProfit: "$10.43",
      profitMargin: "$58.10",
      prepFee: "$00.45",
    },
    {
      id: {
        productName: "Bubba 24 Oz Envy Bubba 6",
        productImage: `${productImageForTableExample}`,
      },
      sell: "$38.76",
      buyBox: "$61.25",
      sellPriceProfit: "$10.43",
      profitMargin: "$58.10",
      prepFee: "$00.45",
    },
  ];

  return (
    <>
      {strategyStep === 1 && (
        <>
          <TextContainer>
            <HeaderText align="center" variant="h5" component="div">
              Choose one
            </HeaderText>
            <DescriptionText gutterBottom component="div" align="center">
              Strategies are your unique repricing rules that determine exactly how your listings will compete against
              other sellers on the marketplace. Please choose the strategy you would like to create.
            </DescriptionText>
          </TextContainer>

          <StyledStack spacing={4}>
            <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
              {chooseStrategySteps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </StyledStack>

          {/* Ai Powered Strategy -or- Custom Rules Strategy */}
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
                      <ListItemText sx={{ color: "#4E5969" }} primary="Lorem ipsum dolor sit amet, consectetur" />
                    </ListItem>
                  )}
                </List>
                <BlueButton
                  variant="contained"
                  onClick={handleStrategyTypeClick(1, 2, "ai", substrategyType, minMaxType, products)}
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
                      <ListItemText sx={{ color: "#4E5969" }} primary="Lorem ipsum dolor sit amet, consectetur" />
                    </ListItem>
                  )}
                </List>
                <BlueButton
                  variant="contained"
                  onClick={handleStrategyTypeClick(1, 2, "personalized", substrategyType, minMaxType, products)}
                  sx={{ width: "90%", marginBottom: "20px" }}
                >
                  Choose Strategy
                </BlueButton>
              </StrategyType>
            </Grow>
          </StrategyTypesContainer>
        </>
      )}

      {strategyStep === 2 && (
        <>
          {strategyType === "ai" && (
            <>
              <TextContainer>
                <HeaderText align="center" variant="h5" component="div">
                  Choose one
                </HeaderText>
                <DescriptionText gutterBottom component="div" align="center">
                  Strategies are your unique repricing rules that determine exactly how your listings will compete
                  against other sellers on the marketplace. Please choose the strategy you would like to create.
                </DescriptionText>
              </TextContainer>

              <StyledStack spacing={4}>
                <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
                  {chooseStrategySteps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
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
                      There are Algorithmic base Strategies are your unique repricing rules that determine exactly how
                      your listings will compete against other sellers on the marketplace. Please choose any one
                      strategy you would like to create.
                    </DescriptionText>
                  </TextContainer>

                  <AiProfilesSelectContainer>
                    <Grow in={true}>
                      <AiProfileSelect
                        active={substrategyType === "madMax"}
                        onClick={handleSubstrategyTypeClick("madMax")}
                      >
                        <AiProfileImageBox component="img" src={madMax} />
                        <BoxText align="center" variant="h5" component="div">
                          MadMax
                        </BoxText>
                      </AiProfileSelect>
                    </Grow>

                    <Grow in={true} timeout={1000}>
                      <AiProfileSelect
                        active={substrategyType === "slowAndSteady"}
                        onClick={handleSubstrategyTypeClick("slowAndSteady")}
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
                    onClick={handleStrategyTypeClick(step, 1, null, null, minMaxType, products)}
                  >
                    Back
                  </BackButton>
                  <BlueButton
                    variant="contained"
                    endIcon={<EastOutlinedIcon />}
                    disabled={!substrategyType}
                    onClick={handleStrategyTypeClick(
                      2,
                      3,
                      strategyType,
                      substrategyType,
                      minMaxType,
                      products,
                      true,
                      false
                    )}
                  >
                    Next
                  </BlueButton>
                </NavigationButtonsContainer>
              </AiProfilesContainer>
            </>
          )}

          {strategyType === "personalized" && (
            <>
              <TextContainer>
                <HeaderText align="center" variant="h5" component="div">
                  Choose one
                </HeaderText>
                <DescriptionText gutterBottom component="div" align="center">
                  Strategies are your unique repricing rules that determine exactly how your listings will compete
                  against other sellers on the marketplace. Please choose the strategy you would like to create.
                </DescriptionText>
              </TextContainer>

              <StyledStack spacing={4}>
                <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
                  {chooseStrategySteps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
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
                      There are Two Custom base Strategies are your unique repricing rules that determine exactly how
                      your listings will compete against other sellers on the marketplace. Please choose any one
                      strategy you would like to create.
                    </DescriptionText>
                  </TextContainer>

                  <AiProfilesSelectContainer>
                    <Grow in={true}>
                      <AiProfileSelect
                        active={substrategyType === "buyBox"}
                        onClick={handleSubstrategyTypeClick("buyBox")}
                      >
                        <AiProfileImageBox component="img" src={buyBoxStrategy} />
                        <BoxText align="center" variant="h5" component="div">
                          Buy Box Strategy
                        </BoxText>
                      </AiProfileSelect>
                    </Grow>
                    <Grow in={true} timeout={1000}>
                      <AiProfileSelect
                        active={substrategyType === "lowPrice"}
                        onClick={handleSubstrategyTypeClick("lowPrice")}
                      >
                        <AiProfileImageBox component="img" src={lowPriceStrategy} />
                        <BoxText align="center" variant="h5" component="div">
                          Low Price Strategy
                        </BoxText>
                      </AiProfileSelect>
                    </Grow>
                  </AiProfilesSelectContainer>
                </AiProfile>

                {/* Buy Box Substrategy */}
                {substrategyType === "buyBox" && (
                  <>
                    <Accordion sx={{ background: "#F8FAFB", "& .Mui-expanded": { color: "#1565D8" } }}>
                      <AccordionSummary
                        sx={{
                          padding: "0px",
                          "&.Mui-expanded": {
                            "& > .MuiAccordionSummary-content > .MuiTypography-root": {
                              color: "#1565D8 !important", // Change this to the color you desire
                            },
                          },
                        }}
                        expandIcon={<ArrowOutwardOutlinedIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <BoxText>Price Rules</BoxText>
                      </AccordionSummary>
                      <AccordionDetails sx={{ padding: "0px" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                          <BuyBoxStrategyRulesLabel>How to price against the competition</BuyBoxStrategyRulesLabel>
                        </Box>
                        <StackItems sx={{ marginTop: "0px !important" }}>
                          <Autocomplete
                            disablePortal
                            id="combo-box-choose-option"
                            options={options}
                            sx={{
                              minWidth: "190px",
                              background: "#fff",
                              "& .MuiSvgIcon-root": { color: "#1565D8" },
                            }}
                            renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                          />
                          <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                          <TextField
                            size="small"
                            id="select-currency"
                            select
                            label="Currency"
                            defaultValue="USD"
                            sx={{
                              minWidth: "75px",
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
                          <FormControl fullWidth sx={{ m: 1, maxWidth: "70px" }}>
                            <InputLabel htmlFor="amount">Amount</InputLabel>
                            <OutlinedInput
                              id="amount"
                              size="small"
                              sx={{ background: "#fff" }}
                              startAdornment={<InputAdornment position="start">{""}</InputAdornment>}
                              label="Amount"
                            />
                          </FormControl>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>
                              The amount Sale Support will adjust your price by when competing with other sellers.
                            </SpanTextSmall>
                          </Hint>
                        </StackItems>

                        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                          <StyledSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                          <BuyBoxStrategyRulesLabel>Price differently against Amazon</BuyBoxStrategyRulesLabel>
                        </Box>
                        <StackItems sx={{ marginTop: "0px !important" }}>
                          <Autocomplete
                            disablePortal
                            id="combo-box-choose-option"
                            options={options}
                            sx={{
                              minWidth: "190px",
                              background: "#fff",
                              "& .MuiSvgIcon-root": { color: "#1565D8" },
                            }}
                            renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                          />
                          <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                          <TextField
                            size="small"
                            id="select-currency"
                            select
                            label="Currency"
                            defaultValue="USD"
                            sx={{
                              minWidth: "75px",
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
                          <FormControl fullWidth sx={{ m: 1, maxWidth: "70px" }}>
                            <InputLabel htmlFor="amount">Amount</InputLabel>
                            <OutlinedInput
                              id="amount"
                              size="small"
                              sx={{ background: "#fff" }}
                              startAdornment={<InputAdornment position="start">{""}</InputAdornment>}
                              label="Amount"
                            />
                          </FormControl>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>
                              The amount Sale Support will adjust your price by when competing with Amazon.
                            </SpanTextSmall>
                          </Hint>
                        </StackItems>

                        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                          <StyledSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                          <BuyBoxStrategyRulesLabel>Price differently against FBA</BuyBoxStrategyRulesLabel>
                        </Box>
                        <StackItems sx={{ marginTop: "0px !important" }}>
                          <Autocomplete
                            disablePortal
                            id="combo-box-choose-option"
                            options={options}
                            sx={{
                              minWidth: "190px",
                              background: "#fff",
                              "& .MuiSvgIcon-root": { color: "#1565D8" },
                            }}
                            renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                          />
                          <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                          <TextField
                            size="small"
                            id="select-currency"
                            select
                            label="Currency"
                            defaultValue="USD"
                            sx={{
                              minWidth: "75px",
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
                          <FormControl fullWidth sx={{ m: 1, maxWidth: "70px" }}>
                            <InputLabel htmlFor="amount">Amount</InputLabel>
                            <OutlinedInput
                              id="amount"
                              size="small"
                              sx={{ background: "#fff" }}
                              startAdornment={<InputAdornment position="start">{""}</InputAdornment>}
                              label="Amount"
                            />
                          </FormControl>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>
                              The amount Sale Support will adjust your price by when competing with FBA.
                            </SpanTextSmall>
                          </Hint>
                        </StackItems>

                        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                          <StyledSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                          <BuyBoxStrategyRulesLabel>Price differently against FBM</BuyBoxStrategyRulesLabel>
                        </Box>
                        <StackItems sx={{ marginTop: "0px !important" }}>
                          <Autocomplete
                            disablePortal
                            id="combo-box-choose-option"
                            options={options}
                            sx={{
                              minWidth: "190px",
                              background: "#fff",
                              "& .MuiSvgIcon-root": { color: "#1565D8" },
                            }}
                            renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                          />
                          <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                          <TextField
                            size="small"
                            id="select-currency"
                            select
                            label="Currency"
                            defaultValue="USD"
                            sx={{
                              minWidth: "75px",
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
                          <FormControl fullWidth sx={{ m: 1, maxWidth: "70px" }}>
                            <InputLabel htmlFor="amount">Amount</InputLabel>
                            <OutlinedInput
                              id="amount"
                              size="small"
                              sx={{ background: "#fff" }}
                              startAdornment={<InputAdornment position="start">{""}</InputAdornment>}
                              label="Amount"
                            />
                          </FormControl>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>
                              The amount Sale Support will adjust your price by when competing with FBM.
                            </SpanTextSmall>
                          </Hint>
                        </StackItems>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ background: "#F8FAFB", "& .Mui-expanded": { color: "#1565D8" } }}>
                      <AccordionSummary
                        sx={{
                          padding: "0px",
                          "&.Mui-expanded": {
                            "& > .MuiAccordionSummary-content > .MuiTypography-root": {
                              color: "#1565D8 !important", // Change this to the color you desire
                            },
                          },
                        }}
                        expandIcon={<ArrowOutwardOutlinedIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <BoxText>Competition Rules</BoxText>
                      </AccordionSummary>
                      <AccordionDetails sx={{ padding: "0px" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px", mb: 3 }}>
                          <Box>
                            <BuyBoxStrategyRulesLabel sx={{ marginBottom: "8px" }}>
                              When there is no competition
                            </BuyBoxStrategyRulesLabel>
                            <Autocomplete
                              disablePortal
                              fullWidth
                              id="combo-box-choose-option"
                              options={options}
                              sx={{
                                minWidth: "200px",
                                width: "98%",
                                background: "#fff",
                                "& .MuiSvgIcon-root": { color: "#1565D8" },
                              }}
                              renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                            />
                            <StackItems sx={{ marginTop: "0px !important" }}>
                              <BuyBoxStrategyRulesLabel>Set to</BuyBoxStrategyRulesLabel>
                              <Autocomplete
                                disablePortal
                                id="combo-box-choose-option"
                                options={options}
                                sx={{
                                  minWidth: "155px",
                                  background: "#fff",
                                  "& .MuiSvgIcon-root": { color: "#1565D8" },
                                }}
                                renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                              />
                              <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                              <TextField
                                size="small"
                                id="select-currency"
                                select
                                label="Currency"
                                defaultValue="USD"
                                sx={{
                                  minWidth: "75px",
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
                              <FormControl fullWidth sx={{ m: 1, width: "70px", minWidth: "70px" }}>
                                <InputLabel htmlFor="amount">Amount</InputLabel>
                                <OutlinedInput
                                  id="amount"
                                  size="small"
                                  sx={{ background: "#fff" }}
                                  startAdornment={<InputAdornment position="start">{""}</InputAdornment>}
                                  label="Amount"
                                />
                              </FormControl>
                            </StackItems>
                          </Box>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>
                              Action for Sale Support to take when no competition is found on a listing.
                            </SpanTextSmall>
                          </Hint>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px", mb: 3 }}>
                          <Box>
                            <BuyBoxStrategyRulesLabel sx={{ marginBottom: "8px" }}>
                              When the competition is Below your minimum price
                            </BuyBoxStrategyRulesLabel>
                            <Autocomplete
                              disablePortal
                              fullWidth
                              id="combo-box-choose-option"
                              options={options}
                              sx={{
                                minWidth: "200px",
                                width: "98%",
                                background: "#fff",
                                "& .MuiSvgIcon-root": { color: "#1565D8" },
                              }}
                              renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                            />
                            <StackItems sx={{ marginTop: "0px !important" }}>
                              <BuyBoxStrategyRulesLabel>Set to</BuyBoxStrategyRulesLabel>
                              <Autocomplete
                                disablePortal
                                id="combo-box-choose-option"
                                options={options}
                                sx={{
                                  minWidth: "155px",
                                  background: "#fff",
                                  "& .MuiSvgIcon-root": { color: "#1565D8" },
                                }}
                                renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                              />
                              <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                              <TextField
                                size="small"
                                id="select-currency"
                                select
                                label="Currency"
                                defaultValue="USD"
                                sx={{
                                  minWidth: "75px",
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
                              <FormControl fullWidth sx={{ m: 1, width: "70px", minWidth: "70px" }}>
                                <InputLabel htmlFor="amount">Amount</InputLabel>
                                <OutlinedInput
                                  id="amount"
                                  size="small"
                                  sx={{ background: "#fff" }}
                                  startAdornment={<InputAdornment position="start">{""}</InputAdornment>}
                                  label="Amount"
                                />
                              </FormControl>
                            </StackItems>
                          </Box>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>
                              Action for Sale Support to take when the competition is below your min price.
                            </SpanTextSmall>
                          </Hint>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "15px", mb: 3 }}>
                          <Box>
                            <BuyBoxStrategyRulesLabel sx={{ marginBottom: "8px" }}>
                              When the competition is Above your minimum price
                            </BuyBoxStrategyRulesLabel>
                            <Autocomplete
                              disablePortal
                              fullWidth
                              id="combo-box-choose-option"
                              options={options}
                              sx={{
                                minWidth: "200px",
                                width: "98%",
                                background: "#fff",
                                "& .MuiSvgIcon-root": { color: "#1565D8" },
                              }}
                              renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                            />
                            <StackItems sx={{ marginTop: "0px !important" }}>
                              <BuyBoxStrategyRulesLabel>Set to</BuyBoxStrategyRulesLabel>
                              <Autocomplete
                                disablePortal
                                id="combo-box-choose-option"
                                options={options}
                                sx={{
                                  minWidth: "155px",
                                  background: "#fff",
                                  "& .MuiSvgIcon-root": { color: "#1565D8" },
                                }}
                                renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                              />
                              <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                              <TextField
                                size="small"
                                id="select-currency"
                                select
                                label="Currency"
                                defaultValue="USD"
                                sx={{
                                  minWidth: "75px",
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
                              <FormControl fullWidth sx={{ m: 1, width: "70px", minWidth: "70px" }}>
                                <InputLabel htmlFor="amount">Amount</InputLabel>
                                <OutlinedInput
                                  id="amount"
                                  size="small"
                                  sx={{ background: "#fff" }}
                                  startAdornment={<InputAdornment position="start">{""}</InputAdornment>}
                                  label="Amount"
                                />
                              </FormControl>
                            </StackItems>
                          </Box>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>
                              Action for Sale Support to take when the competition is above your max price.
                            </SpanTextSmall>
                          </Hint>
                        </Box>

                        <StackItems sx={{ mb: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "15px",
                              minWidth: "411px",
                            }}
                          >
                            <StyledSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                            <BuyBoxStrategyRulesLabel>Use max price when out of stock</BuyBoxStrategyRulesLabel>
                          </Box>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>Listings can be set to max price when going out of stock.</SpanTextSmall>
                          </Hint>
                        </StackItems>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ background: "#F8FAFB", "& .Mui-expanded": { color: "#1565D8" } }}>
                      <AccordionSummary
                        sx={{
                          padding: "0px",
                          "&.Mui-expanded": {
                            "& > .MuiAccordionSummary-content > .MuiTypography-root": {
                              color: "#1565D8 !important", // Change this to the color you desire
                            },
                          },
                        }}
                        expandIcon={<ArrowOutwardOutlinedIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <BoxText>Exclude Sellers</BoxText>
                      </AccordionSummary>

                      <AccordionDetails sx={{ padding: "0px" }}>
                        <StackItems sx={{ mb: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "15px",
                              minWidth: "411px",
                            }}
                          >
                            <StyledSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                            <FormControl sx={{ width: "80px", background: "#fff" }} variant="outlined">
                              <OutlinedInput
                                size="small"
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">%</InputAdornment>}
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
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>
                              Sellers that meet or exceed this feedback level will be considered competitors
                            </SpanTextSmall>
                          </Hint>
                        </StackItems>

                        <StackItems sx={{ mb: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "15px",
                              minWidth: "411px",
                            }}
                          >
                            <StyledSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                            <BuyBoxStrategyRulesLabel>Exclude Amazon as a competitor</BuyBoxStrategyRulesLabel>
                          </Box>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>Choose to ignore Amazon when found on a listing.</SpanTextSmall>
                          </Hint>
                        </StackItems>

                        <StackItems sx={{ mb: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "15px",
                              minWidth: "411px",
                            }}
                          >
                            <StyledSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                            <BuyBoxStrategyRulesLabel>Exclude back-ordered sellers</BuyBoxStrategyRulesLabel>
                          </Box>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>Exclude sellers whose inventory is not yet available.</SpanTextSmall>
                          </Hint>
                        </StackItems>

                        <StackItems sx={{ mb: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "15px",
                              minWidth: "411px",
                            }}
                          >
                            <StyledSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                            <BuyBoxStrategyRulesLabel>With Free Shipping</BuyBoxStrategyRulesLabel>
                          </Box>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>Exclude sellers whose entered with free shipping details.</SpanTextSmall>
                          </Hint>
                        </StackItems>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ background: "#F8FAFB", "& .Mui-expanded": { color: "#1565D8" } }}>
                      <AccordionSummary
                        sx={{
                          padding: "0px",
                          "&.Mui-expanded": {
                            "& > .MuiAccordionSummary-content > .MuiTypography-root": {
                              color: "#1565D8 !important", // Change this to the color you desire
                            },
                          },
                        }}
                        expandIcon={<ArrowOutwardOutlinedIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                      >
                        <BoxText>Staying In the Buy Box</BoxText>
                      </AccordionSummary>
                      <AccordionDetails sx={{ padding: "0px" }}>
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
                              <DescriptionText component="div" align="center" sx={{ fontWeight: 600 }}>
                                Maximize your profit in the Buy Box.
                              </DescriptionText>
                            </AboutManualPricingTop>
                            <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                              <AboutManualPricingBottomText component="div" align="start">
                                Getting into the Buy Box, and staying there, can require two different strategies. In
                                this stage, you'll determine the strategy and we will use to maximize your time in the
                                Buy Box once you've won it.
                              </AboutManualPricingBottomText>
                            </AboutManualPricingBottom>
                          </AboutManualPricingContainer>
                        </Item>
                        {/* Containers need to be renaimed */}

                        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                          <BuyBoxStrategyRulesLabel>When you've acquired the buy box</BuyBoxStrategyRulesLabel>
                        </Box>
                        <StackItems sx={{ marginTop: "0px !important" }}>
                          <Autocomplete
                            disablePortal
                            id="combo-box-choose-option"
                            options={options}
                            sx={{
                              minWidth: "190px",
                              background: "#fff",
                              "& .MuiSvgIcon-root": { color: "#1565D8" },
                            }}
                            renderInput={(params) => <TextField {...params} size="small" label="Choose Option" />}
                          />
                          <BuyBoxStrategyRulesLabel>by</BuyBoxStrategyRulesLabel>
                          <TextField
                            size="small"
                            id="select-currency"
                            select
                            label="Currency"
                            defaultValue="USD"
                            sx={{
                              minWidth: "75px",
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
                          <FormControl fullWidth sx={{ m: 1, maxWidth: "70px" }}>
                            <InputLabel htmlFor="amount">Amount</InputLabel>
                            <OutlinedInput
                              id="amount"
                              size="small"
                              sx={{ background: "#fff" }}
                              startAdornment={<InputAdornment position="start">{""}</InputAdornment>}
                              label="Amount"
                            />
                          </FormControl>
                          <Hint>
                            <Box component="img" src={lightBulb} />
                            <SpanTextSmall>
                              The action Sale Support will take to keep you in the buy box for longer.
                            </SpanTextSmall>
                          </Hint>
                        </StackItems>
                      </AccordionDetails>
                    </Accordion>
                  </>
                )}

                {/* Low Price Substrategy */}
                {/* {substrategyType === "lowPrice" && <Box></Box>} */}

                <NavigationButtonsContainer>
                  <BackButton
                    variant="contained"
                    startIcon={<KeyboardBackspaceOutlinedIcon />}
                    onClick={handleStrategyTypeClick(step, 1, null, null, minMaxType, products)}
                  >
                    Back
                  </BackButton>
                  <BlueButton
                    variant="contained"
                    endIcon={<EastOutlinedIcon />}
                    disabled={!substrategyType}
                    onClick={handleStrategyTypeClick(
                      2,
                      3,
                      strategyType,
                      substrategyType,
                      minMaxType,
                      products,
                      true,
                      false
                    )}
                  >
                    Next
                  </BlueButton>
                </NavigationButtonsContainer>
              </AiProfilesContainer>
            </>
          )}
        </>
      )}

      {strategyStep === 3 && (
        <>
          <TextContainer>
            <HeaderText align="center" variant="h5" component="div">
              Adjust Min/Max Price
            </HeaderText>
            <DescriptionText gutterBottom component="div" align="center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </DescriptionText>
          </TextContainer>

          <StyledStack spacing={4}>
            <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
              {chooseStrategySteps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </StyledStack>

          <AdjustMinMaxContainer>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grow in={true}>
                  <Item>
                    <MinMaxTypeSelect active={minMaxType === "manual"} onClick={handleMinMaxTypeClick("manual")}>
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
                    <MinMaxTypeSelect active={minMaxType === "roi"} onClick={handleMinMaxTypeClick("roi")}>
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
                      active={minMaxType === "profitMargin"}
                      onClick={handleMinMaxTypeClick("profitMargin")}
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
                      active={minMaxType === "fixedProfit"}
                      onClick={handleMinMaxTypeClick("fixedProfit")}
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

            {minMaxType === "manual" && (
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
                        <DescriptionText component="div" align="center" sx={{ fontWeight: 600 }}>
                          About Manual Pricing Method
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                        <AboutManualPricingBottomText component="div" align="left">
                          You'll have to manually specify the minimum and maximum prices for each listing under the
                          Catalogs page.
                        </AboutManualPricingBottomText>
                      </AboutManualPricingBottom>
                    </AboutManualPricingContainer>
                  </Item>
                </Grid>

                <Grid item xs={12}>
                  <Item>
                    <AboutManualPricingContainer>
                      <AboutManualPricingTop>
                        <DescriptionText component="div" align="center" sx={{ fontWeight: 700 }}>
                          Upload File for Manual Price
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom>
                        <AboutManualPricingUploadBox>
                          {isManualFileUploaded === 1 && (
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
                                Drag file here to upload, or click to browse, Only CSV files are supported
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
                              <Button variant="outlined" onClick={() => minMaxPriceUploadHandleClick()}>
                                Upload File
                              </Button>
                              <DescriptionText component="div" align="center" sx={{ color: "#00A3FF!important" }}>
                                You can skip uploading file here and set Manual Price Later
                              </DescriptionText>
                            </>
                          )}
                          {isManualFileUploaded === 2 && (
                            <>
                              <SubheaderText sx={{ marginBottom: "12px" }}>
                                Your Data is being synchronized
                              </SubheaderText>
                              <Box
                                sx={{ maxHeight: "130px", height: "130px" }}
                                component="img"
                                src={cloud}
                                alt="Cloud"
                              />
                              <SpanText>It won't take more than two minutes</SpanText>
                            </>
                          )}
                          {isManualFileUploaded === 3 && (
                            <>
                              <SubheaderText sx={{ marginBottom: "12px", color: "#009C34 !important" }}>
                                Your Data Successfully Uploaded!
                              </SubheaderText>
                              <Box
                                sx={{ maxHeight: "130px", height: "130px" }}
                                component="img"
                                src={cloudSuccess}
                                alt="Cloud"
                              />
                              <SpanText>CSV_Data_2023_5_22 14_54_22.csv</SpanText>
                            </>
                          )}
                        </AboutManualPricingUploadBox>
                      </AboutManualPricingBottom>
                    </AboutManualPricingContainer>
                  </Item>
                </Grid>

                {isManualFileUploaded === 3 && (
                  <>
                    <Grid item xs={12}>
                        <StyledTableContainer>
                          <Table aria-label="customized table">
                            <TableHead>
                              <TableRow>
                                <StyledTableCell align="center">File Name</StyledTableCell>
                                <StyledTableCell align="center">File Status</StyledTableCell>
                                <StyledTableCell align="center">Output</StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowForFile.map((row) => (
                                <StyledTableRow key={row.fileName}>
                                  <StyledTableCell align="center">{`Label Name.csv`}</StyledTableCell>
                                  <StyledTableCell align="center">
                                    <FileStatusContainer>
                                      <FileStatusLineSuccess />
                                      <Box component="img" src={completedLoading} sx={{ width: "14px", height: "14px" }} />
                                    </FileStatusContainer>
                                  </StyledTableCell>
                                  <StyledTableCell align="center">
                                    <BlueButton variant="contained" startIcon={<FileDownloadOutlinedIcon />}>
                                      Download
                                    </BlueButton>
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </StyledTableContainer>
                    </Grid>
                  </>
                )}
              </Grid>
            )}

            {minMaxType === "roi" && (
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
                          <DescriptionText component="div" align="left" sx={{ fontWeight: 600 }}>
                            About ROI Based Pricing Method
                          </DescriptionText>
                        </AboutManualPricingTop>
                        <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                          <AboutManualPricingBottomText component="div" align="left">
                            By selecting the ROI based pricing method, we will set the minimum and maximum prices for
                            each listing dynamically based on the minimum and maximum return on investment that is set
                            for this strategy. Your cost for each listing connected to this strategy will need to be
                            set.
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
                        <DescriptionText component="div" align="center" sx={{ fontWeight: 700 }}>
                          Sample ROI Calculation
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom>
                        <ProductForCalculationContainer>
                          <ProductForCalculationImageBox component="img" src={productExampleImage} />
                          <ProductForCalculationDetails>
                            <ProductForCalculationName gutterBottom>
                              3 plus vibe pro smart watch series
                            </ProductForCalculationName>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>Material:</ParamText>
                              <ParamText>10.1 FL OZ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>ASIN:</ParamText>
                              <ParamText>B075VQ3YJQ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>Cost Price:</ParamText>
                              <ParamText>$12.80</ParamText>
                            </ProductForCalculationParam>
                          </ProductForCalculationDetails>

                          <ProductForCalculationDetails sx={{ alignItems: "end" }}>
                            <BlueButton sx={{ padding: "0px 30px" }}>Try another product</BlueButton>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {/* Should be renamed in future */}
                              <BuyBoxStrategyRulesLabel>MIN return on investment</BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={<InputAdornment position="start">%</InputAdornment>}
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
                              <BuyBoxStrategyRulesLabel>MAX return on investment</BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                />
                              </FormControl>
                            </Box>
                          </ProductForCalculationDetails>
                        </ProductForCalculationContainer>

                        <Divider sx={{ margin: "20px", width: "100%" }} variant="middle" />

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
                              <RoundChartText gutterBottom sx={{ color: "#00A3FF" }}>
                                $ 25.12
                              </RoundChartText>
                              <AboutManualPricingBottomText sx={{ fontWeight: "600" }} component="div" align="center">
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
                              <RoundChartText gutterBottom sx={{ color: "#FF9900" }}>
                                $ 40.02
                              </RoundChartText>
                              <AboutManualPricingBottomText sx={{ fontWeight: "600" }} component="div" align="center">
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
            {minMaxType === "profitMargin" && (
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
                          <DescriptionText component="div" align="left" sx={{ fontWeight: 600 }}>
                            About Profit Margin Pricing Method
                          </DescriptionText>
                        </AboutManualPricingTop>
                        <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                          <AboutManualPricingBottomText component="div" align="left">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
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
                        <DescriptionText component="div" align="center" sx={{ fontWeight: 700 }}>
                          Sample Profit Margin Calculation
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom>
                        <ProductForCalculationContainer>
                          <ProductForCalculationImageBox component="img" src={productExampleImage} />
                          <ProductForCalculationDetails>
                            <ProductForCalculationName gutterBottom>
                              3 plus vibe pro smart watch series
                            </ProductForCalculationName>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>Material:</ParamText>
                              <ParamText>10.1 FL OZ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>ASIN:</ParamText>
                              <ParamText>B075VQ3YJQ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>Cost Price:</ParamText>
                              <ParamText>$12.80</ParamText>
                            </ProductForCalculationParam>
                          </ProductForCalculationDetails>

                          <ProductForCalculationDetails sx={{ alignItems: "end" }}>
                            <BlueButton sx={{ padding: "0px 30px" }}>Try another product</BlueButton>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {/* Should be renamed in future */}
                              <BuyBoxStrategyRulesLabel>MIN return on investment</BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={<InputAdornment position="start">%</InputAdornment>}
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
                              <BuyBoxStrategyRulesLabel>MAX return on investment</BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                />
                              </FormControl>
                            </Box>
                          </ProductForCalculationDetails>
                        </ProductForCalculationContainer>

                        <Divider sx={{ margin: "20px", width: "100%" }} variant="middle" />

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
                              <RoundChartText gutterBottom sx={{ color: "#00A3FF" }}>
                                $ 25.12
                              </RoundChartText>
                              <AboutManualPricingBottomText sx={{ fontWeight: "600" }} component="div" align="center">
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
                              <RoundChartText gutterBottom sx={{ color: "#FF9900" }}>
                                $ 40.02
                              </RoundChartText>
                              <AboutManualPricingBottomText sx={{ fontWeight: "600" }} component="div" align="center">
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
            {minMaxType === "fixedProfit" && (
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
                          <DescriptionText component="div" align="left" sx={{ fontWeight: 600 }}>
                            About Fixed Profit Pricing Method
                          </DescriptionText>
                        </AboutManualPricingTop>
                        <AboutManualPricingBottom sx={{ alignItems: "start" }}>
                          <AboutManualPricingBottomText component="div" align="left">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
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
                        <DescriptionText component="div" align="center" sx={{ fontWeight: 700 }}>
                          Sample Fixed Profit Calculation
                        </DescriptionText>
                      </AboutManualPricingTop>
                      <AboutManualPricingBottom>
                        <ProductForCalculationContainer>
                          <ProductForCalculationImageBox component="img" src={productExampleImage} />
                          <ProductForCalculationDetails>
                            <ProductForCalculationName gutterBottom>
                              3 plus vibe pro smart watch series
                            </ProductForCalculationName>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>Material:</ParamText>
                              <ParamText>10.1 FL OZ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>ASIN:</ParamText>
                              <ParamText>B075VQ3YJQ</ParamText>
                            </ProductForCalculationParam>
                            <ProductForCalculationParam>
                              <ParamText sx={{ fontWeight: 700 }}>Cost Price:</ParamText>
                              <ParamText>$12.80</ParamText>
                            </ProductForCalculationParam>
                          </ProductForCalculationDetails>

                          <ProductForCalculationDetails sx={{ alignItems: "end" }}>
                            <BlueButton sx={{ padding: "0px 30px" }}>Try another product</BlueButton>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {/* Should be renamed in future */}
                              <BuyBoxStrategyRulesLabel>MIN return on investment</BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={<InputAdornment position="start">%</InputAdornment>}
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
                              <BuyBoxStrategyRulesLabel>MAX return on investment</BuyBoxStrategyRulesLabel>
                              <FormControl>
                                <OutlinedInput
                                  id="min-return"
                                  size="small"
                                  sx={{ background: "#fff", width: "80px" }}
                                  startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                />
                              </FormControl>
                            </Box>
                          </ProductForCalculationDetails>
                        </ProductForCalculationContainer>

                        <Divider sx={{ margin: "20px", width: "100%" }} variant="middle" />

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
                              <RoundChartText gutterBottom sx={{ color: "#00A3FF" }}>
                                $ 25.12
                              </RoundChartText>
                              <AboutManualPricingBottomText sx={{ fontWeight: "600" }} component="div" align="center">
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
                              <RoundChartText gutterBottom sx={{ color: "#FF9900" }}>
                                $ 40.02
                              </RoundChartText>
                              <AboutManualPricingBottomText sx={{ fontWeight: "600" }} component="div" align="center">
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
                onClick={handleStrategyTypeClick(1, 2, strategyType, null, null, products, false, true)}
              >
                Back
              </BackButton>
              <BlueButton
                disabled={!minMaxType}
                variant="contained"
                endIcon={<EastOutlinedIcon />}
                onClick={handleStrategyTypeClick(
                  3,
                  4,
                  strategyType,
                  substrategyType,
                  minMaxType,
                  products,
                  true,
                  false
                )}
              >
                Assign and proceed
              </BlueButton>
            </NavigationButtonsContainer>
          </AdjustMinMaxContainer>
        </>
      )}

      {strategyStep === 4 && (
        <>
          <TextContainer>
            <HeaderText align="center" variant="h5" component="div">
              Assign Strategy to Products
            </HeaderText>
            <DescriptionText gutterBottom component="div" align="center">
              By checking below option, you are going to assign this strategy to all these products which have not been
              assigned any strategy yet and replace the default strategy of the group you select below (FBA, FBM or
              Both)
            </DescriptionText>
          </TextContainer>

          <StyledStack spacing={4}>
            <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
              {chooseStrategySteps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
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
                  onChange={handleAssignStrategyToProductsChange}
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
                          564
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
                          433
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
                          621
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
                            677
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
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openModalForSelectProducts}
              onClose={() => setOpenModalForSelectProducts(false)}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              {/* Modal Content */}
              <Box sx={style}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <HeaderText>Custom Products ({rows.length})</HeaderText>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "250px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => <TextField {...params} size="small" label="Product Status" />}
                    />
                    <Autocomplete
                      disablePortal
                      id="combo-box-choose-option"
                      options={options}
                      sx={{
                        minWidth: "250px",
                        background: "#fff",
                        "& .MuiSvgIcon-root": { color: "#1565D8" },
                      }}
                      renderInput={(params) => <TextField {...params} size="small" label="Cost Price" />}
                    />
                  </Box>
                </Box>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10, 25, 50]}
                  checkboxSelection
                />
                <Box
                  sx={{
                    display: "flex",
                    margin: "20px 0px",
                    justifyContent: "right",
                  }}
                >
                  <BlueButton
                    sx={{ padding: "0px 20px" }}
                    onClick={handleStrategyTypeClick(
                      step,
                      strategyStep,
                      strategyType,
                      substrategyType,
                      minMaxType,
                      products,
                      true,
                      false
                    )}
                  >
                    Select Custom Products
                  </BlueButton>
                </Box>
              </Box>
            </Modal>
          </AssignStrategyToProductsContainer>

          <NavigationButtonsContainer sx={{ margin: "20px" }}>
            <BackButton
              variant="contained"
              startIcon={<KeyboardBackspaceOutlinedIcon />}
              onClick={handleStrategyTypeClick(2, 3, strategyType, substrategyType, null, null, false, false, true)}
            >
              Back
            </BackButton>
            <BlueButton
              disabled={!assignStrategyToProducts}
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
