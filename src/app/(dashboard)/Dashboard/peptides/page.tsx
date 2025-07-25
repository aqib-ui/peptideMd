"use client";
import React, { useState, Suspense, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
// import peptidesDataRaw from "@/data/peptidesData";
import Dropdown from "../components/Dropdown";
import TableComponent from "../components/TableComponent";

interface Peptide {
  id: string;
  title: string;
  nuda_name: string;
  primary_applications: string;
  protocol_duration: string;
  experience_level: string;
  side_effect_profile: string;
  fda_status: string;
  fda_description: string;
}

const EXPERIENCE_LEVELS = [
  "Beginner",
  "Beginner to Intermediate",
  "Intermediate",
  "Advanced",
];

const SIDE_EFFECT_PROFILES = ["Minimal", "Moderate"];

const STATUS_TYPES = ["FDA", "Not FDA"];


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
  const [apiData, setApiData] = useState<Peptide[] | null>(null);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(false);
  // console.log("🔁 loading  ===>", loading);
  const toggleCompareMode = () => {
    setIsCompareMode(true);
    setSelectedPeptides([]);
  };

  const cancelCompareMode = () => {
    setIsCompareMode(false);
    setSelectedPeptides([]);
  };
 
  console.log(selectedPeptides, "selectedPeptides");
  // 🔁 Fetch peptides on filter/search/page change
  useEffect(() => {
    const fetchPeptides = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: currentPage.toString(),
          limit: rowsPerPage.toString(),
          ...(search ? { title: search } : {}),
          ...(filterExperience ? { experience_level: filterExperience } : {}),
          ...(filterSideEffect
            ? { side_effect_profile: filterSideEffect }
            : {}),
          ...(filterStatus ? { fda_status: filterStatus } : {}),
        });

        const res = await fetch(
          `https://peptide-backend.mazedigital.us/peptides/v1_web_getAllPeptide?${params}`
        );

        const data = await res.json();

        setApiData(data?.data?.peptides || []);
        setRowsPerPage(data?.data?.limit || 10);
        setTotalItems(data?.data?.total || 0); // this must match API structure
      } catch (error) {
        console.error("Error fetching peptides:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeptides();
  }, [
    search,
    filterExperience,
    filterSideEffect,
    filterStatus,
    currentPage,
    rowsPerPage,
  ]);

  return (
    <div className="p-4 md:py-10 bg-white lg:px-8 2xl:px-0 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div onClick={() => router.back()} className="cursor-pointer">
            <img src="/Dashboard/videos/left-arrow.svg" alt="left-arrows" />
          </div>
          <h1 className=" text-xl sm:text-3xl font-semibold">
            {fromViewAll === "true" ? "Recommended Peptides" : "Peptides"}
          </h1>
        </div>

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
                className="bg-[#224674] text-white px-6 py-3 rounded-full cursor-pointer font-semibold text-base hover:bg-[#1a3654]"
              >
                Compare
              </button>
            )}
          </div>
        )}
      </div>

      {/* Tooltip */}
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
          <Dropdown
            options={EXPERIENCE_LEVELS}
            value={filterExperience}
            placeholder="Select Experience Level"
            onChange={setFilterExperience}
          />
          <Dropdown
            options={SIDE_EFFECT_PROFILES}
            value={filterSideEffect}
            placeholder="Select Side Effect Profile"
            onChange={setFilterSideEffect}
          />
          <Dropdown
            options={STATUS_TYPES}
            value={filterStatus}
            placeholder="Select Status"
            onChange={setFilterStatus}
          />
        </div>
      )}

      {/* Table with API data */}
      <TableComponent
        peptidesData={apiData}
        isCompareMode={isCompareMode}
        selectedPeptides={selectedPeptides}
        setSelectedPeptides={setSelectedPeptides}
        currentPage={currentPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setCurrentPage={setCurrentPage}
        apiDataLoading={loading}
        totalPages={totalPages}
      />
    </div>
  );
}


// Outer Default component with Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<div>Loading Peptides table Data...</div>}>
      <PeptidesContent />
    </Suspense>
  );
}