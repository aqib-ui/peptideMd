"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const menuItemsLeft = [
  {
    title: "Overview",
    icon: "/headerIcon/overview-icon.svg",
    href: "/",
  },
  {
    title: "Videos",
    icon: "/headerIcon/prep-video.svg",
    href: "/Dashboard/videos",
  },
  {
    title: "Articles",
    icon: "/headerIcon/prep-article.svg",
    href: "/Dashboard/articles",
  },
];

const menuItemsRight = [
  {
    title: "Peptide Database",
    icon: "/headerIcon/prep-database.svg",
    href: "/Dashboard/peptides",
  },
  {
    title: "Podcast",
    icon: "/headerIcon/prep-podcast.svg",
    href: "/Dashboard/podcast",
  },
  {
    title: "Case Studies",
    icon: "/headerIcon/case-icon.svg",
    href: "/Dashboard/case-studies",
  },
];
interface SidebarContentProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function SidebarContent({
  isOpen,
  setIsOpen,
}: SidebarContentProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      // Restore scroll when the component unmounts
      document.body.style.overflow = "unset";
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-app shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header Section */}
      <div className="absolute top-1 lg:top-4 left-4 right-4 lg:px-7 flex justify-between items-center z-10 2xl:max-w-[1920px] 2xl:w-full 2xl:mx-auto">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="/headerIcon/logo.png"
            alt="Logo"
            width={200}
            height={50}
            className="cursor-pointer "
          />
        </Link>

        <button
          onClick={() => setIsOpen(false)}
          className="relative top-0 lg:top-4 lg:right-4 xl:right-6 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] 2xl:w-[90px] 2xl:h-[90px] focus:outline-none flex items-center justify-center cursor-pointer"
          aria-label="Close Menu"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] rounded-full p-[2px] opacity-40" />
          <div className="absolute inset-[2px] bg-app rounded-full flex items-center justify-center z-10">
            <Image
              src="/headerIcon/minimize.png"
              alt="Close"
              width={70}
              height={70}
              className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[70px] 2xl:h-[70px]"
            />
          </div>
        </button>
      </div>

      {/* Main Content with Precise Border Shape */}
      <div className="flex items-center justify-center h-full w-full   ">
        <div className="relative ]  w-full max-w-[85%] md:max-w-[75%]    min-h-[500px] md:min-h-[454px] xl:min-h-[520px] xl:max-w-[70%] 2xl:max-w-[1078px] 2xl:min-h-[654px]    ">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] p-[4px] opacity-80 rounded-[120px_60px_120px_120px] md:rounded-[200px_70px_200px_200px] lg:rounded-[280px_80px_280px_280px]" />
          {/* Content Background */}
          <div className="absolute  inset-[2px] bg-app  z-10 overflow-hidden rounded-[120px_60px_120px_120px] md:rounded-[200px_70px_200px_200px] lg:rounded-[280px_80px_280px_280px]">
            <div className="flex flex-col items-center w-full h-full justify-evenly md:mt-8">
              <div className="flex flex-col md:flex-row gap-6  md:gap-16 lg:gap-32 xl:gap-54 2xl:gap-72 ">
                {/* Left Column */}
                <div className="flex flex-col justify-center space-y-6  pr-0 md:pr-4">
                  {menuItemsLeft.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      {...(item.title === "Overview" && {
                        onClick: () => setIsOpen(false),
                      })}
                      className="group flex items-center gap-3 md:gap-4"
                    >
                      <div className="relative w-7 h-7 md:w-8 md:h-8">
                        <Image
                          src={item.icon}
                          alt={`${item.title} Icon`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[#1F1F1F] text-xl md:text-2xl lg:text-3xl font-semibold  group-hover:text-[#224674] transition-colors">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Right Column */}
                <div className=" flex flex-col justify-center space-y-6  pl-0 md:pl-4 ">
                  {menuItemsRight.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="group flex items-center gap-3 md:gap-4"
                    >
                      <div className="relative w-7 h-7 md:w-8 md:h-8">
                        <Image
                          src={item.icon}
                          alt={`${item.title} Icon`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[#1F1F1F] text-xl md:text-2xl lg:text-3xl font-semibold  group-hover:text-[#224674] transition-colors">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className=" flex justify-center gap-4">
                <AuthButton href="/Signup" variant="primary">
                  Signup
                </AuthButton>
                <AuthButton href="/Login" variant="secondary">
                  Log In
                </AuthButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
    </div>
  );
}

// Auth Button Component
function AuthButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <button
        className={`
        px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3.5 rounded-full font-semibold text-sm md:text-base lg:text-lg
        transition-colors duration-300 min-w-[100px] md:min-w-[120px] lg:min-w-[174px]
        ${
          variant === "primary"
            ? "bg-[#224674] text-white hover:bg-[#1a3558]"
            : "bg-[#C8E4FC] text-[#224674] hover:bg-[#b0d4f8]"
        }
      `}
      >
        {children}
      </button>
    </Link>
  );
}

// "use client";

// import Image from "next/image";
// import Link from "next/link";

// interface SidebarContentProps {
//   isOpen: boolean;
//   setIsOpen: (open: boolean) => void;
// }

// export default function SidebarContent({
//   isOpen,
//   setIsOpen,
// }: SidebarContentProps) {
//   const handleMenuClick = () => {
//     // setIsOpen(!isOpen);
//     console.log("Menu button clicked");
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-app shadow-2xl z-50 \
//         transform transition-transform duration-300 ease-in-out \
//         ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//     >
//       {/* Header Section with Logo & Close Button */}
//       <div className="absolute top-4 left-4 right-4 px-6 flex justify-between items-center z-10">
//         <Link href="/" onClick={handleMenuClick}>
//           <Image
//             src="/headerIcon/logo.png"
//             alt="Logo"
//             width={200}
//             height={50}
//             className="cursor-pointer"
//           />
//         </Link>

//         <button
//           onClick={() => setIsOpen(false)}
//           className="relative w-[70px] h-[70px] focus:outline-none flex items-center justify-center cursor-pointer"
//           aria-label="Close Menu"
//         >
//           <div
//             className="absolute inset-0 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] \
//               rounded-full p-[2.5px] opacity-40"
//           ></div>

//           <div className="absolute inset-[2.5px] bg-app rounded-full flex items-center justify-center z-10">
//             <Image
//               src="/headerIcon/minimize.png"
//               alt="Close"
//               width={50}
//               height={50}
//             />
//           </div>
//         </button>
//       </div>

//       {/* Sidebar Content */}
//       <div className="flex items-center justify-center h-full bg-app">
//         <div
//           className="relative flex flex-wrap items-center justify-center gap-0 xl:gap-6 \
//             [@media(min-width:1400px)]:gap-y-8 [@media(min-width:1400px)]:gap-x-20 [@media(min-width:1500px)]:gap-x-24 \
//             [@media(min-width:1600px)]:gap-x-48 p-8 xl:p-4 [@media(min-width:1700px)]:px-36 [@media(min-width:1700px)]:pt-32 \
//             w-full max-w-[95%] sm:max-w-[48%] xl:max-w-[55%] [@media(min-width:1700px)]:max-w-[65.278%] \
//             min-h-[470px] xl:min-h-[500px] 2xl:min-h-[550px] [@media(min-width:1700px)]:min-h-[704px] \
//             mr-6 ml-6 mx-auto mt-8 max-md:mt-16 2xl:mt-16 [@media(min-width:1700px)]:mt-24 transition-all duration-300 ease-in-out"
//         >
//           <div
//             className="  absolute inset-0 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] p-[4px] opacity-70 \
//               rounded-[12rem] [@media(min-width:1700px)]:rounded-[15rem] rounded-tr-[4rem] [@media(min-width:1700px)]:rounded-tr-[5rem]"
//           ></div>

//           <div
//             className="absolute inset-[2px] bg-app rounded-[12rem] [@media(min-width:1700px)]:rounded-[15rem] \
//             rounded-tr-[4rem] [@media(min-width:1700px)]:rounded-tr-[5rem] z-10"
//           ></div>

//           <ul className="text-gray-900 txt-34 text-app xl:mt-10 mt-3 font-semibold space-y-8 max-xl:space-y-3 z-10">
//             {/** Primary Links **/}
//             <li className="flex items-center space-x-4">
//               <Image
//                 src="/headerIcon/overview-icon.svg"
//                 alt="Overview Icon"
//                 width={30}
//                 height={30}
//               />
//               <Link
//                 href="/"
//                 className="hover:text-blue-500 leading-[100%] font-afacad"
//               >
//                 Overview
//               </Link>
//             </li>
//             <li className="flex items-center space-x-4">
//               <Image
//                 src="/headerIcon/video-icon.svg"
//                 alt="Taking Peptides Icon"
//                 width={30}
//                 height={30}
//               />
//               <Link
//                 href="/TakingPeptide"
//                 className="hover:text-blue-500 leading-[100%] font-afacad"
//               >
//                 Videos
//               </Link>
//             </li>
//             <li className="flex items-center space-x-4">
//               <Image
//                 src="/headerIcon/article-icon.svg"
//                 alt="Dosage Simulator Icon"
//                 width={30}
//                 height={30}
//               />
//               <Link
//                 href="/DosageSimulator"
//                 className="hover:text-blue-500 leading-[100%] font-afacad"
//               >
//                 Articles
//               </Link>
//             </li>
//           </ul>

//           <ul className="text-gray-900 txt-34 text-app xl:mt-10 mt-3 font-semibold space-y-8 max-xl:space-y-3 z-10">
//             {/** Secondary Links **/}
//             <li className="flex items-center space-x-4">
//               <Image
//                 src="/headerIcon/video-icon.svg"
//                 alt="Peptide Database Icon"
//                 width={30}
//                 height={30}
//               />
//               <Link
//                 href="/PeptideDatabase"
//                 className="hover:text-blue-500 leading-[100%] font-afacad"
//               >
//                 Peptide Database
//               </Link>
//             </li>
//             <li className="flex items-center space-x-4">
//               <Image
//                 src="/headerIcon/podcast-icon.svg"
//                 alt="Research Updates Icon"
//                 width={30}
//                 height={30}
//               />
//               <Link
//                 href="/Location"
//                 className="hover:text-blue-500 leading-[100%] font-afacad"
//               >
//                 Podcast
//               </Link>
//             </li>
//             <li className="flex items-center space-x-4">
//               <Image
//                 src="/headerIcon/podcast-icon.svg"
//                 alt="Case Studies Icon"
//                 width={30}
//                 height={30}
//               />
//               <Link
//                 href="/CaseStudies"
//                 className="hover:text-blue-500 leading-[100%] font-afacad"
//               >
//                 Case Studies
//               </Link>
//             </li>
//           </ul>

//           {/* Buttons for Signup and Login */}
//           <div className="flex items-center justify-center gap-1 sm:gap-4 z-10">
//             <Link href="/Signup" className="txt-18 font-semibold">
//               <button className="bg-[#224674] w-auto h-auto xl:w-[174px] xl:h-[56px] text-white px-6 py-2 rounded-full transition-colors duration-300">
//                 Signup
//               </button>
//             </Link>
//             <Link href="/Login" className="txt-18 font-semibold">
//               <button className="bg-[#C8E4FC] text-[#224674] w-auto h-auto xl:w-[174px] xl:h-[56px] px-6 py-2 rounded-full transition-colors duration-300">
//                 Log In
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Decorative PNGs */}
//         <div className="absolute inset-0">
//           <Image
//             src="/headerIcon/small-red.png"
//             alt="small Red"
//             width={40}
//             height={40}
//             className="absolute hidden xl:block top-[10.5%] left-[88%] 2xl:top-[10.5%] 2xl:left-[90%]"
//           />
//           <Image
//             src="/headerIcon/big-red.png"
//             alt="big Red"
//             width={70}
//             height={70}
//             className="absolute hidden xl:block top-[13%] left-[81%] 2xl:top-[14%] 2xl:left-[84%]"
//           />
//           <Image
//             src="/headerIcon/big-blue.png"
//             alt="Big blue"
//             width={40}
//             height={40}
//             className="absolute hidden xl:block top-[88%] left-[17%]"
//           />
//           <Image
//             src="/headerIcon/small-blue.png"
//             alt="Small blue"
//             width={20}
//             height={20}
//             className="absolute hidden xl:block top-[94%] left-[13%]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
