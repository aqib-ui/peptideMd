"use client";
import React from "react";
import Image from "next/image";

interface Props {
  onClose: () => void;
}

export default function SuccessModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-[#00000033] flex items-center justify-center z-50 p-4">
      <div className="bg-[#E9EDEE] rounded-3xl bg-[url('/Dashboard/SuccessPopup/confetti.png')] bg-contain bg-center p-8 max-w-sm w-full text-center">
        <Image
          src="/Dashboard/SuccessPopup/crown.png" 
            alt="Success Icon"
            width={96}
            height={96}
            className="mx-auto mb-4 w-16 h-16 md:w-24 md:h-24"
        />
        <h2 className="txt-24 font-bold mb-2 text-[#25292A]">Welcome to Peptide Pro</h2>
        <p className="text-gray-600 mb-4 txt-16">Your personalized peptide experience starts now. Get expert-backed insights, AI guidance, and smart dosage tracking — all in one place</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-[#224674] txt-18 text-white rounded-full w-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
