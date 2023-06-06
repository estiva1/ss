import { useState } from "react";
import { RepricerButton } from "./turnOnButton.styles";
import ButtonNearPower from "../button/button.component";
import { Box } from "@mui/material";

const BigButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const btn = document.querySelector(".btn");

  const turnOn = () => {
    setIsActive("active");
  };
  const turnOff = () => {
    setIsActive("");
  };

  const toggleAnimation = () => {
    setIsAnimating("");
    isActive ? turnOn() : turnOff();
  };
  function clickHandler() {
    isActive = !isActive;
    setIsAnimating("animating");
    if (btn) {
      btn.addEventListener("animationend", toggleAnimation);
    }
  }
  if (btn) {
    btn.addEventListener("click", clickHandler);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <ButtonNearPower />
      <RepricerButton
        type="button"
        className={isActive ? "active" : ""}
        onClick={handleClick}
      >
        <span>
          <b></b>
          <svg viewBox="-5.5 -5.5 71 71" id="circle">
            <circle
              cx="30"
              cy="30"
              r="30"
              stroke="white"
              strokeWidth="11"
              fill="transparent"
            ></circle>
          </svg>
        </span>
      </RepricerButton>
    </Box>
  );
};

export default BigButton;
