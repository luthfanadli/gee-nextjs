import * as L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function GeoJSON({ data }) {
  const container = useMap();
  let geoJSONLayer;
  useEffect(() => {
    if (data) {
      const bounds = L.geoJSON(data).getBounds();
      container.fitBounds(bounds);
      geoJSONLayer = L.geoJSON(data).addTo(container);
      return () => {
        container.removeLayer(geoJSONLayer);
      };
    }
  }, [data]);

  return null;
}
