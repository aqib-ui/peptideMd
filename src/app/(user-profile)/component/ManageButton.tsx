// src/app/(user-profile)/components/ManageButton.tsx
import React, { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { PiWarningCircleLight } from "react-icons/pi";
import SubscriptionModal from "./modals/SubscriptionModal";
import CancelModal from "./modals/CancelModal";
import { PlanType } from "../hooks/useSubscription";
import { formatDate, getNextBillingDate } from "../utils/dateUtils";

interface ManageButtonProps {
  currentPlan: PlanType;
  onPlanChange: (newPlan: PlanType) => void;
  onCancelSubscription: () => void;
}

export default function ManageButton({
  currentPlan,
  onPlanChange,
  onCancelSubscription,
}: ManageButtonProps) {
  const [showManageModal, setShowManageModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [modalKey, setModalKey] = useState(0); // Add key state

  const effectivePlan = currentPlan || "monthly";
  const accessEndDate = formatDate(getNextBillingDate(currentPlan));

  // Add this function to handle opening
  const handleOpenManageModal = () => {
    setModalKey((prev) => prev + 1); // Increment key to force remount
    setShowManageModal(true);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md w-full max-w-[438px] max-h-[107px]">
        <div className="flex justify-between items-start">
          <div className="flex  flex-col items-start gap-1">
            {/* <div className=" p- 2 rounded-lg"> */}
            <img
              src="/profileIcons/manage-icon.svg"
              alt="Manage"
              className="h-8 w-8"
            />
            {/* </div> */}
            <div>
              <p className="font-semibold">
                {effectivePlan === "monthly" ? "Monthly" : "Annual"} Plan
              </p>
              <p className="text-gray-600 txt-14">Your plan</p>
            </div>
          </div>

          {/* <button
            onClick={handleOpenManageModal} // Use new handler
            className="flex items-center justify-center txt-14 gap- 1 font-semibold text-[#224674] bg-[#C8E4FC] p-3.5 max-w-[90px] max-h-[32px] rounded-full"
          >
            Manage<LuChevronRight className='w-5 h-5 '/>
          </button> */}
          <button onClick={handleOpenManageModal}
            className=" flex items-center justify-center w-[90px] h-[32px] txt-14 gap-1 font-semibold text-[#224674] bg-[#C8E4FC] rounded-full "
          >
            Manage
            <LuChevronRight className="w-4 h-4 flex-shrink-0" />
          </button>
        </div>

        {isCancelled && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start">
            <PiWarningCircleLight className="text-yellow-500 mt-0.5 mr-2 text-xl" />
            <p className="text-sm">
              Your access will end on {accessEndDate}. After this date, you'll
              lose access to premium features.
            </p>
          </div>
        )}
      </div>

      <SubscriptionModal
        key={modalKey} // Add key here to force remount
        isOpen={showManageModal}
        currentPlan={currentPlan}
        onPlanChange={onPlanChange}
        onCancelSubscription={() => {
          setShowManageModal(false);
          setShowCancelModal(true);
        }}
        onClose={() => setShowManageModal(false)}
      />

      <CancelModal
        isOpen={showCancelModal}
        currentPlan={currentPlan}
        onConfirm={() => {
          onCancelSubscription();
          setIsCancelled(true);
          setShowCancelModal(false);
        }}
        onClose={() => setShowCancelModal(false)}
      />
    </>
  );
}
