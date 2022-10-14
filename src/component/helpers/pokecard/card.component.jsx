import React from "react";

import "./card.style.css";

const Card = ({ img, pokemon, index, color, openModal }) => {
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  // console.log(color);
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
        <p>{("00" + index).slice(-3)}</p>
      </div>
    </div>
  );
};

export default Card;
