interface Step1Props {
  value: string | null;
  onChange: (value: string) => void;
  onContinue: () => void;
}

export default function Step1({ value, onChange, onContinue }: Step1Props) {
  const familiarityOptions = [
    { id: "1", label: "I’m brand new to peptides" },
    { id: "2", label: "I’ve done a little research" },
    { id: "3", label: "I’m very familiar with peptides" },
  ];

  return (
    <div className="w-full bg-white">
      <h2 className="text-3xl font-semibold mb-2 text-[#25292A]">
        How familiar are you with peptides?
      </h2>
      <p className="text-xl font-normal text-[#51595A] mb-6">
        This helps us tailor content based on your experience level.
      </p>

      <div className="flex flex-col gap-4">
        {familiarityOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`text-left text-xl cursor-pointer text-[#25292A] rounded-md px-5 py-4 border transition-all duration-200 ${
              value === option.id
                ? "border-[#224674] bg-[rgba(200,228,252,0.50)]"
                : "border-[#F2F5F6] bg-[#F2F5F6]"
            }`}
          >
            {option.label}
          </button>
        ))}

        <button
          disabled={!value}
          onClick={onContinue}
          className={`mt-6 w-full py-3 rounded-full text-white text-lg font-semibold transition ${
            value
              ? "bg-[#224674] text-white  cursor-pointer"
              : "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
