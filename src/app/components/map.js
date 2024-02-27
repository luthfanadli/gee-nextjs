"use client";

import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

export default function MapComponent() {
  return (
    <div>
      <MapContainer
        id="map"
        center={{ lat: 0, lng: 120 }}
        zoom={5}
        maxZoom={17}
        minZoom={5}
        zoomControl={false}
      >
        <TileLayer
          url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
          attribution="Google Map"
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}
