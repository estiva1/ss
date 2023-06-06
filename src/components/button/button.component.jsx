import React from "react";
import { Button, styled } from "@mui/material";

const ButtonNearPower = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#0A3DB0"),
    backgroundColor: "#0A3DB0",
    "&:hover": {
      backgroundColor: "#0A3DB0",
    },
  }));

  return (
    <ColorButton
      sx={{
        height: "50px",
        width: "210px",
        border: "1px solid #0A3DB0",
        borderRadius: "10px",
        top: "-25px",
        left: "40px",
      }}
      variant="contained"
    >
      Turn On Repricer
    </ColorButton>
  );
};

export default ButtonNearPower;
