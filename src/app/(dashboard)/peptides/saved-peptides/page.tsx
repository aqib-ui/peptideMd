"use client";
import React, { useState, Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import TableComponent from "../../components/TableComponent";
import NoSavedPeptideFound from "../../components/NoSavedPeptideFound";

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

function PeptidesContent() {
  const router = useRouter();
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [selectedPeptides, setSelectedPeptides] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [apiData, setApiData] = useState<Peptide[] | null>(null);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  // 🔁 Fetch saved peptides
  useEffect(() => {
    const fetchPeptides = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: currentPage.toString(),
          limit: rowsPerPage.toString(),
        });
        const token = localStorage.getItem("peptide_user_token");
        const res = await fetch(
          `https://peptide-backend.mazedigital.us/peptides/saved?${params}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        setApiData(data?.data?.data.flatMap((item: any) => item.peptide || []));
        setRowsPerPage(data?.data?.limit || 10);
        setTotalItems(data?.data?.total || 0); // this must match API structure
        console.log("🔁 apiData ===>", apiData);
      } catch (error) {
        console.error("Error fetching peptides:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeptides();
  }, [currentPage, rowsPerPage]);

  return (
    <div className="p-4 md:py-10 bg-white lg:px-8 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div onClick={() => router.back()} className="cursor-pointer">
            <img src="/Dashboard/videos/left-arrow.svg" alt="left-arrows" />
          </div>
          <h1 className=" text-xl sm:text-3xl font-semibold">Saved Peptides</h1>
        </div>
      </div>

      {/* Table with API data */}

      {apiData != null && apiData.length > 0 ? (
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
      ) : (
        <div className="w-full">
          {loading ? (
            <div className="text-center py-20">Loading Saved Peptides...</div>
          ) : apiData?.length === 0 ? (
            <NoSavedPeptideFound />
          ) : null}
        </div>
      )}
    </div>
  );
}
export default PeptidesContent;
