
// src/app/(user-profile)/hooks/useSubscription.ts
import { useState, useEffect } from 'react';

export type PlanType = 'annual' | 'monthly' | null;

export default function useSubscription() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>(null);

  useEffect(() => {
    const hasSub = localStorage.getItem('hasSubscribed') === 'true';
    const plan = localStorage.getItem('selectedPlan') as PlanType;
    
    setHasSubscribed(hasSub);
    setSelectedPlan(plan);
    setIsLoading(false);
  }, []);

  const subscribe = (plan: PlanType) => {
    if (!plan) return;
    
    localStorage.setItem('hasSubscribed', 'true');
    localStorage.setItem('selectedPlan', plan);
    setHasSubscribed(true);
    setSelectedPlan(plan);
  };

  const changePlan = (newPlan: PlanType) => {
    if (!newPlan) return;
    
    localStorage.setItem('selectedPlan', newPlan);
    setSelectedPlan(newPlan);
  };

  const cancelSubscription = () => {
    localStorage.removeItem('hasSubscribed');
    localStorage.removeItem('selectedPlan');
    setHasSubscribed(false);
    setSelectedPlan(null);
  };

  return {
    isLoading,
    hasSubscribed,
    selectedPlan,
    subscribe,
    changePlan,
    cancelSubscription
  };
}