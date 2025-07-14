"use client";
import { useState } from "react";
import Image from "next/image";

import Step1 from "@/components/onboarding/Step1";
import Step2 from "@/components/onboarding/Step2";
import Step3 from "@/components/onboarding/Step3";
import ProgressBar from "@/components/onboarding/ProgressBar";

export default function OnBoard() {
  const [step, setStep] = useState(1);

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className=" min-h-[100vh]  items-center justify-center  flex flex-col md:flex-row md:justify-between max-sm:p-4 px-4 py-6 2xl:px-8 2xl:py-8 gap-4 md:gap-8 xl:gap-12">
      {/* === Left Section === */}
      <div className="hidden md:flex w-full md:w-[48%] h-[500px]  lg:h-[calc(100vh-64px)] lg:max-h-[975px] max-w-[922px] p-[2px] rounded-[48px]  items-center justify-center">
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
          <div className="relative z-10 flex items-center justify-center w-full h-full p-8">
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

      {/* === Right Section === */}
      <div className="md:w-[52%] flex justify-center items-center max-sm:mt-6 max-sm:mb-20">
        {/* adding transition for smooth hight to grow   */}
        <div className="w-full max-w-[496px] h-auto transform transition-all duration-400  ">
          {/* BACK BUTTON (Global for all steps except Step 1) */}
          {step > 1 && (
            <Image
              src="/onboarding/onboard-back.svg"
              alt="PeptideMD Logo"
              width={40}
              height={40}
              className="mb-6 h-10 w-10 cursor-pointer"
              onClick={handleBack}
            />
          )}

          {/* PROGRESS BAR */}
          <ProgressBar step={step} />

          {/* STEP RENDERING */}
          {step === 1 && <Step1 onContinue={() => setStep(2)} />}
          {step === 2 && <Step2 onContinue={() => setStep(3)} />}
          {step === 3 && <Step3 onContinue={() => console.log("Submit API")} />}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import Image from "next/image";

// export default function OnBoard() {
//   return (
//     <div className="min-h-screen grid grid-rows-[1fr_auto]">
//       {/* === Content Area === */}
//       <div
//         className=" flex flex-col  md:flex-row md:justify-between max-sm:p-4 px-4 py-6 2xl:py-8 [@media(min-width:1600px)]:p-
//             xl:pl-10 2xl:pl-20 gap-4 md:gap-8 xl:gap-12 2xl:gap-34"
//       >
//         {/* Left Section */}
//         <div
//           className="w-full md:w-[48%] md:h-[calc(100vh-64px)] lg:h-[calc(100vh-66px)] [@media(min-width:1600px)]:h-[calc(100vh-104px)]
//                  [@media(min-width:1600px)]::mt-[2rem] max-h-[975px] max-w-[922px] p-[2px] rounded-[48px] flex items-center justify-center"
//         >
//           <div className="relative w-full h-full rounded-[16px] overflow-hidden">
//             {/* Background video */}
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//             >
//               <source src="/authIcons/authVid.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Dark translucent overlay */}
//             <div className="absolute inset-0 bg-[#000D1F]/32"></div>

//             {/* Foreground content */}
//             <div className="relative z-10 flex items-center justify-center w-full h-full p-8">
//               <Image
//                 src="/authIcons/authLogo.png"
//                 alt="PeptideMD Logo"
//                 width={492}
//                 height={211}
//                 className="w-auto xl:!w-[492px] h-auto xl:!h-[211px] object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-[52%] flex justify-start items-center  max-sm:mt-6 max-sm:mb-20">
//           <div className="w-full max-w-2xl max-sm:p-2 lg:px-4  bg-white rounded-3xl">
//             <h2 className="txt-32 font-semibold mb-2 text-[#25292A]">
//               How familiar are you with peptides?
//             </h2>
//             <p className="txt-20 text-[#51595A]  mb-6">
//               This helps us tailor content based on your experience level.
//             </p>
//             {/* Select Button Group */}
//             <div className="flex flex-col gap-4">

//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
