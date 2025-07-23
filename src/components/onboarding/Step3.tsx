import Image from "next/image";

interface Step3Props {
  gender: string | null;
  age: number | null;
  weight: number | null;
  onChange: (key: "gender" | "age" | "weight", value: string | number) => void;
  onContinue: () => void;
}

export default function Step3({
  gender,
  age,
  weight,
  onChange,
  onContinue,
}: Step3Props) {
  const isFormValid = gender && age && weight;

  return (
    <div className="w-full bg-white">
      <h2 className="text-3xl font-semibold mb-2 text-[#25292A]">
        Personalize your peptide journey
      </h2>
      <p className="text-xl font-normal text-[#51595A] mb-6">
        Your gender, age, and weight help us tailor safe and effective dosage guidance.
      </p>

      {/* Gender Selection */}
      <label className="text-base font-medium text-[#25292A] mb-1 block">
          Gender<span className="text-red-500">*</span>
        </label>
      <div className="flex gap-4 mb-6">
        {["male", "female"].map((g) => (
          <button
            key={g}
            onClick={() => onChange("gender", g)}
            className={` cursor-pointer flex items-center gap-2 px-5 py-3.5 flex-1 rounded-lg border-1  text-left ${
              gender === g
                ? "border-[#224674] bg-[rgba(200,228,252,0.50)]"
                : "border-[#F2F5F6] bg-[#F2F5F6]"
            }`}
          >
            <Image
              src={`/onboarding/${g}.svg`}
              width={24}
              height={24}
              alt={g}
            />
            {g.charAt(0).toUpperCase() + g.slice(1)}
          </button>
        ))}
      </div>

      {/* Age */}
      <div className="mb-4">
        <label className="text-base font-medium text-[#25292A] mb-1 block">
          Age<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          value={String(age)}
          onChange={(e) => onChange("age", Number(e.target.value))}
          placeholder="Enter your age"
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
          value={String(weight)}
          onChange={(e) => onChange("weight", Number(e.target.value))}
          placeholder="Enter your weight"
          className=" w-full border rounded-lg px-4 py-3.5 border-[#F2F5F6] bg-[#F2F5F6]  focus:border-[#224674] focus:bg-[rgba(200,228,252,0.50)] focus:outline-none appearance-none remove-arrow "
        />
        <span className="absolute right-4 top-[43px] text-[#6B7280] text-sm"> 
          kg
        </span>
      </div>

      <button
        disabled={!isFormValid}
        onClick={onContinue}
        className={`mt-6 w-full py-3 rounded-full text-white text-lg font-semibold transition ${
          isFormValid
            ? "bg-[#224674] cursor-pointer"
            : "bg-[#D8DFE0] text-[#9EA9AA] cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
}















