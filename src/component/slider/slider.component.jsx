import React, { useEffect, useState } from "react";
import "./slider.style.css";
import { Box, Modal, Slider } from "@mui/material";

const minDistance = 10;

const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

const StatsModal = ({ records, handleClose, open, filterByStats }) => {
  const [statVals, setStatValues] = useState([]);

  useEffect(() => {
    if (records && statVals.length === 0) {
      setStatValues(
        records.map((record) => {
          return { key: record, value: [0, 210] };
        })
      );
    }
  }, [records, statVals.length]);
  //  const newRecords = ;

  const updateVal = (values, index) => {
    //console.log(values, index);
    statVals[index].value = values;
    //  console.log(statVals, "---");
    setStatValues([...statVals]);
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
        {statVals.map((record, index) => {
          return (
            <div key={index}>
              <div
                className="slider-component"
                style={{ display: "flex", flexDirection: "row" }}
                key={index}
              >
                <div className="statName">{capitalize(record.key)}</div>
                <div className="slider">
                  <Slider
                    sx={{
                      display: "flex",
                      color: "#2E3156",
                      width: "360px",
                    }}
                    valueLabelDisplay="auto"
                    value={record.value}
                    onChange={(event) => updateVal(event.target.value, index)}
                    disableSwap
                    max={210}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className="buttons">
          <button className="reset">Reset</button>
          <button className="apply" onClick={() => filterByStats(statVals)}>
            Apply
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default StatsModal;
