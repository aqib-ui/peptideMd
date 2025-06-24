"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isExploreHovered, setIsExploreHovered] = useState(false);

  return (
    <header className="border-b border-[#D8DFE0] p-[7.5px_40px]">
      <div className="w-full mx-auto flex justify-between items-center h-20">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/headerIcon/logo.svg"
              alt="Logo"
              width={150} // Adjust width as needed
              height={74} // Adjust height as needed
              className=" w-[150px] h-[74px] cursor-pointer  "
            />
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex  items-center">
          <Link
            href="/"
            className="hover:underline mr-5 text-[#224674] text-xl font-medium  transition-colors duration-200"
          >
            Dashboard
          </Link>

          {/* Explore with dropdown - Fixed with hover bridge */}
          <div
            className="relative pr-3 mr-2 "
            onMouseEnter={() => setIsExploreHovered(true)}
            onMouseLeave={() => setIsExploreHovered(false)}
          >
            <div className="flex items-center space-x-1 cursor-pointer group">
              <span className="text-[#626D6F]  hover:text-[#224674] text-xl font-medium transition-colors">
                Explore
              </span>
              {isExploreHovered ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M20.4195 15.8001C20.2295 15.8001 20.0395 15.7301 19.8895 15.5801L13.3695 9.06008C12.8895 8.58008 12.1095 8.58008 11.6295 9.06008L5.10953 15.5801C4.81953 15.8701 4.33953 15.8701 4.04953 15.5801C3.75953 15.2901 3.75953 14.8101 4.04953 14.5201L10.5695 8.00008C11.6295 6.94008 13.3595 6.94008 14.4295 8.00008L20.9495 14.5201C21.2395 14.8101 21.2395 15.2901 20.9495 15.5801C20.7995 15.7201 20.6095 15.8001 20.4195 15.8001Z"
                    fill="#626D6F"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9995 16.7996C11.2995 16.7996 10.5995 16.5296 10.0695 15.9996L3.54953 9.47965C3.25953 9.18965 3.25953 8.70965 3.54953 8.41965C3.83953 8.12965 4.31953 8.12965 4.60953 8.41965L11.1295 14.9396C11.6095 15.4196 12.3895 15.4196 12.8695 14.9396L19.3895 8.41965C19.6795 8.12965 20.1595 8.12965 20.4495 8.41965C20.7395 8.70965 20.7395 9.18965 20.4495 9.47965L13.9295 15.9996C13.3995 16.5296 12.6995 16.7996 11.9995 16.7996Z"
                    fill="#626D6F"
                  />
                </svg>
              )}
            </div>

            {/* Hover bridge to prevent gap issues */}
            <div
              className={`absolute top-full left-0 w-full h-2 ${
                isExploreHovered ? "" : "hidden"
              }`}
              onMouseEnter={() => setIsExploreHovered(true)}
            />

            {/* Dropdown menu */}
            <div
              className={` overflow-hidden absolute left-full -translate-x-7 top-full mt-2 w-46 bg-white shadow-xl rounded-xl border-1 border-[#D8DFE0] z-30 transition-all duration-300 ${
                isExploreHovered
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
              onMouseEnter={() => setIsExploreHovered(true)}
              onMouseLeave={() => setIsExploreHovered(false)}
            >
              <ul className="overflow-hidden">
                <li className="flex items-center gap-3 p-4 border-b border-[#D8DFE0]  hover:bg-blue-50 cursor-pointer transition-colors">
                  <Image
                    src={"/headerIcon/video-square.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span className="text-[#626D6F] text-xl font-medium">
                    Videos
                  </span>
                </li>
                <li className="flex items-center gap-3 p-4 border-b border-[#D8DFE0] hover:bg-blue-50 cursor-pointer transition-colors">
                  <Image
                    src={"/headerIcon/microphone.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span className="text-[#626D6F] text-xl font-medium">
                    Podcast
                  </span>
                </li>
                <li className="flex items-center gap-3 p-4 border-b border-[#D8DFE0] hover:bg-blue-50 cursor-pointer transition-colors">
                  <Image
                    src={"/headerIcon/document-text.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span className="text-[#626D6F] text-xl font-medium">
                    Articles
                  </span>
                </li>
                <li className="flex items-center gap-3 p-4  hover:bg-blue-50 cursor-pointer transition-colors">
                  <Image
                    src={"/headerIcon/case study.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span className="text-[#626D6F] text-xl font-medium ">
                    Case Studies
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="#"
            className="  mr-5 text-[#626D6F] text-xl font-medium hover:text-[#224674] transition-colors"
          >
            Peptides
          </Link>
          <Link
            href="#"
            className=" mr-5 text-[#626D6F] text-xl font-medium hover:text-[#224674] transition-colors"
          >
            Chat with Pepi
          </Link>
          <Link
            href="#"
            className=" mr-5 text-[#626D6F] text-xl font-medium hover:text-[#224674] transition-colors"
          >
            Dosage
          </Link>
          <Link
            href="#"
            className=" mr-5 text-[#626D6F] text-xl font-medium hover:text-[#224674] transition-colors"
          >
            More
          </Link>
        </nav>

        {/* User Avatar */}
        <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FFC02E] to-[#D7D43C] cursor-pointer ">
          <div className="w-10 h-10 rounded-full text-lg bg-[#C8E4FC] flex items-center justify-center  text-[#224674] font-semibold">
            JC
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown, ChevronUp, Video, Mic, BookOpen, Share2 } from "lucide-react";

// const Header = () => {
//   const [isExploreOpen, setIsExploreOpen] = useState(false);

//   return (
//   <header className="border-b p-[7.5px_40px]">
//       <div className="w-full mx-auto flex justify-between items-center h-20">
//         {/* Left: Logo */}
//         <div className="flex items-center space-x-2">
//           <Link href="/">
//             <Image
//               src="/headerIcon/logo.svg"
//               alt="Logo"
//               width={150} // Adjust width as needed
//               height={74} // Adjust height as needed
//               className=" cursor-pointer  "
//             />
//           </Link>
//         </div>
//         {/* Center: Navigation */}
//         <nav className="flex space-x-8 items-center relative">
//           <Link href="#" className="hover:underline text-blue-900 font-semibold">
//             Dashboard
//           </Link>

//           {/* Explore + Dropdown hover */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsExploreOpen(true)}
//             onMouseLeave={() => setIsExploreOpen(false)}
//           >
//             {/* Explore Button */}
//             <button className="flex items-center space-x-1 hover:text-blue-800 font-medium">
//               <span>Explore</span>
//               {isExploreOpen ? (
//                 <ChevronUp size={16} />
//               ) : (
//                 <ChevronDown size={16} />
//               )}
//             </button>

//             {/* Dropdown Menu */}
//             <div
//               className={`absolute left-0 top-8 w-48 bg-white shadow-lg rounded-md border transition-all duration-200 ease-in-out z-20
//               ${
//                 isExploreOpen
//                   ? "opacity-100 translate-y-0 pointer-events-auto"
//                   : "opacity-0 -translate-y-2 pointer-events-none"
//               }`}
//             >
//               <ul className="py-2">
//                 <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   <Video size={16} className="text-pink-500" /> Videos
//                 </li>
//                 <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   <Mic size={16} className="text-pink-500" /> Podcast
//                 </li>
//                 <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   <BookOpen size={16} className="text-pink-500" /> Articles
//                 </li>
//                 <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   <Share2 size={16} className="text-pink-500" /> Case Studies
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <Link href="#" className="hover:text-blue-800">
//             Peptides
//           </Link>
//           <Link href="#" className="hover:text-blue-800">
//             Chat with Pepi
//           </Link>
//           <Link href="#" className="hover:text-blue-800">
//             Dosage
//           </Link>
//           <Link href="#" className="hover:text-blue-800">
//             More
//           </Link>
//         </nav>

//         {/* Right: User Profile Circle */}
//         <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold">
//           JC
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
