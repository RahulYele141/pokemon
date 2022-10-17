import React from "react";

import "./card.style.css";

const Card = ({ img, pokemon, index, color, openModal, windowSize }) => {
  return (
    <div
      onClick={(e) => openModal(e, index)}
      className="card"
      style={{
        backgroundImage: `${color}`,
        width: windowSize < 600 ? "100px" : "180px",
        height: windowSize < 600 ? "180px" : "270px",
      }}
    >
      {/* height: ; width: 120px; */}
      <div
        className="cardImage"
        style={{
          width: windowSize < 600 ? "100px" : "120px",
          height: windowSize < 600 ? "180px" : "240px",
        }}
      >
        <img src={`${img}`} alt={"pokemon"} className="image" />
      </div>
      <div className="cardItems">
        <h3
          style={{
            fontWeight: "bold",
            fontSize: windowSize < 600 ? "15px" : "18px",
          }}
        >
          {pokemon?.toUpperCase()}
        </h3>
        <p
          style={{
            fontWeight: "500",
            fontSize: windowSize < 600 ? "10px" : "18px",
          }}
        >
          {("00" + index).slice(-3)}
        </p>
      </div>
    </div>
  );
};

export default Card;
