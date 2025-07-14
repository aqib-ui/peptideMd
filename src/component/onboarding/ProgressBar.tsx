interface ProgressBarProps {
  step: number; // 1 to 3
}

export default function ProgressBar({ step }: ProgressBarProps) {
  const totalSteps = 3;

  return (
    <div className="flex gap-1 mb-6 max-w-2xl">
      {[...Array(totalSteps)].map((_, index) => {
        const isActive = step > index;
        return (
          <div
            key={index}
            className={`h-0.5 flex-1 rounded-full bg-gray-200 overflow-hidden transition-colors duration-300`}
          >
            {/* Inner bar for smooth fill effect */}
            <div
              className={`h-full w-full origin-left scale-x-${isActive ? "100" : "0"} bg-[#DD6F94] transition-transform duration-500 ease-in-out`}
              style={{
                transform: `scaleX(${isActive ? 1 : 0})`,
                transformOrigin: "left",
                transition: "transform 500ms ease-in-out",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
