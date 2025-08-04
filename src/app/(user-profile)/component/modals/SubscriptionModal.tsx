// // src/app/(user-profile)/components/modals/SubscriptionModal.tsx
// import React, { useState, useEffect } from "react";
// import CardModal from "./CardModal";
// import { FaCheckCircle } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { PlanType } from "../../hooks/useSubscription";
// import { formatDate, getNextBillingDate } from "../../utils/dateUtils";
// import DowngradeConfirmModal from "./DowngradeConfirmModal";

// interface SubscriptionModalProps {
//   isOpen: boolean;
//   currentPlan: PlanType;
//   onPlanChange: (newPlan: PlanType) => void;
//   onCancelSubscription: () => void;
//   onClose: () => void;
// }

// const planConfig = {
//   monthly: {
//     name: "Monthly Plan",
//     price: "$20 / mo.",
//     features: [
//       "Personalized Recommendations",
//       "Video Suggestions",
//       "AI Assistant",
//       "Dosage Tracking",
//     ],
//   },
//   annual: {
//     name: "Annual Plan",
//     price: "$200 /yr.",
//     savings: "Save $40",
//     features: [
//       "Personalized Recommendations",
//       "Video Suggestions",
//       "AI Assistant",
//       "Dosage Tracking",
//     ],
//   },
// };

// export default function SubscriptionModal({
//   isOpen,
//   currentPlan,
//   onPlanChange,
//   onCancelSubscription,
//   onClose,
// }: SubscriptionModalProps) {
//   const [view, setView] = useState<"manage" | "change">("manage");
//   const [showDowngradeConfirm, setShowDowngradeConfirm] = useState(false);

//   // Reset to manage view when modal opens
//   useEffect(() => {
//     if (isOpen) {
//       setView("manage");
//       setShowDowngradeConfirm(false);
//     }
//   }, [isOpen]);

//   const effectivePlan = currentPlan || "monthly";
//   const nextBillingDate = formatDate(getNextBillingDate(currentPlan));

//   // Get details for the alternative plan
//   const alternativePlan = effectivePlan === "monthly" ? "annual" : "monthly";
//   const alternativeConfig = planConfig[alternativePlan];

//   const handleUpgrade = () => {
//     // In a real app, this would redirect to Stripe
//     console.log("Redirecting to Stripe for upgrade...");
//     onPlanChange(alternativePlan);
//     onClose();
//   };

//   const handleDowngrade = () => {
//     setShowDowngradeConfirm(true);
//   };

//   return (
//     <>
//       <CardModal isOpen={isOpen} onClose={onClose} 
//       className="max-w-lg min-h-[484px]  "
// //     className={`
// //     max-w-lg
// //     ${view === "manage" 
// //       ? "max-h-[484px]"   /* Manage Subscription view */
// //       : "max-h-[501px]"}  /* Change Plan view */
// //   `}
//       >
//         <div className="flex justify-between items-start mb-3">
//           <h2 className="txt-32 font-semibold">
//             {view === "manage" ? "Manage Subscription" : "Change Plan"}
//           </h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 bg-gray-300 rounded-full p-2 hover:text-gray-700"
//           >
//             <RxCross2 size={24} />
//           </button>
//         </div>

//         {view === "manage" ? (
//           <>
//             <div className="bg-gray-50 rounded-xl p-6 mb-3">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="txt-18 font-normal">
//                     {planConfig[effectivePlan].name}
//                   </h3>
//                   {/* <p className="text-gray-600">Active until {nextBillingDate}</p> */}
//                   <p className="text-gray-600">Billed Monthly</p>
//                 </div>
//                 <p className="text-xl font-bold">
//                   {planConfig[effectivePlan].price}
//                 </p>
//               </div>

//               <div className="mt-6">
//                 <h4 className="font-semibold mb-3">What's included</h4>
//                 <ul className="space-y-2">
//                   {planConfig[effectivePlan].features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <FaCheckCircle className="text-[#DD6F94] mt-1 mr-2 flex-shrink-0" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <p className="text-center text-gray-500 text-sm mb-5">
//               Your next billing will start on {nextBillingDate}
//             </p>

//             <div className="flex flex-col gap-3">
//               <button
//                 onClick={() => setView("change")}
//                 className="w-full py-3 bg-[#224674] text-white font-medium rounded-full transition"
//               >
//                 Change Plan
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="bg-gray-50 rounded-xl p-6 mb-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <div className="flex items-center gap-2">
//                     <h3 className="text-lg font-semibold">
//                       {alternativeConfig.name}
//                     </h3>
//                     {alternativePlan === "annual" && (
//                       <span className="bg-[#FFD3E2] text-[#DD6F94] text-xs font-semibold px-2 py-1 rounded-full">
//                         Best Value
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-gray-600">
//                     {alternativePlan === "monthly"
//                       ? "Billed monthly"
//                       : "Save 17% with yearly billing"}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xl font-bold">{alternativeConfig.price}</p>
//                   {alternativePlan === "annual" && (
//                     <p className="text-gray-500 line-through text-sm">$240</p>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <h4 className="font-medium mb-3">Features:</h4>
//                 <ul className="space-y-2">
//                   {alternativeConfig.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <FaCheckCircle className="text-[#DD6F94] mt-1 mr-2 flex-shrink-0" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Conditional text for downgrade */}
//             {effectivePlan === "annual" && (
//               <p className="text-gray-500 text-sm mb-4 px-4 text-center">
//                 If you change your plan, your subscription will change to the
//                 Monthly Plan after your subscription ends.
//               </p>
//             )}

//             <div className="flex flex-col gap-3">
//               <button
//                 onClick={
//                   effectivePlan === "monthly" ? handleUpgrade : handleDowngrade
//                 }
//                 className="w-full py-3 bg-[#224674] text-white txt-18 font-semibold rounded-full "
//               >
//                 {effectivePlan === "monthly"
//                   ? "Upgrade Plan"
//                   : "Downgrade Plan"}
//               </button>
//               <button
//                 onClick={onCancelSubscription}
//                 className="w-full py-1  text-[ #25292A] border-gray-300 txt-18 font-semibold "
//               >
//                 Cancel Current Plan
//               </button>
//             </div>
//           </>
//         )}
//       </CardModal>

//       <DowngradeConfirmModal
//         isOpen={showDowngradeConfirm}
//         currentPlan={currentPlan}
//         onConfirm={() => {
//           onPlanChange("monthly");
//           setShowDowngradeConfirm(false);
//           onClose();
//         }}
//         onClose={() => setShowDowngradeConfirm(false)}
//       />
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import CardModal from "./CardModal";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { PlanType } from "../../hooks/useSubscription";
import { formatDate, getNextBillingDate } from "../../utils/dateUtils";
import DowngradeConfirmModal from "./DowngradeConfirmModal";

interface SubscriptionModalProps {
  isOpen: boolean;
  currentPlan: PlanType;
  onPlanChange: (newPlan: PlanType) => void;
  onCancelSubscription: () => void;
  onClose: () => void;
}

const planConfig = {
  monthly: {
    name: "Monthly Plan",
    price: "$20 / mo.",
    features: [
      "Personalized Recommendations",
      "Video Suggestions",
      "AI Assistant",
      "Dosage Tracking",
    ],
  },
  annual: {
    name: "Annual Plan",
    price: "$200 /yr.",
    savings: "Save $40",
    features: [
      "Personalized Recommendations",
      "Video Suggestions",
      "AI Assistant",
      "Dosage Tracking",
    ],
  },
};

export default function SubscriptionModal({
  isOpen,
  currentPlan,
  onPlanChange,
  onCancelSubscription,
  onClose,
}: SubscriptionModalProps) {
  const [view, setView] = useState<"manage" | "change">("manage");
  const [showDowngradeConfirm, setShowDowngradeConfirm] = useState(false);

  // Reset to manage view when modal opens
  useEffect(() => {
    if (isOpen) {
      setView("manage");
      setShowDowngradeConfirm(false);
    }
  }, [isOpen]);

  const effectivePlan = currentPlan || "monthly";
  const nextBillingDate = formatDate(getNextBillingDate(currentPlan));

  // Get details for the alternative plan
  const alternativePlan = effectivePlan === "monthly" ? "annual" : "monthly";
  const alternativeConfig = planConfig[alternativePlan];

  const handleUpgrade = () => {
    // In a real app, this would redirect to Stripe
    console.log("Redirecting to Stripe for upgrade...");
    onPlanChange(alternativePlan);
    onClose();
  };

  const handleDowngrade = () => {
    setShowDowngradeConfirm(true);
    onClose();
  };

  return (
    <>
      <CardModal 
        isOpen={isOpen && !showDowngradeConfirm} 
        onClose={onClose}
        className={`
          max-w-lg
          ${view === "manage" 
            ? "sm:max-h-[484px]"   // Manage Subscription view
            : effectivePlan === "monthly" 
              ? "sm:max-h-[501px]"  // Upgrade view
              : "sm:max-h-[551px]"}  // Downgrade view
        `}
      >
        <div className="flex justify-between items-start mb-3">
          <h2 className="txt-32 font-semibold">
            {view === "manage" ? "Manage Subscription" : "Change Plan"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 bg-gray-300 rounded-full p-2 hover:text-gray-700"
          >
            <RxCross2 size={24} />
          </button>
        </div>

        {view === "manage" ? (
          <>
            <div className="bg-gray-50 rounded-xl p-6 mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="txt-18 font-normal">
                    {planConfig[effectivePlan].name}
                  </h3>
                  <p className="text-gray-600">Billed Monthly</p>
                </div>
                <p className="text-xl font-bold">
                  {planConfig[effectivePlan].price}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">What's included</h4>
                <ul className="space-y-2">
                  {planConfig[effectivePlan].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-[#DD6F94] mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mb-5">
              Your next billing will start on {nextBillingDate}
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setView("change")}
                className="w-full py-3 bg-[#224674] text-white font-medium rounded-full transition"
              >
                Change Plan
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-50 rounded-xl p-6 mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">
                      {alternativeConfig.name}
                    </h3>
                    {alternativePlan === "annual" && (
                      <span className="bg-[#FFD3E2] text-[#DD6F94] text-xs font-semibold px-2 py-1 rounded-full">
                        Best Value
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">
                    {alternativePlan === "monthly"
                      ? "Billed monthly"
                      : "Save 17% with yearly billing"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{alternativeConfig.price}</p>
                  {alternativePlan === "annual" && (
                    <p className="text-gray-500 line-through text-sm">$240</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Features:</h4>
                <ul className="space-y-2">
                  {alternativeConfig.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-[#DD6F94] mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conditional text for downgrade */}
            {effectivePlan === "annual" && (
              <p className="text-gray-500 text-sm mb-4 px-4 text-center">
                If you change your plan, your subscription will change to the
                Monthly Plan after your subscription ends.
              </p>
            )}

            <div className="flex flex-col gap-3">
              <button
                onClick={
                  effectivePlan === "monthly" ? handleUpgrade : handleDowngrade
                }
                className="w-full py-3 bg-[#224674] text-white txt-18 font-semibold rounded-full "
              >
                {effectivePlan === "monthly"
                  ? "Upgrade Plan"
                  : "Downgrade Plan"}
              </button>
              <button
                onClick={onCancelSubscription}
                className="w-full py-1  text-[ #25292A] border-gray-300 txt-18 font-semibold "
              >
                Cancel Current Plan
              </button>
            </div>
          </>
        )}
      </CardModal>

      <DowngradeConfirmModal
        isOpen={showDowngradeConfirm}
        currentPlan={currentPlan}
        onConfirm={() => {
          onPlanChange("monthly");
          setShowDowngradeConfirm(false);
        }}
        onClose={() => setShowDowngradeConfirm(false)}
      />
    </>
  );
}