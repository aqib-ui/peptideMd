"use client";
import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";

export default function DosageSimulator() {
  const [selected, setSelected] = useState<"Dosage Guide" | "Calculator">(
    "Dosage Guide"
  );

  return (
    <div className="container px-4 py-10">
      {/* Toggle switch */}
      <div className="flex justify-end mb-6">
        <div
          className="relative flex w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] p-[1.25px] rounded-[20px] 
    bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
        >
          <div
            className="flex w-full bg-white rounded-[20px] px-1.5 py-1 relative"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            <div
              className={`absolute inset-0 top-0 bottom-0 left-0 w-[52%] bg-[#94C4ED] rounded-[20px] transition-all duration-300
        ${selected === "Calculator" ? "left-[48%]" : "left-0"}`}
            ></div>

            <button
              onClick={() => setSelected("Dosage Guide")}
              className="relative z-10 w-1/2 text-center py-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold transition rounded-[20px]"
            >
              Dosage Guide
            </button>
            <button
              onClick={() => setSelected("Calculator")}
              className="relative z-10 w-1/2 text-center py-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold transition rounded-[20px]"
            >
              Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally render content */}
      {selected === "Dosage Guide" ? <DosageGuide /> : <Calculator />}
    </div>
  );
}

// =============================
// DosageGuide Component (inline)
// =============================
function DosageGuide() {
  const [selectedPeptide, setSelectedPeptide] = useState<string>("");
  const [peptides, setPeptides] = useState<string[]>([]);

  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const fetchPeptides = async () => {
      const response = [
        "Peptide 1",
        "Peptide 2",
        "Peptide 3",
        "Peptide 4",
        "a",
        "s",
        "sss",
      ];
      setPeptides(response);
    };

    fetchPeptides();
  }, []);
  const [selectedProtocol, setSelectedProtocol] = useState("Standard");

  return (
    <div className="pl-5 pr-4">
      <h1
        // className="text-5xl md:text-[72px] font-bold leading-[100%] text-left mt-6"
        className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-tight"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        Peptides
        <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
          Usage Simulator
        </span>
      </h1>

      <h2
        className="text-xl md:text-[34px] font-medium leading-[120%] mt-6 mb-10 max-w-7xl"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        This simulator is for educational purposes only. Always consult with a
        qualified healthcare provider before starting any peptide therapy.
      </h2>

      {/* Step 1 */}
      <div
        className="mt-[120px] mb-6 px-4 sm:px-6"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        <h3 className="text-[36px] sm:text-[42px] lg:text-[46px] font-semibold">
          <span className="rounded-3xl px-4 py-2 inline-block bg-[#94C4ED] mr-2">
            Step 1:
          </span>
          Protocol Selection
        </h3>

        <div className="mt-4 lg:ml-44">
          <h3 className="text-xl sm:text-2xl leading-[1.6] font-medium">
            Choose a peptide to simulate its usage
          </h3>

          {/* Dropdown */}
          <div className="mt-6">
            {/* <div className="relative max-lg:w-[80%]"> */}
            {/* <div className="relative w-full sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[75%] 2xl:w-[81%]"> */}
            <div className="relative w-[90%] max-w-[1248px] h-[80px] rounded-[25px]">
              <Listbox value={selectedPeptide} onChange={setSelectedPeptide}>
                <div className="relative">
                  <Listbox.Button
                    className="w-full px-4 py-3 pr-10 rounded-3xl bg-[#94C4ED]/30 focus:outline-none 
                  focus:ring-2 focus:ring-[#94C4ED] text-2xl text-[#224674] font-medium text-left"
                  >
                    {selectedPeptide || "Select a peptide"}
                    <Image
                      src="/dropdown-icon.png"
                      alt="Dropdown icon"
                      width={55}
                      height={0}
                      className="absolute top-1/2 right-[-5] transform -translate-y-1/2 pointer-events-none"
                    />
                  </Listbox.Button>

                  <Listbox.Options
                    className="absolute mt-1 w-full max-h-[96px] overflow-y-auto rounded-3xl bg-white
                   shadow-lg z-50 text-[20px] text-[#224674] font-medium"
                  >
                    {peptides.length > 0 ? (
                      peptides.map((peptide, index) => (
                        <Listbox.Option
                          key={index}
                          value={peptide}
                          className={({ active }) =>
                            `cursor-pointer px-4 py-2 ${
                              active ? "bg-[#94C4ED]/40" : ""
                            }`
                          }
                        >
                          {peptide}
                        </Listbox.Option>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500">
                        Loading peptides...
                      </div>
                    )}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Protocol Selection */}
      <div
        className="mt-[120px] mb-6 px-4 sm:px-6"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        <h3 className="text-[36px] sm:text-[42px] lg:text-[46px] font-semibold">
          <span className="rounded-3xl px-4 py-2 inline-block bg-[#94C4ED] mr-2">
            Step 2:
          </span>
          Protocol Selection
        </h3>

        <div className="mt-4 lg:ml-44">
          <h3 className="text-xl sm:text-2xl leading-[1.6] font-medium">
            Choose between standard and microdosing protocols
          </h3>

          {/* Toggle Button - now same width as Step 1 dropdown */}
          <div className="flex  mt-6">
            <div className="relative w-[90%] max-w-[1248px] h-[80px] bg-[#94C4ED]/40 rounded-[25px]">
              <div className="flex w-full h-full text-[#224674] text-lg sm:text-xl lg:text-2xl relative">
                <div
                  className={`absolute top-0 bottom-0 w-[52%] bg-[#94C4ED] rounded-[25px] transition-all duration-300
              ${selectedProtocol === "Microdosing" ? "left-[48%]" : "left-0"}
            `}
                ></div>

                <button
                  onClick={() => setSelectedProtocol("Standard")}
                  className="relative z-10 w-1/2 text-center py-2 font-medium transition"
                >
                  Standard Protocol
                </button>
                <button
                  onClick={() => setSelectedProtocol("Microdosing")}
                  className="relative z-10 w-1/2 text-center py-2 font-medium transition"
                >
                  Microdosing Protocol
                </button>
              </div>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl leading-[1.6] mt-4 font-medium">
            Standard dosing protocol typically used for primary treatment
            phases.
          </h3>
        </div>
      </div>

      {/* Step 3: Dosage Selection & Visualization */}
      <div
        className="mt-[120px] mb-6 px-4 sm:px-6"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        <h3 className="text-[36px] sm:text-[42px] lg:text-[46px] font-semibold">
          <span className="rounded-3xl px-4 py-2 inline-block bg-[#94C4ED] mr-2">
            Step 3:
          </span>
          Dosage Selection & Visualization
        </h3>

        <div className="mt-4 lg:ml-44">
          <h3 className="text-xl sm:text-2xl leading-[1.6] font-medium">
            Choose between standard and microdosing protocols
          </h3>

          {/*slider  */}
          {/* <div className="relative mt-8 w-[90%] max-w-[1248px]">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2 bg-[#94C4ED]/40 rounded-lg appearance-none cursor-pointer"
            />
            <span className="absolute right-0 bottom-[-28px] text-[#224674] font-semibold text-lg">
              {sliderValue}%
            </span>
          </div> */}
          {/* <div className="relative mt-8 w-[90%] max-w-[1248px]">
  <input
    type="range"
    min="0"
    max="100"
    step="1"
    value={sliderValue}
    onChange={(e) => setSliderValue(Number(e.target.value))}
    className="w-full h-2 appearance-none custom-slider"
  />
  <span className="absolute right-0 bottom-[-28px] text-[#224674] font-semibold text-lg">
    {sliderValue}%
  </span>

  <style jsx>{`
    .custom-slider {
      background: linear-gradient(
        to right,
        #3b82f6 ${sliderValue}%,
        #94c4ed66 ${sliderValue}%
      );
      border-radius: 9999px;
    }
    .custom-slider::-webkit-slider-thumb,
    .custom-slider::-moz-range-thumb {
      appearance: none;
      height: 16px;
      width: 16px;
      background: #1d4ed8;
      border-radius: 9999px;
      border: 2px solid white;
      cursor: pointer;
      margin-top: -6px;
    }
  `}</style>
</div> */}
          <div className="relative mt-8 w-[90%] max-w-[1248px]">
            <input
              type="range"
              min="0"
              max="2000"
              step="1"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2 appearance-none custom-slider"
            />

            {/* <div className="absolute right-0 bottom-[-38px] bg-gradient-to-r from-[#5CB0E2] to-[#EB6793] p-[2px] rounded-2xl">
              <span className="block bg-white text-[#224674] font-semibold text-lg px-3 py-1 rounded-2xl">
                {sliderValue} mcg
              </span>
            </div> */}
            <div className="absolute right-0 bottom-[-38px] flex items-center gap-2">
  <span className="font-medium text-lg">Selected peptide:</span>
  <div className="bg-gradient-to-r from-[#5CB0E2] to-[#EB6793] p-[2px] rounded-2xl">
    <span className="block bg-white text-[#224674] font-semibold text-lg px-3 py-1 rounded-2xl">
      {sliderValue} mcg
    </span>
  </div>
</div>


            <style jsx>{`
              .custom-slider {
                background: linear-gradient(
                  to right,
                 #224674 ${(sliderValue / 2000) * 100}%,
    #94c4ed66 ${(sliderValue / 2000) * 100}%
                );
                border-radius: 9999px;
              }

              .custom-slider::-webkit-slider-thumb {
                appearance: none;
                height: 24px;
                width: 24px;
                border-radius: 9999px;
                border: 2px solid white;
                cursor: pointer;
                background: linear-gradient(to bottom, #eb6793, #5cb0e2);
                margin-top: 0px;
              }

              .custom-slider::-moz-range-thumb {
                border-radius: 9999px;
                border: 2px solid white;
                cursor: pointer;
                background: linear-gradient(to bottom, #eb6793, #5cb0e2);
              }
            `}</style>
          </div>

          {/* You can add more UI elements for protocol selection here */}

          <div className="my-20">
            <input
              type="image"
              placeholder="Enter desired dose"
              className="w-[90%] h-screen px-4 py-3 pb-20 focus:outline-none rounded-3xl bg-[#94C4ED]/30 text-[34px] 
        text-black/70 font-medium text-left align-top"
            />
            <p className="text-lg">
              Interactive 3D model of AHK-Cu. Use mouse to rotate and zoom.
            </p>
          </div>

          <div
            className="flex flex-col text-black font-medium 
            text-opacity-100 w-[90%] rounded-4xl mt-10 p-10 bg-[#94C4ED]/40"
          >
            <div className="mb-6">
              <h2 className=" text-4xl">Description</h2>
              <p className="text-2xl">
                A copper peptide similar to GHK-Cu with specific properties.
              </p>
            </div>

            <div className="mt-6 mb-6">
              <h2 className=" text-4xl">Applications</h2>
              <p className="text-2xl">Skin health and tissue regeneration.</p>
            </div>

            <div className="mt-6 mb-10">
              <h2 className=" text-4xl">Benefits</h2>
              {/* <p className="text-2xl ">Skin health and tissue regeneration.</p> */}
              <ul className="text-2xl ">
                <li
                  className="relative pl-4 before:content-[''] 
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                >
                  Promotes collagen synthesis
                </li>
                <li
                  className="relative pl-4 before:content-[''] 
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                >
                  Antioxidant properties
                </li>
                <li
                  className="relative pl-4 before:content-[''] 
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                >
                  Supports wound healing
                </li>
                <li
                  className="relative pl-4 before:content-[''] 
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                >
                  Anti-inflammatory effects
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h2 className=" text-4xl">Risk and Side Effects</h2>
              <ul className="text-2xl mt-4 mb-10">
                <li
                  className="relative pl-4 before:content-[''] 
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                >
                  Limited research
                </li>
                <li
                  className="relative pl-4 before:content-[''] 
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                >
                  not FDA approved
                </li>
                <li
                  className="relative pl-4 before:content-[''] 
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                >
                  Optimal dosage unclear
                </li>
                <li
                  className="relative pl-4 before:content-[''] 
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                >
                  Cost considerations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Administration Sites */}
      <div
        className="mt-[120px] mb-6 px-4 sm:px-6"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        <h3 className="text-[36px] sm:text-[42px] lg:text-[46px] font-semibold">
          <span className="rounded-3xl px-4 py-2 inline-block bg-[#94C4ED] mr-2">
            Step 4:
          </span>
          Administration Sites
        </h3>

        <div className="md:mt-4 lg:ml-44">
          <h3 className="text-xl sm:text-2xl leading-[1.6] font-medium">
            Common injection sites and rotation guidelines
          </h3>
          {/* You can add more UI elements for protocol selection here */}

          <div
            className="flex text-center justify-center items-center text-xl  text-black font-semibold 
            text-opacity-100 h-screen w-[90%] rounded-4xl mt-10 p-10 bg-[#94C4ED]/40"
          >
            Interactive diagram coming soon
          </div>

          {/* "Peptide Overview" Button */}

          <div className="gradient-border w-[184px] h-[66px] rounded-full mb-10">
            <button
              className="w-full h-full rounded-full bg-white text-black text-xl font-medium
    flex items-center justify-center transition-colors duration-100 
    ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================
// Calculator Component (inline)
// =============================

function Calculator() {
  const [selectedProtocol, setSelectedProtocol] = useState("Standard");

  const [selectedPeptide, setSelectedPeptide] = useState<string>("");
  const [peptides, setPeptides] = useState<string[]>([]);
  // const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="pl-5 pr-4">
      <h1
        // className="text-5xl md:text-[72px] font-bold leading-[100%] text-left mt-6"
        className="text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-tight"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        Peptides
        <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
          Usage Simulator
        </span>
      </h1>

      <h2
        className="text-xl md:text-[34px] font-medium leading-[120%] mt-6 mb-10 max-w-7xl"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        This simulator is for educational purposes only. Always consult with a
        qualified healthcare provider before starting any peptide therapy.
      </h2>

      <div className="mt-30 mb-6" style={{ fontFamily: "Afacad, sans-serif" }}>
        <h3 className="text-[46px] font-semibold flex items-center flex-wrap">
          Peptide Calculator
        </h3>
        <h3 className="text-2xl text-[24px] leading-6.5 font-medium mb-12">
          Calculate reconstitution measurements and injection volumes
        </h3>

        <div className="mt-16">
          <div className="relative w-[80%]">
            <h3 className="text-2xl text-[34px] leading-6.5 font-semibold mb-6">
              Peptide Amount (mg)
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter peptide amount"
                className="w-full h-16 px-4 py-3 pr-10 rounded-3xl bg-[#94C4ED]/30 
        focus:outline-none 
        text-2xl text-[#224674] font-medium text-left"
              />
              <Image
                src="/cal-enter-icon.png"
                alt="Dropdown icon"
                width={60}
                height={60}
                className="absolute top-1/2 right-[-5] transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-18">
          <div className="relative w-[80%]">
            <h3 className="text-2xl text-[34px] leading-6.5 font-semibold mb-6">
              Bacteriostatic Water (ml)
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Bacteriostatic Water"
                className="w-full h-16 px-4 py-3 pr-10 rounded-3xl bg-[#94C4ED]/30 
        focus:outline-none 
        text-2xl text-[#224674] font-medium text-left"
              />
              <Image
                src="/cal-enter-icon.png"
                alt="Dropdown icon"
                width={60}
                height={60}
                className="absolute top-1/2 right-[-5] transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-18">
          <div className="relative w-[80%]">
            <h3 className="text-2xl text-[34px] leading-6.5 font-semibold mb-6">
              Desired Dose (mcg)
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Desired Dose"
                className="w-full h-16 px-4 py-3 pr-10 rounded-3xl bg-[#94C4ED]/30 
        focus:outline-none 
        text-2xl text-[#224674] font-medium text-left"
              />
              <Image
                src="/cal-enter-icon.png"
                alt="Dropdown icon"
                width={60}
                height={60}
                className="absolute top-1/2 right-[-5] transform -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-18">
          <textarea
            placeholder="Enter desired dose"
            className="w-[77%] h-40 px-4 py-3 focus:outline-none rounded-3xl bg-[#94C4ED]/30 text-[34px] 
        text-black/65 font-medium "
          ></textarea>
        </div>
      </div>
    </div>
  );
}
