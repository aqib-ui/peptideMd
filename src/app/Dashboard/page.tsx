// import React from "react";
// import RecommendedPeptides from "@/component/DashboardComponents/RecommendedPeptides/RecommendedPeptides";
// import RecommendedArticles from "@/component/DashboardComponents/RecommendedArticles/RecommendedArticles";
// import RecommendedVideos from "@/component/DashboardComponents/RecommendedVideos/RecommendedVideos";
// import StartTracking from "@/component/DashboardComponents/StartTracking/StartTracking";
// import RecommendedPodcasts from "@/component/DashboardComponents/RecommendedPodcasts/RecommendedPodcasts";
// import PepiAI from "@/component/DashboardComponents/PepiAI/PepiAI";
// import RecommendedCaseStudies from "@/component/DashboardComponents/RecommendedCaseStudies/RecommendedCaseStudies";

// const stats = [
//   { label: "Users", value: 120 },
//   { label: "Projects", value: 8 },
//   { label: "Tasks", value: 34 },
//   { label: "Revenue", value: "$2,400" },
// ];

// export default function DashboardPage() {
//   return (
//     <main className="min-h-screen px-2 max-lg:px-4 [@media(min-width:1600px)]:px- ">
//       {/* <h1 className="txt-28">Dashboard</h1> */}
//       <div className="flex max-lg:flex-col gap-6 py-8">
//         {/* left Section */}
//         {/* <div className="flex-2 max-xl:flex-2 flex flex-col gap-6"> */}
//         <div className="w-[75%] max-lg:w-full max-2xl:gap-10  flex flex-col gap-6">
//           <RecommendedVideos />
//           <StartTracking />
//           <RecommendedPodcasts />
//           <PepiAI />
//           <RecommendedCaseStudies />
//         </div>

//         {/* right Section */}
//         {/* <div className="flex-2 max-xl:flex-1 bg-red-400 flex flex-col gap-6"> */}
//         <div className="w-[25%] max-lg:w-full    flex flex-col gap-6 2xl:gap-0 [@media(min-width:1600px)]:gap-6">
//           <RecommendedPeptides />
//           <RecommendedArticles />
//         </div>
//       </div>
//     </main>
//   );
// }

// popup work 18/6/25 ////////////////////
"use client";

import React, { useEffect, useState } from "react";
import RecommendedPeptides from "@/component/DashboardComponents/RecommendedPeptides/RecommendedPeptides";
import RecommendedArticles from "@/component/DashboardComponents/RecommendedArticles/RecommendedArticles";
import RecommendedVideos from "@/component/DashboardComponents/RecommendedVideos/RecommendedVideos";
import StartTracking from "@/component/DashboardComponents/StartTracking/StartTracking";
import RecommendedPodcasts from "@/component/DashboardComponents/RecommendedPodcasts/RecommendedPodcasts";
import PepiAI from "@/component/DashboardComponents/PepiAI/PepiAI";
import RecommendedCaseStudies from "@/component/DashboardComponents/RecommendedCaseStudies/RecommendedCaseStudies";
import DashboardPopup from "../../component/DashboardComponents/Dashboard-popup/page";
import SuccessModal from "@/component/DashboardComponents/SuccessModal/SuccessModal";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const hasSubscribed = localStorage.getItem("hasSubscribed");
    if (!hasSubscribed) {
      setShowPopup(true);
    }
  }, []);

  const handleSubscribe = () => {
    localStorage.setItem("hasSubscribed", "true");
    setShowPopup(false);
    // router.push("/Subscription");
    setShowSuccessModal(true); // show modal instead of navigating
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleMaybeLater = () => {
    setShowPopup(false);
  };

  return (
    <main className="px-10 py-8">
      {showPopup && (
        <DashboardPopup
          onClose={handleMaybeLater}
          onSubscribe={handleSubscribe}
        />
      )}

      {showSuccessModal && <SuccessModal onClose={handleCloseSuccessModal} />}

      <div className="flex max-lg:flex-col gap-6">
        <div className="w-[75%] max-lg:w-full max-2xl:gap-10  flex flex-col gap-6">
          <RecommendedVideos />
          <StartTracking />
          <RecommendedPodcasts />
          <PepiAI />
          <RecommendedCaseStudies />
        </div>

        <div className="w-[25%] max-lg:w-full flex flex-col gap-6 2xl:gap-0 [@media(min-width:1600px)]:gap-6">
          <RecommendedPeptides />
          <RecommendedArticles />
        </div>
      </div>
    </main>
  );
}
