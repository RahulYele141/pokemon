import { Box, Modal } from "@mui/material";
import React from "react";

const InfoModal = ({ infoModalPokemon, handleClose, open }) => {
  console.log(infoModalPokemon.name);
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
    >
      <Box className="type-modal">
        <div type="checkbox" style={{ display: "flex", flexDirection: "row" }}>
          <h1>{infoModalPokemon.name}</h1>
          <h1>{infoModalPokemon.id}</h1>
        </div>
      </Box>
    </Modal>
  );
};

export default InfoModal;
