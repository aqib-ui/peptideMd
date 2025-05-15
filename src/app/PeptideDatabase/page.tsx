// ////////////// 24/3/25-----------------22/4/25--23/4/25 /////////////////////////////////////////////////////////////
"use client";
import Image from "next/image";
import { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import MoleculeTopLeftAnimation from "@/component/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";
import dynamic from "next/dynamic";

const ScrollButton2= dynamic(() => import('@/component/ScrollButton/ScrollButton2'), {
  ssr: false
});

export default function PeptideDatabase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [isCompareClicked, setIsCompareClicked] = useState(false);

  const peptides = [
    {
      name: "AHK-Cu",
      applications: "Skin health and tissue regeneration.",
      description:
        "A copper peptide similar to GHK-Cu with specific properties.",
      benefits: [
        "Promotes collagen synthesis",
        "Antioxidant properties",
        "Supports wound healing",
        "Anti-inflammatory effects",
      ],
      risks: [
        "Limited research",
        "Not FDA approved",
        "Optimal dosing unclear",
        "Cost considerations",
      ],
      references: "Refrences 1",
      fdaStatus: "Not FDA Approved",
    },
    {
      name: "PT-141",
      applications:
        "Treatment of hypoactive sexual desire disorder and erectile dysfunction.",
      description:
        "Also known as Bremelanotide, PT-141 is a melanocortin receptor agonist designed to treat sexual dysfunction in both men and women.",
      benefits: [
        "Increases sexual desire",
        "Improves erectile function",
        "Treats hypoactive sexual desire disorder",
        "FDA approved for premenopausal women",
      ],
      risks: [
        "Nausea and vomiting",
        "Flushing and hot flashes",
        "Headache",
        "Potential blood pressure changes",
      ],
      references: "Refrences 1",
      fdaStatus: "FDA Approved",
    },
    // {
    //   name: "Sample Peptide",
    //   applications: "Research",
    //   description: "A short description.",
    //   benefits: ["Potential benefits."],
    //   risks: ["Possible risks."],
    //   references: "refrences",
    //   fdaStatus: " FDA Approved",
    // },
  ];

   
  return (
    <>
      <MoleculeTopLeftAnimation
        mainheading="Peptide "
        span="Database "
        para="Your go-to database for peptide knowledge—browse, explore, and unlock detailed information with a click!"
      />










      {/* Peptides Table */}
      <div
        className=" md:mt-20 py-10"
        style={{ fontFamily: "Afacad, sans-serif" }}
      >
        {/* Heading searchbar etc Section */}
        <div
          // className="grid grid-cols-[auto_1fr] justify-around items-start gap-4"
          className="flex items-start justify-around max-xl:flex-col"
        >
          {/*basically grid-cols-[auto_1fr] ===> "Give the first column as much space
                 as it needs (auto), and let the second one fill the rest (1fr)" */}

          {/* heading section */}
          <div className="px-10 w-full flex flex-1 flex-col ">
            <h1 className="capitalize text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold">
              single peptide
            </h1>
            <h3 className="my-1 mb-2 text-[clamp(18px,0.43vw+16.63px,24px)] font-medium">
              click on any peptide to discover more!
            </h3>
          </div>

          <div className="flex flex-col w-full p-6 pl-2 pt-10 flex-3 md:flex-row justify-center xl:justify-end gap-4 mr-4 md:mr-16  ">
            {/* Filter & Compare Buttons */}
            <div className="flex max-md:flex-wrap items-center justify-center md:justify-end gap-4 text-[clamp(16px,0.284vw+15.1px,20px)] font-medium">
              <button
                onClick={() => setIsFilterClicked(!isFilterClicked)}
                className={`flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 
                  border-[#F7B6DB] rounded-full shadow-md transition duration-200 ${isFilterClicked ? "bg-[#F7B6DB]" : "hover:bg-[#F7B6DB]"
                  }`}
              >
                <Image
                  src="/filterIcon.png"
                  alt="Compare"
                  width={24}
                  height={24}
                  className="w-5 mr-2 h-5 dark:filter dark:invert"
                />
                Filter
              </button>
              {/* compare button */}
              <button
                onClick={() => setIsCompareClicked(!isCompareClicked)}
                className={`flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2
                  border-[#C5B3FF] rounded-full shadow-md transition duration-200 ${isCompareClicked ? "bg-[#C5B3FF]" : "hover:bg-[#C5B3FF]"
                  }`}
              >
                <Image
                  src="/compareIcon.png"
                  alt="Compare"
                  width={24}
                  height={24}
                  className="w-5 mr-2 h-5 dark:filter dark:invert"
                />
                Compare Peptide
              </button>
            </div>

            {/* Search Input - visible only when toggled on small screens */}
            {showSearch && (
              <input
                type="text"
                placeholder="Search Peptides"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`
                px-8 py-4 border-2 border-[#88D3FF] bg-app text-app rounded-full shadow-sm focus:ring
                focus:ring-[#88D3FF]/60 focus:border-[#88D3FF] outline-none text-lg md:text-xl font-semibold 
                max-dark:placeholder:text-[#104576]/50 transition duration-100 w-full md:w-auto
                ${showSearch ? "block" : "hidden"} md:block
              `}
                style={{ fontFamily: "Afacad, sans-serif" }}
              />
            )}
            {/* Search Input - visible only when toggled on small screens */}
            {!showSearch && (
              <div className="flex items-start">
                <input
                  type="text"
                  placeholder="Search Peptides"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`
                px-8 py-4  border-2 border-[#88D3FF] bg-app text-app rounded-full shadow-sm focus:ring 
                focus:ring-[#88D3FF]/60 focus:border-[#88D3FF] outline-none text-lg md:text-xl font-semibold 
                max-dark:placeholder:text-[#104576]/50 transition duration-100 w-full sm:w-[200px] lg:w-[400px]
                ${showSearch ? "block" : "hidden"} md:block
              `}
                  style={{ fontFamily: "Afacad, sans-serif" }}
                />
              </div>
            )}

            {/* working dropdown behind search button responsive */}
            <div className="relative w-fit left-[12rem] md:left-0 ">
              {/* Dropdown Trigger (fake behind) */}
              <button
                className="absolute right-0 top-0 translate-x-7 translate-y-0 z-10 w-16 h-16
                 bg-[#224674] rounded-full flex items-center justify-end"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <LiaAngleDownSolid className="text-[#94C4ED] text-xl mr-1" />
              </button>

              {/* Search Button - visually in front */}
              <ScrollButton2
  showSearch={showSearch}
  setShowSearch={setShowSearch}
  searchQuery={searchQuery}
/>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div
                  className="absolute top-full mt-6 md:mt-7 xl:mt-10 z-30 w-60 max-md:w-40 md:left-1/6 max-md:left-1/4 
                  bg-white bg-app dark:border dark:border-white shadow-xl p-4 rounded-3xl"
                  style={{
                    transform: "translateX(-60%)",
                    fontFamily: "Afacad, sans-serif",
                  }}
                >
                  <p className="text-[#1F1F1F]/40 dark:text-[#E5F0F8]/40 text-sm md:text-base lg:text-xl font-semibold mb-2">
                    Search by:
                  </p>
                  <ul className="space-y-0 mt-3 pb-5 font-semibold text-sm md:text-base lg:text-xl leading-tight">
                    <li className="cursor-pointer hover:text-[#88D3FF] text-[#224674]/40 dark:text-[#E5F0F8]/40">
                      Symptoms
                    </li>
                    <li className="cursor-pointer hover:text-[#88D3FF] text-[#224674]/40 dark:text-[#E5F0F8]/40">
                      Current medications
                    </li>
                    <li className="cursor-pointer hover:text-[#88D3FF] text-[#224674]/40 dark:text-[#E5F0F8]/40">
                      Desired outcomes
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* table and table data */}

        {/* <div className="overflow-x-auto rounded-t-[72px] border border-gray-300 shadow-md"> */}
        <div className="overflow-x-auto rounded-t-[72px] border border-gray-300 dark:border-t-0 dark:border-r-0 dark:border-l-0 dark:border-b shadow-md">
          <table
            className="min-w-full bg-[#F0F0F0] rounded-t-[72px] p-10 "
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            <thead>
              <tr className="bg-[#94C4ED] dark:text-black mt-10">
                <th
                  className={`font-bold text-[28px] md:text-[32px] lg:text-[34px]  
      ${isCompareClicked
                      ? "px-2 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 text-center pr-60"
                      : "px-4 sm:px-6 md:px-10 text-left"
                    }
    `}
                  colSpan={isCompareClicked ? peptides.length + 1 : 7}
                >
                  {isCompareClicked ? "Peptide Comparison" : ""}
                </th>
              </tr>

              {/* Normal table layout  */}
              {!isCompareClicked && (
                <tr className="bg-[#94C4ED] dark:text-black text-[clamp(18px,0.43vw+16.63px,24px)] mt-10">
                  <th className="px-10 py-6 text-left">Name</th>
                  <th className="px-10 py-6 text-left">Applications</th>
                  <th className="px-10 py-6 text-left">Descriptions</th>
                  <th className="px-10 py-6 text-left">Benefits</th>
                  <th className="px-10 py-6 text-left">Risks</th>
                  <th className="pr-5 py-6 text-left">References</th>
                  <th className="px-5 py-6 text-left">FDA Status</th>
                </tr>
              )}
            </thead>

            <tbody>
              {!isCompareClicked ? (
                // Normal table layout
                peptides.map((peptide, index) => (
                  <tr
                    key={index}
                    className="font-medium bg-[#F0F0F0] dark:bg-[var(--background)] dark:text-[var(--foreground)] text-[clamp(18px,0.43vw+16.63px,24px)]  "
                  >
                    <td className="px-2 align-top pt-15 ">
                      <div className="inline-block rounded-full bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] p-[1.5px]">
                        <span className="block rounded-full bg-[#F0F0F0] dark:bg-[var(--background)] dark:text-[var(--foreground)] 
                        px-3 py-3 font-bold text-black">
                          {peptide.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-2  w-[20%]  align-top pt-20 pb-5 ">
                      <div className="flex  justify-start items-start">
                        {peptide.applications}
                      </div>
                    </td>

                    <td className="px-2  w-[30%] align-top pt-20 pb-5">
                      <div className="flex flex-col justify-start items-start">
                        {peptide.description}
                      </div>
                    </td>

                    <td className="px-2  w-[30%] align-top pt-20 pb-5">
                      <ul className="flex flex-col justify-start items-start">
                        {peptide.benefits.map((benefit, i) => (
                          <li
                            className="relative pl-3 before:content-['']
                            before:absolute before:left-0 before:top-2 before:w-2
                            before:h-2 before:rounded-full before:border-2 before:border-[#88D3FF]"
                            key={i}
                          >
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td className="px-2  w-[25%] align-top pt-20 pb-5">
                      <ul className=" flex flex-col justify-start items-start ">
                        {peptide.risks.map((risk, i) => (
                          <li
                            className="relative pl-3 before:content-['']
                            before:absolute before:left-0 before:top-2 before:w-2
                            before:h-2 before:rounded-full before:border-2 before:border-[#88D3FF]"
                            key={i}
                          >
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td className="px-4 flex align-top pt-20 pb-5">
                      <div className="flex justify-start items-start">
                        {peptide.references}
                      </div>
                    </td>

                    <td className="px-2 align-top pt-15 ">
                      <span
                        className={`inline-block text-black px-3 py-1 rounded-[30px] text-[clamp(18px,0.43vw+16.63px,24px)] ${peptide.fdaStatus === "FDA Approved"
                          ? "bg-[#C5E87E]"
                          : "bg-[#909090]"
                          }`}
                      >
                        {peptide.fdaStatus}
                      </span>
                    </td>
                  </tr>
                  // <tr
                  //   key={index}
                  //   className="font-medium text-sm md:text-base lg:text-2xl text-left "
                  // >
                  //   {/* note: all px‑* and py‑* removed; use a uniform p‑4 if you need some cell padding */}
                  //   <td className="px-4">
                  //     <div className="inline-block rounded-full bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] p-[1.5px]">
                  //       <span className="block rounded-full bg-[#F0F0F0] px-3 py-3 text-md font-bold text-black">
                  //         {peptide.name}
                  //       </span>
                  //     </div>
                  //   </td>
                  //   <td className="px-4 w-[20%]">{peptide.applications}</td>
                  //   <td className="px-4 w-[30%]">{peptide.description}</td>
                  //   <td className="px-4 w-[30%]">
                  //     <ul>
                  //       {peptide.benefits.map((b, i) => (
                  //         <li
                  //           key={i}
                  //           className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2
                  //           before:h-2 before:rounded-full before:border-2 before:border-[#88D3FF]"
                  //         >
                  //           {b}
                  //         </li>
                  //       ))}
                  //     </ul>
                  //   </td>
                  //   <td className="px-4 w-[25%]">
                  //     <ul>
                  //       {peptide.risks.map((r, i) => (
                  //         <li
                  //           key={i}
                  //           className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2
                  //           before:h-2 before:rounded-full before:border-2 before:border-[#88D3FF]"
                  //         >
                  //           {r}
                  //         </li>
                  //       ))}
                  //     </ul>
                  //   </td>
                  //   <td className="px-4">{peptide.references}</td>
                  //   <td className="px-4">
                  //     <span
                  //       className={`inline-block px-3 py-1 rounded-[20px] text-sm md:text-base lg:text-2xl ${
                  //         peptide.fdaStatus === "FDA Approved"
                  //           ? "bg-[#C5E87E]"
                  //           : "bg-[#909090]"
                  //       }`}
                  //     >
                  //       {peptide.fdaStatus}
                  //     </span>
                  //   </td>
                  // </tr>
                ))
              ) : (
                // Comparison layout
                <>
                  {[
                    { label: "Name", key: "name" },
                    { label: "Applications", key: "applications" },
                    { label: "Description", key: "description" },
                    { label: "Benefits", key: "benefits" },
                    { label: "Risks", key: "risks" },
                    { label: "References", key: "references" },
                    { label: "FDA Status", key: "fdaStatus" },
                  ].map((row, i) => (
                    <tr key={i} className="bg-[#F0F0F0] dark:bg-[var(--background)] dark:text-[var(--foreground)] ">
                      {peptides.map((peptide, index) =>
                        row.key === "name" ? (
                          <td
                            key={index}
                            className={`md:px-4 max-md:px-1 py-4 align-top  ${index !== 0 ? "pl-10" : ""
                              }`}
                          >
                            <div className="flex items-center ml-2 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-[4.5rem] ">
                              {/* Purple Number Badge */}
                              <div className="flex items-center justify-center w-12  h-12 rounded-full bg-[#D59EFF] text-[clamp(20.25px,0.98vw+17.1px,34px)] font-bold">
                                {index + 1}
                              </div>

                              {/* Line between badge and name */}
                              <div className="relative mx-4 sm:mx-6 block">
                                <div
                                  className="absolute top-1/2 left-0 
                                  w-20 sm:w-24 md:w-12 lg:w-34 xl:w-48 2xl:w-45
                                  h-[1px] bg-[#D59EFF] transform -translate-y-1/2"
                                ></div>
                              </div>

                              {/* Peptide Name */}
                              <div className="text-[clamp(20.25px,0.98vw+17.1px,34px)] ml-21 sm:ml-22 md:ml-10 lg:ml-[8rem] xl:ml-[11rem] font-bold ">
                                {peptide.name}
                              </div>
                            </div>
                          </td>
                        ) : (
                          <td
                            key={index}
                            className={`md:px-4 max-md:px-1 py-4 align-top ${index !== 0 ? "pl-10" : ""
                              }`}
                          >
                            <div className="ml-2 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-[12.5rem] flex gap-5 items-start justify-start">
                              {/* Label - fixed width */}
                              <div className="font-bold text-[clamp(18px,0.43vw+16.63px,24px)] whitespace-nowrap min-w-[120px]">
                                {row.label}:
                              </div>

                              {/* Value - fills remaining space */}
                              <div className="flex-1 text-[clamp(18px,0.43vw+16.63px,24px)] font-medium">
                                {Array.isArray(
                                  peptide[row.key as keyof typeof peptide]
                                ) ? (
                                  <ul className="space-y-0">
                                    {(
                                      peptide[
                                      row.key as keyof typeof peptide
                                      ] as string[]
                                    ).map((item, j) => (
                                      <li
                                        key={j}
                                        className="relative pl-3 before:content-[''] leading-tight
                      before:absolute before:left-0 before:top-2 before:w-2 
                      before:h-2 before:rounded-full before:border-2 before:border-[#88D3FF]"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                ) : row.key === "fdaStatus" ? (
                                  <span
                                    className={`inline-block px-6 py-4 rounded-[30px] text-black text-[clamp(18px,0.43vw+16.63px,24px)] font-medium ${peptide.fdaStatus === "FDA Approved"
                                      ? "bg-[#C5E87E]"
                                      : "bg-[#909090]"
                                      }`}
                                  >
                                    {peptide.fdaStatus}
                                  </span>
                                ) : (
                                  <span>
                                    {peptide[row.key as keyof typeof peptide]}
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
