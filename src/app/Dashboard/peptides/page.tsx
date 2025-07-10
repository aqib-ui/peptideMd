"use client";
import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import peptidesDataRaw from "@/data/peptidesData";
import Dropdown from "../components/Dropdown";
import Pagination from "../components/Pagination";
import NoPeptideFound from "../components/NoPeptideFound";

interface Peptide {
  id: string;
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

// Outer Default component with Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<div>Loading Videos...</div>}>
      <PeptidesContent />
    </Suspense>
  );
}

// Inner component Which is Peptides-DataBase Main Page
function PeptidesContent() {
  const searchParams = useSearchParams();
  const fromViewAll = searchParams.get("viewAll");
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [filterExperience, setFilterExperience] = useState("");
  const [filterSideEffect, setFilterSideEffect] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const [isCompareMode, setIsCompareMode] = useState(false);
  const [selectedPeptides, setSelectedPeptides] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const toggleCompareMode = () => {
    setIsCompareMode(true);
    setSelectedPeptides([]); // reset on every start
  };

  const cancelCompareMode = () => {
    setIsCompareMode(false);
    setSelectedPeptides([]);
  };

  //

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

  const paginatedPeptides = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredPeptides.slice(start, end);
  }, [filteredPeptides, currentPage, rowsPerPage]);

  return (
    <div className="p-4 md:py-10 bg-white lg:px-8 2xl:px-0 max-w-screen-2xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between">
        {/* Left Section */}
        <div className="flex gap-4 items-center">
          <div onClick={() => router.back()} className="cursor-pointer">
            <img src="/Dashboard/videos/left-arrow.svg" alt="left-arrows" />
          </div>
          <h1 className=" text-xl sm:text-3xl font-semibold">
            {fromViewAll === "true" ? "Recomended Peptides" : "Peptides"}
          </h1>
        </div>

        {/* Right Section : ==> if view all is not true, show compare button */}
        {fromViewAll !== "true" && (
          <div className="flex gap-3 ">
            {isCompareMode && (
              <button
                onClick={cancelCompareMode}
                className="text-base text-[#25292A] font-semibold  cursor-pointer"
              >
                Cancel
              </button>
            )}

            {isCompareMode && (
              <button
                disabled={selectedPeptides.length !== 2}
                className={` px-2 sm:px-6 py-0 sm:py-3 rounded-full font-semibold  text-sm sm:text-base transition-all ${
                  selectedPeptides.length === 2
                    ? "bg-[#224674] text-white hover:bg-[#1a3654] cursor-pointer"
                    : "bg-[#D8DFE0] text-[#9EA9AA] cursor-not-allowed"
                }`}
                onClick={() =>
                  router.push(
                    `/Dashboard/peptides/compare?id1=${selectedPeptides[0]}&id2=${selectedPeptides[1]}`
                  )
                }
              >
                Compare ({selectedPeptides.length} of 2)
              </button>
            )}

            {!isCompareMode && (
              <button
                onClick={toggleCompareMode}
                className="bg-[#224674] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-[#1a3654]"
              >
                Compare
              </button>
            )}
          </div>
        )}
      </div>
      {/* End Header Section */}

      {/* tooltip for compare */}
      {isCompareMode && (
        <div className=" bg-[#F2F5F6]  py-3 px-3 rounded-[8px] flex items-center justify-between w-full mt-11">
          <div className="flex gap-1 items-center">
            <Image
              src="/Dashboard/pep-database/info-icon.svg"
              alt="info"
              width={20}
              height={20}
            />
            <span className="text-[#25292A text-xs font-semibold">
              You can compare only two peptides
            </span>
          </div>
          <Image
            src="/Dashboard/pep-database/cancel-button.svg"
            alt="close"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={cancelCompareMode}
          />
        </div>
      )}

      {/* Filters */}

      {fromViewAll !== "true" && (
        <div className="grid md:grid-cols-[1.5fr_1fr] xl:grid-cols-[2.5fr_1fr_1fr_1fr] w-full gap-4 mt-6 ">
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
        </div>
      )}

      {/* Table Component */}
      <TableComponent
        peptidesData={paginatedPeptides}
        isCompareMode={isCompareMode}
        selectedPeptides={selectedPeptides}
        setSelectedPeptides={setSelectedPeptides}
        currentPage={currentPage}
        totalItems={filteredPeptides.length}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

function TableComponent({
  peptidesData,
  isCompareMode,
  selectedPeptides,
  setSelectedPeptides,
  currentPage,
  totalItems,
  rowsPerPage,
  setRowsPerPage,
  setCurrentPage,
}: {
  peptidesData: Peptide[];
  isCompareMode: boolean;
  selectedPeptides: string[];
  setSelectedPeptides: React.Dispatch<React.SetStateAction<string[]>>;
  currentPage: number;
  totalItems: number;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const router = useRouter();

  const handleCheckboxToggle = (id: string) => {
    if (selectedPeptides.includes(id)) {
      setSelectedPeptides(selectedPeptides.filter((item) => item !== id));
    } else {
      if (selectedPeptides.length < 2) {
        setSelectedPeptides([...selectedPeptides, id]);
      }
    }
  };

  // console.log("Selected Peptides:", selectedPeptides);

  return (
    <div className="w-full bg-white rounded-[24px] mt-6 border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#C8E4FC] text-[#224674]">
            <tr>
              {isCompareMode && <th className="px-4"></th>}
              <th className="text-left px-8 py-4 tracking-wider">Peptide</th>
              <th className="text-left pr-8 py-4 tracking-wider whitespace-nowrap">
                Nuda Name
              </th>
              <th className="text-left py-4 tracking-wider">
                Primary Applications
              </th>
              <th className="py-4 tracking-wider">Protocol Duration</th>
              <th className="py-4  tracking-wider whitespace-nowrap ">Experience Level</th>
              <th className="py-4   tracking-wider whitespace-nowrap">
                Side Effect Profile
              </th>
              <th className="py-4  tracking-wider">Status</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[#25292A] text-center">
            {peptidesData.map((peptide, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} ${
                  isCompareMode ? "cursor-default" : "cursor-pointer"
                }`}
                onClick={() =>
                  !isCompareMode &&
                  router.push(`/Dashboard/peptides/${peptide.id}`)
                }
              >
                {isCompareMode && (
                  <td className="px-4 min-w-[56px] ">
                    <div className="relative min-w-[36px] xl:min-w-[33px] 2xl:min-w-[20px]">
                      <input
                        type="checkbox"
                        checked={selectedPeptides.includes(peptide.id)}
                        onChange={() => handleCheckboxToggle(peptide.id)}
                        className="w-6 h-6 rounded-[6px] border-2 border-[#9EA9AA] cursor-pointer
      appearance-none checked:bg-[#224674] checked:border-[#224674]"
                      />
                      {selectedPeptides.includes(peptide.id) && (
                        <svg
                          className="w-5 h-5 text-white absolute left-2 xl:left-2.5  2xl:left-2.25 top-[2px] pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </td>
                )}
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
                  {!isCompareMode && (
                    <Image
                      src="/Dashboard/Line-arrow-right.svg"
                      alt="Line-arrow-right"
                      width={24}
                      height={24}
                    />
                  )}
                </td>
              </tr>
            ))}
            {peptidesData.length === 0 && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <NoPeptideFound />
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination component */}
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
