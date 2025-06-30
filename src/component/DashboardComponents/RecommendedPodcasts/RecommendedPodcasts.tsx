// import Image from "next/image";
// import { RiPlayMiniLine } from "react-icons/ri";
// import { CiBookmarkPlus } from "react-icons/ci";

// export default function RecommendedPodcasts() {
//   return ( 
//     <div className="bg-white p-4 w-full rounded-xl">
//       <div className="flex justify-between items-center mb-">
//         <h2 className="txt-28 font-medium">Recommended Podcast</h2>
//         <a
//           href="/articles"
//           className="text-[#224674] txt-16 underline font-medium hover:text-[#1b3a5c]"
//         >
//           View All
//         </a>
//       </div>{" "}
//       <div className="flex flex-wrap xl:flex-nowrap w-full gap-3">
//         {/* div 1 */}
//         <div className="bg-[#F2F5F6] w-full h-[124px] rounded-lg flex items-center px-4 gap-3">
//           {/* left */}
//           <div className="relative w-[100px] h-[100px] rounded-[12px] overflow-hidden flex-shrink-0">
//             <video
//               className="w-full h-full object-cover rounded-[12px]"
//               poster="/Dashboard/rec-podcast/yellowDna.jpg"
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
//           <div className="flex flex-col gap-2 w-full ">
//             <h3 className="txt-18 font-semibold ">
//               Peptides 101: Breaking Down the Basics
//             </h3>

//             <div className="flex items-center justify-between">
//               <p className="text-[#626D6F] font-medium txt-14">1/May/2025</p>
//               <button className="w-10 h-10 flex items-center justify-center">
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

//         <div className="bg-[#F2F5F6] w-full h-[124px] rounded-lg flex items-center px-4 gap-3">
//           {/* left */}
//           <div className="relative w-[100px] h-[100px] rounded-[12px] overflow-hidden flex-shrink-0">
//             <video
//               className="w-full h-full object-cover rounded-[12px]"
//               poster="/Dashboard/rec-podcast/excercise.jpg"
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
//           <div className="flex flex-col gap-2 w-full">
//             <h3 className="txt-18 font-semibold ">
//               Fuel Your Fitness: Peptides for Muscle Growth
//             </h3>

//             <div className="flex items-center justify-between">
//               <p className="text-[#626D6F] font-medium txt-14">1/May/2025</p>
//               <button className="w-10 h-10 flex items-center justify-center">
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

//         <div className="bg-[#F2F5F6] w-full h-[124px] rounded-lg flex items-center px-4 gap-3">
//           {/* left */}
//           <div className="relative w-[100px] h-[100px] rounded-[12px] overflow-hidden flex-shrink-0">
//             <video
//               className="w-full h-full object-cover rounded-[12px]"
//               poster="/Dashboard/rec-podcast/redHuman.png"
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
//           <div className="flex flex-col gap-2 w-full">
//             <h3 className="txt-18 font-semibold ">
//               Fat Burners or Fads? Peptides & Metabolism
//             </h3>

//             <div className="flex items-center justify-between">
//               <p className="text-[#626D6F] font-medium txt-14">30/April/2025</p>
//               <button className="w-10 h-10 flex items-center justify-center">
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







import Image from "next/image";
import Link from "next/link";
import { RiPlayMiniLine } from "react-icons/ri";

const podcasts = [
  {
    title: "Peptides 101: Breaking Down the Basics",
    date: "1/May/2025",
    poster: "/Dashboard/rec-podcast/yellowDna.jpg",
  },
  {
    title: "Fuel Your Fitness: Peptides for Muscle Growth",
    date: "1/May/2025",
    poster: "/Dashboard/rec-podcast/excercise.jpg",
  },
  {
    title: "Fat Burners or Fads? Peptides & Metabolism",
    date: "30/April/2025",
    poster: "/Dashboard/rec-podcast/redHuman.png",
  },
];

export default function RecommendedPodcasts() {
  return (
    <div className="bg-white  py-4 max-lg:p-0 w-full rounded-xl">
      <div className="flex justify-between items-center mb-1">
        <h2 className="txt-28 font-medium">Recommended Podcast</h2>
       <span className="cursor-pointer text-[#224674] text-base underline font-semibold hover:text-[#1b3a5c]">
          <Link href="/Dashboard/podcast?viewAll=true">View All</Link> 
        </span>
      </div>

      <div className="flex flex-wrap xl:flex-nowrap w-full gap-3">
        {podcasts.map((podcast, index) => (
          <div
            key={index}
            className="bg-[#F2F5F6] w-full rounded-lg flex  p-3 gap-3"
          >
            {/* left */}
            <div className="relative w-[100px] h-[100px] rounded-[12px] overflow-hidden flex-shrink-0">
              <video
                className="w-full h-full object-cover rounded-[12px]"
                poster={podcast.poster}
              >
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center text-white rounded-[12px]">
                <button
                  className="relative z-10 w-8 h-8 rounded-full bg-[#C8E4FC] text-[#224674] 
                    flex items-center justify-center backdrop-blur-[24px]"
                >
                  <RiPlayMiniLine className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col justify-between gap-2  w-full">
              <h3 className="txt-18 font-semibold">{podcast.title}</h3>
              <div className="flex items-center justify-between  ">
                <p className="text-[#626D6F] font-medium txt-14">
                  {podcast.date}
                </p>
                <button className="w-10 h-10 flex items-end justify-end">
                  <Image
                    src="/Dashboard/archive-add.png"
                    alt="Add to archive"
                    width={24}
                    height={24}
                    className="w-6 h-6"
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
