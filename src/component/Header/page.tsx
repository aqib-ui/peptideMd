// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className=" bg-white ">
//       <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-4">
//         {/* Logo */}
//         <h1
//           className="text-[32px] md:text-[46px] font-bold text-black leading-[100%] px-4 py-2 rounded-md"
//           style={{
//             fontFamily: "Afacad, sans-serif",
//             display: "inline-block",
//           }}
//         >
//           PeptideMD
//         </h1>

//         {/* Hamburger Menu (Always Visible) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="focus:outline-none flex items-center"
//         >
//           <Image
//             src="/hamBurger.png"
//             alt="Menu"
//             width={50}
//             height={50}
//             className="cursor-pointer"
//           />
//         </button>

//         {/* Mobile Dropdown Menu */}
//         <div
//           className={`absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 w-40 transition-all duration-300 ease-in-out ${
//             isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
//           }`}
//         >
//           <ul className="flex flex-col gap-3 text-gray-700">
//             <li>
//               <a href="#" className="hover:text-blue-500">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-500">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-500">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }

// ////////////////////////////////////18/3/25 header (sidebar)  started////////////////////////

// "use client";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation"; // Import usePathname
// import Image from "next/image";
// import Link from "next/link"; // Import Link from Next.js

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname(); // Get the current route

//   // Close sidebar when the route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   // Prevent scrolling when sidebar is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//   }, [isOpen]);

//   return (
//     <header className="bg-white">
//       <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-4">
//         {/* Logo */}
//         <Image
//             src="/headerIcon/logo.png"
//             alt="Logo"
//             width={200} // Adjust width as needed
//             height={50} // Adjust height as needed
//           />

//         {/* Hamburger Menu */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="focus:outline-none flex items-center"
//         >
//           <Image
//             src="/hamBurger.png"
//             alt="Menu"
//             width={50}
//             height={50}
//             className="cursor-pointer"
//           />
//         </button>
//       </div>

//       {/* Full-Screen Sidebar */}
//       <div
//         className={`fixed inset-0 bg-white shadow-2xl z-50
//           transform transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Header Section with Logo & Close Button */}
//         <div className="absolute top-4 left-4 right-4 px-6 flex justify-between items-center">
//           {/* Logo on the Left */}
//           <Image
//             src="/headerIcon/logo.png"
//             alt="Logo"
//             width={200}
//             height={50}
//           />

//           {/* Close Button on the Right */}
//           <button onClick={() => setIsOpen(false)}
//           className="focus:outline-none flex items-center"
//             >
//             <Image
//               src="/headerIcon/minimize.png"
//               alt="Close"
//               width={50} // Figma width
//               height={50} // Figma height
//             />
//           </button>
//         </div>

//         {/* Sidebar Content */}
// <div className="flex items-center justify-center h-full bg-white">
//   {/* Box with Gradient Border */}
//   <div className="relative flex flex-wrap items-center justify-center gap-6 p-8 sm:p-4
//   w-full max-w-[95%] sm:max-w-[55%] min-h-[450px] sm:min-h-[500px] shadow-lg mx-auto mt-16 md:mt-24
//   rounded-[10rem] rounded-tr-[2rem] transition-all duration-300 ease-in-out">

//     {/* Gradient Border (Pseudo-element) */}
//     <div className="absolute inset-0 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]
//     rounded-[10rem] rounded-tr-[2rem] p-[4px]"></div>

//     {/* Inner White Box */}
//     <div className="absolute inset-[2px] bg-white rounded-[10rem] rounded-tr-[2rem] z-10"></div>

//             <ul className="text-gray-900 text-2xl font-semibold space-y-6 max-sm:space-y-3 z-10">
//               <li className="flex items-center space-x-4">
//                 <Image
//                   src="/headerIcon/Group 11.png"
//                   alt="Overview Icon"
//                   width={30}
//                   height={30}
//                 />
//                 <a
//                   href="#"
//                   className="hover:text-blue-500 font-semibold leading-[100%]"
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
//                     fontFamily: "Afacad, sans-serif",
//                     letterSpacing: "0%",
//                   }}
//                 >
//                   Overview
//                 </a>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <Image
//                   src="/headerIcon/Group 12.png"
//                   alt="Overview Icon"
//                   width={30}
//                   height={30}
//                 />
//                 <a
//                   href="/PeptideDatabase"
//                   className="hover:text-blue-500 font-semibold leading-[100%]"
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
//                     fontFamily: "Afacad, sans-serif",
//                     letterSpacing: "0%",
//                   }}
//                 >
//                   Peptide Database
//                 </a>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <Image
//                   src="/headerIcon/Group 13.png"
//                   alt="Overview Icon"
//                   width={30}
//                   height={30}
//                 />
//                 <a
//                   href="/TakingPeptide"
//                   className="hover:text-blue-500 font-semibold leading-[100%]"
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
//                     fontFamily: "Afacad, sans-serif",
//                     letterSpacing: "0%",
//                   }}
//                 >
//                   Taking Peptides
//                 </a>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <Image
//                   src="/headerIcon/Group 14.png"
//                   alt="Overview Icon"
//                   width={30}
//                   height={30}
//                 />
//                 <a
//                   href="/DosageSimulator"
//                   className="hover:text-blue-500 font-semibold leading-[100%]"
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
//                     fontFamily: "Afacad, sans-serif",
//                     letterSpacing: "0%",
//                   }}
//                 >
//                   Dosage Simulator
//                 </a>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <Image
//                   src="/headerIcon/Group 15.png"
//                   alt="Overview Icon"
//                   width={30}
//                   height={30}
//                 />
//                 <a
//                   href="#"
//                   className="hover:text-blue-500 font-semibold leading-[100%]"
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
//                     fontFamily: "Afacad, sans-serif",
//                     letterSpacing: "0%",
//                   }}
//                 >
//                   Resources
//                 </a>
//               </li>
//             </ul>

//             <ul className="text-gray-900 text-2xl font-semibold space-y-6 max-sm:space-y-3 z-10 pb-[4rem]">
//               <li className="flex items-center space-x-4">
//                 <Image
//                   src="/headerIcon/Group 21.png"
//                   alt="Overview Icon"
//                   width={30}
//                   height={30}
//                 />
//                 <a
//                   href="#"
//                   className="hover:text-blue-500 font-semibold leading-[100%]"
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
//                     fontFamily: "Afacad, sans-serif",
//                     letterSpacing: "0%",
//                   }}
//                 >
//                   AI Assistant
//                 </a>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <Image
//                   src="/headerIcon/Group 22.png"
//                   alt="Overview Icon"
//                   width={30}
//                   height={30}
//                 />
//                 <a
//                   href="#"
//                   className="hover:text-blue-500 font-semibold leading-[100%]"
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
//                     fontFamily: "Afacad, sans-serif",
//                     letterSpacing: "0%",
//                   }}
//                 >
//                   Case Studies
//                 </a>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <Image
//                   src="/headerIcon/Group 23.png"
//                   alt="Overview Icon"
//                   width={30}
//                   height={30}
//                 />
//                 <a
//                   href="#"
//                   className="hover:text-blue-500 font-semibold leading-[100%]"
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
//                     fontFamily: "Afacad, sans-serif",
//                     letterSpacing: "0%",
//                   }}
//                 >
//                   Research Updates
//                 </a>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <Image
//                   src="/headerIcon/Group 24.png"
//                   alt="Overview Icon"
//                   width={30}
//                   height={30}
//                 />
//                 <a
//                   href="#"
//                   className="hover:text-blue-500 font-semibold leading-[100%]"
//                   style={{
//                     fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
//                     fontFamily: "Afacad, sans-serif",
//                     letterSpacing: "0%",
//                   }}
//                 >
//                   Discussion Forum
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// ////////////////////////////////////19-25/3/25 pixel perfecting ////////////////////////

"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Close sidebar when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="bg-app">
      <div className="container mx-auto flex min-w-[98vw] items-center justify-between px-4 md:px-10 py-4">
        {/* Logo */}
        {/* <Image
          src="/headerIcon/logo.png"
          alt="Logo"
          width={200} // Adjust width as needed
          height={50} // Adjust height as needed
        /> */}
        {/* Logo with Home Redirect */}
        <Link href="/">
          <Image
            src="/headerIcon/logo.png"
            alt="Logo"
            width={200} // Adjust width as needed
            height={50} // Adjust height as needed
            className="cursor-pointer"
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none flex items-center"
        >
          <Image
            src="/headerIcon/hamBurger.png"
            alt="Menu"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* Full-Screen Sidebar */}
      <div
        className={`fixed inset-0 bg-app shadow-2xl z-50 
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header Section with Logo & Close Button */}
        <div className="absolute top-4 left-4 right-4 px-6 flex justify-between items-center">
          {/* Logo on the Left */}
          <Image
            src="/headerIcon/logo.png"
            alt="Logo"
            width={200}
            height={50}
          />

          {/* Close Button with Gradient Border */}
          <button
            onClick={() => setIsOpen(false)}
            className="relative w-[70px] h-[70px] focus:outline-none flex items-center justify-center"
          >
            {/* Gradient Border */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] 
              rounded-full p-[2.5px] opacity-40"
            ></div>

            {/* Inner White Circle */}
            <div className="absolute inset-[2.5px] bg-app rounded-full flex items-center justify-center z-10">
              <Image
                src="/headerIcon/minimize.png"
                alt="Close"
                width={50}
                height={50}
              />
            </div>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex items-center justify-center h-full bg-app">
          {/* Box with Gradient Border */}
          <div
            className="relative flex flex-wrap items-center justify-center gap-6 p-8 sm:p-4 
            w-full max-w-[95%] sm:max-w-[55%] min-h-[450px] sm:min-h-[500px] mr-6 ml-6 mx-auto mt-16 md:mt-24 
            rounded-[10rem] rounded-tr-[2rem] transition-all duration-300 ease-in-out"
          >
            {/* Gradient Border (Pseudo-element) */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] 
              rounded-[10rem] rounded-tr-[3.5rem] p-[4px] opacity-70"
            ></div>

            {/* Inner White Box */}
            <div className="absolute inset-[2px] bg-app  rounded-[10rem] rounded-tr-[3.5rem] z-10"></div>
            <ul className="text-gray-900 text-2xl text-app font-semibold space-y-6 max-sm:space-y-3 z-10">
              <li className="flex items-center space-x-4">
                <Image
                  src="/headerIcon/Group 11.png"
                  alt="Overview Icon"
                  width={30}
                  height={30}
                />
                <Link
                  href="/"
                  className="hover:text-blue-500 font-semibold leading-[100%]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
                    fontFamily: "Afacad, sans-serif",
                    letterSpacing: "0%",
                  }}
                >
                  Overview
                </Link>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/headerIcon/Group 12.png"
                  alt="Overview Icon"
                  width={30}
                  height={30}
                />
                <a
                  href="/PeptideDatabase"
                  className="hover:text-blue-500 font-semibold leading-[100%]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
                    fontFamily: "Afacad, sans-serif",
                    letterSpacing: "0%",
                  }}
                >
                  Peptide Database
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/headerIcon/Group 13.png"
                  alt="Overview Icon"
                  width={30}
                  height={30}
                />
                <a
                  href="/TakingPeptide"
                  className="hover:text-blue-500 font-semibold leading-[100%]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
                    fontFamily: "Afacad, sans-serif",
                    letterSpacing: "0%",
                  }}
                >
                  Taking Peptides
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/headerIcon/Group 14.png"
                  alt="Overview Icon"
                  width={30}
                  height={30}
                />
                <a
                  href="/DosageSimulator"
                  className="hover:text-blue-500 font-semibold leading-[100%]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
                    fontFamily: "Afacad, sans-serif",
                    letterSpacing: "0%",
                  }}
                >
                  Dosage Simulator
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/headerIcon/Group 15.png"
                  alt="Overview Icon"
                  width={30}
                  height={30}
                />
                <a
                  href="/Resources"
                  className="hover:text-blue-500 font-semibold leading-[100%]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
                    fontFamily: "Afacad, sans-serif",
                    letterSpacing: "0%",
                  }}
                >
                  Resources
                </a>
              </li>
            </ul>

            <ul className="text-gray-900 text-2xl text-app font-semibold space-y-6 max-sm:space-y-3 z-10 pb-[4rem]">
              <li className="flex items-center space-x-4">
                <Image
                  src="/headerIcon/Group 21.png"
                  alt="Overview Icon"
                  width={30}
                  height={30}
                />
                <a
                  href="/AiAssistant"
                  className="hover:text-blue-500 font-semibold leading-[100%]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
                    fontFamily: "Afacad, sans-serif",
                    letterSpacing: "0%",
                  }}
                >
                  AI Assistant
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/headerIcon/Group 22.png"
                  alt="Overview Icon"
                  width={30}
                  height={30}
                />
                <a
                  href="/CaseStudies"
                  className="hover:text-blue-500 font-semibold leading-[100%]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
                    fontFamily: "Afacad, sans-serif",
                    letterSpacing: "0%",
                  }}
                >
                  Case Studies
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/headerIcon/Group 23.png"
                  alt="Overview Icon"
                  width={30}
                  height={30}
                />
                <a
                  href="/Location"
                  className="hover:text-blue-500 font-semibold leading-[100%]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
                    fontFamily: "Afacad, sans-serif",
                    letterSpacing: "0%",
                  }}
                >
                  Research Updates
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/headerIcon/Group 24.png"
                  alt="Overview Icon"
                  width={30}
                  height={30}
                />
                <a
                  href="/Discussion"
                  className="hover:text-blue-500 font-semibold leading-[100%]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 24px)", // Min: 14px, Preferred: 2vw, Max: 24px
                    fontFamily: "Afacad, sans-serif",
                    letterSpacing: "0%",
                  }}
                >
                  Discussion Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Position All PNGs Inside This Wrapper */}
          <div className="absolute inset-0">
            {/* small Red PNG */}
            <Image
              src="/headerIcon/small-red.png"
              alt="small Red"
              width={40}
              height={40}
              className="absolute top-[50%] left-[20%] sm:top-[12%] sm:left-[88%]"
            />

            {/* big Red PNG */}
            <Image
              src="/headerIcon/big-red.png"
              alt="big Red"
              width={70}
              height={70}
              className="absolute top-[50%] left-[10%] sm:top-[18%] sm:left-[80%]"
            />

            {/* Big Blue PNG */}
            <Image
              src="/headerIcon/big-blue.png"
              alt="Big blue"
              width={40}
              height={40}
              className="absolute top-[50%] left-[15%] sm:top-[80%] sm:left-[20%]"
            />

            {/* Small Blue PNG */}
            <Image
              src="/headerIcon/small-blue.png"
              alt="Big blue"
              width={20}
              height={20}
              className="absolute top-[50%] left-[10%] sm:top-[88%] sm:left-[16%]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
