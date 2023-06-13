import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  GradientGreenButton,
  ModalImageBox,
  ModalText,
  RepricerModalContainer,
} from "./repricerModal.styles";

import completedIcon from "../../assets/ai-repricer/completed-icon.png";
import { GradientColorButton } from "../selectMarketplace/selectMarketplace.styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const RepricerModal = ({ open, close }) => {
  const modalText =
    "Congratulations! \n You have successfully Created a Strategy";

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={close}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <RepricerModalContainer>
              <ModalImageBox component="img" src={completedIcon} />
              <ModalText align="center">{modalText}</ModalText>
              <GradientGreenButton sx={{ padding: "20px" }} onClick={close}>
                Let’s Go to the Dashboard
              </GradientGreenButton>
            </RepricerModalContainer>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default RepricerModal;
