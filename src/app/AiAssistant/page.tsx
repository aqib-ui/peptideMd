"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TiLocationArrow } from "react-icons/ti";
import {MoleculeTopLeftAnimation} from "@/component/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";
import ScrollButton from "@/component/ScrollButton/ScrollButton";

const AiAssistantPage = () => {
  const [showNewSection, setShowNewSection] = React.useState(false);

  return (
    <>
      {/* heading */}
      {/* <div className="container bg-app mx-auto px-8 py-10">
        <h1
          className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          Peptide
          <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
            Research Assistant
          </span>
        </h1>
        <h2
          className="text-[20px] md:text-[28px] lg:text-[34px] font-medium leading-[100%] mt-6 mb-10 max-w-2xl"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          AI Recommendations, AI Response, Video Suggestions and Community
          Discussion Links
        </h2>
      </div> */}
      <MoleculeTopLeftAnimation
        mainheading="Peptide"
        span="Research Assistant"
        para="AI Recommendations, AI Response, Video Suggestions and Community Discussion Links"
      />
      <ScrollButton />

      {/* below heading */}
      {!showNewSection ? (
        <div className="md:mt-50 md:mb-100">
          <div className="my-10">
            {/* 1st div */}
            <div className="bg-[#94C4ED]/30 mx-10  p-5 gap-2 rounded-4xl flex max-md:flex-col justify-between items-center">
              {/* left side */}
              <div className="md:ml-5">
                <h2
                  className="text-[clamp(34px,5vw,46px)] font-semibold leading-[100%] mt-6 max-w-2xl"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Videos you may relate.
                </h2>
                <h2
                  className="text-xl sm:text-2xl font-medium leading-[100%] mt-3 mb-10 max-w-2xl"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Calculate reconstitution measurements and injection volumes
                </h2>
              </div>

              {/* right side */}
              <div className="px-10 flex max-md:flex-col gap-10 items-center justify-center">
                {/* vid 1 */}
                <div
                  className="relative rounded-[50px] shadow-lg overflow-hidden"
                  style={{
                    width: "clamp(112px, 50vw, 212px)",
                    height: "clamp(102px, 50vw, 202px)",
                  }}
                >
                  <video
                    className="w-full h-full object-cover rounded-[50px]"
                    controls
                    poster="/aiAssistant/splash.png"
                  >
                    <source src="/sample-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4  rounded-[50px]">
                    <button className="relative z-10 ">
                      <Image
                        src="/play.png"
                        alt="Play Button"
                        width={64}
                        height={64}
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                      />
                    </button>
                  </div>
                </div>

                {/* vid 2 */}
                <div
                  className="relative rounded-[50px] shadow-lg overflow-hidden"
                  style={{
                    width: "clamp(112px, 50vw, 212px)",
                    height: "clamp(102px, 50vw, 202px)",
                  }}
                >
                  <video
                    className="w-full h-full object-cover rounded-[50px]"
                    controls
                    poster="/resourcesPod/bottom1.png"
                  >
                    <source src="/sample-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black/50 rounded-[50px]">
                    <button className="relative z-10 ">
                      <Image
                        src="/play.png"
                        alt="Play Button"
                        width={64}
                        height={64}
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd div */}
          <div className="my-10">
            <div className="bg-[#94C4ED]/30 mx-10  p-5 gap-2 rounded-4xl flex max-md:flex-col justify-between items-center">
              {/* left side */}
              <div className="md:ml-5">
                <h2
                  className="text-[clamp(34px,5vw,46px)] font-semibold leading-[100%] mt-6 max-w-2xl"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Ai Chat History.
                </h2>
                <h2
                  className="text-xl sm:text-2xl font-medium leading-[100%] mt-3 mb-10 max-w-2xl"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Calculate reconstitution measurements and injection volumes
                </h2>
              </div>

              {/* right side */}
              <div className="px-10 flex max-md:flex-col gap-10 items-center justify-center">
                <div
                  className="relative px-1 rounded-[50px] overflow-hidden"
                  style={{
                    width: "clamp(112px, 50vw, 464px)",
                    height: "clamp(102px, 50vw, 202px)",
                  }}
                >
                  <Image
                    className="w-full h-full object-cover rounded-[50px]"
                    src="/aiAssistant/aiChatHistory.png"
                    alt="Video Thumbnail"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3rd div */}
          <div className="my-10">
            <div className="bg-[#94C4ED]/30 mx-10  p-5 gap-2 rounded-4xl flex max-md:flex-col justify-between items-center">
              {/* left side */}
              <div className="md:ml-5">
                <h2
                  className="text-[clamp(34px,5vw,46px)] font-semibold leading-[100%] mt-6 max-w-2xl"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Community Discussion Links.
                </h2>
                <h2
                  className="text-xl sm:text-2xl font-medium leading-[100%] mt-3 mb-10 max-w-2xl"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Calculate reconstitution measurements and injection volumes
                </h2>
              </div>

              {/* right side */}
              <div className="px-10 flex flex-col items-center justify-center">
                <div className="rounded-[50px] overflow-hidden w-[clamp(112px,50vw,464px)] h-[clamp(102px,30vw,202px)]">
                  <Image
                    src="/aiAssistant/comdiscuss.png"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* 4th div */}
          <div className="my-10">
            <div
              onClick={() => setShowNewSection(true)}
              className="cursor-pointer"
            >
              <div className="p-[2px] rounded-[3rem] mx-10 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]">
                <div className="p-5 gap-2 rounded-[3rem] flex max-md:flex-col justify-between items-center bg-app">
                  {/* left side */}
                  <div className="md:ml-5">
                    <h2
                      className="text-[clamp(34px,5vw,46px)] font-semibold leading-[100%] mt-6 max-w-2xl"
                      style={{ fontFamily: "Afacad, sans-serif" }}
                    >
                      New Ai Chat.
                    </h2>
                    <h2
                      className="text-xl sm:text-2xl font-medium leading-[100%] mt-3 mb-10 max-w-2xl"
                      style={{ fontFamily: "Afacad, sans-serif" }}
                    >
                      Calculate reconstitution measurements and injection
                      volumes
                    </h2>
                  </div>

                  {/* right side */}
                  <div className="px-10 flex max-md:flex-col gap-10 items-center justify-center">
                    <div
                      className="relative px-1 rounded-[50px] overflow-hidden"
                      style={{
                        width: "clamp(112px, 50vw, 260px)",
                        height: "clamp(102px, 50vw, 202px)",
                      }}
                    >
                      <Image
                        className="w-full h-full object-cover rounded-[50px]"
                        src="/aiAssistant/aiChat.png"
                        alt="Video Thumbnail"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // NEW full page section
        <div className="md:mt-50 md:mb-100 mb-10 md:mx-50 mx-5">
          <div className="rounded-4xl flex justify-center items-center">
            <h2
              className="text-[20px] md:text-[28px] lg:text-[34px] font-semibold text-center"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Ask questions about peptides, their applications, and latest
              research findings
            </h2>
          </div>

          <div
            className="p-[2px] min-h-screen rounded-[3rem] mt-2 md:mt-10 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            <div className="bg-app min-h-[120vh]  rounded-[3rem] p-6 sm:p-10  flex flex-col items-start justify-between md:overflow-auto">
              {/* Avatar + Text */}
              <div className="flex items-start gap-4 max-w-3xl w-full mt-6">
                <Image
                  src="/aiAssistant/aiAvatar.png"
                  alt="Card Image"
                  width={64}
                  height={64}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white"
                />
                <div className="flex flex-col">
                  <h2
                    className="text-base sm:text-lg md:text-2xl bg-[#94C4ED]/30 p-6 sm:p-8 font-semibold rounded-tr-[2rem] 
                    rounded-br-[2rem] rounded-bl-[2rem]"
                    style={{ fontFamily: "Afacad, sans-serif" }}
                  >
                    Hello! I'm your peptide research assistant. How can I help
                    you today?
                  </h2>
                </div>
              </div>

              <div className="flex mx-5 gap-4 w-[95%] mt-6">
                <input
                  type="text"
                  placeholder="Ask About peptides..."
                  className="bg-gray-100 dark:bg-[var(--background)] dark:text-[var(--foreground)] dark:border px-6 sm:px-10 w-full p-4 sm:p-5 text-base sm:text-xl md:text-2xl font-medium 
                  rounded-full placeholder:text-sm sm:placeholder:text-base md:placeholder:text-xl"
                />
                <div className="text-white text-4xl sm:text-5xl md:text-6xl p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-tr 
                from-[#5CB0E2] to-[#EB6793]">
                  <TiLocationArrow className="p-1 sm:p-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistantPage;
