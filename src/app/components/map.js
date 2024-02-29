"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import GeoJSON from "./geojson";

export default function MapComponent({ geojsonData }) {
  const [geojson, setGeojson] = useState();
  const [selectedBasemap, setSelectedBasemap] = useState("Google Maps");

  useEffect(() => {
    if (geojsonData) {
      setGeojson({
        type: "FeatureCollection",
        features: [geojsonData?.features[0]],
      });
    }
  }, [geojsonData]);

  const basemaps = {
    "Google Maps": "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
    "Google Satellite":
      "https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
    "Google Terrain": "https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}",
  };

  return (
    <div>
      <div className="absolute top-5 right-5" style={{ zIndex: 999 }}>
        <BasemapSelector
          basemaps={Object.keys(basemaps)}
          onSelectBasemap={setSelectedBasemap}
        />
      </div>
      <MapContainer
        id="map"
        center={{ lat: 0, lng: 118 }}
        zoom={5}
        maxZoom={19}
        minZoom={5}
        zoomControl={false}
      >
        {geojson && <GeoJSON data={geojson} />}
        <TileLayer url={basemaps[selectedBasemap]} attribution="Map App" />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

function BasemapSelector({ basemaps, onSelectBasemap }) {
  return (
    <select
      className="px-2 py-1 bg-white border border-gray-300 rounded-md "
      onChange={(e) => onSelectBasemap(e.target.value)}
    >
      {basemaps.map((basemap, index) => (
        <option key={index} value={basemap}>
          {basemap}
        </option>
      ))}
    </select>
  );
}
