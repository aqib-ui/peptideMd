"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Step1 from "@/components/onboarding/Step1";
import Step2 from "@/components/onboarding/Step2";
import Step3 from "@/components/onboarding/Step3";
import ProgressBar from "@/components/onboarding/ProgressBar";
import SideAnimation from "../../authComponents/SideAnimation";
import toast from "react-hot-toast";

export default function OnBoard() {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("peptide_user_token")
      : null;

  const router = useRouter();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    howFamiliarAreYou: null,
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

  const handleSubmit = async () => {
    // const token = localStorage.getItem("peptide_user_token");
    console.log("Final Submit:", formData);
    try {
      const response = await fetch(
        "https://peptide-backend.mazedigital.us/users/v1_web_update_profile",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            howFamiliarAreYou: formData.howFamiliarAreYou,
            mostInterestPeptide: formData.mostInterestPeptide,
            gender: formData.gender,
            age: formData.age,
            weight: formData.weight,
          }),
        }
      );
      const result = await response.json();
      if (result.status === "success") {
        // toast.success("Your password has been reset successfully.");
        router.push("/Dashboard");
        console.log("🔁 result ===>", result);
      } else {
        // toast.error(result.message);
        alert(result.message);
      }
    } catch (error) {
      // toast.error("An error occurred. Please try again.");
      alert("An error occurred. Please try again.");
      console.error("🔁 error ===>", error);
    }
  };

  return (
    <div className=" min-h-[100vh] flex flex-col  md:flex-row items-stretch gap-10 xl:gap-20 2xl:gap-32 pt-10 pl-6 xl:pl-10 pr-6 xl:pr-20 pb-10 2xl:pb-20  ">
      {/* === Left Section === */}
      <SideAnimation />

      {/* Right Section */}
      <div className=" w-full md:w-[50%] flex py-10  self-center ">
        <div className="   bg-white  mx-auto md:mx-0 ">
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
                value={formData.howFamiliarAreYou}
                onChange={(value) => updateForm("howFamiliarAreYou", value)}
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
    </div>
  );
}
