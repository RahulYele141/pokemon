import React from "react";

import "./card.style.css";

const Card = ({ img, pokemon, index, color1, color2 }) => {
  //   console.log(color1, color2);
  return (
    <div
      className="card"
      style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
    >
      <div className="cardImage">
        <img src={`${img}`} alt={"pokemon"} className="image" />
      </div>
      <div className="cardItems">
        <h4>{pokemon}</h4>
        <p>{("00" + (index + 1)).slice(-3)}</p>
      </div>
    </div>
  );
};

export default Card;
