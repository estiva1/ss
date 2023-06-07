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

import { useState } from "react";
import BigButton from "../turnOnButton/turnOnButton.component";
import CostUploader from "../costUploader/costUploader.component";
import SelectMarketplace from "../selectMarketplace/selectMarketplace.component";
import {
  Avatar,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  ChooseStrategyButton,
  DescriptionText,
  Dot,
  HeaderText,
  ImageBox,
  StrategyChip,
  StrategyImageBox,
  StrategyName,
  StrategyType,
  StrategyTypesContainer,
  StyledAccordion,
  StyledListItemAvatar,
  StyledPaper,
  StyledPaperRight,
  StyledStack,
  TextContainer,
} from "./guide.styles";
import { cloneElement } from "react";

const TransparentButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#F8FAFB"),
  backgroundColor: "#F8FAFB",
  "&:hover": {
    backgroundColor: "#F8FAFB",
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

//-------------------------------
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(136deg, rgb(37,170,225) 0%, rgb(68,129,235) 50%, rgb(4,190,254) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(136deg, rgb(37,170,225) 0%, rgb(68,129,235) 50%, rgb(4,190,254) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(136deg, rgb(37,170,225) 0%, rgb(68,129,235) 50%, rgb(4,190,254) 100%)",
    boxShadow:
      "0px 6px 12px 0px rgba(0,0,0,.25), 0px 0px 0px 10px #fff, inset 0px 0px 0px 0px #fff",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(136deg, rgb(37,170,225) 0%, rgb(68,129,235) 50%, rgb(4,190,254) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PowerSettingsNewOutlinedIcon />,
    2: <PaymentsOutlinedIcon />,
    3: <OpenWithOutlinedIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
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
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const mainSteps = ["Authorize Marketplace", "Add Cost", "Choose Strategy"];
const chooseStrategySteps = ["", "", "", "", ""];

//-------------------------------

function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

const Guide = () => {
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [strategyStep, setStrategyStep] = useState(0);

  const [strategyType, setStrategyType] = useState(null);
  const handleStrategyTypeChange = (strategy, step) => (event) => {
    setStrategyType(strategy);
    setStrategyStep(step);
  };

  const [strategy, setStrategy] = useState("");
  const handleChangeStrategy = (event) => {
    setStrategy(event.target.value);
  };

  return (
    <Grid container spacing={0}>
      {/* grid for side steps */}
      <Grid item xs={4} sx={{ margin: "20px" }}>
        <StyledPaper>
          <StyledAccordion
            sx={{ paddingBottom: "40px" }} //for the power button
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ArrowOutwardOutlinedIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <ImageBox component="img" src={power} />
              <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                1. Authorize Marketplace
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Let AI Repricer determine the optimal strategy in real time for
                any of your listings. No more micro-management of your listings.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <BigButton />
        </StyledPaper>

        <StyledPaper>
          <StyledAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ArrowOutwardOutlinedIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <ImageBox component="img" src={cube} />
              <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                2. Add Cost
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Let AI Repricer determine the optimal strategy in real time for
                any of your listings. No more micro-management of your listings.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </StyledPaper>

        <StyledPaper>
          <StyledAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ArrowOutwardOutlinedIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <ImageBox component="img" src={wind} />
              <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                3. Choose Strategy
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Maximize sales with Sales.Support's AI and ML algorithms.
                Dominate the Buy Box with optimized pricing strategies.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </StyledPaper>
        {/* end of grid for side steps */}
      </Grid>

      <Grid item xs={7} sx={{ margin: "20px" }}>
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={
              expanded === "panel1"
                ? "1" && 0
                : expanded === "panel2"
                ? "2" && 1
                : expanded === "panel3"
                ? "3" && 2
                : "1"
            }
            connector={<ColorlibConnector />}
          >
            {mainSteps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>

        <StyledPaperRight>
          {expanded === "panel1" ? (
            <SelectMarketplace />
          ) : expanded === "panel2" ? (
            <CostUploader />
          ) : (
            <Box>
              <TextContainer>
                <HeaderText align="center" variant="h5" component="div">
                  {strategyType === null
                    ? "Choose one"
                    : strategyType === "ai"
                    ? "Choose Ai Profile"
                    : strategyType === "madmax"
                    ? "Adjust Min/Max Price"
                    : strategyType === "manual"
                    ? "Assign Strategy to Products"
                    : "Review Your Strategy"}
                </HeaderText>
                <DescriptionText gutterBottom component="div" align="center">
                  {strategyType === null
                    ? "Strategies are your unique repricing rules that determine exactly how your listings will compete against other sellers on the marketplace. Please choose the strategy you would like to create."
                    : strategyType === "ai"
                    ? "There are Algorithmic base Strategies are your unique repricing rules that determine exactly how your listings will compete against other sellers on the marketplace. Please choose any one strategy you would like to create."
                    : strategyType === "madmax"
                    ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    : strategyType === "manual"
                    ? "By checking below option, you are going to assign this strategy to all these products which have not been assigned any strategy yet and replace the default strategy of the group you select below (FBA, FBM or Both)"
                    : "Look things over before your strategy is created. You can come back at any time to tweak your strategies by finding them in the Strategies section, found in the left hand sidebar"}
                </DescriptionText>
              </TextContainer>

              <StyledStack spacing={4}>
                <Stepper
                  alternativeLabel
                  activeStep={strategyStep}
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

              {strategyType === null ? (
                <StrategyTypesContainer>
                  <StrategyType>
                    <StrategyChip
                      label="FAST ROUTE"
                      color="success"
                      icon={<BoltOutlinedIcon />}
                    />
                    <StrategyImageBox component="img" src={aiStrategyLogo} />
                    <StrategyName gutterBottom align="center" component="div">
                      Ai Powered Strategy
                    </StrategyName>
                    <List dense={true}>
                      {generate(
                        <ListItem>
                          <StyledListItemAvatar>
                            <CircleIcon
                              sx={{ width: "8px", color: "#4E5969" }}
                            />
                          </StyledListItemAvatar>
                          <ListItemText
                            sx={{ color: "#4E5969" }}
                            primary="Lorem ipsum dolor sit amet, conse"
                          />
                        </ListItem>
                      )}
                    </List>
                    <ChooseStrategyButton
                      variant="contained"
                      onClick={handleStrategyTypeChange("ai", 1)}
                    >
                      Choose Strategy
                    </ChooseStrategyButton>
                  </StrategyType>
                  <StrategyType>
                    <StrategyChip
                      label="PERSONALIZED"
                      color="primary"
                      icon={<TuneOutlinedIcon />}
                    />
                    <StrategyImageBox
                      component="img"
                      src={customStrategyLogo}
                    />
                    <StrategyName gutterBottom align="center" component="div">
                      Custom Rules Strategy
                    </StrategyName>
                    <List dense={true}>
                      {generate(
                        <ListItem>
                          <StyledListItemAvatar>
                            <CircleIcon
                              sx={{ width: "8px", color: "#4E5969" }}
                            />
                          </StyledListItemAvatar>
                          <ListItemText
                            sx={{ color: "#4E5969" }}
                            primary="Lorem ipsum dolor sit amet, conse"
                          />
                        </ListItem>
                      )}
                    </List>
                    <ChooseStrategyButton
                      variant="contained"
                      onClick={handleStrategyTypeChange("custom", 1)}
                    >
                      Choose Strategy
                    </ChooseStrategyButton>
                  </StrategyType>
                </StrategyTypesContainer>
              ) : strategyType === "ai" ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "20px",
                    background: "#F8FAFB",
                    gap: "15px",
                  }}
                >
                  <Button
                    sx={{
                      padding: "0px",
                      textTransform: "none",
                      borderRadius: "16px",
                    }}
                    onClick={handleStrategyTypeChange("madmax", 2)}
                  >
                    <Paper
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #00A3FF",
                        borderRadius: "16px",
                        width: "280px",
                        height: "80px",
                        background: "#FFFFFF",
                      }}
                    >
                      <Typography
                        gutterBottom
                        align="center"
                        variant="h5"
                        component="div"
                        sx={{
                          fontWeight: "700",
                          color: "#000",
                          fontSize: "18px",
                        }}
                      >
                        MadMax
                      </Typography>
                    </Paper>
                  </Button>
                  <Button
                    sx={{
                      padding: "0px",
                      textTransform: "none",
                      borderRadius: "16px",
                    }}
                    onClick={handleStrategyTypeChange("madmax", 2)}
                  >
                    <Paper
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #00A3FF",
                        borderRadius: "16px",
                        width: "280px",
                        height: "80px",
                        background: "#FFFFFF",
                      }}
                    >
                      <Typography
                        gutterBottom
                        align="center"
                        variant="h5"
                        component="div"
                        sx={{
                          fontWeight: "700",
                          color: "#000",
                          fontSize: "18px",
                        }}
                      >
                        Slow and Steady
                      </Typography>
                    </Paper>
                  </Button>
                </Box>
              ) : strategyType === "madmax" ? (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignSelf: "center",
                      padding: "20px",
                      background: "#F8FAFB",
                      gap: "15px",
                    }}
                  >
                    <Button
                      sx={{
                        padding: "0px",
                        textTransform: "none",
                        borderRadius: "16px",
                      }}
                      onClick={handleStrategyTypeChange("manual", 3)}
                    >
                      <Paper
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid #00A3FF",
                          borderRadius: "16px",
                          width: "280px",
                          height: "120px",
                          background: "#FFFFFF",
                        }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            gutterBottom
                            component="div"
                            sx={{
                              fontSize: "16px",
                              color: "#4E5969",
                              lineHeight: "16px",
                            }}
                            align="center"
                          >
                            Manual
                          </Typography>
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
                            <Typography
                              gutterBottom
                              align="center"
                              variant="h5"
                              component="div"
                              sx={{
                                fontWeight: "700",
                                color: "#000",
                                fontSize: "18px",
                              }}
                            >
                              Manual
                            </Typography>
                          </Box>
                          <Typography
                            gutterBottom
                            component="div"
                            sx={{
                              marginTop: "10px",
                              fontSize: "12px",
                              color: "#4E5969",
                              lineHeight: "18px",
                            }}
                            align="center"
                          >
                            Manual min/max for each listing
                          </Typography>
                        </Box>
                      </Paper>
                    </Button>
                    <Button
                      sx={{
                        padding: "0px",
                        textTransform: "none",
                        borderRadius: "16px",
                      }}
                      onClick={handleStrategyTypeChange("madmax", 2)}
                    >
                      <Paper
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid #00A3FF",
                          borderRadius: "16px",
                          width: "280px",
                          height: "120px",
                          background: "#FFFFFF",
                        }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            gutterBottom
                            component="div"
                            sx={{
                              fontSize: "16px",
                              color: "#4E5969",
                              lineHeight: "16px",
                            }}
                            align="center"
                          >
                            Automatic
                          </Typography>
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
                            <Typography
                              gutterBottom
                              align="center"
                              variant="h5"
                              component="div"
                              sx={{
                                fontWeight: "700",
                                color: "#000",
                                fontSize: "18px",
                              }}
                            >
                              ROI
                            </Typography>
                          </Box>
                          <Typography
                            gutterBottom
                            component="div"
                            sx={{
                              marginTop: "10px",
                              fontSize: "12px",
                              color: "#4E5969",
                              lineHeight: "18px",
                            }}
                            align="center"
                          >
                            Calculation based on return on investment
                          </Typography>
                        </Box>
                      </Paper>
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "20px",
                      background: "#F8FAFB",
                      gap: "15px",
                    }}
                  >
                    <Button
                      sx={{
                        padding: "0px",
                        textTransform: "none",
                        borderRadius: "16px",
                      }}
                      onClick={handleStrategyTypeChange("madmax", 2)}
                    >
                      <Paper
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid #00A3FF",
                          borderRadius: "16px",
                          width: "280px",
                          height: "120px",
                          background: "#FFFFFF",
                        }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            gutterBottom
                            component="div"
                            sx={{
                              fontSize: "16px",
                              color: "#4E5969",
                              lineHeight: "16px",
                            }}
                            align="center"
                          >
                            Automatic
                          </Typography>
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
                            <Typography
                              gutterBottom
                              align="center"
                              variant="h5"
                              component="div"
                              sx={{
                                fontWeight: "700",
                                color: "#000",
                                fontSize: "18px",
                              }}
                            >
                              Profit Margin
                            </Typography>
                          </Box>
                          <Typography
                            gutterBottom
                            component="div"
                            sx={{
                              marginTop: "10px",
                              fontSize: "12px",
                              color: "#4E5969",
                              lineHeight: "18px",
                            }}
                            align="center"
                          >
                            Calculation based on profit margin
                          </Typography>
                        </Box>
                      </Paper>
                    </Button>
                    <Button
                      sx={{
                        padding: "0px",
                        textTransform: "none",
                        borderRadius: "16px",
                      }}
                      onClick={handleStrategyTypeChange("madmax", 2)}
                    >
                      <Paper
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid #00A3FF",
                          borderRadius: "16px",
                          width: "280px",
                          height: "120px",
                          background: "#FFFFFF",
                        }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            gutterBottom
                            component="div"
                            sx={{
                              fontSize: "16px",
                              color: "#4E5969",
                              lineHeight: "16px",
                            }}
                            align="center"
                          >
                            Automatic
                          </Typography>
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
                            <Typography
                              gutterBottom
                              align="center"
                              variant="h5"
                              component="div"
                              sx={{
                                fontWeight: "700",
                                color: "#000",
                                fontSize: "18px",
                              }}
                            >
                              Fixed Profit
                            </Typography>
                          </Box>
                          <Typography
                            gutterBottom
                            component="div"
                            sx={{
                              marginTop: "10px",
                              fontSize: "12px",
                              color: "#4E5969",
                              lineHeight: "18px",
                            }}
                            align="center"
                          >
                            Calculation based on fixed amount of profit
                          </Typography>
                        </Box>
                      </Paper>
                    </Button>
                  </Box>
                </Box>
              ) : strategyType === "manual" ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "20px",
                    background: "#F8FAFB",
                  }}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={strategy}
                      onChange={handleChangeStrategy}
                    >
                      <Paper
                        sx={{
                          margin: "10px",
                          paddingLeft: "20px",
                          border: "1px solid #00A3FF",
                          borderRadius: "16px",
                          width: "540px",
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
                      </Paper>
                      <Paper
                        sx={{
                          margin: "10px",
                          paddingLeft: "20px",
                          border: "1px solid #00A3FF",
                          borderRadius: "16px",
                          width: "540px",
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
                          width: "540px",
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
                          width: "540px",
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
                              555
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
                          width: "540px",
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
                                Apply Later
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
                    </RadioGroup>
                  </FormControl>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                      justifyContent: "end",
                    }}
                  >
                    <TransparentButton
                      sx={{
                        height: "40px",
                        width: "100px",
                        border: "none",
                        borderRadius: "10px",
                        marginTop: "30px",
                      }}
                      variant="contained"
                      onClick={handleStrategyTypeChange("madmax", 2)}
                    >
                      Back
                    </TransparentButton>
                    <ChooseStrategyButton
                      sx={{
                        height: "40px",
                        width: "250px",
                        border: "1px solid #0A3DB0",
                        borderRadius: "10px",
                        marginTop: "30px",
                      }}
                      variant="contained"
                      onClick={handleStrategyTypeChange("review", 4)}
                    >
                      Review the Strategy
                    </ChooseStrategyButton>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "20px",
                    background: "#F8FAFB",
                  }}
                >
                  <Grid container spacing={1} sx={{ marginTop: "10px" }}>
                    <Grid item xs={6} md={6}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignContent: "center",
                          background: "#F8FAFB",
                        }}
                      >
                        <Typography sx={{ fontWeight: "700" }}>
                          Type of Strategy &#62;
                        </Typography>
                        <Typography
                          sx={{ color: "#1565D8", marginLeft: "5px" }}
                        >
                          Strategy name
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Chip
                        label="This Ai Powered strategy that can be tailor fit for any situation"
                        color="warning"
                        icon={<TipsAndUpdatesOutlinedIcon />}
                        sx={{
                          padding: "20px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} sx={{ marginTop: "10px" }}>
                    <Grid item xs={6} md={6}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignContent: "center",
                          background: "#F8FAFB",
                        }}
                      >
                        <Typography sx={{ fontWeight: "700" }}>
                          Competition Type &#62;
                        </Typography>
                        <Typography
                          sx={{ color: "#1565D8", marginLeft: "5px" }}
                        >
                          Strategy name
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Chip
                        label="The type of competition that your listings will compete against"
                        color="warning"
                        icon={<TipsAndUpdatesOutlinedIcon />}
                        sx={{
                          padding: "20px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} sx={{ marginTop: "10px" }}>
                    <Grid item xs={6} md={6}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignContent: "center",
                          background: "#F8FAFB",
                        }}
                      >
                        <Typography sx={{ fontWeight: "700" }}>
                          Minimum Price &#62;
                        </Typography>
                        <Typography
                          sx={{ color: "#1565D8", marginLeft: "5px" }}
                        >
                          Minimum Price
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Chip
                        label="The ROI based minimum pricing method used for listings"
                        color="warning"
                        icon={<TipsAndUpdatesOutlinedIcon />}
                        sx={{
                          padding: "20px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} sx={{ marginTop: "10px" }}>
                    <Grid item xs={6} md={6}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignContent: "center",
                          background: "#F8FAFB",
                        }}
                      >
                        <Typography sx={{ fontWeight: "700" }}>
                          Maximum Price &#62;
                        </Typography>
                        <Typography
                          sx={{ color: "#1565D8", marginLeft: "5px" }}
                        >
                          Maximum Price
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Chip
                        label="The ROI based maximum pricing method used for listings"
                        color="warning"
                        icon={<TipsAndUpdatesOutlinedIcon />}
                        sx={{
                          padding: "20px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} sx={{ marginTop: "10px" }}>
                    <Grid item xs={6} md={6}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignContent: "center",
                          background: "#F8FAFB",
                        }}
                      >
                        <Typography sx={{ fontWeight: "700" }}>
                          Assigned Strategy &#62;
                        </Typography>
                        <Typography
                          sx={{ color: "#1565D8", marginLeft: "5px" }}
                        >
                          Assigned Strategy
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Chip
                        label="Lorem ipsum dolor amnia strait"
                        color="warning"
                        icon={<TipsAndUpdatesOutlinedIcon />}
                        sx={{
                          padding: "20px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          )}
        </StyledPaperRight>
      </Grid>
    </Grid>
  );
};

export default Guide;
