// src/app/(user-profile)/Profile/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UserInfoCard from "../component/UserInfoCard";
import ProfileLinkGroup from "../component/ProfileLinkGroup";

const links = [
  {
    label: "Saved Peptides",
    href: "#",
    iconSrc: "/profileIcons/saved-peptide.svg",
  },
  { label: "Provider Locator", href: "#", iconSrc: "/profileIcons/map.svg" },
  {
    label: "Saved Videos",
    href: "#",
    iconSrc: "/profileIcons/saved-videos.svg",
  },
  {
    label: "Saved Podcasts",
    href: "#",
    iconSrc: "/profileIcons/saved-podcast.svg",
  },
  {
    label: "Saved Articles",
    href: "#",
    iconSrc: "/profileIcons/saved-articles.svg",
  },
  {
    label: "Saved Case Studies",
    href: "#",
    iconSrc: "/profileIcons/saved-caseStudies.svg",
  },
  {
    label: "Terms & Conditions",
    href: "#",
    iconSrc: "/profileIcons/terms-condition.svg",
  },
  { label: "Privacy Policy", href: "#", iconSrc: "/profileIcons/privacy.svg" },
];

export default function Profile() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("peptide_user");
    localStorage.removeItem("peptide_user_token");
    localStorage.removeItem("hasSubscribed");
    localStorage.removeItem("selectedPlan");
    router.replace("/login");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-md  ">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => router.back()} className="p-2">
            <Image
              src="/profileIcons/profileBackBtn.svg"
              width={40}
              height={40}
              alt="Back"
            />
          </button>
          {/* <h1 className="text-xl font-bold">Your Profile</h1> */}
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>

        <div className="bg-[#F2F5F6] rounded-2xl overflow-hidden">
          <UserInfoCard />

          <div className="py-4 ">
            <ProfileLinkGroup links={links.slice(0, 2)} />
            <div className="border-t-2 border-gray-200 my-1" />
            <ProfileLinkGroup links={links.slice(2, 6)} />
            <div className="border-t-2 border-gray-200 my-1" />
            <ProfileLinkGroup links={links.slice(6)} />

            <button
              onClick={handleLogout}
              //   className="flex items-center gap-3 w-full px-6 py-4 text-red-600 hover:bg-gray-50 transition-colors"
              className="flex items-center gap-3 w-full px-6 py-4 text-[#25292A]"
            >
              <Image
                src="/profileIcons/logout.svg"
                width={24}
                height={24}
                alt="Logout"
              />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
