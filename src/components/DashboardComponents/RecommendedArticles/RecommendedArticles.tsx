// import Image from "next/image";

// export default function RecommendedArticles() {
//   return (
//     <div className="bg-white py-6 rounded-xl">
//       <div className="flex justify-between items-center mb-1">
//         <h2 className="txt-28 font-medium">Recommended Articles</h2>
//         <a
//           href="/articles"
//           className="text-[#224674] txt-16 underline font-medium hover:text-[#1b3a5c]"
//         >
//           View All
//         </a>
//       </div>{" "}
//       <div className="flex flex-wrap w-full gap-3">
//         {/* div 1 */}
//         <div className="bg-[#F2F5F6] w-full rounded-lg flex flex-col gap-3 p-3">
//           <div className="flex justify-between gap-3">
//             {/* heading */}
//             <h3 className="txt-18 font-semibold w-full min-h-[72px]">
//               Peptides for Muscle Growth: The Science Behind Faster Recovery and
//               Strength Gains
//             </h3>

//             {/* image */}
//             {/* image */}
//             <div className="relative w-[106px] h-[72px] rounded-[12px] overflow-hidden flex-shrink-0">
//               <Image
//                 src="/Dashboard/rec-art/muscle.jpg"
//                 alt="Peptide Thumbnail"
//                 fill
//                 className="object-cover rounded-[12px]"
//               />
//             </div>
//           </div>

//           {/* bottom row: date + icon */}
//           <div className="flex items-center justify-between">
//             <p className="text-[#626D6F] font-medium txt-14">
//               Published on 2/May/2025
//             </p>
//             <button className="w-10 h-10 flex items-center justify-center">
//               <Image
//                 src="/Dashboard/archive-add.png"
//                 alt="Add to archive"
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//             </button>
//           </div>
//         </div>

//         {/* div 2 */}
//         <div className="bg-[#F2F5F6] w-full rounded-lg flex flex-col gap-3 p-3">
//           <div className="flex justify-between gap-3">
//             {/* heading */}
//             <h3 className="txt-18 font-semibold">
//               Can Peptides Help You Burn Fat? A Deep Dive Into
//               Metabolism-Boosting Compounds”
//             </h3>

//             {/* image */}
//             {/* image */}
//             <div className="relative w-[106px] h-[72px] rounded-[12px] overflow-hidden flex-shrink-0">
//               <Image
//                 src="/Dashboard/rec-art/fatman.jpg"
//                 alt="Peptide Thumbnail"
//                 fill
//                 className="object-cover rounded-[12px]"
//               />
//             </div>
//           </div>

//           {/* bottom row: date + icon */}
//           <div className="flex items-center justify-between">
//             <p className="text-[#626D6F] font-medium txt-14">
//               Published on 1/May/2025
//             </p>
//             <button className="w-10 h-10 flex items-center justify-center">
//               <Image
//                 src="/Dashboard/archive-add.png"
//                 alt="Add to archive"
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//             </button>
//           </div>
//         </div>

//         {/* div 3 */}
//         <div className="bg-[#F2F5F6] w-full rounded-lg flex flex-col gap-3 p-3">
//           <div className="flex justify-between gap-3">
//             {/* heading */}
//             <h3 className="txt-18 font-semibold">
//               What Peptides Can Actually Do for Your Body
//             </h3>

//             {/* image */}
//             {/* image */}
//             <div className="relative w-[106px] h-[72px] rounded-[12px] overflow-hidden flex-shrink-0">
//               <Image
//                 src="/Dashboard/rec-art/flowers.jpg"
//                 alt="Peptide Thumbnail"
//                 fill
//                 className="object-cover rounded-[12px]"
//               />
//             </div>
//           </div>

//           {/* bottom row: date + icon */}
//           <div className="flex items-center justify-between">
//             <p className="text-[#626D6F] font-medium txt-14">
//               Published on 1/May/2025
//             </p>
//             <button className="w-10 h-10 flex items-center justify-center">
//               <Image
//                 src="/Dashboard/archive-add.png"
//                 alt="Add to archive"
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//             </button>
//           </div>
//         </div>

//         {/* div 4 */}
//         <div className="bg-[#F2F5F6] w-full rounded-lg flex flex-col gap-3 p-3">
//           <div className="flex justify-between gap-3">
//             {/* heading */}
//             <h3 className="txt-18 font-semibold">
//               Optimizing Body Composition: How Peptides Support Lean Muscle and
//               Fat Reduction
//             </h3>

//             {/* image */}
//             {/* image */}
//             <div className="relative w-[106px] h-[72px] rounded-[12px] overflow-hidden flex-shrink-0">
//               <Image
//                 src="/Dashboard/rec-art/beltman.jpg"
//                 alt="Peptide Thumbnail"
//                 fill
//                 className="object-cover rounded-[12px]"
//               />
//             </div>
//           </div>

//           {/* bottom row: date + icon */}
//           <div className="flex items-center justify-between">
//             <p className="text-[#626D6F] font-medium txt-14">
//               Published on 1/May/2025
//             </p>
//             <button className="w-10 h-10 flex items-center justify-center">
//               <Image
//                 src="/Dashboard/archive-add.png"
//                 alt="Add to archive"
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import Link  from "next/link";
import Image from "next/image";

const articles = [
  {
    title:
      "Peptides for Muscle Growth: The Science Behind Faster Recovery and Strength Gains",
    image: "/Dashboard/rec-art/muscle.jpg",
    date: "Published on 2/May/2025",
  },
  {
    title:
      "Can Peptides Help You Burn Fat? A Deep Dive Into Metabolism-Boosting Compounds”",
    image: "/Dashboard/rec-art/fatman.jpg",
    date: "Published on 1/May/2025",
  },
  {
    title: "What Peptides Can Actually Do for Your Body",
    image: "/Dashboard/rec-art/flowers.jpg",
    date: "Published on 1/May/2025",
  },
  {
    title:
      "Optimizing Body Composition: How Peptides Support Lean Muscle and Fat Reduction",
    image: "/Dashboard/rec-art/beltman.jpg",
    date: "Published on 1/May/2025",
  },
];

export default function RecommendedArticles() {
  return (
    // <div className="bg-white pt-2 xl:pt-9 2xl:pt-13 [@media(min-width:1650px)]:pt-8  rounded-xl">
<div className="bg-white pt-2 xl:pt-8 2xl:pt-2 [@media(min-width:1600px)]:pt-8 rounded-xl">

      <div className="flex justify-between items-center mb-1">
        <h2 className="txt-28 font-medium">Recommended Articles</h2>
       <span className="cursor-pointer text-[#224674] text-base underline font-semibold hover:text-[#1b3a5c]">
          <Link href="/Dashboard/articles?viewAll=true">View All</Link> 
        </span>
      </div>

      <div className="flex flex-wrap w-full gap-3">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-[#F2F5F6] w-full rounded-lg flex flex-col gap-3 p-3"
          >
            <div className="flex justify-between gap-3">
              {/* heading */}
              <h3 className="txt-18 font-semibold w-full min-h-[72px]">
                {article.title}
              </h3>

              {/* image */}
              <div className="relative w-[106px] h-[72px] rounded-[12px] overflow-hidden flex-shrink-0">
                <Image
                  src={article.image}
                  alt="Peptide Thumbnail"
                  fill
                  className="object-cover rounded-[12px]"
                />
              </div>
            </div>

            {/* bottom row */}
            <div className="flex items-center justify-between">
              <p className="text-[#626D6F] font-medium txt-14">{article.date}</p>
              <button className="w-10 h-10 flex items-center justify-center">
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
        ))}
      </div>
    </div>
  );
}
