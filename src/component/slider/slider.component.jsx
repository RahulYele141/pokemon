import React, { useState } from "react";
import "./slider.style.css";
import { Box, Modal, Slider } from "@mui/material";

const StatsModal = ({ records, onHandleChange, handleClose, open }) => {
  const [val, setVal] = useState([20, 40]);

  const updateVal = (e, data) => {
    console.log(e);
    setVal([10, 30]);
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
    >
      <Box className="stat-modal">
        {records.map((record, key) => {
          return (
            <div
              className="slider-component"
              type="checkbox"
              style={{ display: "flex", flexDirection: "row" }}
              key={key}
              value={record}
            >
              <div className="statName">{record}</div>
              <div className="slider">
                <Slider value={val} onChange={(e) => updateVal(e)}></Slider>
              </div>
            </div>
          );
        })}
      </Box>
    </Modal>
  );
};

export default StatsModal;
