import React, { useState } from "react";
import Dropdown from "../../helpers/dropdown/dropdown.component";
import StatsModal from "../../helpers/slider/slider.component";
import "./filters.style.css";

const Filters = ({
  searchPokemon,
  types,
  stats,
  filterByType,
  filterByStats,
  resetStats,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const [slider, setSlider] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const openSlider = () => setSlider(!slider);
  const closeSlider = () => setSlider(false);

  return (
    <div>
      <div className="filters">
        <input
          type="search"
          onChange={(e) => searchPokemon(e)}
          className="search"
          placeholder="Name or Number"
        ></input>

        <button
          name="Normal"
          value="Types"
          type="button"
          className="type-button"
          onClick={() => handleOpen()}
          style={
            open ? { backgroundColor: "white" } : { backgroundColor: "#c9dde2" }
          }
        >
          Types
        </button>
        <Dropdown
          onHandleChange={(e) => filterByType(e)}
          records={types}
          open={open}
          handleClose={handleClose}
        />

        <select className="gender">
          <option value="">Male</option>
          <option value="">Female</option>
          <option value="">Genderless</option>
        </select>

        <button
          name="Normal"
          value="Types"
          type="button"
          className="type-button"
          onClick={() => openSlider()}
          style={
            slider
              ? { backgroundColor: "white" }
              : { backgroundColor: "#c9dde2" }
          }
        >
          Stats
        </button>
        <StatsModal
          value={value}
          filterByStats={filterByStats}
          resetStats={resetStats}
          records={stats}
          open={slider}
          handleClose={closeSlider}
        />
      </div>
    </div>
  );
};

export default Filters;
