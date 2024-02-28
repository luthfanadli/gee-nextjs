"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import LeftSideBar from "./components/sidebar";

const MapComponent = dynamic(() => import("./components/map"), {
  ssr: false,
});

export default function Home() {
  const [geojsonData, setGeojsonData] = useState();

  const handleGeojsonData = (data) => {
    setGeojsonData(data);
  };

  return (
    <div>
      <LeftSideBar onGeojsonData={handleGeojsonData} />
      <MapComponent geojsonData={geojsonData} />
    </div>
  );
}
