"use client";
import React, { useState, Suspense, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import MainPeptideContentCard from "../../components/MainPeptideContentCard";
import { getPeptideById, PeptideData } from "@/services/peptideApi";

function ComparisonPeptideContent() {
  const searchParams = useSearchParams();
  const id1 = searchParams.get("id1");
  const id2 = searchParams.get("id2");
  const router = useRouter();

  const [peptide1, setPeptide1] = useState<PeptideData | null>(null);
  const [peptide2, setPeptide2] = useState<PeptideData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activePeptideId, setActivePeptideId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        // Parallel fetch
        const [p1, p2] = await Promise.all([
          id1 ? getPeptideById(id1) : Promise.resolve(null),
          id2 ? getPeptideById(id2) : Promise.resolve(null),
        ]);
        if (!p1 || !p2) {
          setError("Invalid peptide IDs. Please go back and try again.");
        } else {
          setPeptide1(p1);
          setPeptide2(p2);
          setActivePeptideId(p1.id);
        }
      } catch (e) {
        setError("Error fetching peptides.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id1, id2]);

  if (loading) {
    return <div className="text-center p-8">Loading comparison...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-4xl font-bold">{error}</div>;
  }

  if (!peptide1 || !peptide2) {
    return null;
  }

  const obj: PeptideData[] = [peptide1, peptide2];
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
      <div className="flex space-x-4 mb-6 rounded-md w-[334px] bg-[#E9EDEE] p-1">
        {obj.map((peptide) => (
          <button
            key={peptide.id}
            onClick={() => setActivePeptideId(peptide.id)}
            className={`py-2 rounded-sm font-medium text-sm grow cursor-pointer ${
              activePeptideId === peptide.id
                ? "bg-white text-[#224674] shadow-[3px_3px_8px_0px_rgba(0,0,0,0.06)]"
                : "bg-[#E9EDEE] text-[#51595A]"
            }`}
          >
            {peptide.title}
          </button>
        ))}
      </div>

      {/* Content */}
      {activePeptideObj && <MainPeptideContentCard obj={activePeptideObj} />}
    </div>
  );
}

export default function ComparisonPeptide() {
  return (
    <Suspense fallback={<div>Loading comparison...</div>}>
      <ComparisonPeptideContent />
    </Suspense>
  );
}
