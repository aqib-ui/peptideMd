// Step3.tsx
"use client";
import { useState } from "react";
import { Mars, Venus } from "lucide-react";
import Image from "next/image";

interface Step3Props {
  onContinue: () => void;
}

export default function Step3({ onContinue }: Step3Props) {
  const [gender, setGender] = useState<string | null>(null);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const isFormValid = gender && age && weight;

  return (
    <div className="w-full bg-white">
      <h2 className="text-3xl font-semibold mb-2 text-[#25292A]">
        Personalize your peptide journey
      </h2>
      <p className="text-xl font-normal text-[#51595A] mb-6">
        Your gender, age, and weight help us tailor safe and effective dosage
        guidance.
      </p>

      {/* Gender Selection */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setGender("male")}
          className={`flex items-center gap-2 px-5 py-3.5 flex-1 rounded-lg border-1  text-left ${
            gender === "male"
              ? "border-[#224674] bg-[rgba(200,228,252,0.50)]"
              : "border-[#F2F5F6] bg-[#F2F5F6]"
          }`}
        >
          <Image
            src="/onboarding/male.svg"
            width={24}
            height={24}
            alt="male"
            className="cursor-pointer h-6 w-6"
          />
          Male
        </button>
        <button
          onClick={() => setGender("female")}
          className={`flex items-center gap-2 px-5 py-3.5 flex-1 rounded-lg border-1  text-left ${
            gender === "female"
              ? "border-[#224674] bg-[rgba(200,228,252,0.50)]"
              : "border-[#F2F5F6] bg-[#F2F5F6]"
          }`}
        >
          <Image
            src="/onboarding/female.svg"
            width={24}
            height={24}
            alt="male"
            className="cursor-pointer"
          />
          Female
        </button>
      </div>

      {/* Age */}
      <div className="mb-4">
        <label className="text-base font-medium text-[#25292A] mb-1 block">
          Age<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border rounded-lg px-4 py-3.5 border-[#F2F5F6] bg-[#F2F5F6] focus:border-[#224674] focus:bg-[rgba(200,228,252,0.50)] focus:outline-none appearance-none remove-arrow "
        />
      </div>

      {/* Weight */}
      <div className="mb-6 relative">
        <label className="text-base font-medium text-[#25292A] mb-1 block">
          Weight<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className=" w-full border rounded-lg px-4 py-3.5 border-[#F2F5F6] bg-[#F2F5F6]  focus:border-[#224674] focus:bg-[rgba(200,228,252,0.50)] focus:outline-none appearance-none remove-arrow "
        />
        <span className="absolute right-4 top-[43px] text-[#6B7280] text-sm ">
          kg
        </span>
      </div>

      <button
        disabled={!isFormValid}
        onClick={onContinue}
        className={`mt-6 w-full py-3 rounded-full text-white text-lg font-semibold transition ${
          isFormValid
            ? "bg-[#224674] text-white  cursor-pointer"
            : "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
        }`}
      >
        Continue
      </button>
    </div>
  );
}
