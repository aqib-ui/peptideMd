// // "use client";
// // import React, { useState } from "react";
// // import Image from "next/image";
// // import { useRouter } from "next/navigation";
// // // import ManageModalButton from "@/app/(user-profile)/component/ManageModalButton";
// // import ManageButton from "@/app/(user-profile)/component/ManageButton";
// // import { LuChevronRight } from "react-icons/lu";

// // const links: {
// //   label: string;
// //   href: string;
// //   iconSrc: string;
// // }[] = [
// //   {
// //     label: "Saved Peptides",
// //     href: "/profileIcons/saved-peptides",
// //     iconSrc: "/profileIcons/saved-peptide.svg",
// //   },
// //   {
// //     label: "Provide Locator",
// //     href: "/profileIcons/Provide-Locator",
// //     iconSrc: "/profileIcons/map.svg",
// //   },
// //   {
// //     label: "Saved Videos",
// //     href: "/profileIcons/Saved-Videos",
// //     iconSrc: "/profileIcons/saved-videos.svg",
// //   },
// //   {
// //     label: "Saved Podcast",
// //     href: "/profileIcons/Saved-Podcast",
// //     iconSrc: "/profileIcons/saved-podcast.svg",
// //   },
// //   {
// //     label: "Saved Articles",
// //     href: "/profileIcons/Saved-Articles",
// //     iconSrc: "/profileIcons/saved-articles.svg",
// //   },
// //   {
// //     label: "Saved Case Studies",
// //     href: "/profileIcons/Saved-CaseStudies",
// //     iconSrc: "/profileIcons/saved-caseStudies.svg",
// //   },
// //   {
// //     label: "Terms & Conditions",
// //     href: "/profileIcons/Terms-&-Conditions",
// //     iconSrc: "/profileIcons/terms-condition.svg",
// //   },
// //   {
// //     label: "Privacy Policy",
// //     href: "/profileIcons/privacy-policy",
// //     iconSrc: "/profileIcons/privacy.svg",
// //   },
// //   //   {
// //   //     label: "Logout",
// //   //     href: "/profileIcons/logout",
// //   //     iconSrc: "/profileIcons/logout.svg",
// //   //   },
// // ];

// // export default function Profile() {
// //   const router = useRouter();

// //   const firstGroup = links.slice(0, 2); // items 0 & 1
// //   const secondGroup = links.slice(2, 6); // items 2,3,4,5
// //   const thirdGroup = links.slice(6); // everything from item 6 onward

// //   function handleLogout() {
// //     // remove both items you’ve stored
// //     localStorage.removeItem("peptide_user");
// //     localStorage.removeItem("peptide_user_token");

// //     // optional: if you stored anything else, you can clear it all
// //     // localStorage.clear();

// //     // redirect back to login (or home) page
// //     router.replace("/Login");
// //   }

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen px-2 max-md:px-4">
// //       <div className="flex flex-col items-start my-4 justify-center bg-white gap-8 rounded-lg w-full max-w-[486px] h-auto">
// //         {/* Back Button */}
// //         <div className="cursor-pointer w-full justify-between items-center flex ">
// //           <Image
// //             src="/profileIcons/profileBackBtn.svg"
// //             height={24}
// //             width={24}
// //             className="h-10 w-10"
// //             alt="left-arrows"
// //           />
// //         </div>

// //         <div className="flex flex-col items-start  bg-[#F2F5F6] rounded-2xl w-full justify-center">
// //           {/* top section *changeable* */}
// //           <div className="flex flex-col w-full p-6   gap-3">
// //             <div className="flex items-center gap-2">
// //               <p className="flex items-center justify-center bg-[#C8E4FC] text-[#224674] txt-18 font-semibold rounded-full h-12 w-12">
// //                 JC
// //               </p>
// //               <div className="flex flex-col items-start">
// //                 <p className="txt-18 font-semibold ">Jane Cooper</p>
// //                 <p className="text-[#626D6F] txt-16">View Profile</p>
// //               </div>
// //             </div>
// //             <button className=" w-full max-w-[438px] p-3 bg-[#224674] text-white txt-16 rounded-full">
// //               Upgrade to Peptide Pro
// //             </button>

// //             {/* manage peptide popup card */}
// //             <ManageButton planLabel="Monthly" planSubtext="Your Plan" />
// //           </div>

// //           {/*  */}
// //           <div className="grid grid-cols-1 ">
// //             {firstGroup.map(({ label, href, iconSrc }) => (
// //               <a
// //                 key={href}
// //                 href={href}
// //                 className="flex items-center gap-3 px-6 py-2.5   transition"
// //               >
// //                 {/* You can style SVG via Tailwind classes */}
// //                 <Image
// //                   src={iconSrc}
// //                   alt={label + " icon"}
// //                   width={24}
// //                   height={24}
// //                   className="object-contain"
// //                 />
// //                 <span className="font-medium txt-18">{label}</span>
// //               </a>
// //             ))}
// //           </div>

// //           <div className="w-full bg-gray-200 h-1"></div>

// //           <div className="grid grid-cols-1 ">
// //             {secondGroup.map(({ label, href, iconSrc }) => (
// //               <a
// //                 key={href}
// //                 href={href}
// //                 className="flex items-center gap-3 px-6 py-2.5   transition"
// //               >
// //                 {/* You can style SVG via Tailwind classes */}
// //                 <Image
// //                   src={iconSrc}
// //                   alt={label + " icon"}
// //                   width={24}
// //                   height={24}
// //                   className="object-contain"
// //                 />
// //                 <span className="font-medium txt-18">{label}</span>
// //               </a>
// //             ))}
// //           </div>

// //           <div className="w-full bg-gray-200 h-1"></div>

// //           {/*  */}
// //           <div className="grid grid-cols-1 ">
// //             {thirdGroup.map(({ label, href, iconSrc }) => (
// //               <a
// //                 key={href}
// //                 href={href}
// //                 className="flex items-center gap-3 px-6 py-2.5   transition"
// //               >
// //                 {/* You can style SVG via Tailwind classes */}
// //                 <Image
// //                   src={iconSrc}
// //                   alt={label + " icon"}
// //                   width={24}
// //                   height={24}
// //                   className="object-contain"
// //                 />
// //                 <span className="font-medium txt-18">{label}</span>
// //               </a>
// //             ))}

// //             {/* Logout button */}
// //             <button
// //               onClick={handleLogout}
// //               className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition"
// //             >
// //               <Image
// //                 src="/profileIcons/logout.svg"
// //                 alt="Logout icon"
// //                 width={24}
// //                 height={24}
// //               />
// //               <span className="font-medium txt-18">Logout</span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import ManageButton from "@/app/(user-profile)/component/ManageButton";
// import { LuChevronRight } from "react-icons/lu";
// import DashboardPopup from "@/components/DashboardComponents/Dashboard-popup/page";

// const links: {
//   label: string;
//   href: string;
//   iconSrc: string;
// }[] = [
//   {
//     label: "Saved Peptides",
//     href: "/profileIcons/saved-peptides",
//     iconSrc: "/profileIcons/saved-peptide.svg",
//   },
//   {
//     label: "Provide Locator",
//     href: "/profileIcons/Provide-Locator",
//     iconSrc: "/profileIcons/map.svg",
//   },
//   {
//     label: "Saved Videos",
//     href: "/profileIcons/Saved-Videos",
//     iconSrc: "/profileIcons/saved-videos.svg",
//   },
//   {
//     label: "Saved Podcast",
//     href: "/profileIcons/Saved-Podcast",
//     iconSrc: "/profileIcons/saved-podcast.svg",
//   },
//   {
//     label: "Saved Articles",
//     href: "/profileIcons/Saved-Articles",
//     iconSrc: "/profileIcons/saved-articles.svg",
//   },
//   {
//     label: "Saved Case Studies",
//     href: "/profileIcons/Saved-CaseStudies",
//     iconSrc: "/profileIcons/saved-caseStudies.svg",
//   },
//   {
//     label: "Terms & Conditions",
//     href: "/profileIcons/Terms-&-Conditions",
//     iconSrc: "/profileIcons/terms-condition.svg",
//   },
//   {
//     label: "Privacy Policy",
//     href: "/profileIcons/privacy-policy",
//     iconSrc: "/profileIcons/privacy.svg",
//   },
// ];

// export default function Profile() {
//   const router = useRouter();
//   const [showPopup, setShowPopup] = useState(false);
// //   const [hasSubscribed, setHasSubscribed] = useState(false);
// //   const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly" | null>(null);

//   const [isLoading, setIsLoading] = useState(true);

//   const [hasSubscribed, setHasSubscribed] = useState(
//     () => localStorage.getItem("hasSubscribed") === "true"
//   );

//   const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly" | null>(() => {
//     const plan = localStorage.getItem("selectedPlan");
//     return plan === "annual" || plan === "monthly" ? plan : null;
//   });

//   const firstGroup = links.slice(0, 2);
//   const secondGroup = links.slice(2, 6);
//   const thirdGroup = links.slice(6);

//   // Check subscription status on mount
// //   useEffect(() => {
// //     const hasSub = localStorage.getItem("hasSubscribed") === "true";
// //     const plan = localStorage.getItem("selectedPlan") as "annual" | "monthly" | null;

// //     if (hasSub && (plan === "annual" || plan === "monthly")) {
// //       setHasSubscribed(true);
// //       setSelectedPlan(plan);
// //     }
// //   }, []);
// // useEffect(() => {
// //     const hasSub = localStorage.getItem("hasSubscribed") === "true";
// //     const plan = localStorage.getItem("selectedPlan") as "annual" | "monthly" | null;

// //     if (hasSub && plan) {
// //       setHasSubscribed(true);
// //       setSelectedPlan(plan);
// //     }
// //   }, []);
// // Update useEffect
// useEffect(() => {
//   const hasSub = localStorage.getItem("hasSubscribed") === "true";
//   const plan = localStorage.getItem("selectedPlan") as "annual" | "monthly" | null;

//   setHasSubscribed(hasSub);
//   setSelectedPlan(plan);
//   setIsLoading(false); // Mark loading as complete
// }, []);

//   const handleSubscribe = (plan: "annual" | "monthly") => {
//     localStorage.setItem("hasSubscribed", "true");
//     localStorage.setItem("selectedPlan", plan);
//     setHasSubscribed(true);
//     setSelectedPlan(plan);
//     setShowPopup(false);
//   };

//   const handlePlanChange = (newPlan: 'monthly' | 'annual') => {
//     localStorage.setItem("selectedPlan", newPlan);
//     setSelectedPlan(newPlan);
//   };

//   function handleLogout() {
//     localStorage.removeItem("peptide_user");
//     localStorage.removeItem("peptide_user_token");
//     localStorage.removeItem("hasSubscribed");
//     localStorage.removeItem("selectedPlan");
//     router.replace("/Login");
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-2 max-md:px-4">
//       {/* Subscription Popup Modal */}
//       {showPopup && (
//         <DashboardPopup
//           onClose={() => setShowPopup(false)}
//           onSubscribe={handleSubscribe}
//         />
//       )}

//       <div className="flex flex-col items-start my-4 justify-center bg-white gap-8 rounded-lg w-full max-w-[486px] h-auto">
//         {/* Back Button */}
//         <div className="cursor-pointer w-full justify-between items-center flex ">
//           <Image
//             src="/profileIcons/profileBackBtn.svg"
//             height={24}
//             width={24}
//             className="h-10 w-10"
//             alt="left-arrows"
//           />
//         </div>

//         <div className="flex flex-col items-start bg-[#F2F5F6] rounded-2xl w-full justify-center">
//           <div className="flex flex-col w-full p-6 gap-3">
//             <div className="flex items-center gap-2">
//               <p className="flex items-center justify-center bg-[#C8E4FC] text-[#224674] txt-18 font-semibold rounded-full h-12 w-12">
//                 JC
//               </p>
//               <div className="flex flex-col items-start">
//                 <p className="txt-18 font-semibold ">Jane Cooper</p>
//                 <p className="text-[#626D6F] txt-16">View Profile</p>
//               </div>
//             </div>

//             {/* {!hasSubscribed ? (
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="w-full max-w-[438px] p-3 bg-[#224674] text-white txt-16 rounded-full"
//               >
//                 Upgrade to Peptide Pro
//               </button>
//             ) : selectedPlan ? (
//               <ManageButton
//                 currentPlan={selectedPlan}
//                 onPlanChange={handlePlanChange}
//               />
//             ) : null}
//           </div> */}
// {isLoading ? (
//     // Show loader or empty space while checking subscription
//     <div className="w-full max-w-[438px] p-3 h-11 flex items-center justify-center">
//       <div className="animate-pulse rounded-full bg-gray-200 w-6 h-6" />
//     </div>
//   ) : !hasSubscribed ? (
//     <button
//       onClick={() => setShowPopup(true)}
//       className="w-full max-w-[438px] p-3 bg-[#224674] text-white txt-16 rounded-full"
//     >
//       Upgrade to Peptide Pro
//     </button>
//   ) : selectedPlan ? (
//     <ManageButton
//       currentPlan={selectedPlan}
//       onPlanChange={handlePlanChange}
//     />
//   ) : null}
// </div>
//           {/* Navigation Links */}
//           <div className="grid grid-cols-1 ">
//             {firstGroup.map(({ label, href, iconSrc }) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="flex items-center gap-3 px-6 py-2.5 transition"
//               >
//                 <Image
//                   src={iconSrc}
//                   alt={label + " icon"}
//                   width={24}
//                   height={24}
//                   className="object-contain"
//                 />
//                 <span className="font-medium txt-18">{label}</span>
//               </a>
//             ))}
//           </div>

//           <div className="w-full bg-gray-200 h-1"></div>

//           <div className="grid grid-cols-1 ">
//             {secondGroup.map(({ label, href, iconSrc }) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="flex items-center gap-3 px-6 py-2.5 transition"
//               >
//                 <Image
//                   src={iconSrc}
//                   alt={label + " icon"}
//                   width={24}
//                   height={24}
//                   className="object-contain"
//                 />
//                 <span className="font-medium txt-18">{label}</span>
//               </a>
//             ))}
//           </div>

//           <div className="w-full bg-gray-200 h-1"></div>

//           <div className="grid grid-cols-1 ">
//             {thirdGroup.map(({ label, href, iconSrc }) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="flex items-center gap-3 px-6 py-2.5 transition"
//               >
//                 <Image
//                   src={iconSrc}
//                   alt={label + " icon"}
//                   width={24}
//                   height={24}
//                   className="object-contain"
//                 />
//                 <span className="font-medium txt-18">{label}</span>
//               </a>
//             ))}

//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition"
//             >
//               <Image
//                 src="/profileIcons/logout.svg"
//                 alt="Logout icon"
//                 width={24}
//                 height={24}
//               />
//               <span className="font-medium txt-18">Logout</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/(user-profile)/Profile/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ManageButton from "@/app/(user-profile)/component/ManageButton";
import DashboardPopup from "@/components/DashboardComponents/Dashboard-popup/page";

const links: {
  label: string;
  href: string;
  iconSrc: string;
}[] = [
  {
    label: "Saved Peptides",
    href: "/profileIcons/saved-peptides",
    iconSrc: "/profileIcons/saved-peptide.svg",
  },
  {
    label: "Provide Locator",
    href: "/profileIcons/Provide-Locator",
    iconSrc: "/profileIcons/map.svg",
  },
  {
    label: "Saved Videos",
    href: "/profileIcons/Saved-Videos",
    iconSrc: "/profileIcons/saved-videos.svg",
  },
  {
    label: "Saved Podcast",
    href: "/profileIcons/Saved-Podcast",
    iconSrc: "/profileIcons/saved-podcast.svg",
  },
  {
    label: "Saved Articles",
    href: "/profileIcons/Saved-Articles",
    iconSrc: "/profileIcons/saved-articles.svg",
  },
  {
    label: "Saved Case Studies",
    href: "/profileIcons/Saved-CaseStudies",
    iconSrc: "/profileIcons/saved-caseStudies.svg",
  },
  {
    label: "Terms & Conditions",
    href: "/profileIcons/Terms-&-Conditions",
    iconSrc: "/profileIcons/terms-condition.svg",
  },
  {
    label: "Privacy Policy",
    href: "/profileIcons/privacy-policy",
    iconSrc: "/profileIcons/privacy.svg",
  },
];

export default function Profile() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly" | null>(
    null
  );

  const firstGroup = links.slice(0, 2);
  const secondGroup = links.slice(2, 6);
  const thirdGroup = links.slice(6);

  // Initialize state from localStorage on client-side only
  //   useEffect(() => {
  //     const hasSub = localStorage.getItem("hasSubscribed") === "true";
  //     const plan = localStorage.getItem("selectedPlan") as "annual" | "monthly" | null;

  //     setHasSubscribed(hasSub);
  //     setSelectedPlan(plan);
  //     setIsLoading(false);
  //   }, []);
  useEffect(() => {
    const hasSub = localStorage.getItem("hasSubscribed") === "true";
    const plan = localStorage.getItem("selectedPlan") as
      | "annual"
      | "monthly"
      | null;

    setHasSubscribed(hasSub);
    setSelectedPlan(plan);
    setIsLoading(false);
  }, []);

  const handleSubscribe = (plan: "annual" | "monthly") => {
    localStorage.setItem("hasSubscribed", "true");
    localStorage.setItem("selectedPlan", plan);
    setHasSubscribed(true);
    setSelectedPlan(plan);
    setShowPopup(false);
  };

  const handlePlanChange = (newPlan: "monthly" | "annual") => {
    localStorage.setItem("selectedPlan", newPlan);
    setSelectedPlan(newPlan);
  };

  function handleLogout() {
    localStorage.removeItem("peptide_user");
    localStorage.removeItem("peptide_user_token");
    localStorage.removeItem("hasSubscribed");
    localStorage.removeItem("selectedPlan");
    router.replace("/Login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 max-md:px-4">
      {showPopup && (
        <DashboardPopup
          onClose={() => setShowPopup(false)}
          onSubscribe={handleSubscribe}
        />
      )}

      <div className="flex flex-col items-start my-4 justify-center bg-white gap-8 rounded-lg w-full max-w-[486px] h-auto">
        {/* Back Button */}
        <div className="cursor-pointer w-full justify-between items-center flex ">
          <Image
            src="/profileIcons/profileBackBtn.svg"
            height={24}
            width={24}
            className="h-10 w-10"
            alt="left-arrows"
          />
        </div>

        <div className="flex flex-col items-start bg-[#F2F5F6] rounded-2xl w-full justify-center">
          <div className="flex flex-col w-full p-6 gap-3">
            <div className="flex items-center gap-2">
              <p className="flex items-center justify-center bg-[#C8E4FC] text-[#224674] txt-18 font-semibold rounded-full h-12 w-12">
                JC
              </p>
              <div className="flex flex-col items-start">
                <p className="txt-18 font-semibold ">Jane Cooper</p>
                <p className="text-[#626D6F] txt-16">View Profile</p>
              </div>
            </div>

            {/* {isLoading ? (
              <div className="w-full max-w-[438px] p-3 h-11 flex items-center justify-center">
                <div className="animate-pulse rounded-full bg-gray-200 w-6 h-6" />
              </div>
            ) : !hasSubscribed ? (
              <button 
                onClick={() => setShowPopup(true)}
                className="w-full max-w-[438px] p-3 bg-[#224674] text-white txt-16 rounded-full"
              >
                Upgrade to Peptide Pro
              </button>
            ) : selectedPlan ? (
              <ManageButton 
                currentPlan={selectedPlan}
                onPlanChange={handlePlanChange}
              />
            ) : null} */}
            {isLoading ? (
              <div className="w-full max-w-[438px] p-3 h-11 flex items-center justify-center">
                <div className="animate-pulse rounded-full bg-gray-200 w-6 h-6" />
              </div>
            ) : hasSubscribed ? (
              <ManageButton
                currentPlan={selectedPlan || "monthly"}
                onPlanChange={handlePlanChange}
              />
            ) : (
              <button
                onClick={() => setShowPopup(true)}
                className="w-full max-w-[438px] p-3 bg-[#224674] text-white txt-16 rounded-full"
              >
                Upgrade to Peptide Pro
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 ">
            {firstGroup.map(({ label, href, iconSrc }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 px-6 py-2.5 transition"
              >
                <Image
                  src={iconSrc}
                  alt={label + " icon"}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="font-medium txt-18">{label}</span>
              </a>
            ))}
          </div>

          <div className="w-full bg-gray-200 h-1"></div>

          <div className="grid grid-cols-1 ">
            {secondGroup.map(({ label, href, iconSrc }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 px-6 py-2.5 transition"
              >
                <Image
                  src={iconSrc}
                  alt={label + " icon"}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="font-medium txt-18">{label}</span>
              </a>
            ))}
          </div>

          <div className="w-full bg-gray-200 h-1"></div>

          <div className="grid grid-cols-1 ">
            {thirdGroup.map(({ label, href, iconSrc }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 px-6 py-2.5 transition"
              >
                <Image
                  src={iconSrc}
                  alt={label + " icon"}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="font-medium txt-18">{label}</span>
              </a>
            ))}

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition"
            >
              <Image
                src="/profileIcons/logout.svg"
                alt="Logout icon"
                width={24}
                height={24}
              />
              <span className="font-medium txt-18">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
