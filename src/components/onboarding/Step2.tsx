"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";

interface Step2Props {
  onContinue: () => void;
}

const peptideTypes = [
  "Muscle growth & performance",
  "Fat loss & metabolism",
  "Injury recovery & healing",
  "Skin health & anti-aging",
  "Brain function & mood",
];

export default function Step2({ onContinue }: Step2Props) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="w-full   bg-white ">
      <h2 className="text-3xl font-semibold mb-2 text-[#25292A]">
        What type of peptides are you most interested in?
      </h2>
      <p className="text-xl font-normal text-[#51595A] mb-6">
        Choose your focus so we can recommend the most relevant content and
        guidance.
      </p>

      <div className="flex flex-col gap-4 bg-white">
        {peptideTypes.map((option, index) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className={`flex bg-[#F2F5F6] items-center justify-between  w-full px-5 py-4 rounded-lg transition-all duration-200 "
              }`}
            >
              <div className="flex gap-3">
                <Image
                  src={`/onboarding/board${index + 1}.svg`}
                  width={24}
                  height={24}
                  alt="step2"
                  className="w-6 h-6"
                />
                <span className="text-left text-[#25292A] text-xl font-normal">
                  {option}
                </span>
              </div>
              <div
                className={`w-6 h-6 cursor-pointer rounded-md border-2 flex items-center justify-center ${
                  isSelected
                    ? "bg-[#224674] border-[#224674]"
                    : " bg-[#F2F5F6]  border-[#9EA9AA]"
                }`}
              >
                {isSelected && <Check className="text-white w-5 h-5" />}
              </div>
            </button>
          );
        })}

        <button
          disabled={selectedOptions.length === 0}
          className={`mt-6 w-full py-3 rounded-full text-white text-lg font-semibold transition ${
            selectedOptions.length
              ? "bg-[#224674] text-white  cursor-pointer"
              : "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
          }`}
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
