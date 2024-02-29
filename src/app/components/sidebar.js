import { useState } from "react";
import "../style/sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import MapIcon from "@mui/icons-material/Map";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import shpjs from "shpjs";

export default function LeftSideBar({ onGeojsonData }) {
  const [open, setOpen] = useState(false);
  const [geojson, setGeojson] = useState(undefined);

  const handleFileUpload = async (event) => {
    const shapefile = event.target.files[0];
    const geojson = await shpjs(await shapefile.arrayBuffer());
    setGeojson(geojson);
    onGeojsonData(geojson);
  };

  return (
    <>
      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        style={{
          backgroundColor: "#2A3B31",
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
          <div className="max-h-full sidebar-container">
            <div className="text-center">
              <label htmlFor="file-upload" className="cursor-pointer">
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
                <CloudUploadIcon
                  sx={{ color: "#2A3B31", fontSize: "2.5rem" }}
                />
                <div className="mt-1" style={{ color: "#343434" }}>
                  Upload Shapefile .zip
                </div>
              </label>
            </div>
                <div className="overflow-y-auto bg-gray-200 p-4 h-auto min-h-[85%] " >
               <div className="mb-3 text-center " style={{ color: "#343434" }}>
                  {geojson && "GeoJSON:"}
                </div>
                <pre className="mr-1">{geojson && JSON.stringify(geojson, null, 1)}</pre>
                </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
