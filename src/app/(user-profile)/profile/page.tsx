"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EditProfile from "../ProfileComponents/EditProfile";
import { Toaster } from "react-hot-toast";
import ChangePassword from "../ProfileComponents/ChangePassword";

type LinkItem = {
  label: string;
  iconSrc: string;
  href?: string;
  action?: () => void;
};

export default function Profile() {
  const router = useRouter();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("peptide_user");
    localStorage.removeItem("peptide_user_token");
    router.replace("/Login");
  };

  /** Location check logic **/
  const handleProviderLocator = async () => {
    // Check location permission status
    const permission = await navigator.permissions.query({
      name: "geolocation",
    });
    console.log(permission);

    if (permission.state === "granted") {
      // User already allowed location → direct redirect
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        router.push(`/provider-locator?lat=${lat}&lng=${lng}`);
      });
    } else if (permission.state === "prompt") {
      // First time → Show modal
      setShowLocationModal(true);
    } else if (permission.state === "denied") {
      alert(
        "Location access is blocked. Please enable it in browser settings to use this feature."
      );
    }
  };

  /** Allow button logic **/
  const handleAllow = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setShowLocationModal(false);
        router.push(`/provider-locator?lat=${lat}&lng=${lng}`);
      },
      () => {
        alert("Location access required to continue");
      }
    );
  };

  /** Groups + items **/
  const groups: LinkItem[][] = [
    [
      {
        label: "Saved Peptides",
        href: "/Dashboard/peptides/saved-peptides",
        iconSrc: "/profileIcons/saved-peptide.svg",
      },
      {
        label: "Provider Locator",
        iconSrc: "/profileIcons/map.svg",
        action: handleProviderLocator,
      },
    ],
    [
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
    ],
    [
      {
        label: "Change Password",
        iconSrc: "/profileIcons/lock.svg",
        action: () => setChangePassword(true),
      },
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
        iconSrc: "/profileIcons/terms-condition.svg",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        iconSrc: "/profileIcons/privacy.svg",
      },
    ],
  ];

  return (
    <div className="flex flex-col items-center px-2 py-10 max-md:px-4 relative">
      <Toaster position="top-center" />
      <div className="bg-white rounded-lg w-full max-w-[486px] gap-8">
        {/* Back button */}
        <div onClick={() => router.back()} className="cursor-pointer mb-3 p-2">
          <Image
            src="/profileIcons/profileBackBtn.svg"
            height={24}
            width={24}
            alt="back"
            className="h-10 w-10"
          />
        </div>
        {showEditProfileModal && (
          <EditProfile
            showEditProfileModal={showEditProfileModal}
            setShowEditProfileModal={setShowEditProfileModal}
          />
        )}

        <div className="bg-[#F2F5F6] rounded-2xl w-full">
          {/* Profile top section */}
          <div className="flex flex-col w-full p-4 gap-3">
            <div className="flex items-center gap-2">
              <p className="flex items-center justify-center bg-[#C8E4FC] text-[#224674] txt-18 font-semibold rounded-full h-12 w-12">
                JC
              </p>
              <div>
                <p className="txt-18 font-semibold">Jane Cooper</p>
                <p
                  className="text-[#626D6F] txt-16 cursor-pointer"
                  onClick={() => setShowEditProfileModal(true)}
                >
                  Edit Profile
                </p>
              </div>
            </div>
            <button className="w-full p-3 bg-[#224674] text-white txt-16 rounded-full">
              Upgrade to Peptide Pro
            </button>
          </div>

          {/* Dynamic Groups */}
          {groups.map((group, idx) => (
            <div key={idx}>
              {group.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (item.action) item.action();
                    else if (item.href) router.push(item.href);
                  }}
                  className="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 transition"
                >
                  <Image
                    src={item.iconSrc}
                    alt={`${item.label} icon`}
                    width={24}
                    height={24}
                  />
                  <span className="font-medium txt-18">{item.label}</span>
                </div>
              ))}
              {/* Divider */}
              {idx !== groups.length - 1 && (
                <div className="w-full bg-gray-200 h-1"></div>
              )}
            </div>
          ))}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-4 w-full text-left hover:bg-gray-50"
          >
            <Image
              src="/profileIcons/logout.svg"
              alt="Logout"
              width={24}
              height={24}
            />
            <span className="font-medium txt-18">Logout</span>
          </button>
        </div>
      </div>

      {/* Change Password */}
      {changePassword && (
        <ChangePassword
          changePassword={changePassword}
          setChangePassword={setChangePassword}
        />
      )}

      {/* Modal */}
      {showLocationModal && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40 animate-fadeIn"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 animate-slideUp">
            <div className="bg-white rounded-xl p-6 text-center w-80 shadow-lg">
              <div className="flex justify-center mb-4">
                <Image
                  src="/profileIcons/location-pin.svg"
                  width={60}
                  height={60}
                  alt="location"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2 text-[#224674]">
                Enable Location
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Allow Peptide MD to access your location while you are using the
                app and show you nearby providers.
              </p>
              <button
                onClick={handleAllow}
                className="bg-[#224674] text-white rounded-full px-6 py-2 w-full"
              >
                Allow
              </button>
              <button
                onClick={() => setShowLocationModal(false)}
                className="bg-gray-300 text-[#224674] rounded-full px-6 py-2 w-full mt-2"
              >
                Back to Profile
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

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

//   const firstGroup = links.slice(0, 2); // items 0 & 1
//   const secondGroup = links.slice(2, 6); // items 2,3,4,5
//   const thirdGroup = links.slice(6); // everything from item 6 onward

//   function handleLogout() {
//     // remove both items you’ve stored
//     localStorage.removeItem("peptide_user");
//     localStorage.removeItem("peptide_user_token");
//     router.replace("/Login");
//   }

//   return (
//     <div className="flex flex-col items-center justify-center  px-2 max-md:px-4 py-10 ">
//       <div className="flex flex-col items-start justify-center bg-white gap-8 rounded-lg w-full max-w-[486px] h-auto">
//         {/* Back Button */}
//         <div onClick={() => router.back()} className="cursor-pointer mb-3">
//           <Image
//             src="/profileIcons/profileBackBtn.svg"
//             height={24}
//             width={24}
//             className="h-10 w-10"
//             alt="left-arrows"
//           />
//         </div>

//         <div className="flex flex-col pb-2 items-start  bg-[#F2F5F6] rounded-2xl w-full justify-center">
//           {/* top section *changeable* */}
//           <div className="flex flex-col w-full p-4   gap-3">
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

//           {/*  */}
//           <div className="grid grid-cols-1 ">
//             {firstGroup.map(({ label, href, iconSrc }) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="flex items-center gap-3 px-6 py-2.5   transition"
//               >
//                 {/* You can style SVG via Tailwind classes */}
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
//                 className="flex items-center gap-3 px-6 py-2.5   transition"
//               >
//                 {/* You can style SVG via Tailwind classes */}
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

//           {/*  */}
//           <div className="grid grid-cols-1 ">
//             {thirdGroup.map(({ label, href, iconSrc }) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="flex items-center gap-3 px-6 py-2.5  transition"
//               >
//                 {/* You can style SVG via Tailwind classes */}
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

//             {/* Logout button */}
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-3 px-6 py-4 "
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
