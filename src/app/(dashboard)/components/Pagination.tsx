"use client";
import Image from "next/image";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const rowsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Pagination({
  currentPage,
  totalItems,
  rowsPerPage,
  setRowsPerPage,
  setCurrentPage,
}: // totalPages,
PaginationProps) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const from = (currentPage - 1) * rowsPerPage + 1;
  const to = Math.min(currentPage * rowsPerPage, totalItems);

  // console.log(totalItems, rowsPerPage, totalPages, "a9su8dusi");
  return (
    <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
      <div className="flex text-sm text-[#25292A] items-center justify-end">
        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <p className="mr-2">Rows per page:</p>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="outline-0 rounded px-1  py-1 cursor-pointer"
            >
              {rowsOptions.map((opt) => (
                <option key={opt} className="" value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            {from}-{to} of {totalItems}
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`p-1 rounded ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <Image
                src="/Dashboard/arrow-left.svg"
                alt="left-arrow"
                width={24}
                height={24}
              />

              {/* arrow-left-active */}
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => (totalPages == prev ? prev : prev + 1))
              }
              className={`p-1 rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <Image
                src="/Dashboard/arrow-right.svg"
                alt="right-arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
