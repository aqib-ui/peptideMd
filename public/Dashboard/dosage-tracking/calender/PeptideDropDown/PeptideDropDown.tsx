
"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaExclamationTriangle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
// import { FaAngleDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";


export type PeptideOption = {
  tag: string;
  sub: any;
  name: any;
  id: number;
  title: string;
  primary_applications: string;
  fda_status: string;
  isFDAApproved?: boolean;
  dateValue?: string;
};

interface PeptideDropdownProps {
  selected: PeptideOption | null;
  setSelected: (option: PeptideOption) => void;
}

export default function PeptideDropdown({
  selected,
  setSelected,
}: PeptideDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [peptideOptions, setPeptideOptions] = useState<PeptideOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fetch data from API
  useEffect(() => {
    const fetchPeptides = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          // "https://peptide-backend.mazedigital.us/peptides/v1_web_getAllPeptide?page=1&limit=10&title=AOD&side_effect_profile=Minimal&experience_level=Beginner&fda_status=Not FDA"


          "https://peptide-backend.mazedigital.us/peptides/v1_web_getAllPeptide"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch peptides: ${response.status}`);
        }

        const data = await response.json();

        // Map and normalize FDA status
        const mappedOptions = data.data.peptides.map((peptide: any) => {
          // Normalize FDA status by trimming and converting to uppercase
          const normalizedStatus = peptide.fda_status 
            ? peptide.fda_status.trim().toUpperCase() 
            : '';
          
          return {
            id: peptide.id,
            name: peptide.title,
            sub: peptide.primary_applications,
            tag: normalizedStatus,
          };
        });

        setPeptideOptions(mappedOptions);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPeptides();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        event.target &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter options based on search query
  const filteredOptions = peptideOptions.filter((opt) => {
    const query = search.toLowerCase();
    return (
      opt.name.toLowerCase().includes(query) ||
      (opt.sub && opt.sub.toLowerCase().includes(query))
    );
  });

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div
        className="w-full h-auto 2xl:w-[448px] xl:h-[48px] !bg-[#F2F5F6] rounded-md px-3 py-2 flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`txt-16 ${
            selected
              ? "text-[#25292A] font-medium"
              : "text-[#8D9A9B] font-normal"
          }`}
        >
          {selected ? selected.name : "Select peptide"}
        </span>
        {/* <IoMdArrowDropdown className="text-[#8D9A9B] text-lg" /> */}
        <FaAngleDown
  onClick={() => setOpen(!open)}
  className={`
    text-[#8D9A9B] 
    text-lg 
    transform 
    transition-transform 
    duration-300 
    ease-in-out 
    ${open ? "rotate-180" : "rotate-0"}
  `}
/>
      </div>

      {open && (
        <div className="mt-2 w-full bg-white rounded-md shadow-lg border border-[#E0E0E0] z-10">
          {/* Search Bar */}
          <div className="flex items-center px-4 py-2 bg-[#F2F5F6] sticky top-0 z-10">
            <CiSearch className="h-6 w-6 text-[#8D9A9B]" />
            <input
              className="w-full px-2 py-2 text-[#25292A] placeholder-[#8D9A9B] bg-transparent focus:outline-none"
              placeholder="Search peptide..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Options List */}
          <div className="max-h-65 max-sm:h-40 overflow-y-auto">
            {loading ? (
              <div className="h-48 flex items-center justify-center text-[#8D9A9B] text-sm">
                Loading peptides...
              </div>
            ) : error ? (
              <div className="h-48 flex flex-col items-center justify-center text-[#8D9A9B] text-sm p-4 text-center">
                <FaExclamationTriangle className="text-yellow-500 mb-2" />
                <span>Error loading peptides:</span>
                <span className="text-red-500 text-xs mt-1">{error}</span>
              </div>
            ) : filteredOptions.length === 0 ? (
              <div className="h-48 flex items-center justify-center text-[#8D9A9B] text-sm">
                No peptides found
              </div>
            ) : (
              filteredOptions.map((option, idx) => (
                <div
                  key={option.id}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className={`px-4 py-3 cursor-pointer flex justify-between items-center hover:bg-[#E4EBEC] h-16 ${
                    idx % 2 === 1 ? "bg-[#D8DFE0]" : "bg-white"
                  }`}
                >
                  <div className="flex gap-4">
                    <span className="text-[#9EA9AA] text-sm text-center flex items-center">
                      {idx + 1}.
                    </span>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#25292A] font-medium text-[15px] !m-0 truncate">
                        {option.name}
                      </p>
                      <p className="text-[#626D6F] text-[13px] !m-0 w-40 max-sm:w-28 !truncate">
                        {option.sub}
                      </p>
                    </div>
                  </div>

                  {option.tag === "NOT FDA" && (
                    <div className="flex items-center justify-center gap-1 text-[#A18233] bg-[#FCF3DB] w-[72px] h-[24px] rounded-2xl text-[12px]">
                      <FaExclamationTriangle className="text-xs mt-[2px]" />
                      Not FDA
                    </div>
                  )}

                  {option.tag === "FDA" && (
                    <div className="flex items-center justify-center gap-1 text-[#1C8F5D] bg-[#DBFCDF] w-[72px] h-[24px] rounded-2xl text-[12px]">
                      <FaExclamationTriangle className="text-xs mt-[2px]" />
                      FDA
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}