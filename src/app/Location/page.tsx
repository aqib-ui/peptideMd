// "use client";
// import React from "react";
// import { useState } from "react";

// import Image from "next/image";
// // import { CiFilter } from "react-icons/ci";
// import { LuPen } from "react-icons/lu";
// import { TiLocationArrow } from "react-icons/ti";
// import { GoPlusCircle } from "react-icons/go";
// import { MoleculeTopLeftAnimation } from "../MianComponent/page";

// const Location = () => {

//     const [isFilterClicked, setIsFilterClicked] = useState(false);
//     const [isCompareClicked, setIsCompareClicked] = useState(false);

//   return (
//     <>
//       {/* heading */}
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 ">
//         <MoleculeTopLeftAnimation
//           mainheading="Provider"
//           span="Locator"
//           para="AI Recommendations, AI Response, Video Suggestions and Community Discussion Links"
//         />
//       </div>

//       {/* button */}
//       <div
//         className="container flex flex-col sm:flex-row justify-end gap-4 px-4 sm:px-8"
//         style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//       >
//         <button
//                 onClick={() => setIsCompareClicked(!isCompareClicked)}

//           className={`w-auto self-end  flex items-center gap-2 border-2 border-[#C5B3FF] text-base sm:text-lg md:text-xl lg:text-2xl font-medium
//         py-4 px-4 rounded-full hover:bg-[#C5B3FF] transition duration-300 ease-in-out ${ isCompareClicked ? "bg-[#C5B3FF]" : "hover:bg-[#C5B3FF]"
//         }`}
//         >
//           <LuPen /> Enter Zip Code
//         </button>

//         <button
//         onClick={() => setIsFilterClicked(!isFilterClicked)}
//           className={` w-auto self-end  flex items-center border-2 text-base sm:text-lg md:text-xl lg:text-2xl font-medium
//          border-[#F7B6DB]   py-4 px-4 rounded-full hover:bg-[#F7B6DB]
//           transition duration-300 ease-in-out
//           ${ isFilterClicked ? "bg-[#F7B6DB]" : "hover:bg-[#F7B6DB]"
//                   }`}
//         >
//           {/* <Image
//             src="/filterIcon.png"
//             alt="Compare"
//             width={26}
//             height={26}
//             className="w-3 mr-2 h-3  "
//           /> */}
//           <Image
//             src="/filterIcon.png"
//             alt="Compare"
//             width={24}
//             height={24}
//             className="w-5 mr-2 h-5 dark:filter dark:invert"
//           />
//           Filter by Speciality
//         </button>
//       </div>

//       {/* map */}
//       <div className="md:mb-100 mb-10 md:mx-10 mx-5">
//         <div
//           className="p-[2px] min-h-screen rounded-[3rem] mt-5 bg-gradient-to-br
//                   from-[#5CB0E2] to-[#EB6793]"
//           style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//         >
//           <div
//             className="bg-white bg-app min-h-[120vh] rounded-[3rem] p-6 sm:p-10
//                   flex flex-col items-end justify-center gap-5"
//           >
//             {/* * <!-- plus Button --> */}
//             <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full dark:border dark:border-white shadow-lg">
//               <span className="text-2xl sm:text-3xl md:text-4xl  ">+</span>
//             </div>
//             {/* <!-- Minus Button --> */}
//             <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full dark:border dark:border-white shadow-lg">
//               <span className="text-2xl sm:text-3xl md:text-4xl ">−</span>
//             </div>

//             {/* <!-- Arrow Button --> */}
//             <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] shadow-lg">
//               <TiLocationArrow className="text-2xl sm:text-3xl md:text-4xl text-white" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Location;

// new code

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { LuPen } from "react-icons/lu";
import { TiLocationArrow } from "react-icons/ti";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import  MoleculeTopLeftAnimation  from "@/component/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";
import dynamic from "next/dynamic";
import ScrollButton from "@/component/ScrollButton/ScrollButton";

const MapClient = dynamic(() => import("@/component/MapClient/MapClient"), {
  ssr: false,
});

const Location = () => {
  return (
    <>
      <div className="">
        <MoleculeTopLeftAnimation
          mainheading="Provider"
          span="Locator"
          para="AI Recommendations, AI Response, Video Suggestions and Community Discussion Links"
        />
        {/* <ScrollButton /> */}
      </div>

      {/* Buttons */}
      <div
        className=" flex flex-col sm:flex-row flex-wrap content-center sm:justify-end gap-4 px-8 2xl:px-16 text-[clamp(18px,0.43vw+16.63px,24px)]"
        style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
      >
        <button className="w-full sm:w-auto justify-center self-end flex items-center gap-2 border-2 border-[#C5B3FF] font-medium py-2 sm:py-4 px-4 rounded-full hover:bg-[#C5B3FF] transition">
          <LuPen /> Enter Zip Code
        </button>

        <button className="w-full sm:w-auto justify-center self-end flex items-center border-2 font-medium border-[#F7B6DB] py-2 sm:py-4 px-4 rounded-full hover:bg-[#F7B6DB] transition">
          <Image
            src="/filterIcon.png"
            alt="Compare"
            width={26}
            height={26}
            className="w-3 mr-2 h-3"
          />
          Filter by Speciality
        </button>
      </div>

      {/* Map Container */}

      <MapClient />
    </>
  );
};

export default Location;
