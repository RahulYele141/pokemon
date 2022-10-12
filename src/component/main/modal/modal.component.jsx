import { Box, Modal } from "@mui/material";
import React from "react";
import "./modal.style.css";

const InfoModal = ({
  infoModalPokemon,
  handleClose,
  open,
  description,
  showFullDescription,
}) => {
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
                <p style={{ margin: "0", display: "inline" }}>
                  {description[infoModalPokemon?.id - 1]
                    ?.slice(0, 4)
                    .join("\f")}
                  ...
                  <p
                    onMouseEnter={(e) => showFullDescription(e)}
                    style={{
                      margin: "0",
                      display: "inline",
                    }}
                  >
                    <u>read more</u>
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="info-modal_details">
            <div className="info-modal_details_row1">
              <div className="info-modal_details_content">
                <h4>Height</h4>
                <p>{infoModalPokemon?.height}'</p>
              </div>
              <div className="info-modal_details_content">
                <h4>Weight</h4> <p>{infoModalPokemon?.weight} Kg</p>
              </div>
              <div className="info-modal_details_content">
                <h4>Gender(s)</h4> <p>{}</p>
              </div>
              <div className="info-modal_details_content">
                <h4>Egg Groups</h4> <p>{}</p>
              </div>
            </div>
            <div className="info-modal_details_row2">
              <div className="info-modal_details_content">
                <h4>Abilities</h4>{" "}
                <p>
                  {infoModalPokemon?.abilities[0]?.ability.name},{" "}
                  {infoModalPokemon?.abilities[1]?.ability.name}
                </p>
              </div>
              <div className="info-modal_details_content">
                <h4>Types</h4>{" "}
                <p>
                  {infoModalPokemon?.types[0]?.type.name},{" "}
                  {infoModalPokemon?.types[1]?.type.name}
                </p>
              </div>
              <div className="info-modal_details_content">
                <h4>Weak against</h4> <p></p>
              </div>
            </div>
          </div>
          <div className="stats-row">
            <h3>Stats</h3>
            <div className="stats-list">
              <div className="stats-progress">
                <label>
                  {`${infoModalPokemon?.stats[0].stat.name}`.toUpperCase()}
                </label>
                <progress
                  value={infoModalPokemon?.stats[0].base_stat}
                  max="100"
                ></progress>
              </div>
              <div className="stats-progress">
                <label>
                  {`${infoModalPokemon?.stats[2].stat.name}`.toUpperCase()}
                </label>
                <progress
                  value={infoModalPokemon?.stats[2].base_stat}
                  max="100"
                >
                  {infoModalPokemon?.stats[2].base_stat}
                </progress>
              </div>
              <div className="stats-progress">
                <label>
                  {`${infoModalPokemon?.stats[4].stat.name}`.toUpperCase()}
                </label>
                <progress
                  value={infoModalPokemon?.stats[4].base_stat}
                  max="100"
                ></progress>
              </div>
              <div className="stats-progress">
                <label>
                  {`${infoModalPokemon?.stats[1].stat.name}`.toUpperCase()}
                </label>
                <progress
                  value={infoModalPokemon?.stats[1].base_stat}
                  max="100"
                ></progress>
              </div>
              <div className="stats-progress">
                <label>
                  {`${infoModalPokemon?.stats[3].stat.name}`.toUpperCase()}
                </label>
                <progress
                  value={infoModalPokemon?.stats[3].base_stat}
                  max="100"
                ></progress>
              </div>
              <div className="stats-progress">
                <label>
                  {`${infoModalPokemon?.stats[5].stat.name}`.toUpperCase()}
                </label>
                <progress
                  value={infoModalPokemon?.stats[5].base_stat}
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default InfoModal;
