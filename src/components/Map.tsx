"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/gps.png",
  iconUrl: "/gps.png",
  shadowUrl: "/gps.png",
});

const position = [34.14554, 71.73883]; // Dushera Charsadda

export const Map = () => (
  <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
    <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="w-full h-full z-10">
    <TileLayer
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://carto.com/">CARTO</a>'
/>
      <Marker position={position}>
        <Popup className="text-sm font-medium text-emerald-700">📍 Dushera, Charsadda</Popup>
      </Marker>
    </MapContainer>
  </div>
);
