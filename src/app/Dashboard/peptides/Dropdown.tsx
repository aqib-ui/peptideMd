"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface DropdownProps {
  options: string[];
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default function Dropdown({
  options,
  value,
  placeholder,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full z-10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full border border-[#E9EDEE] px-4 py-3 rounded-lg flex justify-between items-center bg-white"
      >
        <span className={value ? "text-[#25292A]" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <Image
          src={
            open
              ? "/Dashboard/arrow-up-prep.svg"
              : "/Dashboard/arrow-down-prep.svg"
          }
          alt="arrow"
          width={24}
          height={24}
          className="ml-2"
        />
      </button>

      {open && (
        <div className="absolute mt-2 w-full bg-white border border-[#E9EDEE] rounded-lg shadow-md max-h-60 overflow-y-auto">
          {/* Default empty filter option */}
          <div
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className={`px-4 py-2 cursor-pointer hover:bg-[#F2F5F6] ${
              value === "" ? "bg-[#F2F5F6]" : ""
            }`}
          >
            {placeholder}
          </div>

          {/* Mapped options */}
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-[#F2F5F6] border border-[#E9EDEE]  ${
                value === option ? "bg-[#F2F5F6]" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
