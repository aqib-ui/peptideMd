import Image from "next/image";
import React from "react";

export default function SideAnimation() {
  return (
    <div className="hidden md:flex w-full md:w-[48%] xl:w-[55%]  h-[650px] lg:h-auto self-center lg:self-stretch  rounded-[48px]  items-center justify-center">
      <div className="relative w-full h-full rounded-[16px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/authIcons/authVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[#000D1F]/32"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full ">
          <Image
            priority
            src="/authIcons/authLogo.png"
            alt="PeptideMD Logo"
            width={492}
            height={211}
            className="w-auto xl:!w-[492px] h-auto xl:!h-[211px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
