import React, { useState } from "react";
import "./slider.style.css";
import { Box, Modal, Slider } from "@mui/material";

const minDistance = 10;

const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

const StatsModal = ({ records, onHandleChange, handleClose, open }) => {
  const [val, setVal] = useState([60, 150]);

  const updateVal = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setVal([Math.min(newValue[0], val[1] - minDistance), val[1]]);
    } else {
      setVal([val[0], Math.max(newValue[1], val[0] + minDistance)]);
    }

    console.log(val);
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
    >
      <Box className="stat-modal">
        <h3>Select Stats</h3>
        {records.map((record, key) => {
          return (
            <div>
              <div
                className="slider-component"
                style={{ display: "flex", flexDirection: "row" }}
                key={key}
              >
                <div className="statName">{capitalize(record)}</div>
                <div className="slider">
                  <Slider
                    sx={{
                      display: "flex",
                      color: "#2E3156",
                      width: "360px",
                    }}
                    valueLabelDisplay="auto"
                    value={val}
                    onChange={updateVal}
                    disableSwap
                    max={210}
                  ></Slider>
                </div>
              </div>
            </div>
          );
        })}
        <div className="buttons">
          <button className="reset">Reset</button>
          <button className="apply">Apply</button>
        </div>
      </Box>
    </Modal>
  );
};

export default StatsModal;
