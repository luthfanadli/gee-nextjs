"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import GeoJSON from "./geojson";

export default function MapComponent({ geojsonData }) {
  const [geojson, setGeojson] = useState();

  useEffect(() => {
    if (geojsonData) {
      setGeojson({
        type: "FeatureCollection",
        features: [geojsonData?.features[0]],
      });
    }
  }, [geojsonData]);

  return (
    <div>
      <MapContainer
        id="map"
        center={{ lat: 0, lng: 118 }}
        zoom={5}
        maxZoom={19}
        minZoom={5}
        zoomControl={false}
      >
        {geojson && <GeoJSON data={geojson} />}
        <TileLayer
          url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
          attribution="Google Map"
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}
