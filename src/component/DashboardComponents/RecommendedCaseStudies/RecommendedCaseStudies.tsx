// import Image from "next/image";
// import { RiPlayMiniLine } from "react-icons/ri";
// import { CiBookmarkPlus } from "react-icons/ci";

// export default function RecommendedCaseStudies() {
//   return (
//     <div className="bg-white p-4 rounded-xl">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="txt-28 font-medium">Recommended Case Studies</h2>
//         <a
//           href="/articles"
//           className="text-[#224674] txt-16 underline font-medium hover:text-[#1b3a5c]"
//         >
//           View All
//         </a>
//       </div>{" "}
//       <div className="flex w-full gap-3">
//         {/* div 1 */}
//         <div className="bg-[#F2F5F6] w-full h-[124px] rounded-lg flex items-center px-4 gap-3">
//           {/* left */}
//           <div className="relative w-[100px] h-[100px] rounded-[12px] overflow-hidden flex-shrink-0">
//             <video
//               className="w-full h-full object-cover rounded-[12px]"
//               poster="/Dashboard/rec-case/1.png"
//             >
//               <source src="/sample-video.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Overlay Content */}
//             <div className="absolute inset-0 flex items-center justify-center text-white rounded-[12px]">
//               <button
//                 className="relative z-10 w-8 h-8 rounded-full bg-[#C8E4FC] text-[#224674]
//         flex items-center justify-center backdrop-blur-[24px]"
//               >
//                 <RiPlayMiniLine className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//           {/* right */}
//           <div className="flex flex-col justify-between h-full py-2">
//             <h3 className="txt-18 font-semibold">
//               Quality Considerations in Solid Phase Peptide Synthesis: A Case
//               Study with Liraglutide
//             </h3>

//             <div className="flex items-center justify-between">
//               <p className="text-[#626D6F] font-medium txt-14">1/May/2025</p>
//               <button className="flex items-center justify-center">
//                 <Image
//                   src="/Dashboard/archive-add.png"
//                   alt="Add to archive"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* div 2 */}
//         <div className="bg-[#F2F5F6] w-full h-[124px] rounded-lg flex items-center px-4 gap-3">
//           {/* left */}
//           <div className="relative w-[100px] h-[100px] rounded-[12px] overflow-hidden flex-shrink-0">
//             <video
//               className="w-full h-full object-cover rounded-[12px]"
//               poster="/Dashboard/rec-case/2.jpg"
//             >
//               <source src="/sample-video.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Overlay Content */}
//             <div className="absolute inset-0 flex items-center justify-center text-white rounded-[12px]">
//               <button
//                 className="relative z-10 w-8 h-8 rounded-full bg-[#C8E4FC] text-[#224674]
//         flex items-center justify-center backdrop-blur-[24px]"
//               >
//                 <RiPlayMiniLine className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//           {/* right */}
//           <div className="flex flex-col justify-between h-full py-2">
//             <h3 className="txt-18 font-semibold">
//               Reversing Tendon Injury with BPC-157: A Healing Journey
//             </h3>

//             <div className="flex items-center justify-between">
//               <p className="text-[#626D6F] font-medium txt-14">1/May/2025</p>
//               <button className="flex items-center justify-center">
//                 <Image
//                   src="/Dashboard/archive-add.png"
//                   alt="Add to archive"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* div 3 */}
//         <div className="bg-[#F2F5F6] w-full h-[124px] rounded-lg flex items-center px-4 gap-3">
//           {/* left */}
//           <div className="relative w-[100px] h-[100px] rounded-[12px] overflow-hidden flex-shrink-0">
//             <video
//               className="w-full h-full object-cover rounded-[12px]"
//               poster="/Dashboard/rec-case/3.jpg"
//             >
//               <source src="/sample-video.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Overlay Content */}
//             <div className="absolute inset-0 flex items-center justify-center text-white rounded-[12px]">
//               <button
//                 className="relative z-10 w-8 h-8 rounded-full bg-[#C8E4FC] text-[#224674]
//         flex items-center justify-center backdrop-blur-[24px]"
//               >
//                 <RiPlayMiniLine className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//           {/* right */}
//           <div className="flex flex-col justify-between h-full py-2">
//             <h3 className="txt-18 font-semibold">
//               Focus, Mood & Memory: Cognitive Enhancement with Semax
//             </h3>

//             <div className="flex items-center justify-between">
//               <p className="text-[#626D6F] font-medium txt-14">1/May/2025</p>
//               <button className="flex items-center justify-center">
//                 <Image
//                   src="/Dashboard/archive-add.png"
//                   alt="Add to archive"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 17 june 25 mapping ////////////
import Image from "next/image";
import Link from "next/link";
import { RiPlayMiniLine } from "react-icons/ri";

const caseStudies = [
  {
    title:
      "Quality Considerations in Solid Phase Peptide Synthesis: A Case Study with Liraglutide",
    poster: "/Dashboard/rec-case/1.png",
    date: "1/May/2025",
  },
  {
    title: "Reversing Tendon Injury with BPC-157: A Healing Journey",
    poster: "/Dashboard/rec-case/2.jpg",
    date: "1/May/2025",
  },
  {
    title: "Focus, Mood & Memory: Cognitive Enhancement with Semax",
    poster: "/Dashboard/rec-case/3.jpg",
    date: "1/May/2025",
  },
];

export default function RecommendedCaseStudies() {
  return (
    <div className="bg-white py-4 max-lg:p-0 w-full rounded-xl">
      <div className="flex justify-between items-center mb-">
        <h2 className="txt-28 font-medium">Recommended Case Studies</h2>
        <span className="cursor-pointer text-[#224674] text-base underline font-semibold hover:text-[#1b3a5c]">
          <Link href="/Dashboard/case-studies?viewAll=true">View All</Link>
        </span>
      </div>

      {/* <div className="flex w-full gap-3"> */}
      <div className=" flex flex-wrap xl:flex-nowrap w-full gap-3 ">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-[#F2F5F6] w-full  rounded-lg flex  p-3 gap-3"
          >
            {/* left */}
            <div className="relative w-[100px]  align-self-stretch max-h-[100px]   rounded-[12px] overflow-hidden flex-shrink-0">
              <video
                className="w-full h-full object-cover rounded-[12px]"
                poster={study.poster}
              >
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center text-white rounded-[12px]">
                {/* <button className="relative z-10 w-8 h-8 rounded-full bg-[#C8E4FC] text-[#224674] flex items-center justify-center backdrop-blur-[24px]">
                  <RiPlayMiniLine className="w-4 h-4" />
                </button> */}
              </div>
            </div>

            {/* right */}
            {/* <div className="flex flex-col justify-between h-full pt-2"> */}
            <div className="flex flex-col  w-full   justify-between  max-2xl:gap-0">
              <h3 className="txt-18 leading-6 font-semibold ">{study.title}</h3>
              <div className="flex items-center justify-between  ">
                <p className="text-[#626D6F] font-medium txt-14">
                  {study.date}
                </p>
                <button className=" w-full h-full  flex items-center justify-end">
                  <Image
                    src="/Dashboard/archive-add.png"
                    alt="Add to archive"
                    width={24}
                    height={24}
                    className="w-6 h-6 "
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
