"use client";
import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
// import { MoleculeTopLeftAnimation } from "../MianComponent/page";
import  MoleculeTopLeftAnimation  from "@/component/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";

export default function DosageSimulator() {
  const [selected, setSelected] = useState<"Dosage Guide" | "Calculator">(
    "Dosage Guide"
  );

  return (
    <>

      {/* Toggle switch */}
      <div className="flex justify-end mx-6 ">
        <div
          className="relative flex w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[300px] 2xl:max-w-[420px] h-auto 2xl:h-[70px] p-[1.5px] rounded-[25px] 
          bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
        >
          <div
            className="flex w-full bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)]    rounded-[25px] px-1.5 py-1 relative"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            <div
              // className={`absolute inset-0 top-0 bottom-0 left-0 w-[51%] bg-[#94C4ED] dark:bg-[#6d91b0]  rounded-[25px] transition-all duration-300
              className={`absolute inset-0 top-0 bottom-0 left-0 w-[51%] bg-[#94C4ED]   rounded-[25px] transition-all duration-300
            ${selected === "Calculator" ? "left-[49%]" : "left-0"}`}
            ></div>

            <button
              onClick={() => setSelected("Dosage Guide")}
              className="relative z-10 w-1/2 text-center py-2 text-black dark:text-[var(--foreground)] 
              text-[clamp(18px,0.43vw+16.63px,24px)] font-semibold transition rounded-[25px] cursor-pointer"
            >
              Dosage Guide
            </button>
            <button
              onClick={() => setSelected("Calculator")}
              className="relative z-10 w-1/2 text-center py-2 text-black dark:text-[var(--foreground)]
               text-[clamp(18px,0.43vw+16.63px,24px)] font-semibold transition rounded-[25px] cursor-pointer"
            >
              Calculator
            </button>
          </div>
        </div>
      </div>



      {/* Toggle switch */}
      {/* <div className="flex justify-end mx-8">
        <div
          className="relative flex w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[370px] p-[1.5px] rounded-[20px] 
          bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
        >
          <div
            className="flex w-full bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)]   rounded-[20px] px-1.5 py-1 relative"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            <div
              className={`absolute inset-0 top-0 bottom-0 left-0 w-[50%] bg-[#94C4ED] dark:bg-[#6d91b0]  rounded-[20px] transition-all duration-300
            ${selected === "Calculator" ? "left-[50%]" : "left-0"}`}
            ></div>

            <button
              onClick={() => setSelected("Dosage Guide")}
              className="relative z-10 w-1/2 text-center py-2 text-black dark:text-[var(--foreground)] 
              text-[clamp(18px,0.43vw+16.63px,22px)] font-semibold transition rounded-[20px] cursor-pointer"
            >
              Dosage Guide
            </button>
            <button
              onClick={() => setSelected("Calculator")}
              className="relative z-10 w-1/2 text-center py-2 text-black dark:text-[var(--foreground)]
               text-[clamp(18px,0.43vw+16.63px,22px)] font-semibold transition rounded-[20px] cursor-pointer"
            >
              Calculator
            </button>
          </div>
        </div>
      </div> */}

      <div className=" px-4 py-10  min-w-[95vw] overflow-hidden">
        {/* Conditionally render content */}
        {selected === "Dosage Guide" ? <DosageGuide /> : <Calculator />}
      </div>
    </>
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
    <>
      <div className="">
        <MoleculeTopLeftAnimation
          mainheading="Peptide"
          span="Usage Simulator"
          para="This simulator is for educational purposes only. Always consult with a qualified healthcare provider before starting any peptide therapy."
        />
        {/* <ScrollButton /> */}

      </div>


      <div className="pl-5 pr-4 min-w-[95vw] overflow-hidden">




        {/* Step 1 */}
        <div
          className="mt-[120px] mb-6 px-4 sm:px-6"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          <h3 className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold">
            <span className="rounded-3xl px-4 py-2 inline-block bg-[#94C3ED] text-black mr-2">
              Step 1:
            </span>
            Select Peptide
          </h3>

          <div className="lg:-mt-4 lg:ml-43">
            <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-[1.6] font-medium">
              Choose a peptide to simulate its usage
            </h3>

            {/* Dropdown */}
            <div className="mt-6">
              {/* <div className="relative max-lg:w-[80%]"> */}
              {/* <div className="relative w-full sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[75%] 2xl:w-[81%]"> */}
              <div className="relative w-[95%] max-w-[1248px] h-[80px] rounded-[25px] ">
                <Listbox value={selectedPeptide} onChange={setSelectedPeptide}>
                  <div className="relative">
                    <Listbox.Button
                      className="w-full max-w-[1248px] h-[60px] sm:h-[70px] md:h-[80px] rounded-[25px] px-4 py-3 pr-10  bg-[#94C4ED]/30 focus:outline-none 
                    text-[clamp(18px,0.43vw+16.63px,24px)] font-medium text-left
                  text-[#224674] dark:text-[var(--foreground)]"
                    > {selectedPeptide || "Select peptide"}
                      <Image
                        src="/dropdown-icon.png"
                        alt="Dropdown icon"
                        width={80}
                        height={80}
                        className="w-[60px] md:w-[80px] h-auto absolute top-1/2 right-[-5] transform -translate-y-1/2 pointer-events-none"
                      />
                    </Listbox.Button>

                    <Listbox.Options
                      className="absolute mt-1 w-full max-h-[96px] overflow-y-auto rounded-3xl bg-white text-[#224674] 
                    dark:border-2 dark:border-r-0 dark:bg-[var(--background)] dark:text-[var(--foreground)] 
                    shadow-lg z-50 text-[20px] font-medium"
                    >
                      {peptides.length > 0 ? (
                        peptides.map((peptide, index) => (
                          <Listbox.Option
                            key={index}
                            value={peptide}
                            className={({ active }) =>
                              `cursor-pointer px-4 py-2 ${active ? "bg-[#94C4ED]/40" : ""
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
          <h3 className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold">
            <span className="rounded-3xl px-4 py-2 inline-block bg-[#94C3ED]  text-black mr-2">
              Step 2:
            </span>
            Protocol Selection
          </h3>

          <div className="lg:-mt-4 lg:ml-43">
            <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-[1.6] font-medium">
              Choose between standard and microdosing protocols
            </h3>

            {/* Toggle Button - now same width as Step 1 dropdown */}
            <div className="flex  mt-6">
              <div className="relative w-[95%] max-w-[1248px] h-[80px] bg-[#94C4ED]/40 rounded-[25px]">
                <div className="flex w-full h-full text-[#224674] dark:text-[var(--foreground)] text-[clamp(18px,0.43vw+16.63px,24px)] relative">
                  <div
                    // className={`absolute top-0 bottom-0 w-[50%] bg-[#94C4ED] dark:bg-[#6d91b0]  rounded-[25px] transition-all duration-300
                                        className={`absolute top-0 bottom-0 w-[50%] bg-[#94C4ED]  rounded-[25px] transition-all duration-300

              ${selectedProtocol === "Microdosing" ? "left-[50%]" : "left-0"}
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

            <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-[1.6] mt-4 font-medium">
              Standard dosing protocol typically used for primary treatment
              phases.
            </h3>
          </div>
        </div>

        {/* Step 3: Dosage Selection & Visualization */}
        <div
          className="mt-[120px] px-4 sm:px-6"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          <h3 className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold">
            <span className="rounded-3xl px-4 py-2 inline-block bg-[#94C3ED] text-black mr-2">
              Step 3:
            </span>
            Dosage Selection & Visualization
          </h3>

          <div className="lg:-mt-4 lg:ml-43">
            <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-[1.6] font-medium">
              Recommended range for AHK-Cu
            </h3>

            {/*slider  */}
            <div className="relative mt-8 w-[95%] max-w-[1248px] h-[20px] mb-20">
              <input
                type="range"
                min="0"
                max="2000"
                step="1"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-5 appearance-none custom-slider"
              />

              {/*  below slider */}
              <div className="absolute right-0 flex items-center gap-2">
                <span className="font-medium text-[clamp(18px,0.43vw+16.63px,24px)]">
                  Selected peptide:
                </span>
                {/* 
              <div className="bg-gradient-to-r from-[#5CB0E2] to-[#EB6793] p-[2px] rounded-[14px]">
                <span className="block bg-white  font-semibold text-[clamp(18px,0.43vw+16.63px,24px)] px-3 py-1 rounded-[14px]">
                  {sliderValue} mcg
                </span>
              </div>
            </div> */}


                <div className="min-w-[clamp(80px,8vw,96px)] h-[clamp(36px,4.5vw,46px)] p-[2px] rounded-[14px] bg-gradient-to-t from-[#5CB0E2] to-[#EB6793]">
                  <div className="w-full h-full flex items-center justify-center bg-app rounded-[12px] font-semibold text-[clamp(18px,0.43vw+16.63px,24px)]">
                    {sliderValue} mcg
                  </div>
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
  height: clamp(24px, 5vw, 36px);
width: clamp(24px, 5vw, 36px);

  border-radius: 50%;
  cursor: pointer;
  background: 
    linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    linear-gradient(212.17deg, #EB6793 0%, #5CB0E2 96.39%);
  border: 2px solid transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-sizing: border-box;
}

.custom-slider::-moz-range-thumb {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  cursor: pointer;
  background: 
    linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    linear-gradient(212.17deg, #EB6793 0%, #5CB0E2 96.39%);
  border: 2px solid transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-sizing: border-box;
}

            `}</style>
            </div>

            {/* You can add more UI elements for protocol selection here */}

            <div className="my-20 ">
              <input
                type="image"
                placeholder="Enter desired dose"
                className="w-[95%] max-w-[1237px] h-[890px] px-4 py-3 pb-20 focus:outline-none rounded-3xl bg-[#94C4ED]/30 
              text-[clamp(20.25px,0.98vw+17.1px,34px)] text-black/70  font-medium text-left align-top"
              />
              <p className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium ">
                Interactive 3D model of AHK-Cu. Use mouse to rotate and zoom.
              </p>
            </div>

            {/* <div
            className="flex flex-col  font-medium 
            text-opacity-100 w-[95%] max-w-[1233px] h-[706px] rounded-4xl mt-10 p-10 bg-[#94C4ED]/40"
          > */}
            <div
              className="flex flex-col font-medium 
  text-opacity-100 w-[95%] max-w-[1233px] h-[706px] rounded-4xl mt-10 p-10 
  bg-[#94C4ED]/40 overflow-y-auto sm:overflow-visible"
            >

              <div className="mb-6 ">
                <h2
                  // className=" text-4xl"
                  className="text-[clamp(20.25px,0.98vw+17.1px,34px)]  font-semibold leading-[100%] text-left"

                >Description</h2>
                <p className="text-[clamp(18px,0.43vw+16.63px,24px)]">
                  A copper peptide similar to GHK-Cu with specific properties.
                </p>
              </div>

              <div className="mt-6 mb-6">
                <h2 className=" text-[clamp(20.25px,0.98vw+17.1px,34px)]">
                  Applications
                </h2>
                <p className="text-[clamp(18px,0.43vw+16.63px,24px)]">
                  Skin health and tissue regeneration.
                </p>
              </div>

              <div className="mt-6 mb-10 first-letter:uppercase">
                <h2 className=" text-[clamp(20.25px,0.98vw+17.1px,34px)]">
                  Benefits
                </h2>
                {/* <p className="text-2xl ">Skin health and tissue regeneration.</p> */}
                <ul className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-tight">
                  <li
                    className="relative pl-4 before:content-[''] first-letter:uppercase lowercase
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                  >
                    Promotes collagen synthesis
                  </li>
                  <li
                    className="relative pl-4 before:content-[''] first-letter:uppercase lowercase
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                  >
                    Antioxidant properties
                  </li>
                  <li
                    className="relative pl-4 before:content-[''] first-letter:uppercase lowercase
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                  >
                    Supports wound healing
                  </li>
                  <li
                    className="relative pl-4 before:content-[''] first-letter:uppercase lowercase
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                  >
                    Anti-inflammatory effects
                  </li>
                </ul>
              </div>

              <div className=" ">
                <h2 className="text-[clamp(20.25px,0.98vw+17.1px,34px)]">
                  Risk and Side Effects
                </h2>
                <ul className="text-[clamp(18px,0.43vw+16.63px,24px)] mb-10 leading-tight ">
                  <li
                    className="relative pl-4 before:content-[''] first-letter:uppercase lowercase
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
                    Not FDA approved
                  </li>
                  <li
                    className="relative pl-4 before:content-[''] first-letter:uppercase lowercase
                            before:absolute before:left-0 before:top-3 before:w-2.5 
                            before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]"
                  >
                    Optimal dosage unclear
                  </li>
                  <li
                    className="relative pl-4 before:content-[''] first-letter:uppercase lowercase
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
          <h3 className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold">
            <span className="rounded-3xl px-4 py-2 inline-block bg-[#94C3ED] text-black mr-2">
              Step 4:
            </span>
            Administration Sites
          </h3>

          <div className="md:lg:-mt-4 lg:ml-43">
            <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-[1.6] font-medium">
              Common injection sites and rotation guidelines
            </h3>
            {/* You can add more UI elements for protocol selection here */}

            <div
              className="flex text-center justify-center items-center text-[clamp(16px,0.284vw+15.1px,20px)]  text-black font-semibold 
            text-opacity-100  max-w-[1234px] h-[890px] w-[95%] rounded-4xl mt-10 p-10 bg-[#94C4ED]/40"
            >
              Interactive diagram coming soon
            </div>

            {/* "Peptide Overview" Button */}

            <div className="gradient-border w-[184px] h-[66px] rounded-full mb-10">
              <button
                className="w-full h-full rounded-full bg-app text-black text-[clamp(18px,0.43vw+16.63px,24px)] font-medium
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
    </>
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
    <>
      <div>
        <MoleculeTopLeftAnimation
          mainheading="Peptide"
          span="Usage Simulator"
          para="This simulator is for educational purposes only. Always consult with a qualified healthcare provider before starting any peptide therapy."
        />
      </div>
      <div className="pl-5 pr-4  min-w-[95vw] overflow-hidden">



        <div className="mt-30 mb-6" style={{ fontFamily: "Afacad, sans-serif" }}>
          <h3 className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-bold flex items-center flex-wrap">
            Peptide Calculator
          </h3>
          <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-6.5 font-medium mb-12">
            Calculate reconstitution measurements and injection volumes
          </h3>

          <div className="mt-16">
            <div className="relative w-full max-w-[1248px] h-[80px] ">
              <h3 className="text-[clamp(20.25px,0.98vw+17.1px,34px)] leading-6.5 font-semibold mb-6">
                Peptide Amount (mg)
              </h3>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter in mg"
                  className="w-full max-w-[1248px] h-[60px] sm:h-[70px] md:h-[80px] 
    px-6 py-3 pr-10 rounded-3xl bg-[#94C4ED]/30 
    focus:outline-none 
    text-[clamp(18px,0.43vw+16.63px,24px)] 
    text-[#224674] dark:text-[var(--foreground)] 
    font-medium text-left"
                />

                <Image
                  src="/cal-enter-icon.png"
                  alt="Dropdown icon"
                  width={80}
                  height={80}
                  className="w-[60px] md:w-[80px] h-auto absolute top-1/2 right-0 transform -translate-y-1/2 object-contain "
                />
              </div>
            </div>
          </div>

          <div className="mt-18">
            <div className="relative w-full max-w-[1248px] h-[80px] ">
              <h3 className="text-[clamp(20.25px,0.98vw+17.1px,34px)] leading-6.5 font-semibold mb-6">
                Bacteriostatic Water (ml)
              </h3>
              <div className=" relative">
                <input
                  type="number"
                  placeholder="Enter in ml"
                  className="w-full max-w-[1248px] h-[60px] sm:h-[70px] md:h-[80px] 
    px-6 py-3 pr-10 rounded-3xl bg-[#94C4ED]/30 
    focus:outline-none 
    text-[clamp(18px,0.43vw+16.63px,24px)] 
    text-[#224674] dark:text-[var(--foreground)] 
    font-medium text-left"
                />

                <Image
                  src="/cal-enter-icon.png"
                  alt="Dropdown icon"
                  width={80}
                  height={80}
                  className="w-[60px] md:w-[80px] h-auto absolute top-1/2 right-0 transform -translate-y-1/2 object-contain "
                />
              </div>
            </div>
          </div>

          <div className="mt-18">
            <div className="relative w-full max-w-[1248px] h-[80px] ">
              <h3 className="text-[clamp(20.25px,0.98vw+17.1px,34px)] leading-6.5 font-semibold mb-6">
                Desired Dose (mcg)
              </h3>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter in mcg"
                  className="w-full max-w-[1248px] h-[60px] sm:h-[70px] md:h-[80px] 
    px-6 py-3 pr-10 rounded-3xl bg-[#94C4ED]/30 
    focus:outline-none 
    text-[clamp(18px,0.43vw+16.63px,24px)] 
    text-[#224674] dark:text-[var(--foreground)] 
    font-medium text-left"
                />

                <Image
                  src="/cal-enter-icon.png"
                  alt="Dropdown icon"
                  width={80}
                  height={80}
                  className="w-[60px] md:w-[80px] h-auto absolute top-1/2 right-0 transform -translate-y-1/2 object-contain "
                />

              </div>
            </div>
          </div>

          <div className="relative mt-24 w-full max-w-[1181px] h-[227px]  overflow-y-auto px-4 py-3 focus:outline-none rounded-3xl bg-[#94C4ED]/30 
        text-[clamp(20.25px,0.98vw+17.1px,34px)] text-black/70 dark:text-[var(--foreground)] font-semibold">
            <div className="px-2 py-2">
              Results

              <div className="mt-1 flex flex-col text-[clamp(18px,0.43vw+16.63px,24px)] ">
                <div>Concatenation: 2500 mcg/ml</div>
                <div>Injection volume for desired dose: 0.10 ml </div>
                <div>Unit per 0.1 ml: 250 mcg</div>
                {/* <div>concatenation</div>
  <div>concatenation</div> */}

              </div>

            </div>
            {/* <textarea
            placeholder="Enter desired dose"
            className="w-[77%] h-40 px-4 py-3 focus:outline-none rounded-3xl bg-[#94C4ED]/30 text-[clamp(20.25px,0.98vw+17.1px,34px)]
        text-black/65 dark:text-[var(--foreground)] font-medium "
          ></textarea> */}
          </div>
        </div>
      </div>
    </>
  );
}
