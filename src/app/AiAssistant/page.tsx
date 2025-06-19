"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BsArrowUp } from "react-icons/bs";
import { HiOutlineMenuAlt2, HiX } from "react-icons/hi";

const AiAssistantPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="flex min-h-screen w-full max-sm:px-2 px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 gap-6 max-sm:gap-0">
      {/* Sidebar / Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-4/5 max-w-xs bg-[#F2F5F6]  rounded-3xl p-4 gap-4 flex-col items-start overflow-auto transform
           transition-transform duration-300 lg:static lg:translate-x-0 lg:flex lg:w-[20%] lg:h-auto lg:mt-10 lg:gap-4 lg:p-6 lg:overflow-auto
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button (mobile) */}
        <div className="lg:hidden w-full flex justify-end">
          <button onClick={() => setDrawerOpen(false)}>
            <HiX className="text-2xl text-[#224674]" />
          </button>
        </div>

        <button className="bg-[#224674] text-white txt-18 font-semibold px-6 py-3 rounded-full mt-4 max-lg:mt-2 max-lg:mb-6">
          New Chat
        </button>

        <p className="txt-16 text-[#626D6F] font-medium">Today</p>

        <div className="bg-[#E9EDEE] w-full p-2 rounded-[6px] ">
          <p className="txt-20">New Chat</p>
        </div>
      </div>

      {/* Overlay (mobile) */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Top bar for mobile with menu button */}
      <div className="flex items-start justify-between mt-2 md:mt-10 lg:hidden">
        <button onClick={() => setDrawerOpen(true)}>
          <HiOutlineMenuAlt2 className="txt-48 " />
        </button>
      </div>

      {/* Right Side */}
      <div
        className="p-[2px] w-full h-[943px] mt-2 md:mt-10 rounded-[3rem] bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
        style={{ fontFamily: "'Afacad Flux', sans-serif" }}
      >
        <div className="bg-app rounded-[3rem] h-full p-6 sm:p-10 flex flex-col items-center justify-between">
          {/* Avatar + Greeting Text */}
          <div className="flex flex-col items-center justify-center gap-4 max-sm:gap-0 mt-6 h-[943px] max-md:h-full text-center">
            <div className="flex max-sm:flex-col items-center gap-4">
              <Image
                src="/aiAssistant/Ai-icon.png"
                alt="Card Image"
                width={64}
                height={64}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white"
              />
              <h2 className="txt-24 text-[#224674] font-semibold">
                Hi, I am Pepi! Your AI friend
              </h2>
            </div>

            <h2 className="txt-48 font-semibold bg-gradient-to-r from-[#224674] to-[#DD6F94] bg-clip-text text-transparent">
              How can I help you?
            </h2>
          </div>

          {/* Input and Button */}
          <div className="flex mx-5 gap-4 w-[95%] max-sm:w-full mt-6">
            <input
              type="text"
              placeholder="Ask About peptides..."
              className="bg-gray-100 px-6 sm:px-10 w-full p-4 sm:p-5 text-base sm:text-xl md:text-2xl font-medium rounded-full placeholder:text-sm sm:placeholder:text-base md:placeholder:text-xl"
            />
            <div className="flex justify-center items-center text-white txt-40 font-medium p-4 md:p-6 rounded-full bg-[#224674]">
              <BsArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistantPage;

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { BsArrowUp } from "react-icons/bs";
// import { HiOutlineMenuAlt2, HiX } from "react-icons/hi";

// const AiAssistantPage = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <div className="relative flex min-h-screen w-full bg-red-400 px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 gap-6">
//       {/* Sidebar / Drawer */}
//       <div
//         className={`fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs bg-[#F2F5F6] rounded-3xl p-4 gap-4 flex-col items-start overflow-auto transform transition-transform duration-300 lg:static lg:translate-x-0 lg:flex lg:w-[20%] lg:h-auto lg:mt-2 lg:gap-4 lg:p-6 lg:overflow-auto
//           ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         {/* Close Button (mobile) */}
//         <div className="lg:hidden w-full flex justify-end">
//           <button onClick={() => setDrawerOpen(false)}>
//             <HiX className="text-2xl text-[#224674]" />
//           </button>
//         </div>

//         <button className="bg-[#224674] text-white txt-18 font-semibold px-6 py-3 rounded-full mt-4 max-lg:mt-2">
//           New Chat
//         </button>

//         <p className="txt-16 text-[#626D6F] font-medium">Today</p>

//         <div className="bg-[#E9EDEE] w-full p-2 rounded-[6px]">
//           <p className="txt-20">New Chat</p>
//         </div>
//       </div>

//       {/* Overlay (mobile) */}
//       {drawerOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setDrawerOpen(false)}
//         />
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Top bar for mobile with menu button */}
//         <div className="flex items-center justify-between mb-4 lg:hidden">
//           <button onClick={() => setDrawerOpen(true)}>
//             <HiOutlineMenuAlt2 className="text-2xl text-white" />
//           </button>
//         </div>

//         <div
//           className="p-[2px] w-full h-full rounded-[3rem] bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
//           style={{ fontFamily: "'Afacad Flux', sans-serif" }}
//         >
//           <div className="bg-app rounded-[3rem] h-full p-6 sm:p-10 flex flex-col items-center justify-between">
//             {/* Avatar + Greeting */}
//             <div className="flex flex-col items-center justify-center gap-4 h-full text-center">
//               <div className="flex max-sm:flex-col items-center gap-4">
//                 <Image
//                   src="/aiAssistant/Ai-icon.png"
//                   alt="Card Image"
//                   width={64}
//                   height={64}
//                   className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white"
//                 />
//                 <h2 className="txt-24 text-[#224674] font-semibold">
//                   Hi, I am Pepi! Your AI friend
//                 </h2>
//               </div>

//               <h2 className="txt-48 font-semibold bg-gradient-to-r from-[#224674] to-[#DD6F94] bg-clip-text text-transparent">
//                 How can I help you?
//               </h2>
//             </div>

//             {/* Input and Button */}
//             <div className="flex mx-5 gap-4 w-[95%] max-sm:w-full mt-6">
//               <input
//                 type="text"
//                 placeholder="Ask About peptides..."
//                 className="bg-gray-100 px-6 sm:px-10 w-full p-4 sm:p-5 text-base sm:text-xl md:text-2xl font-medium rounded-full placeholder:text-sm sm:placeholder:text-base md:placeholder:text-xl"
//               />
//               <div className="flex justify-center items-center text-white txt-40 font-medium p-4 md:p-6 rounded-full bg-[#224674]">
//                 <BsArrowUp />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AiAssistantPage;
