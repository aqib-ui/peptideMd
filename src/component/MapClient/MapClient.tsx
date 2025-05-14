// components/MapClient.tsx
"use client";

import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { TiLocationArrow } from "react-icons/ti";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

// Fix Leaflet default marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});
const MapControls = ({ mapRef }: { mapRef: React.MutableRefObject<any> }) => {
  const zoomIn = () => {
    const map = mapRef.current;
    if (map) map.setZoom(map.getZoom() + 1);
  };

  const zoomOut = () => {
    const map = mapRef.current;
    if (map) map.setZoom(map.getZoom() - 1);
  };

  const goToCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const map = mapRef.current;
      if (map) map.setView([latitude, longitude], 13);
    });
  };

  return (
    <div className="absolute top-12 right-12 flex flex-col items-center gap-4 z-10 overflow-hidden">
      {/* Plus Button */}
      <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-white cursor-pointer" onClick={zoomIn}>
        <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
      </div>

      {/* Minus Button */}
      <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-white cursor-pointer" onClick={zoomOut}>
        <span className="text-2xl sm:text-3xl md:text-4xl">−</span>
      </div>

      {/* Location Button */}
      <div
        className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] text-white cursor-pointer"
        onClick={goToCurrentLocation}
      >
        <TiLocationArrow className="text-xl sm:text-2xl md:text-3xl" />
      </div>
    </div>

  );
};

const SetMapRef = ({ mapRef }: { mapRef: React.MutableRefObject<any> }) => {
  const map = useMap();
  mapRef.current = map;
  return null;
};

const MapClient = () => {
  const mapRef = useRef(null);

  return (
   <div className="bg-white min-h-[120vh] rounded-[3rem] p-6 sm:p-10 relative">
        <MapContainer
          center={[37.7749, -122.4194]}
          zoom={13}
          scrollWheelZoom={true}
          zoomControl={false}   // 🔧 disable default zoom buttons

          className="w-full h-[500px] rounded-3xl z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[37.7749, -122.4194]}>
            <Popup>Provider Location</Popup>
          </Marker>
          <SetMapRef mapRef={mapRef} />
        </MapContainer>

        {/* Custom Controls */}
        <MapControls mapRef={mapRef} />
      </div>
  );
};

export default MapClient;
