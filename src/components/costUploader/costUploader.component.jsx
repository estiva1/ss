import { styled } from "@mui/material/styles";
import { Box, Chip, Divider, Paper, Typography } from "@mui/material";
import { Upload } from "antd";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import {
  HeaderText,
  StyledPaper,
  StyledWhiteButton,
  TextContainer,
  TextfieldContainer,
  UploaderContainer,
} from "./costUploader.styles";

import dragndrop from "../../assets/dragndrop.png";

const { Dragger } = Upload;

const ColorButton = styled(StyledWhiteButton)(({ theme }) => ({
  color: theme.palette.getContrastText("#FFFFFF"),
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
}));

const CostUploader = () => {
  //mock data
  const selectExample = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
  ];

  return (
    <Box>
      <TextContainer>
        <HeaderText align="center" variant="h5" component="div">
          Ai Repricer Cost Uploader
        </HeaderText>
      </TextContainer>
      <UploaderContainer>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledPaper>
            <Typography
              align="center"
              style={{ margin: "15px", fontSize: "14px" }}
            >
              Select parameters to finish uploading
            </Typography>
            <TextfieldContainer>
              <TextField
                sx={{ background: "#fff" }}
                //label="Label"
                id="outlined-size-small"
                //defaultValue="Value"
                size="small"
              />
              <TextField
                sx={{ background: "#fff" }}
                //label="Label"
                id="outlined-size-small"
                //defaultValue="Value"
                size="small"
              />
              <TextField
                sx={{ background: "#fff" }}
                //label="Label"
                id="outlined-size-small"
                //defaultValue="Value"
                size="small"
              />
              <TextField
                sx={{ background: "#fff" }}
                //label="Label"
                id="outlined-size-small"
                //defaultValue="Value"
                size="small"
              />
              <TextField
                sx={{ background: "#fff" }}
                //label="Label"
                id="outlined-size-small"
                //defaultValue="Value"
                size="small"
              />

              <Autocomplete
                sx={{ background: "#fff" }}
                disablePortal
                id="combo-box-demo"
                options={selectExample}
                renderInput={(params) => <TextField {...params} label="Cost" />}
              />
              <Autocomplete
                sx={{ background: "#fff" }}
                disablePortal
                id="combo-box-demo"
                options={selectExample}
                renderInput={(params) => (
                  <TextField {...params} label="Vendor" />
                )}
              />
            </TextfieldContainer>
          </StyledPaper>
          <ColorButton variant="contained">Generate Template</ColorButton>
        </Box>

        <Divider
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Chip label="OR" />
        </Divider>

        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px dashed #00A3FF",
            borderRadius: "16px",
            minWidth: "255px",
            minHeight: "100px",
            maxWidth: "280px",
            background: "#F8FAFB",
            boxShadow: 0,
          }}
        >
          <Box
            component="img"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              marginRight: "15px",
            }}
            src={dragndrop}
          />
        </Paper>
      </UploaderContainer>
      <Box>{/* <Dragger></Dragger> */}</Box>
    </Box>
  );
};

export default CostUploader;
