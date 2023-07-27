import { useState } from "react";
import { Chip } from "@mui/material";
import { ImageBox, RepricerButtonContainer, RepricerPowerButton } from "./repricerButton.styles";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

const RepricerButton = (props) => {
  const { isFirstPanelExpanded, handleChange } = props;

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <RepricerButtonContainer sx={{ top: isFirstPanelExpanded ? "185px" : "75px", transition: "top 0.8s ease" }}>
      <Chip
        label={isActive ? "Activated!" : "Turn On Repricer"}
        color="primary"
        sx={{
          fontWeight: "700",
          fontSize: "18px",
          padding: "25px",
          paddingLeft: "15px",
          width: "220px",
        }}
      />
      <RepricerPowerButton active={isActive} onClick={handleClick}>
        <ImageBox>
          <PowerSettingsNewOutlinedIcon sx={{ height: "50px", width: "50px" }} />
        </ImageBox>
      </RepricerPowerButton>
    </RepricerButtonContainer>
  );
};

export default RepricerButton;
