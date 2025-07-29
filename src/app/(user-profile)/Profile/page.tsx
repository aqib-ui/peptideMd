// "use client";
// import React, { useState } from "react";
// import Image from "next/image";


// const links: {
//   label: string;
//   href: string;
//   iconSrc: React.ComponentType<React.SVGProps<SVGSVGElement>>;
// }[] = [
//   { label: "Saved Peptides",      href: "/profileIcons/Saved Peptides",     iconSrc: "/profileIcons/saved-peptide.svg",},
// //   { label: "Billing",       href: "/profileIcons/billing",       Icon: BillingIcon },
// //   { label: "Security",      href: "/profileIcons/security",      Icon: SecurityIcon },
// //   { label: "API Keys",      href: "/profileIcons/api",           Icon: ApiKeyIcon },
//   // …etc
// ];



// export default function Profile() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-red-200 px-2">
//       <div className="flex flex-col items-start justify-center bg-white rounded-lg w-full max-w-[486px] h-auto shadow-lg">
//         {/* Back Button */}
//         <div className="cursor-pointer mb-3 bg-blue-200 w-full">
//           <Image
//             src="/profileIcons/profileBackBtn.svg"
//             height={24}
//             width={24}
//             className="h-10 w-10"
//             alt="left-arrows"
//           />
//         </div>

//         <div className="flex flex-col items-start p-2 bg-[#F2F5F6] w-full justify-center">
//           <div className="flex flex-col w-full bg-green-400 gap-3">
//             <div className="flex items-center gap-2">
//               <p className="flex items-center justify-center bg-[#C8E4FC] text-[#224674] txt-18 font-semibold rounded-full h-12 w-12">
//                 JC
//               </p>
//               <div className="flex flex-col items-start">
//                 <p className="txt-18 font-semibold ">Jane Cooper</p>
//                 <p className="text-[#626D6F] txt-16">View Profile</p>
//               </div>
//             </div>
//             <button className=" w-full max-w-[438px] p-3 bg-[#224674] text-white txt-16 rounded-full">
//               Upgrade to Peptide Pro
//             </button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {links.map(({ label, href, iconSrc }) => (
//           <a
//             key={href}
//             href={href}
//             className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition"
//           >
//             {/* You can style SVG via Tailwind classes */}
//  <Image
//               src={iconSrc}
//               alt={label + " icon"}
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//                         <span className="font-medium">{label}</span>
//           </a>
//         ))}
//       </div>


//         </div>
//       </div>
//     </div>
//   );
// }
