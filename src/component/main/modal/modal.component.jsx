import { Box, Modal } from "@mui/material";
import DescPopover from "../../helpers/descPopover/descPopover.component";
import Card from "../../helpers/pokecard/card.component";
import "./modal.style.css";

const InfoModal = ({
  infoModalPokemon,
  handleClose,
  open,
  description,
  prevPokemon,
  nextPokemon,
  evolPokemons,
  evolColor,
}) => {
  const progressBar = (name, value) => {
    return (
      <div
        style={{ display: "flex", flexDirection: "row", placeItems: "center" }}
      >
        <label>{`${name}`.toUpperCase()}</label>
        <div
          style={{
            display: "flex",
            height: 20,
            width: "160px",
            backgroundColor: " #93b2b2",
            borderRadius: 0,
            margin: 10,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${value}%`,
              backgroundColor: "#2e3156",
              borderRadius: "inherit",
              textAlign: "right",
              textAlignLast: "justify",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 10,
              }}
            >{`${value}`}</span>
          </div>
        </div>
      </div>
    );
  };

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
            <div className="info-image_card">
              <img
                src={`${infoModalPokemon?.sprites.other.dream_world.front_default}`}
                alt={"pokemon"}
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
                <div
                  className="info-modal_header_buttons"
                  style={{ width: "80px" }}
                >
                  <h2
                    onClick={(e) => prevPokemon(e)}
                    style={{
                      height: "40px",
                      width: "40px",
                      cursor: "pointer",
                      display: "inline",
                      padding: "2px",
                      margin: "4px",
                      border: "1px solid black",
                      borderRadius: "50%",
                    }}
                  >
                    &#8592;
                  </h2>
                  <h2
                    style={{
                      height: "40px",
                      width: "40px",
                      display: "inline",
                      padding: "2px",
                      margin: "4px",
                      border: "1px solid black",
                      borderRadius: "50%",
                    }}
                  >
                    &#10539;
                  </h2>
                  <h2
                    onClick={(e) => nextPokemon(e)}
                    style={{
                      height: "40px",
                      width: "40px",
                      cursor: "pointer",
                      display: "inline",
                      padding: "2px",
                      margin: "4px",
                      border: "1px solid black",
                      borderRadius: "50%",
                    }}
                  >
                    &#8594;
                  </h2>
                </div>
              </div>
              <div className="info-modal_para">
                <p style={{ margin: "0", display: "inline" }}>
                  {description[infoModalPokemon?.id - 1]
                    ?.slice(0, 4)
                    .join("\f")}
                </p>
                <p
                  style={{
                    margin: "0",
                    display: "inline",
                  }}
                >
                  <u>
                    <DescPopover
                      description={description[infoModalPokemon?.id - 1]
                        ?.slice(0, 10)
                        .join()}
                    ></DescPopover>
                  </u>
                </p>
              </div>
              <div className="read-more_modal"></div>
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
                {progressBar(
                  infoModalPokemon?.stats[0].stat.name,
                  infoModalPokemon?.stats[0].base_stat
                )}
              </div>
              <div className="stats-progress">
                {progressBar(
                  infoModalPokemon?.stats[2].stat.name,
                  infoModalPokemon?.stats[2].base_stat
                )}
              </div>
              <div className="stats-progress">
                {progressBar(
                  infoModalPokemon?.stats[4].stat.name,
                  infoModalPokemon?.stats[4].base_stat
                )}
              </div>
              <div className="stats-progress">
                {progressBar(
                  infoModalPokemon?.stats[1].stat.name,
                  infoModalPokemon?.stats[1].base_stat
                )}
              </div>
              <div className="stats-progress">
                {progressBar(
                  infoModalPokemon?.stats[3].stat.name,
                  infoModalPokemon?.stats[3].base_stat
                )}
              </div>
              <div className="stats-progress">
                {progressBar(
                  infoModalPokemon?.stats[5].stat.name,
                  infoModalPokemon?.stats[5].base_stat
                )}
              </div>
            </div>
          </div>
          <div className="evolution-main">
            <div className="evolution-heading">
              <h3>Evolution Chain</h3>
            </div>
            <div className="evolution-chain">
              {evolPokemons[0] ? (
                <Card
                  img={`${evolPokemons[0]?.sprites.other.dream_world.front_default}`}
                  pokemon={evolPokemons[0]?.name}
                  index={evolPokemons[0]?.id}
                  color={evolColor}
                />
              ) : (
                ""
              )}
              {evolPokemons[0] ? (
                <h2 className="evolution-chain_arrow">&#8594;</h2>
              ) : (
                ""
              )}
              <Card
                img={`${evolPokemons[1]?.sprites.other.dream_world.front_default}`}
                pokemon={evolPokemons[1]?.name}
                index={evolPokemons[1]?.id}
                color={evolColor}
              />
              {evolPokemons[2] ? (
                <h2 className="evolution-chain_arrow">&#8594;</h2>
              ) : (
                ""
              )}
              {evolPokemons[2] ? (
                <Card
                  img={`${evolPokemons[2]?.sprites.other.dream_world.front_default}`}
                  pokemon={evolPokemons[2]?.name}
                  index={evolPokemons[2]?.id}
                  color={evolColor}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default InfoModal;
