import { useState } from "react";
import "../style/sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import MapIcon from "@mui/icons-material/Map";

export default function LeftSideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        style={{
          backgroundColor: "#2A3B31",
          border: "none",
          cursor: "pointer",
          borderRadius: "8px",
          position: "absolute",
          left: "1vw",
          top: "3vh",
          zIndex: "999",
          height: "3rem",
          width: "3.2rem",
        }}
      >
        {open === true ? (
          <CloseIcon sx={{ color: "white", marginTop: "3px" }} />
        ) : (
          <MapIcon sx={{ color: "white", marginTop: "3px" }} />
        )}
      </button>
      {open === true ? (
        <div className="side-bar">
          <div className="sidebar-container"></div>
        </div>
      ) : null}
    </>
  );
}
