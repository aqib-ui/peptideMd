"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Step1 from "@/components/onboarding/Step1";
import Step2 from "@/components/onboarding/Step2";
import Step3 from "@/components/onboarding/Step3";
import ProgressBar from "@/components/onboarding/ProgressBar";

export default function OnBoard() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    familiarWithPeptides: null,
    mostInterestPeptide: [],
    gender: null,
    age: null,
    weight: null,
  });

  const updateForm = (key: keyof typeof formData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Final Submit:", formData);
    // router.push("/Dashboard");
  };

  return (
    <div className="min-h-[100vh] items-center justify-center flex flex-col md:flex-row md:justify-between max-sm:p-4 px-4 py-6 2xl:px-8 2xl:py-8 gap-4 md:gap-8 xl:gap-12">
      {/* === Left Section === */}
      <div className="hidden md:flex w-full md:w-[48%] h-[500px] lg:h-[calc(100vh)] lg:max-h-[975px] max-w-[922px] p-[2px] rounded-[48px]  items-center justify-center">
        <div className="relative w-full h-full rounded-[16px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/authIcons/authVid.mp4" type="video/mp4" />
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
        <div className="w-full max-w-[496px] h-auto transform transition-all duration-400">
          {step > 1 && (
            <Image
              src="/onboarding/onboard-back.svg"
              alt="back"
              width={40}
              height={40}
              className="mb-6 h-10 w-10 cursor-pointer"
              onClick={handleBack}
            />
          )}

          <ProgressBar step={step} />

          {step === 1 && (
            <Step1
              value={formData.familiarWithPeptides}
              onChange={(value) => updateForm("familiarWithPeptides", value)}
              onContinue={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <Step2
              value={formData.mostInterestPeptide}
              onChange={(value) => updateForm("mostInterestPeptide", value)}
              onContinue={() => setStep(3)}
            />
          )}

          {step === 3 && (
            <Step3
              gender={formData.gender}
              age={formData.age}
              weight={formData.weight}
              onChange={(key, value) => updateForm(key, value)}
              onContinue={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
