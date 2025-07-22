
import Image from "next/image";
import {useRouter } from "next/navigation";
import NoPeptideFound from "./NoPeptideFound";
import Pagination from "./Pagination";
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

export default function TableComponent({
  peptidesData,
  isCompareMode,
  selectedPeptides,
  setSelectedPeptides,
  currentPage,
  totalItems,
  rowsPerPage,
  setRowsPerPage,
  setCurrentPage,
  apiDataLoading,
  totalPages
}: {
  peptidesData: Peptide[] | null;
  apiDataLoading: boolean;
  isCompareMode: boolean;
  selectedPeptides: string[];
  setSelectedPeptides: React.Dispatch<React.SetStateAction<string[]>>;
  currentPage: number;
  totalItems: number;
  rowsPerPage: number;
  totalPages:number;
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
              <th className="py-4  tracking-wider whitespace-nowrap ">
                Experience Level
              </th>
              <th className="py-4   tracking-wider whitespace-nowrap">
                Side Effect Profile
              </th>
              <th className="py-4  tracking-wider">Status</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[#25292A] text-center">
            {peptidesData?.map((peptide, index) => (
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
                    <div className="relative  flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={selectedPeptides.includes(peptide.id)}
                        onChange={() => handleCheckboxToggle(peptide.id)}
                        className="w-6 h-6 rounded-[6px] border-2 border-[#9EA9AA] cursor-pointer
      appearance-none checked:bg-[#224674] checked:border-[#224674]"
                      />
                      {selectedPeptides.includes(peptide.id) && (
                        <svg
                          className="w-5 h-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
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
                  {peptide.title}
                </td>
                <td className="pr-8 text-left py-4 font-medium whitespace-nowrap">
                  {peptide.nuda_name}
                </td>
                <td className="text-left py-4 font-medium min-w-[200px] max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {peptide.primary_applications}
                </td>
                <td className="py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium">
                    {peptide.protocol_duration}
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium">
                    {peptide.experience_level}
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium">
                    {peptide.side_effect_profile}
                  </span>
                </td>
                <td className="text-center py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 gap-1 rounded-full font-medium ${
                      peptide.fda_status.includes("Not FDA")
                        ? "bg-[#FCF3DB] text-[#A18233]"
                        : "bg-[#DBFCDF] text-[#1C8F5D]"
                    }`}
                  >
                    <Image
                      src={
                        peptide.fda_status.includes("Not FDA")
                          ? "/Dashboard/not-fda.svg"
                          : "/Dashboard/fda.svg"
                      }
                      alt="fda-status"
                      width={16}
                      height={16}
                    />
                    {peptide.fda_status}
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

            <tr>
              <td></td>
              <td></td>
              <td></td>
              {apiDataLoading ? (
                <td> loading... </td>
              ) : peptidesData != null && peptidesData?.length === 0 ? (
                <NoPeptideFound />
              ) : null}
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination component */}
      {peptidesData && peptidesData.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
