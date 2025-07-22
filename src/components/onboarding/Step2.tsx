import { Check } from "lucide-react";
import Image from "next/image";

interface Step2Props {
  value: string[]; // Selected peptide type IDs
  onChange: (value: string[]) => void;
  onContinue: () => void;
}

export default function Step2({ value, onChange, onContinue }: Step2Props) {
  const peptideTypes = [
    "Muscle growth & performance",
    "Fat loss & metabolism",
    "Injury recovery & healing",
    "Skin health & anti-aging",
    "Brain function & mood",
  ];

  const toggleOption = (id: string) => {
    const updated = value.includes(id)
      ? value.filter((item) => item !== id)
      : [...value, id];
    onChange(updated);
  };

  return (
    <div className="w-full bg-white">
      <h2 className="text-3xl font-semibold mb-2 text-[#25292A]">
        What type of peptides are you most interested in?
      </h2>
      <p className="text-xl font-normal text-[#51595A] mb-6">
        Choose your focus so we can recommend the most relevant content and guidance.
      </p>

      <div className="flex flex-col gap-4">
        {peptideTypes.map((option, index) => {
          const id = (index + 1).toString();
          const isSelected = value.includes(id);

          return (
            <button
              key={id}
              onClick={() => toggleOption(id)}
              className="flex bg-[#F2F5F6] items-center justify-between w-full px-5 py-4 rounded-lg"
            >
              <div className="flex gap-3">
                <Image
                  src={`/onboarding/board${id}.svg`}
                  width={24}
                  height={24}
                  alt="step2"
                />
                <span className="text-left text-[#25292A] text-xl">
                  {option}
                </span>
              </div>

              <div
                className={`w-6 h-6 cursor-pointer rounded-md border-2 flex items-center justify-center ${
                  isSelected
                    ? "bg-[#224674] border-[#224674]"
                    : "bg-[#F2F5F6] border-[#9EA9AA]"
                }`}
              >
                {isSelected && <Check className="text-white w-5 h-5" />}
              </div>
            </button>
          );
        })}

        <button
          disabled={value.length === 0}
          onClick={onContinue}
          className={`mt-6 w-full py-3 rounded-full text-lg font-semibold transition ${
            value.length
              ? "bg-[#224674] text-white cursor-pointer"
              : "bg-[#D8DFE0] text-[#9EA9AA] cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}






// import { Check } from "lucide-react";
// import Image from "next/image";

// interface Step2Props {
//   value: string[];
//   onChange: (value: string[]) => void;
//   onContinue: () => void;
// }

// export default function Step2({ value, onChange, onContinue }: Step2Props) {
//   const peptideTypes = [
//     "Muscle growth & performance",
//     "Fat loss & metabolism",
//     "Injury recovery & healing",
//     "Skin health & anti-aging",
//     "Brain function & mood",
//   ];

//   const toggleOption = (option: string) => {
//     const updated = value.includes(option)
//       ? value.filter((item) => item !== option)
//       : [...value, option];
//     onChange(updated);
//   };

//   return (
//     <div className="w-full bg-white">
//       <h2 className="text-3xl font-semibold mb-2 text-[#25292A]">
//         What type of peptides are you most interested in?
//       </h2>
//       <p className="text-xl font-normal text-[#51595A] mb-6">
//         Choose your focus so we can recommend the most relevant content and guidance.
//       </p>

//       <div className="flex flex-col gap-4 bg-white">
//         {peptideTypes.map((option, index) => {
//           const isSelected = value.includes(option);
//           return (
//             <button
//               key={option}
//               onClick={() => toggleOption((index + 1).toString())}
//               className="flex bg-[#F2F5F6] items-center justify-between w-full px-5 py-4 rounded-lg"
//             >
//               <div className="flex gap-3">
//                 <Image
//                   src={`/onboarding/board${index + 1}.svg`}
//                   width={24}
//                   height={24}
//                   alt="step2"
//                 />
//                 <span className="text-left text-[#25292A] text-xl">{option}</span>
//               </div>
//               <div
//                 className={`w-6 h-6 cursor-pointer rounded-md border-2 flex items-center justify-center ${
//                   isSelected
//                     ? "bg-[#224674] border-[#224674]"
//                     : "bg-[#F2F5F6] border-[#9EA9AA]"
//                 }`}
//               >
//                 {isSelected && <Check className="text-white w-5 h-5" />}
//               </div>
//             </button>
//           );
//         })}

//         <button
//           disabled={value.length === 0}
//           onClick={onContinue}
//           className={`mt-6 w-full py-3 rounded-full text-white text-lg font-semibold transition ${
//             value.length
//               ? "bg-[#224674] text-white  cursor-pointer"
//               : "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
//           }`}
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }
