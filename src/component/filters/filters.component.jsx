import React, { useState } from "react";
import Dropdown from "../dropdown/dropdown.component";
import StatsModal from "../slider/slider.component";
import "./filters.style.css";

const Filters = ({ searchPokemon, types, stats, filterByType }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    return setOpen(!open);
  };
  const handleClose = () => {
    return setOpen(false);
  };

  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

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
          onClick={() => handleOpen()}
          style={
            open ? { backgroundColor: "white" } : { backgroundColor: "#c9dde2" }
          }
        >
          Stats
        </button>
        <StatsModal
          onHandleChange={(e) => filterByType(e)}
          records={stats}
          open={open}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Filters;
