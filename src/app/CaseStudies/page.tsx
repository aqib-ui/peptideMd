// "use client"

// import React, {useState} from "react";
// import Image from "next/image";

// const CaseStudiesPage = () => {
//       const [showNewSection, setShowNewSection] = React.useState(false);

//   return (
//     <>
//       {/* heading */}
//       <div className="container mx-auto px-8 py-10">
//         <h1
//           className="text-4xl font-bold md:text-6xl lg:text-[72px]"
//           style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//         >
//           Clinical
//           <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
//             Case Studies
//           </span>
//         </h1>
//         <h2
//           className="text-[24px] font-medium leading-[100%] mt-6 mb-10 max-w-2xl"
//           style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//         >
//           AI Recommendations, AI Response, Video Suggestions and Community
//           Discussion Links
//         </h2>
//       </div>

//       <div className="md:mt-30 md:mb-100">

//         {/* three gradient div */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-10 px-10"

//         >
//           {[
//             {
//               title: "View Research Case Studies.",
//               desc: "Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam sagittis morbi est adipiscing.",
//             },
//             {
//               title: "User-Submitted Stories",
//               desc: "Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam sagittis morbi est adipiscing.",
//             },
//             {
//               title: "Expert Reviews & Insights",
//               desc: "Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam sagittis morbi est adipiscing.",
//             },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="gradient-card-border w-full max-w-[443px] h-auto rounded-[1.875rem] min-h-0 cursor-pointer"
//                onClick={() => setShowNewSection(true)}
//             //   className="cursor-pointer"
//             >
//               <div className="p-6 shadow-lg rounded-[1.875rem] flex flex-col items-start bg-white w-full h-full transition-colors
//                duration-500 ease-in-out group cursor-pointer">
//                 <h2
//                   className="text-[clamp(18px,5vw,34px)] font-semibold leading-[100%] mt-4 md:mt-6 text-left"
//                   style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//                 >
//                   {item.title}
//                 </h2>
//                 <h2
//                   className="text-[clamp(16px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-6 text-left"
//                   style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//                 >
//                   {item.desc}
//                 </h2>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* color divs */}

//         {/* 1st div */}
//         <div className="my-10 px-1 md:px-1 mx-10">
//           <div className="bg-[#F7B6DB] py-1 md:py-1 px-4 md:px-10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="w-full text-center md:text-left">
//               <h2
//                 className="text-[clamp(18px,5vw,36px)] font-semibold leading-[100%] mt-6 max-w-2xl"
//                 style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//               >
//                 Relevant Research Updates.
//               </h2>
//               <h2
//                 className="text-[clamp(16px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-7"
//                 style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//               >
//                 Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam
//                 sagittis morbi est adipiscing.
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* 2nd div */}
//         <div className="my-10 px-1 md:px-1 mx-10">
//           <div className="bg-[#C5B3FF] py-1 text-black md:py-1 px-4 md:px-10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="w-full text-center md:text-left">
//               <h2
//                 className="text-[clamp(18px,5vw,36px)] font-semibold leading-[100%] mt-6 max-w-2xl"
//                 style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//               >
//                 Relevant Research Updates.
//               </h2>
//               <h2
//                 className="text-[clamp(16px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-7"
//                 style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//               >
//                 Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam
//                 sagittis morbi est adipiscing.
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* 3rd div */}
//         <div className="my-10 px-1 md:px-1 mx-10 bg-[#F7B6DB] rounded-[50px]">
//           <div className=" py-1 md:py-1 px-4 md:px-10  flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="w-full text-center md:text-left">
//               <h2
//                 className="text-[clamp(18px,5vw,36px)] font-semibold leading-[100%] mt-6 max-w-2xl"
//                 style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//               >
//                 Relevant Research Updates.
//               </h2>
//               <h2
//                 className="text-[clamp(16px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-7"
//                 style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//               >
//                 Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam
//                 sagittis morbi est adipiscing.
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* 4th div */}
//         <div className="my-10 px-1 md:px-1 mx-10">
//           <div className="bg-[#C5B3FF] py-1 text-black md:py-1 px-4 md:px-10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="w-full text-center md:text-left">
//               <h2
//                 className="text-[clamp(18px,5vw,36px)] font-semibold leading-[100%] mt-6 max-w-2xl"
//                 style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//               >
//                 Relevant Research Updates.
//               </h2>
//               <h2
//                 className="text-[clamp(16px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-7"
//                 style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//               >
//                 Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam
//                 sagittis morbi est adipiscing.
//               </h2>
//             </div>
//           </div>
//         </div>







//               ) : (
//                 // NEW full page section
//                 <div className="md:mt-50 md:mb-100 mb-10 md:mx-50 mx-5">
//                   <div className="rounded-4xl flex justify-center items-center">
//                     <h2
//                       className="text-xl sm:text-2xl md:text-3xl font-semibold text-center"
//                       style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//                     >
//                       Ask questions about peptides, their applications, and latest
//                       research findings
//                     </h2>
//                   </div>

//                   <div
//                     className="p-[2px] min-h-screen rounded-[3rem] md:mt-10 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
//                     style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//                   >
//                     <div className="bg-white min-h-[120vh]  rounded-[3rem] p-6 sm:p-10  flex flex-col items-start justify-between">
//                       {/* Avatar + Text */}
//                       <div className="flex items-start gap-4 max-w-3xl w-full mt-6">
//                         <Image
//                           src="/aiAssistant/aiAvatar.png"
//                           alt="Card Image"
//                           width={64}
//                           height={64}
//                           className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white"
//                         />
//                         <div className="flex flex-col">
//                           <h2
//                             className="text-base sm:text-lg md:text-2xl bg-[#94C4ED]/30 p-6 sm:p-8 font-semibold rounded-tr-[2rem] rounded-br-[2rem] rounded-bl-[2rem]"
//                             style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//                           >
//                             Hello! I'm your peptide research assistant. How can I help
//                             you today?
//                           </h2>
//                         </div>
//                       </div>

//                       <div className="flex mx-5 gap-4 w-[95%] mt-6">
//                         <input
//                           type="text"
//                           placeholder="Ask About peptides..."
//                           className="bg-gray-100 px-6 sm:px-10 w-full p-4 sm:p-5 text-base sm:text-xl md:text-2xl font-medium rounded-full placeholder:text-sm sm:placeholder:text-base md:placeholder:text-xl"
//                         />
//                         <div className="text-white text-4xl sm:text-5xl md:text-6xl p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]">
//                           {/* <TiLocationArrow className="p-1 sm:p-2" /> */}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}



//       </div>
//     </>
//   );
// };

// export default CaseStudiesPage;











"use client";

import React, { useState } from "react";

import  MoleculeTopLeftAnimation  from "@/component/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";

const CaseStudiesPage = () => {
  const [showNewSection, setShowNewSection] = useState(false);

  return (
    <>
      {/* heading */}
      <div className="">
        <MoleculeTopLeftAnimation
          mainheading="Clinical"
          span="Case Studies"
          para="AI Recommendations, AI Response, Video Suggestions and Community Discussion Links"
        />
      </div>

      <div className="md:mt-30 md:mb-100">
        {/* Conditional section */}
        {!showNewSection ? (
          <>
            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-10 px-10">
              {[
                {
                  title: "View Research Case Studies.",
                  desc: "Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam sagittis morbi est adipiscing.",
                },
                {
                  title: "User-Submitted Stories",
                  desc: "Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam sagittis morbi est adipiscing.",
                },
                {
                  title: "Expert Reviews & Insights",
                  desc: "Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam sagittis morbi est adipiscing.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="gradient-card-border w-full max-w-[443px] h-auto rounded-[1.875rem] min-h-0 cursor-pointer"
                  onClick={() => setShowNewSection(true)}
                >
                  <div className="p-6  rounded-[1.875rem] flex flex-col items-start bg-app w-full h-full transition-colors duration-500 ease-in-out group cursor-pointer">
                    <h2
                      className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-semibold leading-[100%] mt-4 md:mt-6 text-left"
                      style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                    >
                      {item.title}
                    </h2>
                    <h2
                      className="text-[clamp(20px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-6 text-left"
                      style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                    >
                      {item.desc}
                    </h2>
                  </div>
                </div>
              ))}
            </div>

            {/* Colored Divs */}
            {/* {["#F7B6DB", "#C5B3FF", "#F7B6DB", "#C5B3FF"].map((bg, i) => (
              <div key={i} className="my-10 px-1 md:px-1 mx-10">
                <div
                  className={`bg-[${bg}] py-1 md:py-1 px-4 md:px-10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-4`}
                >
                  <div className="w-full text-center md:text-left">
                    <h2
                      className="text-[clamp(18px,5vw,36px)] font-semibold leading-[100%] mt-6 max-w-2xl"
                      style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                    >
                      Relevant Research Updates.
                    </h2>
                    <h2
                      className="text-[clamp(16px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-7"
                      style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Convallis donec
                      aliquam sagittis morbi est adipiscing.
                    </h2>
                  </div>
                </div>
              </div>
            ))} */}
            {/* color divs */}

            {/* 1st div */}
            <div className="my-10 px-1 md:px-1 mx-10">
              <div className="bg-[#F7B6DB] text-black py-1 md:py-1 px-4 md:px-10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full text-center md:text-left">
                  <h2
                    className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold leading-[100%] mt-6 max-w-2xl"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Relevant Research Updates.
                  </h2>
                  <h2
                    className="text-[clamp(20px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-7"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam
                    sagittis morbi est adipiscing.
                  </h2>
                </div>
              </div>
            </div>

            {/* 2nd div */}
            <div className="my-10 px-1 md:px-1 mx-10">
              <div className="bg-[#C5B3FF] py-1 text-black md:py-1 px-4 md:px-10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full text-center md:text-left">
                  <h2
                    className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold leading-[100%] mt-6 max-w-2xl"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Relevant Research Updates.
                  </h2>
                  <h2
                    className="text-[clamp(20px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-7"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam
                    sagittis morbi est adipiscing.
                  </h2>
                </div>
              </div>
            </div>

            {/* 3rd div */}
            <div className="my-10 px-1 md:px-1 mx-10 opacity-50">
              <div className=" bg-[#F7B6DB] text-black py-1 md:py-1 px-4 md:px-10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full text-center md:text-left">
                  <h2
                    className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold leading-[100%] mt-6 max-w-2xl"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Relevant Research Updates.
                  </h2>
                  <h2
                    className="text-[clamp(20px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-7"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam
                    sagittis morbi est adipiscing.
                  </h2>
                </div>
              </div>
            </div>

            {/* 4th div */}
            <div className="my-10 px-1 md:px-1 mx-10 opacity-50">
              <div className="bg-[#C5B3FF] py-1 text-black md:py-1 px-4 md:px-10 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full text-center md:text-left">
                  <h2
                    className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold leading-[100%] mt-6 max-w-2xl"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Relevant Research Updates.
                  </h2>
                  <h2
                    className="text-[clamp(20px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-7"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Convallis donec aliquam
                    sagittis morbi est adipiscing.
                  </h2>
                </div>
              </div>
            </div>
          </>
        ) : (
          // NEW full page section
          <div className="md:mt-30 md:mb-100 mb-50 md:mx-10 mx-5">
            {/* 4th div */}
            <div className="my-10">
              <div
                onClick={() => setShowNewSection(true)}
                className="cursor-pointer"
              >
                <div className="p-[3px] rounded-[30px] mx-10 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]">
                  <div className="px-5 py-10 gap-2 rounded-[30px] flex max-md:flex-col justify-between items-center bg-app">
                    {/* left side */}
                    <div className="md:ml-5">
                      <h2
                        className="text-[24px] md:text-[28px] lg:text-[34px]  font-semibold leading-[100%] mt-6 max-w-2xl"
                        style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                      >
                        Peptide Case Studies & Success Stories.
                      </h2>
                      <h2
                        className="text-[clamp(20px,3.5vw,24px)] font-medium leading-[100%] mt-3 mb-10 max-w-3xl"
                        style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                      >
                        Lorem ipsum dolor sit amet consectetur. Convallis donec
                        aliquam sagittis morbi est adipiscing.
                      </h2>
                    </div>

                    {/* right side */}
                    <div
                      className="px-10 flex max-md:flex-col gap-4 font-semibold text-[clamp(20px,3.5vw,24px)] items-center justify-center"
                      style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                    >
                      <button
                        className=" w-full flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
                bg-[#F7B6DB] rounded-full    transition duration-200"
                      >
                        Approve
                      </button>
                      <button
                        className="w-full flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
                bg-[#C5B3FF] rounded-full    transition duration-200"
                      >
                        Publish
                      </button>
                    </div>
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
                <div className="p-[3px] rounded-[30px] mx-10 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]">
                  <div className="px-5 py-10 rounded-[30px] flex max-md:flex-col justify-between items-center bg-app">
                    {/* left side */}
                    <div className="md:ml-5">
                      <h2
                        className="text-[clamp(24px,5vw,34px)] font-semibold leading-[100%] mt-6 max-w-2xl"
                        style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                      >
                        Peptide Case Studies & Success Stories.
                      </h2>
                      <h2
                        className="text-[clamp(20px,5vw,24px)] font-medium leading-[100%] mt-3 mb-10 max-w-3xl"
                        style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                      >
                        Lorem ipsum dolor sit amet consectetur. Convallis donec
                        aliquam sagittis morbi est adipiscing.
                      </h2>
                    </div>

                    {/* right side */}
                    <div
                      className="px-10 flex max-md:flex-col gap-4 font-semibold text-[clamp(20px,3.5vw,24px)] items-center justify-center"
                      style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                    >
                      <button
                        className="w-full flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
                bg-[#F7B6DB] rounded-full    transition duration-200"
                      >
                        Approve
                      </button>
                      <button
                        className="w-full flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
                bg-[#C5B3FF] rounded-full    transition duration-200"
                      >
                        Publish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </>
  );
};

export default CaseStudiesPage;

