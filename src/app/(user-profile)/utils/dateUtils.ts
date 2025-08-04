// src/app/(user-profile)/utils/dateUtils.ts
export const getNextBillingDate = (plan: 'monthly' | 'annual' | null): Date => {
  const today = new Date();
  const result = new Date(today);

  if (plan === 'monthly') {
    result.setMonth(result.getMonth() + 1);
    if (result.getDate() !== today.getDate()) {
      result.setDate(0);
    }
  } else if (plan === 'annual') {
    result.setFullYear(result.getFullYear() + 1);
  }

  return result;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};