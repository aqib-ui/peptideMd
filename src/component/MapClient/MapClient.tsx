// components/MapClient.tsx
"use client";

import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { TiLocationArrow } from "react-icons/ti";
// import { GoPlus } from "react-icons/go";
import { FiPlus, FiMinus } from "react-icons/fi";


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
    <div className="absolute top-[40%] right-2 md:right-12 flex flex-col items-center gap-4 z-10 overflow-hidden">
      {/* Plus Button */}
      <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-app cursor-pointer" onClick={zoomIn}>
        <span className="text-[clamp(17px,0.94vw+14px,26px)] "><FiPlus/></span>
      </div>

      {/* Minus Button */}
      <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-app cursor-pointer" onClick={zoomOut}>
        <span className="text-[clamp(17px,0.94vw+14px,26px)] "><FiMinus /></span>
      </div>

      {/* Location Button */}
      <div
        className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] text-white cursor-pointer"
        onClick={goToCurrentLocation}
      >
        <TiLocationArrow className="text-[clamp(17px,0.94vw+14px,26px)]" />
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
  //  <div className="p-[2px] bg-gradient-to-br from-[#5CB0E2] to-[#EB6793] min-h-[120vh] rounded-[70px]  relative mx-6 mt-4 mb-48">
  //       <MapContainer
  //         center={[37.7749, -122.4194]}
  //         zoom={13}
  //         scrollWheelZoom={true}
  //         zoomControl={false}   // 🔧 disable default zoom buttons

  //         className=" w-full h-[120vh] rounded-[70px] z-0"
  //       >
  //         <TileLayer
  //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //         />
  //         <Marker position={[37.7749, -122.4194]}>
  //           <Popup>Provider Location</Popup>
  //         </Marker>
  //         <SetMapRef mapRef={mapRef} />
  //       </MapContainer>

  //       {/* Custom Controls */}
  //       <MapControls mapRef={mapRef} />
  //     </div>




// <div className="w-full max-w-full sm:w-[1000px] md:w-[1200px] lg:w-[1400px] xl:w-[1500px] 2xl:w-[1600px]
//                 h-[500px] sm:h-[700px] md:h-[900px] lg:h-[1000px] xl:h-[1100px] 2xl:h-[1200px]
//                 border-[3px] rounded-[70px] p-[2px] 
//                 bg-gradient-to-br from-[#5CB0E2] to-[#EB6793] 
//                 relative mx-auto mt-4 mb-48">
//   <MapContainer
//     center={[37.7749, -122.4194]}
//     zoom={13}
//     scrollWheelZoom={true}
//     zoomControl={false}
//     className="w-full h-full rounded-[70px] z-0"
//   >
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={[37.7749, -122.4194]}>
//       <Popup>Provider Location</Popup>
//     </Marker>
//     <SetMapRef mapRef={mapRef} />
//   </MapContainer>

//   {/* Custom Controls */}
//   <MapControls mapRef={mapRef} />
// </div>



  

  <div className="px-6 sm:px-4 lg:px-2 xl:px-4 2xl:px-6">
  <div
    className="w-full max-w-full sm:w-[1000px] md:w-[1200px] lg:w-[1400px] xl:w-[1500px] 2xl:w-[1600px] 
               h-[500px] sm:h-[700px] md:h-[900px] lg:h-[1000px] xl:h-[1100px] 2xl:h-[1200px]
               rounded-[70px] p-[3px] mx-auto
               bg-gradient-to-br from-[#5CB0E2] to-[#EB6793] 
               relative mt-4 mb-48"
  >
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
      className="w-full h-full rounded-[70px] z-0"
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
</div>

  );
};

export default MapClient;
