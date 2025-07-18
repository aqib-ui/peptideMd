"use client";
import { useState } from "react";

interface Step1Props {
  onContinue: () => void;
}

export default function Step1({ onContinue }: Step1Props) {
  const options = [
    "I'm new to it",
    "I know the basics",
    "I've used peptides before",
  ];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="w-full bg-white">
      <h2 className="text-3xl font-semibold mb-2 text-[#25292A]">
        How familiar are you with peptides?
      </h2>
      <p className="text-xl font-normal text-[#51595A] mb-6">
        This helps us tailor content based on your experience level.
      </p>

      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`text-left text-xl cursor-pointer text-[#25292A]  rounded-md px-5 py-4 border transition-all duration-200 ${
              selectedOption === option
                ? "border-[#224674] bg-[rgba(200,228,252,0.50)]"
                : "border-[#F2F5F6] bg-[#F2F5F6]"
            } `}
          >
            {option}
          </button>
        ))}

        <button
          disabled={!selectedOption}
          className={`mt-6 w-full py-3 rounded-full text-white text-lg font-semibold transition ${
            selectedOption
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
