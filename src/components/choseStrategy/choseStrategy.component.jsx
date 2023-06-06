import { Box, Typography } from "@mui/material";

const ChoseStrategy = () => {
  return (
    <Box>
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
          sx={{ fontWeight: "700", color: "#000" }}
        >
          Choose One
        </Typography>
        <Typography
          gutterBottom
          component="div"
          sx={{ margin: "auto", fontSize: "16px" }}
          align="center"
        >
          Strategies are your unique repricing rules that determine exactly how
          your listings will compete against other sellers on the marketplace.
          Please choose the strategy you would like to create.
        </Typography>
      </Box>
    </Box>
  );
};

export default ChoseStrategy;
