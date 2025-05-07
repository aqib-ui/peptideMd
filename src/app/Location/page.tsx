"use client";
import React from "react";
import { useState } from "react";

import Image from "next/image";
// import { CiFilter } from "react-icons/ci";
import { LuPen } from "react-icons/lu";
import { TiLocationArrow } from "react-icons/ti";
import { GoPlusCircle } from "react-icons/go";

const Location = () => {

    const [isFilterClicked, setIsFilterClicked] = useState(false);
    const [isCompareClicked, setIsCompareClicked] = useState(false);

  

  return (
    <>
      {/* heading */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10">
        <h1
          className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold "
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          Provider
          {/* <span style={{ color: "#224674" }} className="italic ml-4"> */}
          <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
            Locator
          </span>
        </h1>
        <h2
          className="text-[20px] md:text-[28px] lg:text-[34px] font-medium leading-[100%] mt-6 mb-10 max-w-2xl"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          AI Recommendations, AI Response, Video Suggestions and Community
          Discussion Links
        </h2>
      </div>

      {/* button */}
      <div
        className="container flex flex-col sm:flex-row justify-end gap-4 px-4 sm:px-8"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        <button
                onClick={() => setIsCompareClicked(!isCompareClicked)}

          className={`w-auto self-end  flex items-center gap-2 border-2 border-[#C5B3FF] text-base sm:text-lg md:text-xl lg:text-2xl font-medium 
        py-4 px-4 rounded-full hover:bg-[#C5B3FF] transition duration-300 ease-in-out ${ isCompareClicked ? "bg-[#C5B3FF]" : "hover:bg-[#C5B3FF]"
        }`}
        >
          <LuPen /> Enter Zip Code
        </button>

        <button
        onClick={() => setIsFilterClicked(!isFilterClicked)}
          className={` w-auto self-end  flex items-center border-2 text-base sm:text-lg md:text-xl lg:text-2xl font-medium
         border-[#F7B6DB]   py-4 px-4 rounded-full hover:bg-[#F7B6DB] 
          transition duration-300 ease-in-out
          ${ isFilterClicked ? "bg-[#F7B6DB]" : "hover:bg-[#F7B6DB]"
                  }`}
        >
          {/* <Image
            src="/filterIcon.png"
            alt="Compare"
            width={26}
            height={26}
            className="w-3 mr-2 h-3  "
          /> */}
          <Image
            src="/filterIcon.png"
            alt="Compare"
            width={24}
            height={24}
            className="w-5 mr-2 h-5 dark:filter dark:invert"
          />
          Filter by Speciality
        </button>
      </div>

      {/* map */}
      <div className="md:mb-100 mb-10 md:mx-10 mx-5">
        <div
          className="p-[2px] min-h-screen rounded-[3rem] mt-5 bg-gradient-to-br 
                  from-[#5CB0E2] to-[#EB6793]"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          <div
            className="bg-white bg-app min-h-[120vh] rounded-[3rem] p-6 sm:p-10
                  flex flex-col items-end justify-center gap-5"
          >
            {/* * <!-- plus Button --> */}
            <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full dark:border dark:border-white shadow-lg">
              <span className="text-2xl sm:text-3xl md:text-4xl  ">+</span>
            </div>
            {/* <!-- Minus Button --> */}
            <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full dark:border dark:border-white shadow-lg">
              <span className="text-2xl sm:text-3xl md:text-4xl ">−</span>
            </div>

            {/* <!-- Arrow Button --> */}
            <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] shadow-lg">
              <TiLocationArrow className="text-2xl sm:text-3xl md:text-4xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;

// new code
// "use client"

// import React from "react";
// import Image from "next/image";
// // import { CiFilter } from "react-icons/ci";
// import { LuPen } from "react-icons/lu";
// import { TiLocationArrow } from "react-icons/ti";
// import { GoPlusCircle } from "react-icons/go";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix default marker icon issue
// L.Icon.Default.prototype.options.iconRetinaUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
// L.Icon.Default.prototype.options.iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png";
// L.Icon.Default.prototype.options.shadowUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png";

// const Location = () => {
//   return (
//     <>
//       {/* heading */}
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10">
//         <h1
//           className="text-4xl font-bold md:text-6xl lg:text-[72px]"
//           style={{ fontFamily: "Afacad, sans-serif" }}
//         >
//           Provider
//           <span style={{ color: "#224674" }} className="italic ml-4">
//             Locator
//           </span>
//         </h1>
//         <h2
//           className="text-[24px] font-medium leading-[100%] mt-6 mb-10 max-w-2xl"
//           style={{ fontFamily: "Afacad, sans-serif" }}
//         >
//           AI Recommendations, AI Response, Video Suggestions and Community
//           Discussion Links
//         </h2>
//       </div>

//       {/* button */}
//       <div
//         // className="container flex justify-end  gap-4 px-4 sm:px-6 md:px-8 "
//         className="container flex flex-col sm:flex-row justify-end gap-4 px-4 sm:px-8"
//         style={{ fontFamily: "Afacad, sans-serif" }}
//       >
//         <button
//           className="w-auto self-end  flex items-center gap-2 border-2 border-[#C5B3FF] font-medium
//         py-4 px-4 rounded-full hover:bg-[#C5B3FF] transition duration-300 ease-in-out"
//         >
//           <LuPen /> Enter Zip Code
//         </button>

//         <button
//           className=" w-auto self-end  flex items-center border-2 font-medium
//          border-[#F7B6DB]  py-4 px-4 rounded-full hover:bg-[#F7B6DB]
//           transition duration-300 ease-in-out"
//         >
//           <Image
//             src="/filterIcon.png"
//             alt="Compare"
//             width={26}
//             height={26}
//             className="w-3 mr-2 h-3 "
//           />
//           {/* <CiFilter className="text-xl" /> */}
//           Filter by Speciality
//         </button>
//       </div>

//       {/* map */}
//       {/* <div className="md:mb-100 mb-10 md:mx-10 mx-5">
//         <div
//           className="p-[2px] min-h-screen rounded-[3rem] mt-5 bg-gradient-to-br
//                   from-[#5CB0E2] to-[#EB6793]"
//           style={{ fontFamily: "Afacad, sans-serif" }}
//         >
//           <div
//             className="bg-white min-h-[120vh] rounded-[3rem] p-6 sm:p-10
//                   flex flex-col items-end justify-center gap-5"
//           > */}
//             {/* * <!-- plus Button --> */}
//             {/* <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full  shadow-lg">
//               <span className="text-2xl sm:text-3xl md:text-4xl ">+</span>
//             </div> */}
//             {/* <!-- Minus Button --> */}
//             {/* <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full  shadow-lg">
//               <span className="text-2xl sm:text-3xl md:text-4xl ">−</span>
//             </div> */}

//             {/* <!-- Arrow Button --> */}
//             {/* <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] shadow-lg">
//               <TiLocationArrow className="text-2xl sm:text-3xl md:text-4xl text-white" />
//             </div>
//           </div>
//         </div>
//       </div> */}

// <div className="bg-white min-h-[120vh] rounded-[3rem] p-6 sm:p-10 relative">
//   {/* Map */}
//   <MapContainer
//     center={[37.7749, -122.4194]}
//     zoom={13}
//     scrollWheelZoom={true}
//     className="w-full h-[500px] rounded-3xl z-0"
//   >
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={[37.7749, -122.4194]}>
//       <Popup>Provider Location</Popup>
//     </Marker>
//   </MapContainer>

//   {/* Overlay buttons */}
//   <div className="absolute top-6 right-6 flex flex-col items-center gap-4 z-10">
//     {/* Plus Button */}
//     <div
//       className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-white cursor-pointer"
//       onClick={() => {
//         const map = (document.querySelector(".leaflet-container") as any)?._leaflet_map;
//         if (map) map.setZoom(map.getZoom() + 1);
//       }}
//     >
//       <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
//     </div>

//     {/* Minus Button */}
//     <div
//       className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-white cursor-pointer"
//       onClick={() => {
//         const map = (document.querySelector(".leaflet-container") as any)?._leaflet_map;
//         if (map) map.setZoom(map.getZoom() - 1);
//       }}
//     >
//       <span className="text-2xl sm:text-3xl md:text-4xl">−</span>
//     </div>

//     {/* Arrow Button - Current Location */}
//     <div
//       className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] text-white cursor-pointer"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//           const { latitude, longitude } = position.coords;
//           const map = (document.querySelector(".leaflet-container") as HTMLElement & { _leaflet_map: any })?._leaflet_map;
//           if (map) map.setView([latitude, longitude], 13);
//         });
//       }}
//     >
//       <TiLocationArrow className="text-xl sm:text-2xl md:text-3xl" />
//     </div>
//   </div>
// </div>

//     </>
//   );
// };

// export default Location;
