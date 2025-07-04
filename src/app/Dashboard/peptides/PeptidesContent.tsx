"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import peptidesDataRaw from "@/data/peptidesData";
import Dropdown from "./Dropdown";

interface Peptide {
  peptide: string;
  nudaName: string;
  primaryApplications: string;
  protocolDuration: string;
  experiencesLevel: string;
  sideEffectProfile: string;
  status: string;
}

const EXPERIENCE_LEVELS = [
  "Beginner",
  "Beginner to Intermediate",
  "Intermediate",
  "Advanced",
];

const SIDE_EFFECT_PROFILES = ["Minimal", "Moderate"];

const STATUS_TYPES = ["FDA", "Not FDA"];

export default function PeptidesContent() {
  const searchParams = useSearchParams();
  const fromViewAll = searchParams.get("viewAll");
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [filterExperience, setFilterExperience] = useState("");
  const [filterSideEffect, setFilterSideEffect] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredPeptides = useMemo(() => {
    return peptidesDataRaw.filter((p) => {
      return (
        p.peptide.toLowerCase().includes(search.toLowerCase()) &&
        (filterExperience ? p.experiencesLevel === filterExperience : true) &&
        (filterSideEffect ? p.sideEffectProfile === filterSideEffect : true) &&
        (filterStatus ? p.status === filterStatus : true)
      );
    });
  }, [search, filterExperience, filterSideEffect, filterStatus]);

  return (
    <div className="p-4 md:py-10 bg-white lg:px-8 2xl:px-0 max-w-screen-2xl mx-auto">
      <div className="flex gap-4 items-center">
        <div onClick={() => router.back()} className="cursor-pointer">
          <img src="/Dashboard/videos/left-arrow.svg" alt="left-arrows" />
        </div>
        <h1 className="text-3xl font-semibold">
          {fromViewAll === "true" ? "Recomended Peptides" : "Peptides"}
        </h1>
      </div>

      {/* Filters */}

     {fromViewAll !== "true" && (
         <div className="grid md:grid-cols-[2.5fr_1fr_1fr_1fr] w-full gap-4 mt-6 ">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search peptides"
            className="px-4 py-3 rounded-[80px] bg-[#F2F5F6] w-full focus-within:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Image
            src="/Dashboard/searchIcon.svg"
            alt="search"
            width={24}
            height={24}
            className="absolute right-4 top-3"
          />
        </div>
        {/* Experience Dropdown */}
        <Dropdown
          options={EXPERIENCE_LEVELS}
          value={filterExperience}
          placeholder="Select Experience Level"
          onChange={setFilterExperience}
        />

        {/* Side Effect Dropdown */}
        <Dropdown
          options={SIDE_EFFECT_PROFILES}
          value={filterSideEffect}
          placeholder="Select Side Effect Profile"
          onChange={setFilterSideEffect}
        />

        {/* Status Dropdown */}
        <Dropdown
          options={STATUS_TYPES}
          value={filterStatus}
          placeholder="Select Status"
          onChange={setFilterStatus}
        />
        {/* Filters according to experience */}
        {/* <select
          className="border border-[#E9EDEE] px-4 py-3 rounded-lg w-full"
          value={filterExperience}
          onChange={(e) => setFilterExperience(e.target.value)}
        > 
          
          <option value="">Select Experience Level</option>
          {EXPERIENCE_LEVELS.map((lvl) => (
            <option key={lvl} value={lvl}>
              {lvl}
            </option>
          ))}
        </select> */}
        {/* Filters according to side effect */}
        {/* <select
          className="border border-[#E9EDEE] px-4 py-3 rounded-lg w-full"
          value={filterSideEffect}
          onChange={(e) => setFilterSideEffect(e.target.value)}
        >
          <option value="">Select Side Effect Profile</option>
          {SIDE_EFFECT_PROFILES.map((profile) => (
            <option key={profile} value={profile}>
              {profile}
            </option>
          ))}
        </select> */}

        {/* Filters according to status */}
        {/* <select
          className="border border-[#E9EDEE] px-4 py-3 rounded-lg w-full"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          {STATUS_TYPES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select> */}
      </div>
      )}

      {/* Table Component */}
      <TableComponent peptidesData={filteredPeptides} />
    </div>
  );
}

function TableComponent({ peptidesData }: { peptidesData: Peptide[] }) {
  return (
    <div className="w-full bg-white rounded-[24px] mt-6 border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#C8E4FC] text-[#224674]">
            <tr>
              <th className="text-left px-8 py-4 tracking-wider">Peptide</th>
              <th className="text-left pr-8 py-4 tracking-wider">Nuda Name</th>
              <th className="text-left py-4 tracking-wider">
                Primary Applications
              </th>
              <th className="py-4 tracking-wider">Protocol Duration</th>
              <th className="py-4 tracking-wider">Experience Level</th>
              <th className="py-4 tracking-wider">Side Effect Profile</th>
              <th className="py-4 tracking-wider">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[#25292A] text-center">
            {peptidesData.map((peptide, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-8 text-left py-4 font-medium whitespace-nowrap">
                  {peptide.peptide}
                </td>
                <td className="pr-8 text-left py-4 font-medium whitespace-nowrap">
                  {peptide.nudaName}
                </td>
                <td className="text-left py-4 font-medium min-w-[200px] max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {peptide.primaryApplications}
                </td>
                <td className="py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium">
                    {peptide.protocolDuration}
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium">
                    {peptide.experiencesLevel}
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium">
                    {peptide.sideEffectProfile}
                  </span>
                </td>
                <td className="text-center py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 gap-1 rounded-full font-medium ${
                      peptide.status === "Not FDA"
                        ? "bg-[#FCF3DB] text-[#A18233]"
                        : "bg-[#DBFCDF] text-[#1C8F5D]"
                    }`}
                  >
                    <Image
                      src={
                        peptide.status === "Not FDA"
                          ? "/Dashboard/not-fda.svg"
                          : "/Dashboard/fda.svg"
                      }
                      alt="fda"
                      width={16}
                      height={16}
                    />
                    {peptide.status}
                  </span>
                </td>
                <td className="px-4">
                  <Image
                    src="/Dashboard/Line-arrow-right.svg"
                    alt="Line-arrow-right"
                    width={24}
                    height={24}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex text-sm text-[#25292A] items-center">
          <div className="flex gap-2 mt-2 ml-auto">
            <div className="flex items-center ">
              <p>
                Rows per page: <span className="pl-2 pr-1">10</span>{" "}
              </p>
              <Image
                src="/Dashboard/arrow-down.svg"
                alt="down-arrow"
                width={16}
                height={16}
              />
            </div>
            <div className="flex items-center ">
              <p>1-1 of 1</p>
            </div>
            <div className="flex items-center ">
              <button>
                <Image
                  src="/Dashboard/arrow-left.svg"
                  alt="up-arrow"
                  width={24}
                  height={24}
                />
              </button>
              <button>
                <Image
                  src="/Dashboard/arrow-right.svg"
                  alt="up-arrow"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// interface Peptide {
//   peptide: string;
//   nudaName: string;
//   primaryApplications: string;
//   protocolDuration: string;
//   experiencesLevel: string;
//   sideEffectProfile: string;
//   status: string;
// }
// const peptidesData: Peptide[] = [
//   {
//     peptide: "AOD-3664",
//     nudaName: "Arden",
//     primaryApplications: "Weight management, fat loss",
//     protocolDuration: "Medium (6-12 weeks)",
//     experiencesLevel: "Beginner",
//     sideEffectProfile: "Mistoral",
//     status: "Not FDA",
//   },
//   {
//     peptide: "BPC-157",
//     nudaName: "Omeisane",
//     primaryApplications:
//       "Accelerates healing of muscles, tendons, and ligaments; supports gut health",
//     protocolDuration: "Short to Medium (4-8 weeks)",
//     experiencesLevel: "Beginner",
//     sideEffectProfile: "Mistoral",
//     status: "Not FDA",
//   },
//   {
//     peptide: "CJC-1395",
//     nudaName: "Crescens",
//     primaryApplications:
//       "Enhancement of growth hormone (GH) and insulin-like growth factor 1 (IGF-1) levels...",
//     protocolDuration: "Medium (6-12 weeks)",
//     experiencesLevel: "Intermediate",
//     sideEffectProfile: "Moderate",
//     status: "FDA",
//   },
//   {
//     peptide: "Igomorelin",
//     nudaName: "Pulcar",
//     primaryApplications:
//       "Stimulates GH release with minimal cortisol/prolactin impact; muscle growth, fat loss, recovery.",
//     protocolDuration: "Short to Medium (6 to 12 weeks)",
//     experiencesLevel: "Beginner to Intermediate",
//     sideEffectProfile: "Mistoral",
//     status: "FDA",
//   },
//   {
//     peptide: "Risapoptin",
//     nudaName: "Catalyst",
//     primaryApplications:
//       "Regulates reproductive hormone axis; fertility support, puberty initiation, hormone testing",
//     protocolDuration: "Short to Medium (2 to 4 weeks)",
//     experiencesLevel: "Advanced",
//     sideEffectProfile: "Mistoral",
//     status: "Not FDA",
//   },
// ];
// import { useSearchParams } from "next/navigation";
// import React from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function PeptidesContent() {
//     const searchParams = useSearchParams();
//   const fromViewAll = searchParams.get("viewAll");
//   const router = useRouter();
//   return (
//     <div className="p-4 md:py-10 bg-white lg:px-8 2xl:px-0  max-w-screen-2xl mx-auto">
//       <div className="flex gap-4">
//         <div onClick={() => router.back()} className="cursor-pointer">
//           <img src="/Dashboard/videos/left-arrow.svg" alt="left-arrows" />
//         </div>
//         <h1 className="text-3xl font-semibold"> {fromViewAll === "true" ? "Recomeneded Peptides" : "Peptides"}</h1>
//       </div>

//       <div className="w-full bg-white rounded-[24px_24px] mt-6 border border-gray-200 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-[#C8E4FC] text-[#224674]">
//               <tr>
//                 <th className="text-left px-8 py-4   tracking-wider ">
//                   Peptide
//                 </th>
//                 <th className="text-left pr-8 py-4   tracking-wider ">
//                   Nuda Name
//                 </th>
//                 <th className="text-left py-4   tracking-wider ">
//                   Primary applications
//                 </th>
//                 <th className=" py-4   tracking-wider ">Protocol Duration</th>
//                 <th className=" py-4   tracking-wider ">Experiences Level</th>
//                 <th className=" py-4   tracking-wider ">Side Effect Profile</th>
//                 <th className=" py-4   tracking-wider ">Status</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200 text-[#25292A] text-center ">
//               {peptidesData.map((peptide, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                 >
//                   <td className=" px-8 text-left py-4  font-medium whitespace-nowrap">
//                     {peptide.peptide}
//                   </td>
//                   <td className="pr-8 text-left py-4 font-medium  whitespace-nowrap">
//                     {peptide.nudaName}
//                   </td>
//                   <td className="text-left py-4 font-medium min-w-[200px] max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
//                     {peptide.primaryApplications}
//                   </td>
//                   <td className=" py-4  whitespace-nowrap">
//                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full  font-medium ">
//                       {peptide.protocolDuration}
//                     </span>
//                   </td>
//                   <td className=" py-4  whitespace-nowrap">
//                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full  font-medium">
//                       {peptide.experiencesLevel}
//                     </span>
//                   </td>
//                   <td className=" py-4  whitespace-nowrap">
//                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full  font-medium">
//                       {peptide.sideEffectProfile}
//                     </span>
//                   </td>
//                   <td className=" text-center  py-4  whitespace-nowrap">
//                     <span
//                       className={`  inline-flex items-center px-2.5 py-0.5 gap-1 rounded-full font-medium ${
//                         peptide.status.includes("Not FDA")
//                           ? "bg-[#FCF3DB] text-[#A18233]"
//                           : "bg-[#DBFCDF] text-[#1C8F5D]"
//                       }`}
//                     >
//                       <Image
//                         src={
//                           peptide.status.includes("Not FDA")
//                             ? "/Dashboard/not-fda.svg"
//                             : "/Dashboard/fda.svg"
//                         }
//                         alt="fda"
//                         width={16}
//                         height={16}
//                       />
//                       {peptide.status}
//                     </span>
//                   </td>
//                   <td className="px-4">
//                     <Image
//                       src="/Dashboard/Line-arrow-right.svg"
//                       alt="Line-arrow-right"
//                       width={24}
//                       height={24}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

<div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
  <div className="flex text-sm text-[#25292A] items-center">
    <div className="flex gap-2 mt-2 ml-auto">
      <div className="flex items-center ">
        <p>
          Rows per page: <span className="pl-2 pr-1">10</span>{" "}
        </p>
        <Image
          src="/Dashboard/arrow-down.svg"
          alt="down-arrow"
          width={16}
          height={16}
        />
      </div>
      <div className="flex items-center ">
        <p>1-1 of 1</p>
      </div>
      <div className="flex items-center ">
        <button>
          <Image
            src="/Dashboard/arrow-left.svg"
            alt="up-arrow"
            width={24}
            height={24}
          />
        </button>
        <button>
          <Image
            src="/Dashboard/arrow-right.svg"
            alt="up-arrow"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  </div>
</div>;
// </div>
//     </div>
//   );
// }
