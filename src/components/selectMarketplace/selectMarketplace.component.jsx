import { styled } from "@mui/material/styles";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";

import amazonLogo from "../../assets/amazon-logo.png";
import walmartLogo from "../../assets/walmart-logo.png";
import shopifyLogo from "../../assets/shopify-logo.png";
import {
  DescriptionText,
  HeaderText,
  TextContainer,
} from "./selectMarketplace.styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#0A3DB0"),
  backgroundColor: "#0A3DB0",
  "&:hover": {
    backgroundColor: "#0A3DB0",
  },
}));

const SelectMarketplace = () => {
  return (
    <Box>
      <TextContainer>
        <HeaderText
          gutterBottom
          align="center"
          variant="h5"
          component="div"
        >
          Select Your Market Place
        </HeaderText>
        <DescriptionText component="div" align="center">
          After selecting you will be redirected to your marketplace setup page
          to connect your account.
        </DescriptionText>
      </TextContainer>
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
        <Divider
          sx={{
            width: "88px",
            height: "4px",
            background: "#00A3FF",
            borderRadius: "8px",
            margin: "auto",
          }}
        />
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
        {/* <Typography style={{ margin: "30px", fontSize: "14px" }}>
          Select parameters to finish uploading
        </Typography> */}
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #00A3FF",
            borderRadius: "16px",
            width: "180px",
            height: "180px",
            background: "#FFFFFF",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "130px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
            src={amazonLogo}
          />
          <ColorButton
            sx={{
              height: "40px",
              width: "150px",
              border: "1px solid #0A3DB0",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Add Account
          </ColorButton>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #00A3FF",
            borderRadius: "16px",
            width: "180px",
            height: "180px",
            background: "#FFFFFF",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "130px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
            src={walmartLogo}
          />
          <ColorButton
            sx={{
              height: "40px",
              width: "150px",
              border: "1px solid #0A3DB0",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Add Account
          </ColorButton>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #00A3FF",
            borderRadius: "16px",
            width: "180px",
            height: "180px",
            background: "#FFFFFF",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "130px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
            src={shopifyLogo}
          />
          <ColorButton
            sx={{
              height: "40px",
              width: "150px",
              border: "1px solid #0A3DB0",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Add Account
          </ColorButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default SelectMarketplace;
