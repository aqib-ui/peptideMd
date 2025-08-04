// src/app/(user-profile)/components/modals/DowngradeConfirmModal.tsx
import React from "react";
import CardModal from "./CardModal";
import { RxCross2 } from "react-icons/rx";
import { formatDate, getNextBillingDate } from "../../utils/dateUtils";

interface DowngradeConfirmModalProps {
  isOpen: boolean;
  currentPlan: "monthly" | "annual" | null;
  onConfirm: () => void;
  onClose: () => void;
}

export default function DowngradeConfirmModal({
  isOpen,
  currentPlan,
  onConfirm,
  onClose,
}: DowngradeConfirmModalProps) {
  const accessEndDate = formatDate(getNextBillingDate(currentPlan));

  return (
    <CardModal isOpen={isOpen} onClose={onClose} className="max-w-md ">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-bold">Confirm Plan Change</h2>
        <button
          onClick={onClose}
          className="text-gray-500 bg-gray-300 rounded-full p-2 hover:text-gray-700"
        >
          <RxCross2 size={24} />
        </button>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Your Annual plan will be downgraded to monthly plan but will remain
          active until the end of your billing period on {accessEndDate}.
        </p>
        {/* <p className="text-gray-700">
          Are you sure you want to downgrade your plan?
        </p> */}
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className=" px-4 py-2 md:min-w-[138px] md:min-h-[48px] txt-16 bg-[#224674] text-white font-semibold rounded-full "
        >
          Go Back
        </button>
        <button
          onClick={onConfirm}
          className="sm:px-4 py-2 font-semibold text-[#25292A] txt-16"
        >
          Downgrade Plan
        </button>
      </div>
    </CardModal>
  );
}
