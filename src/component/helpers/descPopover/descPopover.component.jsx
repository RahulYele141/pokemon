import * as React from "react";
import Popover from "@mui/material/Popover";

export default function DescPopover({ description }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <p
        style={{
          margin: "0",
          display: "inline",
        }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Read more
      </p>
      <Popover
        sx={{ position: "", width: "800px", color: "#2E3156" }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <p sx={{ p: 1, maxWidth: "400px" }}>{description}</p>
      </Popover>
    </div>
  );
}
