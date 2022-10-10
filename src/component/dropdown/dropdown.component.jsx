import { Box, Modal } from "@mui/material";
import "./dropdown.style.css";

const Dropdown = ({ handleClose, open, records, onHandleChange }) => {
  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
    >
      <Box className="type-modal">
        {records.map((record, key) => {
          return (
            <div
              type="checkbox"
              style={{ display: "flex", flexDirection: "row" }}
              key={key}
              value={record}
            >
              <label>
                <input type="checkbox" onChange={onHandleChange}></input>
                {capitalize(record)}
              </label>
            </div>
          );
        })}
      </Box>
    </Modal>
  );
};

export default Dropdown;
