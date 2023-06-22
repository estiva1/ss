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
  AboutContainer,
  AboutContainerBottom,
  AboutContainerTop,
  AboutText,
  CostUploaderButtonsContainer,
  CostUploaderContainer,
  DescriptionText,
  FileStatusContainer,
  FileStatusLineSuccess,
  HeaderText,
  StyledPaper,
  StyledTableContainer,
  TextContainer,
} from "./costUploader.styles";
import { BlueButton } from "../buttons/blueButton.styles";
import { WhiteButton } from "../buttons/whiteButton.styles";

import dragndrop from "../../assets/dragndrop.png";
import completed from "../../assets/ai-repricer/completed.png";
import lightBulb from "../../assets/ai-repricer/light-bulb.png";

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
  //check if file uploaded
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const handleClick = () => {
    setIsFileUploaded(!isFileUploaded);
  };

  return (
    <>
      <TextContainer>
        <HeaderText align="center" variant="h5" component="div">
          Ai Repricer Cost Uploader
        </HeaderText>
      </TextContainer>
      <CostUploaderContainer>
        <StyledPaper>
          <Typography
            align="center"
            style={{ margin: "15px", fontSize: "14px" }}
          >
            Select parameters to finish uploading
          </Typography>
          <TableContainer component={Paper} sx={{ width: "100%" }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">SKU:</StyledTableCell>
                  <StyledTableCell align="center">COST:</StyledTableCell>
                  <StyledTableCell align="center">
                    VENDOR PREFERENCE:
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.sku}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {row.sku}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.cost}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.vendorPreference}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
            width: "30%",
            border: "1px dashed #00A3FF",
            borderRadius: "16px",
            width: "200px",
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
          <Typography
            align="center"
            sx={{ margin: "15px", fontSize: "14px", lineHeight: "18px" }}
          >
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
            <AboutContainer>
              <AboutContainerTop>
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
                  About Uploading Options
                </DescriptionText>
              </AboutContainerTop>
              <AboutContainerBottom sx={{ alignItems: "start" }}>
                <AboutText component="div" align="center">
                  REWRITE TIP - If user have more then 5 sku's go for bulk
                </AboutText>
              </AboutContainerBottom>
            </AboutContainer>

            <CostUploaderButtonsContainer>
              <WhiteButton sx={{ width: "50%" }}>Generate Template</WhiteButton>
              <WhiteButton sx={{ width: "50%" }} onClick={() => handleClick()}>
                Finish Uploading /PRESS TO SEE/
              </WhiteButton>
            </CostUploaderButtonsContainer>
            {isFileUploaded && (
              <StyledTableContainer>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">
                        File Name
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        File Status
                      </StyledTableCell>
                      <StyledTableCell align="center">Output</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowForFile.map((row) => (
                      <StyledTableRow key={row.fileName}>
                        <StyledTableCell align="center">
                          {`File Name Goes Here...`}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <FileStatusContainer>
                            <FileStatusLineSuccess />
                            <Box
                              component="img"
                              src={completed}
                              sx={{ width: "14px", height: "14px" }}
                            />
                          </FileStatusContainer>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <BlueButton
                            variant="contained"
                            endIcon={<FileDownloadOutlinedIcon />}
                          >
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
  );
};

export default CostUploader;
