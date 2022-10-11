import { Box, Modal } from "@mui/material";
import React from "react";
import "./modal.style.css";

const InfoModal = ({ infoModalPokemon, handleClose, open }) => {
  console.log(infoModalPokemon);
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
    >
      <Box className="info-modal">
        <div className="info-modal_root">
          <div className="info-modal_image_header">
            <div
              className="info-image_card"
              style={{
                backgroundColor: `#DDCBD0`,
              }}
              a
            >
              <img
                src={`${infoModalPokemon?.sprites.other.dream_world.front_default}`}
                alt={"pokemon"}
                style={{
                  backgroundColor: `#DDCBD0`,
                }}
                className="image"
              />
            </div>
            <div className="info-modal_para_header">
              <div className="info-modal_header">
                <div>
                  <h2>{`${infoModalPokemon?.name}`.toUpperCase()}</h2>
                </div>
                <div className="vertical-line"></div>
                <div>
                  <h2>{("00" + infoModalPokemon?.id).slice(-3)}</h2>
                </div>
                <div className="vertical-line"></div>
              </div>
              <div className="info-modal_para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  eligendi neque iste veritatis accusamus earum ipsum ducimus,
                  at eius, beatae consequuntur aspernatur eum quas blanditiis
                  sapiente natus saepe facilis corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default InfoModal;
