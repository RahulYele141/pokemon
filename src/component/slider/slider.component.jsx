import React, { useState } from "react";
import "./slider.style.css";
import { Box, Modal, Slider } from "@mui/material";

const minDistance = 10;

const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

const StatsModal = ({ records, handleClose, open, filterByStats }) => {
  const [value, setValue] = useState([60, 150]);
  const newRecords = records.map((record) => {
    let abc = {};
    abc[`${record}`] = value;
    return abc;
  });

  newRecords.map((r) => {
    Object.entries(r).map((rd) => {});
  });

  const updateVal = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
    // console.log("event", event.target.value, value);
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
                    value={value}
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
          <button className="apply" onClick={filterByStats}>
            Apply
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default StatsModal;
