import React from "react";

import "./card.style.css";

const Card = ({ img, pokemon, index, color, openModal }) => {
  return (
    <div
      onClick={(e) => openModal(e, index)}
      className="card"
      style={{ backgroundImage: `${color}` }}
    >
      <div className="cardImage">
        <img src={`${img}`} alt={"pokemon"} className="image" />
      </div>
      <div className="cardItems">
        <h3>{pokemon?.toUpperCase()}</h3>
        <p style={{ fontWeight: "500", fontSize: "18px" }}>
          {("00" + index).slice(-3)}
        </p>
      </div>
    </div>
  );
};

export default Card;
