
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { LuPen } from "react-icons/lu";
import { TiLocationArrow } from "react-icons/ti";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import  MoleculeTopLeftAnimation  from "@/components/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";
import dynamic from "next/dynamic";
import ScrollButton from "@/components/ScrollButton/ScrollButton";

const MapClient = dynamic(() => import("@/components/MapClient/MapClient"), {
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
            src="/homePage/filterIcon.png"
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
