import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Modal,
  Slider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import "./responsiveModal.style.css";
import { Box } from "@mui/system";

const ResponsiveModal = ({
  types,
  filterByType,
  stats,
  filterByStats,
  resetStats,
  openTypesAccord,
  updateVal,
  openStatAccord,
  openResponsive,
  handleCloseResponsive,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [statVals, setStatValues] = useState([]);

  useEffect(() => {
    if (stats && statVals.length === 0) {
      setStatValues(
        stats.map((record) => {
          return { key: record, value: [0, 210] };
        })
      );
    }
  }, [stats, statVals.length]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(types);
  return (
    <div className="responsive-modal_root">
      <Modal
        keepMounted
        open={openResponsive}
        onClose={handleCloseResponsive}
        aria-labelledby="keep-mounted-modal-title"
      >
        <div className="responsive-modal">
          <h3 style={{ alignSelf: "flex-start" }}>Filters</h3>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Types
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <div className="type-accord_items">
                {types.map((record, key) => {
                  return (
                    <div className="type-accord_item" key={key} value={record}>
                      <label className="type-accord_label">
                        <input type="checkbox" onChange={filterByType}></input>
                        <p>{record}</p>
                      </label>
                    </div>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* gender */}
          <select className="gender-responsive">
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Genderless</option>
          </select>
          {/* stats */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Stats
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <div className="stat-accord_items">
                {statVals.map((record, index) => {
                  return (
                    <div key={index}>
                      <div
                        className="accord-slider-component"
                        style={{ display: "flex", flexDirection: "row" }}
                        key={index}
                      >
                        <div className="accord-statName">{record.key}</div>
                        <div className="slider">
                          <Slider
                            sx={{
                              display: "flex",
                              color: "#2E3156",
                              width: "100px",
                            }}
                            valueLabelDisplay="auto"
                            value={record.value}
                            onChange={(event) =>
                              updateVal(event.target.value, index)
                            }
                            disableSwap
                            max={210}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="accord-buttons">
                  <button
                    className="accord-reset"
                    onClick={() => {
                      setStatValues(
                        stats.map((record) => {
                          return { key: record, value: [0, 210] };
                        })
                      );
                      resetStats();
                    }}
                  >
                    Reset
                  </button>
                  <button
                    className="accord-apply"
                    onClick={() => filterByStats(statVals)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Modal>
    </div>
  );
};

export default ResponsiveModal;
