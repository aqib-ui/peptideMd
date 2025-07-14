// import Image from "next/image";
// import { IoWarningOutline } from "react-icons/io5";
// import { PiWarning } from "react-icons/pi";

// import { BsCheckCircleFill } from "react-icons/bs";

// export default function RecommendedPeptides() {
//   return (
//     <div className="bg-[#F2F5F6]   p-4 rounded-xl ">
//       <h2 className="txt-28 font-medium ">Recommended Peptides</h2>

//       <div className="mt-6 w-full">
//         {/* div 1 */}
//         <div className="flex bg-white border-1 border-t-0 border-r-0 border-l-0 border-b-[#D8DFE0]
//         w-full justify-between items-center px-4 py-1">
//           {/* left */}
//           <div className="flex gap-3">
//             <p className="text-[#8D9A9B]  font-medium txt-14 flex items-center justify-center">
//               1
//             </p>
//             <div className="flex flex-col  justify-between">
//               <h3 className="txt-16 font-semibold">AOD-9604</h3>
//               <p className="text-[#51595A] font-medium txt-16">Fat Burning</p>
//             </div>
//           </div>
//           {/* right */}
//           <div className="flex items-center justify-center w-[72px] h-[24px]  gap-1 rounded-full bg-[#FCF3DB] backdrop-blur-[16px]">
//             <IoWarningOutline className="w-3 h-3 text-[#A18233]" />
//             <span className="text-[#A18233] font-[500] text-[12px] leading-[100%] tracking-[0.5px]">
//               Not FDA
//             </span>
//           </div>
//         </div>

//         {/* div 2 */}
//         <div className="flex bg-[#F2F5F6] border-1 border-t-0 border-r-0 border-l-0 border-b-[#D8DFE0] w-full justify-between items-center px-4 py-1">
//           {/* left */}
//           <div className="flex gap-3">
//             <p className="text-[#8D9A9B]  font-medium txt-14 flex items-center justify-center">
//               2
//             </p>
//             <div className="flex flex-col  justify-between">
//               <h3 className="txt-16 font-semibold">Arginine Vasopressin</h3>
//               <p className="text-[#51595A] font-medium txt-16">Fluid Balance</p>
//             </div>
//           </div>
//           {/* right */}
//           <div className="flex items-center justify-center w-[72px] h-[24px]  gap-1 rounded-full bg-[#FCF3DB] backdrop-blur-[16px]">
//             <IoWarningOutline className="w-3 h-3 text-[#A18233]" />
//             <span className="text-[#A18233] font-[500] text-[12px] leading-[100%] tracking-[0.5px]">
//               Not FDA
//             </span>
//           </div>
//         </div>

//         {/* div 3 */}
//         <div className="flex bg-white border-1 border-t-0 border-r-0 border-l-0 border-b-[#D8DFE0] w-full justify-between items-center px-4 py-1">
//           {/* left */}
//           <div className="flex gap-3">
//             <p className="text-[#8D9A9B]  font-medium txt-14 flex items-center justify-center">
//               3
//             </p>
//             <div className="flex flex-col  justify-between">
//               <h3 className="txt-16 font-semibold">BPC-157</h3>
//               <p className="text-[#51595A] font-medium txt-16">Fat Loss / Healing</p>
//             </div>
//           </div>
//           {/* right */}
//           <div className="flex items-center justify-center w-[72px] h-[24px]  gap-1 rounded-full bg-[#FCF3DB] backdrop-blur-[16px]">
//             <IoWarningOutline className="w-3 h-3 text-[#A18233]" />
//             <span className="text-[#A18233] font-[500] text-[12px] leading-[100%] tracking-[0.5px]">
//               Not FDA
//             </span>
//           </div>
//         </div>

//         {/* div 4 */}
//         <div className="flex bg-[#F2F5F6] border-1 border-t-0 border-r-0 border-l-0 border-b-[#D8DFE0] w-full justify-between items-center px-4 py-1">
//           {/* left */}
//           <div className="flex gap-3">
//             <p className="text-[#8D9A9B]  font-medium txt-14 flex items-center justify-center">
//               4
//             </p>
//             <div className="flex flex-col  justify-between">
//               <h3 className="txt-16 font-semibold">Bremelanotide (PT-141)</h3>
//               <p className="text-[#51595A] font-medium txt-16">Sexual Arousal</p>
//             </div>
//           </div>
//           {/* right */}
//           {/* <div className="flex items-center justify-center gap-1 bg-[#FCF3DB] text-[#A18233]  py-1 rounded-2xl txt-16">
//             <IoWarningOutline />
//             <p>Not FDA</p>
//           </div> */}
//           <div className="flex items-center justify-center w-[72px] h-[24px]  gap-1 rounded-full bg-[#FCF3DB] backdrop-blur-[16px]">
//             <IoWarningOutline className="w-3 h-3 text-[#A18233]" />
//             <span className="text-[#A18233] font-[500] text-[12px] leading-[100%] tracking-[0.5px]">
//               Not FDA
//             </span>
//           </div>
//         </div>

//         {/* div 5 */}
//         <div className="flex bg-white border-1 border-t-0 border-r-0 border-l-0 border-b-[#D8DFE0] w-full justify-between items-center px-4 py-1">
//           {/* left */}
//           <div className="flex gap-3">
//             <p className="text-[#8D9A9B]  font-medium txt-14 flex items-center justify-center">
//               5
//             </p>
//             <div className="flex flex-col  justify-between">
//               <h3 className="txt-16 font-semibold">Cetrorelix</h3>
//               <p className="text-[#51595A] font-medium txt-16">Hormonal Regulation</p>
//             </div>
//           </div>
//           {/* right */}
//           {/* FDA */}
//           <div className="flex items-center justify-center gap-1 bg-[#DBFCDF] w-[72px] h-[24px] rounded-full  backdrop-blur-[16px]">
//             <BsCheckCircleFill className="w-3 h-3 text-[#1C8F5D] " />
//             <span className="text-[#1C8F5D] font-[500] text-[12px] leading-[100%] tracking-[0.5px]">
//               FDA
//             </span>
//           </div>
//         </div>

//         <div className="w-full flex justify-center items-center">
//           <button className=" my-6 text-[#224674] font-medium txt-16 w-[90.477%] text-center bg-[#C8E4FC] rounded-[48px] p-3">
//           Explore more peptides
//         </button>
//         </div>

//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { IoWarningOutline } from "react-icons/io5";
import { BsCheckCircleFill } from "react-icons/bs";
import Link from "next/link";

const peptides = [
  {
    id: 1,
    name: "AOD-9604",
    benefit: "Fat Burning",
    isFDAApproved: false,
  },
  {
    id: 2,
    name: "Arginine Vasopressin",
    benefit: "Fluid Balance",
    isFDAApproved: false,
  },
  {
    id: 3,
    name: "BPC-157",
    benefit: "Fat Loss / Healing",
    isFDAApproved: false,
  },
  {
    id: 4,
    name: "Bremelanotide (PT-141)",
    benefit: "Sexual Arousal",
    isFDAApproved: true,
  },
  {
    id: 5,
    name: "Cetrorelix",
    benefit: "Hormonal Regulation",
    isFDAApproved: true,
  },
];

export default function RecommendedPeptides() {
  return (
    <div className="bg-[#F2F5F6] p-4  rounded-xl">
      <h2 className="txt-28 font-medium">Recommended Peptides</h2>

      <div className="mt-6 w-full">
        {peptides.map((peptide, index) => (
          <div
            key={peptide.id}
            className={`flex ${
              index % 2 === 0 ? "bg-white" : "bg-[#F2F5F6]"
            } border-1 border-t-0 border-r-0 border-l-0 border-b-[#D8DFE0] w-full justify-between items-center px-4 py-1`}
          >
            {/* Left */}
            <div className="flex gap-3">
              <p className="text-[#8D9A9B] font-medium txt-14 flex items-center justify-center">
                {peptide.id}
              </p>
              <div className="flex flex-col justify-between">
                <h3 className="txt-16 font-semibold">{peptide.name}</h3>
                <p className="text-[#51595A] font-medium txt-16">
                  {peptide.benefit}
                </p>
              </div>
            </div>

            {/* Right */}
            {peptide.isFDAApproved ? (
              <div className="flex items-center justify-center gap-1 bg-[#DBFCDF] w-[72px] h-[24px] rounded-full backdrop-blur-[16px]">
                <BsCheckCircleFill className="w-3 h-3 text-[#1C8F5D]" />
                <span className="text-[#1C8F5D] font-[500] text-[12px] leading-[100%] tracking-[0.5px]">
                  FDA
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center w-[72px] h-[24px] gap-1 rounded-full bg-[#FCF3DB] backdrop-blur-[16px]">
                <IoWarningOutline className="w-3 h-3 text-[#A18233]" />
                <span className="text-[#A18233] font-[500] text-[12px] leading-[100%] tracking-[0.5px]">
                  Not FDA
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Button */}
        <div className="w-full flex justify-center items-center">
          <Link
            href="/Dashboard/peptides?viewAll=true"
            className="my-6 text-[#224674] font-medium txt-16 w-[90.477%] text-center bg-[#C8E4FC] rounded-[48px] p-3"
          >
            Explore more peptides
          </Link>
        </div>
      </div>
    </div>
  );
}
