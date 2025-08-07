import Image from "next/image";
import React from "react";

export default function NoSavedPeptideFound() {
  return (
    <div className=" flex flex-col justify-center items-center w-full">
      <div>
        <Image
          src="/Dashboard/noSavedPeptideFound.svg"
          alt="No Peptide Found"
          width={96}
          height={96}
          className="mx-auto mb-4  mt-14"
        />
      </div>
      <h2 className="text-2xl font-semibold text-[#25292A]  text-center">
        No saved peptides yet
      </h2>
      <p className="text-lg  text-[#51595A] mt-2 text-center mb-4 ">
        There are no saved peptide right now. Browse the discussion forum to
        save one.
      </p>
      {/* Explore Peptides button */}
      <button
        type="button"
        className="bg-[#224674] hover:bg-[#1a3559] text-white font-semibold py-2 px-4 rounded-full min-w-[318px]"
      >
        Explore Peptides
      </button>
    </div>
  );
}
