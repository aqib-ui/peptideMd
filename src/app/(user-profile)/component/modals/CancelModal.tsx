// src/app/(user-profile)/components/modals/CancelModal.tsx
import React from "react";
import CardModal from "./CardModal";
import { RxCross2 } from "react-icons/rx";
import { formatDate, getNextBillingDate } from "../../utils/dateUtils";

interface CancelModalProps {
  isOpen: boolean;
  currentPlan: "monthly" | "annual" | null;
  onConfirm: () => void;
  onClose: () => void;
}

export default function CancelModal({
  isOpen,
  currentPlan,
  onConfirm,
  onClose,
}: CancelModalProps) {
  const accessEndDate = formatDate(getNextBillingDate(currentPlan));

  return (
    <CardModal isOpen={isOpen} onClose={onClose} className="max-w-md">
      <div className="flex justify-between items-start mb-6">
        <h2 className="txt-32 text-[#25292A] font-semibold">
          Cancel Current Plan
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 bg-gray-300 rounded-full p-2 hover:text-gray-700"
        >
          <RxCross2 size={24} />
        </button>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          If you cancel now, you can still access your plan until{" "}
          {accessEndDate}.
        </p>
        {/* <p className="text-gray-700">
          Are you sure you want to cancel your subscription?
        </p> */}
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className=" px-4 py-2 md:min-w-[138px] md:min-h-[48px] bg-[#224674] text-white font-semibold rounded-full "
        >
          Go Back
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 text-[#25292A] font-semibold"
        >
          Cancel Plan
        </button>
      </div>
    </CardModal>
  );
}
