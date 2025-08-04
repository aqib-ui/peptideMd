// src/app/(user-profile)/components/UserInfoCard.tsx
import Image from 'next/image';
import React from 'react';
import ManageButton from './ManageButton';
import useSubscription from '../hooks/useSubscription';
import DashboardPopup from '@/components/DashboardComponents/Dashboard-popup/page';

export default function UserInfoCard() {
  const { 
    isLoading, 
    hasSubscribed, 
    selectedPlan, 
    subscribe,
    changePlan,
    cancelSubscription
  } = useSubscription();
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <div className="flex flex-col w-full p-6 gap-4 bg-gray-50 rounded-2xl">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center bg-blue-100 text-blue-800 font-semibold rounded-full h-12 w-12">
          JC
        </div>
        <div>
          <p className="font-semibold text-lg">Jane Cooper</p>
          <p className="text-gray-600">View Profile</p>
        </div>
      </div>

      {showPopup && (
        <DashboardPopup
          onClose={() => setShowPopup(false)}
          onSubscribe={(plan) => {
            subscribe(plan);
            setShowPopup(false);
          }}
        />
      )}

      {isLoading ? (
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
      ) : hasSubscribed ? (
        <ManageButton 
          currentPlan={selectedPlan} 
          onPlanChange={changePlan}
          onCancelSubscription={cancelSubscription}
        />
      ) : (
        <button 
          onClick={() => setShowPopup(true)}
          className="w-full py-3 bg-[#224674] text-white font-medium rounded-full"
        >
          Upgrade to Peptide Pro
        </button>
      )}
    </div>
  );
}