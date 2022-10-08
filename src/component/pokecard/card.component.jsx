import React from "react";

import "./card.style.css";

const Card = ({ img, pokemon, index, color1, color2 }) => {
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  return (
    <div
      className="card"
      style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
    >
      <div className="cardImage">
        <img src={`${img}`} alt={"pokemon"} className="image" />
      </div>
      <div className="cardItems">
        <h3>{capitalize(pokemon)}</h3>
        <p>{("00" + (index + 1)).slice(-3)}</p>
      </div>
    </div>
  );
};

export default Card;
