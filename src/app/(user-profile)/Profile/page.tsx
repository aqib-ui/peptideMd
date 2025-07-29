"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
//   {
//     label: "Logout",
//     href: "/profileIcons/logout",
//     iconSrc: "/profileIcons/logout.svg",
//   },
];

export default function Profile() {
    const router = useRouter();

    const firstGroup  = links.slice(0, 2);  // items 0 & 1
  const secondGroup = links.slice(2, 6);  // items 2,3,4,5
  const thirdGroup  = links.slice(6);     // everything from item 6 onward

  function handleLogout() {
    // remove both items you’ve stored
    localStorage.removeItem("peptide_user");
    localStorage.removeItem("peptide_user_token");

    // optional: if you stored anything else, you can clear it all
    // localStorage.clear();

    // redirect back to login (or home) page
    router.replace("/login");
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 max-md:px-4">
      <div className="flex flex-col items-start justify-center bg-white gap-8 rounded-lg w-full max-w-[486px] h-auto">
        {/* Back Button */}
        <div className="cursor-pointer w-full">
          <Image
            src="/profileIcons/profileBackBtn.svg"
            height={24}
            width={24}
            className="h-10 w-10"
            alt="left-arrows"
          />
        </div>

        <div className="flex flex-col items-start  bg-[#F2F5F6] rounded-2xl w-full justify-center">
          {/* top section *changeable* */}
          <div className="flex flex-col w-full p-2   gap-3">
            <div className="flex items-center gap-2">
              <p className="flex items-center justify-center bg-[#C8E4FC] text-[#224674] txt-18 font-semibold rounded-full h-12 w-12">
                JC
              </p>
              <div className="flex flex-col items-start">
                <p className="txt-18 font-semibold ">Jane Cooper</p>
                <p className="text-[#626D6F] txt-16">View Profile</p>
              </div>
            </div>
            <button className=" w-full max-w-[438px] p-3 bg-[#224674] text-white txt-16 rounded-full">
              Upgrade to Peptide Pro
            </button>
          </div>

          {/*  */}
          <div className="grid grid-cols-1 ">
            {firstGroup.map(({ label, href, iconSrc }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 p-4   transition"
              >
                {/* You can style SVG via Tailwind classes */}
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
                className="flex items-center gap-3 p-4   transition"
              >
                {/* You can style SVG via Tailwind classes */}
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
          
 {/*  */}
          <div className="grid grid-cols-1 ">
            {thirdGroup.map(({ label, href, iconSrc }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 p-4   transition"
              >
                {/* You can style SVG via Tailwind classes */}
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
            
            {/* Logout button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-4 hover:bg-gray-50 transition"
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
