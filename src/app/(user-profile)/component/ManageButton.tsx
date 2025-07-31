// // // /*
// // //   components/ManageButton.tsx
// // //   Reusable Manage button that toggles the CardModal
// // // */
// // // import React, { useState } from "react";
// // // import { LuChevronRight } from "react-icons/lu";
// // // import { FaCheckCircle } from "react-icons/fa";
// // // import { RxCross2 } from "react-icons/rx";

// // // import CardModal from "./CardModal";

// // // interface ManageButtonProps {
// // //   planLabel?: string;
// // //   planSubtext?: string;
// // // }

// // // export default function ManageButton({
// // //   planLabel = "Monthly",
// // //   planSubtext = "Your Plan",
// // // }: ManageButtonProps) {
// // //   const [open, setOpen] = useState(false);
// // //   return (
// // //     <>
// // //       <div className="bg-white p-4 rounded-xl w-full flex justify-between items-center">
// // //         <div className="flex items-center gap-3">
// // //           <img
// // //             src="/profileIcons/manage-icon.svg"
// // //             alt="Manage Icon"
// // //             className="h-8 w-8"
// // //           />
// // //           <div className="flex flex-col items-start">
// // //             <p className="txt-18 font-semibold">{planLabel}</p>
// // //             <p className="text-[#626D6F] txt-16">{planSubtext}</p>
// // //           </div>
// // //         </div>
// // //         <button
// // //           onClick={() => setOpen(true)}
// // //           className="flex items-center gap-1.5 font-semibold rounded-full px-4 py-1 h-[32px] min-w-[90px] bg-[#C8E4FC] text-[#224674] txt-14 flex-shrink-0"
// // //         >
// // //           Manage
// // //           <LuChevronRight className="h-5 w-5 flex-shrink-0" />
// // //         </button>
// // //       </div>

// // //       {/* <CardModal isOpen={open} onClose={() => setOpen(false)}> */}
// // //       <CardModal
// // //         isOpen={open}
// // //         onClose={() => setOpen(false)}
// // //         modalClassName="max-h-[484px] "
// // //       >
// // //         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// // //           <div className="w-full ">
// // //             <div className="flex gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// // //               <h2 className="txt-32 font-semibold mb- 4 text-[#25292A]">
// // //                 Manage Subscription
// // //               </h2>
// // //               <div
// // //                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
// // //                 onClick={() => setOpen(false)}
// // //               >
// // //                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
// // //               </div>
// // //             </div>
// // //             <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-6 py-4 rounded-lg">
// // //               <div className="flex w-full items-start justify-between">
// // //                 <div>
// // //                   <h2 className="txt-18 font-normal text-[#25292A]">
// // //                     Monthly Plan
// // //                   </h2>
// // //                   <p className="txt-16 font-normal text-[#626D6F]">
// // //                     Billed Monthly
// // //                   </p>
// // //                 </div>
// // //                 <div className="txt-20 font-semibold text-[#25292A]">
// // //                   $20 / mo.
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <h2 className="txt-16 font-semibold text-[#25292A]">
// // //                   What's included
// // //                 </h2>
// // //                 <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
// // //                   <li className="flex items-center gap-2 w-full">
// // //                     <FaCheckCircle className="text-[#DD6F94]" />
// // //                     Personalized Peptide Recommendations{" "}
// // //                   </li>
// // //                   <li className="flex items-center gap-2 w-full">
// // //                     <FaCheckCircle className="text-[#DD6F94]" />
// // //                     Videos Suggestions
// // //                   </li>
// // //                   <li className="flex items-center gap-2 w-full">
// // //                     <FaCheckCircle className="text-[#DD6F94]" />
// // //                     AI Assistant Guidance
// // //                   </li>
// // //                   <li className="flex items-center gap-2 w-full">
// // //                     <FaCheckCircle className="text-[#DD6F94]" />
// // //                     Dosage Tracking
// // //                   </li>
// // //                 </ul>
// // //               </div>
// // //             </div>
// // //             <p className="w-full flex items-center mt-3 justify-center txt-14 text-[#626D6F]">
// // //               Your next billing will start on 24 July 2025
// // //             </p>
// // //           </div>

// // //           <button
// // //             onClick={() => {
// // //               /* handle action */
// // //             }}
// // //             className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
// // //           >
// // //             Change Plan
// // //           </button>
// // //         </div>
// // //       </CardModal>
// // //     </>
// // //   );
// // // }

// // // /*
// // //   Usage in page.tsx
// // //   import ManageButton from '@/components/ManageButton';
// // //   ...
// // //   <ManageButton planLabel="Monthly" planSubtext="Your Plan" />
// // // */

// // import React, { useState } from "react";
// // import { LuChevronRight } from "react-icons/lu";
// // import { FaCheckCircle } from "react-icons/fa";
// // import { RxCross2 } from "react-icons/rx";
// // import CardModal from "./CardModal";

// // interface ManageButtonProps {
// //   planLabel?: string;
// //   planSubtext?: string;
// // }

// // export default function ManageButton({
// //   planLabel = "Monthly",
// //   planSubtext = "Your Plan",
// // }: ManageButtonProps) {
// //   const [open, setOpen] = useState(false);
// //   const [currentPlan, setCurrentPlan] = useState<'monthly' | 'annual'>('monthly');

// //   const handlePlanChange = () => {
// //     setCurrentPlan(currentPlan === 'monthly' ? 'annual' : 'monthly');
// //   };

// //   return (
// //     <>
// //       <div className="bg-white p-4 rounded-xl w-full flex justify-between items-center">
// //         <div className="flex items-center gap-3">
// //           <img
// //             src="/profileIcons/manage-icon.svg"
// //             alt="Manage Icon"
// //             className="h-8 w-8"
// //           />
// //           <div className="flex flex-col items-start">
// //             <p className="txt-18 font-semibold">
// //               {currentPlan === 'monthly' ? 'Monthly' : 'Annual'} Plan
// //             </p>
// //             <p className="text-[#626D6F] txt-16">{planSubtext}</p>
// //           </div>
// //         </div>
// //         <button
// //           onClick={() => setOpen(true)}
// //           className="flex items-center gap-1.5 font-semibold rounded-full px-4 py-1 h-[32px] min-w-[90px] bg-[#C8E4FC] text-[#224674] txt-14 flex-shrink-0"
// //         >
// //           Manage
// //           <LuChevronRight className="h-5 w-5 flex-shrink-0" />
// //         </button>
// //       </div>

// //       <CardModal
// //         isOpen={open}
// //         onClose={() => setOpen(false)}
// //         modalClassName="max-h-[484px]"
// //       >
// //         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// //           <div className="w-full">
// //             <div className="flex gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// //               <h2 className="txt-32 font-semibold text-[#25292A]">
// //                 Change Plan
// //               </h2>
// //               <div
// //                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
// //                 onClick={() => setOpen(false)}
// //               >
// //                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
// //               </div>
// //             </div>

// //             {/* Monthly Plan Card */}
// //             {currentPlan === 'monthly' ? (
// //               <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-6 py-4 rounded-lg">
// //                 <div className="flex w-full items-start justify-between">
// //                   <div>
// //                     <h2 className="txt-18 font-normal text-[#25292A]">
// //                       Monthly Plan
// //                     </h2>
// //                     <p className="txt-16 font-normal text-[#626D6F]">
// //                       Billed Monthly
// //                     </p>
// //                   </div>
// //                   <div className="txt-20 font-semibold text-[#25292A]">
// //                     $20 / mo.
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <h2 className="txt-16 font-semibold text-[#25292A]">
// //                     What's included
// //                   </h2>
// //                   <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Personalized Peptide Recommendations
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Videos Suggestions
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       AI Assistant Guidance
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Dosage Tracking
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             ) : (
// //               /* Annual Plan Card */
// //               <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-6 py-4 rounded-lg">
// //                 <div className="flex w-full items-start justify-between">
// //                   <div>
// //                     <div className="flex items-center gap-2">
// //                       <h2 className="txt-18 font-normal text-[#25292A]">
// //                         Annual Plan
// //                       </h2>
// //                       <span className="bg-[#DD6F94] text-white txt-12 font-semibold px-2 py-1 rounded-full">
// //                         Save 20%
// //                       </span>
// //                     </div>
// //                     <p className="txt-16 font-normal text-[#626D6F]">
// //                       Billed Annually
// //                     </p>
// //                   </div>
// //                   <div className="txt-20 font-semibold text-[#25292A]">
// //                     $200 / yr.
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <h2 className="txt-16 font-semibold text-[#25292A]">
// //                     What's included
// //                   </h2>
// //                   <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Personalized Peptide Recommendations
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Videos Suggestions
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       AI Assistant Guidance
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Dosage Tracking
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             )}

// //             {currentPlan === 'monthly' && (
// //               <p className="w-full flex items-center mt-3 justify-center txt-14 text-[#626D6F]">
// //                 Your next billing will start on 24 July 2025
// //               </p>
// //             )}
// //           </div>

// //           <div className="flex gap-3 w-full">
// //             <button
// //               onClick={handlePlanChange}
// //               className="flex-1 py-4 bg-[#224674] text-white rounded-full txt-16"
// //             >
// //               {currentPlan === 'monthly' ? 'Upgrade Plan' : 'Change Plan'}
// //             </button>
// //             <button
// //               onClick={() => {
// //                 /* handle cancel action */
// //               }}
// //               className="flex-1 py-4 bg-white text-[#224674] border border-[#224674] rounded-full txt-16"
// //             >
// //               Cancel Plan
// //             </button>
// //           </div>
// //         </div>
// //       </CardModal>
// //     </>
// //   );
// // }

// //  working not mapped
// // import React, { useState } from "react";
// // import { LuChevronRight } from "react-icons/lu";
// // import { FaCheckCircle } from "react-icons/fa";
// // import { RxCross2 } from "react-icons/rx";
// // import CardModal from "./CardModal";

// // interface ManageButtonProps {
// //   planLabel?: string;
// //   planSubtext?: string;
// // }

// // export default function ManageButton({
// //   planLabel = "Monthly",
// //   planSubtext = "Your Plan",
// // }: ManageButtonProps) {
// //   const [open, setOpen] = useState(false);
// //   const [currentPlan, setCurrentPlan] = useState<'monthly' | 'annual'>('monthly');

// //   const handlePlanChange = () => {
// //     setCurrentPlan(currentPlan === 'monthly' ? 'annual' : 'monthly');
// //   };

// //   return (
// //     <>
// //       <div className="bg-white p-4 rounded-xl w-full flex justify-between items-center">
// //         <div className="flex items-center gap-3">
// //           <img
// //             src="/profileIcons/manage-icon.svg"
// //             alt="Manage Icon"
// //             className="h-8 w-8"
// //           />
// //           <div className="flex flex-col items-start">
// //             <p className="txt-18 font-semibold">
// //               {currentPlan === 'monthly' ? 'Monthly' : 'Annual'} Plan
// //             </p>
// //             <p className="text-[#626D6F] txt-16">{planSubtext}</p>
// //           </div>
// //         </div>
// //         <button
// //           onClick={() => setOpen(true)}
// //           className="flex items-center gap-1.5 font-semibold rounded-full px-4 py-1 h-[32px] min-w-[90px] bg-[#C8E4FC] text-[#224674] txt-14 flex-shrink-0"
// //         >
// //           Manage
// //           <LuChevronRight className="h-5 w-5 flex-shrink-0" />
// //         </button>
// //       </div>

// //       <CardModal
// //         isOpen={open}
// //         onClose={() => setOpen(false)}
// //         modalClassName="max-h-[484px]"
// //       >
// //         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// //           <div className="w-full">
// //             <div className="flex gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// //               <h2 className="txt-32 font-semibold text-[#25292A]">
// //                 {currentPlan === 'monthly' ? 'Manage Subscription' : 'Change Plan'}
// //               </h2>
// //               <div
// //                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
// //                 onClick={() => setOpen(false)}
// //               >
// //                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
// //               </div>
// //             </div>

// //             {/* Monthly Plan Card */}
// //             {currentPlan === 'monthly' ? (
// //               <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-6 py-4 rounded-lg">
// //                 <div className="flex w-full items-start justify-between">
// //                   <div>
// //                     <h2 className="txt-18 font-normal text-[#25292A]">
// //                       Monthly Plan
// //                     </h2>
// //                     <p className="txt-16 font-normal text-[#626D6F]">
// //                       Billed Monthly
// //                     </p>
// //                   </div>
// //                   <div className="txt-20 font-semibold text-[#25292A]">
// //                     $20 / mo.
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <h2 className="txt-16 font-semibold text-[#25292A]">
// //                     What's included
// //                   </h2>
// //                   <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Personalized Peptide Recommendations
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Videos Suggestions
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       AI Assistant Guidance
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Dosage Tracking
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             ) : (
// //               /* Annual Plan Card */
// //               <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-6 py-4 rounded-lg">
// //                 <div className="flex w-full items-start justify-between">
// //                   <div>
// //                     <div className="flex items-center gap-2">
// //                       <h2 className="txt-18 font-normal text-[#25292A]">
// //                         Annual Plan
// //                       </h2>
// //                       <span className="bg-[#FFD3E2] text-[#DD6F94] txt-12 font-semibold px-2 py-1 rounded-full">
// //                         Best Plan
// //                       </span>
// //                     </div>
// //                     <p className="txt-16 font-normal text-[#626D6F]">
// //                       Save 17% with yearly billing
// //                     </p>
// //                   </div>
// //                   <div className="txt-20 font-semibold text-[#25292A]">
// //                     $200 / yr.
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <h2 className="txt-16 font-semibold text-[#25292A]">
// //                     What's included
// //                   </h2>
// //                   <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Personalized Peptide Recommendations
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Videos Suggestions
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       AI Assistant Guidance
// //                     </li>
// //                     <li className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       Dosage Tracking
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             )}

// //             {currentPlan === 'monthly' && (
// //               <p className="w-full flex items-center mt-3 justify-center txt-14 text-[#626D6F]">
// //                 Your next billing will start on 24 July 2025
// //               </p>
// //             )}
// //           </div>

// //           {currentPlan === 'monthly' ? (
// //             <button
// //               onClick={handlePlanChange}
// //               className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
// //             >
// //               Upgrade Plan
// //             </button>
// //           ) : (
// //             <div className="flex flex-col gap-3 w-full">
// //               <button
// //                 onClick={handlePlanChange}
// //                 className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
// //               >
// //                 Change Plan
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   /* handle cancel action */
// //                 }}
// //                 className="w-full py-4 bg-white text-[#25292A] txt-18 font-semibold"
// //               >
// //                 Cancel Plan
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </CardModal>
// //     </>
// //   );
// // }

// // mapped and working as intene
// // import React, { useState } from "react";
// // import { LuChevronRight } from "react-icons/lu";
// // import { FaCheckCircle } from "react-icons/fa";
// // import { RxCross2 } from "react-icons/rx";
// // import CardModal from "./CardModal";

// // interface ManageButtonProps {
// //   planLabel?: string;
// //   planSubtext?: string;
// // }

// // // Define plan feature type
// // type PlanFeature = string;

// // // Define plan configuration type
// // interface PlanConfig {
// //   name: string;
// //   billing: string;
// //   price: string;
// //   heading: string;
// //   button: string;
// //   showBillingDate: boolean;
// //   billingDate?: string;
// //   savingsTag?: string;
// // }

// // // Feature list that can be reused for both plans
// // const planFeatures: PlanFeature[] = [
// //   "Personalized Peptide Recommendations",
// //   "Videos Suggestions",
// //   "AI Assistant Guidance",
// //   "Dosage Tracking"
// // ];

// // // Plan configuration object for easy updates
// // const planConfig: Record<'monthly' | 'annual', PlanConfig> = {
// //   monthly: {
// //     name: "Monthly Plan",
// //     billing: "Billed Monthly",
// //     price: "$20 / mo.",
// //     heading: "Manage Subscription",
// //     button: "Change Plan",
// //     showBillingDate: true,
// //     billingDate: "Your next billing will start on 24 July 2025"
// //   },
// //   annual: {
// //     name: "Annual Plan",
// //     billing: "Billed Annually",
// //     price: "$200 / yr.",
// //     heading: "Change Plan",
// //     button: "Upgrade Plan",
// //     showBillingDate: false,
// //     savingsTag: "Save 20%"
// //   }
// // };

// // export default function ManageButton({
// //   planLabel = "Monthly",
// //   planSubtext = "Your Plan",
// // }: ManageButtonProps) {
// //   const [open, setOpen] = useState(false);
// //   const [currentPlan, setCurrentPlan] = useState<'monthly' | 'annual'>('monthly');

// //   const handlePlanChange = () => {
// //     setCurrentPlan(currentPlan === 'monthly' ? 'annual' : 'monthly');
// //   };

// //   // Get current plan configuration
// //   const currentPlanConfig = planConfig[currentPlan];

// //   return (
// //     <>
// //       <div className="bg-white p-4 rounded-xl w-full flex justify-between items-center">
// //         <div className="flex items-center gap-3">
// //           <img
// //             src="/profileIcons/manage-icon.svg"
// //             alt="Manage Icon"
// //             className="h-8 w-8"
// //           />
// //           <div className="flex flex-col items-start">
// //             <p className="txt-18 font-semibold">
// //               {currentPlan === 'monthly' ? 'Monthly' : 'Annual'} Plan
// //             </p>
// //             <p className="text-[#626D6F] txt-16">{planSubtext}</p>
// //           </div>
// //         </div>
// //         <button
// //           onClick={() => setOpen(true)}
// //           className="flex items-center gap-1.5 font-semibold rounded-full px-4 py-1 h-[32px] min-w-[90px] bg-[#C8E4FC] text-[#224674] txt-14 flex-shrink-0"
// //         >
// //           Manage
// //           <LuChevronRight className="h-5 w-5 flex-shrink-0" />
// //         </button>
// //       </div>

// //       <CardModal
// //         isOpen={open}
// //         onClose={() => setOpen(false)}
// //         modalClassName="min-h-[484px] max-h-[501px]"
// //       >
// //         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// //           <div className="w-full">
// //             <div className="flex gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// //               <h2 className="txt-32 font-semibold text-[#25292A]">
// //                 {currentPlanConfig.heading}
// //               </h2>
// //               <div
// //                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
// //                 onClick={() => setOpen(false)}
// //               >
// //                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
// //               </div>
// //             </div>

// //             {/* Plan Card */}
// //             <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-3 py-2 md:px-6 md:py-4 rounded-lg">
// //               <div className="flex w-full items-start justify-between">
// //                 <div>
// //                   <div className="flex items-center md:gap-2 gap-2 ">
// //                     <h2 className="txt-18 font-normal text-[#25292A]">
// //                       {currentPlanConfig.name}
// //                     </h2>
// //                     {currentPlan === 'annual' && currentPlanConfig.savingsTag && (
// //                       <span className="bg-[#DD6F94] text-white txt-12 font-semibold px-2 py-1 rounded-full">
// //                         {currentPlanConfig.savingsTag}
// //                       </span>
// //                     )}
// //                   </div>
// //                   <p className="txt-16 font-normal text-[#626D6F]">
// //                     {currentPlanConfig.billing}
// //                   </p>
// //                 </div>
// //                 <div className="txt-20 font-semibold text-[#25292A]">
// //                   {currentPlanConfig.price}
// //                 </div>
// //               </div>

// //               <div>
// //                 <h2 className="txt-16 font-semibold text-[#25292A]">
// //                   What's included
// //                 </h2>
// //                 <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
// //                   {planFeatures.map((feature, index) => (
// //                     <li key={index} className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       {feature}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>

// //             {currentPlanConfig.showBillingDate && currentPlanConfig.billingDate && (
// //               <p className="w-full flex items-center mt-3 justify-center txt-14 text-[#626D6F]">
// //                 {currentPlanConfig.billingDate}
// //               </p>
// //             )}
// //           </div>

// //           {currentPlan === 'monthly' ? (
// //             <button
// //               onClick={handlePlanChange}
// //               className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
// //             >
// //               {currentPlanConfig.button}
// //             </button>
// //           ) : (
// //             <div className="flex flex-col gap-3 w-full">
// //               <button
// //                 onClick={handlePlanChange}
// //                 className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
// //               >
// //                 {currentPlanConfig.button}
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   /* handle cancel action */
// //                 }}
// //                 className="w-full py-4 bg-white border text-[#25292A] font-semibold txt-18"
// //               >
// //                 Cancel Plan
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </CardModal>
// //     </>
// //   );
// // }

// // import React, { useState, useMemo } from "react";
// // import { LuChevronRight } from "react-icons/lu";
// // import { FaCheckCircle } from "react-icons/fa";
// // import { RxCross2 } from "react-icons/rx";
// // import CardModal from "./CardModal";

// // interface ManageButtonProps {
// //   planLabel?: string;
// //   planSubtext?: string;
// // }

// // type PlanFeature = string;

// // interface PlanConfig {
// //   name: string;
// //   billing: string;
// //   price: string;
// //   heading: string;
// //   button: string;
// //   showBillingDate: boolean;
// //   features: PlanFeature[];
// //   savingsTag?: string;
// // }

// // const planConfig: Record<'monthly' | 'annual', PlanConfig> = {
// //   monthly: {
// //     name: "Monthly Plan",
// //     billing: "Billed Monthly",
// //     price: "$20 / mo.",
// //     heading: "Manage Subscription",
// //     button: "Upgrade Plan",
// //     showBillingDate: true,
// //     features: [
// //       "Personalized Peptide Recommendations",
// //       "Videos Suggestions",
// //       "AI Assistant Guidance",
// //       "Dosage Tracking"
// //     ]
// //   },
// //   annual: {
// //     name: "Annual Plan",
// //     billing: "Billed Annually",
// //     price: "$200 / yr.",
// //     heading: "Change Plan",
// //     button: "Change Plan",
// //     showBillingDate: false,
// //     savingsTag: "Best Value",
// //     features: [
// //       "Personalized Peptide Recommendations",
// //       "Videos Suggestions",
// //       "AI Assistant Guidance",
// //       "Dosage Tracking",
// //     ]
// //   }
// // };

// // export default function ManageButton({
// //   planLabel = "Monthly",
// //   planSubtext = "Your Plan",
// // }: ManageButtonProps) {
// //   const [open, setOpen] = useState(false);
// //   const [currentPlan, setCurrentPlan] = useState<'monthly' | 'annual'>('monthly');

// //   const handlePlanChange = () => {
// //     setCurrentPlan(currentPlan === 'monthly' ? 'annual' : 'monthly');
// //   };

// //   const currentPlanConfig = planConfig[currentPlan];

// //   // Calculate next billing date (1 month from today)
// //   const nextBillingDate = useMemo(() => {
// //     const today = new Date();
// //     const nextMonth = new Date(today);

// //     // Get the day of the month and the next month
// //     const currentDay = today.getDate();
// //     nextMonth.setMonth(nextMonth.getMonth() + 1);

// //     // Check if the day exists in next month
// //     const nextMonthCheck = new Date(nextMonth);
// //     nextMonthCheck.setDate(currentDay);

// //     // Handle month overflow (e.g., Jan 31 -> Feb)
// //     if (nextMonthCheck.getMonth() !== nextMonth.getMonth()) {
// //       // Use last day of next month
// //       return new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);
// //     }

// //     return nextMonthCheck;
// //   }, []);

// //   // Format date as "DD Month YYYY"
// //   const formattedBillingDate = useMemo(() => {
// //     return nextBillingDate.toLocaleDateString('en-US', {
// //       day: 'numeric',
// //       month: 'long',
// //       year: 'numeric'
// //     });
// //   }, [nextBillingDate]);

// //   return (
// //     <>
// //       <div className="bg-white p-4 rounded-xl w-full flex justify-between items-center">
// //         <div className="flex items-center gap-3">
// //           <img
// //             src="/profileIcons/manage-icon.svg"
// //             alt="Manage Icon"
// //             className="h-8 w-8"
// //           />
// //           <div className="flex flex-col items-start">
// //             <p className="txt-18 font-semibold">
// //               {currentPlan === 'monthly' ? 'Monthly' : 'Annual'} Plan
// //             </p>
// //             <p className="text-[#626D6F] txt-16">{planSubtext}</p>
// //           </div>
// //         </div>
// //         <button
// //           onClick={() => setOpen(true)}
// //           className="flex items-center gap-1.5 font-semibold rounded-full px-4 py-1 h-[32px] min-w-[90px] bg-[#C8E4FC] text-[#224674] txt-14 flex-shrink-0"
// //         >
// //           Manage
// //           <LuChevronRight className="h-5 w-5 flex-shrink-0" />
// //         </button>
// //       </div>

// //       <CardModal
// //         isOpen={open}
// //         onClose={() => setOpen(false)}
// //         modalClassName=" h-auto max-h-[501px]"
// //       >
// //         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// //           <div className="w-full">
// //             <div className="flex gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
// //               <h2 className="txt-32 font-semibold text-[#25292A]">
// //                 {currentPlanConfig.heading}
// //               </h2>
// //               <div
// //                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
// //                 onClick={() => setOpen(false)}
// //               >
// //                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
// //               </div>
// //             </div>

// //             <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-3 py-2 md:px-6 md:py-4 rounded-lg">
// //               <div className="flex w-full items-start justify-between">
// //                 <div>
// //                   <div className="flex items-center gap-2">
// //                     <h2 className="txt-18 font-normal text-[#25292A]">
// //                       {currentPlanConfig.name}
// //                     </h2>
// //                     {currentPlan === 'annual' && currentPlanConfig.savingsTag && (
// //                       <span className="bg-[#FFD3E2] text-[#DD6F94] txt-12 font-semibold px-2 py-1 rounded-full">
// //                         {currentPlanConfig.savingsTag}
// //                       </span>
// //                     )}
// //                   </div>
// //                   <p className="txt-16 font-normal text-[#626D6F]">
// //                     {currentPlanConfig.billing}
// //                   </p>
// //                 </div>
// //                 <div className="txt-20 font-semibold text-[#25292A]">
// //                   {currentPlanConfig.price}
// //                 </div>
// //               </div>

// //               <div>
// //                 <h2 className="txt-16 font-semibold text-[#25292A]">
// //                   What's included
// //                 </h2>
// //                 <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
// //                   {currentPlanConfig.features.map((feature, index) => (
// //                     <li key={index} className="flex items-center gap-2 w-full">
// //                       <FaCheckCircle className="text-[#DD6F94]" />
// //                       {feature}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>

// //             {currentPlanConfig.showBillingDate && (
// //               <p className="w-full flex items-center mt-3 justify-center txt-14 text-[#626D6F]">
// //                 Your next billing will start on {formattedBillingDate}
// //               </p>
// //             )}
// //           </div>

// //           {currentPlan === 'monthly' ? (
// //             <button
// //               onClick={handlePlanChange}
// //               className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
// //             >
// //               {currentPlanConfig.button}
// //             </button>
// //           ) : (
// //             <div className="flex flex-col gap-3 w-full">
// //               <button
// //                 onClick={handlePlanChange}
// //                 className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
// //               >
// //                 {currentPlanConfig.button}
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   /* handle cancel action */
// //                 }}
// //                 className="w-full py-4 bg-white text-[#224674] border border-[#224674] rounded-full txt-16"
// //               >
// //                 Cancel Plan
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </CardModal>
// //     </>
// //   );
// // }

// import React, { useState, useMemo } from "react";
// import { LuChevronRight } from "react-icons/lu";
// import { FaCheckCircle } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import CardModal from "./CardModal";
// import { PiWarningCircleLight } from "react-icons/pi";

// interface ManageButtonProps {
//   planLabel?: string;
//   planSubtext?: string;
// }

// type PlanFeature = string;

// interface PlanConfig {
//   name: string;
//   billing: string;
//   price: string;
//   heading: string;
//   button: string;
//   showBillingDate: boolean;
//   features: PlanFeature[];
//   savingsTag?: string;
// }

// const planConfig: Record<'monthly' | 'annual', PlanConfig> = {
//   monthly: {
//     name: "Monthly Plan",
//     billing: "Billed Monthly",
//     price: "$20 / mo.",
//     heading: "Manage Subscription",
//     button: "Upgrade Plan",
//     showBillingDate: true,
//     features: [
//       "Personalized Peptide Recommendations",
//       "Videos Suggestions",
//       "AI Assistant Guidance",
//       "Dosage Tracking"
//     ]
//   },
//   annual: {
//     name: "Annual Plan",
//     billing: "Billed Annually",
//     price: "$200 / yr.",
//     heading: "Change Plan",
//     button: "Change Plan",
//     showBillingDate: false,
//     savingsTag: "Best Value",
//     features: [
//       "Personalized Peptide Recommendations",
//       "Videos Suggestions",
//       "AI Assistant Guidance",
//       "Dosage Tracking",
//     ]
//   }
// };

// export default function ManageButton({
//   planLabel = "Monthly",
//   planSubtext = "Your Plan",
// }: ManageButtonProps) {
//   const [open, setOpen] = useState(false);
//   const [cancelModalOpen, setCancelModalOpen] = useState(false);
//   const [isCancelled, setIsCancelled] = useState(false);
//   const [currentPlan, setCurrentPlan] = useState<'monthly' | 'annual'>('monthly');

//   const handlePlanChange = () => {
//     setCurrentPlan(currentPlan === 'monthly' ? 'annual' : 'monthly');
//   };

//   // Function to open cancellation modal and close current modal
//   const handleOpenCancelModal = () => {
//     setOpen(false);  // Close current modal
//     setCancelModalOpen(true);  // Open cancellation modal
//   };

//   const currentPlanConfig = planConfig[currentPlan];

//   // Calculate next billing date (1 month from today)
//   const nextBillingDate = useMemo(() => {
//     const today = new Date();
//     const nextMonth = new Date(today);

//     // Get the day of the month and the next month
//     const currentDay = today.getDate();
//     nextMonth.setMonth(nextMonth.getMonth() + 1);

//     // Check if the day exists in next month
//     const nextMonthCheck = new Date(nextMonth);
//     nextMonthCheck.setDate(currentDay);

//     // Handle month overflow (e.g., Jan 31 -> Feb)
//     if (nextMonthCheck.getMonth() !== nextMonth.getMonth()) {
//       // Use last day of next month
//       return new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);
//     }

//     return nextMonthCheck;
//   }, []);

//   // Calculate cancellation end date (same as next billing date)
//   const cancellationEndDate = useMemo(() => {
//     return new Date(nextBillingDate);
//   }, [nextBillingDate]);

//   // Format date as "DD Month YYYY"
//   const formattedBillingDate = useMemo(() => {
//     return nextBillingDate.toLocaleDateString('en-US', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric'
//     });
//   }, [nextBillingDate]);

//   // Format cancellation date as "DD Month YYYY"
//   const formattedCancellationDate = useMemo(() => {
//     return cancellationEndDate.toLocaleDateString('en-US', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric'
//     });
//   }, [cancellationEndDate]);

//   // Handle cancellation confirmation
//   const handleConfirmCancellation = () => {
//     setIsCancelled(true);
//     setCancelModalOpen(false);
//   };

//   return (
//     <>
//       <div className="bg-white p-4 rounded-xl w-full flex flex-col justify-between items-center">
//         <div className="flex w-full justify-between items-start gap-3">
//           <div className="flex gap-3 items-center">
//             <img
//               src="/profileIcons/manage-icon.svg"
//               alt="Manage Icon"
//               className="h-8 w-8"
//             />
//             <div className="flex flex-col items-start">
//               <p className="txt-18 font-semibold">
//                 {currentPlan === 'monthly' ? 'Monthly' : 'Annual'} Plan
//               </p>
//               <p className="text-[#626D6F] txt-16">{planSubtext}</p>
//             </div>
//           </div>

//           <button
//             onClick={() => setOpen(true)}
//             className="flex items-center gap-1.5 font-semibold rounded-full px-4 py-1 h-[32px] min-w-[90px] bg-[#C8E4FC] text-[#224674] txt-14 flex-shrink-0"
//           >
//             Manage
//             <LuChevronRight className="h-5 w-5 flex-shrink-0" />
//           </button>
//         </div>

//         {/* Cancellation warning message inside card */}
//         {isCancelled && (
//           <div className="flex items-start p-4 rounded-xl border border-[#F1C34D] bg-[#FCF3DB] w-full mt-4 txt-16 text-[#25292A]">
//             <PiWarningCircleLight className=" min-w-[20px] min-h-[20px] w-5 h-5 mt-0.5 mr-2" />
//             <div>
//               Your current {currentPlan} plan remains active until {formattedCancellationDate}. After that,
//               your subscription will be cancelled and you cannot access premium features.
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Subscription Management Modal */}
//       <CardModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         modalClassName="min-h-[484px] max-h-[501px]"
//       >
//         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
//           <div className="w-full">
//             <div className="flex gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
//               <h2 className="txt-32 font-semibold text-[#25292A]">
//                 {currentPlanConfig.heading}
//               </h2>
//               <div
//                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
//                 onClick={() => setOpen(false)}
//               >
//                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
//               </div>
//             </div>

//             <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-3 py-2 md:px-6 md:py-4 rounded-lg">
//               <div className="flex w-full items-start justify-between">
//                 <div>
//                   <div className="flex items-center gap-2">
//                     <h2 className="txt-18 font-normal text-[#25292A]">
//                       {currentPlanConfig.name}
//                     </h2>
//                     {currentPlan === 'annual' && currentPlanConfig.savingsTag && (
//                       <span className="bg-[#FFD3E2] text-[#DD6F94] txt-12 font-semibold px-2 py-1 rounded-full">
//                         {currentPlanConfig.savingsTag}
//                       </span>
//                     )}
//                   </div>
//                   <p className="txt-16 font-normal text-[#626D6F]">
//                     {currentPlanConfig.billing}
//                   </p>
//                 </div>
//                 <div className="txt-20 font-semibold text-[#25292A]">
//                   {currentPlanConfig.price}
//                 </div>
//               </div>

//               <div>
//                 <h2 className="txt-16 font-semibold text-[#25292A]">
//                   What's included
//                 </h2>
//                 <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
//                   {currentPlanConfig.features.map((feature, index) => (
//                     <li key={index} className="flex items-center gap-2 w-full">
//                       <FaCheckCircle className="text-[#DD6F94]" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {currentPlanConfig.showBillingDate && (
//               <p className="w-full flex items-center mt-3 justify-center txt-14 text-[#626D6F]">
//                 Your next billing will start on {formattedBillingDate}
//               </p>
//             )}
//           </div>

//           {currentPlan === 'monthly' ? (
//             <button
//               onClick={handlePlanChange}
//               className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
//             >
//               {currentPlanConfig.button}
//             </button>
//           ) : (
//             <div className="flex flex-col gap-3 w-full">
//               <button
//                 onClick={handlePlanChange}
//                 className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
//               >
//                 {currentPlanConfig.button}
//               </button>
//               <button
//                 onClick={handleOpenCancelModal}
//                 className="w-full py-4 bg-white text-[#224674] border border-[#224674] rounded-full txt-16"
//               >
//                 Cancel Plan
//               </button>
//             </div>
//           )}
//         </div>
//       </CardModal>

//       {/* Cancellation Confirmation Modal */}
//       <CardModal
//         isOpen={cancelModalOpen}
//         onClose={() => setCancelModalOpen(false)}
//         modalClassName="min-h-[300px] max-h-[400px]"
//       >
//         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
//           <div className="w-full">
//             <div className="flex gap-4 items-start justify-between mb-6 w-full max-w-[448px]">
//               <h2 className="txt-32 font-semibold text-[#25292A]">
//                 Cancel Subscription
//               </h2>
//               <div
//                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
//                 onClick={() => setCancelModalOpen(false)}
//               >
//                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
//               </div>
//             </div>

//             <p className="txt-18 text-[#25292A] mb-8 text-center">
//               If you cancel now, you can still access your subscription until {formattedCancellationDate}.
//             </p>

//             <div className="flex justify-end gap-3 w-full">
//               <button
//                 onClick={() => setCancelModalOpen(false)}
//                 className="py-3 px-6 bg-white text-[#224674] border border-[#224674] rounded-full txt-16"
//               >
//                 Go Back
//               </button>
//               <button
//                 onClick={handleConfirmCancellation}
//                 className="py-3 px-6 bg-[#DD6F94] text-white rounded-full txt-16"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       </CardModal>
//     </>
//   );
// }

// import React, { useState, useMemo } from "react";
// import { LuChevronRight } from "react-icons/lu";
// import { FaCheckCircle } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { PiWarningCircleLight } from "react-icons/pi";
// import CardModal from "./CardModal";

// interface ManageButtonProps {
// //   currentPlan: 'monthly' | 'annual';
//   currentPlan: 'monthly' | 'annual' | null;
//   onPlanChange: (newPlan: 'monthly' | 'annual') => void;
// }

// type PlanFeature = string;

// interface PlanConfig {
//   name: string;
//   billing: string;
//   price: string;
//   heading: string;
//   button: string;
//   showBillingDate: boolean;
//   features: PlanFeature[];
//   savingsTag?: string;
// }

// const planConfig: Record<'monthly' | 'annual', PlanConfig> = {
//   monthly: {
//     name: "Monthly Plan",
//     billing: "Billed Monthly",
//     price: "$20 / mo.",
//     heading: "Manage Subscription",
//     button: "Change to Annual Plan",
//     showBillingDate: true,
//     features: [
//       "Personalized Peptide Recommendations",
//       "Videos Suggestions",
//       "AI Assistant Guidance",
//       "Dosage Tracking"
//     ]
//   },
//   annual: {
//     name: "Annual Plan",
//     billing: "Billed Annually",
//     price: "$200 / yr.",
//     heading: "Manage Subscription",
//     button: "Change to Monthly Plan",
//     showBillingDate: false,
//     savingsTag: "Best Value",
//     features: [
//       "Personalized Peptide Recommendations",
//       "Videos Suggestions",
//       "AI Assistant Guidance",
//       "Dosage Tracking",
//       "AI Assistant Guidance",
//       "Dosage Tracking",
//     ]
//   }
// };

// export default function ManageButton({
//   currentPlan,
//   onPlanChange,
// }: ManageButtonProps) {
//   const [open, setOpen] = useState(false);
//   const [cancelModalOpen, setCancelModalOpen] = useState(false);
//   const [isCancelled, setIsCancelled] = useState(false);
//    const effectivePlan = currentPlan || 'monthly';

// //   const currentPlanConfig = planConfig[currentPlan];
// const currentPlanConfig = planConfig[effectivePlan];

//   // Calculate next billing date
//   const nextBillingDate = useMemo(() => {
//     const today = new Date();
//     const nextMonth = new Date(today);
//     const currentDay = today.getDate();

//     nextMonth.setMonth(nextMonth.getMonth() + 1);
//     const nextMonthCheck = new Date(nextMonth);
//     nextMonthCheck.setDate(currentDay);

//     if (nextMonthCheck.getMonth() !== nextMonth.getMonth()) {
//       return new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);
//     }

//     return nextMonthCheck;
//   }, []);

//   // Format date as "DD Month YYYY"
//   const formattedBillingDate = useMemo(() =>
//     nextBillingDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
//   , [nextBillingDate]);

//   const formattedCancellationDate = useMemo(() =>
//     nextBillingDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
//   , [nextBillingDate]);

//   // Handle cancellation confirmation
//   const handleConfirmCancellation = () => {
//     setIsCancelled(true);
//     setCancelModalOpen(false);
//   };

//   const handlePlanChangeClick = () => {
//     const newPlan = currentPlan === 'monthly' ? 'annual' : 'monthly';
//     onPlanChange(newPlan);
//   };

//   return (
//     <>
//       <div className="bg-white p-4 rounded-xl w-full flex flex-col justify-between items-center">
//         <div className="flex w-full justify-between items-start gap-3">
//           <div className="flex gap-3 items-center">
//             <img
//               src="/profileIcons/manage-icon.svg"
//               alt="Manage Icon"
//               className="h-8 w-8"
//             />
//             <div className="flex flex-col items-start">
//               <p className="txt-18 font-semibold">
//                 {currentPlan === 'monthly' ? 'Monthly' : 'Annual'} Plan
//               </p>
//               <p className="text-[#626D6F] txt-16">Your Plan</p>
//             </div>
//           </div>

//           <button
//             onClick={() => setOpen(true)}
//             className="flex items-center gap-1.5 font-semibold rounded-full px-4 py-1 h-[32px] min-w-[90px] bg-[#C8E4FC] text-[#224674] txt-14 flex-shrink-0"
//           >
//             Manage
//             <LuChevronRight className="h-5 w-5 flex-shrink-0" />
//           </button>
//         </div>

//         {/* Cancellation warning message inside card */}
//         {isCancelled && (
//           <div className="flex items-start p-4 rounded-xl border border-[#F1C34D] bg-[#FCF3DB] w-full mt-4 txt-16 text-[#25292A]">
//             <PiWarningCircleLight className="text-[#F1C34D] min-w-[20px] min-h-[20px] w-5 h-5 mt-0.5 mr-2" />
//             <div>
//               Your current {currentPlan} plan remains active until {formattedCancellationDate}. After that,
//               your subscription will be cancelled and you cannot access premium features.
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Subscription Management Modal */}
//       <CardModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         modalClassName="min-h-[484px] max-h-[501px]"
//       >
//         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
//           <div className="w-full">
//             <div className="flex gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
//               <h2 className="txt-32 font-semibold text-[#25292A]">
//                 {currentPlanConfig.heading}
//               </h2>
//               <div
//                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
//                 onClick={() => setOpen(false)}
//               >
//                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
//               </div>
//             </div>

//             <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-3 py-2 md:px-6 md:py-4 rounded-lg">
//               <div className="flex w-full items-start justify-between">
//                 <div>
//                   <div className="flex items-center gap-2">
//                     <h2 className="txt-18 font-normal text-[#25292A]">
//                       {currentPlanConfig.name}
//                     </h2>
//                     {currentPlan === 'annual' && currentPlanConfig.savingsTag && (
//                       <span className="bg-[#FFD3E2] text-[#DD6F94] txt-12 font-semibold px-2 py-1 rounded-full">
//                         {currentPlanConfig.savingsTag}
//                       </span>
//                     )}
//                   </div>
//                   <p className="txt-16 font-normal text-[#626D6F]">
//                     {currentPlanConfig.billing}
//                   </p>
//                 </div>
//                 <div className="txt-20 font-semibold text-[#25292A]">
//                   {currentPlanConfig.price}
//                 </div>
//               </div>

//               <div>
//                 <h2 className="txt-16 font-semibold text-[#25292A]">
//                   What's included
//                 </h2>
//                 <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
//                   {currentPlanConfig.features.map((feature, index) => (
//                     <li key={index} className="flex items-center gap-2 w-full">
//                       <FaCheckCircle className="text-[#DD6F94]" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {currentPlanConfig.showBillingDate && (
//               <p className="w-full flex items-center mt-3 justify-center txt-14 text-[#626D6F]">
//                 Your next billing will start on {formattedBillingDate}
//               </p>
//             )}
//           </div>

//           <div className="flex flex-col gap-3 w-full">
//             <button
//               onClick={handlePlanChangeClick}
//               className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
//             >
//               {currentPlanConfig.button}
//             </button>
//             <button
//               onClick={() => setCancelModalOpen(true)}
//               className="w-full py-4 bg-white text-[#224674] border border-[#224674] rounded-full txt-16"
//             >
//               Cancel Plan
//             </button>
//           </div>
//         </div>
//       </CardModal>

//       {/* Cancellation Confirmation Modal */}
//       <CardModal
//         isOpen={cancelModalOpen}
//         onClose={() => setCancelModalOpen(false)}
//         modalClassName="min-h-[300px] max-h-[400px]"
//       >
//         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
//           <div className="w-full">
//             <div className="flex gap-4 items-start justify-between mb-6 w-full max-w-[448px]">
//               <h2 className="txt-32 font-semibold text-[#25292A]">
//                 Cancel Subscription
//               </h2>
//               <div
//                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
//                 onClick={() => setCancelModalOpen(false)}
//               >
//                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
//               </div>
//             </div>

//             <p className="txt-18 text-[#25292A] mb-8 text-center">
//               If you cancel now, you can still access your subscription until {formattedCancellationDate}.
//             </p>

//             <div className="flex justify-end gap-3 w-full">
//               <button
//                 onClick={() => setCancelModalOpen(false)}
//                 className="py-3 px-6 bg-white text-[#224674] border border-[#224674] rounded-full txt-16"
//               >
//                 Go Back
//               </button>
//               <button
//                 onClick={handleConfirmCancellation}
//                 className="py-3 px-6 bg-[#DD6F94] text-white rounded-full txt-16"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       </CardModal>
//     </>
//   );
// }

// import React, { useState, useMemo } from "react";
// import { LuChevronRight } from "react-icons/lu";
// import { FaCheckCircle } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { PiWarningCircleLight } from "react-icons/pi";
// import CardModal from "./CardModal";

// interface ManageButtonProps {
//   currentPlan: 'monthly' | 'annual' | null;
//   onPlanChange: (newPlan: 'monthly' | 'annual') => void;
// }

// type PlanFeature = string;

// interface PlanConfig {
//   name: string;
//   billing: string;
//   price: string;
//   heading: string;
//   button: string;
//   showBillingDate: boolean;
//   features: PlanFeature[];
//   savingsTag?: string;
// }

// const planConfig: Record<'monthly' | 'annual', PlanConfig> = {
//   monthly: {
//     name: "Monthly Plan",
//     billing: "Billed Monthly",
//     price: "$20 / mo.",
//     heading: "Manage Subscription",
//     button: "Change Plan",
//     showBillingDate: true,
//     features: [
//       "Personalized Peptide Recommendations",
//       "Videos Suggestions",
//       "AI Assistant Guidance",
//       "Dosage Tracking"
//     ]
//   },
//   annual: {
//     name: "Annual Plan",
//     billing: "Billed Annually",
//     price: "$200 / yr.",
//     heading: "Manage Subscription",
//     button: "Change Plan",
//     showBillingDate: false,
//     savingsTag: "Best Value",
//     features: [
//       "Personalized Peptide Recommendations",
//       "Videos Suggestions",
//       "AI Assistant Guidance",
//       "Dosage Tracking",
//       "AI Assistant Guidance",
//       "Dosage Tracking",
//     ]
//   }
// };

// export default function ManageButton({
//   currentPlan,
//   onPlanChange,
// }: ManageButtonProps) {
//   const [open, setOpen] = useState(false);
//   const [cancelModalOpen, setCancelModalOpen] = useState(false);
//   const [isCancelled, setIsCancelled] = useState(false);
//   const [modalView, setModalView] = useState<'manage' | 'change'>('manage');
//   const effectivePlan = currentPlan || 'monthly';
//   const currentPlanConfig = planConfig[effectivePlan];

//   // Calculate next billing date
//   const nextBillingDate = useMemo(() => {
//     const today = new Date();
//     const nextMonth = new Date(today);
//     const currentDay = today.getDate();

//     nextMonth.setMonth(nextMonth.getMonth() + 1);
//     const nextMonthCheck = new Date(nextMonth);
//     nextMonthCheck.setDate(currentDay);

//     if (nextMonthCheck.getMonth() !== nextMonth.getMonth()) {
//       return new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);
//     }

//     return nextMonthCheck;
//   }, []);

//   // Format date as "DD Month YYYY"
//   const formattedBillingDate = useMemo(() =>
//     nextBillingDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
//   , [nextBillingDate]);

//   const formattedCancellationDate = useMemo(() =>
//     nextBillingDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
//   , [nextBillingDate]);

//   // Handle cancellation confirmation
//   const handleConfirmCancellation = () => {
//     setIsCancelled(true);
//     setCancelModalOpen(false);
//   };

//   const handlePlanChangeClick = () => {
//     const newPlan = effectivePlan === 'monthly' ? 'annual' : 'monthly';
//     onPlanChange(newPlan);
//     setModalView('manage');
//   };

//   const handleOpenModal = () => {
//     setOpen(true);
//     setModalView('manage');
//   };

//   return (
//     <>
//       <div className="bg-white p-4 rounded-xl w-full flex flex-col justify-between items-center">
//         <div className="flex w-full justify-between items-start gap-3">
//           <div className="flex gap-3 items-center">
//             <img
//               src="/profileIcons/manage-icon.svg"
//               alt="Manage Icon"
//               className="h-8 w-8"
//             />
//             <div className="flex flex-col items-start">
//               <p className="txt-18 font-semibold">
//                 {effectivePlan === 'monthly' ? 'Monthly' : 'Annual'} Plan
//               </p>
//               <p className="text-[#626D6F] txt-16">Your Plan</p>
//             </div>
//           </div>

//           <button
//             onClick={handleOpenModal}
//             className="flex items-center gap-1.5 font-semibold rounded-full px-4 py-1 h-[32px] min-w-[90px] bg-[#C8E4FC] text-[#224674] txt-14 flex-shrink-0"
//           >
//             Manage
//             <LuChevronRight className="h-5 w-5 flex-shrink-0" />
//           </button>
//         </div>

//         {/* Cancellation warning message inside card */}
//         {isCancelled && (
//           <div className="flex items-start p-4 rounded-xl border border-[#F1C34D] bg-[#FCF3DB] w-full mt-4 txt-16 text-[#25292A]">
//             <PiWarningCircleLight className="text-[#F1C34D] min-w-[20px] min-h-[20px] w-5 h-5 mt-0.5 mr-2" />
//             <div>
//               Your current {effectivePlan} plan remains active until {formattedCancellationDate}. After that,
//               your subscription will be cancelled and you cannot access premium features.
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Subscription Management Modal */}
//       <CardModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         modalClassName="min-h-[484px] "
//       >
//         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
//           <div className="w-full">
//             <div className="flex gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
//               <h2 className="txt-32 font-semibold text-[#25292A]">
//                 {modalView === 'manage'
//                   ? "Manage Subscription"
//                   : "Change Plan"}
//               </h2>
//               <div
//                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
//                 onClick={() => setOpen(false)}
//               >
//                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
//               </div>
//             </div>

//             {modalView === 'manage' ? (
//               <>
//                 <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-3 py-2 md:px-6 md:py-4 rounded-lg">
//                   <div className="flex w-full items-start justify-between">
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <h2 className="txt-18 font-normal text-[#25292A]">
//                           {currentPlanConfig.name}
//                         </h2>
//                         {effectivePlan === 'annual' && currentPlanConfig.savingsTag && (
//                           <span className="bg-[#FFD3E2] text-[#DD6F94] txt-12 font-semibold px-2 py-1 rounded-full">
//                             {currentPlanConfig.savingsTag}
//                           </span>
//                         )}
//                       </div>
//                       <p className="txt-16 font-normal text-[#626D6F]">
//                         {currentPlanConfig.billing}
//                       </p>
//                     </div>
//                     <div className="txt-20 font-semibold text-[#25292A]">
//                       {currentPlanConfig.price}
//                     </div>
//                   </div>

//                   <div>
//                     <h2 className="txt-16 font-semibold text-[#25292A]">
//                       What's included
//                     </h2>
//                     <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
//                       {currentPlanConfig.features.map((feature, index) => (
//                         <li key={index} className="flex items-center gap-2 w-full">
//                           <FaCheckCircle className="text-[#DD6F94]" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {currentPlanConfig.showBillingDate && (
//                   <p className="w-full flex items-center mt-3 justify-center txt-14 text-[#626D6F]">
//                     Your next billing will start on {formattedBillingDate}
//                   </p>
//                 )}
//               </>
//             ) : (
//               // Change Plan View
//               <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-3 py-2 md:px-6 md:py-4 rounded-lg">
//                 <div className="flex w-full items-start justify-between">
//                   <div>
//                     <div className="flex items-center gap-2">
//                       <h2 className="txt-18 font-normal text-[#25292A]">
//                         {effectivePlan === 'monthly'
//                           ? "Annual Plan"
//                           : "Monthly Plan"}
//                       </h2>
//                       {effectivePlan === 'monthly' && (
//                         <span className="bg-[#FFD3E2] text-[#DD6F94] txt-12 font-semibold px-2 py-1 rounded-full">
//                           Best Value
//                         </span>
//                       )}
//                     </div>
//                     <p className="txt-16 font-normal text-[#626D6F]">
//                       {effectivePlan === 'monthly'
//                         ? "Billed Annually"
//                         : "Billed Monthly"}
//                     </p>
//                   </div>
//                   <div className="txt-20 font-semibold text-[#25292A]">
//                     {effectivePlan === 'monthly'
//                       ? "$200 / yr."
//                       : "$20 / mo."}
//                   </div>
//                 </div>

//                 <div>
//                   <h2 className="txt-16 font-semibold text-[#25292A]">
//                     What's included
//                   </h2>
//                   <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
//                     {planConfig[effectivePlan === 'monthly' ? 'annual' : 'monthly'].features.map((feature, index) => (
//                       <li key={index} className="flex items-center gap-2 w-full">
//                         <FaCheckCircle className="text-[#DD6F94]" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="flex flex-col gap-3 w-full">
//             {modalView === 'manage' ? (
//               <>
//                 <button
//                   onClick={() => setModalView('change')}
//                   className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
//                 >
//                   Change Plan
//                 </button>
//                 {/* <button
//                   onClick={() => setCancelModalOpen(true)}
//                   className="w-full py-4 bg-white text-[#224674] border border-[#224674] rounded-full txt-16"
//                 >
//                   Cancel Plan
//                 </button> */}
//               </>
//             ) : (
//               <>
//                 <button
//                   onClick={handlePlanChangeClick}
//                   className="w-full py-4 bg-[#224674] text-white rounded-full txt-16"
//                 >
//                   {effectivePlan === 'monthly'
//                     ? "Upgrade Plan"
//                     : "Downgrade Plan"}
//                 </button>
//                 <button
//                   onClick={() => setCancelModalOpen(true)}
//                   className="w-full py-4 bg-white text-[#224674] border border-[#224674] rounded-full txt-16"
//                 >
//                   Cancel Current Plan
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </CardModal>

//       {/* Cancellation Confirmation Modal */}
//       <CardModal
//         isOpen={cancelModalOpen}
//         onClose={() => setCancelModalOpen(false)}
//         modalClassName="min-h-[300px] max-h-[400px]"
//       >
//         <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
//           <div className="w-full">
//             <div className="flex gap-4 items-start justify-between mb-6 w-full max-w-[448px]">
//               <h2 className="txt-32 font-semibold text-[#25292A]">
//                 Cancel Subscription
//               </h2>
//               <div
//                 className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
//                 onClick={() => setCancelModalOpen(false)}
//               >
//                 <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
//               </div>
//             </div>

//             <p className="txt-18 text-[#25292A] mb-8 text-center">
//               If you cancel now, you can still access your subscription until {formattedCancellationDate}.
//             </p>

//             <div className="flex justify-end gap-3 w-full">
//               <button
//                 onClick={() => setCancelModalOpen(false)}
//                 className="py-3 px-6 bg-white text-[#224674] border border-[#224674] rounded-full txt-16"
//               >
//                 Go Back
//               </button>
//               <button
//                 onClick={handleConfirmCancellation}
//                 className="py-3 px-6 bg-[#DD6F94] text-white rounded-full txt-16"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       </CardModal>
//     </>
//   );
// }

import React, { useState, useMemo } from "react";
import { LuChevronRight } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { PiWarningCircleLight } from "react-icons/pi";
import CardModal from "./CardModal";

interface ManageButtonProps {
  currentPlan: "monthly" | "annual" | null;
  onPlanChange: (newPlan: "monthly" | "annual") => void;
}

type PlanFeature = string;

interface PlanConfig {
  name: string;
  billing: string;
  price: string;
  heading: string;
  button: string;
  showBillingDate: boolean;
  features: PlanFeature[];
  savingsTag?: string;
}

const planConfig: Record<"monthly" | "annual", PlanConfig> = {
  monthly: {
    name: "Monthly Plan",
    billing: "Billed Monthly",
    price: "$20 / mo.",
    heading: "Manage Subscription",
    button: "Change Plan",
    showBillingDate: true,
    features: [
      "Personalized Peptide Recommendations",
      "Videos Suggestions",
      "AI Assistant Guidance",
      "Dosage Tracking",
    ],
  },
  annual: {
    name: "Annual Plan",
    billing: "Billed Annually",
    price: "$200 / yr.",
    heading: "Manage Subscription",
    button: "Change Plan",
    showBillingDate: true,
    savingsTag: "Best Value",
    features: [
      "Personalized Peptide Recommendations",
      "Videos Suggestions",
      "AI Assistant Guidance",
      "Dosage Tracking",
      "AI Assistant Guidance",
      "Dosage Tracking",
    ],
  },
};

export default function ManageButton({
  currentPlan,
  onPlanChange,
}: ManageButtonProps) {
  const [open, setOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [modalView, setModalView] = useState<"manage" | "change">("manage");
  const effectivePlan = currentPlan || "monthly";
  const currentPlanConfig = planConfig[effectivePlan];

  // Calculate next billing date based on plan type
  const nextBillingDate = useMemo(() => {
    const today = new Date();
    const resultDate = new Date(today);

    if (effectivePlan === "monthly") {
      // Monthly plan - add 1 month
      resultDate.setMonth(resultDate.getMonth() + 1);

      // Handle cases where next month has fewer days
      const currentDay = today.getDate();
      const nextMonthCheck = new Date(resultDate);
      nextMonthCheck.setDate(currentDay);

      if (nextMonthCheck.getMonth() !== resultDate.getMonth()) {
        return new Date(resultDate.getFullYear(), resultDate.getMonth() + 1, 0);
      }

      return nextMonthCheck;
    } else {
      // Annual plan - add 1 year
      resultDate.setFullYear(resultDate.getFullYear() + 1);
      return resultDate;
    }
  }, [effectivePlan]);

  // Format date as "Month DD, YYYY"
  const formattedBillingDate = useMemo(
    () =>
      nextBillingDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [nextBillingDate]
  );

  // Calculate when access ends if the user cancels now
  const cancellationDate = useMemo(() => {
    const today = new Date();
    const result = new Date(today);

    if (effectivePlan === "monthly") {
      result.setMonth(result.getMonth() + 1);

      // handle “30th → 31st?” overflow
      const day = today.getDate();
      const check = new Date(result);
      check.setDate(day);
      if (check.getMonth() !== result.getMonth()) {
        return new Date(result.getFullYear(), result.getMonth() + 1, 0);
      }
      return check;
    } else {
      result.setFullYear(result.getFullYear() + 1);
      return result;
    }
  }, [effectivePlan]);

  const formattedCancellationDate = useMemo(
    () =>
      cancellationDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [cancellationDate]
  );

  // Handle cancellation confirmation
  const handleConfirmCancellation = () => {
    setIsCancelled(true);
    setCancelModalOpen(false);
  };

  const handlePlanChangeClick = () => {
    const newPlan = effectivePlan === "monthly" ? "annual" : "monthly";
    onPlanChange(newPlan);
    setModalView("manage");
  };

  const handleOpenModal = () => {
    setOpen(true);
    setModalView("manage");
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl w-full flex flex-col justify-between items-center">
        <div className="flex w-full justify-between items-start gap-3">
          <div className="flex gap-3 items-center">
            <img
              src="/profileIcons/manage-icon.svg"
              alt="Manage Icon"
              className="h-8 w-8"
            />
            <div className="flex flex-col items-start">
              <p className="txt-18 font-semibold">
                {effectivePlan === "monthly" ? "Monthly" : "Annual"} Plan
              </p>
              <p className="text-[#626D6F] txt-16">Your Plan</p>
            </div>
          </div>

          <button
            onClick={handleOpenModal}
            className="flex items-center gap-1.5 font-semibold rounded-full px-4 py-1 h-[32px] min-w-[90px] bg-[#C8E4FC] text-[#224674] txt-14 flex-shrink-0"
          >
            Manage
            <LuChevronRight className="h-5 w-5 flex-shrink-0" />
          </button>
        </div>

        {/* Cancellation warning message inside card */}
        {isCancelled && (
          <div className="flex items-start p-4 rounded-xl border border-[#F1C34D] bg-[#FCF3DB] w-full mt-4 txt-16 text-[#25292A]">
            <PiWarningCircleLight className="text-[#F1C34D] min-w-[20px] min-h-[20px] w-5 h-5 mt-0.5 mr-2" />
            <div>
              {effectivePlan === "annual" ? (
                <>
                  Your current annual plan remains active until{" "}
                  {formattedCancellationDate}. After that, your plan will
                  automatically switch to the monthly plan at $20 /mo.
                </>
              ) : (
                <>
                  Your current monthly plan remains active until{" "}
                  {formattedCancellationDate}. After that, your subscription
                  will be cancelled and you cannot access premium features.
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Subscription Management Modal */}
      <CardModal
        isOpen={open}
        onClose={() => setOpen(false)}
        modalClassName=" min-h-[484px] h-auto "
      >
        <div className="flex flex-col gap-4 items-start justify-between mb- 4 w-full max-w-[448px]">
          <div className="w-full">
            <div className="flex gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
              <h2 className="txt-32 font-semibold text-[#25292A]">
                {modalView === "manage" ? "Manage Subscription" : "Change Plan"}
              </h2>
              <div
                className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
              </div>
            </div>

            {modalView === "manage" ? (
              <>
                <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-3 py-2 md:px-6 md:py-4 rounded-lg">
                  <div className="flex w-full items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="txt-18 font-normal text-[#25292A]">
                          {currentPlanConfig.name}
                        </h2>
                        {effectivePlan === "annual" &&
                          currentPlanConfig.savingsTag && (
                            <span className="bg-[#FFD3E2] text-[#DD6F94] txt-12 font-semibold px-2 py-1 rounded-full">
                              {currentPlanConfig.savingsTag}
                            </span>
                          )}
                      </div>
                      <p className="txt-16 font-normal text-[#626D6F]">
                        {currentPlanConfig.billing}
                      </p>
                    </div>
                    <div className="txt-20 font-semibold text-[#25292A]">
                      {currentPlanConfig.price}
                    </div>
                  </div>

                  <div>
                    <h2 className="txt-16 font-semibold text-[#25292A]">
                      What's included
                    </h2>
                    <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
                      {currentPlanConfig.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 w-full"
                        >
                          <FaCheckCircle className="text-[#DD6F94]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {currentPlanConfig.showBillingDate && (
                  <p className="w-full flex items-center mt-3 justify-center txt-14 text-[#626D6F]">
                    Your next billing will start on {formattedBillingDate}
                  </p>
                )}
              </>
            ) : (
              // Change Plan View
              <div className="flex flex-col gap-4 items-start justify-between w-full max-w-[448px] bg-[#F2F5F6] px-3 py-2 md:px-6 md:py-4 rounded-lg">
                <div className="flex w-full items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="txt-18 font-normal text-[#25292A]">
                        {effectivePlan === "monthly"
                          ? "Annual Plan"
                          : "Monthly Plan"}
                      </h2>
                      {effectivePlan === "monthly" && (
                        <span className="bg-[#FFD3E2] text-[#DD6F94] txt-12 font-semibold px-2 py-1 rounded-full">
                          Best Value
                        </span>
                      )}
                    </div>
                    <p className="txt-16 font-normal text-[#626D6F]">
                      {effectivePlan === "monthly"
                        ? "Save 17% with yearly billing"
                        : "Billed Monthly"}
                    </p>
                  </div>
                  <div className="txt-20 font-semibold text-[#25292A]">
                    {/* {effectivePlan === 'monthly' 
                      ? "$200 / yr." 
                      : "$20 / mo."} */}
                    {effectivePlan === "monthly" && (
                      <>
                        <div className="flex flex-col">
                          <span className="txt-20 font-semibold text-[#25292A]">
                            $200 / yr.
                          </span>
                          <span className="line-through text-right  text-[#626D6F] txt-16">
                            $240
                          </span>
                        </div>
                      </>
                    )}
                    {effectivePlan === "annual" && (
                      <span className="txt-20 font-semibold text-[#25292A]">
                        $20 / mo.
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="txt-16 font-semibold text-[#25292A]">
                    What's included
                  </h2>
                  <ul className="flex flex-col gap-2 mt-2 text-[#25292A] font-normal txt-16">
                    {planConfig[
                      effectivePlan === "monthly" ? "annual" : "monthly"
                    ].features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 w-full"
                      >
                        <FaCheckCircle className="text-[#DD6F94]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 w-full">
            {modalView === "manage" ? (
              // Only show "Change Plan" button in manage view
              <button
                onClick={() => setModalView("change")}
                className="w-full py-4 bg-[#224674] text-white font-semibold rounded-full txt-18"
              >
                Change Plan
              </button>
            ) : (
              // Show both buttons in change view
              <>
                <button
                  onClick={handlePlanChangeClick}
                  className="w-full py-4 bg-[#224674] text-white font-semibold rounded-full txt-18"
                >
                  {effectivePlan === "monthly"
                    ? "Upgrade Plan"
                    : "Downgrade Plan"}
                </button>

                <button
                  onClick={() => {
                    setCancelModalOpen(true);
                    setOpen(false); // ← close the manage modal
                  }}
                  className="w-full py-3 bg-white text-[#25292A] font-semibold txt-18"
                >
                  Cancel Current Plan
                </button>
              </>
            )}
          </div>
        </div>
      </CardModal>

      {/* Cancellation Confirmation Modal */}
      <CardModal
        isOpen={cancelModalOpen}
        onClose={() => setCancelModalOpen(false)}
        modalClassName=" h-auto max-h-[236px]"
      >
        <div className="flex flex-col gap-4 items-start justify-between mb-4 w-full max-w-[448px]">
          <div className="w-full">
            <div className="flex gap-4 items-start justify-between mb-6 w-full max-w-[448px]">
              <h2 className="txt-32 font-semibold text-[#25292A]">
                Cancel Subscription
              </h2>
              <div
                className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
                onClick={() => setCancelModalOpen(false)}
              >
                <RxCross2 className="text-[#9EA9AA] !font-extrabold w-8 h-8 max-sm:w-6 max-sm:h-6" />
              </div>
            </div>

            <p className="txt-18 text-[#25292A] mb-4 text-start">
              If you cancel now, you can still access your subscription until{" "}
              {formattedCancellationDate}.
            </p>

            <div className="flex justify-end gap-3 w-full">
              <button
                onClick={() => setCancelModalOpen(false)}
                className="py-3 px-6  text-white font-semibold bg-[#224674] w-[138px] max-md:w-auto rounded-full txt-16"
              >
                Go Back
              </button>
              <button
                onClick={handleConfirmCancellation}
                className="py-3 px- text-[#25292A] font-semibold rounded-full txt-16"
              >
                Cancel Plan
              </button>
            </div>
          </div>
        </div>
      </CardModal>
    </>
  );
}
