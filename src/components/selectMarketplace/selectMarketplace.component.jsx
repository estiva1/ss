import { styled } from "@mui/material/styles";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";

import amazonLogo from "../../assets/amazon-logo.png";
import walmartLogo from "../../assets/walmart-logo.png";
import shopifyLogo from "../../assets/shopify-logo.png";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#0A3DB0"),
  backgroundColor: "#0A3DB0",
  "&:hover": {
    backgroundColor: "#0A3DB0",
  },
}));

const SelectMarketplace = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px",
          background: "#F8FAFB",
          gap: "15px",
        }}
      >
        <Typography
          gutterBottom
          align="center"
          variant="h5"
          component="div"
          sx={{ fontWeight: "700", color: "#000"}}
        >
          Select Your Market Place
        </Typography>
        <Typography
          gutterBottom
          component="div"
          sx={{ margin: "auto", fontSize: "16px" }}
          align="center"
        >
          After selecting you will be redirected to your marketplace setup page
          to connect your account.
        </Typography>
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
    </div>
  );
};

export default SelectMarketplace;
