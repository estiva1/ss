import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Chip, Divider, Grid, Paper, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import {
  CostUploaderButtonsContainer,
  CostUploaderContainer,
  FileStatusContainer,
  FileStatusLineSuccess,
  HeaderText,
  SpanText,
  StyledPaper,
  StyledTableContainer,
  SubheaderText,
  TableDescriptionText,
  TextContainer,
} from "./costUploader.styles";
import { BlueButton } from "../buttons/blueButton.styles";
import { WhiteButton } from "../buttons/whiteButton.styles";

import dragndrop from "../../assets/dragndrop.png";
import cloud from "../../assets/ai-repricer/cloud.png";
import close from "../../assets/ai-repricer/close-button.svg";
import completed from "../../assets/ai-repricer/completed.png";
import cloudSuccess from "../../assets/ai-repricer/cloud-success.png";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
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

function createData(sku, cost, vendorPreference) {
  return { sku, cost, vendorPreference };
}

const rows = [
  createData("", "", ""),
  createData("", "", ""),
  createData("", "", ""),
  createData("", "", ""),
  createData("", "", ""),
];

function fileUploaded(fileName, fileStatus, output) {
  return { fileName, fileStatus, output };
}

const rowForFile = [fileUploaded("", "", "")];

const CostUploader = () => {
  //const [isFileToLoad, setIsFileToLoad] = useState(true);
  const [isFileLoading, setIsFileLoading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const [currentState, setCurrentState] = useState(1);

  const handleClick = () => {
    setCurrentState(3);
  };

  return (
    <>
      {currentState === 1 && (
        <>
          <CostUploaderContainer>
            <StyledPaper sx={{ background: "#fff !important", width: "390px", height: "250px" }}>
              <SubheaderText sx={{ marginBottom: "12px" }}>Your Data is being synchronized</SubheaderText>
              <Box sx={{ maxHeight: "120px", height: "120px" }} component="img" src={cloud} alt="Cloud" />
              <SpanText>It won't take more than two minutes</SpanText>
            </StyledPaper>
          </CostUploaderContainer>
          <Box visibility="hidden" sx={{ position: "absolute" }}>
            {setTimeout(() => {
              setCurrentState(2);
            }, 2000)}
          </Box>
        </>
      )}

      {currentState === 2 && (
        <CostUploaderContainer>
          <StyledPaper sx={{ position: "relative", background: "#fff !important", width: "390px", height: "250px" }}>
            <SubheaderText sx={{ marginBottom: "12px", color: "#009C34 !important" }}>
              Your Data Successfully Synchronized!
            </SubheaderText>
            <Box sx={{ maxHeight: "120px", height: "120px" }} component="img" src={cloudSuccess} alt="Cloud Success" />
            <SpanText>You can go further and Add Cost</SpanText>
            <Box
              sx={{
                position: "absolute",
                maxHeight: "12px",
                height: "12px",
                top: "16px",
                right: "16px",
                cursor: "pointer",
              }}
              component="img"
              src={close}
              alt="Cloud"
              onClick={() => setCurrentState(3)}
            />
          </StyledPaper>
        </CostUploaderContainer>
      )}

      {currentState === 3 && (
        <>
          <TextContainer>
            <HeaderText>Ai Repricer Cost Uploader</HeaderText>
          </TextContainer>
          <CostUploaderContainer>
            <StyledPaper>
              <>
                <TableDescriptionText sx={{ margin: "20px 0px" }}>
                  Select parameters to finish uploading
                </TableDescriptionText>
                <TableContainer component={Paper} sx={{ width: "100%" }}>
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">SKU:</StyledTableCell>
                        <StyledTableCell align="center">COST:</StyledTableCell>
                        <StyledTableCell align="center">VENDOR PREFERENCE:</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.sku}>
                          <StyledTableCell component="th" scope="row" align="center">
                            {row.sku}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.cost}</StyledTableCell>
                          <StyledTableCell align="center">{row.vendorPreference}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            </StyledPaper>
            <Divider
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "10%",
              }}
            >
              <Chip label="OR" />
            </Divider>

            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "35%",
                height: "100%",
                border: "1px dashed #00A3FF",
                borderRadius: "16px",
                minHeight: "100px",
                maxWidth: "280px",
                background: "#F8FAFB",
                boxShadow: 0,
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 30,
                }}
                src={dragndrop}
              />
              <Typography align="center" sx={{ margin: "15px", fontSize: "14px", lineHeight: "18px" }}>
                Select a file or drag and drop here
              </Typography>
              <Typography
                align="center"
                sx={{
                  margin: "15px",
                  fontSize: "12px",
                  lineHeight: "12px",
                  color: "#C4C4C4",
                }}
              >
                Only CSV and Tab-Separated files are supported
              </Typography>
            </Paper>
          </CostUploaderContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
                <CostUploaderButtonsContainer>
                  <WhiteButton sx={{ width: "50%" }}>Generate Template</WhiteButton>
                  <WhiteButton sx={{ width: "50%" }}>Finish Uploading</WhiteButton>
                </CostUploaderButtonsContainer>
                {currentState === 3 && (
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
                                <Box component="img" src={completed} sx={{ width: "14px", height: "14px" }} />
                              </FileStatusContainer>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <BlueButton variant="contained" endIcon={<FileDownloadOutlinedIcon />}>
                                Assign and proceed
                              </BlueButton>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </StyledTableContainer>
                )}
              </Item>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default CostUploader;
