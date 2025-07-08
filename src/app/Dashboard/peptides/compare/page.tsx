"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import peptidesDataRaw from "@/data/peptidesData";
import MainPeptideContentCard from "../../components/MainPeptideContentCard";

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

export default function ComparisonPeptide() {
  const searchParams = useSearchParams();
  const id1 = searchParams.get("id1");
  const id2 = searchParams.get("id2");

  const peptide1 = peptidesDataRaw.find((item) => item.id === id1);
  const peptide2 = peptidesDataRaw.find((item) => item.id === id2);

  if (!peptide1 || !peptide2) {
    return (
      <div className="text-red-600 text-4xl font-bold">
        Invalid peptide IDs. Please go back and try again.
      </div>
    );
  }

  const obj: Peptide[] = [peptide1, peptide2];

  const router = useRouter();

  // Active default tab
  const [activePeptideId, setActivePeptideId] = useState(obj[0].id);

  // find Active object based on activePeptideId
  const activePeptideObj = obj.find((item) => item.id === activePeptideId);

  return (
    <div className="max-w-[1128px] px-4 xl:px-0 mx-auto mt-12">
      {/* Back Button */}
      <div className="mb-10 flex justify-between">
        <div onClick={() => router.back()} className="cursor-pointer">
          <Image
            width={40}
            height={40}
            src="/Dashboard/videos/left-arrow.svg"
            alt="Back"
            className="w-[40px] h-[40px]"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 rounded-md  w-[334px] bg-[#E9EDEE] p-1">
        {obj.map((peptide) => (
          <button
            key={peptide.id}
            onClick={() => setActivePeptideId(peptide.id)}
            className={` py-2 rounded-sm font-medium text-sm grow  ${
              activePeptideId === peptide.id
                ? " bg-white text-[#224674] shadow-[3px_3px_8px_0px_rgba(0,0,0,0.06)] "
                : "bg-[#E9EDEE] text-[#51595A]"
            }`}
          >
            {peptide.peptide}
          </button>
        ))}
      </div>

      {/* Content */}
      {activePeptideObj && <MainPeptideContentCard obj={activePeptideObj} />}
    </div>
  );
}
