"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

interface Props {
  onClose: () => void;
  onSubscribe: () => void;
}

export default function DashboardPopup({ onClose, onSubscribe }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly" | null>(
    null
  );

  // 🧠 Load previously selected plan
  useEffect(() => {
    const storedPlan = localStorage.getItem("selectedPlan") as
      | "annual"
      | "monthly"
      | null;
    if (storedPlan === "annual" || storedPlan === "monthly") {
      setSelectedPlan(storedPlan);
    }

    // 🚫 Disable body scroll on mount
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubscribe = () => {
    if (!selectedPlan) return;
    localStorage.setItem("hasSubscribed", "true");
    localStorage.setItem("selectedPlan", selectedPlan);
    onSubscribe();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
      <div
        className=" dashboard-popup-scroll  w-full max-w-md sm:max-w-[470px] rounded-xl bg-[#224674] px-6 py-4 shadow-xl overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 2rem)" }} // 🧠 Ensures only popup scrolls
      >
        {/* Header */}
        <h2 className="text-3xl font-medium mb-4 text-center text-white">
          Upgrade to Peptide Pro
        </h2>

        {/* Image */}
        <Image
          src="/Dashboard/popup/popupImage.png"
          alt="Upgrade to Peptide Pro"
          width={363}
          height={153}
          className="mx-auto mb-4 w-[323px] h-[123px] object-contain"
        />

        {/* Features List */}
        <div className="text-white text-lg mb-4">
          <p className="mb-2">What’s included</p>
          <ul className="space-y-1 text-base">
            {[
              "Personalized Peptide Recommendations",
              "Videos Suggestions",
              "AI Assistant Guidance",
              "Dosage Tracking",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <BsCheckCircleFill className="mt-1 h-4 w-4 text-[#FFA8C6]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Plan Cards */}
        <div className="space-y-4">
          {/* Annual Plan */}
          <div
            onClick={() => setSelectedPlan("annual")}
            className={`cursor-pointer ${
              selectedPlan === "annual"
                ? "bg-[#C8E4FC]/30 border-2 border-[#C8E4FC]"
                : "border-2 border-[#C8E4FC]"
            } rounded-xl px-3 py-2 flex justify-between items-start gap-2`}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-xl text-white">Annual Plan</p>
                <span className="rounded-full bg-[#FFD3E2] px-2 text-sm text-[#DD6F94]">
                  Best value
                </span>
              </div>
              <p className="text-[#C8E4FC] text-base">
                Save 17% with yearly billing
              </p>
            </div>
            <div className="text-right">
              <p className="text-white text-lg font-medium">$200 / yr.</p>
              <p className="text-[#C8E4FC] text-sm line-through font-medium">
                $240
              </p>
            </div>
          </div>

          {/* Monthly Plan */}
          <div
            onClick={() => setSelectedPlan("monthly")}
            className={`cursor-pointer ${
              selectedPlan === "monthly"
                ? "bg-[#C8E4FC]/30 border-2 border-[#C8E4FC]"
                : "border-2 border-[#C8E4FC]"
            } rounded-xl px-3 py-2 flex justify-between items-start gap-2`}
          >
            <div className="flex flex-col gap-1">
              <p className="text-xl text-white">Monthly Plan</p>
              <p className="text-[#C8E4FC] text-base">Billed Monthly</p>
            </div>
            <div>
              <p className="text-white text-lg font-medium">$20 / mo.</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-2">
          <button
            onClick={handleSubscribe}
            className=" cursor-pointer w-full rounded-full bg-[#C8E4FC] px-4 py-2 text-[#224674] font-semibold"
          >
            Subscribe
          </button>
          <button
            onClick={onClose}
            className="w-full rounded-full text-[#C8E4FC] font-semibold px-4 py-2"
          >
            <span className="cursor-pointer">Explore for Free</span>
          </button>
        </div>
      </div>
    </div>
  );
}



// Bilal Code
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { BsCheckCircleFill } from "react-icons/bs";

// interface Props {
//   onClose: () => void;
//   onSubscribe: () => void;
// }

// export default function DashboardPopup({ onClose, onSubscribe }: Props) {
//   const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly" | null>(
//     null
//   );

//   // 👇 Load previously selected plan if exists
//   useEffect(() => {
//     const storedPlan = localStorage.getItem("selectedPlan") as
//       | "annual"
//       | "monthly"
//       | null;
//     if (storedPlan === "annual" || storedPlan === "monthly") {
//       setSelectedPlan(storedPlan);
//     }
//   }, []);

//   const handleSubscribe = () => {
//     if (!selectedPlan) return;
//     localStorage.setItem("hasSubscribed", "true");
//     localStorage.setItem("selectedPlan", selectedPlan);
//     onSubscribe();
//   };

//   return (
//     <div className="fixed inset-0 bg-[#00000033] flex justify-center items-center z-50 p-4">
//       <div
//         className="bg-[#224674] p-6 sm:p-8 rounded-xl shadow-xl max-w-md sm:max-w-lg w-full 
//        overflow-y-auto custom-scroll"
//       >
//         {/* --> thin scrollbar */}

//         <h2 className="txt-40 font-medium mb-4 text-center text-white">
//           Upgrade to Peptide Pro
//         </h2>

//         <Image
//           src="/Dashboard/popup/popupImage.png"
//           alt="Upgrade to Peptide Pro"
//           width={363}
//           height={173}
//           className="mx-auto mb-4"
//         />

//         <div className="text-white txt-20 mb-6">
//           <p className="mb-2">What’s included</p>
//           <ul className="list-none mb-3 space-y-2">
//             {[
//               "Personalized Peptide Recommendations",
//               "Videos Suggestions",
//               "AI Assistant Guidance",
//               "Dosage Tracking",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start gap-2">
//                 <BsCheckCircleFill className="w-5 h-5 text-[#FFA8C6] mt-1" />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="txt-20">
//           {/* Annual Plan */}
//           <div
//             onClick={() => setSelectedPlan("annual")}
//             className={`cursor-pointer ${
//               selectedPlan === "annual"
//                 ? "border-2 border-[#C8E4FC] bg-[#C8E4FC]/30"
//                 : "border-2 border-[#C8E4FC] "
//             } flex flex-row items-start justify-between mb-4 rounded-xl px-4 py-3`}
//           >
//             <div className="flex flex-col gap-2">
//               <div className="flex flex-row gap-2">
//                 <p className="text-white">Annual Plan</p>
//                 <div className="txt-14 bg-[#FFD3E2] text-[#DD6F94] rounded-full px-2 py-1">
//                   Best value
//                 </div>
//               </div>
//               <p className="text-[#C8E4FC]">Save 17% with yearly billing</p>
//             </div>
//             <div className="text-right">
//               <p className="txt-20 font-bold text-white">$200 / yr.</p>
//               <p className="txt-16 font-medium text-[#C8E4FC] line-through">
//                 $240
//               </p>
//             </div>
//           </div>

//           {/* Monthly Plan */}
//           <div
//             onClick={() => setSelectedPlan("monthly")}
//             className={`cursor-pointer ${
//               selectedPlan === "monthly"
//                 ? "border-2 border-[#C8E4FC] bg-[#C8E4FC]/30"
//                 : "border-2 border-[#C8E4FC] "
//             } flex flex-row items-start justify-between mb-4 rounded-xl px-4 py-3`}
//           >
//             <div className="flex flex-col gap-2">
//               <p className="text-white">Monthly Plan</p>
//               <p className="text-[#C8E4FC]">Billed Monthly</p>
//             </div>
//             <div>
//               <p className="txt-20 font-bold text-white">$20 / mo.</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-end gap-4 txt-18 mt-6">
//           <button
//             className="bg-[#C8E4FC] text-[#224674] font-medium px-4 py-2 rounded-full"
//             onClick={handleSubscribe}
//           >
//             Subscribed
//           </button>
//           <button
//             className="text-[#C8E4FC] font-medium px-4 py-2 rounded-full"
//             onClick={onClose}
//           >
//             Explore for Free
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
