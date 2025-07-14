"use client";

import React, { useEffect, useState } from "react";
import RecommendedPeptides from "@/components/DashboardComponents/RecommendedPeptides/RecommendedPeptides";
import RecommendedArticles from "@/components/DashboardComponents/RecommendedArticles/RecommendedArticles";
import RecommendedVideos from "@/components/DashboardComponents/RecommendedVideos/RecommendedVideos";
import StartTracking from "@/components/DashboardComponents/StartTracking/StartTracking";
import RecommendedPodcasts from "@/components/DashboardComponents/RecommendedPodcasts/RecommendedPodcasts";
import PepiAI from "@/components/DashboardComponents/PepiAI/PepiAI";
import RecommendedCaseStudies from "@/components/DashboardComponents/RecommendedCaseStudies/RecommendedCaseStudies";
import DashboardPopup from "../../components/DashboardComponents/Dashboard-popup/page";
import SuccessModal from "@/components/DashboardComponents/SuccessModal/SuccessModal";
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
