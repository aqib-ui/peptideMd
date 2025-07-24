"use client";

import React, { useEffect, useState } from "react";
import RecommendedPeptides from "@/components/DashboardComponents/RecommendedPeptides/RecommendedPeptides";
import RecommendedArticles from "@/components/DashboardComponents/RecommendedArticles/RecommendedArticles";
import RecommendedVideos from "@/components/DashboardComponents/RecommendedVideos/RecommendedVideos";
import StartTracking from "@/components/DashboardComponents/StartTracking/StartTracking";
import RecommendedPodcasts from "@/components/DashboardComponents/RecommendedPodcasts/RecommendedPodcasts";
import PepiAI from "@/components/DashboardComponents/PepiAI/PepiAI";
import RecommendedCaseStudies from "@/components/DashboardComponents/RecommendedCaseStudies/RecommendedCaseStudies";

import SuccessModal from "@/components/DashboardComponents/SuccessModal/SuccessModal";
import { useRouter } from "next/navigation";
import DashboardPopup from "@/components/DashboardComponents/Dashboard-popup/page";

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

      <div className="flex flex-col xl:flex-row gap-6 ">
        <div className="w-full xl:w-[75%]   flex flex-col gap-9 xl:gap-0  xl:justify-between">
          <RecommendedVideos />
          <StartTracking />
          <RecommendedPodcasts />
          <PepiAI />
          <RecommendedCaseStudies />
        </div>

        <div className="xl:w-[25%] w-full flex flex-col  xl:justify-between">
          <RecommendedPeptides />
          <RecommendedArticles />
        </div>
      </div>
    </main>
  );
}
